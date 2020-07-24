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
// Login
import Login from "views/Login/Login.js";
// Person
import Persons from "views/Persons/"
import Person from "views/Persons/Person.js"
// Movies
import Movies from "views/Movies/"
import Movie from "views/Movies/Movie.js"

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
    path: "/persons",
    name: "Person List",
    rtlName: "لوحة القيادة",
    icon: GroupIcon,
    component: Persons,
    layout: "/admin",
  },
  {
    path: "/new-person",
    name: "Person",
    rtlName: "قائمة الجدول",
    icon: PersonIcon,
    component: Person,
    layout: "/admin",
  },
  {
    path: "/movie",
    name: "Movies",
    rtlName: "قائمة الجدول",
    icon: MovieIcon,
    component: Movies,
    layout: "/admin",
  },
  {
    path: "/new-movie",
    name: "Movie",
    rtlName: "قائمة الجدول",
    icon: MovieIcon,
    component: Movie,
    layout: "/admin",
  }
];

export default dashboardRoutes;
