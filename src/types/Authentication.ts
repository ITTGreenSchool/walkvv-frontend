type AuthenticationStatus = {
	token?: string;
}

type AuthenticationContext = {
	token?: string;
	login: (username: string, password: string) => void;
	logout: () => void;
}