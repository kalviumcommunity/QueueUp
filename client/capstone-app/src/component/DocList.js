/* eslint-disable no-undef */
/* eslint-disable jsx-a11y/heading-has-content */
import React, { useState, useEffect } from "react";
import "./Doc.css";
import { Link } from "react-router-dom";
// function Docdata() {
//   let data = [
//     {
//       Dcoimg:
//         "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS6oT9DZBnkbcGnMMQyARlpIPHFbuxeGihowVuI-8V_RA&usqp=CAU&ec=48600112",
//       name: "qwertyu",
//       specialist: "Cardiologist",
//       timings: "9:00 am to 12:30 pm",
//       count: 0,
//     },
//     {
//       Dcoimg:
//         "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS6oT9DZBnkbcGnMMQyARlpIPHFbuxeGihowVuI-8V_RA&usqp=CAU&ec=48600112",
//       name: "asdfghj",
//       specialist: "Cardiologist",
//       timings: "9:00 am to 12:30 pm",
//       count: 0,
//     },
//     {
//       Dcoimg:
//         "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS6oT9DZBnkbcGnMMQyARlpIPHFbuxeGihowVuI-8V_RA&usqp=CAU&ec=48600112",
//       name: "asdfghjk",
//       specialist: "Cardiologist",
//       timings: "9:00 am to 12:30 pm",
//       count: 0,
//     },
//     {
//       Dcoimg:
//         "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS6oT9DZBnkbcGnMMQyARlpIPHFbuxeGihowVuI-8V_RA&usqp=CAU&ec=48600112",
//       name: "qazxsde",
//       specialist: "Cardiologist",
//       timings: "9:00 am to 12:30 pm",
//       count: 0,
//     },
//     {
//       Dcoimg:
//         "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS6oT9DZBnkbcGnMMQyARlpIPHFbuxeGihowVuI-8V_RA&usqp=CAU&ec=48600112",
//       name: "plkmnjhy",
//       specialist: "Cardiologist",
//       timings: "9:00 am to 12:30 pm",
//       count: 0,
//     },
//     {
//       Dcoimg:
//         "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS6oT9DZBnkbcGnMMQyARlpIPHFbuxeGihowVuI-8V_RA&usqp=CAU&ec=48600112",
//       name: "vcdfrgthnbvf",
//       specialist: "Cardiologist",
//       timings: "9:00 am to 12:30 pm",
//       count: 0,
//     },
//   ];
//   return data;
// }
export default function Doclist() {
  const [timing, setTiming] = useState("");
  const [name, setName] = useState("");
const[data,setdata] = useState([]);
  const handleClick = () => {
    localStorage.setItem("time", timing);
    localStorage.setItem("name", name);
  };


  useEffect(()=>{
    fetch("http://localhost:2917/User")
        .then((response) => response.json())
        .then((data) => {
          // console.log(data);
          setdata(data);
        })
        .catch((error) => {
          console.log(" failed to fetch");
        })
  },[])
  
  return (
    <main className="DocContainer">
        {
        data.map((abc) => {
        console.log(abc);
        return (
          <div className="Docapp">
            <div className="Doc-token">
              <h6 className="token">#Current Num:</h6>
              <p className="Token-Num">{localStorage.getItem("Num")}</p>
            </div>
            <div className="SubContainer">
              <div className="img-div">
                <img className="Doc-img" src={abc.Docimg} alt="" />
              </div>
              <div className="div-list">
                <h1
                  className="lit"
                  value={name}
                  onChange={(abd) => setName(abd.target.value)}
                >
                  {abc.DoctorName}
                </h1>
                <h2 className="lit-1">{abc.Specialty}</h2>
                <h3 className="lit-2">{abc.timings}</h3>
              </div>
            </div>
            <div className="SubContainer-1">
              <div className="doc-lit">
                <div className="slot-1">
                  <select
                    className="select-1"
                    value={timing}
                    onChange={(event) => setTiming(event.target.value)}
                  >
                    <option className="mrng" value="Morning">
                      Morning
                    </option>
                    <option>1| 9.30 Am to 10.30Am </option>
                    <option>2| 10.30 Am to 11.00Am</option>
                    <option>3| 11.00 Am to 11.30Am</option>
                    <option>4| 11.30 Am to 12.00pm </option>
                    <option>5| 12.00 pm to 12.30pm </option>
                  </select>
                </div>
                <div className="slot-2">
                  <select
                    className="select-1"
                    value={timing}
                    onChange={(Event) => setTiming(Event.target.value)}
                  >
                    <option value="Afternoon">Afternoon</option>
                    <option>1| 1.30Pm to 2.00Pm </option>
                    <option>2| 2.00Pm to 2.30Pm </option>
                    <option>3| 2.30Pm to 3.00Pm </option>
                    <option>4| 3.00Pm to 3.30Pm </option>
                    <option>5| 3.30Pm to 4.00Pm </option>
                  </select>
                </div>
              </div>
              <Link to="/Pay">
                <button id="btn1" onClick={handleClick}>
                  Book Now
                </button>
              </Link>
            </div>
          </div>
        );
      })}
    </main>
  );
}