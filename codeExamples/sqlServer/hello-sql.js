var sql = require("seriate");

// Change the config settings to match your 
// SQL Server and database
var config = {  
    "server": "10.0.36.38",
    "user": "deneme",
    "password": "123",
    "database": "DENEME"
};

sql.setDefaultConfig( config );

sql.execute( {  
        query: "SELECT * FROM INFORMATION_SCHEMA.TABLES"
    } ).then( function( results ) {
        console.log( results );
    }, function( err ) {
        console.log( "Something bad happened:", err );
    } );