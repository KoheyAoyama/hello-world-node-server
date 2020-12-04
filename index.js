const { response } = require('express')
const express = require('express')
const axios = require('axios').default
const app = express()
const port = 3030

app.get('/', (req,res) => {
    const data = (data) => {
        console.log(data)
        const address = data.results[0]
        res.send(
            `
                <p>郵便番号: ${address.zipcode} の住所は...</p>
                <h1>${address.address1} ${address.address2} ${address.address3}</h1>
            `
        )
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
