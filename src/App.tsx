import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";

import "./App.css";
import { RootState } from "./app/store";
import ReservationsCard from "./components/ReservationsCard";
import { addReservation } from "./feactures/reservationsSlice";
import { nanoid } from "@reduxjs/toolkit";



 const App =()=>{
  const dispatch = useDispatch();
  const reservation = useSelector((state: RootState )=>state.reservations.value);
  const [reservationEntered , setReservationEntered] = useState("");

  const reservationName =(e: React.ChangeEvent<HTMLInputElement>)=>{
    setReservationEntered(e.target.value);
  }

  const onClickHandlerReservation =()=>{
    if(!reservationEntered)return;
     dispatch(addReservation(reservationEntered))
     setReservationEntered("");
  }


  const resevertionRender = reservation.map((name)=>{   
    let id = nanoid();        
    return <ReservationsCard name={name} id={nanoid()} key={id}/>   
  })

  return (
    
    <div className="App">
      <div className="container">

        <div className="reservation-container">
          <div>
            <h5 className="reservation-header">Reservations</h5>
            <div className="reservation-cards-container">
              
             {resevertionRender}
         
            </div>
          </div>
          <div className="reservation-input-container">
            <input 
            value={reservationEntered}
            onChange={reservationName}
            />
            <button
            onClick={onClickHandlerReservation}
            >Add</button>
          </div>
        </div>


        <div className="customer-food-container">
          <div className="customer-food-card-container">
            <p>Selena Gomez</p>
            <div className="customer-foods-container">
              <div className="customer-food"></div>
              <div className="customer-food-input-container">
                <input />
                <button>Add</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;