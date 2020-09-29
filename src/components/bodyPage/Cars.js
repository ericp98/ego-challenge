import Axios from 'axios';
import React, { useState, useEffect } from 'react';

// Filter ctrl
import { filterCars, sortCars } from './FiltersControllers';

function Cars(props) {

    const linkAPI = 'https://challenge.agenciaego.tech';

    const [cars, setCars] = useState([]);
    const [loading, setLoading] = useState([false]);

    const carsFiltered = filterCars(cars, props.filterBy);
    const carsSort = sortCars(carsFiltered, props.sortBy);

    const getCars = async () => {
        try {
            const res = await Axios.get(linkAPI + '/models');
            setCars(res.data);
        } catch (error) {
            console.log(error)
        }
    }

    useEffect(() => {
      setLoading(true);
      getCars();
      setLoading(false);
    }, [cars]);

    return (
      <div className="container">
        {
            loading ? 'cargando...' : 
            <div className="row justify-content-center">
            {
                carsSort.map((car, index) => {
                    return (
                      <div className="card bg-white mb-3 col-lg-3 col-md-6 d-flex justify-content-center" key={index}>
                        <div className="card-header text-center">
                          <h5 className="card-title">{car.name}</h5>
                          <h6 className="card-subtitle mb-2">
                            {car.year} | $ {car.price}
                          </h6>
                        </div>
                        <div className="card-body">
                          <img className="card-img-top" src={linkAPI + car.photo} alt="" />
                        </div>
                        <div className="card-footer text-center">
                          <span className="footer-card menu-item">Ver modelo</span>
                        </div>
                      </div>
                    );
                })
            }
        </div> 

        }
      </div>
    );
}

export default Cars;
