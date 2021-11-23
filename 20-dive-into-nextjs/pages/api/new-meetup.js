// handle POST request sent to /api/new-meetup

import { MongoClient } from "mongodb";

async function handler(req, res) {
  if (req.method === "POST") {
    const data = req.body;
    console.log(data);

    // const {title, image, address, description} = data;

    const client = await MongoClient.connect(
      "mongodb+srv://xwy5201314:npKZuTN82ivi3THC@cluster4nextjs.2c0ud.mongodb.net/meetups?retryWrites=true&w=majority"
    );
    const db = client.db();

    const meetupsCollection = db.collection("myMeetups");
    const result = await meetupsCollection.insertOne(data);
    console.log(result);

    client.close();

    res.status(201).json({
      message: "Meetup created!",
    });
  }
}

export default handler;
