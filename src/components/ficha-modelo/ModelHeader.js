import React from 'react';

export default function ModelHeader(props) {

    const model = props.model;
    const linkAPI = props.linkAPI;

    return (
        <div className="container-fluid mt-5 ficha-header pt-5">
            <div className="row">
                <div className="col-lg-6 d-flex justify-content-center">
                    <img src={linkAPI + model.photo} alt="" className="img-fluid" style={{maxWidth:'580px'}}/>  
                </div>

                <div className="col-lg-6">
                    <h5 className="pt-4 filter-bold">{model.name}</h5> 
                    <h1 className="pt-4 pb-4 filter-bold">{model.title}</h1>
                    <p>{model.description}</p>
                </div>                
            </div>
        </div>
    )
}
