import { useState } from "react";

export function Darkmode(){

const[darkon,setdark]=useState(false)

const toggleDarkMode = () => {
    setdark(prevDarkon => !prevDarkon);
  };
return {darkon,toggleDarkMode}
}