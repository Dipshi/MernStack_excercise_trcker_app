import React, { Component,useState } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import Accordion from 'react-bootstrap/Accordion'
import Card from 'react-bootstrap/Card'
import Button from 'react-bootstrap/Button'
import Modal from 'react-bootstrap/Modal'
import Image from 'react-bootstrap/Image'



const Yoga = props => (
      <Accordion>
        <Card>
            <Card.Header>
            <Accordion.Toggle as={Button} variant="link" eventKey="0">
              {props.yogas.name}
            </Accordion.Toggle>
            </Card.Header>
            <Accordion.Collapse eventKey="0">
            <Card.Body>
            <p><b>Description: </b>{props.yogas.description}</p> 
            <hr></hr>
            <p><b>Main Areas Affected:</b>{props.yogas.mainEffectiveArea}</p> 
            <hr></hr>
            <p><b>Other Benefits:</b>{props.yogas.otherBenefits}</p>
            <hr></hr>
            <p><b>Other:</b>{props.yogas.otherBenefits}</p>
            {/* <img src={`../../backend/uploads/${props.yogas.image}`} ></img> */}
            <Example name={props.yogas.image} />
            </Card.Body>
            </Accordion.Collapse>
        </Card>
      </Accordion>

  )
  function Example(props) {
    const [show, setShow] = useState(false);
  
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
    
    return (
        <>
        <Button variant="primary" onClick={handleShow}>
          Launch demo modal
        </Button>
  
        <Modal show={show} onHide={handleClose} animation={false}  size="sm" centered>
          {/* <Modal.Header closeButton>
            <Modal.Title id="example-custom-modal-styling-title">Modal heading</Modal.Title>
          </Modal.Header> */}
          <Modal.Body>
          <img src={require(`../../backend/uploads/${props.name}`)} style={{alignItems:'center',alignItems: "center"}} className="center" ></img>
          </Modal.Body>
          <Modal.Footer>
            <Button variant="secondary" onClick={handleClose}>
              Close
            </Button>
          </Modal.Footer>
        </Modal>
      </>
    );
  }
  
  
export default class yogaList extends Component {

    constructor(props)
    {
        super(props);
        // this.deleteExercise = this.deleteExercise.bind(this)
        this.ontoggle=this.ontoggle.bind(this);
        
        this.state = {yogas: [],show:false};

    }
    
    componentDidMount() {
        axios.get('http://localhost:5000/yogas/')
        .then(response => {
          this.setState({yogas: response.data })
        })
        .catch((error) => {
          console.log(error);
        })
        // this.setState({show: false})


      }
    delete(id) {
        axios.delete('http://localhost:5000/yogas/'+id)
          .then(response => { console.log(response.data)});
    
        this.setState({
          yogas: this.state.yogas.filter(el => el._id !== id)
        })
      }
    
      yogaList() {
        return this.state.yogas.map(current => {
          return <Yoga yogas={current} sdelete={this.delete} key={current._id}/>;
        })
      }

      ontoggle(){
        this.setState({show: !this.state.show})
      }
    

    render()
    {
        return(
        <div>{this.yogaList()}</div>
        )
    }
}
