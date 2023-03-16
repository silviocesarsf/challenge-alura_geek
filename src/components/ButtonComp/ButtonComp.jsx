import React from 'react'
import './ButtonComp.css'

export default function ButtonComp({ text }) {
  return (
    <button className='button-comp'>
        {text}
    </button>
  )
}
