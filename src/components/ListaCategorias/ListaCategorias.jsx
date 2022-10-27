import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import serverApi from "../../api/servidor-api";
import LoadingPacman from "../LoadingPacman/LoadingPacman";
import estilos from "./ListaCategorias.module.css";

const ListaCategorias = () => {
  const [categorias, setCategorias] = useState([]);
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    async function getCategorias() {
      try {
        const resposta = await fetch(`${serverApi}/categorias`);
        const dados = await resposta.json();
        setLoading(false);
        setCategorias(dados);
      } catch (error) {
        console.log("Deu ruim! " + error.message);
      }
    }
    getCategorias();
  }, []);
  if (loading) return <LoadingPacman />;
  return (
    <div className={estilos.lista_categorias}>
      <ul>
        {/* {categorias.map(({ categoria }) => {
          return <li key={id}>{categoria.nome}</li>;
        })} */}
        {categorias.map(({ id, nome }) => {
          return (
            <li key={id}>
              <Link to={`/categoria/${nome}`}> {nome} </Link>
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default ListaCategorias;
