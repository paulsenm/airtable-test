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

export const getAllUsers = async () => {
    const requestURL = AT_URL + '/' + AT_BASE + '/' + AT_TBL_USERS;

    base('Users').select({
        // maxRecords: 3,
        // view: "Grid view"
    }).eachPage(
        function page(records, fetchNextPage){
            records.forEach(
                function(record){
                    console.log("Retrieved: ", record.get('Username'));
                }
            );
            fetchNextPage();
    },
    function done(err){
        if(err){
            console.log(err);
            return;
        }
    }
    );
}

//export default requests;