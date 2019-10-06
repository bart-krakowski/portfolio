import { TweenLite, TimelineMax, Linear } from 'gsap'

export default function useScrollingHandler(scrollBar, scrollBarWrapper) {
  const scrollBarElement = scrollBar ? scrollBar.current : null
  const scrollBarWrapperElement = scrollBarWrapper ? scrollBarWrapper.current : null
  const windowHeight = window.innerHeight
  const documentHeight = document.documentElement.scrollHeight

  if (scrollBarElement && scrollBarWrapperElement) {
    const tickHandler = () => {
      let progress = timeline.progress()
      progress += (proxyTween.progress() - progress) * 0.1
      timeline.progress(progress)
    }

    const scrollHandler = () => {
      scrollTop = window.scrollY
      const scrollPercent = Math.max(
        scrollTop / (documentHeight - windowHeight),
        0
      )

      proxyTween.progress(scrollPercent).pause()
    }


    let scrollTop = 0;
    const timeline = new TimelineMax({ paused: true })
    .to(scrollBarElement, 2, {
      y: scrollBarWrapperElement.scrollHeight - scrollBarElement.scrollHeight
    });

    const proxyTween = TweenLite.to({}, 1, {paused: true})
    TweenLite.defaultEase = Linear.easeNone
    window.addEventListener('scroll', scrollHandler)

    TweenLite.ticker.addEventListener('tick', tickHandler)
  }
}
