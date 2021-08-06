import mongoose from 'mongoose'

interface IPost {
  identifier : String,
  unlockLocks : [{
    chainid : Number,
    unlocklock: String
  }],
  unlockKey : String
}



const postSchema = new mongoose.Schema<IPost>({
  identifier : {
    type : String,
    required : true
  },
  unlockLocks : {
    type : [{
      chainid: Number,
      unlocklock: String
    }], 
    requrired : true,
  },
  unlockKey : {
    type : String,
    required : true
  }
})


const Post = mongoose.model<IPost>('Posts', postSchema)

Post.create({
  identifier: "test",
  unlockLocks: [{
    chainid : 4,
    unlocklock : ""
  }],
  unlockKey: "text",

})

export {Post}