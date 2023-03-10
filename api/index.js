import express from 'express'
import mongoose from  'mongoose'
import router from './router.js';
import cors from 'cors';
const PORT = process.env.PORT || 5000
const app = express()
app.use(express.json())

app.use(cors());
app.use(express.static('public'));
app.use('/api', router)
const DB_URL =
  'mongodb+srv://admin:admin@scoreboard.1vgh3xq.mongodb.net/scoreboard?retryWrites=true&w=majority'

async function startApp() {
  try {
    await mongoose.set('strictQuery', false)
    await mongoose.connect(DB_URL).then(() => {
      console.log('bd - ok')
    })
    app.listen(PORT, () => console.log('Server started on PORT: ' + PORT))
  } catch(e) {
    console.log('Err', + e)
  }
}
startApp()
