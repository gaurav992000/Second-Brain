import { useRef } from "react"
import { Button } from "../component/button"
import { Input } from "../component/Input"
import axios from "axios"
import { BackendURL } from "../config"
import { useNavigate } from "react-router-dom"



export function SignUp(){
    const Usernameref=useRef<HTMLInputElement>()
    const passwordref=useRef<HTMLInputElement>()
    const navigate=useNavigate()


async function handleSignup(){
    const username=Usernameref.current?.value;
    console.log(username);
    
    const password=Usernameref.current?.value
// password name here and in the backend req.body.password should be same
  await  axios.post(BackendURL +"/api/v1/signup",{
        username,
        password

    })

alert("you have signed up!")
navigate("/signin")

}

    return(
        <div className="h-screen w-screen bg-gray-200 flex justify-center items-center">

<div className="bg-white rounded-xl border min-w-48 p-8">
    <Input refrence={Usernameref} placeholder="Username"></Input>
    <Input refrence={passwordref} placeholder="Password"></Input>
    <div className="flex jsutify-center pt-4"> 
    <Button size="md" onClick={handleSignup} variant="primary" text ="Signup" fullWidth={true}></Button>
</div>
</div>



        </div>
    )
}