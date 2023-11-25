import React from 'react'
import { UserContext } from "../../contextApi/UserContext";
import { useContext } from "react";


export const MiPerfil = () => {

  const {mail} = useContext(UserContext);

  return (
    <div>
      <h1>{mail}</h1>
    </div>
  )
}


