import NewMeetupForm from "../../components/meetups/NewMeetupForm";

function NewMeetUp(){
  const addMeetupHandler = (meetupData) => {
    console.log(meetupData);
  };

  return <NewMeetupForm onAddMeetup={addMeetupHandler} />;
}

export default NewMeetUp;