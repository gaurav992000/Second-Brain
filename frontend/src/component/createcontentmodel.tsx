import { useRef, useState } from "react"
import { CrossIcon } from "../icons/CrossIcon"
import { Button } from "./button"
import { Input } from "./Input"
import axios from "axios"
import { BackendURL } from "../config"
import { TwitterIcon } from "../icons/twitter"
import { Youtube } from "../icons/youtube"
import { OpenClose } from "../hooks/openclose"


enum ContentType {
    Youtube = "Youtube",
    Twitter = "Twitter",
    NOTES="NOTES"
}


export function Contentmodal({ open, close }: { open: boolean, close: () => void }) {
    const titleref = useRef<HTMLInputElement>()
    const linkref = useRef<HTMLInputElement>()
    const [type, setType] = useState(ContentType.Youtube)
    const [Noteopen, Notemodalopen] = useState(false)
    const { toggleOpen } = OpenClose();


    async function submitcontent() {
        const link = linkref.current?.value
        const title = titleref.current?.value
        console.log(link, title);




        await axios.post(BackendURL + "/api/v1/content", {
            link,
            title,
            type
        }, {
            headers: {
                "Authorization": localStorage.getItem("token")
            }
        }
        )
        alert("content added")
        close()

    }

    return <div>
        {open && <div className="w-screen h-screen  bg-gray-500 bg-opacity-55 fixed top-0 left-0 flex justify-center items-center">

            <div className="pl-6 size-80 bg-white shadow-xl shadow-gray-700  rounded-2xl p-4">

                <div className="flex gap-x-36 cursor-pointer  ">
                    <p className="text-[14px]">ADD CONTENT</p>

                    <CrossIcon onClick={close}></CrossIcon>
                </div>
                {/**input box */}
                <div className="w-full">
                    <Input width="w-full" refrence={titleref} placeholder={"Title"} ></Input>
                </div>


                <div className="w-[280px] h-[80px] border border-gray-400 rounded-xl flex justify-between p-3 mt-5" >
                    <div className=" border border-gray-400  size-14 rounded-md items-center m">
                        <Button onClick={() => { setType(ContentType.Twitter) }} text="twitter" startIcon={<TwitterIcon></TwitterIcon>}></Button>

                    </div>
                    <div className=" border border-gray-400  size-14 rounded-md items-center">
                        <Button onClick={() => { setType(ContentType.Youtube) }} text="youtube" startIcon={<Youtube></Youtube>}></Button>

                    </div>
                    <div className=" border border-gray-400  size-14 rounded-md items-center">
                        <Button text="note" startIcon={<TwitterIcon></TwitterIcon>} onClick={() => {
                            toggleOpen()

                        }}></Button>

                    </div>
                    <div className=" border border-gray-400  size-14 rounded-md items-center">
                        <Button text="twitter" startIcon={<TwitterIcon></TwitterIcon>}></Button>
                    </div>
                </div>

                <Input width="w-full" refrence={linkref} placeholder={"Link"}></Input>

                {/**<div className=" pl-8 flex gap-2 mt-3">

                    <Button size="md" variant={type === ContentType.Youtube ? "primary" : "secondary"} text="Youtube" onClick={() => { setType(ContentType.Youtube) }}></Button>

                    <Button size="md" variant={type === ContentType.Twitter ? "primary" : "secondary"} text="Twitter" onClick={() => { setType(ContentType.Twitter) }}></Button>





                </div> */}

                <div className="mt-3 flex justify-center">
                    <Button size="md" onClick={submitcontent} variant="primary" text="submit"></Button>
                </div>


            </div>


        </div>}

    </div>
}


