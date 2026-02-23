import { StyledBlurredCircle } from '@/components/ui/BlurredCircle'

export const HeroCircles = () => {
  return (
    <>
      <StyledBlurredCircle size={50} color="#042f13" style={{ left: '-10%', top: '-10%' }} />
      <StyledBlurredCircle
        size={20}
        color="#95FAE2"
        ar={1.618}
        style={{ left: '25%', top: '25%' }}
      />

      <StyledBlurredCircle size={65} color="#2d8f4f" style={{ right: '15%', top: '05%' }} />
      <StyledBlurredCircle
        size={35}
        color="#042f13"
        ar={1 / 1.618}
        style={{ left: '25%', bottom: '-15%' }}
      />
      <StyledBlurredCircle
        size={45}
        color="#042f13"
        ar={1.618}
        style={{ left: '35%', bottom: '-15%' }}
      />
      <StyledBlurredCircle size={20} color="#C4EE45" style={{ right: '-60px', bottom: '-60px' }} />
    </>
  )
}
