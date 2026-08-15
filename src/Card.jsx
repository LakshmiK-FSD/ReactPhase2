import loaderGif from "./assets/blendertimer-load-38.gif";
import { useEffect, useState} from "react";
import useFetching from "./useFetching.jsx";
import Carder from "./Carder.jsx";
import { Link } from "react-router-dom";
import Home from "./Home.jsx";
function Card() {
  const brmode="http://localhost:3000/school"
const [err,tempList] = useFetching(brmode);
  if (!tempList) {
    return (
      <div>
     {err?<p id="errorr">{err}</p>:<img src={loaderGif} alt=""/>}
      </div>
    );
  }
  const ListCard= tempList.map(callBacPar => (
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
  return <>
    <Link className="btn btn-primary" to={"./"}> home</Link>
  {ListCard}
  <Link className="btn btn-primary" to={"./"}> home</Link>
  </>;
}

export default Card;
