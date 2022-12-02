const { VITE_IMAGE_BASE_URL } = import.meta.env;

const imageWidth = 1280;

export const getImagePath = (path?: string) => `${VITE_IMAGE_BASE_URL}w${imageWidth}${path}`;
