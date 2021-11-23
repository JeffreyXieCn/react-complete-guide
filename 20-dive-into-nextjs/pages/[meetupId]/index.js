import MeetUpDetails from "../../components/meetups/MeetupDetails";
import { MongoClient, ObjectId } from "mongodb";
import Head from "next/head";

function MeetUpDetail(props) {
  console.log("props:");
  console.log(props);

  const { image, title, address, description } = props.meetupData;

  return (
    <>
      <Head>
        <title>{title}</title>
        <meta name="description" content={description} />
      </Head>
      <MeetUpDetails
        image={image}
        title={title}
        address={address}
        description={description}
      />
    </>
  );
}

export async function getStaticPaths() {
  const client = await MongoClient.connect(
    "mongodb+srv://xwy5201314:npKZuTN82ivi3THC@cluster4nextjs.2c0ud.mongodb.net/meetups?retryWrites=true&w=majority"
  );
  const db = client.db();

  const meetupsCollection = db.collection("myMeetups");
  const meetups = await meetupsCollection.find({}, { _id: 1 }).toArray();

  client.close();

  return {
    paths: meetups.map((meetup) => ({
      params: {
        meetupId: meetup._id.toString(),
      },
    })),
    // [
    // {
    //   params: {
    //     meetupId: "m1",
    //   },
    // },
    // {
    //   params: {
    //     meetupId: "m2",
    //   },
    // },
    // ],
    fallback: false,
  };
}

export async function getStaticProps(context) {
  // fetch data for a single meetup

  const meetupId = context.params.meetupId;

  console.log(meetupId);

  const client = await MongoClient.connect(
    "mongodb+srv://xwy5201314:npKZuTN82ivi3THC@cluster4nextjs.2c0ud.mongodb.net/meetups?retryWrites=true&w=majority"
  );
  const db = client.db();

  const meetupsCollection = db.collection("myMeetups");
  const selectedMeetup = await meetupsCollection.findOne({
    _id: ObjectId(meetupId),
  });
  console.log("selectedMeetup", selectedMeetup);

  let meetupData = { ...selectedMeetup, id: selectedMeetup._id.toString() };
  delete meetupData._id;

  client.close();

  return {
    props: {
      meetupData: meetupData,
    },
  };
}

export default MeetUpDetail;
