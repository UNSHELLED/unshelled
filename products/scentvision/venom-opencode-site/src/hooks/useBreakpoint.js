import { useState, useEffect, useCallback } from 'react'
import { B } from '../theme/tokens'

export default function useBreakpoint() {
  const getBreakpoint = useCallback(() => {
    if (typeof window === 'undefined') return { isMobile: false, isTablet: false, isDesktop: true }
    const width = window.innerWidth
    return {
      isMobile: width <= B.mobileMax,
      isTablet: width > B.mobileMax && width <= B.tabletMax,
      isDesktop: width >= B.desktopMin,
    }
  }, [])

  const [breakpoint, setBreakpoint] = useState(getBreakpoint)

  useEffect(() => {
    const handleResize = () => setBreakpoint(getBreakpoint())
    window.addEventListener('resize', handleResize)
    return () => window.removeEventListener('resize', handleResize)
  }, [getBreakpoint])

  return breakpoint
}
