import React from 'react';
import ReactDOM from 'react-dom'; 
import 'bootstrap/dist/css/bootstrap.css';
import './styles/index.css'

import NavBar from './components/navbar'
import Contents from './components/contents'
import ThirdApiIntegration from './components/thirdApiIntegration'


//IMPORTANT : Component should start with Upper case
class MyFirstComponent extends React.Component{
    render(){
        return (
            <>
                <NavBar />
                <Contents />
                <ThirdApiIntegration />
            </>
        );
    }
}
//Tell ReactDOM to find the div with id=root 
//and place the MyFirstComponent there.
ReactDOM.render(<MyFirstComponent />, document.getElementById("root"));