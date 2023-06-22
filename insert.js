const dbConnection= require('./mongodb')

const insert_data = async () => {
    const db=await dbConnection();
    const result = db.insertOne(
        {
        name: 'note 5',
        brand: 'samsung',
        price: 100,
        category: 'mobile'
    }
    )
}

insert_data();