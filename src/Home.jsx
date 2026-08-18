import { Link } from "react-router-dom";
import { createContext } from "react";
import Card from "./Card";     
import Carder from "./Carder";  
export const dataContext = createContext();
function Home() {
  const soo = "sir ok";
  return (
    <>
      <dataContext.Provider value={soo}>
        <Card /> 
      </dataContext.Provider>

      <h1 className="text-primary">HOME PAGE</h1>

      <Link className="btn btn-primary m-2" to={"/login"}>Login</Link>
      <Link className="btn btn-primary m-2" to={"/card"}>Card</Link>
    </>
  );
}
export default Home;
