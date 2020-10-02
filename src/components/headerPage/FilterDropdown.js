import React from 'react'
import { MdKeyboardArrowDown } from 'react-icons/md';

function FilterDropdown(props) {

    /* Is item filter or item Sort */
    const isFilter = props.isFilter;

    const items = props.items;

    const actualFilter = props.actualFilter;
    const actualSort = props.actualSort;

    /* Check if is last element */
    const isLastElement = (length, index) => {
        return length > index;
    }

    /* Chech if is item selected */
    const isItemSelected = (name) => {
      if (isFilter) {
        if (name === actualFilter){
            return ('dropdown-item-selected')
        }
      } else if (name === actualSort) {
            return ('dropdown-item-selected')
      }
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
            {props.title} <MdKeyboardArrowDown id="arrowFilter"/>
          </span>
        </button>
        <div
          className="dropdown-menu menu-item"
          aria-labelledby="dropdownMenuButton"
        >
          {items.map((item, index) => {
              return (
                  <div key={index}>
                      <div 
                        className={"dropdown-item " + isItemSelected(item.name)}
                        name={item.name}
                        onClick={
                          isFilter ? 

                          /* Activar filtro */
                          (e) => props.activeFilters(e.target.getAttribute('name')) : 

                          /* Activar orden */
                          (e) => props.activeSort(e.target.getAttribute('name'))
                        }
                        > 
                          {isFilter ? item.name : item.htmlText }
                      </div>

                      {/* If is last element, not print divider */}
                      {isLastElement(props.items.length, (index + 1)) ? <div className="dropdown-divider"></div> : null}    
                  </div>
              )
          })}
        </div>
      </div>
    );
}

export default FilterDropdown;

