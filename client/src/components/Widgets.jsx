import React from "react";
import "../css/Widgets.css";
import SearchIcon from "@mui/icons-material//Search";

function Widgets() {
    return (
        <div className="widgets">
            <div className="widgetsInput">
                <SearchIcon className="widgetsSearchIcon" />
                <input placeholder="Search Twitter" type="text" />
            </div>

            <div className="widgetsWidgetContainer">
                <h2>What's happening</h2>
                <ul>
                    <li>⚡BlockChain</li>
                    <li>⚡React.js</li>
                    <li>⚡Ethereum</li>
                    <li>⚡Solidity</li>
                    <li>⚡Ether.js</li>
                    <li>⚡HardHat</li>
                    <li>⚡Mainnet</li>
                    <li>⚡Dapp</li>
                </ul>

            </div>
        </div>
    );
}

export default Widgets;