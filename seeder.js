const fs = require("fs");
const Discussion = require('./models/discussion.js');
const discussionList = JSON.parse(fs.readFileSync(`${__dirname}/./data/discussions.json`));

async function seedWithDummyData() {
    try {
        // CLEAR Dawait Subject.deleteMany({});
        await Discussion.deleteMany({});

        const createddiscussion = await Discussion.insertMany(discussionList);

        console.log(`${createddiscussion.length} user created.`);
    } catch (error) {
        console.error(`Error seeding data: ${error}`);
        process.exit(1);
    }
}

module.exports = seedWithDummyData