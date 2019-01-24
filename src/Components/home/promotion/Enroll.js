import React, { Component } from 'react';
import Fade from 'react-reveal';
import FormField from '../../../utils/formField';


class Enroll extends Component {

    state= {
         
        formError:false, 
        formSuccess: '',
        formdata: {
            email:{
                element: 'input',
                value: '',
                config: {
                    name: 'email_input',
                    type: 'email', 
                    placeholder: 'Enter your email'
                },
                validation: {
                    required: true,
                    email: true
                },
                valid: false,
                validationMessage:''
            }
        }
    }

    submitForm() {
         
    }

  render() {
    return (
      <Fade>
          <div className="enroll_wrapper">
          <form onSubmit={(e)=> this.submitForm(e)}>
            <div className =" enroll_title">
                Enter your email
            </div>
            <div className ="enroll_input">
                <FormField />
            </div>

          </form>
          </div>
        
      </Fade>
    )
  }
}

export default Enroll;
