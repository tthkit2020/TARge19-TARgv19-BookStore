const express = require('express');
const path = require('path');
const rootDirectory = require('./utilities/path');
const adminRouter = require('./routes/admin');
const shopRoutes = require('./routes/shop');
const app = express();
app.use(express.static('public'));

app.use('/admin', adminRouter); ///admin - is a filter
app.use(shopRoutes);



app.use((req, res)=>{
    res.status(404).sendFile(path.join(rootDirectory, 'views', '404.html'));
});

app.listen(5000, ()=>{
    console.log('Server is running on Port 5000');
});