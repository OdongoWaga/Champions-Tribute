import React, { Component } from 'react';
import Fade from 'react-reveal';
import FormField from '../../../utils/formField';
import { validate} from '../../../utils/Misc'


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

    updateForm(e) {

        const newFormdata ={...this.state.formdata}
        const newElement = {...newFormdata[e.id]}

        let validator= validate(newElement)
        newElement.valid = validator[0];
        newElement.validationMessage =validator[1];

        
        newElement.value = e.event.target.value;
        newFormdata[e.id ]=newElement;

        this.setState({
            formdata: newFormdata
        })
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
                <FormField 
                id={'email'}
                formdata={this.state.formdata.email}
                change={(e)=> this.updateForm(e)}
                />
            </div>

          </form>
          </div>
        
      </Fade>
    )
  }
}

export default Enroll;
