import React from "react";

const Settings = () => {
    return (
        <section className="settings-container">
            <h2>Admin Settings</h2>
            <div className="form-group">
                <label for="store-name">Store Name</label>
                <input
                    type="text"
                    id="store-name"
                    placeholder="Enter store name"
                />
            </div>
            <div className="form-group">
                <label for="currency">Currency</label>
                <select id="currency">
                    <option value="usd">USD</option>
                    <option value="eur">EUR</option>
                    <option value="gbp">GBP</option>
                </select>
            </div>
            <div className="form-group">
                <label for="language">Language</label>
                <select id="language">
                    <option value="en">English</option>
                    <option value="es">Spanish</option>
                    <option value="fr">French</option>
                </select>
            </div>
            <div className="form-group">
                <label for="timezone">Timezone</label>
                <select id="timezone">
                    <option value="gmt">GMT</option>
                    <option value="pst">PST</option>
                    <option value="est">EST</option>
                </select>
            </div>
            <div className="form-group">
                <button type="submit">Save Settings</button>
            </div>
        </section>
    );
};

export default Settings;
