const express = require('express');

//set up server

const app = express ();
const PORT = process.env.PORT || 3001;

//setting up express app to handle data parsing;
app.use(express.urlencoded({ extended: true}));
app.use(express.json());
app.use(express.static("public"));

require("./routes/htmlRoutes")(app);
require("./routes/apiRoutes")(app);

//start the server
app.listen(PORT, () => {
    console.log("Application is now listening on PORT" + " " + PORT)
});

