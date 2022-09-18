import React from 'react';
import Button from '../Button';
import style from './style.module.css';

export default function ServiceCard({title, img}) {
  
  const cardStyle = {
    backgroundImage: `url(${img})`
  }
  
  return (
    <div className={style.card_item} style={cardStyle}>
        {title}
        <Button type='dark_mode'>More info</Button>
    </div>
  )
}
