import { useEffect } from 'react'
import { TweenMax } from 'gsap'


const options = {
  root: null,
  rootMargin: '0px',
  threshold: 0
}

let visibleElements = []

export default function useParallax(parallaxedElements) {

  const initObserver = (parallaxedElements) => {
    let observer = new IntersectionObserver(handleIntersect, options)

    function handleIntersect (entries) {
      entries.forEach(entry => {
        console.log('entry.intersectionRatio', entry.intersectionRatio)
        if (entry.intersectionRatio > 0) {
          visibleElements.push(entry.target)
          // TweenMax.set(entry.target, { y: 2 * (-window.scrollY) })
        } else {
          const index = visibleElements.indexOf(entry.target)

          if (index > -1) {
            visibleElements.splice(index, 1)
          }
        }
      })
    }

    for (let i = 0; i < parallaxedElements.length; i++) {
      if (parallaxedElements[i].current) {
        observer.observe(parallaxedElements[i].current)
      }
    }
  }



  const parallaxHandler = () => {
    visibleElements.forEach(visibleElement => {
      // TweenMax.set(visibleElement, { y: 1.1 * (-window.scrollY) })
      // console.log('visibleElement.offsetTop', visibleElement.offsetTop)
      TweenMax.set(visibleElement, { y: 1 * (visibleElement.offsetTop - window.scrollY) })
    })
  }

  useEffect(() => {
    window.addEventListener('scroll', () => {
      parallaxHandler()
    })

    initObserver(parallaxedElements)
  })
}