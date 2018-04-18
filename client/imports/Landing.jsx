import React, { Component } from 'react'

export default class Landing extends Component {
	render() {
		return (
<div>
        {/* Side Navbar */}
        <nav className="side-navbar">
          <div className="side-navbar-wrapper">
            {/* Sidebar Header    */}
            <div className="sidenav-header d-flex align-items-center justify-content-center">
              {/* User Info*/}
              <div className="sidenav-header-inner text-center"><img src="img/avatar-1.jpg" alt="person" className="img-fluid rounded-circle" />
                <h2 className="h5">Anderson Hardy</h2><span>Web Developer</span>
              </div>
              {/* Small Brand information, appears on minimized sidebar*/}
              <div className="sidenav-header-logo"><a href="index.html" className="brand-small text-center"> <strong>B</strong><strong className="text-primary">D</strong></a></div>
            </div>
            {/* Sidebar Navigation Menus*/}
            <div className="main-menu">
              <h5 className="sidenav-heading">Main</h5>
              <ul id="side-main-menu" className="side-menu list-unstyled">                  
                <li><a href="index.html"> <i className="icon-home" />Home                           </a></li>
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
                <li> <a href="#"> <i className="icon-mail" />Demo
                    <div className="badge badge-warning">6 New</div></a></li>
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
        <div className="page">
          {/* navbar*/}
          <header className="header">
            <nav className="navbar">
              <div className="container-fluid">
                <div className="navbar-holder d-flex align-items-center justify-content-between">
                  <div className="navbar-header"><a id="toggle-btn" href="#" className="menu-btn"><i className="icon-bars"> </i></a><a href="index.html" className="navbar-brand">
                      <div className="brand-text d-none d-md-inline-block"><span>Bootstrap </span><strong className="text-primary">Dashboard</strong></div></a></div>
                  <ul className="nav-menu list-unstyled d-flex flex-md-row align-items-md-center">
                    {/* Notifications dropdown*/}
                    <li className="nav-item dropdown"> <a id="notifications" rel="nofollow" data-target="#" href="#" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false" className="nav-link"><i className="fa fa-bell" /><span className="badge badge-warning">12</span></a>
                      <ul aria-labelledby="notifications" className="dropdown-menu">
                        <li><a rel="nofollow" href="#" className="dropdown-item"> 
                            <div className="notification d-flex justify-content-between">
                              <div className="notification-content"><i className="fa fa-envelope" />You have 6 new messages </div>
                              <div className="notification-time"><small>4 minutes ago</small></div>
                            </div></a></li>
                        <li><a rel="nofollow" href="#" className="dropdown-item"> 
                            <div className="notification d-flex justify-content-between">
                              <div className="notification-content"><i className="fa fa-twitter" />You have 2 followers</div>
                              <div className="notification-time"><small>4 minutes ago</small></div>
                            </div></a></li>
                        <li><a rel="nofollow" href="#" className="dropdown-item"> 
                            <div className="notification d-flex justify-content-between">
                              <div className="notification-content"><i className="fa fa-upload" />Server Rebooted</div>
                              <div className="notification-time"><small>4 minutes ago</small></div>
                            </div></a></li>
                        <li><a rel="nofollow" href="#" className="dropdown-item"> 
                            <div className="notification d-flex justify-content-between">
                              <div className="notification-content"><i className="fa fa-twitter" />You have 2 followers</div>
                              <div className="notification-time"><small>10 minutes ago</small></div>
                            </div></a></li>
                        <li><a rel="nofollow" href="#" className="dropdown-item all-notifications text-center"> <strong> <i className="fa fa-bell" />view all notifications                                          </strong></a></li>
                      </ul>
                    </li>
                    {/* Messages dropdown*/}
                    <li className="nav-item dropdown"> <a id="messages" rel="nofollow" data-target="#" href="#" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false" className="nav-link"><i className="fa fa-envelope" /><span className="badge badge-info">10</span></a>
                      <ul aria-labelledby="notifications" className="dropdown-menu">
                        <li><a rel="nofollow" href="#" className="dropdown-item d-flex"> 
                            <div className="msg-profile"> <img src="img/avatar-1.jpg" alt="..." className="img-fluid rounded-circle" /></div>
                            <div className="msg-body">
                              <h3 className="h5">Jason Doe</h3><span>sent you a direct message</span><small>3 days ago at 7:58 pm - 10.06.2014</small>
                            </div></a></li>
                        <li><a rel="nofollow" href="#" className="dropdown-item d-flex"> 
                            <div className="msg-profile"> <img src="img/avatar-2.jpg" alt="..." className="img-fluid rounded-circle" /></div>
                            <div className="msg-body">
                              <h3 className="h5">Frank Williams</h3><span>sent you a direct message</span><small>3 days ago at 7:58 pm - 10.06.2014</small>
                            </div></a></li>
                        <li><a rel="nofollow" href="#" className="dropdown-item d-flex"> 
                            <div className="msg-profile"> <img src="img/avatar-3.jpg" alt="..." className="img-fluid rounded-circle" /></div>
                            <div className="msg-body">
                              <h3 className="h5">Ashley Wood</h3><span>sent you a direct message</span><small>3 days ago at 7:58 pm - 10.06.2014</small>
                            </div></a></li>
                        <li><a rel="nofollow" href="#" className="dropdown-item all-notifications text-center"> <strong> <i className="fa fa-envelope" />Read all messages  </strong></a></li>
                      </ul>
                    </li>
                    {/* Languages dropdown    */}
                    <li className="nav-item dropdown"><a id="languages" rel="nofollow" data-target="#" href="#" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false" className="nav-link language dropdown-toggle"><img src="img/flags/16/GB.png" alt="English" /><span className="d-none d-sm-inline-block">English</span></a>
                      <ul aria-labelledby="languages" className="dropdown-menu">
                        <li><a rel="nofollow" href="#" className="dropdown-item"> <img src="img/flags/16/DE.png" alt="English" className="mr-2" /><span>German</span></a></li>
                        <li><a rel="nofollow" href="#" className="dropdown-item"> <img src="img/flags/16/FR.png" alt="English" className="mr-2" /><span>French                                                       </span></a></li>
                      </ul>
                    </li>
                    {/* Log out*/}
                    <li className="nav-item"><a href="login.html" className="nav-link logout"> <span className="d-none d-sm-inline-block">Logout</span><i className="fa fa-sign-out" /></a></li>
                  </ul>
                </div>
              </div>
            </nav>
          </header>
          {/* Counts Section */}
          <section className="dashboard-counts section-padding">
            <div className="container-fluid">
              <div className="row">
                {/* Count item widget*/}
                <div className="col-xl-2 col-md-4 col-6">
                  <div className="wrapper count-title d-flex">
                    <div className="icon"><i className="icon-user" /></div>
                    <div className="name"><strong className="text-uppercase">New Clients</strong><span>Last 7 days</span>
                      <div className="count-number">25</div>
                    </div>
                  </div>
                </div>
                {/* Count item widget*/}
                <div className="col-xl-2 col-md-4 col-6">
                  <div className="wrapper count-title d-flex">
                    <div className="icon"><i className="icon-padnote" /></div>
                    <div className="name"><strong className="text-uppercase">Work Orders</strong><span>Last 5 days</span>
                      <div className="count-number">400</div>
                    </div>
                  </div>
                </div>
                {/* Count item widget*/}
                <div className="col-xl-2 col-md-4 col-6">
                  <div className="wrapper count-title d-flex">
                    <div className="icon"><i className="icon-check" /></div>
                    <div className="name"><strong className="text-uppercase">New Quotes</strong><span>Last 2 months</span>
                      <div className="count-number">342</div>
                    </div>
                  </div>
                </div>
                {/* Count item widget*/}
                <div className="col-xl-2 col-md-4 col-6">
                  <div className="wrapper count-title d-flex">
                    <div className="icon"><i className="icon-bill" /></div>
                    <div className="name"><strong className="text-uppercase">New Invoices</strong><span>Last 2 days</span>
                      <div className="count-number">123</div>
                    </div>
                  </div>
                </div>
                {/* Count item widget*/}
                <div className="col-xl-2 col-md-4 col-6">
                  <div className="wrapper count-title d-flex">
                    <div className="icon"><i className="icon-list" /></div>
                    <div className="name"><strong className="text-uppercase">Open Cases</strong><span>Last 3 months</span>
                      <div className="count-number">92</div>
                    </div>
                  </div>
                </div>
                {/* Count item widget*/}
                <div className="col-xl-2 col-md-4 col-6">
                  <div className="wrapper count-title d-flex">
                    <div className="icon"><i className="icon-list-1" /></div>
                    <div className="name"><strong className="text-uppercase">New Cases</strong><span>Last 7 days</span>
                      <div className="count-number">70</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>
          {/* Header Section*/}
          <section className="dashboard-header section-padding">
            <div className="container-fluid">
              <div className="row d-flex align-items-md-stretch">
                {/* To Do List*/}
                <div className="col-lg-3 col-md-6">
                  <div className="card to-do">
                    <h2 className="display h4">To do List</h2>
                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit.</p>
                    <ul className="check-lists list-unstyled">
                      <li className="d-flex align-items-center"> 
                        <input type="checkbox" id="list-1" name="list-1" className="form-control-custom" />
                        <label htmlFor="list-1">Similique sunt in culpa qui officia</label>
                      </li>
                      <li className="d-flex align-items-center"> 
                        <input type="checkbox" id="list-2" name="list-2" className="form-control-custom" />
                        <label htmlFor="list-2">Ed ut perspiciatis unde omnis iste</label>
                      </li>
                      <li className="d-flex align-items-center"> 
                        <input type="checkbox" id="list-3" name="list-3" className="form-control-custom" />
                        <label htmlFor="list-3">At vero eos et accusamus et iusto </label>
                      </li>
                      <li className="d-flex align-items-center"> 
                        <input type="checkbox" id="list-4" name="list-4" className="form-control-custom" />
                        <label htmlFor="list-4">Explicabo Nemo ipsam voluptatem</label>
                      </li>
                      <li className="d-flex align-items-center"> 
                        <input type="checkbox" id="list-5" name="list-5" className="form-control-custom" />
                        <label htmlFor="list-5">Similique sunt in culpa qui officia</label>
                      </li>
                      <li className="d-flex align-items-center"> 
                        <input type="checkbox" id="list-6" name="list-6" className="form-control-custom" />
                        <label htmlFor="list-6">At vero eos et accusamus et iusto </label>
                      </li>
                      <li className="d-flex align-items-center"> 
                        <input type="checkbox" id="list-7" name="list-7" className="form-control-custom" />
                        <label htmlFor="list-7">Similique sunt in culpa qui officia</label>
                      </li>
                      <li className="d-flex align-items-center"> 
                        <input type="checkbox" id="list-8" name="list-8" className="form-control-custom" />
                        <label htmlFor="list-8">Ed ut perspiciatis unde omnis iste</label>
                      </li>
                    </ul>
                  </div>
                </div>
                {/* Pie Chart*/}
                <div className="col-lg-3 col-md-6">
                  <div className="card project-progress">
                    <h2 className="display h4">Project Beta progress</h2>
                    <p> Lorem ipsum dolor sit amet, consectetur adipisicing elit.</p>
                    <div className="pie-chart">
                      <canvas id="pieChart" width={300} height={300}> </canvas>
                    </div>
                  </div>
                </div>
                {/* Line Chart */}
                <div className="col-lg-6 col-md-12 flex-lg-last flex-md-first align-self-baseline">
                  <div className="card sales-report">
                    <h2 className="display h4">Sales marketing report</h2>
                    <p> Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolor amet officiis</p>
                    <div className="line-chart">
                      <canvas id="lineCahrt" />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>
          {/* Statistics Section*/}
          <section className="statistics">
            <div className="container-fluid">
              <div className="row d-flex">
                <div className="col-lg-4">
                  {/* Income*/}
                  <div className="card income text-center">
                    <div className="icon"><i className="icon-line-chart" /></div>
                    <div className="number">126,418</div><strong className="text-primary">All Income</strong>
                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit sed do.</p>
                  </div>
                </div>
                <div className="col-lg-4">
                  {/* Monthly Usage*/}
                  <div className="card data-usage">
                    <h2 className="display h4">Monthly Usage</h2>
                    <div className="row d-flex align-items-center">
                      <div className="col-sm-6">
                        <div id="progress-circle" className="d-flex align-items-center justify-content-center" />
                      </div>
                      <div className="col-sm-6"><strong className="text-primary">80.56 Gb</strong><small>Current Plan</small><span>100 Gb Monthly</span></div>
                    </div>
                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing.</p>
                  </div>
                </div>
                <div className="col-lg-4">
                  {/* User Actibity*/}
                  <div className="card user-activity">
                    <h2 className="display h4">User Activity</h2>
                    <div className="number">210</div>
                    <h3 className="h4 display">Social Users</h3>
                    <div className="progress">
                      <div role="progressbar" style={{width: '25%'}} aria-valuenow={25} aria-valuemin={0} aria-valuemax={100} className="progress-bar progress-bar bg-primary" />
                    </div>
                    <div className="page-statistics d-flex justify-content-between">
                      <div className="page-statistics-left"><span>Pages Visits</span><strong>230</strong></div>
                      <div className="page-statistics-right"><span>New Visits</span><strong>73.4%</strong></div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>
          {/* Updates Section */}
          <section className="mt-30px mb-30px">
            <div className="container-fluid">
              <div className="row">
                <div className="col-lg-4 col-md-12">
                  {/* Recent Updates Widget          */}
                  <div id="new-updates" className="card updates recent-updated">
                    <div id="updates-header" className="card-header d-flex justify-content-between align-items-center">
                      <h2 className="h5 display"><a data-toggle="collapse" data-parent="#new-updates" href="#updates-box" aria-expanded="true" aria-controls="updates-box">News Updates</a></h2><a data-toggle="collapse" data-parent="#new-updates" href="#updates-box" aria-expanded="true" aria-controls="updates-box"><i className="fa fa-angle-down" /></a>
                    </div>
                    <div id="updates-box" role="tabpanel" className="collapse show">
                      <ul className="news list-unstyled">
                        {/* Item*/}
                        <li className="d-flex justify-content-between"> 
                          <div className="left-col d-flex">
                            <div className="icon"><i className="icon-rss-feed" /></div>
                            <div className="title"><strong>Lorem ipsum dolor sit amet.</strong>
                              <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor.</p>
                            </div>
                          </div>
                          <div className="right-col text-right">
                            <div className="update-date">24<span className="month">Jan</span></div>
                          </div>
                        </li>
                        {/* Item*/}
                        <li className="d-flex justify-content-between"> 
                          <div className="left-col d-flex">
                            <div className="icon"><i className="icon-rss-feed" /></div>
                            <div className="title"><strong>Lorem ipsum dolor sit amet.</strong>
                              <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor.</p>
                            </div>
                          </div>
                          <div className="right-col text-right">
                            <div className="update-date">24<span className="month">Jan</span></div>
                          </div>
                        </li>
                        {/* Item*/}
                        <li className="d-flex justify-content-between"> 
                          <div className="left-col d-flex">
                            <div className="icon"><i className="icon-rss-feed" /></div>
                            <div className="title"><strong>Lorem ipsum dolor sit amet.</strong>
                              <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor.</p>
                            </div>
                          </div>
                          <div className="right-col text-right">
                            <div className="update-date">24<span className="month">Jan</span></div>
                          </div>
                        </li>
                        {/* Item*/}
                        <li className="d-flex justify-content-between"> 
                          <div className="left-col d-flex">
                            <div className="icon"><i className="icon-rss-feed" /></div>
                            <div className="title"><strong>Lorem ipsum dolor sit amet.</strong>
                              <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor.</p>
                            </div>
                          </div>
                          <div className="right-col text-right">
                            <div className="update-date">24<span className="month">Jan</span></div>
                          </div>
                        </li>
                        {/* Item*/}
                        <li className="d-flex justify-content-between"> 
                          <div className="left-col d-flex">
                            <div className="icon"><i className="icon-rss-feed" /></div>
                            <div className="title"><strong>Lorem ipsum dolor sit amet.</strong>
                              <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor.</p>
                            </div>
                          </div>
                          <div className="right-col text-right">
                            <div className="update-date">24<span className="month">Jan</span></div>
                          </div>
                        </li>
                        {/* Item*/}
                        <li className="d-flex justify-content-between"> 
                          <div className="left-col d-flex">
                            <div className="icon"><i className="icon-rss-feed" /></div>
                            <div className="title"><strong>Lorem ipsum dolor sit amet.</strong>
                              <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor.</p>
                            </div>
                          </div>
                          <div className="right-col text-right">
                            <div className="update-date">24<span className="month">Jan</span></div>
                          </div>
                        </li>
                      </ul>
                    </div>
                  </div>
                  {/* Recent Updates Widget End*/}
                </div>
                <div className="col-lg-4 col-md-6">
                  {/* Daily Feed Widget*/}
                  <div id="daily-feeds" className="card updates daily-feeds">
                    <div id="feeds-header" className="card-header d-flex justify-content-between align-items-center">
                      <h2 className="h5 display"><a data-toggle="collapse" data-parent="#daily-feeds" href="#feeds-box" aria-expanded="true" aria-controls="feeds-box">Your daily Feeds </a></h2>
                      <div className="right-column">
                        <div className="badge badge-primary">10 messages</div><a data-toggle="collapse" data-parent="#daily-feeds" href="#feeds-box" aria-expanded="true" aria-controls="feeds-box"><i className="fa fa-angle-down" /></a>
                      </div>
                    </div>
                    <div id="feeds-box" role="tabpanel" className="collapse show">
                      <div className="feed-box">
                        <ul className="feed-elements list-unstyled">
                          {/* List*/}
                          <li className="clearfix">
                            <div className="feed d-flex justify-content-between">
                              <div className="feed-body d-flex justify-content-between"><a href="#" className="feed-profile"><img src="img/avatar-5.jpg" alt="person" className="img-fluid rounded-circle" /></a>
                                <div className="content"><strong>Aria Smith</strong><small>Posted a new blog </small>
                                  <div className="full-date"><small>Today 5:60 pm - 12.06.2014</small></div>
                                </div>
                              </div>
                              <div className="date"><small>5min ago</small></div>
                            </div>
                          </li>
                          {/* List*/}
                          <li className="clearfix">
                            <div className="feed d-flex justify-content-between">
                              <div className="feed-body d-flex justify-content-between"><a href="#" className="feed-profile"><img src="img/avatar-2.jpg" alt="person" className="img-fluid rounded-circle" /></a>
                                <div className="content"><strong>Frank Williams</strong><small>Posted a new blog </small>
                                  <div className="full-date"><small>Today 5:60 pm - 12.06.2014</small></div>
                                  <div className="CTAs"><a href="#" className="btn btn-xs btn-dark"><i className="fa fa-thumbs-up"> </i>Like</a><a href="#" className="btn btn-xs btn-dark"><i className="fa fa-heart"> </i>Love</a></div>
                                </div>
                              </div>
                              <div className="date"><small>5min ago</small></div>
                            </div>
                          </li>
                          {/* List*/}
                          <li className="clearfix">
                            <div className="feed d-flex justify-content-between">
                              <div className="feed-body d-flex justify-content-between"><a href="#" className="feed-profile"><img src="img/avatar-3.jpg" alt="person" className="img-fluid rounded-circle" /></a>
                                <div className="content"><strong>Ashley Wood</strong><small>Posted a new blog </small>
                                  <div className="full-date"><small>Today 5:60 pm - 12.06.2014</small></div>
                                </div>
                              </div>
                              <div className="date"><small>5min ago</small></div>
                            </div>
                          </li>
                          {/* List*/}
                          <li className="clearfix">
                            <div className="feed d-flex justify-content-between">
                              <div className="feed-body d-flex justify-content-between"><a href="#" className="feed-profile"><img src="img/avatar-1.jpg" alt="person" className="img-fluid rounded-circle" /></a>
                                <div className="content"><strong>Jason Doe</strong><small>Posted a new blog </small>
                                  <div className="full-date"><small>Today 5:60 pm - 12.06.2014</small></div>
                                </div>
                              </div>
                              <div className="date"><small>5min ago</small></div>
                            </div>
                            <div className="message-card"> <small>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s. Over the years, sometimes by accident, sometimes on purpose (injected humour and the like).</small></div>
                            <div className="CTAs pull-right"><a href="#" className="btn btn-xs btn-dark"><i className="fa fa-thumbs-up"> </i>Like</a></div>
                          </li>
                          {/* List*/}
                          <li className="clearfix">
                            <div className="feed d-flex justify-content-between">
                              <div className="feed-body d-flex justify-content-between"><a href="#" className="feed-profile"><img src="img/avatar-6.jpg" alt="person" className="img-fluid rounded-circle" /></a>
                                <div className="content"><strong>Sam Martinez</strong><small>Posted a new blog </small>
                                  <div className="full-date"><small>Today 5:60 pm - 12.06.2014</small></div>
                                </div>
                              </div>
                              <div className="date"><small>5min ago</small></div>
                            </div>
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>
                  {/* Daily Feed Widget End*/}
                </div>
                <div className="col-lg-4 col-md-6">
                  {/* Recent Activities Widget      */}
                  <div id="recent-activities-wrapper" className="card updates activities">
                    <div id="activites-header" className="card-header d-flex justify-content-between align-items-center">
                      <h2 className="h5 display"><a data-toggle="collapse" data-parent="#recent-activities-wrapper" href="#activities-box" aria-expanded="true" aria-controls="activities-box">Recent Activities</a></h2><a data-toggle="collapse" data-parent="#recent-activities-wrapper" href="#activities-box" aria-expanded="true" aria-controls="activities-box"><i className="fa fa-angle-down" /></a>
                    </div>
                    <div id="activities-box" role="tabpanel" className="collapse show">
                      <ul className="activities list-unstyled">
                        {/* Item*/}
                        <li>
                          <div className="row">
                            <div className="col-4 date-holder text-right">
                              <div className="icon"><i className="icon-clock" /></div>
                              <div className="date"> <span>6:00 am</span><span className="text-info">6 hours ago</span></div>
                            </div>
                            <div className="col-8 content"><strong>Meeting</strong>
                              <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud.              </p>
                            </div>
                          </div>
                        </li>
                        {/* Item*/}
                        <li>
                          <div className="row">
                            <div className="col-4 date-holder text-right">
                              <div className="icon"><i className="icon-clock" /></div>
                              <div className="date"> <span>6:00 am</span><span className="text-info">6 hours ago</span></div>
                            </div>
                            <div className="col-8 content"><strong>Meeting</strong>
                              <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud.              </p>
                            </div>
                          </div>
                        </li>
                        {/* Item*/}
                        <li>
                          <div className="row">
                            <div className="col-4 date-holder text-right">
                              <div className="icon"><i className="icon-clock" /></div>
                              <div className="date"> <span>6:00 am</span><span className="text-info">6 hours ago</span></div>
                            </div>
                            <div className="col-8 content"><strong>Meeting</strong>
                              <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud.              </p>
                            </div>
                          </div>
                        </li>
                        {/* Item*/}
                        <li>
                          <div className="row">
                            <div className="col-4 date-holder text-right">
                              <div className="icon"><i className="icon-clock" /></div>
                              <div className="date"> <span>6:00 am</span><span className="text-info">6 hours ago</span></div>
                            </div>
                            <div className="col-8 content"><strong>Meeting</strong>
                              <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud.              </p>
                            </div>
                          </div>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>
          <footer className="main-footer">
            <div className="container-fluid">
              <div className="row">
                <div className="col-sm-6">
                  <p>Your company © 2017-2019</p>
                </div>
                <div className="col-sm-6 text-right">
                  <p>Design by <a href="https://bootstrapious.com" className="external">Bootstrapious</a></p>
                  {/* Please do not remove the backlink to us unless you support further theme's development at https://bootstrapious.com/donate. It is part of the license conditions and it helps me to run Bootstrapious. Thank you for understanding :)*/}
                </div>
              </div>
            </div>
          </footer>
        </div>
      </div>
		       )
	}
}
