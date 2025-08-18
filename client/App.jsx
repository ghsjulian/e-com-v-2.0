import React, { useEffect } from "react";
import {
    BrowserRouter as Router,
    Routes,
    Route,
    Navigate
} from "react-router-dom";
import API from "../apis/API";

const App = () => {
    return (
        <Router>
            <Routes>
                <Route path="/api" element={<API />} />
            </Routes>
            {/*---> DEFINE YOUR ROUTES <---
             Here....                    
            ---> DEFINE YOUR ROUTES <---*/}
        </Router>
    );
};

export default App;
