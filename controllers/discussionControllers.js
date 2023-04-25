const Discussion   = require("../models/Discussion.js");


const getalldiscussion =async (req, res) => {

    const all_discussion = await Discussion.find({});
    res.status(200).json({
        "status": "success",
        "data": all_discussion
    })
   
}

module.exports = { getalldiscussion };