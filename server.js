import server from "./index.js";
import { dbConnect } from "./config/DbConfig.js";
server.listen(process.env.PORT, async() => {
    await dbConnect();
    console.log('http://localhost:' + process.env.PORT);
})