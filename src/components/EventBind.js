import React, { Component } from 'react'

class EventBind extends Component {

    constructor(props) {
        super(props)
    
        this.state = {
             message:'Hello'
        }
       //this.clickHandler=this.clickHandler.bind(this)  //this is used  for 3rd method
    }

    // for 1,2,3 th method

    // clickHandler(){

    //     this.setState({
    //         message:'Goodbye!'
    //     })
    //     console.log(this)
    // }

    // for 4th method
    clickHandler = ()=>{
        this.setState({
            message:'Good Bye!'
        })
    }
    
    render() {
        return (
            <div>
                <div>{this.state.message}</div>
                {/* <button onClick={this.clickHandler.bind(this)}>Click</button> */}
                {/* <button onClick={()=>this.clickHandler()}>Click</button> */}
                
                {/* 3rd method , 4th method*/}
                <button onClick={this.clickHandler}>Click</button>
    
            </div>
        )
    }
}

export default EventBind
