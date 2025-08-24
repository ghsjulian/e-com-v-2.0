import React from 'react'

const ViewOrder = () => {
  return (
   <section className="orders-container">
            <h2>Total Recent Orders</h2>
            <table>
                <thead>
                    <tr>
                        <th>Order ID</th>
                        <th>Customer</th>
                        <th>Amount</th>
                        <th>Date</th>
                        <th>Status</th>
                        <th>Actions</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>#001</td>
                        <td>John Doe</td>
                        <td>$150</td>
                        <td>2025-08-20</td>
                        <td>Pending</td>
                        <td className="action-buttons">
                            <a href="#">View</a>
                            <a href="#">Update</a>
                        </td>
                    </tr>
                    <tr>
                        <td>#002</td>
                        <td>Jane Smith</td>
                        <td>$250</td>
                        <td>2025-08-19</td>
                        <td>Shipped</td>
                        <td className="action-buttons">
                            <a href="#">View</a>
                            <a href="#">Update</a>
                        </td>
                    </tr>
                    <tr>
                        <td>#003</td>
                        <td>Mike Johnson</td>
                        <td>$100</td>
                        <td>2025-08-18</td>
                        <td>Delivered</td>
                        <td className="action-buttons">
                            <a href="#">View</a>
                            <a href="#">Update</a>
                        </td>
                    </tr>
                </tbody>
            </table>
        </section>
  )
}

export default ViewOrder