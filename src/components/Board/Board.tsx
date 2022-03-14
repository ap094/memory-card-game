import { FC, useState } from "react";
import { Actions } from "components/Actions";
import { Card } from "components/Card";
import { Results } from "components/Results";
import { useGameContext } from "hooks/useGameContext";
import { ICard } from "utils/cardsMapper";
import styles from "./styles.module.scss";

const MAX_CARDS_TO_FLIP = 2;

export const Board: FC = () => {
	const { cards, state, setMoves } = useGameContext();
	const [flippedCards, setFlippedCards] = useState<Array<ICard>>([]);

	const onCardClick = (card: ICard) => {
		setFlippedCards((prev) => [...(prev ?? []), card]);

		if (flippedCards.length >= 1) {
			setMoves(state.moves + 1);
		}
	};

	const isCardDisabled = flippedCards.length >= MAX_CARDS_TO_FLIP;
	const isCardFlipped = (cardId: string) => flippedCards.some(({ id }) => id === cardId);

	return (
		<>
			<Actions />
			<section className={styles.boardContainer}>
				{cards.map((card) => (
					<Card
						key={card.id}
						card={card}
						isFlipped={isCardFlipped(card.id)}
						isDisabled={isCardDisabled}
						onClick={onCardClick}
					/>
				))}
			</section>
			<Results />
		</>
	);
};
