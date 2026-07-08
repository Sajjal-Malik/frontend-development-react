import ContactForm from "./components/ContactForm";
import EventHandling from "./components/EventHandling";
import FocusInput from "./components/FocusInput";

const App = () => {
  return (
    <div>
      <br></br>
      <h2>Contact Form Component</h2>
      <ContactForm />
      <br></br>
      <h2>Focus Input Component</h2>
      <FocusInput />
      <br></br>
      <h2>Event Handling Component</h2>
      <EventHandling />
    </div>
  )
}

export default App;
