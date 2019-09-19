const express = require("express");

const app = express();
const PORT = process.env.PORT || 3035;

app.use(express.urlencoded({extended:true}));
app.use(express.json());

require("./routes/apiRoutes");
require("./routes/htmlRoutes");

app.listen(PORT, function(){
    console.log(`App is listening to PORT: ${PORT}`);
});