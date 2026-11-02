const express = require('express')
const app = express();
app.use(express.static('publik'));
app.get('/', (req, res) => {
    res.send('<h1> hahahah </h1>');
})

app.listen(3000, () => {
    console.log('Server is running on http://localhost:3000');
});