import ChartStatisticsIcon from "./icons/ChartStatisticsIcon";
import DashboardIcon from "./icons/DashboardIcon";
import ProductsIcon from "./icons/ProductsIcon";
import UsersIcon from "./icons/UsersIcon";

export const navSidebarItems = [
    {
        id: 1,
        label: "Dashboard" ,
        icon: ( fill: any ) => <DashboardIcon fill={ fill } />,
        navigateTo: 'dashboard'
    },
    {
        id: 2,
        label: "Chart Statistics",
        icon: ( fill: any ) => <ChartStatisticsIcon fill={ fill } />,
        navigateTo: 'chartStatistics'
    },
    {
        id: 3,
        label: "Products",
        icon: ( fill: any ) => <ProductsIcon fill={ fill } />,
        navigateTo: 'products'
    },
    // {
    //     id: 4,
    //     label: "Users",
    //     icon: ( fill: any ) => <UsersIcon fill={ fill } />,
    //     navigateTo: 'users'
    // },
];
