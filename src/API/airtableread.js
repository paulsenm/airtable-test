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



export const getAllUsernamessAsync = async () => {
    let namesArray = [];
    const records = await base('Users').select().all();
    const usernames = await records.forEach(function(record){
        console.log("username was: ", record.get('Full Name'));
        namesArray.push(record.get('Full Name'));
    })

    return namesArray;
  };

export const getAllPositionsAsync = async () => {
    let positionsArray = [];
    const positionRecords = await base('Positions').select().all();
    const positionNames = await positionRecords.forEach(function(rec){
        console.log("position name was: ", rec.get('Name'));
        positionsArray.push(rec.get('Name'));
    });
    return positionsArray;
}

export default getAllUsernamessAsync;