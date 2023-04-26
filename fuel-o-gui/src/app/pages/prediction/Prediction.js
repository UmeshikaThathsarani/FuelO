import React, { Component } from 'react';
import './Prediction.css';
import axios from 'axios';

import { Radio } from 'antd';

class Prediction extends Component {

  constructor(props){
    super(props);
    this.state = {
      year : '',
      make : '',
      _class : '',
      drive : '',
      transmission : '',
      engineCylinders: '',
      turbocharger: '',
      supercharger: '',
      fuelType: ''
    }

  }

  handleSubmit = (event) =>{
    event.preventDefault()
    console.log(this.state)
    axios
    .post('https://hbjlxoifgj.execute-api.us-east-1.amazonaws.com/lambda-function-fuel-o',this.state)
    .then(
      res => alert(res.data)
      );
  }
  
  handleInputChange1 = (event) =>{
    event.preventDefault()
    this.setState({
        year : event.target.value
    })
  }

  handleInputChange2 = (event) =>{
    event.preventDefault()
    this.setState({
        make : event.target.value
    })
  }

  handleInputChange3 = (event) =>{
    event.preventDefault()
    this.setState({
        _class : event.target.value
    })
  }

  handleInputChange4 = (event) =>{
    event.preventDefault()
    this.setState({
        drive : event.target.value
    })
  }

  handleInputChange5 = (event) =>{
    event.preventDefault()
    this.setState({
        transmission : event.target.value
    })
  }

  handleInputChange6 = (event) =>{
    event.preventDefault()
    this.setState({
        engineCylinders: Number(event.target.value)
    })
  }

  handleInputChange7 = (event) =>{
    event.preventDefault()
    this.setState({
        turbocharger: event.target.value
    })
  }

  handleInputChange8 = (event) =>{
    event.preventDefault()
    this.setState({
        supercharger: event.target.value
    })
  }


  handleInputChange9 = (event) =>{
    event.preventDefault()
    this.setState({
        fuelType: event.target.value
    })
  }

  render(){

    const {year, make, _class, drive, transmission, engineCylinders, turbocharger, supercharger, fuelType} = this.state

    return(

      <div className="container-prediction">
        <div className="container-predict-input">

          <form onSubmit={this.handleSubmit}>
                <div className="container-predict-header">
                    <h2> Fuel Consumption Prediction </h2>
                </div>

                  <div className="container-predict-div-left">
                    <div className="input-divs" >
                      <h3>1. Vehicle Manufactured Year 
                        <span>
                          <input  style={{marginLeft:"2%", float:"right", width:"200px"}} required
                          type="number" id="year" name="year" onChange={this.handleInputChange1}
                          step="1" min='1984' max='2017' value={year} />
                        </span>
                      </h3>
                    </div>

                    <div className="input-divs" >
                      <h3>2. Vehicle Brand
                        <span>
                          <input style={{marginLeft:"2%", float:"right", width:"200px"}} type="text" required
                          id="make" name="make" onChange={this.handleInputChange2}
                          value={make} />
                        </span>
                      </h3>
                    </div>

                    <div className="input-divs" >
                      <h3>3. Vehicle Class
                          <span>
                              <input style={{marginLeft:"2%", float:"right", width:"200px"}} type="text" required
                              id="_class" name="_class" onChange={this.handleInputChange3}
                              value={_class}/>
                          </span>
                        </h3>
                    </div>

                    <div className="input-divs" >
                      <h3>4. Drive
                          <span>
                              <input style={{marginLeft:"2%", float:"right", width:"200px"}} type="text" required
                              id="drive" name="drive" onChange={this.handleInputChange4}
                              value={drive}/>
                          </span>
                        </h3>
                    </div>

                    <div className="input-divs" >
                      <h3>5. Transmission
                          <span>
                              <input style={{marginLeft:"2%", float:"right", width:"200px"}} type="text" required
                              id="transmission" name="transmission" onChange={this.handleInputChange5}
                              value={transmission}/>
                          </span>
                        </h3>
                    </div>

                    <div className="input-divs" >
                      <h3>6. Number of Engine Cylinders
                        <span>
                          <input style={{marginLeft:"2%", float:"right", width:"200px"}} type="number" required
                          id="engineCylinders" name="engineCylinders" onChange={this.handleInputChange6}
                          step="1" min='2' max='16' value={engineCylinders} />
                        </span>
                      </h3>
                    </div>

                    <h3>7. Is Turbocharger In Use 
                    <div className="radio-divs">
                      <Radio.Group onChange={this.handleInputChange7} value={turbocharger}>
                          <Radio id="turbocharger_yes" value={1} name="turbocharger">Yes</Radio>
                          <Radio id="turbocharger_no" value={0} name="turbocharger">No</Radio>
                      </Radio.Group>
                    </div></h3>

                    <h3>8. Is Supercharger In Use 
                    <div className="radio-divs">
                      <Radio.Group onChange={this.handleInputChange8} value={supercharger}>
                          <Radio id="supercharger_yes" value={1} name="supercharger">Yes</Radio>
                          <Radio id="supercharger_no" value={0} name="supercharger">No</Radio>
                      </Radio.Group>
                    </div></h3>

                    <div className="input-divs" >
                      <h3>9. Fuel Type
                        <span>
                          <input style={{marginLeft:"2%", float:"right", width:"200px"}} type="text" required
                          id="fuelType" name="fuelType" onChange={this.handleInputChange9}
                          value={fuelType}/>
                        </span>
                      </h3>
                    </div>

                  </div>

                <div className="container-predict-submit">
                  <input type="submit" value="Submit" />
                </div>

            </form>
        </div>

        <div className="container-predict-output"/>

      </div>


    )
  }

}

export default Prediction;
