import ReactModal from "react-modal"
import Machine from "./components/Machine"
import ApplyCard from "./components/ApplyCard"
import { useState } from "react"


function App() {

  const [showApplyModal, setShowApplyModal] = useState(false);



  return (
    <>
      <Machine />
      <button onClick={() => setShowApplyModal(true)} >Appy for card</button>
      <ReactModal 
        isOpen={showApplyModal} 
        onRequestClose={() => setShowApplyModal(false)} 
        >
        <ApplyCard />
      </ReactModal>
    </>
  )
}

export default App
