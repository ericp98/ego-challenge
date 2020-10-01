import React, { Fragment } from 'react'

export default function ModelHighlits(props) {
    const highlits = props.highlits;
    const linkAPI = props.linkAPI;

    const isPairIndex = (index) => {
        return ((index % 2) === 0) 
    }

    const textHighlight = (highlight) => {
        return (
          <Fragment>
            <div className="p-5 align-items-center">
                <h1 className="card-title">{highlight.title}</h1>
                <p className="card-subtitle text-justify">{highlight.content}</p>
            </div>
          </Fragment>
        );
    }

    const imageHighlight = (highlight) => {
        return (
          <Fragment>
            <img src={linkAPI + highlight.image} alt="" />
          </Fragment>
        );
    }

    return (
        <div className="container mt-5">
                {highlits.map((highlight, index) => {
                    return (
                        /* Alternate order image - text */

                        <div className="row" key={index}>
                            {/* First text - image */}
                            <div className="col-lg-6 d-flex pt-5 justify-content-center">
                                {
                                    isPairIndex(index) ? 
                                        textHighlight(highlight)
                                    :
                                        imageHighlight(highlight)
                                }
                            </div>

                            <div className="col-lg-6 d-flex pt-5 justify-content-center">
                                {
                                    isPairIndex(index) ?
                                        imageHighlight(highlight)
                                    :
                                        textHighlight(highlight)
                                }                                
                            </div>
                        </div> 
                    )
                })}
        </div>
    )
}
