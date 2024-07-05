// // import mongoose from "mongoose";
// // import {DB_NAME} from "./constants.js"
import connectDB from "./db/index.js";

import { app } from "./app.js";


import dotenv from "dotenv"

dotenv.config({
    path: './env'
})

connectDB()
.then(()=>{
    app.listen(process.env.PORT || 8000, ()=>{
        console.log(`Server is running at port : ${process.env.PORT} 2nd try`)
    })
})
.catch((err)=>{
    console.log("Mongo db connection failed (2nd catch) !!!", err)
})

 







// // import express from "express"
// // const app = express()


// // (async()=>{
// //     try{
// //         await mongoose.connect(`${process.env.MONGODB_URI}/${DB_NAME}`)
// //         app.on("error",(error)=>{
// //             console.log("ERROR: ", error)
// //             throw error
// //         })

// //         app.listen(process.env.PORT, ()=>{
// //             console.log(`App is listening on port ${process.env.PORT}`)
// //         })
// //     }

// //     catch(error){
// //         console.error("ERROR: ", error);
// //         throw error
// //     }
// // })()