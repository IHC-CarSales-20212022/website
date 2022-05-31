import { useState } from "react"
import Car from "./Car"
import 'antd/dist/antd.css';

const Cars = ({cars }) => {
    
  
    return (
    <>
      {cars.map((car) => (<Car key = {car.id} car={car}></Car>))}
    </>
  )
}

export default Cars
