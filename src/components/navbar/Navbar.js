import React from 'react';
import { Link } from 'react-router-dom';

// Icons
import { FaBars } from 'react-icons/fa';
import logo from '../../images/logo.svg';


function Navbar(props) {

    function active(route){
        if (props.route === route){
            return 'active'
        }
    }

    return (
        <div className="container-fluid" style={{marginBottom:'100px'}}>
            <div className="row">
                <nav className="navbar navbar-expand bg-white col-12 fixed-top">
                    <Link to="/models" className="navbar-brand ml-3">
                        <img src={logo} alt=""/>
                    </Link>

                    <div className="d-none d-lg-none d-lg-block container">
                        <ul className="navbar-nav ml-5"> 
                            <li className="nav-item">
                                <Link to="/models" className={"navbar-text " + active('models')}>
                                    <span className="ml-4">Modelos</span>
                                </Link>
                            </li>

                            <li className="nav-item">
                                <div className={"ficha-modelo " }>
                                    <span className={"navbar-text " + active('data-model')}>Ficha de modelo</span>
                                </div>
                            </li>
                        </ul>
                    </div>

                    <ul className={"navbar-nav ml-auto"}>
                        <li className="nav-item menu-item d-flex" onClick={props.handleSidebar}>
                            <span className="d-none d-lg-none d-lg-block">Menú </span>
                            <FaBars className="ml-2 mt-1" /> 
                        </li>
                    </ul>
                </nav>
            </div>
        </div>
    );
}

export default Navbar

