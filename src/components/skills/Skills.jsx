import { BsFillPatchCheckFill } from 'react-icons/bs';
import './Skills.css';

const Skill = () => {
  return (
    <section id="skill">
      <h5>As habilidades que possuo</h5>
      <h2>Skills</h2>
      <div className="container skill-container">
        <div className="skill-frontend">
          <h3>Desenvolvimento Front-end</h3>
          <div className="skill-content">
            <article className="skill-details">
              <BsFillPatchCheckFill className="skill-details-icon" />
              <h4>HTML</h4>
            </article>
            <article className="skill-details">
              <BsFillPatchCheckFill className="skill-details-icon" />
              <h4>CSS</h4>
            </article>
            <article className="skill-details">
              <BsFillPatchCheckFill className="skill-details-icon" />
              <h4>JavaScript</h4>
            </article>
            <article className="skill-details">
              <BsFillPatchCheckFill className="skill-details-icon" />
              <h4>TypeScript</h4>
            </article>
            <article className="skill-details">
              <BsFillPatchCheckFill className="skill-details-icon" />
              <h4>React</h4>
            </article>
            <article className="skill-details">
              <BsFillPatchCheckFill className="skill-details-icon" />
              <h4>Tailwind</h4>
            </article>
            <article className="skill-details">
              <BsFillPatchCheckFill className="skill-details-icon" />
              <h4>Git/GitHub</h4>
            </article>
          </div>
        </div>
        <div className="skill-qa">
          <h3>QA / Testes</h3>
          <div className="skill-content">
            <article className="skill-details">
              <BsFillPatchCheckFill className="skill-details-icon" />
              <h4>Testes Manuais</h4>
            </article>
            <article className="skill-details">
              <BsFillPatchCheckFill className="skill-details-icon" />
              <h4>Postman</h4>
            </article>
            <article className="skill-details">
              <BsFillPatchCheckFill className="skill-details-icon" />
              <h4>Cypress</h4>
            </article>
            <article className="skill-details">
              <BsFillPatchCheckFill className="skill-details-icon" />
              <h4>Relatórios de Testes</h4>
            </article>
            <article className="skill-details">
              <BsFillPatchCheckFill className="skill-details-icon" />
              <h4>Jira</h4>
            </article>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Skill;
