import { FC } from "react";
import { useGameContext } from "hooks/useGameContext";
import styles from "./styles.module.scss";

export const Results: FC = () => {
	const { state } = useGameContext();

	return (
		<section className={styles.resultsSection}>
			<p>Moves: {state.moves}</p>
			<p>Best time: {state.bestTime}</p>
		</section>
	);
};
