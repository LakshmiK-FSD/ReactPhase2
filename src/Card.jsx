import loaderGif from "./assets/blendertimer-load-38.gif";
import { useContext } from "react";
import useFetching from "./useFetching.jsx";
import Carder from "./Carder.jsx";
import { Link } from "react-router-dom";
import FormCr from "./FormCr.jsx";
import { dataContext } from "./Home.jsx";

function Card() {
  const sr = useContext(dataContext); 
  const brmode = "http://localhost:3000/schoolData";
  const [err, tempList] = useFetching(brmode);

  if (!tempList) {
    return (
      <div>
        {err ? <p id="errorr">{err}</p> : <img src={loaderGif} alt="loading..." />}
      </div>
    );
  }

  const ListCard = tempList.map(callBacPar => (
    <Carder
      key={callBacPar.id}
      priceFee={callBacPar.priceFee}
      height={callBacPar.height}
      weight={callBacPar.weight}
      age={callBacPar.age}
      id={callBacPar.id}
      Name={callBacPar.Name}
    />
  ));

  return (
    <>
      <FormCr />
      <p>{sr}</p> 
      {ListCard}
      <Link className="btn btn-primary" to={"/"}>Home</Link>
    </>
  );
}

export default Card;
