import { useEffect, useState } from "react";
import getAllUsers from "./API/airtableread";
import getAllRecordsAsync from "./API/airtableread";

import UsersTest from "./components/UsersTest";
import getCount from "./utils/getCount";
import OnboardForm from "./components/OnboardForm";
import ShowEmployees from "./components/ShowEmployees";

function App(){
    const [usersArray, setUsersArray] = useState([]);
    const [fetchedUsers, setFetchedUsers] = useState(false);

    const handleSubmit = async () => {
        console.log("handle submit called in App");
        const fetchedUsers = await getAllRecordsAsync();
        setUsersArray(fetchedUsers);
        await console.log("Fetched users: ", await getAllRecordsAsync());
        await setFetchedUsers(true);

        //console.log("fetched users: " + fetchedUsers);
    }
    return(
        <div>
            <div>app</div>
            <h4>Users retrieved? {fetchedUsers? "yes" : "no"}</h4>
            <OnboardForm onSubmit={handleSubmit}/>
            {fetchedUsers && < UsersTest users={usersArray}/>}
        </div>
    )
}


export default App;
