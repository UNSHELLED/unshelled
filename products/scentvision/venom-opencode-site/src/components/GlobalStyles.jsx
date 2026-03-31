import { useEffect } from 'react'
import { colors, fonts } from '../theme/tokens'

export default function GlobalStyles() {
  useEffect(() => {
    const style = document.createElement('style')
    style.textContent = `
      *, *::before, *::after {
        box-sizing: border-box;
        margin: 0;
        padding: 0;
      }
      
      html {
        scroll-behavior: smooth;
      }
      
      @media (prefers-reduced-motion: reduce) {
        html { scroll-behavior: auto; }
        *, *::before, *::after {
          animation-duration: 0.01ms !important;
          animation-iteration-count: 1 !important;
          transition-duration: 0.01ms !important;
        }
      }
      
      body {
        font-family: ${fonts.body};
        background: ${colors.void};
        color: ${colors.bone};
        line-height: 1.6;
        -webkit-font-smoothing: antialiased;
        -moz-osx-font-smoothing: grayscale;
      }
      
      a {
        color: inherit;
        text-decoration: none;
      }
      
      button {
        font-family: inherit;
        cursor: pointer;
        border: none;
        background: none;
      }
      
      code, pre {
        font-family: ${fonts.mono};
      }
      
      ::selection {
        background: ${colors.amberDim};
        color: ${colors.bone};
      }
      
      :focus-visible {
        outline: 2px solid ${colors.amber};
        outline-offset: 2px;
      }
    `
    document.head.appendChild(style)
    return () => style.remove()
  }, [])
  
  return null
}
