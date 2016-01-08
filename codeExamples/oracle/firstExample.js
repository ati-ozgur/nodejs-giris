var oracledb = require('oracledb');

var connectionObject =   {
    user          : "hr",
    password      : "hr",
    connectString : "localhost/XE"
  };


oracledb.getConnection(connectionObject,
  function(err, connection)
  {
    if (err) { console.error(err.message); return; }

    connection.execute("SELECT department_id, department_name FROM departments",
      function(err, result)
      {
        if (err) { console.error(err.message); return; }
        console.log(result.rows);
      });
  });
