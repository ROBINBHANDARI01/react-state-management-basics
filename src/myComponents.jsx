import  { useState } from "react";
function Mycom(){

    const [text,inpTxt] = useState("Username");
    const [num,inpNum] = useState(1);
    const [coment,setComent] = useState("Enter instructions");
    const [pay,payMethod] = useState();
    const [ship,setShip] = useState("")
const textChange=(event)=>{
    inpTxt(event.target.value);
}

const numChange=(event)=>{
    inpNum(event.target.value);
}

const comentChange=(event)=>{
    setComent(event.target.value);
}

const methodChange=(event)=>{
    payMethod(event.target.value)
}

const shipMethod=(event)=>{
    setShip(event.target.value);
}
    return(
        <div className="container">
            <h1>Enter Your Details</h1>
            <h2>Your Name :-</h2>
        <input value={text} onChange={textChange}></input>

        <h2>Order Quantity :-</h2>
        <input type="number" value={num} onChange={numChange}></input>

        <h2>Dilevery Instructions :-</h2>
        <textarea type="textarea" value={coment} onChange={comentChange}></textarea>

        <h2>Payment Method :-</h2>
        <select value={pay} onChange={methodChange}>
            <option value="">Select and option</option>
            <option value="Visa" >Visa</option>
            <option value="Master Card">Master card</option>
            <option value="Upi">Upi</option>
        </select>

        <h2>Shipping method :-</h2>
        <label>
            <input type="radio" 
                    value="Delivery" 
                    checked={ship === "Delivery"} 
                    onChange={shipMethod}/>Delivery

        </label>
        <label>
            <input type="radio" 
                    value="Pick up" 
                    checked= {ship === "Pick up"} 
                    onChange={shipMethod}/>Pickup
        </label>

       <div className="showData">
  <h2>
    Name: <span className="lightText">{text}</span>
  </h2>

  <h2>
    Product Quantity: <span className="lightText">{num}</span>
  </h2>

  <h2>
    Delivery Instructions: <span className="lightText">{coment}</span>
  </h2>

  <h2>
    Payment Method: <span className="lightText">{pay}</span>
  </h2>

  <h2>
    Shipping Method: <span className="lightText">{ship}</span>
  </h2>
</div>

        </div>
    );
}

export default Mycom;