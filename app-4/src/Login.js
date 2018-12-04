import React, { Component } from 'react'

class Login extends Component {
    constructor() {
        super()

        this.state = {
            userName: '',
            password: ''
        }
        // this.getUserName = this.getUserName.bind(this);
    }

    getUserName(e){
        console.log('getUserName')
        this.setState({
            userName: e
        })
        console.log(this.state.userName)
    }

    getPassword(e){
        console.log('getPassword')
        this.setState({
            password: e
        })
    }

    alert(){
        alert(`Username: ${this.state.userName} Password: ${this.state.password}`)
    }

    render() {

        return (
            <div>
                <input onChange={(e)=>this.getUserName(e.target.value)}></input>
                <input onChange={(e) => this.getPassword(e.target.value)}></input>
                <button onClick={()=>this.alert()}>Login</button>
            </div>
        )
    }
} // end Login class

export default Login