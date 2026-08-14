import "./index.css";
import { useEffect, useState } from "react";
function Tryed(props) {
  const [addes, seter] = useState(false);
  const [discount, seterr] = useState(props.price);
  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/posts").then(res=>{
      return res.json();
    }).then(
      (nRes)=>{
        console.log(nRes);
      }
    )
  }, []);

  function clicked(amt) {
    seter(true);
    console.log(props.Name, props.id, "Adopted");
    const dis = props.price - amt;
    seterr(dis);
  }

  return (
    props.id && (
      <nav className="llk">
        <img src={props.image} alt="/srrye" />
        <table>
          <tbody>
            <tr><td>Name</td><td>:</td><td>{props.Name}</td></tr>
            <tr><td>Age</td><td>:</td><td>{props.Age}</td></tr>
            <tr><td>Price</td><td>:</td><td>₹{props.price}</td></tr>
            <tr><td>Rating</td><td>:</td><td>{props.rating}</td></tr>
            <tr><td>Breed</td><td>:</td><td>{props.breed}</td></tr>
            <tr><td>Habitat</td><td>:</td><td>{props.habitat}</td></tr>
            <tr><td>Food</td><td>:</td><td>{props.foodPreference}</td></tr>
            <tr><td>Availability</td><td>:</td><td>{props.availability}</td></tr>
          </tbody>
        </table>

        <button onClick={() => clicked(200)}>Adopt</button>
        <button onClick={() => props.deleter(props.id)}>Delete</button>

        <p id="aded">
          {addes ? ` addapt ${props.Name}` : `Not addapt ${props.Name}`}
          <p>{`price : ${discount}`}</p>
        </p>
      </nav>
    )
  );
}

Tryed.defaultProps = {
  image: imr,
  Name: "lakshmi",
  venum: true,
};

export default Tryed;
