export enum Department {
	Acting = 'Acting',
}

export type Actor = {
	id: string;
	name: string;
	profile_path: string;
	known_for_department: string;
};

export type Credits = {
	id: string;
	cast: Actor[];
	crew: Actor[];
};
