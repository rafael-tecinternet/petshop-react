import { useState, useEffect } from "react"; // Hooks do React
import serverApi from "../../api/servidor-api";
import estilos from "./ListaPosts.module.css";
import LoadingPacman from "../LoadingPacman/LoadingPacman";
import ArtigoPost from "../ArtigoPost/ArtigoPost";
const ListaPosts = (props) => {
  /* Iniciamos o state do componente com um array vazio,
  para posteriormente "preenchê-lo" com os  dados vindos da API.
  Esta atribuição será feita com auxílio do setPosts. */
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    async function getPosts() {
      try {
        /* const resposta = await fetch(`${serverApi}/posts`); */
        const resposta = await fetch(`${serverApi}/${props.url || "posts"}`);
        const dados = await resposta.json();
        setPosts(dados);
        setLoading(false);
      } catch (error) {
        console.log("Deu ruim! " + error.message);
      }
    }
    getPosts();
  }, [props.url]); /* É necessário indicar a url como dependência pois ela
  muda toda vez em que uma categoria é clicada. Desta forma, o UseEffect "entende" que ele deve executar novamente as suas ações (neste caso,
  executar novamente o fetch na API) */
  if (loading) {
    return <LoadingPacman />;
  }
  /* Sobre o use Effect:
  Este Hook visa permitir um maior controle sobre "efeitos colaterais"
  na execução do componente.
  Recebe dois parâmetros:
  1º: função callback com que será executado
  2º: lista de dependências que indicarão ao useEffect quando ele deverá funcionar
  -Se não passar a lista (ou seja, se deixar sem os []), useEffect executará toda
  vez que o componente for renderizado.Portanto, o callback se torna um loop infinito.
  -Se passa a lista (ou seja, deixar o [] vazio), use Effect executará somento no 
  momento que o componente é renderizado pela primeira vez, evitando o loop infinito do callback. */

  return (
    <div className={estilos.lista_posts}>
      {posts.map(({ id, titulo, subtitulo }) => (
        <ArtigoPost
          key={id}
          id={id}
          titulo={titulo}
          subtitulo={subtitulo}
          classe={estilos.post}
        />
      ))}
    </div>
  );
};

export default ListaPosts;
