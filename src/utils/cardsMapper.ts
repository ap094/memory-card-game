import angularLogo from "assets/images/angular-logo.png";
import eslintLogo from "assets/images/eslint-logo.png";
import gatsbyLogo from "assets/images/gatsby-logo.png";
import githubLogo from "assets/images/github-logo.png";
import jsLogo from "assets/images/js-logo.png";
import reactLogo from "assets/images/react-logo.png";
import typescriptLogo from "assets/images/typescript-logo.png";
import vueLogo from "assets/images/vue-logo.png";
import { shuffleArray } from "./shuffleArray";

export interface ICard {
	id: string;
	path: string;
	name: string;
}

const cards: Array<Omit<ICard, "id">> = [
	{
		path: reactLogo,
		name: "react-logo",
	},
	{
		path: angularLogo,
		name: "angular-logo",
	},
	{
		path: eslintLogo,
		name: "eslint-logo",
	},
	{
		path: jsLogo,
		name: "js-logo",
	},
	{
		path: typescriptLogo,
		name: "typescript-logo",
	},
	{
		path: vueLogo,
		name: "vue-logo",
	},
	{
		path: gatsbyLogo,
		name: "gatsby-logo",
	},
	{
		path: githubLogo,
		name: "github-logo",
	},
];

export const getShuffledCards = () => {
	const duplicatedCards = [...cards, ...cards].map((card, index) => ({
		id: card.name + index,
		...card,
	}));

	return shuffleArray(duplicatedCards) as Array<ICard>;
};
