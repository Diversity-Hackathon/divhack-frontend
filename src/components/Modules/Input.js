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
                            <input name="beginAddress" type="text" placeholder="Street Address" />
                            <input name="beginCity" type="text" placeholder="City" />
                            <input name="beginState" type="text" placeholder="State" />
                            //<button className="input-button">Find</button> Why do we have this button??
                        </div>
                        <div className="input-group last-input">
                            <input name="targetAddress" type="text" placeholder="Target Address" />
                            <input name="targetCity" type="text" placeholder="Target City" />
                            <input name="targetState" type="text" placeholder="Target State" />
                          //  <button className="input-button">Find</button>
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
