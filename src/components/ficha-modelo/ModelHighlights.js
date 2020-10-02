import React, { Fragment } from 'react'

export default function ModelHighlights(props) {
    const highlits = props.highlights;
    const linkAPI = props.linkAPI;

    const isPairIndex = (index) => {
        return ((index % 2) === 0) 
    }

    const textHighlight = (highlight) => {
        return (
          <Fragment>
            <div className="p-lg-5 pb-5"> {/* p-lg-5 pb-5 */}
                <h1 className="title-model pt-3 pb-2" style={{height:'auto'}}>{highlight.title}</h1>
                <p className="subtitle-model text-justify pt-3" style={{height:'auto'}}>{highlight.content}</p>
            </div>
          </Fragment>
        );
    }

    const imageHighlight = (highlight) => {
        return (
          <Fragment>
            <div className="row align-items-center">
                <img src={linkAPI + highlight.image} alt="" className="card-image" style={{maxHeight:'320px'}} /> {/* img-fluid */}
            </div>
          </Fragment>
        );
    }

    return (
        <div className="container mt-5">
                {highlits.map((highlight, index) => {
                    return (
                        /* Alternate order image - text */

                        <div className="row d-flex justify-content-start" key={index}>
                            {/* First text - image */}
                            {
                                isPairIndex(index) ?
                                    <Fragment> 
                                        <div className="col-lg-6 d-flex pt-5 order-lg-0 order-1 justify-content-center">
                                            {textHighlight(highlight)}
                                        </div>
                                        <div className="col-lg-6 d-flex pt-5 order-lg-1 order-0 justify-content-center">
                                            {imageHighlight(highlight)}
                                        </div>
                                    </Fragment>

                                :

                                    <Fragment> 
                                        <div className="col-lg-6 d-flex pt-5 justify-content-center">
                                            {imageHighlight(highlight)}
                                        </div>
                                        <div className="col-lg-6 d-flex pt-5 justify-content-center">
                                            {textHighlight(highlight)}
                                        </div>
                                    </Fragment>
                            }

                        </div> 
                    )
                })}
        </div>
    )
}
