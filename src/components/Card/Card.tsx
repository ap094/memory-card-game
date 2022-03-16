import { FC } from "react";
import questionMarkImage from "assets/images/question-mark.png";
import { ICard } from "utils/cardsMapper";
import { classNames } from "utils/classNames";
import styles from "./styles.module.scss";

interface ICardProps {
	card: ICard;
	isFlipped: boolean;
	isDisabled: boolean;
	onClick: (card: ICard) => void;
}

export const Card: FC<ICardProps> = ({ card, isFlipped, isDisabled, onClick }) => {
	const handleCardClick = () => {
		if (isDisabled) return;
		onClick(card);
	};

	return (
		<div
			className={classNames([styles.cardContainer, { [styles.disabled]: isDisabled }])}
			onClick={handleCardClick}
		>
			<div className={classNames([styles.cardInner, { [styles.cardFlip]: !isFlipped }])}>
				<div className={styles.cardFront}>
					<img src={card.path} alt={card.name} />
				</div>
				<div className={styles.cardBack}>
					<img src={questionMarkImage} alt="Question mark image" />
				</div>
			</div>
		</div>
	);
};
