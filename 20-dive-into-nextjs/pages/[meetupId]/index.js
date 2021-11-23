import MeetUpDetails from "../../components/meetups/MeetupDetails";

function MeetUpDetail() {
  return (
    <MeetUpDetails
      image="https://cw-gbl-gws-prod.azureedge.net/-/media/cw/americas/canada/office-pages/montreal-hero-desktop-new.jpg?rev=50d82a2a23914cb583d739bb486238ae"
      title="A First Meetup"
      address="Some Street 5, Some City"
      description="The meetup description"
    />
  );
}

export async function getStaticPaths() {
  return {
    paths: [
      {
        params: {
          meetupId: "m1",
        },
      },
      {
        params: {
          meetupId: "m2",
        },
      },
    ],
    fallback: false,
  };
}

export async function getStaticProps(context) {
  // fetch data for a single meetup

  const meetupId = context.params.meetupId;

  console.log(meetupId);

  return {
    props: {
      meetupData: {
        image:
          "https://cw-gbl-gws-prod.azureedge.net/-/media/cw/americas/canada/office-pages/montreal-hero-desktop-new.jpg?rev=50d82a2a23914cb583d739bb486238ae",
        id: meetupId,
        title: "Fist Meetup",
        address: "Some Street 5, Some City",
        description: "This is a first meetup",
      },
    },
  };
}

export default MeetUpDetail;
