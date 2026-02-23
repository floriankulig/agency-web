import styled from 'styled-components'

export const StyledBlurredCircle = styled.div<{ size?: number; color?: string; ar?: number }>`
  --size: ${(props) => (props.size ? `${props.size}%` : '400px')};
  position: absolute;
  /* width: calc(var(--size) * ${(props) => props.ar || 1}); */
  height: var(--size);
  aspect-ratio:${(props) => props.ar || 1};
  border-radius: 50%;
  filter: blur(999px);
  background-color: ${(props) => props.color || '#012B10'};
`
