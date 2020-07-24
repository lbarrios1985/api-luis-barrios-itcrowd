/*!

=========================================================
* Material Dashboard React - v1.9.0
=========================================================

* Product Page: https://www.creative-tim.com/product/material-dashboard-react
* Copyright 2020 Creative Tim (https://www.creative-tim.com)
* Licensed under MIT (https://github.com/creativetimofficial/material-dashboard-react/blob/master/LICENSE.md)

* Coded by Creative Tim

=========================================================

* The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

*/
// @material-ui/icons
import PersonIcon from "@material-ui/icons/Person";
import GroupIcon from '@material-ui/icons/Group';
import MovieIcon from '@material-ui/icons/Movie';
import LockOpenIcon from '@material-ui/icons/LockOpen'
// core components/views for Admin layout
import DashboardPage from "views/Dashboard/Dashboard.js";
import TableList from "views/TableList/TableList.js";
import Login from "views/Login/Login.js";
// Movies
import Movies from "views/Movies/"

const dashboardRoutes = [
  {
    path: "/login",
    name: "Login",
    rtlName: "لوحة القيادة",
    icon: LockOpenIcon,
    component: Login,
    layout: "/admin",
  },
  {
    path: "/users",
    name: "Users",
    rtlName: "لوحة القيادة",
    icon: GroupIcon,
    component: DashboardPage,
    layout: "/admin",
  },
  {
    path: "/person",
    name: "Person",
    rtlName: "قائمة الجدول",
    icon: PersonIcon,
    component: TableList,
    layout: "/admin",
  },
  {
    path: "/movie",
    name: "Movies",
    rtlName: "قائمة الجدول",
    icon: MovieIcon,
    component: Movies,
    layout: "/admin",
  }
];

export default dashboardRoutes;
