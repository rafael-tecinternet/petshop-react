import { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";
import serverApi from "../../api/servidor-api";
import LoadingDesenho from "../LoadingDesenho/LoadingDesenho";
import estilos from "./ListaCategorias.module.css";

const ListaCategorias = () => {
  /* Atribuição do useState para manipular os dados do componente 
1º parâmetro: variável que terá os dados
2º parâmetro: função responsável por atualizar (setter)
Obs.: o que colocamos no useState representa o valor inicial */
  const [categorias, setCategorias] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function getCategorias() {
      try {
        const resposta = await fetch(`${serverApi}/categorias.json`);
        const dados = await resposta.json();
        const listaDeCategorias = [];
        for (const categoria in dados) {
          const objetoCategoria = {
            id: categoria,
            nome: dados[categoria].nome,
          };
          listaDeCategorias.push(objetoCategoria);
        }
        setLoading(false);
        setCategorias(listaDeCategorias);
      } catch (error) {
        console.log("Deu ruim! " + error.message);
      }
    }
    getCategorias();
  }, []);

  if (loading) return <LoadingDesenho texto="categorias..." />;

  return (
    <div className={estilos.lista_categorias}>
      <ul>
        {categorias.map(({ id, nome }) => {
          return (
            <li key={id}>
              <NavLink
                activeClassName={estilos.ativo}
                to={`/categoria/${nome}`}
              >
                {nome}
              </NavLink>
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default ListaCategorias;
