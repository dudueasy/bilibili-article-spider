// this module returns a mongoose Model for bilibili articles storage
const mongoose =  require('mongoose')
const { Schema } = mongoose

const ArticleSchema = new Schema({
  resourceId: String,
  content: Schema.Types.Mixed,
  articleContentHtml: String,
  createdAt: { type: Number, default: Date.now().valueOf() },
  title: {type: String, required: true},
  tags: [{name: String, value: String, score: Number}],
})

const articleModel = mongoose.model('article',ArticleSchema)
module.exports = articleModel
