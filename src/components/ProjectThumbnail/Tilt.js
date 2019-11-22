import { TweenMax } from 'gsap'
const tiltSpeed = 0.03
const rotationZ = -0.1

export const setDefault = (ThumbnailRef) => {
  const animatedObject = ThumbnailRef.current
  if (animatedObject) {
    TweenMax.set(animatedObject, { transformPerspective: 2000, transformOrigin:'center center'})
    TweenMax.to(animatedObject, 0.5, { rotationY: 0, rotationX: 0, rotationZ: rotationZ })
  }
}

export default (ThumbnailRef, e) => {
const animatedObject = ThumbnailRef.current
  if (animatedObject) {
    const pageX = e.clientX - (animatedObject.offsetWidth / 2)
    const pageY = e.clientY - animatedObject.offsetHeight

    TweenMax.to(animatedObject, 0.5, { rotationY: tiltSpeed * pageX, rotationX: tiltSpeed * -pageY })
  }
}
