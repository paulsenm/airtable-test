import {useState, useEffect} from "react";

import { getAllPositionsAsync } from "../API/airtableread";
import ShowItem from "./ShowItem";

function Positions(){
    const [positionsArray, setPositionsArray] = useState([]);
    //let renderedPositions = [];
    useEffect(() => {
        const fetchPositions = async () => {
            console.log("called fetchPositions()");
            const renderedPositions = await getAllPositionsAsync();
            setPositionsArray(renderedPositions);

        };
        fetchPositions();
    }, []);

    // const renderedPositions = positionsArray.map((position, index) => {
    //     return <ShowItem item={position} key={index} />
    // })
    
    return(
        <div className="container">
            <div className="row">
                {positionsArray.map((position, index) => (
                    <ShowItem item={position} key={index} />
                ))}
            </div>
        </div>
    )
}

export default Positions;