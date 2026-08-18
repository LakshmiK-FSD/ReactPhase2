import { useContext } from "react";
import Card from "./Card";
 function Carder(props) {

  return (
    <div className="card" style={{ width: "18rem" }}>
      <div className="card-body">
        <h5 className="card-title">{props.Name}</h5>
        <p className="card-text">
          <strong>Age:</strong> {props.age}
        </p>
        <p className="card-text">
          <strong>Height:</strong> {props.height} cm
        </p>
       
        <p className="card-text">
          <strong>Weight:</strong> {props.weight} kg
        </p>
        <p className="card-text">
          <strong>ID:</strong> {props.id}
        </p>
        <p className="card-text">
          <strong>Fee:</strong> ₹{props.priceFee}
        </p>
        {props.details && (
          <p className="card-text">
            <strong>About:</strong> {props.details}
          </p>
        )}
        {props.image && (
          <img
            src={props.image}
            alt={props.Name}
            className="card-img-bottom"
            style={{ width: "100%", borderRadius: "8px", marginTop: "10px" }}
          />
        )}
      </div>
    </div>
  );
}
export default Carder;