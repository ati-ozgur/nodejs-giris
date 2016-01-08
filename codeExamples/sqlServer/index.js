var sql = require( "seriate" );  
var schema = require( "./schema" );

// Change the config settings to match your SQL database
var config = {  
    "server": "10.0.36.38",
    "user": "deneme",
    "password": "123",
    "database": "DENEME"
};

sql.setDefaultConfig( config );

schema.getAllTables()  
    .then( function( results ) {
        console.log( results );
    }, function( err ) {
            console.log( "Something bad happened:", err );
        } );

// Change to match the name of a table
var tableName = "KISI";

schema.getTable( tableName )  
    .then( function( results ) {
        console.log( results );
    }, function( err ) {
            console.log( "Something bad happened:", err );
        } );

schema.getColumns( tableName )  
    .then( function( results ) {
        console.log( results );
    }, function( err ) {
            console.log( "Something bad happened:", err );
        } );

