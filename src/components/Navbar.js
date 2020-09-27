import React, { useState } from 'react';
import { Link } from 'react-router-dom';

// Icons
import { FaBars } from 'react-icons/fa';
import logo from './logo.svg';


function Navbar(props) {

    function active(route){
        if (props.route === route){
            return 'active'
        }
    }

    return (
        <div className="container-fluid">
            <div className="row">
                <nav className="navbar navbar-expand col-12">
                    <Link to="/models" className="navbar-brand ml-3">
                        <img src={logo} alt=""/>
                    </Link>

                    <div className="d-none d-sm-none d-sm-block container">
                        <ul className="navbar-nav ml-5"> {/* ml-5 */}
                            <li className="nav-item">
                                <Link to="/models" className={"navbar-text " + active('models')}>
                                    <span className="text-span ml-4">Modelos</span>
                                </Link>
                            </li>

                            <li className="nav-item">
                                <Link to="data-model" className={"navbar-text " + active('data-model')}>
                                    <span className="text-span">Ficha de modelo</span>
                                </Link>
                            </li>
                        </ul>
                    </div>

                    <ul className={"navbar-nav ml-auto"}>
                        <li className="nav-item menu-item d-flex" onClick={props.handleSidebar}>
                            <span className="d-none d-sm-none d-sm-block">Menú </span>
                            <FaBars className="ml-2 mt-1" /> 
                        </li>
                    </ul>
                </nav>
            </div>
        </div>
    );
}

export default Navbar

