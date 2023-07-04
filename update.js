const dbConnection = require('./mongodb')

const updateData = async () => {
    let data = await dbConnection();
    let result = data.updateOne(
        {name: 'note 5'},{ $set: {name: 'note 6'} }
    )
    console.warn(data)
}

updateData();