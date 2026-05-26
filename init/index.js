const mongoose = require("mongoose"); 
const initData = require("./data.js"); 
const Listing = require("../models/listing.js"); 


//const MONGO_URL = "mongodb://127.0.0.1:27017/wanderlust"; 
const ATLASDB_URL = "mongodb+srv://kaushalchhimpa_db_user:43TzfKNPnGbJbp6r@cluster0.lvhdqe1.mongodb.net/?appName=Cluster0 X"; 
  


main()
.then(() => {
    console.log("connected to DB"); 
})
.catch((err) => {
    console.log(err); 
});


async function main() {
  await mongoose.connect(ATLASDB_URL); 
}

const initDB = async () => {
    await Listing.deleteMany({}); 
    initData.data = initData.data.map((obj) => ({ ...obj, owner: "6a089f5566cc425ae16aa735"})); 
    await Listing.insertMany(initData.data);
    console.log("data was initialized"); 
}; 

initDB(); 



