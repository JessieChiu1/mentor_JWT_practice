const mongoose = require("mongoose");

// create the db
const db = mongoose.connection;

// connect the db
db.on("connected", () => {
    console.log("connected to MongoDB @" + db.host);
});

module.exports = mongoose.connect(process.env.DB_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
});