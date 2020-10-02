import React, { useState, useEffect, Fragment} from 'react';
import Axios from 'axios';

// Components
import ModelHeader from './ModelHeader';
import ModelCarousel from './ModelCarousel';
import ModelHighlights from './ModelHighlights';

function ModelCar(props) {

    const [model, setModel] = useState([]);

    const linkAPI = 'https://challenge.agenciaego.tech';

    const getModel = async () => {
        try {
            const res = await Axios.get(linkAPI + '/models/' + props.idModel);
            setModel(res.data);
        } catch (error) {
            console.log(error)
        }
    }

    useEffect(() => {
        let isMounted = true;
  
        if (isMounted){
            getModel();
        }
  
        return () => {isMounted = false}
      }, []);

    return (
        <Fragment>
            <ModelHeader 
                linkAPI={linkAPI}
                model={model}
            />
            <ModelCarousel 
                linkAPI={linkAPI}
                features={model.model_features || []}
            /> 
            <ModelHighlights 
                linkAPI={linkAPI}
                highlights={model.model_highlights || []}
            /> 
        </ Fragment>
    )
}

export default ModelCar;
