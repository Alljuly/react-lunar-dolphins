import Space from "../img/undraw_to_the_moon_re_q21i.svg";
//import Stars from "../img/undraw_stars_re_6je7.svg";
import LunarTitle from "../img/lunar_dolphins.svg";

import styles from "./Home.module.css";

export default function Home() {
	return (
		<main className={styles.content}>
			<section className={styles.section__first}>
				<div className={styles.content_svg}>
					<img className={styles.space} src={Space} alt="Space" />
					<div className={styles.main_text}>
						<div className={styles.lunar_title}>
							<img src={LunarTitle} alt="Space" />
							<p>Leave it with us</p>
						</div>
						<div className={styles.get_start}>GET START</div>
					</div>
				</div>
			</section>
			<section>
				outra section
				<p>coisas</p>
				<p>imagem e texto</p>
			</section>
		</main>
	);
}
