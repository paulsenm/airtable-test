import { useState } from "react";

import Supervisor from "./Suporvisor";
import Positions from "./Positions";
import SecGroups from "./SecGroups";
import DistLists from "./DistLists";
import Equipment from "./Equipment";


function OnboardForm({onSubmit}){
    //const [formSubmitted, setFormSubmitted] = useState(false);

    // const handleTestSubmit = (event) => {
    //     event.preventDefault();
    //     console.log("Calling handleTestSubmit()");
    //     //setFormSubmitted(true);
    //     onSubmit();
    // };

    return(
        <div className="onboarding-form">
            {/* <form id="ob-form" onSubmit={handleTestSubmit}>
                <button>Get Users</button>
            </form> */}
            <Supervisor />
            <Positions />
            <SecGroups />
            <DistLists />
            <Equipment />
        </div>
    )
}

export default OnboardForm;