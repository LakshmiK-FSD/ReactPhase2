import loaderGif from "./assets/arthurpx-book-27293_512.gif";
import Tryed from "./Tryed.jsx";
import { useEffect, useState} from "react";
import useFetching from "./useFetching.jsx";
function Card() {
  const brmode="http://localhost:3000/animalsAdap"
const [err,tempList] = useFetching(brmode);
  if (!tempList) {
    return (
      <div>
     {err?<p id="errorr">{err}</p>:<img src={loaderGif} alt=""/>}
      </div>
    );
  }
  function deleter(ider) {
    const temperary = tempList.filter(ide => ide.id !== ider);
    setTempli(temperary);
  }

  const Permen = tempList.map(callBacPar => (
    <Tryed
      key={callBacPar.id}
      availability={callBacPar.availability}
      habitat={callBacPar.habitat}
      foodPreference={callBacPar.foodPreference}
      breed={callBacPar.breed}
      rating={callBacPar.rating}
      Age={callBacPar.age}
      price={callBacPar.price}
      id={callBacPar.id}
      image={callBacPar.image}
      Name={callBacPar.Name}
      venum={callBacPar.venum}
      deleter={deleter}
    />
  ));

  return <>{Permen}</>;
}

export default Card;
