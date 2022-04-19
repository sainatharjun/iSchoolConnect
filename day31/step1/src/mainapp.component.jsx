import { Component } from "react";

/*
username
userage
usercity
*/
class MainApp extends Component{
    state = {
        username : '',
        userage : 0,
        usercity : '',
        nameerror: '',
        ageerror: '',
        cityerror : ''
    }
    submitHandler = (evt)=>{
        // alert("form submitted");
        evt.preventDefault();
        if(this.state.username === '' && this.state.userage === 0 && this.state.usercity === ''){
            this.setState({
                nameerror : "you must provide your name",
                ageerror : "you must provide your age",
                cityerror : "you must provide your city",
            });
        }else{
            this.setState({
                nameerror : "",
                ageerror : "",
                cityerror : "",
            });
            evt.target.submit();
        }
        /* if(this.state.username === ''){
            this.setState({
                nameerror : "you must provide your name"
            })
        }else if(this.state.userage === 0){
            this.setState({
                ageerror : "you must provide your age"
            })
        }else if(this.state.usercity === ''){
            this.setState({
                cityerror : "you must provide your city"
            })
        }else{
            this.setState({
                nameerror : "",
                ageerror : "",
                cityerror : "",
            });
            evt.target.submit();
        } */
    }
   /*  
   nameChangeHandler = (evt) => {
        this.setState({
            username : evt.target.value
        })
    }
    ageChangeHandler = (evt) => {
        this.setState({
            userage : Number(evt.target.value)
        })
    }
    cityChangeHandler = (evt) => {
        this.setState({
            usercity : evt.target.value
        })
    } 
    */
   changeHandler = (evt)=>{
        this.setState({
           [evt.target.name] : evt.target.value 
        });
   };
    render(){
        return <div className="container">
                    <h1>Registeration Form</h1>
                    <hr />
                    <form action="#" method="get" onSubmit={ this.submitHandler }>
                    <div className="mb-3">
                        <label htmlFor="username" className="form-label">User Name</label>
                        <input onChange={ this.changeHandler } value={this.state.username} name="username" className="form-control" id="username" />
                        { this.state.nameerror !== '' && <div className="form-text">{ this.state.nameerror }</div>}
                    </div>
                    <div className="mb-3">
                        <label htmlFor="userage" className="form-label">User Age</label>
                        <input onChange={ this.changeHandler } value={this.state.userage} name="userage" className="form-control" id="userage" />
                        { this.state.ageerror !== '' && <div className="form-text">{ this.state.ageerror }</div> }
                    </div>
                    <div className="mb-3">
                        <label htmlFor="usercity" className="form-label">User City</label>
                        <input onChange={ this.changeHandler } value={this.state.usercity} name="usercity" className="form-control" id="usercity" />
                        { this.state.cityerror !== '' && <div className="form-text">{ this.state.cityerror }</div> }
                    </div>                   
                    <button type="submit" className="btn btn-primary">Submit</button>
                    </form>
                    <hr />
                    <ul>
                        <li>User Name : { this.state.username }</li>
                        <li>User Age : { this.state.userage }</li>
                        <li>User City : { this.state.usercity }</li>
                    </ul>
               </div>
    }
}

export default MainApp