import { useReducer } from "react";

export enum ACTION_TYPE {
	SET_MOVES,
	SET_BEST_TIME,
	RESET,
}

type IGameAction =
	| { type: ACTION_TYPE.SET_MOVES; payload: number }
	| { type: ACTION_TYPE.SET_BEST_TIME; payload: number }
	| { type: ACTION_TYPE.RESET };

export interface IGameState {
	moves: number;
	bestTime: number;
}

export const initialGameState: IGameState = {
	moves: 0,
	bestTime: 0,
};

const reducer = (state: IGameState, action: IGameAction) => {
	switch (action.type) {
		case ACTION_TYPE.SET_MOVES:
			return {
				...state,
				moves: action.payload,
			};
		case ACTION_TYPE.SET_BEST_TIME:
			return {
				...state,
				bestTime: action.payload,
			};
		case ACTION_TYPE.RESET:
			return initialGameState;
		default:
			throw new Error(`Unknown action type: ${(action as IGameAction).type}`);
	}
};

export const useGameReducer = () => {
	const [state, dispatch] = useReducer(reducer, initialGameState);

	return { state, dispatch };
};
