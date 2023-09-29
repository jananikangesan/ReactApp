import React, { Component,PureComponent } from 'react'
import MemoComp from './MemoComp'
import PureComp from './PureComp'
import RegComp from './RegComp'

 class ParentComp extends PureComponent {
    
    constructor(props) {
        super(props)
    
        this.state = {
             name:"abc"
        }
    }

    componentDidMount(){
        setInterval(()=>{
            this.setState({
                name:'abc'
            })
        },2000)
    }
    
    render() {
        console.log('***********Parent component********')
        return (
            <div>
                Parent Component
                <MemoComp name={this.state.name}/>
                {/* <RegComp name={this.state.name}></RegComp>
                <PureComp name={this.state.name}></PureComp> */}
            </div>
        )
    }
}

export default ParentComp
