import reactLogo from "assets/images/react-logo.png";
import angularLogo from "assets/images/angular-logo.png";
import eslintLogo from "assets/images/eslint-logo.png";
import jsLogo from "assets/images/js-logo.png";
import typescriptLogo from "assets/images/typescript-logo.png";
import vueLogo from "assets/images/vue-logo.png";
import gatsbyLogo from "assets/images/gatsby-logo.png";
import githubLogo from "assets/images/github-logo.png";
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
