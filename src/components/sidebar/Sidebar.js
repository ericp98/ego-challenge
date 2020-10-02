import React from 'react';
import { Link } from 'react-router-dom';
import { SidebarData, SidebarData2, SidebarData3, SidebarData4 } from './SidebarData';
import { AiOutlineClose } from 'react-icons/ai';

function Sidebar(props) {

  const handleOverflow = () => {

    /* Al activar el sidebar, se ocultan el footer, el scroll del body y la flecha del carousel */

    const body = document.body;
    const footer = document.getElementById("footer");
    const arrowCarousel = document.getElementsByClassName('carousel-control-next-icon');
    const arrowCarouselLeft = document.getElementsByClassName('carousel-control-prev-icon');
    const carouselIndicators = document.getElementsByClassName('carousel-indicators')

    if (props.active){
      footer.style.display = "none";
      body.style.overflow = "hidden";
      handleArrowCarousel(arrowCarousel, 'hidden')
      handleArrowCarousel(arrowCarouselLeft, 'hidden')
      handleArrowCarousel(carouselIndicators, 'hidden')
      return ("sidebar-items active sidebar-margin siedbar-pt")
    } else {
      footer.style.display = "block";
      body.style.overflow = "auto";
      handleArrowCarousel(arrowCarousel, 'visible');
      handleArrowCarousel(arrowCarouselLeft, 'visible');
      handleArrowCarousel(carouselIndicators, 'visible')
      return ("sidebar-items sidebar-margin")
    }
  }

  const handleArrowCarousel = (arrow, value) => {
    if (arrow.length > 0){
      arrow[0].style.visibility = value
    }
  }

    return (
      <div className={handleOverflow()}>
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
                    <Link to={item.path} className="sidebar-link" onClick={props.closeSidebar}>
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
