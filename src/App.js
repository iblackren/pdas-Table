import ProfileCard from "./ProfileCard";
import AlexaImg from "./images/alexa.png";
import CortanaImg from "./images/cortana.png";
import SiriImg from "./images/siri.png";

function App() {
  return (
    <div>
      <div>Pesonal Degital Assistants</div>
      <ProfileCard title="Alexa" handle="@alexa99" img={AlexaImg} />
      <ProfileCard title="Cortana" handle="@cortana32" img={CortanaImg} />
      <ProfileCard title="Siri" handle="@siri01" img={SiriImg} />
    </div>
  );
}
export default App;
