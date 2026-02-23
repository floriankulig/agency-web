import { useEffect, useRef } from 'react'

// ─── Shaders ──────────────────────────────────────────────────────────────────

const VERT_SRC = /* glsl */ `
  attribute vec2 a_pos;
  void main() {
    gl_Position = vec4(a_pos, 0.0, 1.0);
  }
`

const FRAG_SRC = /* glsl */ `
  precision mediump float;

  uniform float u_time;
  uniform vec2  u_res;
  uniform float u_grainFps;

  // ── Value noise ──────────────────────────────────────────────────────────
  float hash(vec2 p) {
    p = fract(p * vec2(127.1, 311.7));
    p += dot(p, p + 74.29);
    return fract(p.x * p.y);
  }

  float vnoise(vec2 p) {
    vec2 i = floor(p);
    vec2 f = fract(p);
    vec2 u = f * f * (3.0 - 2.0 * f); // smoothstep
    return mix(
      mix(hash(i),             hash(i + vec2(1.0, 0.0)), u.x),
      mix(hash(i + vec2(0.0, 1.0)), hash(i + vec2(1.0, 1.0)), u.x),
      u.y
    );
  }

  // Fractional Brownian Motion – 4 octaves, cheap enough on mediump
  float fbm(vec2 p) {
    float v = 0.0, a = 0.5;
    for (int i = 0; i < 4; i++) {
      v += a * vnoise(p);
      p *= 2.1;
      a *= 0.5;
    }
    return v;
  }

  // ── Per-pixel film grain (hash-based, animates every frame) ─────────────
  float grain(vec2 seed) {
    return fract(sin(dot(seed, vec2(127.1, 311.7))) * 43758.5453);
  }

  // ── Radial blob – wide falloff for soft, cohesive blending ──────────────
  float blob(vec2 uv, vec2 center, float radius) {
    return 1.0 - smoothstep(radius * 0.15, radius, length(uv - center));
  }

  void main() {
    vec2 uv = gl_FragCoord.xy / u_res;
    // Flip Y so origin is top-left (optional – keep consistent with CSS)
    uv.y = 1.0 - uv.y;

    float t = u_time * 0.4; // overall speed – ~0.12 was too slow to notice

    // ── 7 color centers + 4 dark spots ─────────────────────────────────────
    vec2 c0 = vec2(0.08 + sin(t * 0.71) * 0.12,  0.08 + cos(t * 0.53) * 0.10);
    vec2 c1 = vec2(0.85 + sin(t * 0.43 + 1.2) * 0.10, 0.25 + cos(t * 0.61) * 0.14);
    vec2 c2 = vec2(0.50 + sin(t * 0.29 + 2.4) * 0.18, 0.90 + cos(t * 0.37 + 1.7) * 0.07);
    vec2 c3 = vec2(0.25 + sin(t * 0.55 + 3.6) * 0.10, 0.55 + cos(t * 0.47 + 0.9) * 0.12);
    // Additional color blobs
    vec2 c4 = vec2(0.70 + sin(t * 0.34 + 0.8) * 0.13, 0.70 + cos(t * 0.48 + 4.1) * 0.11);
    vec2 c5 = vec2(0.35 + sin(t * 0.62 + 5.3) * 0.11, 0.18 + cos(t * 0.39 + 2.7) * 0.09);
    vec2 c6 = vec2(0.96 + sin(t * 0.27 + 1.9) * 0.08, 0.88 + cos(t * 0.57 + 0.3) * 0.14);
    // Dark blobs
    vec2 d0 = vec2(0.60 + sin(t * 0.38 + 0.5) * 0.14, 0.15 + cos(t * 0.44 + 2.1) * 0.12);
    vec2 d1 = vec2(0.15 + sin(t * 0.52 + 4.2) * 0.10, 0.80 + cos(t * 0.31 + 1.3) * 0.10);
    vec2 d2 = vec2(0.75 + sin(t * 0.23 + 5.8) * 0.12, 0.65 + cos(t * 0.59 + 3.5) * 0.13);
    vec2 d3 = vec2(0.42 + sin(t * 0.46 + 6.4) * 0.10, 0.42 + cos(t * 0.33 + 1.6) * 0.10);

    float b0 = blob(uv, c0, 0.75);
    float b1 = blob(uv, c1, 0.65);
    float b2 = blob(uv, c2, 0.55);
    float b3 = blob(uv, c3, 0.50);
    float b4 = blob(uv, c4, 0.60);
    float b5 = blob(uv, c5, 0.45);
    float b6 = blob(uv, c6, 0.50);
    float bd0 = blob(uv, d0, 0.40);
    float bd1 = blob(uv, d1, 0.45);
    float bd2 = blob(uv, d2, 0.35);
    float bd3 = blob(uv, d3, 0.38);

    // ── Brand colors (sRGB hex → float, no gamma pre-encoding) ──────────────
    // Base       #38756E  →  (0.220, 0.459, 0.431)
    // Dark       #034A1C  →  (0.012, 0.290, 0.110)
    // Bright     #54DD84  →  (0.329, 0.867, 0.518)
    // Cool       #95FAE2  →  (0.584, 0.980, 0.886)
    // Lime       #C4EE45  →  (0.769, 0.933, 0.271)
    vec3 cBase = vec3(0.220, 0.459, 0.431);
    vec3 cDark = vec3(0.012, 0.290, 0.110);
    vec3 cTeal = vec3(0.329, 0.867, 0.518);
    vec3 cMint = vec3(0.584, 0.980, 0.886);
    vec3 cLime = vec3(0.769, 0.933, 0.271);

    // Blend blobs over the base
    vec3 col = cBase;
    col = mix(col, cTeal, b0 * 0.32);
    col = mix(col, cMint, b1 * 0.22);
    col = mix(col, cTeal, b3 * 0.18);
    // Lime – more visible now
    col = mix(col, cLime, b2 * 0.28);
    // New blobs: teal fill, lime patch, cool mint corner
    col = mix(col, cTeal, b4 * 0.24);
    col = mix(col, cLime, b5 * 0.22);
    col = mix(col, cMint, b6 * 0.18);
    // Dark spots pull back toward base
    col = mix(col, cDark, bd0 * 0.28);
    col = mix(col, cDark, bd1 * 0.50);
    col = mix(col, cDark, bd2 * 0.45);
    col = mix(col, cDark, bd3 * 0.48);

    // ── Animated film grain / noise overlay ────────────────────────────────
    // Quantize coord → 2px clusters; step time only when u_grainFps > 0
    float GRAIN_SIZE  = 2.0;
    vec2  quantized   = floor(gl_FragCoord.xy / GRAIN_SIZE);
    float steppedTime = u_grainFps > 0.0 ? floor(u_time * u_grainFps) : 0.0;
    float g = grain(quantized + vec2(steppedTime * 23.71, steppedTime * 17.43));
    col += (g - 0.5) * 0.05;

    // ── Very subtle domain-warped brightness wave ───────────────────────────
    float warp = fbm(uv * 3.0 + t * 0.3) * 0.06;
    col += warp;

    // Clamp – inputs are already sRGB floats, no gamma encoding needed
    col = clamp(col, 0.0, 1.0);

    gl_FragColor = vec4(col, 1.0);
  }
`

