import React from "react";

const ChartContainer = () => {
    return (
        <section className="chart-container">
            <h2>Sales Overview (Monthly)</h2>
            <div className="bar-chart">
                <div
                    className="bar"
                    style={{ height: "65%" }}
                    data-value="Jan"
                ></div>
                <div
                    className="bar"
                    style={{ height: "85%" }}
                    data-value="Feb"
                ></div>
                <div
                    className="bar"
                    style={{ height: "55%" }}
                    data-value="Mar"
                ></div>
                <div
                    className="bar"
                    style={{ height: "95%" }}
                    data-value="Apr"
                ></div>
                <div
                    className="bar"
                    style={{ height: "75%" }}
                    data-value="May"
                ></div>
                <div
                    className="bar"
                    style={{ height: "45%" }}
                    data-value="June"
                ></div>
                <div
                    className="bar"
                    style={{ height: "55%" }}
                    data-value="July"
                ></div>
                <div
                    className="bar"
                    style={{ height: "70%" }}
                    data-value="August"
                ></div>
                <div
                    className="bar"
                    style={{ height: "65%" }}
                    data-value="September"
                ></div>
                <div
                    className="bar"
                    style={{ height: "80%" }}
                    data-value="October"
                ></div>
                <div
                    className="bar"
                    style={{ height: "55%" }}
                    data-value="November"
                ></div>
                <div
                    className="bar"
                    style={{ height: "95%" }}
                    data-value="December"
                ></div>
            </div>
        </section>
    );
};

export default ChartContainer;
