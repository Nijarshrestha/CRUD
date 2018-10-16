import React, { Component } from 'react';
import axios from 'axios';

class Registration extends Component {
  constructor(props){
    super(props);

    this.state = {
      Name: "",
      Gender: "",
      Phone_Number: "",
      Email: "",
      Address: "",
      Date_Of_Birth: "",
      Nationality: "",
      Education_Background: ""
    }
    this.handleChangeName = this.handleChangeName.bind(this);
    this.handleChangeGender = this.handleChangeGender.bind(this);
    this.handleChangePhone_Number = this.handleChangePhone_Number.bind(this);
    this.handleChangeEmail = this.handleChangeEmail.bind(this);
    this.handleChangeAddress = this.handleChangeAddress.bind(this);
    this.handleChangeDate_Of_Birth = this.handleChangeDate_Of_Birth.bind(this);
    this.handleChangeNationality = this.handleChangeNationality.bind(this);
    this.handleChangeEducation_Background = this.handleChangeEducation_Background.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChangeName(event){
    this.setState({Name: event.target.value})
  };
  handleChangeGender(event){
    this.setState({Gender: event.target.value})
  };
  handleChangePhone_Number(event){
    this.setState({Phone_Number: event.target.value})
  };
  handleChangeEmail(event){
    this.setState({Email: event.target.value})
  };
  handleChangeAddress(event){
    this.setState({Address: event.target.value})
  };
  handleChangeDate_Of_Birth(event){
    this.setState({Date_Of_Birth: event.target.value})
  };
  handleChangeNationality(event){
    this.setState({Nationality: event.target.value})
  };
  handleChangeEducation_Background(event){
    this.setState({Education_Background: event.target.value})
  };

  handleSubmit(event){
    event.preventDefault();
    const user = {
      Name: this.state.Name,
      Gender: this.state.Gender,
      Phone_Number: this.state.Phone_Number,
      Email: this.state.Email,
      Address: this.state.Address,
      Date_Of_Birth: this.state.Date_Of_Birth,
      Nationality: this.state.Nationality,
      Education_Background: this.state.Education_Background
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
            <input type="text" name="Name"/>
          </label><br/><br/>
          <label>
            Gender:
            <input type="text" name="Gender"/>
          </label><br/><br/>
          <label>
            Phone_Number:
            <input type="number" name="Phone_Number"/>
          </label><br/><br/>
          <label>
            Email:
            <input type="text" name="Email"/>
          </label><br/><br/>
          <label>
            Address:
            <input type="text" name="Address"/>
          </label><br/><br/>
          <label>
            Date of birth:
            <input type="date" name="Date_Of_Birth"/>
          </label><br/><br/>
          <label>
            Nationality:
            <input type="text" name="Nationality"/>
          </label><br/><br/>
          <label>
            Education Background:
            <input type="area" name="Education_Background"/>
          </label><br/><br/>
          <button className="" type='submit' onClick={this.handleSubmit}>
            Submit
          </button>
        </form>
      </div>
    )
  }
}

export default Registration;
