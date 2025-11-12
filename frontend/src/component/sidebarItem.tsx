import { ReactElement } from "react"
import { useType } from "../hooks/changehook"

export function SideBarItems({icon,text}:{
    icon:ReactElement,
    text:string,
    darkon:boolean
   
})


{const{typefunction}=useType()
    return( <div className={` flex items-center mt-6 text-gray-700 cursor-pointer hover:bg-gray-400  rounded max-w-48`} >
       
            <div  >
                {icon}

            </div>
            <div className="ml-3">
                <button onClick={()=>{typefunction(text)}} >{text}</button>
            </div>
        </div>
    )
}