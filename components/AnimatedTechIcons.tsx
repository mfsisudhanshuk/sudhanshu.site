'use client'

import { useEffect, useRef } from 'react'
import { Code, Terminal, Globe, Database, Cpu } from 'lucide-react'
import { Theme } from '../styles/themes'

export default function AnimatedTechIcons({ theme }: { theme: Theme }) {
  const containerRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const container = containerRef.current
    if (!container) return

    const icons = container.children
    const animateIcon = (icon: HTMLElement, index: number) => {
      const angle = (index / icons.length) * 2 * Math.PI
      const radius = 50
      const duration = 20 + Math.random() * 10
      const delay = index * -4

      icon.style.animation = `
        float ${duration}s ${delay}s infinite linear,
        pulse 2s ${delay}s infinite ease-in-out
      `

      const centerX = 50
      const centerY = 50
      const x = centerX + radius * Math.cos(angle)
      const y = centerY + radius * Math.sin(angle)
      
      icon.style.left = `${x}%`
      icon.style.top = `${y}%`
    }

    Array.from(icons).forEach((icon, index) => {
      animateIcon(icon as HTMLElement, index)
    })
  }, [])

  return (
    <div 
      ref={containerRef}
      className="absolute inset-0 overflow-hidden opacity-50"
      style={{
        background: 'radial-gradient(circle at center, rgba(255,255,255,0.1) 0%, transparent 70%)'
      }}
    >
      <style jsx global>{`
        @keyframes float {
          0% { transform: translate(0, 0) rotate(0deg); }
          50% { transform: translate(-20px, -20px) rotate(180deg); }
          100% { transform: translate(0, 0) rotate(360deg); }
        }
        @keyframes pulse {
          0% { transform: scale(1); }
          50% { transform: scale(1.1); }
          100% { transform: scale(1); }
        }
      `}</style>
      {[Code, Terminal, Globe, Database, Cpu].map((Icon, index) => (
        <div
          key={index}
          className={`absolute ${theme.floatingIcons} transition-colors duration-300`}
          style={{
            width: '32px',
            height: '32px',
          }}
        >
          <Icon size={32} />
        </div>
      ))}
    </div>
  )
}

