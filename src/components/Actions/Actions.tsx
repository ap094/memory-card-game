import { FC } from "react";
import { useGameContext } from "hooks/useGameContext";

export const Actions: FC = () => {
	const { resetGame } = useGameContext();

	return (
		<section>
			<button onClick={resetGame}>Reset</button>
		</section>
	);
};
