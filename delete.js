const dbConnection = require('./mongodb')

const deleteData = async () =>{
    let data = await dbConnection();
    let result = await data.deleteOne({name: 'note 8'})

}

deleteData();