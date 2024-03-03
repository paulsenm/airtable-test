import { useState } from "react";

function OnboardForm({onSubmit}){
    //const [formSubmitted, setFormSubmitted] = useState(false);

    const handleTestSubmit = (event) => {
        event.preventDefault();
        console.log("Calling handleTestSubmit()");
        //setFormSubmitted(true);
        onSubmit();
    };

    return(
        <div className="onboarding-form">
            <form id="ob-form" onSubmit={handleTestSubmit}>
                <button>Get Users</button>
            </form>
        </div>
    )
}

export default OnboardForm;