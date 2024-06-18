import styles from "./home_modules.css";

export default function Home() {
	return (
		<main className={styles.content}>
			<navbar>coisas coisas coisas</navbar>
			<section className={styles.section__first}>
				<div className={styles.get_start}>GET START</div>
			</section>
			<section className={styles.section__second}>
				aaaaaaaaaaaaaaa outra section
				<p>coisas</p>
				<p>imagem e texto</p>
			</section>
		</main>
	);
}
