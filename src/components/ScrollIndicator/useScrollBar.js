import { useState, useEffect } from 'react'

export default function useScrollBar() {
  const [scrollbarHeight, setScrollbarHeight] = useState(0)
  const windowHeight = window.innerHeight
  const documentHeight = document.documentElement.scrollHeight

  const  scrollbarHeightHandler = () => {
    setScrollbarHeight(`${(windowHeight / documentHeight * 100)}%`)
  }

  useEffect(() => {
    scrollbarHeightHandler()
  })

  return scrollbarHeight
}