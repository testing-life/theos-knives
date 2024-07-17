import React, { FC } from 'react';
import bgLg from '../../assets/theoBgLg.jpg';
import bgMd from '../../assets/theoBgMd.jpg';
import bgSm from '../../assets/theoBgSm.jpg';
import logo from '../../assets/logo.png';
import logo_framed from '../../assets/Print_w_frame_inverted.png';
import './Placeholder.css';

interface Props {
  content: any;
}

const Placeholder: FC<Props> = ({ content }) => {
  const emailString = 'bWVzc2Vyc2NobWllZGUtd2Vybmlja2VAcG9zdGVvLmNvbQ==';
  const decodeBase64 = (base64String: string) => {
    const decodedString = decodeURIComponent(
      atob(base64String)
        .split('')
        .map(function (c) {
          return '%' + ('00' + c.charCodeAt(0).toString(16)).slice(-2);
        })
        .join('')
    );
    return decodedString;
  };
  return (
    <section className='placeholder'>
      <header className='placeholder__header'>
        <img src={logo_framed} alt='' className='placeholder__logo' />
        <h1>{content.title}</h1>
      </header>
      <p className='placeholder__para'>{content.teaser} </p>
      <div className='placeholder__link'>
        <a href={`mailto:${decodeBase64(emailString)}`}>
          {decodeBase64(emailString)}
        </a>
      </div>
      <picture className='placeholder__bg'>
        <source srcSet={bgLg} media='(min-width: 1024px)' />
        <source srcSet={bgMd} media='(min-width: 700px)' />
        <img src={bgSm} alt='' className='placeholder__img' />
      </picture>
    </section>
  );
};

export default Placeholder;
