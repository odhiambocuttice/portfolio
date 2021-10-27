import { Contact } from "./components/contact/Contact";
import { Intro } from "./components/intro/Intro";
import { Portfolio } from "./components/portfolio/Portfolio";
import { ProgressBarList } from "./components/progress/ProgressBarList";
import { Topbar } from "./components/topbar/Topbar";
import "./styles/app.scss";

function App() {
  return (
    <div className="app">
      <Topbar />
      <div className="sections">
        <Intro />
        <Portfolio />
        <ProgressBarList />
        <Contact />
      </div>
    </div>
  );
}

export default App;
