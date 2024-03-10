import {useState, useEffect} from "react";

import { getAllPositionsAsync } from "../API/airtableread";
import ShowItem from "./ShowItem";

function Positions(){
    const [positionsArray, setPositionsArray] = useState([]);
    //let renderedPositions = [];
    useEffect(() => {
        const fetchPositions = async () => {
            console.log("called fetchPositions()");
            const fetchedPositions = await getAllPositionsAsync();
            setPositionsArray(fetchedPositions);

        };
        fetchPositions();
    }, []);
    const renderedPositions = positionsArray.map((position, index) => {
        return (<ShowItem item={position} optionName={'positions'} radioOrCheck={'radio'} key={index} />)
    })
    
    return(
        <div>
            <h3>Positions:</h3>
            <div className="container">
                <div className="row">
                    {renderedPositions}
                </div>
            </div>
        </div>
    )
}

export default Positions;