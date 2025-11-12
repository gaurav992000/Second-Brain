import { atom, useRecoilState } from "recoil"

export const openState = atom({
    key: "openState",
    default: false
})

export function OpenClose() {
    const [isOpen, setIsOpen] = useRecoilState(openState)

    const toggleOpen = () => {
        setIsOpen(prev => !prev)
    }
    console.log(isOpen);
    

    return {
        isOpen,
        toggleOpen
    }
}