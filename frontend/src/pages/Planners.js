import { useEffect, useState } from "react";

import styles from "./Planners.module.css";

import Card from "../../../react-lunar-dolphins/src/components/cards/Card";
import SideBar from "../../../react-lunar-dolphins/src/components/cards/SideBar";
import Search from "../../../react-lunar-dolphins/src/components/cards/Search";

function Planner() {
	const [planner, setPlanner] = useState([]);

	useEffect(() => {
		fetch("http://localhost:5000/project", {
			method: "GET",
			headers: {
				"Content-Type": "application/json",
			},
		})
			.then((resp) => resp.json())
			.then((data) => {
				setPlanner(data);
			});
	}, []);

	return (
		<main className={styles.contentPage}>
			<div className={styles.content}>
				<SideBar />
				<div className={styles.cardList}>
					<Search />
					{planner.map((p) => (
						<Card
							key={p.id}
							name={p.name}
							date="28-08-2023"
							typeId={p.typeId}
							uuid={p.id}
						/>
					))}
				</div>
			</div>
		</main>
	);
}

export default Planner;
