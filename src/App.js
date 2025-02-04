import "bulma/css/bulma.css";
import ProfileCard from "./ProfileCard";
import AlexaImg from "./images/alexa.png";
import CortanaImg from "./images/cortana.png";
import SiriImg from "./images/siri.png";

function App() {
  return (
    <div>
      <section className="hero is-primary">
        <div className="hero-body">
          <p className="title">Pesonal Degital Assistants</p>
        </div>
      </section>

      <div></div>
      <div className="container">
        <section className="section">
          <div className="columns">
            <div className="column is-4">
              <ProfileCard
                title="Alexa"
                handle="@alexa99"
                img={AlexaImg}
                description="Alexa is a digital assistant created by Amazon and is part of the Alexa family of products."
              />
            </div>
            <div className="column is-4">
              <ProfileCard
                title="Cortana"
                handle="@cortana32"
                img={CortanaImg}
                description="Cortana is a digital assistant created by Microsoft and is part of the Cortana family of products."
              />
            </div>
            <div className="column is-4">
              <ProfileCard
                title="Siri"
                handle="@siri01"
                img={SiriImg}
                description="Siri is a digital assistant created by Apple and is part of the Siri family of products."
              />
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}
export default App;
