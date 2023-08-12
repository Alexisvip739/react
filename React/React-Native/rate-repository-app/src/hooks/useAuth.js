import { useContext } from "react";
import { AuthContext } from "../context/AuthContext";
console.log(AuthContext);
export default () => useContext(AuthContext);