// ─── WebGL helpers ────────────────────────────────────────────────────────────

function compileShader(gl: WebGLRenderingContext, type: number, src: string) {
  const sh = gl.createShader(type)
  if (!sh) throw new Error('Failed to create shader')
  gl.shaderSource(sh, src)
  gl.compileShader(sh)
  if (!gl.getShaderParameter(sh, gl.COMPILE_STATUS)) {
    throw new Error(gl.getShaderInfoLog(sh) ?? 'shader error')
  }
  return sh
}

function createProgram(gl: WebGLRenderingContext) {
  const prog = gl.createProgram()
  if (!prog) throw new Error('Failed to create program')
  gl.attachShader(prog, compileShader(gl, gl.VERTEX_SHADER, VERT_SRC))
  gl.attachShader(prog, compileShader(gl, gl.FRAGMENT_SHADER, FRAG_SRC))
  gl.linkProgram(prog)
  if (!gl.getProgramParameter(prog, gl.LINK_STATUS)) {
    throw new Error(gl.getProgramInfoLog(prog) ?? 'link error')
  }
  return prog
}

// ─── Component ────────────────────────────────────────────────────────────────

interface Props {
  /** z-index of the canvas (default -1 so it stays behind content) */
  zIndex?: number
  /**
   * Render at a lower resolution for extra perf (e.g. 0.5 = half res).
   * The gradient is smooth enough that 0.4–0.6 is indistinguishable.
   */
  pixelRatio?: number
  /**
   * How many times per second the grain pattern changes.
   * 0 = fully static (seed never changes).
   * 0.4 = changes ~every 2.5 s (default, subtle).
   * 12  = cinematic flicker.
   */
  grainFps?: number
}

