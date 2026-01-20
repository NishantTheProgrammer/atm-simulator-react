
import Machine from "./components/Machine"
import ApplyCard from "./components/ApplyCard"
import { useState } from "react"
import { Button, Modal } from "react-bootstrap";


function App() {
  const [show, setShow] = useState(true);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <>
      <Machine />
      <Button className="m-2" size="sm"  onClick={handleShow} >Appy for card</Button>


      <Modal show={show} onHide={handleClose} centered>
        <Modal.Header closeButton>
          <Modal.Title>Appy for a new Card</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <ApplyCard onApplied={handleClose} />
        </Modal.Body>
      </Modal>
    </>
  )
}

export default App
