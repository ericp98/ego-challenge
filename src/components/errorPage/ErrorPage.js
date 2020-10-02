import React from 'react';
import { Link } from 'react-router-dom';
import image404 from '../../images/notFound.png'

export default function ErrorPage() {
    return (
        <div className="container pt-5">
            <div className="row">
                <div className="col-12">
                    <img src={image404} className="img-fluid" alt=""/>
                </div>
                <div className="col-12 d-flex justify-content-center">
                    <h1 className="header-title">Página no encontrada!</h1>
                </div>
                <div className="col-12 d-flex justify-content-center linkToHome pt-4">
                    <Link to='models' className='linkDataModel'>
                        <span 
                          className="footer-card menu-item"
                        >
                          Ir al Inicio
                        </span>
                    </Link>
                </div>
            </div>
        </div>
    )
}
