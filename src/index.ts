import express, { Express, Response } from 'express'

const app: Express = express()
const port = 3000

app.get('/', (res: Response) => {
    res.send('Hello World2!')
})

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
})
