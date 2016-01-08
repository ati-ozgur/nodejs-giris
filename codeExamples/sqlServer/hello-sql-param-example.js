var sql = require("seriate");

// Change the config settings to match your 
// SQL Server and database
var config = {  
    "server": "localhost",
    "user": "deneme",
    "password": "123",
    "database": "DENEME"
};

sql.setDefaultConfig( config );


var myTable = "KISI";  
sql.execute( {  
        query: "SELECT * FROM INFORMATION_SCHEMA.TABLES WHERE TABLE_NAME = @tableName",
        params: {
            tableName: {
                type: sql.NVARCHAR,
                val: myTable,
            }
        }
    } ).then( function( results ) {
        console.log( results );
    }, function( err ) {
        console.log( "Something bad happened:", err );
    } );

