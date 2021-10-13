const mongoose = require('mongoose');
const password = 'qu3swRRB7wGwtDel';
const user = 'zolymix';
const dbname = 'Zolymix';

const uri = `mongodb+srv://${user}:${password}@cluster0.ro5vj.mongodb.net/${dbname}?retryWrites=true&w=majority`;

//conexion con mongodb por una uri
mongoose.connect(uri,{
    useUnifiedTopology:true,
    useNewUrlParser: true,
}).then(() => {
    console.log('Conexion exitosa con MongoDB');
}).catch((err) => {
    console.log(err);
})

module.exports = mongoose;