import React from "react";
import DashboardOverview from "../components/DashboardOverview";
import ChartContainer from "../components/ChartContainer";
import RecentOrder from "../components/RecentOrder";

const Dashboard = () => {
    return <>
        <DashboardOverview />
        <RecentOrder />
        <ChartContainer />
    </>;
};

export default Dashboard;
