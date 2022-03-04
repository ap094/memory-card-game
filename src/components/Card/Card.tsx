import { FC, useState } from "react";
import questionMarkImage from "images/question-mark.png";
import styles from "./styles.module.scss";

interface ICardProps {
	id: number;
	path: string;
	name: string;
}

export const Card: FC<ICardProps> = ({ id, path, name }) => {
	const [isFlipped, setIsFlipped] = useState(true);

	const handleCardClick = () => {
		setIsFlipped((prevState) => !prevState);
	};

	return (
		<div className={styles.cardContainer} onClick={handleCardClick}>
			<div className={`${styles.cardInner} ${isFlipped ? styles.cardFlip : ""}`.trim()}>
				<div className={styles.cardFront}>
					<img src={path} alt={name} />
				</div>
				<div className={styles.cardBack}>
					<img src={questionMarkImage} alt="Question mark image" />
				</div>
			</div>
		</div>
	);
};
