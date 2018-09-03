import React from 'react';
import './SignInForm.css' ;

class SignInForm extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      signInMail: '',
      signInPass: ''  
    }}

    onMailChange = (event) =>{
      this.setState({signInMail: event.target.value})
    }
    onPassChange = (event) =>{
      this.setState({signInPass: event.target.value})
    }
    onSubmit = () => {
      fetch('http://localhost:3000/signin',{
        'method':'post',
        "headers":{'Content-Type': 'application/json'},
        "body": JSON.stringify({
          email:this.state.signInMail,
          password:this.state.signInPass,
        })})
      .then(response => response.json())
      .then(user => { console.log(user)
        if (user.id) {
          this.props.loadUser(user)
          this.props.OnRouteChange('home');}
        })}

      render(){
        const {OnRouteChange} = this.props;
        return(
          <article className="zindexer br2 ba dark-gray b--black-10 mv4 w-100 w-50-m w-25-l center">    
          <main className="pa4 black-80">
          <div className="measure">
          <fieldset id="sign_up" className="ba b--transparent ph0 mh0">
          <legend className="white f4 fw6 ph0 mh0">Sign In</legend>
          <div className="mt3">
          <label className="db white fw6 lh-copy f6" htmlFor="email-address">Email</label>
          <input 
          className="pa2 white input-reset ba bg-transparent hover-bg-black hover-white w-100" 
          type="email" 
          name="email-address"  
          id="email-address"
          onChange = {this.onMailChange}
          /> 
          </div>
          <div className="mv3">
          <label className="db white fw6 lh-copy f6" htmlFor="password">Password</label>
          <input  
          className="b white pa2 input-reset ba bg-transparent hover-bg-black hover-white w-100" 
          type="password" 
          name="password"  
          id="password"
          onChange = {this.onPassChange}
          />

          </div>
          </fieldset>
          <div className="">
          <input 
          onClick = {this.onSubmit} 
          className="b white ph3 pv2 input-reset ba  bg-transparent grow pointer f6 dib" type="submit" value="Sign in"/>
          </div>
          <div className="white lh-copy mt3">
          <p onClick = {() => OnRouteChange('register')} href="#0" className="white pointer f6 link dim black db">Register</p>
          </div>
          </div>
          </main>
          </article>
          )}}

        export default SignInForm; 