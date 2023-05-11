const mongoose = require("mongoose");

/*

1. "heading" should be a string and it is required.
2. "body" should be a string and it is required.
3. "creator_id" should be a string and it is required.

*/

const discussionSchema = mongoose.Schema({
  //Write your code here.
});

module.exports = mongoose.model("Discussion", discussionSchema);

