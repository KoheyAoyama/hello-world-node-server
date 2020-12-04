const express = require('express')
const app = express()
const port = 3030

app.get('/api/v1/users', (req,res) => {
    res.send(
        {
            'data': [
                {
                    id: 0001,
                    user: 'kohey',
                    gender: 'male',
                    age: 30,
                    country: 'Japan'
                },
                {
                    id: 0002,
                    user: 'kohey',
                    gender: 'male',
                    age: 30,
                    country: 'Japan'
                },
                {
                    id: 0003,
                    user: 'kohey',
                    gender: 'male',
                    age: 30,
                    country: 'Japan'
                },
                {
                    id: 0004,
                    user: 'kohey',
                    gender: 'male',
                    age: 30,
                    country: 'Japan'
                }
            ]
        }
    )
})

app.listen(port, () => {
    console.log(`Listening at http://localhost:${port}`)
})