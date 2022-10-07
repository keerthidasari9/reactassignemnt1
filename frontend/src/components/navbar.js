import React from 'react'

import logoImage from '../assets/images/logo192.png'

class NavBar extends React.Component{
    render() {
        return (
            <>
                <nav className="navbar navbar-expand-sm bg-dark navbar-dark">
                    <div className="container-fluid">
                        <a className="navbar-brand" href="#">
                            <img src={logoImage} id="logo-image"></img>
                            Media Library
                        </a>
                    </div>
                </nav>
            </>
        );
    }
}

export default NavBar;