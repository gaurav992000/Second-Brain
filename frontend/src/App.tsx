import { BrowserRouter,Routes,Route } from "react-router-dom"
import Dashbord from "./pages/dashbord"
import { SignUp } from "./pages/signup"
import { SignIn } from "./pages/Signin"
import { TypeProvider } from "./hooks/changehook"
import { RecoilRoot } from "recoil"
import { Landingpage } from "./pages/landingpage"

function App() {
  
  

  return (<BrowserRouter>
  <Routes>
    <Route path="/" element={<RecoilRoot><Landingpage></Landingpage></RecoilRoot>} />
    <Route path="/signup" element={<SignUp />} />
    <Route path="/dashbord" element={<TypeProvider><RecoilRoot><Dashbord /></RecoilRoot></TypeProvider>} />
<Route path="/signin" element={<SignIn />} />
  </Routes>
  
  
  </BrowserRouter>
    
   

   
    
  )
}

export default App
