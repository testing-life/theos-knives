import React, { FC } from 'react';
import bgLg from '../../assets/theoBgLg.jpg';
import bgMd from '../../assets/theoBgMd.jpg';
import bgSm from '../../assets/theoBgSm.jpg';
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
      <picture className='placeholder__bg'>
        <source srcSet={bgLg} media='(min-width: 1024px)' />
        <source srcSet={bgMd} media='(min-width: 700px)' />
        <img src={bgSm} alt='' className='placeholder__img' />
      </picture>
      <p>Knives by the coming up shortly</p>
      <p>
        Get in touch:{' '}
        <a href={`mailto:${decodeBase64(emailString)}`}>
          {decodeBase64(emailString)}
        </a>
      </p>
    </section>
  );
};

export default Placeholder;
