import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css"; // Import Bootstrap CSS
import HeroSection from "./components/HeroSection";
import CoreConcepts from "./components/CoreConcepts";
import LearnMore from "./components/LearnMore";

function App() {
  return (
    <>
      <main className="min-vh-100">
        <HeroSection />
        <div>
          <CoreConcepts />
        </div>
        {/* <div>
          <LearnMore />
        </div> */}
      </main>
    </>
  );
}

export default App;
