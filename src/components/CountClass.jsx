import React from "react";

class Body extends React.Component {
    constructor(props, add) {
        super(props)
        this.state = {
            name: "Ana",
            surname: "Lopez",
            count: 0
        }
    }
    handleAdd = () => {
        //modifico en el estado el valor de count
        this.setState({ count: this.state.count + 1 })
    }
    handleAdd1 = () => {
        this.props.add()
    }
    componentDidMount(props) {
        console.log("ComponentDidMount una vez");
    }
    componentDidUpdate(prevState, children) {
        // Uso tipico (no olvides de comparar las props):
        if (this.state.name === 'Ana') {
            console.log("es igual y se llama Ana")
        }

        if (this.state.count === 2) {
            this.state.name = "Tatiana"
            console.log(this.state)
        }

        if (this.state.count === 4 && this.state.name !== prevState.name) {
            this.state.name = "Alicia"; this.state.surname = 'Lafalla'
        }
    }
    componentWillUnmount() {
        console.log("componentWillUnmount");
    }
    render() {
        const { name, surname } = this.state
        return (
            <>
                <h2> Class Component </h2>
                <h3>Count = {this.state.count} </h3>
                <button onClick={this.handleAdd} >  +  </button>
                <h4>Functional Count {this.props.count}</h4>
                <h4><button onClick={this.handleAdd1} >  +  </button></h4>
                <div></div>
                <h3> {name} {surname} from state class with destructuring</h3>

            </>
        )
    }
}
export default Body