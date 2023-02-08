import Image from 'next/image';
import style from '@/styles/Home.module.scss'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAngleLeft, faAngleRight, faBell, faMagnifyingGlass, faCaretDown } from '@fortawesome/free-solid-svg-icons';
import Head from "next/head";
import Seo from '../components/Seo';
import { useEffect, useState } from 'react';



// export async function getStaticProps() {
//   const url = "https://yts.mx/api/v2/list_movies.json?minimum_rating=9&sort_by=year";
//   const res = await fetch(url);
//   const posts = await res.json();

//   return {
//     props: {
//       posts,
//     }
//   };
// }

function MovieSection(prop) {
  const [movies, setMovies] = useState([]);
  useEffect(() => {
    (async () => {
      const { results } = await (await fetch(
        `/api/movies`    // 실제URL은 next.config.js에 존재함. (파라미터 중 개인키가 있어서 URL 숨기기 위함)
      )).json();
      setMovies(results);
    })();
  }, []);


  return (
    <section className={style.section}>
      <div className={style.content_list}>
        <h1>{prop.title}</h1>
        {!movies && <h4>Loading...</h4>}

        {movies &&

          <div className={style.slider}>


          {movies?.map( (_movie, _idx) => (
            <div key={_movie.id} className={style.item}>
              <Image src={`https://image.tmdb.org/t/p/w500/${_movie.poster_path}`} width={256} height={384} alt="log" />
            </div>
          ))}
          </div>
        }
        <div className={style.prev}><FontAwesomeIcon icon={faAngleLeft} /></div>
        <div className={style.next}><FontAwesomeIcon icon={faAngleRight} /></div>
      </div>
    </section>
  )
}

export default function Home() {
  return (
    <>
      <Seo title="Home" />
      <MovieSection title="인기있는 콘텐츠" />
    </>
  )

}
