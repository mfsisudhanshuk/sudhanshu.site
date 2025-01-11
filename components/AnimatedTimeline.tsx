'use client'

import { useEffect, useRef } from 'react'
import { Briefcase, Calendar, Train } from 'lucide-react'
import { Theme } from '../styles/themes'

export default function AnimatedTimeline({ experience, theme }: { experience: any[], theme: Theme }) {
  const timelineRef = useRef(null)
  const trainRef = useRef(null)

  useEffect(() => {
    const timeline = timelineRef.current
    const train = trainRef.current
    if (!timeline || !train) return

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('animate-draw')
          train.classList.add('animate-train')
        }
      })
    }, { threshold: 0.1 })

    const items = timeline.querySelectorAll('.timeline-item')
    items.forEach((item) => observer.observe(item))

    return () => observer.disconnect()
  }, [experience])

  return (
    <div ref={timelineRef} className="relative">
      <div 
        ref={trainRef}
        className="absolute left-0 top-0 z-10 transition-all duration-1000 ease-in-out"
        style={{ transform: 'translateY(-50%)' }}
      >
        <Train className={`${theme.icon} w-8 h-8`} />
      </div>
      {experience.map((job, index) => (
        <div key={index} className="timeline-item mb-8 flex opacity-0 transition-opacity duration-1000">
          <div className={`w-12 h-12 rounded-full ${theme.iconBackground} flex items-center justify-center mr-4 z-10`}>
            <Briefcase className={theme.icon} size={24} />
          </div>
          <div className="flex-grow">
            <h3 className={`font-semibold ${theme.text}`}>{job.title}</h3>
            <p className={theme.text}>{job.company}</p>
            <p className={`flex items-center ${theme.text}`}>
              <Calendar size={16} className="mr-2" /> {job.year}
            </p>
            <p className="mt-2 text-gray-700">{job.description}</p>
          </div>
          {index < experience.length - 1 && (
            <div className={`absolute left-6 top-12 bottom-0 w-0.5 ${theme.timeline.line} timeline-line`} />
          )}
        </div>
      ))}
      <style jsx>{`
        .timeline-item {
          opacity: 0;
          transform: translateY(20px);
          transition: opacity 0.5s ease, transform 0.5s ease;
        }
        .timeline-item.animate-draw {
          opacity: 1;
          transform: translateY(0);
        }
        .timeline-line {
          height: 0;
          transition: height 1s ease;
        }
        .animate-draw .timeline-line {
          height: 100%;
        }
        .animate-train {
          animation: moveTrainAlongTimeline 5s forwards;
        }
        @keyframes moveTrainAlongTimeline {
          0% {
            transform: translateY(0);
          }
          100% {
            transform: translateY(calc(100% - 32px));
          }
        }
      `}</style>
    </div>
  )
}

