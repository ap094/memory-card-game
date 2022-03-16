import { FC } from "react";

interface IActionsProps {
	onGameReset: () => void;
}

export const Actions: FC<IActionsProps> = ({ onGameReset }) => {
	return (
		<section>
			<button onClick={onGameReset}>Reset</button>
		</section>
	);
};
