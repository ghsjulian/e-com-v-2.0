import React from "react";

const AdminStatus = () => {
    return (
        <div className="admin-chart">
            <div className="chart">
                <div className="flex">
                    <div className="info"></div>
                    <span>57%</span>
                </div>
                <div className="flex">
                    <div className="warning"></div>
                    <span>37%</span>
                </div>
                <div className="flex">
                    <div className="success"></div>
                    <span>50%</span>
                </div>
                <div className="flex">
                    <div className="pending"></div>
                    <span>80%</span>
                </div>
                <div className="flex">
                    <div className="delete"></div>
                    <span>70%</span>
                </div>
                <div className="flex">
                    <div className="report"></div>
                    <span>40%</span>
                </div>
            </div>
            <div className="chart">
                <div className="circle">
                Dashboard Chart
                </div>
            </div>
        </div>
    );
};

export default AdminStatus;
