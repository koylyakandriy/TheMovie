/// <reference types="vite/client" />

interface ImportMetaEnv {
	VITE_BASE_API_URL: string;
	VITE_API_KEY: string;
	VITE_IMAGE_BASE_URL: string;
	VITE_POSTER_SIZE: string;
}

interface ImportMeta {
	readonly env: ImportMetaEnv;
}
