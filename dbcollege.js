const mysql = require("mysql2");
const connection = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "info123",
    database: "college2"
});

// // connection 
// connection.connect(function (err) {
//     if (err) {
//         console.error("Connection failed:", err.message);
//         return;
//     }

//     console.log("Connected...");

//     connection.end();
// });


// // create database 
// connection.connect(function (err) {
//     if (err) throw err;

//     connection.query("CREATE DATABASE college2", function (err, result) {
//         if (err) throw err;

//         console.log("Database created successfully!");
//         console.log(result);

//         connection.end();
//     });
// });

// //create tables 
// connection.connect(function (err) {
//     if (err) throw err;
//     connection.query(
//         "CREATE TABLE faculty (FacultyName VARCHAR(25), Subject VARCHAR(25), Experience VARCHAR(25))",
//         function (err, result, fields) {
//             if (err) throw err;
//             console.log(result);
//         }
//     );
//     connection.query(
//     "CREATE TABLE library_details (LID INT, LibraryName VARCHAR(25))",
//     function (err, result, fields) {
//         if (err) throw err;
//         console.log(result);
//     }
// );
//     connection.query(
//         "CREATE TABLE marks (StudentName VARCHAR(25), English INT, Maths INT, Science INT)",
//         function (err, result, fields) {
//             if (err) throw err;
//             console.log(result);

//         }
//     );
// });
// module.exports = connection;

// connection.connect(function (err) {
//     if (err) throw err;
//     connection.query(
//         "INSERT INTO faculty VALUES ('prof.samir', 'maths', '2 year'), ('prof.amin', 'science', '4 year'), ('prof.arvind', 'maths', '5 year'), ('prof.paratik', 'science', '6 year')",
//         function (err, result, fields) {
//             if (err) throw err;
//             console.log(result);
//         });
// connection.query(
//     "INSERT INTO library_details VALUES (845, 'fifth library'), (415, 'sixth library')",
//     function (err, result, fields) {
//         if (err) throw err;
//         console.log(result);
//     });
//     connection.query(
//         "INSERT INTO marks VALUES ('shivani', 47, 42, 75), ('amir', 78, 74, 56), ('arvind', 84, 47, 58), ('parth', 48, 56, 87)",
//         function (err, result, fields) {
//             if (err) throw err;
//             console.log(result);
//             connection.end();
//         }
//     );
// });
// module.exports = connection;

//values to see in tables
// connection.connect(function (err) {
//     if (err) throw err;

//     connection.query("SELECT * FROM faculty", function (err, result, fields) {
//         if (err) throw err;
//         console.log(result);
//     });
//     connection.query("SELECT * FROM library_details", function (err, result, fields) {
//         if (err) throw err;
//         console.log(result);
//     });

//     connection.query("SELECT * FROM marks", function (err, result, fields) {
//         if (err) throw err;
//         console.log(result);

//         connection.end();
//     });
// });


// //operations 
// connection.connect(function (err) {
//     if (err) throw err;
//     connection.query(
//         "DELETE FROM faculty WHERE FacultyName = 'prof.paratik'",
//         function (err, result, fields) {
//             if (err) throw err;
//             console.log(result);
//         } );
//     connection.query(
//         "DELETE FROM marks WHERE StudentName = 'shivani'",
//         function (err, result, fields) {
//             if (err) throw err;
//             console.log(result);
//         });
//     connection.query(
//         "DELETE FROM library_details WHERE LID = 415",
//         function (err, result, fields) {
//             if (err) throw err;
//             console.log(result);
//             connection.end();
//         } );
// });
// module.exports = connection;



// //check if operations are applied 
// connection.connect(function (err) {
//     if (err) throw err;

//     connection.query("SELECT * FROM faculty", function (err, result, fields) {
//         if (err) throw err;
//         console.log(result);
//     });

//     connection.query("SELECT * FROM library_details", function (err, result, fields) {
//         if (err) throw err;
//         console.log(result);
//     });

//     connection.query("SELECT * FROM marks", function (err, result, fields) {
//         if (err) throw err;
//         console.log(result);

//         connection.end();
//     });
// });

// Retrieve datas 
connection.connect(function (err) {
    if (err) throw err;

    connection.query(
        "SELECT StudentName, English FROM marks",
        function (err, result, fields) {
            if (err) throw err;
            console.log(result);
        }
    );

    connection.query(
        "SELECT FacultyName, Experience FROM faculty",
        function (err, result, fields) {
            if (err) throw err;
            console.log(result);
        }
    );

    connection.query(
        "SELECT LibraryName FROM library_details",
        function (err, result, fields) {
            if (err) throw err;
            console.log(result);

            connection.end();
        }
    );
});

module.exports = connection;