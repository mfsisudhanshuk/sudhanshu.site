"use client";

import { useEffect, useRef, RefObject, AwaitedReactNode, JSXElementConstructor, Key, ReactElement, ReactNode, ReactPortal } from "react";
import { Briefcase, Calendar, CheckCircle } from "lucide-react";
import { Theme } from "../styles/themes";

export default function AnimatedTimeline({
  experience,
  theme,
}: {
  experience: any[];
  theme: Theme;
}) {
  const timelineRef: RefObject<HTMLDivElement> = useRef(null);

  useEffect(() => {
    const timeline = timelineRef.current;
    if (!timeline) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("animate-draw");
          }
        });
      },
      { threshold: 0.1 }
    );

    const items = timeline.querySelectorAll(".timeline-item");
    items.forEach((item) => observer.observe(item));

    return () => observer.disconnect();
  }, [experience]);

  return (
    <div ref={timelineRef} className="relative">
      {experience.map((job, index) => (
        <div
          key={index}
          className="timeline-item mb-16 flex opacity-0 transition-opacity duration-1000"
        >
          <div className="relative">
            <div
              className={`w-12 h-12 rounded-full ${theme.iconBackground} flex items-center justify-center mr-4 z-10 relative`}
            >
              <Briefcase className={theme.icon} size={24} />
            </div>
            {index < experience.length - 1 && (
              <div
                className={`absolute left-6 top-12 bottom-0 w-0.5 ${theme.timeline.line} timeline-line`}
              />
            )}
          </div>
          <div className="flex-grow">
            <div className={`p-4 rounded-lg ${theme.card} relative`}>
              <div
                className={`absolute top-4 left-0 w-4 h-4 ${theme.timeline.dot} transform rotate-45 -translate-x-2`}
              />
              <h3 className={`font-semibold ${theme.text}`}>{job.title}</h3>
              <p className={theme.text}>{job.company}</p>
              <p className={`flex items-center ${theme.text}`}>
                <Calendar size={16} className="mr-2" /> {job.year}
              </p>
              <div className="mt-4">
                <h4 className={`font-medium ${theme.text} mb-2`}>
                  Job Description:
                </h4>
                <ul className="space-y-2">
                  {Array.isArray(job.description) ? (
                    job.description.map((item: string | number | bigint | boolean | ReactElement<any, string | JSXElementConstructor<any>> | Iterable<ReactNode> | ReactPortal | Promise<AwaitedReactNode> | null | undefined, idx: Key | null | undefined) => (
                      <li
                        key={idx}
                        className={`flex items-start ${theme.text}`}
                      >
                        <CheckCircle
                          size={18}
                          className={`${theme.icon} mr-2 flex-shrink-0 mt-1`}
                        />
                        <span className="flex-grow">{item}</span>
                      </li>
                    ))
                  ) : (
                    <li className={`flex items-start ${theme.text}`}>
                      <CheckCircle
                        size={18}
                        className={`${theme.icon} mr-2 flex-shrink-0 mt-1`}
                      />
                      <span className="flex-grow">{job.description}</span>
                    </li>
                  )}
                </ul>
              </div>
            </div>
          </div>
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
      `}</style>
    </div>
  );
}
