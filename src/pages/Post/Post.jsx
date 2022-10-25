import estilos from "./Post.module.css";
import Caixa from "../../components/Caixa/Caixa";
const Post = () => {
  return (
    <section>
      <h2 className={estilos.titulo_secsao}> Titulo do Post...</h2>
      <Caixa>
        <h3>Categoria do post...</h3>
        <p>Descrição do post...</p>
      </Caixa>
    </section>
  );
};

export default Post;
