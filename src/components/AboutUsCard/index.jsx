import React from 'react';
import Button from '../Button';
import style from './style.module.css';

export default function AboutUsCard
({value, title, link_title, link_url}) {
  return (
    <div className={style.card_item}>
      <p className={style.value}>{value}</p>
      <p className={style.title}>{title}</p>
      <a href={link_url}>{link_title}</a>
      <Button type='light_mode'>More info</Button>
    </div>
  )
}
