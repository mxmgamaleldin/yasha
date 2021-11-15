import React from 'react'

class ContactForm extends React.Component {
  constructor(props) {
    super(props);
    
    this.state = {
      fields: {
        name: "",
        email: "",
        query: ""
      },
      errors: {
        name: ""
      },
    };
    
    this.handleInputChange = this.handleInputChange.bind(this);
    this.handleValidation = this.handleValidation.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }
  
  handleInputChange(event) {
    let fields = this.state.fields;
    fields[event.target.name] = event.target.value;
    this.setState({ fields: fields });
    
  }
  
  handleValidation() {
    let fields = this.state.fields;
    let errors = {};
    let formIsValid = true;
    
    if(!fields["name"]) {
      formIsValid = false;
      errors["name"] = "We need a name to address you by.";
    }    
    
    if(fields["name"].length < 2) {
      formIsValid = false;
      errors["name"] = "Please provide a correct name.";
    }
    
    if(!fields["email"]) {
      formIsValid = false;
      errors["email"] = "We need your email address so we can reach you.";
    }
    
    if (typeof fields["email"] !== "undefined") {
      let lastAtPos = fields["email"].lastIndexOf("@");
      let lastDotPos = fields["email"].lastIndexOf(".");

      if (
        !(
          lastAtPos < lastDotPos &&
          lastAtPos > 0 &&
          fields["email"].indexOf("@@") == -1 &&
          lastDotPos > 2 &&
          fields["email"].length - lastDotPos > 2
        )
      ) {
        formIsValid = false;
        errors["email"] = "Email is not valid";
      }
    }    
    
    this.setState({ errors: errors })
    return formIsValid;
  }
  
  handleSubmit(event) {
    event.preventDefault();
    if(this.handleValidation()) {
      console.log("Form successful.");
    } else {
      alert("Form has errors.");
    }
  }
  
  render() {
    return (
      <>
        <form onSubmit={this.handleSubmit} className="">
          <div className="p-4 lg:p-8 w-full grid grid-cols-1 text-cyanblack bg-gray-100 rounded-sm">
          <label className="text-sm uppercase tracking-wider font-medium lg:text-lg">
            Your name
          </label>
          <input
            className="mt-2 lg:mt-4 max-w-xs lg:max-w-xl text-lg rounded-sm bg-white shadow-sm p-2 lg:p-3 transition-color duration-200 focus:ring-2 focus:ring-gray-400 outline-none"
            type="text"
            name="name"
            value={this.state.fields["name"]}
            onChange={this.handleInputChange}
          />
          <label className="mt-8 text-sm uppercase tracking-wider font-medium lg:text-lg">
            Your e-mail address
          </label>
          <input
            className="mt-2 lg:mt-4 max-w-xs lg:max-w-xl text-lg rounded-sm bg-white shadow-sm p-2 lg:p-3 transition-color duration-200 focus:ring-2 focus:ring-gray-400 outline-none"
            type="text"
            name="email"
            value={this.state.fields["email"]}
            onChange={this.handleInputChange}
          />      
          <label className="mt-8 text-sm uppercase tracking-wider font-medium lg:text-lg">
            HOW CAN WE HELP YOU?
          </label>
          <textarea
            className="mt-2 lg:mt-4 max-w-xs lg:max-w-xl text-lg rounded-sm bg-white shadow-sm p-2 lg:p-3 transition-color duration-200 focus:ring-2 focus:ring-gray-400 outline-none"
            rows="2"
            name="query"
            value={this.state.fields["query"]}
            onChange={this.handleInputChange}
          />
          </div>
          <div className="w-full mt-4">
            <input className="w-full bg-buttonBlue text-white cursor-pointer lg:tracking-tight lg:bg-white lg:text-cyanblack lg:text-right lg:text-2xl lg:font-extrabold lg:focus:bg-white lg:hover:text-buttonBlue lg:transition-color lg:duration-200 none rounded-full py-2.5 focus:bg-buttonBlueLight" type="submit" value="Send →" />
          </div>
        </form>
      </>
    );    
  }
}

export default ContactForm