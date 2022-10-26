import ListaPosts from "../../components/ListaPosts/ListaPosts";
import estilos from "./Home.module.css";
import ListaCategorias from "../../components/ListaCategorias/ListaCategorias";
const Home = () => {
  return (
    <section>
      <h2 className={estilos.titulo_secao}>Pet Notícias</h2>
      <ListaCategorias />
      <ListaPosts />
    </section>
  );
};

export default Home;
