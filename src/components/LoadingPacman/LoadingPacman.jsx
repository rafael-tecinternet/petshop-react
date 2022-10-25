import imagemLoading from "../../assets/images/loading.svg";
import estilos from "./LoadingPacman.module.css";
const LoadingPacman = () => {
  return (
    <div className={estilos.loading}>
      <h2>Carregando...</h2>
      <img src={imagemLoading} alt="" />
    </div>
  );
};

export default LoadingPacman;
