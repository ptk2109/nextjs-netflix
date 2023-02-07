import Image from 'next/image';
import style from '@/styles/Home.module.scss'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAngleLeft, faAngleRight, faBell, faMagnifyingGlass, faCaretDown } from '@fortawesome/free-solid-svg-icons';



function MoveNav(){
  return (
    <nav className={style.nav}>
				<div className={style.left}>
					<div className={style.log}>
						<a href="#"><Image src="/img/logo.png" width={100} height={30} alt="log" /></a>
					</div>
					<div class={style.mobile_menu}>메뉴</div>
					<ul class={style.menu_list}>
							<li>
									<a href="#">홈</a>
							</li>
							<li>
									<a href="#">시리즈</a>
							</li>
							<li>
									<a href="#">영화</a>
							</li>
							<li>
									<a href="#">NEW! 요즘 대세 콘텐츠</a>
							</li>
							<li>
									<a href="#">내가 찜한 콘텐츠</a>
							</li>
					</ul>
				</div>

        <div className={style.right}>
            <div className={[style.icon, style.search].join(" ")}>
                <div className={style.search_bar}>
                    <FontAwesomeIcon icon={faMagnifyingGlass} />
                    <input type="text" placeholder="제목, 사람, 장르"/>
                </div>
            </div>
            <div className={[style.icon, style.kids].join(" ")}>
                <a href="#">키즈</a>
            </div>
            <div className={[style.icon, style.bell].join(" ")}>
                <a href="#"><FontAwesomeIcon icon={faBell}  /></a>
            </div>
            <div className={[style.icon, style.profile].join(" ")}>
                <a href="#">
                    <div className={style.avatar_box}></div>
                    <FontAwesomeIcon icon={faCaretDown}  />
                </a>
            </div>
        </div>
			</nav>
  );
}


function MovieSection(prop){
  return(
    <section className={style.section}>
      <div className={style.content_list}>
          <h1>{prop.title}</h1>
          <div class={style.slider}>
            <div className={style.item}>
              <Image src="https://yts.mx/assets/images/movies/carrie_underwood_the_blown_away_tour_live_2013/medium-cover.jpg" width={250} height={150} alt="log" />
            </div>
            <div className={style.item}>
              <Image src="https://yts.mx/assets/images/movies/carrie_underwood_the_blown_away_tour_live_2013/medium-cover.jpg" width={250} height={150} alt="log" />
            </div>
            <div className={style.item}>
              <Image src="https://yts.mx/assets/images/movies/carrie_underwood_the_blown_away_tour_live_2013/medium-cover.jpg" width={250} height={150} alt="log" />
            </div>
            <div className={style.item}>
              <Image src="https://yts.mx/assets/images/movies/carrie_underwood_the_blown_away_tour_live_2013/medium-cover.jpg" width={250} height={150} alt="log" />
            </div>
            <div className={style.item}>
              <Image src="https://yts.mx/assets/images/movies/carrie_underwood_the_blown_away_tour_live_2013/medium-cover.jpg" width={250} height={150} alt="log" />
            </div>
            <div className={style.item}>
              <Image src="https://yts.mx/assets/images/movies/carrie_underwood_the_blown_away_tour_live_2013/medium-cover.jpg" width={250} height={150} alt="log" />
            </div>
            <div className={style.item}>
              <Image src="https://yts.mx/assets/images/movies/carrie_underwood_the_blown_away_tour_live_2013/medium-cover.jpg" width={250} height={150} alt="log" />
            </div>
            <div className={style.item}>
              <Image src="https://yts.mx/assets/images/movies/carrie_underwood_the_blown_away_tour_live_2013/medium-cover.jpg" width={250} height={150} alt="log" />
            </div>
            <div className={style.item}>
              <Image src="https://yts.mx/assets/images/movies/carrie_underwood_the_blown_away_tour_live_2013/medium-cover.jpg" width={250} height={150} alt="log" />
            </div>
            <div className={style.item}>
              <Image src="https://yts.mx/assets/images/movies/carrie_underwood_the_blown_away_tour_live_2013/medium-cover.jpg" width={250} height={150} alt="log" />
            </div>
          </div>
          <div className={style.prev}><FontAwesomeIcon icon={faAngleLeft}  /></div>
          <div className={style.next}><FontAwesomeIcon icon={faAngleRight}  /></div>
      </div>
    </section> 
  )
}

export default function Home() {
  return (
    <>
      <MoveNav />
      <MovieSection title="한국이 만든 콘텐츠"/>
      
    </>
  )
  
}
