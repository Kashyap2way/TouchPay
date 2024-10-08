// src/components/Dashboard.js
import React from 'react';

function Dashboard() {
return (
        <div className="dashboard-container">
        <h1>Welcome to your Dashboard</h1>
        <p>Account Balance: $5,000</p>
        <p>Recent Transactions:</p>
        <ul>
            <li>Deposit: $500</li>
            <li>Withdrawal: $200</li>
        </ul>
        </div>
    );
}

export default Dashboard;
