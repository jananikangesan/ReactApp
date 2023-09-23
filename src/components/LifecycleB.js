import React, { Component } from 'react'

export class LifecycleB extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
             name:'Jaffna'
        }
        console.log('LifecycleB constructor')
    }

    static getDerivedStateFromProps(props,state){
        console.log('LifecycleB getDrivedStateFromProps')
        return null
         
    }

    componentDidMount(){
        console.log('LifecycleB componentDidMount')
    }
    
    render() {
        console.log('LifecycleB render')
        return <div>LifeCycle B</div>
    }
}

export default LifecycleB
