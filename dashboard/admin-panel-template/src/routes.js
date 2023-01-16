/*!

=========================================================
* Light Bootstrap Dashboard React - v2.0.1
=========================================================

* Product Page: https://www.creative-tim.com/product/light-bootstrap-dashboard-react
* Copyright 2022 Creative Tim (https://www.creative-tim.com)
* Licensed under MIT (https://github.com/creativetimofficial/light-bootstrap-dashboard-react/blob/master/LICENSE.md)

* Coded by Creative Tim

=========================================================

* The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

*/
import Dashboard from "views/Dashboard.js";
import UserProfile from "views/UserProfile.js";
import Create from "views/Create.js";
import TableList from "views/TableList.js";
import Typography from "views/Typography.js";
import Icons from "views/Icons.js";
import Notifications from "views/Notifications.js";
import OrderList from "views/OrderList";
import QueriesList from "./views/QueriesList";
import Categories from "views/Categories";
import ApprovedOrders from "views/ApprovedOrders";
import DeclinedOrders from "views/DeclinedOrders";
import Upgrade from "views/Upgrade.js";

const dashboardRoutes = [
  {
    path: "/dashboard",
    name: "Dashboard",
    icon: "nc-icon nc-chart-pie-35",
    component: Dashboard,
    layout: "/admin",
  },
  {
    path: "/user",
    name: "User Profile",
    icon: "nc-icon nc-circle-09",
    component: UserProfile,
    layout: "/admin",
  },
  {
    path: "/products",
    name: "Products",
    icon: "nc-icon nc-notes",
    component: TableList,
    layout: "/admin",
  },
  {
    path: "/categories",
    name: "Categories",
    icon: "nc-icon nc-notes",
    component: Categories,
    layout: "/admin",
  },
  {
    path: "/orders",
    name: "Orders",
    icon: "nc-icon nc-notes",
    component: OrderList,
    layout: "/admin",
  },
  // {
  //   path: "/appproved-orders",
  //   name: "Appproved Orders",
  //   icon: "nc-icon nc-notes",
  //   component: ApprovedOrders,
  //   layout: "/admin",
  // },
  // {
  //   path: "/declined-orders",
  //   name: "Declined Orders",
  //   icon: "nc-icon nc-notes",
  //   component: DeclinedOrders,
  //   layout: "/admin",
  // },
  // {
  //   path: "/messages",
  //   name: "User Queries",
  //   icon: "nc-icon nc-notes",
  //   component: QueriesList,
  //   layout: "/admin",
  // },
  {
    path: "/typography",
    name: "Typography",
    icon: "nc-icon nc-paper-2",
    component: Typography,
    layout: "/admin",
  },
  {
    path: "/icons",
    name: "Icons",
    icon: "nc-icon nc-atom",
    component: Icons,
    layout: "/admin",
  },
  {
    path: "/notifications",
    name: "Notifications",
    icon: "nc-icon nc-bell-55",
    component: Notifications,
    layout: "/admin",
  },
];

export default dashboardRoutes;
