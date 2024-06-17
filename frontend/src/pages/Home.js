import Space from "../img/undraw_to_the_moon_re_q21i.svg";
//import Stars from "../img/undraw_stars_re_6je7.svg";
import LunarDolphins from "../img/lunar_dolphins.svg";

import styles from "./Home.module.css";
import LinkButton from "../../react-lunar-dolphins/src/components/layout/LinkButton";

export default function Home() {
	return (
		<main className={styles.content}>
			<section className={styles.section__first}>
				<div>
					<div className={styles.lunar_dolphins}>
						<figure>
							<img className={styles.planningImg} src={Space} alt="Space" />
						</figure>
						<div className="lunar-title">
							<div>
								<img src={LunarDolphins} alt="Lunar Dolphins"/>
								<p>Let it with us</p>
							</div>

							<LinkButton to="/" text="get start" className="get_start" />
						</div>
					</div>
				</div>
			</section>
			<section>
				{/*
				<div>
					Flipper splash wave pod sonar deep sea squeak. Echo click underwater
					dive surface breaching dolphin pod. Coral reef tail flip swim
					gracefully bubbles ocean play. Spinner dolphin leaps high, joyful
					whistle current swift. Fluke splash acrobatics blue sea glide.
					Porpoise school fish shoal kelp forest navigation sonar ping.
					Saltwater cavort echolocation synchronize playful leap surf.
					Bottlenose chirp communicate schools gather hunt dive deep.
					Melon-headed splash lagoon kelp dance sunlight shimmer pod. Saddleback
					spin circle blowhole breathe swiftly sonar waves. Lagoon giggle pod
					unity graceful dive sonar guide. Tursiops social interaction whistle
					flip playful surf jump. Oceanic dance harmony leap joy splash surf
					swirl. Common dolphin dart swift synchronized sonar navigate deep.
					Breach waves communicate playful flip tail current swift. Cetacean
					dive splash bubbles pod unity swift travel. Surface breech dive sonar
					echo graceful water ballet. Orca dorsal fin splash dive pod leader
					communicate. Baby dolphin nuzzle mother playful glide surface bubbles.
					Spinner leaps coral reef cavort swift sonar glide pod. Dolphin dreams
					sonar navigate sea echo journey unity.
				</div>

				<figure>
					<img className={styles.planningImg} src={Stars} alt="Stars" />
				</figure>
				*/}
			</section>
		</main>
	);
}
