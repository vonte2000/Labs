//require the express module
import express from "express"

//require the cors module
import cors from "cors"

//creates instance of Express server
const app = express()

// enable Cross Origin Resource Sharing so this API can be used from web-aps on other domains
app.use(cors())

//allow POST & PUT requests to use JSON bodies
app.use(express.json())

const people: any = []

app.get("/", (req, res) => {
    res.send(`These are all the people ${people}`)
})

app.post("/", (req, res) => {
    const { person } = req.body
    people.push(person)
    res
        .status(201)
        .send(`${person} was just added`)
})

//defines PORT
const PORT = 3000
// run the server
app.listen(PORT, () => console.log(`Listening on port ${PORT}.`))
