const express = require('express')
const app = express();
const path = require('path');
app.set('port', 4000);
app.set('view engine', 'ejs')
app.set('views', path.join(__dirname, "views"));
//rutas
app.use(require("./routes/"));
//objetos estaticos
app.use(express.static(path.join(__dirname, "public")));
//servidor
app.listen(app.get('port'), () => {
    console.log('server on port', app.get('port'))
});