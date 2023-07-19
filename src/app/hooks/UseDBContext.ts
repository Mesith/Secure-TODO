import { useContext } from "react";
import { DBContext } from "../context/DBContext";

const useDBContext = () => useContext(DBContext)
export default useDBContext