import reactLogo from "images/react-logo.png";
import angularLogo from "images/angular-logo.png";
import eslintLogo from "images/eslint-logo.png";
import jsLogo from "images/js-logo.png";
import typescriptLogo from "images/typescript-logo.png";
import vueLogo from "images/vue-logo.png";
import gatsbyLogo from "images/gatsby-logo.png";
import githubLogo from "images/github-logo.png";
import { shuffleCards } from "./shuffleCards";

const cards = [
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

export const getShuffledCards = () =>
	shuffleCards(
		[...cards, ...cards].map((card, index) => ({
			id: card.name + index,
			...card,
		})),
	);
