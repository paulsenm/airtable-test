import { useState, useEffect } from "react";

import { getAllSecGroups } from "../API/airtableread";
import ShowItem from "./ShowItem";


function SecGroups() {
    const [secGroups, setSecGroups] = useState([]);

    useEffect(() => {
        const fetchGroups = async () => {
            const fetchedSecGroups = await getAllSecGroups();
            setSecGroups(fetchedSecGroups);
        }
        fetchGroups();
    }, []);

    const renderedSecGroups = secGroups.map((group, index) => {
        return (
        <ShowItem item={group} optionName={'security-groups'} radioOrCheck={'checkbox'} key={index} />
        )
    })
    return (
        <div>
            Security Groups:
            <div className="container">
                <div className="row">
                    {renderedSecGroups}
                </div>
            </div>
        </div>
    )
}

export default SecGroups;