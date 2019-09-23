const express = require('express')
const app = express()
const port = 8081
app.use('/', express.static('C:\\Dinesh\\angular-apps\\angularEight\\dist\\angularEight'))
// app.use('/', express.static('C:\\Dinesh\\react-app\\dist'))
// app.get('/', (req, res) => res.send('Hello World!'))

// app.get('*', (req,res) =>{
//     res.sendFile('C:\\Dinesh\\react-app\\dist\\index.html');
// });

app.listen(port, () => console.log(`Example app listening on port ${port}!`))