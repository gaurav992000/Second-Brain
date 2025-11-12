import { useRef } from "react"
import { CrossIcon } from "../icons/CrossIcon"
import { Button } from "./button"
import axios from "axios"
import { BackendURL } from "../config"



interface Notesprops {
    open: boolean,
    close: () => void

}


export function NotesAdd(props: Notesprops) {
    const inputref=useRef<HTMLTextAreaElement>(null)


    function SubmitNote() {

// @ts-ignore
       const content=inputref.current?.value
       axios.post(BackendURL+"/api/v1/brain/notes",{notes:content},{headers:{
           "Authorization":localStorage.getItem("token")
       }})
    alert("Note added")

    }


    return (<>
        <div >
            {
                props.open && <div className="w-screen h-screen fixed top-0 bg-gray-400 bg-opacity-50 flex justify-center items-center left-0">

                    <div className=" bg-white size-80 rounded-md shadow-md p-4 overflow-hidden">
                        <div>
                            <div className="w-1"><CrossIcon onClick={props.close}></CrossIcon></div>
                        </div>
                      
                        <textarea ref={inputref} className="w-full border-none h-56 p-2 resize-none rounded-md" placeholder="Write your notes here..."></textarea>

                        <div className="flex justify-end">
                            <Button variant="primary" size="md" text="Add" onClick={SubmitNote} ></Button>
                            </div>
                    

                    </div>

                </div>
            }

        </div>
    </>





    )
}