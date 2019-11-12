import { useEffect, useState } from 'react'

export default (watchedElement) => {
  const [isVisible, setVisibility] = useState(0)

  const initObserver = (watchedElement) => {
    if (watchedElement) {
      const observer = new IntersectionObserver(entries => {
        entries.forEach(entry => {
          if (entry.intersectionRatio > 0) {
            setVisibility(true)
          } else {
            setVisibility(false)
          }
        })
      })
      observer.observe(watchedElement)
    }
  }

  useEffect(() => {
    initObserver(watchedElement.current)
  })

  return isVisible
}
