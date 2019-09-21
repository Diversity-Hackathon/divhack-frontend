// INPUT COMPONENT

// REACT IMPORT
import React from "react";

export default class Input extends React.Component {
    render() {
        return(
            <div className="input-container">
                <div className="input-column">
                    <form>
                        <div className="input-group">
                            <input name="starting" type="text" placeholder="Starting location" />
                            <button className="input-button">Find</button>
                        </div>
                        <div className="input-group last-input">
                            <input name="target" type="text" placeholder="Target location" />
                            <button className="input-button">Find</button>
                        </div>
                    </form>
                </div>
                <div className="input-column">
                    <button className="input-button go-button">
                        Calculate CO<sub>2</sub> <br/>footprint &raquo;
                    </button>
                </div>
            </div>
        );
    }
}