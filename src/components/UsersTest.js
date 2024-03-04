import { useState, useEffect} from "react";
import ShowUser from "./ShowUser";

function UsersTest({users}){
    //const [renderedUsers, setRenderedUsers] = useState([]);


    console.log("The users are: ", users);
    const renderedUsers = users.map((user, index) => {
        return <ShowUser user={user} key={index}/>
    });

    
    return (
        <div>
            User names : {renderedUsers}
        </div>
    )
}

export default UsersTest;