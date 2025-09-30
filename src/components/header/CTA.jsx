import CV from "../../assets/curriculo.pdf";

const CTA = () => {
  return (
    <div className="cta">
      <a href={CV} className="header-btn" download>
        Download CV
      </a>
      <a href="#contact" className="header-btn header-btn-primary">
        Vamos conversar
      </a>
    </div>
  );
};

export default CTA;
