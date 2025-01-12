const express = require("express")
const app = express()
const mongoose = require("mongoose")
const bodyParser = require("body-parser")
const dotenV = require("dotenv")
const cors = require("cors")
app.use(bodyParser.json())
app.use(cors())
dotenV.config()

let MemberSchema = new mongoose.Schema({
    image: String,
    name: String,
    profession: String

})
let MemberModel = mongoose.model("members", MemberSchema)
app.get("/members", async (req, res) => {
    let members = await MemberModel.find()
    res.send(members)
})
app.get("/members/:id", async (req, res) => {
    let { id } = req.params()
    let members = await MemberModel.findById(id)
    res.send(members)
})
app.delete("/members/:id", async (req, res) => {
    let { id } = req.params
    await MemberModel.findByIdAndDelete(id)
    res.send({
        message: "deleted"
    })
})
app.post("/members", async (req, res) => {
    let newMember =MemberModel( req.body)
   await newMember.save()
    res.send({
        message: "posted data",
        data: newMember
    })
})

mongoose.connect(process.env.ConnectionString)
    .then(() => {
        console.log("connected");
    })
app.listen(3000, () => {
    console.log("3000 portunda dinlenilir");
})