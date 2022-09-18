import React from 'react';
import style from './style.module.css';

export default function Button({children, type}) {
  return (
    <button className={[style.btn, style[type]].join(' ')}>
        {children}
    </button>
  )
}
