import { createContext, FC, useState } from "react";
import { ACTION_TYPE, IGameState, initialGameState, useGameReducer } from "hooks/useGameReducer";
import { getShuffledCards, ICard } from "utils/cardsMapper";

interface IGameContext {
	state: IGameState;
	cards: Array<ICard>;
	setCards: (cards: ((previousCards: ICard[]) => ICard[]) | ICard[]) => void;
	setMoves: (moves: number) => void;
	setBestTime: (time: number) => void;
	resetGame: () => void;
}

const initialGameContext: IGameContext = {
	state: initialGameState,
	cards: getShuffledCards(),
	setCards: (cards: ((previousCards: ICard[]) => ICard[]) | ICard[]) => null, // eslint-disable-line @typescript-eslint/no-unused-vars
	setMoves: (moves: number) => null, // eslint-disable-line @typescript-eslint/no-unused-vars
	setBestTime: (time: number) => null, // eslint-disable-line @typescript-eslint/no-unused-vars
	resetGame: () => null,
};

export const GameContext = createContext<IGameContext>(initialGameContext);

export const GameProvider: FC = ({ children }) => {
	const { state, dispatch } = useGameReducer();
	const [cards, setCards] = useState(() => initialGameContext.cards);

	const setMoves = (moves: number) => {
		dispatch({
			type: ACTION_TYPE.SET_MOVES,
			payload: moves,
		});
	};

	const setBestTime = (time: number) => {
		dispatch({
			type: ACTION_TYPE.SET_BEST_TIME,
			payload: time,
		});
	};

	const resetGame = () => {
		dispatch({ type: ACTION_TYPE.RESET });
		setCards(() => getShuffledCards());
	};

	const value: IGameContext = {
		state,
		cards,
		setCards,
		setMoves,
		setBestTime,
		resetGame,
	};

	return <GameContext.Provider value={value}>{children}</GameContext.Provider>;
};
