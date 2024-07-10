import React, { useEffect, useState } from 'react';
import FilmListItem, { FilmItem } from 'components/FilmListItem/FilmListItem';
import Spinner from 'components/Spinner/Spinner';
import Heading from 'components/common/Heading/Heading';
import useFilmsStore from 'stores/films.store';
import Placeholder from 'components/Placeholder/Placeholder';
// import content from '../../data/homepage.json';

const HomePage = () => {
  const [content, setContent] = useState({ title: '', teaser: '' });

  useEffect(() => {
    const getHomepageData = async () => {
      const res = (await fetch(
        'https://testing-life.github.io/theos-knives/data/homepage.json'
      ).catch((e) => console.log('e', e))) as Response;
      if (res.ok) {
        const data = await res.json();
        setContent(data);
      }
    };
    if (!content.title) {
      getHomepageData();
    }
  }, []);

  return (
    <section>
      <Placeholder content={content} />
    </section>
  );
};

export default HomePage;
