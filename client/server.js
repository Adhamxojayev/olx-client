import express from 'express'
import path from 'path'
const PORT = process.env.PORT ?? 4000

const app = express()

app.use( express.static(path.join(process.cwd(), 'client', 'public')) )

app.get('/', (req, res) => res.sendFile(path.join(process.cwd(), 'client', 'views', 'index.html')))
app.get('/reklama', (req, res) => res.sendFile(path.join(process.cwd(), 'client', 'views', 'moreinfo.html')))
app.get('/poster', (req,res) => res.sendFile(path.join(process.cwd(), 'client', 'views', 'poster.html')))


app.listen(PORT, () => console.log(`server http://localhost:4000`))