import React ,{Component} from 'react';
import Modal from 'react-bootstrap/Modal'

export class ImageModel extends Component{

    constructor(props){
        super(props)
    }
    render()
    {
        return(
             <Modal  show={props.yogas.show} onHide={props.yogas.ontoggle}>
              <Modal.Header closeButton>
                <Modal.Title>Modal heading</Modal.Title>
              </Modal.Header>
              <Modal.Body>Woohoo, you're reading this text in a modal!</Modal.Body>
              <Modal.Footer>
                <Button variant="secondary" onClick={()=> setShow(false)}>
                  Close
                </Button>
                <Button variant="primary" onClick={()=> setShow(false)}>
                  Save Changes
                </Button> 
               </Modal.Footer>
            </Modal> 

        )
    }
}