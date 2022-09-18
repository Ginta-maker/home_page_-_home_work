import React from 'react';
import { data } from './data';
import style from './style.module.css';
import AboutUsCard from '../AboutUsCard';

export default function AboutUs() {
  return (
    <section className={['wrapper', style.about_us].join(' ')} >
      <div>
        <p className='subheader'>About Us</p>
          <h2>Company<span className={style.accent}>IwanProm</span></h2>
            <p className={style.infoText}>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Nesciunt tempora quam, quia aliquam harum corporis deserunt placeat tempore optio! Assumenda aspernatur eaque ipsam quo qui nam architecto odio, atque quaerat.
            </p>
          </div>

          <div className={style.achievements}>
            {
              data.map(el => <AboutUsCard key={el.id} {...el}/>)
            }
          </div>
    </section>
  )
}
