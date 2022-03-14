const {MongoClient} = require("mongodb");
module.exports = 
{
    db:null,
    async connect()
    { try{
        const connection =  await MongoClient.connect("mongodb+srv://bala1681:Bala123@cluster0.pvwzm.mongodb.net/Agilisiumproject?retryWrites=true&w=majority");
        this.db = connection.db("Agilisiumproject")
    }catch(err)
    {
        console.log(err)
    }

    }
} 