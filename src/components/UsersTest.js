import { useState, useEffect} from "react";
import ShowUser from "./ShowUser";

function UsersTest({users}){
    //const [renderedUsers, setRenderedUsers] = useState([]);


    console.log("The users are: ", users);
    const renderedUsers = users.map((user, index) => {
        return <ShowUser user={user} key={index}/>
    })

    //console.log("Users length: ", users.length);

    // useEffect(() => {
    //     const fetchUsers = async () => {
    //         console.log("fetchUsers() called via useEffect");
    //         const userComponents = await (users.map((user, index) => {
    //             return <ShowUser user={user} key={index} />
    //         }));
    //         setRenderedUsers(userComponents);
    //     };
    //     fetchUsers();
    //     }, [users]);
    
    return (
        <div>
            User names : {renderedUsers}
        </div>
    )
    // const [usersArray, setUsersArray] = useState([]);
    // useEffect(() => {setUsersArray(users)}, []);
    // //console.log("Sent users: ", users);
    // return(
    //     <div>
    //         Number of users: {usersArray.length}
    //     </div>
    // )
}

export default UsersTest;