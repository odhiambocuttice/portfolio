import { Contact } from "./componets/contact/Contact";
import { Intro } from "./componets/intro/Intro";
import { Portfolio } from "./componets/portfolio/Portfolio";
import { Testimonials } from "./componets/testimonials/Testimonials";
import { Topbar } from "./componets/topbar/Topbar";
import "./styles/app.scss";

function App() {
  return (
    <div className="app">
      <Topbar />
      <div className="sections">
        <Intro />
        <Portfolio />
        <Testimonials />
        <Contact />
      </div>
    </div>
  );
}

export default App;
