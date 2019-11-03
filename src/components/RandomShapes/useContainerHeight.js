import { useLayoutEffect, useState } from 'react';

export default function useContainerHeight() {
  const [containerHeight, setContainerHeight] = useState(0)

  const updateSize = () => {
    setContainerHeight(document.documentElement.scrollHeight - window.innerHeight)
  }

  useLayoutEffect(() => {
    updateSize()

    window.addEventListener('resize', () => {
      updateSize()
    })

    return () => window.removeEventListener('resize', updateSize)
  }, [])

  return containerHeight
}