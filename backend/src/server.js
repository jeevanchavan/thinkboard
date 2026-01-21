import express from 'express'
import notesRoutes from './routes/notesRoutes.js'

const app = express()

app.use("/api/notes",notesRoutes);



app.listen(3000, ()=>{
    console.log("server is listening at port 3000");
    
})