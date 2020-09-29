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
    {
        name: 'Nada',
        htmlText: <div>Nada</div>
    },
    {
        name: 'De menor a mayor precio',
        htmlText: <div>De {txtNegrita('menor')} a {txtNegrita('mayor')} precio</div>
    },
    {
        name: 'De mayor a menor precio',
        htmlText: <div>De {txtNegrita('mayor')} a {txtNegrita('menor')} precio</div>
    },
    {
        name: 'Más nuevos primero',
        htmlText: <div>Más {txtNegrita('nuevos')} primero</div>
    },
    {
        name: 'Más viejos primero',
        htmlText: <div>Más {txtNegrita('viejos')} primero</div>
    }
]