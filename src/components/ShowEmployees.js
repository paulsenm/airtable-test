function ShowEmployees({users}){

    const fullNames = users.map(user => user.fullName).join(", ");
    return(
        <div>
            The users are: {fullNames}

        </div>
    )
}

export default ShowEmployees;