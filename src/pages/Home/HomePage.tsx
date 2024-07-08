import React, { useEffect, useState } from 'react';
import FilmListItem, { FilmItem } from 'components/FilmListItem/FilmListItem';
import Spinner from 'components/Spinner/Spinner';
import Heading from 'components/common/Heading/Heading';
import useFilmsStore from 'stores/films.store';
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
        console.log(data);
        setContent(data);
      }
    };
    if (!content.title) {
      getHomepageData();
    }
  }, []);

  return (
    <section>
      <Heading text={content.title} />
      <p>{content.teaser}</p>
      {/* {!loading && !error && films.length ? (
        <ol>
          {films.slice(0, 10).map((film: FilmItem) => (
            <li className='-separated-list-item' key={film.imdb_id}>
              <FilmListItem film={film} />
            </li>
          ))}
        </ol>
      ) : null}
      {loading && !error && <Spinner label='Loading films' />}
      {error && <p className='-is-error'>{error}</p>} */}
    </section>
  );
};

export default HomePage;
