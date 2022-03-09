/**
 * @returns string of classNames separated by empty space
 */
export function classNames(classes: Array<string | Record<string, boolean>>) {
	if (!classes.length) return "";

	return classes
		.map((item) =>
			typeof item === "string"
				? item.trim()
				: Object.entries(item).map(([key, value]) => (value ? key.trim() : null)),
		)
		.flat()
		.filter(Boolean)
		.join(" ");
}
