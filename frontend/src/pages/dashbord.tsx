import { useEffect, useState } from 'react'
import '../App.css'
import { Button } from '../component/button'
import { Card } from '../component/card'
import { Contentmodal } from '../component/createcontentmodel'
import { PlusIcon } from '../icons/plusicon'
import { SideBar } from '../component/sidbar'
import { UseContent } from '../hooks/usecontent'
import axios from 'axios'
import { BackendURL } from '../config'
import { Darkmode } from '../hooks/darkmode'

import { ShareIcon } from '../icons/Share'
import { Darkmoon } from '../icons/darkmode'
import { NotesAdd } from '../component/Notes'
import { NoteCard } from '../component/NoteCard'

import { NoteContent } from '../hooks/NotesContent'
import { useType } from '../hooks/changehook'
import { OpenClose, openState } from '../hooks/openclose'
import { useRecoilState } from 'recoil'



function Dashbord() {
  const { isOpen } = OpenClose();
  const [modalopen, Setmodalopen] = useState(false)
  const [Noteopen, Notemodalopen] = useRecoilState(openState)
  // const[darkon,setdark]=useState(false)
  // function darkmode(){
  //   return setdark(true)

  // }
  const { types, typefunction } = useType()
  console.log(types);

  const { contents } = UseContent();
  // console.log(contents);

  //@ts-ignore
  // const conten=contents.filter((item)=>item.type==types)
  //  console.log(conten);

  // const typee=contents.type

  // console.log(TYPE);
  useEffect(() => {
    typefunction("Home")
  }, [])



  const { notes } = NoteContent()
  const { darkon, toggleDarkMode } = Darkmode()

  return (<div >
    <SideBar darkon={darkon} ></SideBar>



    <div className={`ml-40 p-4 min-h-screen  ${darkon ? 'bg-black text-white' : 'bg-gray-100'}`}>
      {/*NOTE TAKING Card*/}




      <Contentmodal open={modalopen} close={() => { Setmodalopen(false) }} ></Contentmodal>
      
      <NotesAdd open={Noteopen} close={() => { Notemodalopen(false) }}></NotesAdd>

      <div className='flex justify-end gap-4'>

        {/* button for to add text note*/}
       {/**<Button flex='flex' variant='primary' size='sm' text='Add Notes' onClick={() => { Notemodalopen(true) }}></Button> */} 

        <Button flex='flex' startIcon={<PlusIcon size='md' ></PlusIcon>} variant="primary" size='sm' text='Add content' darkon={darkon} onClick={() => { Setmodalopen(true) }}></Button>

        <Button flex='flex' darkon={darkon} variant="primary" size='sm' text='Share' startIcon={<ShareIcon size='md'></ShareIcon>} onClick={async () => {
          const response = await axios.post(BackendURL + "/api/v1/brain/share", { share: true }
            , {
              headers: {
                "Authorization": localStorage.getItem("token")
              }
            });
          const sharUrl = `http://localhost:5173/share/${response.data.hash}`
          alert(sharUrl)

        }}></Button>

        <Button flex='flex' startIcon={<Darkmoon size='md'></Darkmoon>} darkon={darkon} variant='primary' size='sm' text='dark mode' onClick={() => { toggleDarkMode() }} ></Button>
      </div>




      <div className={`flex gap-4 flex-wrap pt-4 ${darkon ? 'bg-black' : 'bg-gray'}`}>



        {types == "Home" ? (contents

          .map(({ type, link, title }) => (
            <Card
              darkon={darkon}
              type={type}
              link={link}
              title={title}
            />
          ))) : (contents
            .filter(({ type }) => type == types)
            .map(({ type, link, title }) => (
              <Card
                darkon={darkon}
                type={type}
                link={link}
                title={title}
              />
            )))}


        {/* {  contents
     .filter(({ type }) => type ==types)
    .map(({ type, link, title }) => (
      <Card
        darkon={darkon}
        type={type}
        link={link}
        title={title}
      />
    ))}
        */}


        {types=="Notes"?notes.map(({notes})=><NoteCard notes={notes}></NoteCard>):""}




      </div>

    </div>




  </div>




  )
}

export default Dashbord