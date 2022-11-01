import { Button, TextField } from "@mui/material";
import { useState } from "react";
import serverApi from "../../api/servidor-api";
import { useHistory } from "react-router-dom";
import Caixa from "../../components/Caixa/Caixa";
import estilos from "./Contato.module.css";

const Contato = () => {
  /* Eventos/Funções para captura da digitação nos campos */
  const inputNome = (event) => setNome(event.target.value);
  const inputEmail = (event) => setEmail(event.target.value);
  const inputMensagem = (event) => setMensagem(event.target.value);

  /* Hook useState para manipular os estados dos dados do componente */
  const [nome, setNome] = useState("");
  const [email, setEmail] = useState("");
  const [mensagem, setMensagem] = useState("");

  /* Hook necessário para criar uma navegação/redirecionamento manualmente (ou seja, sem depender dous routes) */
  let history = useHistory();

  const enviarContato = async (event) => {
    event.preventDefault();

    const opcoes = {
      method: "POST",
      body: JSON.stringify({ nome, email, mensagem }),
      headers: {
        "Content-type": "application/json; charset=UTF-8",
      },
    };

    /* Script para envio dos dados para a API */
    try {
      await fetch(`${serverApi}/contatos`, opcoes);
      alert("Dados enviados!");
      history.push("/"); /* redirecionar oara a "home/blog" */
    } catch (error) {
      console.log("Deu ruim: " + error.message);
    }
  };

  // let desabilitado = nome === "" || email === "" || mensagem === "";

  /* "Toggle" do botão: caso qualquer uma das variáveis seja undefined,
  desabilitado se manterá true e com isso o botão ficará desabilitado.
  
  Quando todas deixarem de ser undefined, desabilitado se tornará false e
  com isso o botão será habilitado. */
  let desabilitado = !nome || !email || !mensagem;

  return (
    <section>
      <h2 className={estilos.titulo_secao}>Fale Conosco</h2>

      <Caixa>
        <form
          onSubmit={enviarContato}
          className={estilos.formulario}
          method="post"
        >
          <div>
            <TextField
              onChange={inputNome}
              type="text"
              label="Nome"
              variant="outlined"
              fullWidth
              required
              helperText={!nome ? "Você deve digitar o nome" : ""}
            />
          </div>

          <div>
            <TextField
              onChange={inputEmail}
              type="email"
              label="E-mail"
              variant="outlined"
              fullWidth
              required
              helperText={!email ? "Informe um e-mail para contato" : ""}
            />
          </div>

          <div>
            <TextField
              onChange={inputMensagem}
              type="text"
              label="Mensagem"
              variant="outlined"
              fullWidth
              required
              helperText={!mensagem ? "Fale o que você quiser" : ""}
              multiline
              rows={6}
            />
          </div>
          <div>
            <Button type="submit" variant="contained" disabled={desabilitado}>
              Enviar mensagem
            </Button>
          </div>
        </form>
      </Caixa>
    </section>
  );
};

export default Contato;
