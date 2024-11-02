import "./contact.css";
import { useForm, ValidationError } from "@formspree/react";
import Lottie from "lottie-react";
import doneAnimation from './doneTaha.json'
import contactBREEDD from './breed.json'
import { useEffect, useState } from "react";
const Contact = () => {
  const [state, handleSubmit] = useForm("mgegrzpv");
  useEffect(() => {
    window.addEventListener("scroll", () => {
      if (window.scrollY > 850) {
        setContacktScroll(true);
      } else {
        setContacktScroll(false);
      }
    });
  }, []);
  const [contacktScroll, setContacktScroll] = useState(false);
  return (
    <section id="contacty" style={{ opacity: contacktScroll ? 1 : 0 }} className="Contect-us">
      <h1 className="titleC">
        <span className="icon-envelope"></span>Contact Us
      </h1>
      <p className="suppTitle">
        Contact Us For More Informatino And Get Notified When I Publish
        Something New
      </p>

      <div style={{justifyContent:"space-between"}} className="flex">
        <form  onSubmit={handleSubmit} className="mainform ">
          <div className="flex">
            <label htmlFor="email">Email Address:</label>
            <input required type="email" name="email" id="email" />
            <ValidationError
              prefix="Email"
              field="email"
              errors={state.errors}
            />
          </div>

          <div className="flex" style={{ marginTop: "24px" }}>
            <label htmlFor="Message">Your Message:</label>
            <textarea required name="message" id="Message"></textarea>
            <ValidationError
              prefix="Message"
              field="message"
              errors={state.errors}
            />
          </div>

          <button type="submit" disabled={state.submitting} className="submit">
            {state.submitting ? "Submitting ..." : "Submit"}
          </button>
        
          {state.succeeded && (
            <h1 className="flex" style={{marginTop:"30px" }}>
                <Lottie
                
                style={{ height: 80 }}
                animationData={doneAnimation}
              />Your message has been sent successfully 👌 </h1>
          )}
        </form>
        <div className="animation "> <Lottie
                
                style={{ height: 450 }}
                animationData={contactBREEDD}
              /></div>
      </div>
    </section>
  );
};

export default Contact;
