import { useState, useEffect } from "react"; // Hooks do React
import serverApi from "../../api/servidor-api";
import estilos from "./ListaPosts.module.css";
const ListaPosts = () => {
  /* Iniciamos o state do componente com um array vazio,
  para posteriormente "preenchê-lo" com os  dados vindos da API.
  Esta atribuição será feita com auxílio do setPosts. */
  const [posts, setPosts] = useState([]);

  console.log(serverApi);
  const postsTemp = [];
  useEffect(() => {
    async function getPosts() {
      try {
        const resposta = await fetch(`${serverApi}/posts`);
        const dados = await resposta.json();
        setPosts(dados);
      } catch (error) {
        console.log("Deu ruim! " + error.message);
      }
    }
    getPosts();
  });

  return (
    <div className={estilos.lista_posts}>
      {postsTemp.map(({ id, titulo, subtitulo }) => (
        <article className={estilos.post} key={id}>
          <h3> {titulo} </h3>
          <p>{subtitulo}</p>
        </article>
      ))}
    </div>
  );
};

export default ListaPosts;
