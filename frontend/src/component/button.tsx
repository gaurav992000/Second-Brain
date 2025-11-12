import { ReactElement } from "react";

interface Buttonprops{
    variant:"primary" |"secondary";
    size:"sm"|"md"|"lg";
    text?:string;
    startIcon?:ReactElement;
    endIcon?:ReactElement;
onClick?:()=>void;/*? means some button dont have the onclick functionality*/
fullWidth?:boolean,
loading?:boolean,
darkon?:boolean,
flex?:"flex"




}
// const flexstyle={
//     "flex":"flex",
//     "justify-center":"justify-center",
//     "itmes-center":"itmes-center"


// }

const variantStyle= {
   
    "primary":"bg-purple-600 text-white",
    "secondary":"bg-purple-400 text-purple-600"
} 
const defaultStyle="px-4 py-2 rounded-md flex";

 const sizeStyle={
    "sm":"p-2", 
    "md":"p-4",
    "lg":"p-6"
 }
export function Button(props:Buttonprops){
return <div className="flex justify-center items-center">
    <button className={`${props.darkon? "bg-dark-100 text-white": variantStyle[props.variant]} ${defaultStyle} ${sizeStyle[props.size]} ${props.fullWidth ?"w-full flex justify-center items-center":""}`  }
    
    onClick={props.onClick}>
        { props.flex?<div className="flex justify-center items-center">{props.startIcon ? <div className="pr-2">{props.startIcon}</div>:null}<h1 className="text-sm">{props.text}</h1></div>:

<div >{props.startIcon ? <div className="pr-2">{props.startIcon}</div>:null}<h1 className="text-sm">{props.text}</h1></div>
    
    
    }</button>
    </div>
}

{/* <Button variant="primary" size="md" onClick={()=>{}} text={"adss"}/> */}