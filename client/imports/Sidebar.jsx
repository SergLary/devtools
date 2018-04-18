import React, { Component } from 'react'

export default class Sidebar extends Component {
	render() {
		return (
      <nav className="side-navbar">
        {/* Side navbar */}
        <div className="side-navbar-wrapper">
          {/* Sidebar Header    */}
          <div className="sidenav-header d-flex align-items-center justify-content-center">
            {/* User Info*/}
            <div className="sidenav-header-inner text-center"><img src="img/logo_512.png" alt="person" className="img-fluid rounded-circle" />
              <h2 className="h5">Latunys</h2><span>Dev Tools</span>
            </div>
            {/* Small Brand information, appears on minimized sidebar*/}
            <div className="sidenav-header-logo"><a href="index.html" className="brand-small text-center"> <strong>L</strong><strong className="text-primary">S</strong></a></div>
          </div>
          {/* Sidebar Navigation Menus*/}
          <div className="main-menu">
            <h5 className="sidenav-heading">Main</h5>
            <ul id="side-main-menu" className="side-menu list-unstyled">                  
              <li><a href="index.html"> <i className="icon-home" />Home                           </a></li>
               <li><a href="#exampledropdownDropdown" aria-expanded="false" data-toggle="collapse"> <i className="icon-interface-windows" />Метафоры</a>
                <ul id="exampledropdownDropdown" className="collapse list-unstyled ">
                  <li><a href="#">Важность</a></li>
                  <li><a href="#">Как использовать</a></li>
                  <li><a href="#">Популярные</a></li>
                </ul>
              </li>

              <li><a href="forms.html"> <i className="icon-form" />Forms                           </a></li>
              <li><a href="charts.html"> <i className="fa fa-bar-chart" />Charts                           </a></li>
              <li><a href="tables.html"> <i className="icon-grid" />Tables                           </a></li>
              <li><a href="#exampledropdownDropdown" aria-expanded="false" data-toggle="collapse"> <i className="icon-interface-windows" />Example dropdown </a>
                <ul id="exampledropdownDropdown" className="collapse list-unstyled ">
                  <li><a href="#">Page</a></li>
                  <li><a href="#">Page</a></li>
                  <li><a href="#">Page</a></li>
                </ul>
              </li>
              <li><a href="login.html"> <i className="icon-interface-windows" />Login page                           </a></li>
            </ul>
          </div>
          <div className="admin-menu">
            <h5 className="sidenav-heading">Second menu</h5>
            <ul id="side-admin-menu" className="side-menu list-unstyled"> 
              <li> <a href="#"> <i className="icon-screen"> </i>Demo</a></li>
              <li> <a href="#"> <i className="icon-flask"> </i>Demo
                  <div className="badge badge-info">Special</div></a></li>
              <li> <a href="#"> <i className="icon-flask"> </i>Demo</a></li>
              <li> <a href="#"> <i className="icon-picture"> </i>Demo</a></li>
            </ul>
          </div>
        </div>
      </nav>
		)
	}
}	
