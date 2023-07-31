import { useState } from 'react'
import useIsMobile from '../../hooks/useIsMobile'

const Carousel = ({ children }) => {
  const [currentIndex, setCurrentIndex] = useState(0)
  const isMobile = useIsMobile(767)

  const prevSlide = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? children.length - 1 : prevIndex - 1
    )
  }

  const nextSlide = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === children.length - 1 ? 0 : prevIndex + 1
    )
  }

  return (
    <div className={`carousel-container ${isMobile ? 'mobile' : 'desktop'}`}>
      <div
        className='carousel'
        style={{ transform: `translateX(-${currentIndex * 350}px)` }}
      >
        {children.map((child, index) => (
          <div className='slide' key={index}>
            {child}
          </div>
        ))}
      </div>
      <button className='prev-btn' onClick={prevSlide}>
        {'\u27E8'}
      </button>
      <button className='next-btn' onClick={nextSlide}>
        {'\u27E9'}
      </button>
    </div>
  )
}

export default Carousel
