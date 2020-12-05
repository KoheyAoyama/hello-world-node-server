const { response } = require('express')
const express = require('express')
const axios = require('axios').default
const app = express()
const port = process.env.PORT || 80

app.get('/', (req,res) => {
    console.log(req.query.zipcode)
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

    if (req.query.zipcode === undefined) {
        res.send(
            `
                <h1>Please enter ZIPCODE</h1>
                <p>Add [?zipcode=1234567] to very end of this page url.</p>
            `
        )
    } else {
        axios
        .get('https://zipcloud.ibsnet.co.jp/api/search',{
            params: {
                zipcode: req.query.zipcode
            }
        })
        .then((response) => data(response.data))
        .catch(console.log);
    }

})

app.listen(port, () => {
    console.log(`Listening`)
})
