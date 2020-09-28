import React from 'react'
import { MdKeyboardArrowDown } from 'react-icons/md';

function FilterDropdown(props) {

    /* Check if is last element */
    const isLastElement = (length, index) => {
        return length > index;
    }

    return (
      <div>
        <button
          className="btn dropdown-toggle"
          type="button"
          data-toggle="dropdown"
          aria-haspopup="true"
          aria-expanded="false"
        >
          <span
            className="filter-bold menu-item p-2 filter-items"
          >
            {props.title} <MdKeyboardArrowDown id="arrowFilter" />
          </span>
        </button>
        <div
          className="dropdown-menu menu-item"
          aria-labelledby="dropdownMenuButton"
        >
          {props.items.map((item, index) => {
              return (
                  <div key={index}>
                      <div className="dropdown-item"> {item.name}</div>
                      {isLastElement(props.items.length, (index + 1)) ? <div className="dropdown-divider"></div> : null}    
                  </div>
              )
          })}
        </div>
      </div>
    );
}

export default FilterDropdown;
