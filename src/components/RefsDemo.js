import React, { Component } from 'react'

export class RefsDemo extends Component {
    
    constructor(props) {
        super(props)
        //1st method
        this.inputRef=React.createRef()
        //2nd method
        this.cbRef=null
        this.setCbRef=(element)=>{
            this.cbRef=element
        }
    }

    componentDidMount(){
        //2nd method
        if(this.cbRef){
            this.cbRef.focus()
        }

        //1st method
        // this.inputRef.current.focus()
        // console.log(this.inputRef)
    }

    clickHandeler =()=>{
        alert(this.inputRef.current.value)
    }
    
    
    render() {
        return (
            <div>
                <input type="text" ref={this.inputRef} />
                <input type="text" ref={this.setCbRef} />
                <button onClick={this.clickHandeler}>Click</button>
            </div>
        )
    }
}

export default RefsDemo
