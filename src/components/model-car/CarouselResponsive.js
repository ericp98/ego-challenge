import React, { Fragment } from 'react'

export default function CarouselResponsive(props) {

    // Props
    const linkAPI = props.linkAPI;
    const features = props.features;
    const size = props.size;

    const dataSplit = () => {

        // Images size 
        let increment = numberFromSize(); 

        // Let return 
        let newArray = [];

        // Index array return
        let index = 0

        for (let i = 0; i < features.length; i++) {
            newArray[index] = features.slice(i, i + (increment + 1) );
            i += increment;  
            index += 1;      
        }

        return newArray;
    }

    const numberFromSize = () => {
        /* Retorna el numero a calcular el array, dependiendo del ancho de la pantalla */
        switch(size){
            case 'lg':
                return 3
            case 'md':
                return 1;
            case 'sm':
                return 0;
            default:
                return 0;
        }
    }

    return (
      <Fragment>
        <div className="container-fluid mt-5 p-5 bg-gray">
          <div
            id="carouselExampleControls"
            className="carousel slide"
            data-ride="false"
          >
            {/* Carousel indicators */}
            <ol className="carousel-indicators">
              {dataSplit().map((data, index) => {
                return (
                  <li
                    data-target="#carouselExampleIndicators"
                    data-slide-to={index}
                    className={index === 0 ? "active" : null}
                    key={index}
                  />
                );
              })}
            </ol>

            {/* Carousel sliders */}
            <div className="carousel-inner">
              {dataSplit().map((data, index) => {
                return (
                  <div
                    className={
                      index === 0 ? "carousel-item active" : "carousel-item"
                    }
                    key={index}
                  >
                    <div className="row">
                      {/* Insert data into slider */}
                      {data.map((feature, item) => {
                        return (
                          <div
                            className={
                              "col-lg-3 col-md-6 col-sm-12 d-flex justify-content-center"
                            }
                            key={item}
                          >
                            <div className="card" style={{ width: "18rem" }}>
                              <img
                                src={linkAPI + feature.photo}
                                alt=""
                                className="card-image"
                              />
                              <div className="card-body plasd">
                                <h5 className="card-title tests">
                                  {feature.name}
                                </h5>
                                <p className="card-text card-subtitle text-justify">
                                  {feature.description}
                                </p>
                              </div>
                            </div>
                          </div>
                        );
                      })}
                    </div>
                  </div>
                );
              })}
            </div>
            <a
              className="carousel-control-prev border"
              href="#carouselExampleControls"
              role="button"
              data-slide="prev"
            >
              <span className="carousel-control-prev-icon" aria-hidden="true" />
              <span className="sr-only">Previous</span>
            </a>
            <a
              className="carousel-control-next"
              href="#carouselExampleControls"
              role="button"
              data-slide="next"
            >
              <span className="carousel-control-next-icon" aria-hidden="true" />
              <span className="sr-only">Next</span>
            </a>
          </div>
        </div>
      </Fragment>
    );
}