export function MovingBackground({ zIndex = -1, pixelRatio, grainFps = 0 }: Props) {
  const canvasRef = useRef<HTMLCanvasElement>(null)

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return

    const gl = canvas.getContext('webgl', {
      antialias: false, // not needed for a blur-y bg
      alpha: false,
      depth: false,
      stencil: false,
      powerPreference: 'low-power', // battery-friendly on mobile
    })
    if (!gl) return // silently fall back to CSS gradient

    const prog = createProgram(gl)
    // biome-ignore lint/correctness/useHookAtTopLevel: WebGL API method, not a React hook
    gl.useProgram(prog)

    // Full-screen quad (two triangles)
    const buf = gl.createBuffer()
    if (!buf) return
    gl.bindBuffer(gl.ARRAY_BUFFER, buf)
    gl.bufferData(
      gl.ARRAY_BUFFER,
      new Float32Array([-1, -1, 1, -1, -1, 1, -1, 1, 1, -1, 1, 1]),
      gl.STATIC_DRAW,
    )

    const aPos = gl.getAttribLocation(prog, 'a_pos')
    gl.enableVertexAttribArray(aPos)
    gl.vertexAttribPointer(aPos, 2, gl.FLOAT, false, 0, 0)

    const uTime = gl.getUniformLocation(prog, 'u_time')
    const uRes = gl.getUniformLocation(prog, 'u_res')
    const uGrainFps = gl.getUniformLocation(prog, 'u_grainFps')
    gl.uniform1f(uGrainFps, grainFps)

    // ── Resize observer – keeps canvas pixel-perfect ───────────────────────
    const dpr = pixelRatio ?? Math.min(window.devicePixelRatio ?? 1, 2)

    const ro = new ResizeObserver(([entry]) => {
      const { width, height } = entry.contentRect
      canvas.width = Math.round(width * dpr)
      canvas.height = Math.round(height * dpr)
      gl.viewport(0, 0, canvas.width, canvas.height)
    })
    ro.observe(canvas)

    // ── Render loop ────────────────────────────────────────────────────────
    let raf = 0
    const start = performance.now()

    const render = () => {
      gl.uniform1f(uTime, (performance.now() - start) / 1000)
      gl.uniform2f(uRes, canvas.width, canvas.height)
      gl.drawArrays(gl.TRIANGLES, 0, 6)
      raf = requestAnimationFrame(render)
    }
    raf = requestAnimationFrame(render)

    return () => {
      cancelAnimationFrame(raf)
      ro.disconnect()
      gl.deleteBuffer(buf)
      gl.deleteProgram(prog)
    }
  }, [pixelRatio, grainFps])

  return (
    <canvas
      ref={canvasRef}
      style={{
        position: 'absolute',
        inset: 0,
        width: '100%',
        height: '100%',
        zIndex,
        // CSS fallback if WebGL unavailable
        background: 'linear-gradient(99deg, #1A2E27 0%, #38756E 50%, #243D33 100%)',
        display: 'block',
      }}
      aria-hidden
    />
  )
}
