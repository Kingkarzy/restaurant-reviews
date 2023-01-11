import app from "./server.js"
import mongodb from "mongodb";
import dotenv from "dotenv";
import RestaurantsDAO from "./dao/restaurantsDAO.js";

dotenv.config();

const MongoClient = mongodb.MongoClient;

const port = process.env.PORT || 8000;

MongoClient.connect(
    process.env.RESTREVIEWS_DB_URI, {
        maxPoolSize: 50, // 50 people can access it at a time
        wtimeoutMS: 2500, //after 2500 ms the request will timeout 
        useNewUrlParser: true
    }
)
.catch(err => { //catch any errors
    console.error(err.stack)
    process.exit(1)
})
.then(async client => {   
    await RestaurantsDAO.injectDB(client)
    app.listen(port, () => { //start webserver 
        console.log(`listening on port ${port}`)
    })
})