import mongoose from 'mongoose'

interface IPost {
  identifier : String,
  unlockLocks : [{
    chainid : Number,
    unlocklock: String
  }],
  unlockKey : String
}
interface postModelInterface extends mongoose.Model<PostDoc>{
  build(attr : IPost) : PostDoc
}

interface PostDoc extends mongoose.Document {
  identifier : String,
  unlockLocks : [{
    chainid : Number,
    unlocklock: String
  }],
  unlockKey : String
}


const postSchema = new mongoose.Schema({
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

postSchema.statics.build = (attr : IPost) => {
  return new Post(attr)
}


const Post = mongoose.model<PostDoc, postModelInterface>('Posts', postSchema)

Post.build({
  identifier: "test",
  unlockLocks: [{
    chainid : 4,
    unlocklock : ""
  }],
  unlockKey: "text",

})

export {Post}