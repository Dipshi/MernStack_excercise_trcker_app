import React, { Component } from 'react';
import axios from 'axios';


export default class CreateYoga extends Component {
    constructor(props)
    {
        super(props);

        this.onChangeName=this.onChangeName.bind(this);
        this.onChangeDescription=this.onChangeDescription.bind(this);
        this.onChangeMainEffectiveArea=this.onChangeMainEffectiveArea.bind(this);
        this.onChangeOtherBenefits=this.onChangeOtherBenefits.bind(this);
        this.onChangeImage=this.onChangeImage.bind(this);
        this.onSubmit=this.onSubmit.bind(this);

        this.state= {
            name:'',
            description:'',
            mainEffectiveArea:'',
            otherBenefits:'',
            image:'',
            yogasanas:[]
            
        }
    }

    componentDidMount() {
        //should mention if i need to load anything .this function is first called when the component is mounted
        // axios.get('http://localhost:5000/yogas/')
        //   .then(response => {
        //     if (response.data.length > 0) {
        //       this.setState({
        //         yogas: response.data.map(yogas => yogas.username),
        //         name: response.data[0].name
        //       })
        //     }
        //   })
        //   .catch((error) => {
        //     console.log(error);
        //   })
    
      }
    
      onChangeName(e) {
        this.setState({
          name: e.target.value
        })
      }
    
      onChangeDescription(e) {
        this.setState({
          description: e.target.value
        })
      }
    onChangeMainEffectiveArea(e){
        this.setState({
            mainEffectiveArea:e.target.value
        })
    }
    onChangeOtherBenefits(e){
        this.setState({
            otherBenefits:e.target.value
        })
    }
    onChangeImage(e){
        this.setState({
            image:e.target.files[0]
        });
    }

    onSubmit(e){
        e.preventDefault();
        const formData = new FormData()
        formData.append('name', this.state.name)
        formData.append('description', this.state.description)
        formData.append('mainEffectiveArea', this.state.mainEffectiveArea)
        formData.append('otherBenefits', this.state.otherBenefits)
        formData.append('file', this.state.image)

        // const yogas=
        // {
        //     name:this.state.name,
        //     description:this.state.description,
        //     mainEffectiveArea:this.state.mainEffectiveArea,
        //     otherBenefits:this.state.otherBenefits,
        //     image:this.state.image


        // }
        axios.post('http://localhost:5000/yogas/addyoga/',formData)
        .then(res => console.log(res.data))
        .catch((error) => {
            console.log(error);
          });

        window.location='/yogas';   
    }


    render(){
        return (
            <div>
                <h3>Add new Yogasana</h3>
                <form onSubmit={this.onSubmit} encType="multipart/form-data" >
                    <div className="form-group"> 
                    <label>Name: </label>
                    <input  type="text"
                        required
                        className="form-control"
                        value={this.state.name}
                        onChange={this.onChangeName}
                        />

                    </div>
                    <div className="form-group"> 
                    <label>Description: </label>
                    <input  type="text"
                        required
                        className="form-control"
                        value={this.state.description}
                        onChange={this.onChangeDescription}
                        />
                    </div>
                    <div className="form-group">
                    <label>Main Areas Affected: </label>
                    <input 
                        type="text" 
                        className="form-control"
                        value={this.state.mainEffectiveArea}
                        onChange={this.onChangeMainEffectiveArea}
                        />
                    </div>
                    <div className="form-group">
                    <label>Other Benefits</label>
                    <input 
                    type="text"
                    className="form-control"
                    value={this.state.otherBenefits}
                    onChange={this.onChangeOtherBenefits} 
                    />
                    </div>
                    <div className="form-group">
                    <label>Image</label>
                    <div>
                        <input 
                        type="file"
                        name="file"
                        className="form-control"
                        onChange={this.onChangeImage} 
                        ></input>
                    </div>
                    </div>
                        <div className="form-group">
                    <input type="submit" value="Create asan Log" className="btn btn-primary" />
                    </div>
                </form>

            </div>
        )
    }

}