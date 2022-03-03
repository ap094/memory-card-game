import { FC } from "react";
import Card from "./Card";

interface BoardProps {}

const Board: FC<BoardProps> = () => {
	return (
		<>
			Board
			<br />
			<Card />
		</>
	);
};

export default Board;
