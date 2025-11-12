
export function Input({refrence,placeholder,width}:{refrence:any,
    placeholder:string,
    width?:string|number
}){
    return <div>
        <input ref={refrence} className={`${width} px-4 py-2 border roundend mt-5 rounded-md `} placeholder={placeholder} type="text"></input>
    
    </div>
    
}