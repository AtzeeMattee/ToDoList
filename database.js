import mongoose from 'mongoose';
import { MongoMemoryServer } from 'mongodb-memory-server';
const dbName = 'todolist'
const user='atzeematte'

const password='piccionemorto'


const connectionUrl = `mongodb+srv://
${user}:${password}
@clustertodolist.rokgp.mongodb.net/${dbName}?retryWrites=true&w=majority&appName=ClusterToDoList'`

const connect = async () => {
  try {
    if (process.env.NODE_ENV === 'test') {
      const mongoServer = await MongoMemoryServer.create();
      await mongoose.connect(mongoServer.getUri(), {dbName: dbName});
      console.log('connected to in memory db');
    }
    else {
      await mongoose.connect(connectionUrl);
      console.log('- Connected to MongoDB server');
    }
  } catch (error) {
    console.log('- Connection error', error);
    throw(error);
  }
}
export default connect;