import Image from 'next/image';
import style from '@/styles/Home.module.scss'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBell, faMagnifyingGlass, faCaretDown } from '@fortawesome/free-solid-svg-icons';


export default function NavBar(){
  return (
    <nav className={style.nav}>
				<div className={style.left}>
					<div className={style.log}>
						<a href="#"><Image src="/img/logo.png" width={100} height={30} alt="log" /></a>
					</div>
					<div className={style.mobile_menu}>메뉴</div>
					<ul className={style.menu_list}>
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