import React, { Component } from 'react';
import axios from 'axios';

class Registration extends Component {
  constructor(props){
    super(props);

    this.state = {
      name: "",
      gender: "",
      phone: "",
      email: "",
      address: "",
      dob: "",
      nationality: "",
      education_background: ""
    }
    this.handleChangename = this.handleChangename.bind(this);
    this.handleChangegender = this.handleChangegender.bind(this);
    this.handleChangephone = this.handleChangephone.bind(this);
    this.handleChangeemail = this.handleChangeemail.bind(this);
    this.handleChangeaddress = this.handleChangeaddress.bind(this);
    this.handleChangedob = this.handleChangedob.bind(this);
    this.handleChangenationality = this.handleChangenationality.bind(this);
    this.handleChangeeducation_background = this.handleChangeeducation_background.bind(this);
  }

  handleChangename(event){
    this.setState({name: event.target.value})
  };
  handleChangegender(event){
    this.setState({gender: event.target.value})
  };
  handleChangephone(event){
    this.setState({phone: event.target.value})
  };
  handleChangeemail(event){
    this.setState({email: event.target.value})
  };
  handleChangeaddress(event){
    this.setState({address: event.target.value})
  };
  handleChangedob(event){
    this.setState({dob: event.target.value})
  };
  handleChangenationality(event){
    this.setState({nationality: event.target.value})
  };
  handleChangeeducation_background(event){
    this.setState({education_background: event.target.value})
  };

  handleSubmit(event){
    event.preventDefault();
    const user = {
      Name: this.state.name,
      Gender: this.state.gender,
      Phone: this.state.phone,
      Email: this.state.email,
      Address: this.state.address,
      Date_Of_Birth: this.state.dob,
      Nationality: this.state.nationality,
      Education_Background: this.state.education_background
    }
    axios({
      method: 'post',
      url: 'http://localhost:5000/api/register',
      data: {user}
    })
    .then(response =>{
      console.log(response)
      if(response.data){
        console.log("Successfully Registered");
      }
      else{
        console.log('Registered error')
      }
    })
  }

  render() {
    return (
      <div className="">
        <form>
          <label>
            Name:
            <input type="text" name="name"/>
          </label><br/><br/>
          <label>
            Gender:
            <input type="text" name="gender"/>
          </label><br/><br/>
          <label>
            Phone:
            <input type="number" name="phone"/>
          </label><br/><br/>
          <label>
            Email:
            <input type="text" name="email"/>
          </label><br/><br/>
          <label>
            Address:
            <input type="text" name="address"/>
          </label><br/><br/>
          <label>
            Date of birth:
            <input type="date" name="dob"/>
          </label><br/><br/>
          <label>
            Nationality:
            <input type="text" name="nationality"/>
          </label><br/><br/>
          <label>
            Education Background:
            <input type="area" name="education_background"/>
          </label><br/><br/>
        </form>
      </div>
    )
  }
}

export default Registration;
