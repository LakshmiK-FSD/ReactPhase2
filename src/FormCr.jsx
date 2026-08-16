import { useState,useContext, useRef, useEffect } from "react";
import { Link } from "react-router-dom";
import { dataContext } from "./Home";
function FormCr()
{
  let countin= useRef(0);
  const sr=useContext(dataContext);
        const [patr,setertr]=useState(true);
        const [pass1,seterpas1]=useState("");
        const [pass2,seterpas2]=useState("");
        const [passcheck,seter]=useState(false);
          function eventCHanged(event){
            console.log(event)
             seterpas1(event.target.value);}
             function increaser(){
              countin.current++;
              console.log(countin.current);
             }
          function eventCHanged2(event){
                seterpas2(event.target.value);
                checking();
          }
          function setings(){
            setertr(!patr);
          }
          function checking(){
            if(pass1!=event.target.value){
              seter(true);
            }
            else{
               seter(false);
            }
          }
          useEffect(()=>{
             console.log("patr"+patr);
          },[patr])
        return(
          <>
               <form className="my-5"  style={{ width:"50%", margin:"auto"}}>
  <div className="mb-3">
    <label className="form-label">UserName</label>
    <input type="email" className="form-control"  />
    <div  className="form-text">We'll never share your email with anyone else.</div>
    <h1> {countin.current}</h1>
  </div>
  <p>{sr}</p>
  <div className="mb-3">
    <label  className="form-label">Password</label>
    <input type="password" onChange={eventCHanged} className="form-control" value={pass1} />
  </div>

   <div className="mb-3">
    <label  className="form-label">Password check</label>
    <input type="password"  onChange={eventCHanged2} className="form-control" value={pass2}/>
    {passcheck && <p>wrong</p>}
  </div>
  <div className="mb-3 form-check">
    <input type="checkbox"  className="form-check-input" />
    <label className="form-check-label">agree</label><br />
    <button type="button" onClick={()=>setings()} className="btn btn-danger">count+</button>
    <br />
    <button type="button" className="btn btn-secondary" onClick={()=>increaser()}>upgrade</button>
  </div>
  <button type="submit" className="btn btn-primary">Submit</button>
       </form>
       <Link className="btn btn-danger" to={"/"}>Home</Link>
       </>
        );
}
export default FormCr;