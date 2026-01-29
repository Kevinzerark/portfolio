import "./Hero.css";
import ME from "../../assets/img/me.jpeg";
import { FaAward } from "react-icons/fa";
import { VscFolderLibrary } from "react-icons/vsc";

const Hero = () => {
  return (
    <section id="about">
      <h5>Conheça um pouco</h5>
      <h2>Sobre mim</h2>
      <div className="container about-container">
        <div className="about-me">
          <div className="about-me-image">
            <img src={ME} alt="me" />
          </div>
        </div>
        <div className="about-content">
          <div className="about-cards">
            <article className="about-card">
              <FaAward className="about-icon" />
              <h5>Experiência Acadêmica</h5>
              <small>1+ Ano</small>
            </article>

            <article className="about-card">
              <VscFolderLibrary className="about-icon" />
              <h5>Projetos</h5>
              <small>10+ Projetos</small>
            </article>
          </div>
          <p>
            Sou formado em Análise e Desenvolvimento de Sistemas e possuo mais
            de 1 ano de experiência prática em Desenvolvimento Web e QA, atuando
            em projetos acadêmicos e pessoais com HTML, CSS, JavaScript e React.
            Também possuo experiência em testes manuais e uso do Postman para
            validação de APIs.
          </p>
          <a href="#contact" className="contato-btn-primary">
            Entre em contato
          </a>
        </div>
      </div>
    </section>
  );
};

export default Hero;
