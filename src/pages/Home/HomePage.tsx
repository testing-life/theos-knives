import FilmListItem, { FilmItem } from 'components/FilmListItem/FilmListItem';
import Spinner from 'components/Spinner/Spinner';
import Heading from 'components/common/Heading/Heading';
import React, { useEffect } from 'react';
import useFilmsStore from 'stores/films.store';
import content from '../../data/homepage.json';

const HomePage = () => {
  // const { films, loading, error, fetchFilms } = useFilmsStore();

  // useEffect(() => {
  //   if (!films.length) {
  //     fetchFilms();
  //   }
  // }, []);

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
