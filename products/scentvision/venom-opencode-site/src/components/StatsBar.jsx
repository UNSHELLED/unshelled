import { useEffect, useState, useRef } from 'react'
import { colors, fonts } from '../theme/tokens'

export default function StatsBar({ stats = [] }) {
  const [visible, setVisible] = useState(false)
  const ref = useRef(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true)
          observer.disconnect()
        }
      },
      { threshold: 0.2 }
    )

    if (ref.current) observer.observe(ref.current)
    return () => observer.disconnect()
  }, [])

  return (
    <div
      ref={ref}
      style={{
        display: 'flex',
        flexWrap: 'wrap',
        gap: '32px',
        justifyContent: 'center',
      }}
    >
      {stats.map((stat, i) => (
        <div
          key={stat.label}
          style={{
            textAlign: 'center',
            opacity: visible ? 1 : 0,
            transform: visible ? 'translateY(0)' : 'translateY(10px)',
            transition: `opacity 0.4s ${i * 0.1}s, transform 0.4s ${i * 0.1}s`,
          }}
        >
          <div style={{
            fontFamily: fonts.display,
            fontSize: '2.5rem',
            fontWeight: 600,
            color: colors.amber,
          }}>
            {visible ? <AnimatedNumber value={stat.value} /> : 0}
          </div>
          <div style={{
            fontSize: '0.875rem',
            color: colors.ghost,
            marginTop: '4px',
          }}>
            {stat.label}
          </div>
        </div>
      ))}
    </div>
  )
}

function AnimatedNumber({ value }) {
  const [display, setDisplay] = useState(0)
  const num = parseInt(value.replace(/\D/g, ''), 10)
  const suffix = value.replace(/[\d,]/g, '')

  useEffect(() => {
    const duration = 1000
    const start = performance.now()

    const animate = (now) => {
      const progress = Math.min((now - start) / duration, 1)
      setDisplay(Math.floor(progress * num))
      if (progress < 1) requestAnimationFrame(animate)
    }

    requestAnimationFrame(animate)
  }, [num])

  return `${display.toLocaleString()}${suffix}`
}
