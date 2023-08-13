const mongodb = require('mongodb')
const mongoClient = mongodb.MongoClient
const connectionUrl = 'mongodb://127.0.0.1:27017'
const dbname = 'backend-db'
mongoClient.connect(connectionUrl, (error, res1) => {
    if (error) {
        return console.log('error has occured')

    }
    console.log('all perf')
    const db = res1.db(dbname)


// ///////////////////////////////////////////////////////////

    db.collection('users').insertOne({
        name: 'fatma',
        age: 26
    }, (error, data) => {
        if (error) {
            console.log('unble to insert data')
        }
        console.log(data.insertedId)
    })


    

    db.collection('users').insertOne({
        name: 'hoda',
        age: 23
    }, (error, data) => {
        if (error) {
            console.log('unble to insert data')
        }
        console.log(data.insertedId)
    })



    // ///////////////////////////////////////////////////////

    db.collection('users').insertMany([{
        name: 'aya',
        age: 26
    },
    {
        name: 'malak',
        age: 15
    },
    {
        name: 'ahmed',
        age: 15
    },
    {
        name: 'mariam',
        age: 5
    },
    {
        name: 'sara',
        age: 30
    },
    {
        name: 'mona',
        age: 25
    },
    {
        name: 'fatma',
        age: 25
    },
    {
        name: 'mahmoud',
        age: 25
    },
    {
        name: 'ali',
        age: 25
    },
    {
        name: 'hoda',
        age: 25
    }
    ], (error, data) => {
        if (error) {
            console.log('unble to insert data')
        }


        // /////////////////////////////////////////

        console.log(data.insertedCount)

        db.collection('users').find({ age: 25 }).toArray((error, users) => {
            if (error) {
                console.log('error')
            }
            console.log(users)
        })

        //////////////////////////////////////////////
        db.collection('users').find({ age: 25 }).count((error, user) => {
            if (error) {
                console.log('error')
            }
            console.log(user)
        })

        // //////////////////////////////////////////
        db.collection('users').find({ age: 25 }).limit(3).toArray((error, users) => {
            if (error) {
                console.log('error')
            }
            console.log(users)
        })


        // ////////////////////////////////////////////////////////////////////////////////



        db.collection('users').updateOne({ _id: mongodb.ObjectId("64d893164a3d0e333b967ae4") }, {
            $set: { name: "arwa" },
        }).then((data1) => { console.log(data1.modifiedCount) })
            .catch((error) => { console.log(error) })

    })



    db.collection('users').updateOne({ _id: mongodb.ObjectId("64d893164a3d0e333b967ae5") }, {
        $set: { name: "ayaat" },
    }).then((data1) => { console.log(data1.modifiedCount) })
        .catch((error) => { console.log(error) })


    db.collection('users').updateOne({ _id: mongodb.ObjectId("64d893164a3d0e333b967ae6") }, {
        $set: { name: "hoda" },
    }).then((data1) => { console.log(data1.modifiedCount) })
        .catch((error) => { console.log(error) })


    db.collection('users').updateOne({ _id: mongodb.ObjectId("64d893164a3d0e333b967ae7") }, {
        $set: { name: "fatma" },
    }).then((data1) => { console.log(data1.modifiedCount) })
        .catch((error) => { console.log(error) })




    // ///////////////////////////////////////////////////////////////////////////


    db.collection('users').updateOne({ _id: mongodb.ObjectId("64d893164a3d0e333b967ae4") }, {
        $inc: { age: 20 }
    }).then((data2) => { console.log(data2.modifiedCount) })
        .catch((error) => { console.log(error) })


    // ///////////////////////////////////////////////////////////////////////////



    db.collection('users').updateMany({}, {
        $inc: { age: 10 }
    })
        .then((data2) => { console.log(data2.modifiedCount) })
        .catch((error) => { console.log(error) })


    // ///////////////////////////////////////////////////////////////////////////


    db.collection('users').deleteOne({ _id: mongodb.ObjectId("64d893164a3d0e333b967ae4") })
        .then((data2) => { console.log(data2.deletedCount) })
        .catch((error) => { console.log(error) })




    // //////////////////////////////////////////////////////////////////////////


    db.collection('users').deleteMany({ age: 35 })
        .then((data2) => { console.log(data2.deletedCount) })
        .catch((error) => { console.log(error) })



})