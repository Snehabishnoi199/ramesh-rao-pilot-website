
import { useState, useEffect, useRef } from 'react'
import './YouTubeSection.css'

const videos = [
  {
    id: 'Y-pb2n-itks',
    title: 'Ramesh Rao Ji',
    subtitle: 'Public Service & Community Work',
    description:
      'Watch important moments, public activities and updates from Ramesh Rao Ji.',
  },
  {
    id: 'KylRcVNokPo',
    title: 'Public Activities',
    subtitle: 'Connecting with People',
    description:
      'Watch this video featuring Ramesh Rao Ji and his activities.',
  },
  {
    id: 'Vg6Pj63GHs0',
    title: 'Community Highlights',
    subtitle: 'Important Moments',
    description:
      'Explore more moments and updates through this featured video.',
  },
  {
    id: '1CpNx6zFFs4',
    title: 'Latest Video',
    subtitle: 'News & Updates',
    description:
      'Watch another featured video of Ramesh Rao Ji.',
  },
]

export default function YouTubeSection() {
  const [activeIndex, setActiveIndex] = useState(0)
  const [nextIndex, setNextIndex] = useState(null)
  const [slideDirection, setSlideDirection] = useState('right')
  const [isSliding, setIsSliding] = useState(false)
  const [isOpen, setIsOpen] = useState(false)
  const [hasEntered, setHasEntered] = useState(false)

  const contentRef = useRef(null)
  const slideTimerRef = useRef(null)

  const activeVideo = videos[activeIndex]
  const nextVideo =
    nextIndex !== null ? videos[nextIndex] : null

  // Animate the section when it enters the viewport
  useEffect(() => {
    const element = contentRef.current
    if (!element) return

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setHasEntered(true)
          observer.disconnect()
        }
      },
      { threshold: 0.2 }
    )

    observer.observe(element)

    return () => observer.disconnect()
  }, [])

  // Close popup with Escape and prevent background scrolling
  useEffect(() => {
    if (!isOpen) return

    const handleKeyDown = (event) => {
      if (event.key === 'Escape') setIsOpen(false)
    }

    document.body.style.overflow = 'hidden'
    window.addEventListener('keydown', handleKeyDown)

    return () => {
      document.body.style.overflow = ''
      window.removeEventListener('keydown', handleKeyDown)
    }
  }, [isOpen])

  // Clean up the slide timer
  useEffect(() => {
    return () => {
      if (slideTimerRef.current) {
        clearTimeout(slideTimerRef.current)
      }
    }
  }, [])

  const changeVideo = (index) => {
    if (index === activeIndex || isSliding) return

    setSlideDirection(index > activeIndex ? 'right' : 'left')
    setNextIndex(index)
    setIsSliding(true)
    setIsOpen(false)

    slideTimerRef.current = setTimeout(() => {
      setActiveIndex(index)
      setNextIndex(null)
      setIsSliding(false)
    }, 450)
  }

  return (
    <section className="youtube-section">
      <div className="youtube-layout">
        {/* Video carousel */}
        <div
          className={`youtube-slider ${
            isSliding ? `sliding-${slideDirection}` : ''
          }`}
        >
          <button
            type="button"
            className="youtube-player"
            onClick={() => {
              if (!isSliding) setIsOpen(true)
            }}
            disabled={isSliding}
            aria-label={`Play ${activeVideo.title}`}
          >
            <img
              src={`https://img.youtube.com/vi/${activeVideo.id}/hqdefault.jpg`}
              alt={`${activeVideo.title} thumbnail`}
            />

            <span className="youtube-play-button" aria-hidden="true">
              ▶
            </span>
          </button>

          {nextVideo && isSliding && (
            <div className="youtube-slide youtube-slide-next">
              <img
                src={`https://img.youtube.com/vi/${nextVideo.id}/hqdefault.jpg`}
                alt={`${nextVideo.title} thumbnail`}
              />
            </div>
          )}
        </div>

        {/* All written content moves together */}
        <div
          key={activeIndex}
          ref={contentRef}
          className={`youtube-content ${
            hasEntered ? 'youtube-content-visible' : ''
          } ${isSliding ? 'youtube-text-exit' : ''}`}
        >
          <span className="youtube-eyebrow">FEATURED VIDEOS</span>

          <h2>
            {activeVideo.title}
            <br />
            {activeVideo.subtitle}
          </h2>

          <p>{activeVideo.description}</p>

          <div className="youtube-dots" aria-label="Choose a video">
            {videos.map((video, index) => (
              <button
                key={video.id}
                type="button"
                className={`youtube-dot ${
                  index === activeIndex ? 'active' : ''
                }`}
                onClick={() => changeVideo(index)}
                aria-label={`Show video ${index + 1}`}
                aria-pressed={index === activeIndex}
                disabled={isSliding}
              />
            ))}
          </div>
        </div>
      </div>

      {/* Video popup */}
      {isOpen && (
        <div
          className="youtube-modal"
          onClick={() => setIsOpen(false)}
        >
          <button
            type="button"
            className="youtube-close"
            onClick={() => setIsOpen(false)}
            aria-label="Close video"
          >
            ×
          </button>

          <div
            className="youtube-modal-player"
            onClick={(event) => event.stopPropagation()}
          >
            <iframe
              src={`https://www.youtube.com/embed/${activeVideo.id}?autoplay=1`}
              title={activeVideo.title}
              allow="autoplay; encrypted-media; picture-in-picture; fullscreen"
              allowFullScreen
            />
          </div>
        </div>
      )}
    </section>
  )
}
