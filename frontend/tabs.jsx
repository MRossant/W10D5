import React from 'react';

class Tabs extends React.Component{
    constructor(props){
        super(props);

        this.state = {
            props: props,
            title: null,
            content: null,
            index: 0
        }
    }


    render(){
        // debugger;
        return (
            <div>
                <ul>
                    {this.props.tabs.map((prop)=>{
                        return(
                            <div>
                                <h1>{prop.title}</h1>
                                <article>{prop.content}</article>
                            </div>
                        )
                    })}
                </ul>
            </div>)
    }

}

export default Tabs;