import Storyteller from "./components/Storyteller";
import "./styles.css";

export default function App() {
  return (
    <div className="App">
      <header>
        <a href="https://github.com/ndcamachoo/Portfolio-Frontend/tree/main/react-storyteller"><img
          className="logo"
          alt="logo"
          src="https://i.ibb.co/1vZJxZ1/Storyteller-fronty-logos-transparent.png"
        /></a>
      </header>
      <Storyteller />
      <footer>
        <a href="https://github.com/ndcamachoo">
          Nelson David Camacho @ndcamachoo - 2021
        </a>
      </footer>
    </div>
  );
}
