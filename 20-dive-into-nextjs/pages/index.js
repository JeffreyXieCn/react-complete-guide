import MeetupList from "../components/meetups/MeetupList";
import { MongoClient } from "mongodb";

const DUMMY_MEETUPS = [
  {
    id: "m1",
    title: "A First Meetup",
    image:
      "https://cw-gbl-gws-prod.azureedge.net/-/media/cw/americas/canada/office-pages/montreal-hero-desktop-new.jpg?rev=50d82a2a23914cb583d739bb486238ae",
    address: "Some address 5, 12345 Some City",
    description: "This is a first meetup!",
  },
  {
    id: "m2",
    title: "A Second Meetup",
    image:
      "https://cw-gbl-gws-prod.azureedge.net/-/media/cw/americas/canada/office-pages/montreal-hero-desktop-new.jpg?rev=50d82a2a23914cb583d739bb486238ae",
    address: "Some address 5, 12345 Some City",
    description: "This is a second meetup!",
  },
];

function HomePage(props) {
  return <MeetupList meetups={props.meetups}/>;
}

// export async function getServerSideProps(context) {
//   const req = context.req;
//   const res = context.res;
//
//   // fetch data from an API, the code here runs on the server, never leaks to user's browser
//   return {
//     props: {
//       meetups: DUMMY_MEETUPS,
//     }
//   };
// }

export async function getStaticProps() {
  // fetch data from an API, the code here runs on the server, never leaks to user's browser

  const client = await MongoClient.connect(
    "mongodb+srv://xwy5201314:npKZuTN82ivi3THC@cluster4nextjs.2c0ud.mongodb.net/meetups?retryWrites=true&w=majority"
  );
  const db = client.db();

  const meetupsCollection = db.collection("myMeetups");
  const meetups = await meetupsCollection.find().toArray();

  client.close();

  return {
    props: {
      //meetups: DUMMY_MEETUPS,
      meetups: meetups.map((meetup) => ({
        title: meetup.title,
        address: meetup.address,
        image: meetup.image,
        id: meetup._id.toString(),
      })),
    },
    revalidate: 10, // seconds
  };
}

export default HomePage;
