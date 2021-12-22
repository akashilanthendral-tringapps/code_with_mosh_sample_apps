import React, { Component } from 'react';
class Navbar extends React.Component {
    render() { 
        console.log("Navbar component rendered!");
        return (<div>
                    <nav className="navbar navbar-light bg-light">
                        <div className="container-fluid">
                            <a className="navbar-brand" href="#">
                                Navbar
                                <span className="badge badge-pill badge-primary">{this.props.totalCounters}</span>
                            </a>
                        </div>
                    </nav>
                </div>
        );
    }
}
 
export default Navbar;