import { FC, useEffect, useState } from "react";
import { Actions } from "components/Actions";
import { Card } from "components/Card";
import { Results } from "components/Results";
import { useGameContext } from "hooks/useGameContext";
import { ICard } from "utils/cardsMapper";
import styles from "./styles.module.scss";

const MAX_CARDS_TO_FLIP = 2;

export const Board: FC = () => {
	const { cards, state, setMoves, resetGame } = useGameContext();
	const [flippedCards, setFlippedCards] = useState<Array<ICard>>([]);
	const [matchedCards, setMatchedCards] = useState<Array<ICard>>([]);

	useEffect(() => {
		if (flippedCards.length < MAX_CARDS_TO_FLIP) return;

		const [firstCard, secondCard] = flippedCards;
		if (firstCard.name === secondCard.name) {
			setMatchedCards((prev) => [...prev, firstCard, secondCard]);
		}

		const timeout = setTimeout(() => {
			setFlippedCards([]);
		}, 500);

		return () => {
			clearTimeout(timeout);
		};
	}, [flippedCards]);

	useEffect(() => {
		if (matchedCards.length !== cards.length) return;

		const timeout = setTimeout(() => {
			alert("You did it!");
		}, 500);

		return () => {
			clearTimeout(timeout);
		};
	}, [cards, matchedCards]);

	const isCardDisabled = flippedCards.length >= MAX_CARDS_TO_FLIP;
	const isCardFlipped = (cardId: string) => {
		return flippedCards.some(({ id }) => id === cardId) || matchedCards.some(({ id }) => id === cardId);
	};

	const onCardClick = (card: ICard) => {
		if (flippedCards.length >= 1) {
			setMoves(state.moves + 1);
		}

		setFlippedCards((prev) => [...prev, card]);
	};

	const onGameReset = () => {
		setFlippedCards([]);
		setMatchedCards([]);
		resetGame();
	};

	return (
		<>
			<Results />
			<section className={styles.boardContainer}>
				{cards.map((card) => (
					<Card
						key={card.id}
						card={card}
						isFlipped={isCardFlipped(card.id)}
						isDisabled={isCardDisabled || isCardFlipped(card.id)}
						onClick={onCardClick}
					/>
				))}
			</section>
			<Actions onGameReset={onGameReset} />
		</>
	);
};
