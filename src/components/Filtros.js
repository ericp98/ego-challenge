import React from 'react';
import { MdKeyboardArrowDown, MdKeyboardArrowUp } from 'react-icons/md'

function Filtros() {
    return (
        <div className="container-fluid">
            <div className="row justify-content-center">
                <div className="col-8 d-flex justify-content-between filter-items border-bottom"> 
                    <span className="filter-bold mb-2 p-2">Filtrar por</span>
                    <span className="menu-item bdg1 p-2">Todos</span>
                    <span className="menu-item bdg1 p-2">Autos</span>
                    <span className="menu-item bdg1 p-2">Pickups y Comerciales</span>
                    <span className="menu-item bdg1 p-2">SUVs y Crossovers</span>
                    <span></span>
                    <span></span>
                    <span></span>
                    {/* <span className="filter-bold menu-item p-2">Ordenar por <MdKeyboardArrowDown /></span> {/* ^ */} 
                    <button class="btn dropdown-toggle" type="button" id="dropdownMenuButton" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                        <span className="filter-bold menu-item p-2">Ordenar por <MdKeyboardArrowDown /></span>
                    </button>
                    <div class="dropdown-menu" aria-labelledby="dropdownMenuButton">
                        <div class="dropdown-item"> <span className="itemspanc">Nada</span></div>
                        <div class="dropdown-divider"></div>
                        <div class="dropdown-item">De menor a mayor precio</div>
                        <div class="dropdown-divider"></div>
                        <div class="dropdown-item">De mayor a menor precio</div>
                        <div class="dropdown-divider"></div>
                        <div class="dropdown-item">Más nuevos primero</div>
                        <div class="dropdown-divider"></div>
                        <div class="dropdown-item">Más viejos primero</div>
                    </div>
                </div>
            </div>

            
        </div>
    )
}

export default Filtros;
