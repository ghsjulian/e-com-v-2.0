import React from "react";

const RecentOrder = () => {
    return (
        <section className="recent-orders">
            <h2>Recent Orders</h2>
            <table>
                <thead>
                    <tr>
                        <th>Order ID</th>
                        <th>Customer</th>
                        <th>Amount</th>
                        <th>Status</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>#001</td>
                        <td>John Doe</td>
                        <td>$180</td>
                        <td>Pending</td>
                    </tr>
                    <tr>
                        <td>#002</td>
                        <td>Jane Smith</td>
                        <td>$320</td>
                        <td>Shipped</td>
                    </tr>
                    <tr>
                        <td>#003</td>
                        <td>Mike Johnson</td>
                        <td>$95</td>
                        <td>Delivered</td>
                    </tr>
                </tbody>
            </table>
        </section>
    );
};

export default RecentOrder;
