import React from 'react';
import style from './style.module.css';
import { data } from './data';
import ServiceCard from '../ServiceCard';

export default function Services() {
  return (
    <section className={style.services}>
        <div className={['wrapper', style.wrapper].join(' ')}>
            <p className='subheader'>Our Services</p>
            <h2>We specialize</h2>
            <div className={style.cards_container}>
                {
                  data.map(el => <ServiceCard key={el.id} {...el} />)
                }
            </div>
        </div>

    </section>
  )
}
