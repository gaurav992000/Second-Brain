import { useEffect, useState } from "react";
import { BackendURL } from "../config";
import axios from "axios";

export function UseContent(){
    const[contents,setContents]=useState([])

       function refresh(){
        axios.get(BackendURL +"/api/v1/brain/content", {
            headers: {
                "Authorization": localStorage.getItem("token")
            }
       

       }) .then((response)=>{
        setContents(response.data.content)
    })
        
    }
     
    useEffect(()=>{
        refresh()  //initial call to fetch data
        let interval=setInterval(()=>{
            refresh()//// Periodic call to fetch data every 10 seconds
        },10*1000)

        return()=>{
            clearInterval(interval) // Cleanup interval on component unmount
        }
        
    },[])



    return {contents,refresh};
}