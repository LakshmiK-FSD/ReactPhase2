import Card from "./Card";
function Carder(props){
    return(
         <div className="card">
            <div  className="card-body">
                <h1>
                    {props.Name}
                </h1>
                <p>{props.age}</p>
                <p>{props.height}</p>
                <p>{props.weight}</p>
                <p>{props.id}</p>
                <p>{props.height}</p>
                <p>{props.prizeFee}</p>
            </div>
        </div>
      
    );
}
export default Carder;