import Build from "./components/build/Build";
import Footer from "./components/footer/Footer";
import HeroMain from "./components/heroSection/HeroMain";
import NavbarMain from "./components/navbar/NavbarMain";
import Offer from "./components/Offer/Offer";
import Trust from "./components/trust/Trust";
import Team from "./components/team/Team";
function App() {
  return (
    <main>
      <div className="flex flex-col items-center">
        <NavbarMain />
        <HeroMain />
        <Trust />
        <Offer />
        <Team />
        <Build />
        <Footer />
      </div>
    </main>
  );
}

export default App;
