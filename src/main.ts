import app from "./app";
import {APP_PORT} from './app/app.config';

app.listen(APP_PORT, () => {
  console.log("Server started on port 3000");
})