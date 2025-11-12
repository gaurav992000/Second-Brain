
import axios from "axios";
import { Button } from "../component/button"
import { Input } from "../component/Input"
import { BackendURL } from "../config";
import { useRef } from "react";

import { useNavigate } from "react-router-dom";

import { atom, useRecoilState } from "recoil"


export const opensignin=atom({
    key:"opensignin",
    default:false
})
export function useSignin(){
    const[isopen,setIsopen]=useRecoilState(opensignin);
   function signinclick(){
    setIsopen(true)
    return <SignIn></SignIn>

    }
    return {signinclick,isopen}
}




export function SignIn() {
   
    

    const Usernameref = useRef<HTMLInputElement>()
    const passwordref = useRef<HTMLInputElement>()
    const navigate = useNavigate()

    async function handleSigin() {
        const username = Usernameref.current?.value;
        console.log(username);

        const password = Usernameref.current?.value
        // password name here and in the backend req.body.password should be same
        const response = await axios.post(BackendURL + "/api/v1/signin", {
            username,
            password

        })
        
        alert("signin")
        const jwt = response.data.token
        localStorage.setItem("token", jwt);
        navigate("/dashbord")

    }

    return (
        <div className="h-screen w-screen bg-gray-200 flex justify-center items-center">

            <div className="bg-white rounded-xl border min-w-48 p-8">
                <Input refrence={Usernameref} placeholder="Username"></Input>
                <Input refrence={passwordref} placeholder="Password"></Input>
                <div className="flex jsutify-center pt-4">
                    <Button size="md" onClick={handleSigin} variant="primary" text="Signin" fullWidth={true}></Button>
                </div>
            </div>



        </div>
    )
}

