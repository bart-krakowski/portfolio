import { useEffect } from 'react'
import { TweenLite } from 'gsap'

export default (parallaxedElements, dynamicElements) => {
  const parallaxHandler = () => {
    parallaxedElements.forEach((visibleElement) => {
      const currentIndex = parallaxedElements.findIndex((item) => item.current === visibleElement.current)
      const rect = visibleElement.current.getBoundingClientRect()
      const visibleElementY = rect.top

      TweenLite.to(visibleElement.current, 0.1, {
        yPercent: visibleElementY * dynamicElements[currentIndex].props.scrollSpeed
      });
    })
  }

  useEffect(() => {
    window.addEventListener('scroll', parallaxHandler)
  })
}