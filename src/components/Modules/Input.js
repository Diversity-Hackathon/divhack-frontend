// INPUT COMPONENT

// REACT IMPORT
import React, { useState } from "react";
import { useDispatch, useSelector } from 'react-redux';
import { Actions, Selectors } from '../../data/route-options';

// export default class Input extends React.Component {
//     render() {
//         return(
//             <div className="input-container">
//                 <div className="input-column">
//                     <form>
//                         <div className="input-group">
//                             <input name="beginAddress" type="text" placeholder="Street Address" />
//                             <input name="beginCity" type="text" placeholder="City" />
//                             <input name="beginState" type="text" placeholder="State" />
//                         </div>
//                         <div className="input-group last-input">
//                             <input name="targetAddress" type="text" placeholder="Target Address" />
//                             <input name="targetCity" type="text" placeholder="Target City" />
//                             <input name="targetState" type="text" placeholder="Target State" />
//                         </div>
//                     </form>
//                 </div>
//                 <div className="input-column">
//                     <button className="input-button go-button">
//                         Calculate CO<sub>2</sub> <br/>footprint &raquo;
//                     </button>
//                 </div>
//             </div>
//         );
//     }
// }

const GetRoute = () => {
    const dispatch = useDispatch();
    const [routeOptions, setRouteOptions] = useState('');

    const isLoading = useSelector(Selectors.getLoadingStatus);

    const handleChange = (e) => {
        setRouteOptions(e.currentTarget.value);
    }

    const handleClick = () => {
        dispatch(Actions.getRoute(setRouteOptions));
    }

    return (
        <div className="input-container">
            <div className="input-group input-column">
                <input onChange={handleChange} value={routeOptions} name="starting-address" type="text" placeholder="Starting street address" />
                <input onChange={handleChange} value={routeOptions} name="starting-city" type="text" placeholder="City" />
                <input onChange={handleChange} value={routeOptions} name="starting-state" type="text" placeholder="State" />
            </div>
            <div className="input-group input-column">
                <input onChange={handleChange} value={routeOptions} name="target-address" type="text" placeholder="Target street address" />
                <input onChange={handleChange} value={routeOptions} name="target-city" type="text" placeholder="City" />
                <input onChange={handleChange} value={routeOptions} name="target-state" type="text" placeholder="State" />
            </div>
            <div className="input-column">
                <button className="input-button go-button" onClick={handleClick}>
                    Calculate CO<sub>2</sub> <br/>footprint &raquo;
                </button>
            </div>
            { isLoading && <div>Wait we're loading</div>}
        </div>
    );
};

export default GetRoute;
