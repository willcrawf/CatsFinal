import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class EditCat extends Component {
    state = {
        invalidForm: false,
        formData: this.props.location.state.cat,
    };

formRef = React.createRef();

handleSubmit = e => {
    e.preventDefault();
    this.props.handleUpdateCat(this.state.formData);
  };

handleChange = e => {
    const formData = {...this.state.formData, [e.target.name]: e.target.value};
    this.setState({
    formData,
    invalidForm: !this.formRef.current.checkValidity()
    });
};

render() {
    return (
        <>
        <h1>Edit Cat</h1>
        <form id = "ncForm" ref={this.formRef} onSubmit={this.handleSubmit}>
        <div>
            <label htmlFor="breed">Breed: </label>
            <input name ='breed' type="text" className="active" value={this.state.formData.breed} onChange={this.handleChange}/>
        </div>

        <div>
            <label htmlFor="pic">Picture URL: </label>
            <input name ='pic' type="text" className="active" pattern="^https ^http ^www [a-z][A-Z][0-9] .jpg$ .jpeg$ .png$ .gif$ {1,100}" value={this.state.formData.pic} onChange={this.handleChange}/>
        </div>

        <div>
            <label htmlFor="name">Name: </label>
            <input name ='name' type="text" className="active" value={this.state.formData.name} onChange={this.handleChange}/>
        </div>

        <div>
            <label htmlFor="gender">Gender: </label>
            <input name ='gender' type="text" className="active" value={this.state.formData.gender} onChange={this.handleChange}/>
        </div>

        <div>
            <label htmlFor="age">Age: </label>
            <input name ='age' type="text" pattern="[0-9]{1,3}" className="active" value={this.state.formData.age} onChange={this.handleChange}/>
        </div>
        <button
            type="submit"
            disabled={this.state.invalidForm}>
            Add Cat
        </button> 
        </form>
        
    </>
      );
}
}

export default EditCat;