import { createContext, FC } from "react";

interface IGameContext {}

export const GameContext = createContext<IGameContext>({} as IGameContext);

export const GameProvider: FC = ({ children }) => {
	const value: IGameContext = {};

	return <GameContext.Provider value={value}>{children}</GameContext.Provider>;
};
