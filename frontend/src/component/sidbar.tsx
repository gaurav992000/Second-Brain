
import { useState } from "react";
import { BrainIcon } from "../icons/brain";
import { HomeIcon } from "../icons/home";
import { TwitterIcon } from "../icons/twitter";
import { Youtube } from "../icons/youtube";
import { SideBarItems } from "./sidebarItem";
import { NoteIcon } from "../icons/noteIcon";


export function SideBar({ darkon }: { darkon: boolean }) {

    const [ontoggle, setToggle] = useState(true)

    function Toggle() {
        setToggle(!ontoggle)
        console.log(ontoggle);

    }

    return (ontoggle ?
        <div className={`w-40 fixed top-0 left-0 pl-3 h-screen border-r ${darkon ? 'bg-black text-white' : 'bg-white'}`} >
            <div className="flex items-center cursor-pointer">
                <BrainIcon onclick={() => { Toggle() }} ></BrainIcon>
                <div className="ml-3  ">
                    <h1 className="">Second brain</h1>
                </div>


            </div>
            <SideBarItems darkon={darkon} icon={<HomeIcon></HomeIcon>} text="Home"></SideBarItems>

            <SideBarItems darkon={darkon} icon={<TwitterIcon size="md"></TwitterIcon>} text="Twitter"></SideBarItems>

            <SideBarItems darkon={darkon} icon={<Youtube size="md"></Youtube>} text="Youtube"></SideBarItems>
            <SideBarItems darkon={darkon} icon={<NoteIcon></NoteIcon>} text="Notes"></SideBarItems>

        </div> : <div className="fixed top-0 left-0 p-3">
            <BrainIcon onclick={() => { Toggle() }} ></BrainIcon>
        </div>
    )

}