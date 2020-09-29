import React, { useState, useEffect } from 'react';
import FilterDropdown from './FilterDropdown';
import FilterItems from './FilterItems'
import { filterData, sortData } from './DropdownData';

function Filtros(props) {

    const [width, setWidth] = useState(window.innerWidth);

    useEffect(() => {
      const handleWindowResize = () => setWidth(window.innerWidth);
      window.addEventListener("resize", handleWindowResize);
      /* console.log(width) */

      /* Remove event */
      return () => window.removeEventListener("resize", handleWindowResize);

    });

    const isLargeWindow = () => {
        return width > 992;
    }

    return (
      <div className="container-fluid">
        <div className="row justify-content-center">
          <div className="col-8 d-flex justify-content-between filter-items border-bottom">
            {isLargeWindow() ? (
              <span className="filter-bold mb-2 p-2">Filtrar por</span>
            ) : (
              <FilterDropdown 
                title="Filtrar por" 
                items={filterData} 
                isFilter={true}
                activeFilters={(filter) => props.activeFilter(filter)}
                actualFilter={props.actualFilter}
              />
            )}

            <FilterItems 
              activeFilters={(filter) => props.activeFilter(filter)}
              actualFilter={props.actualFilter}
            />

            <FilterDropdown 
              title="Ordenar por" 
              items={sortData} 
              isFilter={false}
              activeSort={(sort) => props.activeSort(sort)}
              actualSort={props.actualSort}
            />
          </div>
        </div>
      </div>
    );
}

export default Filtros;
