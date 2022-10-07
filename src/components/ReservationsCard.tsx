import React from 'react'
import { useDispatch } from 'react-redux'
import { removeReservation } from '../feactures/reservationsSlice';


interface ReservationCardTypes{
    name: string,
    id: string
}


export default function ReservationsCard({name, id }:ReservationCardTypes) {
    const dispatch = useDispatch();
    
    
    const HandlerClickReservation =(id:string)=>{
      dispatch(removeReservation(id));
    }

    return <div 
    onClick={()=>HandlerClickReservation(id)}
    className="reservation-card-container"
    >{name}
    </div>
  
}
