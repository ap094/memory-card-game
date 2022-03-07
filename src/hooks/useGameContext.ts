import { useContext } from "react";
import { GameContext } from "context/GameContext";

export const useGameContext = () => {
	const context = useContext(GameContext);

	if (context === undefined) {
		throw new Error("GameContext must be within GameProvider");
	}

	return context;
};
