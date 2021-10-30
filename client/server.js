import express from 'express'
import cookieParser from 'cookie-parser'
import path from 'path'
const PORT = process.env.PORT ?? 4000

const app = express()

app.use(cookieParser())



app.use( express.static(path.join(process.cwd(), 'client', 'public')) )

app.get('/', (req, res) => res.sendFile(path.join(process.cwd(), 'client', 'views', 'index.html')))
app.get('/reklama', (req, res) => res.sendFile(path.join(process.cwd(), 'client', 'views', 'moreinfo.html')))
app.get('/poster', (req,res) => {
     if(req.cookies.userId){
         res.sendFile(path.join(process.cwd(), 'client', 'views', 'poster.html'))
     }else{
         res.redirect('/register')
     }
})
app.get('/register', (req,res) => res.sendFile(path.join(process.cwd(), 'client', 'views', 'register.html')))



app.listen(PORT, () => console.log(`server http://localhost:4000`))