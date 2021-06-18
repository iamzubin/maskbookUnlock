import mongoose from 'mongoose'

interface IPost {
  identifier : String,
  unlockLocks : [String],
  unlockKey : String
}
interface postModelInterface extends mongoose.Model<PostDoc>{
  build(attr : IPost) : PostDoc
}

interface PostDoc extends mongoose.Document {
  identifier : String,
  unlockLocks : [String],
  unlockKey : String
}

const postSchema = new mongoose.Schema({
  identifier : {
    type : String,
    required : true
  },
  unlockLocks : {
    type : [String], 
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
  identifier: "text",
  unlockLocks: ["test"],
  unlockKey: "text",

})

export {Post}