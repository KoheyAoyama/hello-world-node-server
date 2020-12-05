const { response } = require('express')
const express = require('express')
const axios = require('axios').default
const app = express()
const port = process.env.PORT || 3030

app.get('/', (req,res) => {
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
        .then((response) => res.json(response.data))
        .catch(console.log);
    }

})

app.listen(port, () => {
    console.log(`Listening`)
})
