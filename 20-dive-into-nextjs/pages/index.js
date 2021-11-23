import MeetupList from "../components/meetups/MeetupList";
import Layout from "../components/layout/Layout";

const DUMMY_MEETUPS = [
  {
    id: 'm1',
    title: 'A First Meetup',
    image: 'https://cw-gbl-gws-prod.azureedge.net/-/media/cw/americas/canada/office-pages/montreal-hero-desktop-new.jpg?rev=50d82a2a23914cb583d739bb486238ae',
    address: 'Some address 5, 12345 Some City',
    description: 'This is a first meetup!'
  },
  {
    id: 'm2',
    title: 'A Second Meetup',
    image: 'https://cw-gbl-gws-prod.azureedge.net/-/media/cw/americas/canada/office-pages/montreal-hero-desktop-new.jpg?rev=50d82a2a23914cb583d739bb486238ae',
    address: 'Some address 5, 12345 Some City',
    description: 'This is a second meetup!'
  },
];
function HomePage() {
  return <MeetupList meetups={DUMMY_MEETUPS} />
}

export default HomePage;