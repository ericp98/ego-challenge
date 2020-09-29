import React, { Fragment } from 'react';
import { filterData } from './DropdownData';

function FilterItems(props) {

    const isSelected = (name) => {
        if (name === props.actualFilter){
            return ('filterSelected')
        }
    }

    return (
        <Fragment>
            {filterData.map((item,index) => {
                return (
                    <div key={index}>
                        <span 
                            className={"menu-item item-pill d-none d-lg-none d-lg-block " + isSelected(item.name)} 
                            name={item.name}
                            onClick={(e) => props.activeFilters(e.target.getAttribute('name'))}
                            > 
                            {item.name}
                        </span>
                    </div>
                )
            })}
            <span></span>
            <span></span>
            <span></span>
            <span></span>
            <span></span>
            <span></span> 
            
        </Fragment>
    );
}

export default FilterItems;
