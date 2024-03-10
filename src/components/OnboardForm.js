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
    const handleOBFormSubmit = (event) => {
        event.preventDefault();
        console.log("OB Form submitted!");
    }
    return(
        <div className="onboarding-form">
            <form id="ob-form" onSubmit={handleOBFormSubmit}>
                <Supervisor />
                <Positions />
                <SecGroups />
                <DistLists />
                <Equipment />
                <button>Submit Form</button>
            </form>
            {/* <form id="ob-form" onSubmit={handleTestSubmit}>
                <button>Get Users</button>
            </form> */}

        </div>
    )
}

export default OnboardForm;