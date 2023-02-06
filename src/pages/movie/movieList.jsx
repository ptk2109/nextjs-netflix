import style from '@/styles/movie/movieList.module.scss'

export default function Home() {
  return (
    <>
      <h1>movie List</h1>
			<span className={style.test}>test</span>
			
			<nav className={style.nav}>
				<ul>
					<li>test1</li>
					<li>test2</li>
				</ul>
			</nav>
    </>
  )
}
