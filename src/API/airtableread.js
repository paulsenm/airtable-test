const AT_READ_KEY = process.env.REACT_APP_PAT_READ_ALL;
const AT_URL = process.env.REACT_APP_AT_URL;
const AT_BASE = process.env.REACT_APP_AT_BASE;

const AT_TBL_USERS = process.env.REACT_APP_AT_TBL_USERS;

//Airtable setup:
var AirtableRead = require('airtable');
AirtableRead.configure({
    endpointUrl: 'https://api.airtable.com',
    apiKey: AT_READ_KEY
});

var base = new AirtableRead.base(AT_BASE);

// const getAllUsers = async () => {
//     //var users = [];

//     const users = await base('Users').select({
//         // maxRecords: 3,
//         // view: "Grid view"
//     }).eachPage(
//         function page(records, fetchNextPage){
//             records.forEach(
//                 function(record){
//                     var userToAdd = {};
//                     userToAdd.userName = record.get('Username');
//                     userToAdd.fullName = record.get('Full Name');
//                     userToAdd.email = record.get('Email');
//                     if(userToAdd.fullName != null){
//                         //console.log("pushing: ", userToAdd.fullName);
//                         users.push(userToAdd);
//                         console.log("added user: " + userToAdd.fullName);
//                     }
//                     //console.log("Added: ", userToAdd.fullName);
//                 }
//             );
//             fetchNextPage();
//     },
//     function done(err){
//         if(err){
//             console.log(err);
//             return;
//         }
//     }
//     );
//     return users;
// }

// base('Users').select({
//     // Selecting the first 3 records in Grid view:
//     maxRecords: 3,
//     view: "Grid view"
// }).eachPage(function page(records, fetchNextPage) {
//     // This function (`page`) will get called for each page of records.

//     records.forEach(function(record) {
//         console.log('Retrieved', record.get('Username'));
//     });

//     // To fetch the next page of records, call `fetchNextPage`.
//     // If there are more records, `page` will get called again.
//     // If there are no more records, `done` will get called.
//     fetchNextPage();

// }, function done(err) {
//     if (err) { console.error(err); return; }
// });

const getAllUsersTest = async () => {
    const testArray = await ["one", "two", "three"] ;
    return testArray;
}

const getAllUsers = async () => {
    var initializedArray = ["fakeName1", "fakeName2"];
    initializedArray = await base('Users').select({
        // Selecting the first 3 records in Grid view:
        maxRecords: 3,
        view: "Grid view"
    }).eachPage(function page(records, fetchNextPage) {
        // This function (`page`) will get called for each page of records.
    
        records.forEach(function(record) {
            console.log('Retrieved', record.get('Username'));
            initializedArray.push(record.get('Username'));
        });
    
        // To fetch the next page of records, call `fetchNextPage`.
        // If there are more records, `page` will get called again.
        // If there are no more records, `done` will get called.
        fetchNextPage();
    
    }, function done(err) {
        if (err) { console.error(err); return; }
    });
    return initializedArray;
}

const getAllRecordsAsync = async () => {
    //let usersTable = base.getTable('Users');
    let namesArray = [];
    const records = await base('Users').select().all();
    const usernames = await records.forEach(function(record){
        console.log("username was: ", record.get('Username'));
        namesArray.push(record.get('Username'));
    })
    await console.log("names are: ", namesArray);
    // let results = await usersTable.selectRecordsAsync({
    //     fields: ["Username"],
    //     sort: [
    //         {field: "Username"}
    //     ]
    // });
    
    // return results;
    return namesArray;
  };

export default getAllRecordsAsync;