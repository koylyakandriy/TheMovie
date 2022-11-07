const { VITE_IMAGE_BASE_URL } = import.meta.env;

export const getImagePath = (path?: string) => {
	const imageWidth = 1280;

	return `${VITE_IMAGE_BASE_URL}w${imageWidth}${path}`;
};
