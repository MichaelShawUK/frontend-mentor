import { createContext } from "react";

const CurrentUserContext = createContext({ username: "", avatar: "" });

export default CurrentUserContext;
