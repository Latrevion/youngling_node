import app from "./app";
import {APP_PORT} from './app/app.config';
import{connection} from './app/database/mysql';

app.listen(APP_PORT, () => {
  console.log("Server started on port 3000");
})

/**
 * Test the data service connection
 */
connection.connect((err)=>{
  if(err){
    console.log('Error connecting to MYSQL server',err.message);
    return;
  }
  console.log("Connected to MYSQL server successfully");
})