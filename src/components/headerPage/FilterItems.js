import React, { Fragment } from 'react';
import { filterData } from './DropdownData';

function FilterItems() {
    return (
        <Fragment>
            {filterData.map((item,index) => {
                return (
                    <span className="menu-item item-pill p-2 d-none d-lg-none d-lg-block" key={index}>
                        {item.name}
                    </span>
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
