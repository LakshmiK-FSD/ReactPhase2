import { Link } from "react-router-dom";
function Home(){
return(
    <>
    <h1 className="primary">
        HOME PAGE 
    </h1>
    <Link className="btn btn-primary" to={"/login"}>login</Link>
    <Link className="btn btn-primary" to={"/card"}>Card</Link>
    </>
);
}
export default Home;