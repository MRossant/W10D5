import React from 'react';

class Clock extends React.Component{
    constructor(props){
        super(props);

        this.state = {
            time: new Date(),
        }

        this.tick = this.tick.bind(this);
    }

    tick(){
        this.setState({time: new Date()});
    }

    componentDidMount(){
        const ticked = setInterval(this.tick, 1000);
        this.ticked = ticked;
    }

    componentWillUnmount(){
        clearInterval(this.ticked)
    }

    render(){
        return(
            <div>
                <h1>Time:</h1>
                <h1>{this.state.time.getHours()}:{this.state.time.getMinutes()}:{this.state.time.getSeconds()}</h1>
                
                <h1>Date:</h1>
                <h1>{this.state.time.getMonth() + 1}/{this.state.time.getDate()}/{this.state.time.getFullYear()}</h1>
            </div>
        )
    }
}

export default Clock;