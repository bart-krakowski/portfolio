import React from "react";

const Cross = ({color}) => {
  const choosenColor = color
  const firstGradientId = Math.random().toString(36).slice(-5)
  const secondGradientId = Math.random().toString(36).slice(-5)

  return (
    <svg viewBox="0 0 31 31" xmlns="http://www.w3.org/2000/svg">
      <defs>
        <linearGradient x1="-7.638%" y1="43.343%" x2="100%" y2="50%" id={firstGradientId}>
          <stop stopColor={choosenColor} offset="0%"/>
          <stop stopColor={choosenColor} stopOpacity="0" offset="100%"/>
        </linearGradient>
        <linearGradient x1="50%" y1="159.009%" x2="50%" y2="-29.407%" id={secondGradientId}>
          <stop stopColor={choosenColor} offset="0%"/>
          <stop stopColor={choosenColor} stopOpacity="0" offset="100%"/>
        </linearGradient>
      </defs>
      <g strokeWidth="3" fill="none" fillRule="evenodd" strokeLinecap="round">
        <path d="M3.053 23.423l23.056-17.2" stroke={`url(#${firstGradientId})`} transform="rotate(56.724 14.275 16.557)"/>
        <path d="M2.96 23.491L26.2 6.154" stroke={`url(#${secondGradientId})`}  transform="rotate(146.724 15.081 15.538)"/>
      </g>
    </svg>
  )
}

const Triangle = ({color}) => {
  const choosenColor = color
  const gradientId = Math.random().toString(36).slice(-5)

  return (
    <svg viewBox="0 0 35 39" xmlns="http://www.w3.org/2000/svg">
      <defs>
        <linearGradient x1="-4.987%" y1="25.262%" x2="91.109%" y2="108.95%" id={gradientId}>
          <stop stopColor={choosenColor} stopOpacity=".93" offset="0%"/>
          <stop stopColor={choosenColor} offset="19.33%"/>
          <stop stopColor={choosenColor} stopOpacity="0" offset="100%"/>
        </linearGradient>
      </defs>
      <path d="M24.756-.764L8.874 31h31.764L24.756-.764z" stroke={`url(#${gradientId})`} strokeWidth="2" fill="none" transform="rotate(35 24.756 14.5)" fillRule="evenodd" fillOpacity="0"/>
    </svg>
  )
}

const Trail = ({color}) => {
  const choosenColor = color
  const gradientId = Math.random().toString(36).slice(-5)

  return (
    <svg viewBox="0 0 43 48" xmlns="http://www.w3.org/2000/svg">
      <defs>
        <linearGradient x1="12.398%" y1="-13.709%" x2="87.474%" y2="110.403%" id={gradientId}>
          <stop stopOpacity="0" offset="0%"/>
          <stop stopColor={choosenColor} offset="100%"/>
        </linearGradient>
      </defs>
      <path stroke={`url(#${gradientId})`} strokeWidth="2" transform="matrix(1 0 0 -1 0 48)" d="M3.455 1l-2.2 14.844h14.997l-3.515 15.708H28.11L25.204 47h16.052" fill="none" fillRule="evenodd" strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
  )
}

export const ShapesArray = [Cross, Triangle, Trail]
