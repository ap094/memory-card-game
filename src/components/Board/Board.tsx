import { FC, useState } from "react";
import { Card } from "components/Card";
import { getShuffledCards } from "utils/cardsMapper";
import styles from "./styles.module.scss";

export const Board: FC = () => {
	const [cards, setCards] = useState(() => getShuffledCards());

	return (
		<section className={styles.boardContainer}>
			{cards.map((card) => (
				<Card key={card.id} {...card} />
			))}
		</section>
	);
};
