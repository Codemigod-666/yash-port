import mongoose, { mongo } from "mongoose";

const HomeSchema = new mongoose.Schema({
    heading: 'string', 
    summary: 'string'

}, {timestamps: true})

// console.log("Home Schema: ", HomeSchema);
const Home =  mongoose.models.Home || mongoose.model('Home', HomeSchema);

export default Home;