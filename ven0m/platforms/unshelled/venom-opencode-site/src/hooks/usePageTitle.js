import { useEffect } from 'react'

export default function usePageTitle(title) {
  useEffect(() => {
    const base = 'VENOM × OpenCode'
    document.title = title ? `${title} — ${base}` : base
  }, [title])
}
