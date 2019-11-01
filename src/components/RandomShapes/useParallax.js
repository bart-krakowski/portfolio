import { useEffect } from 'react'
import { TweenLite } from 'gsap'


// let options = {
//   root: null,
//   rootMargin: '0px',
//   threshold: []
// }

const scrollOptions = { capture: false, passive: true }

let visibleElements = []

export default function useParallax(parallaxedElements, dynamicElements) {

  console.log('dynamicElements', dynamicElements)

  const initObserver = (parallaxedElements) => {
    const observer = new IntersectionObserver(entries => {

      entries.forEach(entry => {
        if (entry.intersectionRatio > 0) {
          visibleElements.push(entry.target)
        } else {
          let index = visibleElements.indexOf(entry.target)
          if (index > -1) {
            visibleElements.splice(index, 1)
          }

          // window.removeEventListener('scroll', parallaxHandler, scrollOptions)
        }
      })
    })

    for (let i = 0; i < parallaxedElements.length; i++) {
      if (parallaxedElements[i].current) {
        observer.observe(parallaxedElements[i].current)
      }
    }
  }



  const parallaxHandler = () => {
    // console.log('test')

    visibleElements.forEach((visibleElement) => {
      const currentIndex = parallaxedElements.findIndex((item) => item.current === visibleElement)

      TweenLite.to(visibleElement, 0.1, {
        yPercent: window.scrollY * -dynamicElements[currentIndex].props.scrollSpeed
      });
    })
  }

  useEffect(() => {
    window.addEventListener('scroll', parallaxHandler)

    initObserver(parallaxedElements)
  })
}