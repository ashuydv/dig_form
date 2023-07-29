import { MongoClient } from 'mongodb'

const uri = 'mongodb+srv://admin:admin@cluster0.vletv1g.mongodb.net/drypto_app'
const options = {
	useUnifiedTopology: true,
	useNewUrlParser: true,
}

let client
let clientPromise

if (!clientPromise) {
	client = new MongoClient(uri, options)
	clientPromise = client.connect()
}

export default clientPromise
