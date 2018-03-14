import React from 'react' ;
import './SignInForm.css' ;

class Register extends React.Component {
    constructor(props){
        super(props);
        this.state = {
        signInMail: '',
        signInPass: '',
        signInName: ''  
    }}

    onMailChange = (event) =>{
      this.setState({signInMail: event.target.value})
    }
    onPassChange = (event) =>{
      this.setState({signInPass: event.target.value})
    }
    onNameChange = (event) =>{
      this.setState({signInName: event.target.value})
    }
    onSubmit = () => {
             fetch('http://localhost:3000/register',{
                 'method':'post',
                 "headers":{'Content-Type': 'application/json'},
                 "body": JSON.stringify({
                  email:this.state.signInMail,
                  password:this.state.signInPass,
                  name:this.state.signInName
                 })})
              .then(response => response.json())
              .then(user => {
                if (user.id){
                  this.props.OnRouteChange('signin');
                  this.props.loadUser(user);
                }})}

    render(){
        const {OnRouteChange} = this.props;
        return(
            <article className="white zindexer br2 ba dark-gray b--black-10 mv4 w-100 w-50-m w-25-l center">    
                <main className="white pa4 black-80">
                    <form className="measure">
                    <fieldset id="sign_up" className=" ba b--transparent ph0 mh0">
                      <div>
                        <legend className=" f4 fw6 ph0 mh0">Register</legend>
                        <label className="white db fw6 lh-copy f6" htmlFor="email-address">Name</label>
                        <input onChange = {this.onNameChange} className="white pa2 input-reset ba bg-transparent hover-bg-black hover-white w-100" type="email" name="name"  id="name"/>
                        </div>
                      <div className="mt3">
                        <label className=" db fw6 lh-copy f6" htmlFor="email-address">Email</label>
                        <input onChange = {this.onMailChange} className="white pa2 input-reset ba bg-transparent hover-bg-black hover-white w-100" type="email" name="email-address"  id="email-address"/>
                      </div>
                      <div className="mv3">
                        <label className="white db fw6 lh-copy f6" htmlFor="password">Password</label>
                        <input onChange = {this.onPassChange} className="white b pa2 input-reset ba bg-transparent hover-bg-black hover-white w-100" type="password" name="password"  id="password"/>
                      </div>
                    </fieldset>
                    <div className="lh-copy mt3">
                        <p onClick = {this.onSubmit} className="white pointer f6 link dim black db">SignUp</p>
                    </div>
                    </form>
                </main>
            </article>
        ) 
}}

export default Register; 
