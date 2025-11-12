import axios from "axios";
import { BackendURL } from "../config";
import { useEffect, useRef, useState } from "react";


export function NoteContent(){
    const[notes,setnotes]=useState([])
    function refresh(){ 
        axios.get(BackendURL+"/api/v1/brain/note",{
            headers:{
                "Authorization": localStorage.getItem("token")
            }
        }).then(response=>{
            setnotes(response.data.responsenote)

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

        return{notes}
   
}