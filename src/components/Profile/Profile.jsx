import React from 'react'
import { UserContext } from "../../contextApi/UserContext";
import { useContext } from "react";


export const profile = () => {

  const {mail} = useContext(UserContext);

  return (
    <div>
      <h1>hola</h1>
    </div>
  )
}


