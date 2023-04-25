import { useContext } from "react";
import { authContext } from "../context/AuthContextProvider";

export default function useAuth() {
  const { auth } = useContext(authContext);

  if (auth) {
    return true;
  } else {
    return false;
  }
}
