import React, { Component } from 'react'
import {FormUserType} from './FormUserType';

export class UserForm extends Component {
    state = {
        step: 1,
        userType: '',
        classNumber: '',
        name: '',
        password: '',
        id: ''
    }

    //Next Step
    nextStep = function(){
        const step = this.state.step;
        this.setState({
            step: step + 1
        });
    }
    
    //Prev Step
    prevStep = function(){
        const step = this.state.step;
        this.setState({
            step: step - 1
        });
    }

    // Handle fields change
    handleChange = input => e => {
        this.setState({
            [input]: e.target.value
        });
    }

    render() {
        const step = this.state.step;
        const { userType, classNumber, name, password, id } = this.state;
        const values = { userType, classNumber, name, password, id };

        switch (step){
            case 1:
                return (
                    <FormUserType 
                        nextStep = {this.nextStep}
                        handleChange = {this.handleChange}
                        values={values}
                    />
                );
            case 2:
                return (
                    <h1> Rest of Form </h1>
                );
            default:
                break;
        }
        return (
            <div>
                
            </div>
        )
    }
}

export default UserForm
