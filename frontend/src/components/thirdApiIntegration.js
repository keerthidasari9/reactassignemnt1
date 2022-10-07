import React, {Component} from 'react';

class ThirdApiIntegration extends Component{
    constructor(){
        super();
        this.state = {
            person: []
        };
    }

    componentDidMount() {
        // fetch('https://randomuser.me/api/?results=500')
        //     .then(res => {
        //         res.json();
        //     })
        //     .then(data => {
        //         console.log(`${data}`)
        //         this.setState({
        //             person: data.results
        //         })
        //     })
    }
    render() {
        return(
            <>
                <h1 id="thirdTitle">Topic News</h1>
                {
                    // this.state.person.map((personRecord) => {
                    //     <div key={personRecord.id.value}>
                    //         {personRecord.name.first}
                    //     </div>
                    // })
                }
            </>
        )
    }
}

export default ThirdApiIntegration;