import defaultImage from '../assets/default-img.jpg';

const { VITE_IMAGE_BASE_URL } = import.meta.env;

type ImageWidth = 300 | 1280;

export const getImagePath = (path?: string, imageWidth: ImageWidth = 1280) =>
	path ? `${VITE_IMAGE_BASE_URL}w${imageWidth}${path}` : defaultImage;
