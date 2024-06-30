const express = require('express')
const fs = require('fs')
const path = require('path')

const app = express()

app.use(express.json())
app.use(express.static('assets'))

app.post('/', (req, res) => {
    const email = [req.body, ',']
    fs.appendFile(path.join(__dirname, '/assets/emails.txt'), email.join(), (err) => {
        if (err) {
            console.log(err)
        } else {
            console.log('success')
        }
    })
})

app.get('/', (req, res) => {
    res.sendFile(__dirname + "/assets/emails.txt");
})

app.listen(4040, () => {
    console.log('running!')
})