import React from 'react'

class ClassComponent extends React.Component {

    constructor(){
        super()
        this.state = {
            name: "Lucy",
            favoriteAnimal: "Raccoon",
            count: 0
        }
    }

    handleIncreaseClick = () => {
        this.setState({count: this.state.count+1})
    }

    handleDecreaseClick = () => {
        this.setState({count: this.state.count-1})
    }
    
    render(){
        return (
            <div>
                <h1>Say hello to {this.state.name}</h1>
                <h1>Their favorite animal is a {this.state.favoriteAnimal}</h1>
                <h4>If you like that animal, click the +1 button. If not, click the -1 button.</h4>

                <button onClick={this.handleIncreaseClick} >+1</button>
                <h1>{this.state.count}</h1>
                <button onClick={this.handleDecreaseClick} >-1</button>
               
            </div>
        )
    }
}

export default ClassComponent






