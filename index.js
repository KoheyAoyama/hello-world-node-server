const { response } = require('express')
const express = require('express')
const axios = require('axios').default
const app = express()
const port = 3030

app.get('/', (req,res) => {
    const data = (data) => {
        res.json(data)
    }

    axios
        .get('https://zipcloud.ibsnet.co.jp/api/search',{
            params: {
                zipcode: req.query.zipcode
            }
        })
        .then((response) => data(response.data))
        .catch(console.log);
})

app.listen(port, () => {
    console.log(`Listening at http://localhost:${port}`)
})
