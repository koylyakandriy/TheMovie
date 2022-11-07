export const cropText = (text: string, length: number): string =>
	text.length > length ? `${text.substring(0, length - 4)} ...` : text;
