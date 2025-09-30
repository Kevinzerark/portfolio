import img1 from "../../assets/img/screenshot-todo.png";
import img2 from "../../assets/img/screenshot-movie.png";

import "./portfolio.css";

const projects = [
  {
    id: 1,
    title: "Todo-List",
    img: img1,
    description:
      "Aplicativo simples e moderno de tarefas, construído com React e TailwindCSS.",
    technologies: "React, TailwindCSS",
    link: "https://todo-list-reactjs-weld.vercel.app/",
    github: "https://github.com/Kevinzerark",
  },
  {
    id: 2,
    title: "Movie-App",
    img: img2,
    description:
      "Aplicativo que consome a API TMDb para exibir filmes, buscar por título, mostrar detalhes e gerenciar favoritos.",
    technologies: "React, TailwindCSS, TMDb API",
    link: "https://movie-app-react-weld-nine.vercel.app/",
    github: "https://github.com/Kevinzerark",
  },
];

const Portfolio = () => (
  <section id="portfolio">
    <h5>Projetos em Destaque</h5>
    <h2>Meus Projetos</h2>

    <div className="container portfolio-container">
      {projects.map(
        ({ id, title, img, description, technologies, link, github }) => (
          <article className="portfolio-item" key={id}>
            <img className="portfolio-item-image" src={img} alt={title} />
            <div className="portfolio-item-content">
              <h3>{title}</h3>
              <p>{description}</p>
              <p>{technologies}</p>
            </div>
            <div className="portfolio-item-cta">
              <a href={github} target="_blank" className="portfolio-btn" rel="noreferrer">
                GitHub
              </a>
              <a
                href={link}
                target="_blank"
                className="portfolio-btn-primary"
                rel="noreferrer"
              >
                Visitar
              </a>
            </div>
          </article>
        )
      )}
    </div>
  </section>
);

export default Portfolio;
