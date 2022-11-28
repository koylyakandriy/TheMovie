export interface ThemeColor {
	main: string;
	light?: string;
	dark?: string;
}

export interface Pallet {
	primary: ThemeColor;
	secondary: ThemeColor;
	waring: ThemeColor;
}

export interface Theme {
	colors: Pallet;
}
