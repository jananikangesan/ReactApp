import React, { Component } from 'react'
import LifecycleB from './LifecycleB'

export class LifecycleA extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
             name:'Jaffna'
        }
        console.log('LifecycleA constructor')
    }

    static getDerivedStateFromProps(props,state){
        console.log('LifecycleA getDrivedStateFromProps')
        return null
         
    }

    componentDidMount(){
        console.log('LifecycleA componentDidMount')
    }

    shouldComponentUpdate(){
        console.log('LifecycleA shouldComponentUpadate')
        return true
    }

    getSnapshotBeforeUpdate(){
        console.log('LifecycleA getSnapshotBeforeUpdate')
        return null
    }

    componentDidUpdate(){
        console.log('LifecycleA componentDidUpdate')
    }

    changeState =()=>{
        this.setState({
            name:'Computer Science'
        })
    }
    
    render() {
        console.log('LifecycleA render')
        return (
            <div>
                <div>LifeCycle A</div>
                <button onClick={this.changeState}>Change State </button>
                <LifecycleB/>
            </div>
        
        )
    }
}

export default LifecycleA
