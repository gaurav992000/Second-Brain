// import { useState } from "react"

// // interface diffprops {
// //     text:string
// // }

// export function DiffCard(){
//     const[types,SETTYPE]=useState<string>("")
    
//     const typefunction=(text:string)=>{
       
        
// SETTYPE(text)
    
        


//     }
    
//     console.log(types);
    

// return {types,typefunction}
// }

import  { createContext, useContext, useState, ReactNode } from 'react';

interface TypeContextType {
  types: string;
  typefunction: (text: string) => void;
}

const TypeContext = createContext<TypeContextType | undefined>(undefined);

export function TypeProvider({ children }: { children: ReactNode }) {
  const [types, setTypes] = useState<string>("");
  
  const typefunction = (text: string) => {
    setTypes(text);
  };
  
  return (
    <TypeContext.Provider value={{ types, typefunction }}>
      {children}
    </TypeContext.Provider>
  );
}
export function useType() {
    const context = useContext(TypeContext);
    if (context === undefined) {
      throw new Error('useType must be used within a TypeProvider');
    }
    return context;
  }