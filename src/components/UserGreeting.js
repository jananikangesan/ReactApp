import React, { Component } from 'react'

 class UserGreeting extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
             isLoggedIn:true
        }
    }
    
    render() {
        // 4th method -->short circuit operator
        
        return this.state.isLoggedIn && <div>Welcome Computer</div>

        //3 rd method --->ternary conditional operator

        // return(
        //     this.state.isLoggedIn ? (
        //     <div>Welcome Computer</div>
        //     ): (
        //         <div>Welcome Guest</div>
        //     )
        // )


        // 2nd mwthod --> elementory variable

        // let message
        // if(this.state.isLoggedIn){
        //     message=<div>Welcome Computer</div>
        // }else{
        //     message=<div>Welcome Guest</div>
        // }

        // return <div>{message}</div>


        //1 st method --> if/else

        // if(this.state.isLoggedIn){
        //     return(
        //         <div>Welcome Computer</div>
        //     )
        // }else{
        //     return ( 
        //         <div>WelCome Guest</div>
        //     )
        // }
       
    }
}

export default UserGreeting
