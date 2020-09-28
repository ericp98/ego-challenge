import React from 'react'

function txtNegrita(texto){
    return <span className="filter-bold">{texto}</span>;
}

export const filterData = [
    {name: 'Todos'},
    {name: 'Autos'},
    {name: 'Pickups y Comerciales'},
    {name: 'SUVs y Crossovers'}
]

export const sortData = [
    {name: <div>Nada</div> },
    {name: <div>De {txtNegrita('menor')} a {txtNegrita('mayor')} precio</div>},
    {name: <div>De {txtNegrita('mayor')} a {txtNegrita('menor')} precio</div>},
    {name: <div>Más {txtNegrita('nuevos')} primero</div>},
    {name: <div>Más {txtNegrita('viejos')} primero</div>}
]