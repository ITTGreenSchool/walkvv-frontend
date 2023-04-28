import { createContext } from "react";

// Creates a context to be able to use the user's authentication state
// throughout the whole application.
const AuthContext = createContext<AuthenticationContext>({
	token: undefined,
	login: () => {},
	logout: () => {},
});

export default AuthContext;
