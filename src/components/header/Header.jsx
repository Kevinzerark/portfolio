import CTA from "./CTA";
import HeaderSocials from "./HeaderSocials";
import "./Header.css";

export default function Header() {
  return (
    <header id="home">
      <div className="container header-container">
        <h5>Olá, Eu sou</h5>
        <h1>Kevin Cardoso</h1>
        <h5 className="text-light">Desenvolvedor Web Jr</h5>
        <CTA />
        <HeaderSocials />
      </div>
    </header>
  );
}
