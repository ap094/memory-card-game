import { createContext, FC } from "react";
import { ACTION_TYPE, IGameState, initialGameState, useGameReducer } from "hooks/useGameReducer";

interface IGameContext {
	state: IGameState;
	updateMoves: (moves: number) => void;
	updateBestTime: (time: number) => void;
	resetGame: () => void;
}

const initialGameContext: IGameContext = {
	state: initialGameState,
	updateMoves: (moves: number) => null, // eslint-disable-line @typescript-eslint/no-unused-vars
	updateBestTime: (time: number) => null, // eslint-disable-line @typescript-eslint/no-unused-vars
	resetGame: () => null,
};

export const GameContext = createContext<IGameContext>(initialGameContext);

export const GameProvider: FC = ({ children }) => {
	const { state, dispatch } = useGameReducer();

	const updateMoves = (moves: number) => {
		dispatch({
			type: ACTION_TYPE.SET_MOVES,
			payload: moves,
		});
	};

	const updateBestTime = (time: number) => {
		dispatch({
			type: ACTION_TYPE.SET_BEST_TIME,
			payload: time,
		});
	};

	const resetGame = () => {
		dispatch({
			type: ACTION_TYPE.RESET,
		});
	};

	const value: IGameContext = {
		state,
		updateMoves,
		updateBestTime,
		resetGame,
	};

	return <GameContext.Provider value={value}>{children}</GameContext.Provider>;
};
