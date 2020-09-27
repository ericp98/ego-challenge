import React from 'react';
import { Link } from 'react-router-dom';
import { SidebarData, SidebarData2, SidebarData3, SidebarData4 } from './SidebarData';
import { AiOutlineClose } from 'react-icons/ai';

function Sidebar(props) {

    return (
      <div className={props.active ? "sidebar-items active sidebar-margin" : "sidebar-items sidebar-margin"}>
        <div className="col-12">
          <div className="row">
            <div
              className="ml-auto mr-2 mt-2 mb-4 menu-item d-flex"
              onClick={props.closeSidebar}
            >
              <span style={{fontSize: '0.7em'}} className="mr-3">Cerrar</span> <AiOutlineClose size="1.2em" className="mt-2 mr-1" />
            </div>
          </div>

          <div className="row">
            <ul className="ml-auto mr-5 text-right">
              {SidebarData.map((item, index) => {
                return (
                  <ul key={index}>
                    <Link to="#" className="sidebar-link">
                      {item.title}
                    </Link>
                  </ul>
                );
              })}
            </ul>
          </div>

          <hr />

          <div className="row">
            <ul className="ml-auto mr-5 text-right">
              {SidebarData2.map((item, index) => {
                return (
                  <ul key={index}>
                    <Link to="#" className="sidebar-link">
                      {item.title}
                    </Link>
                  </ul>
                );
              })}
            </ul>
          </div>

          <hr />

          <div className="row">
            <ul className="ml-auto mr-5 text-right">
              {SidebarData3.map((item, index) => {
                return (
                  <ul key={index}>
                    <Link to="#" className="sidebar-link">
                      {item.title}
                    </Link>
                  </ul>
                );
              })}
            </ul>
          </div>

          <div className="row footer-sidebar">
            <ul className="ml-auto mr-5 mt-4 text-right">
              {SidebarData4.map((item, index) => {
                return (
                  <ul key={index}>
                    <Link to="#" className="sidebar-link">
                      {item.title}
                    </Link>
                  </ul>
                );
              })}
            </ul>
          </div>
        </div>
      </div>
    );
}

export default Sidebar;
