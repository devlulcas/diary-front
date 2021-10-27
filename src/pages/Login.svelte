<!-- JAVASCRIPT -->
<script>
  // Libs
  import { Link, navigate } from "svelte-routing";
  import { onDestroy, onMount } from "svelte";
  // Javascript auxiliar
  import { emailRegex } from "../javascript/validation";
  import { login } from "../javascript/apiUrls";
  import { postJson } from "../javascript/fetchRequests";
  import { isLoggedIn } from "../javascript/stores";
  // CSS
  import "../assets/css/loginAndRegister.css";
  // Componentes
  import SubmitButton from "../components/SubmitButton.svelte";
  import UserField from "../components/Userfield.svelte";

  // Inscrição no store retorna um método de desinscrição
  let logged = "no";
  const unsubscribe = isLoggedIn.subscribe((isLogged) => (logged = isLogged));

  // Caso o usuário já esteja logado o levamos direto ao diário
  onMount(() => {
    if (logged === "yes") {
      navigate("/diary", { replace: true });
    }
  });
  // Desinscrevemos o componente do store quando o destruímos
  onDestroy(unsubscribe);

  // Campos de input do usuário
  let data = {
    userName: "",
    userEmail: "",
    userPassword: "",
  };
  // Mensagens de erros correspondentes a cada input do usuário
  let errors = {
    userName: "",
    userEmail: "",
    userPassword: "",
  };
  // Verifica se os campos do input são todos válidos
  let valid = false;

  // Função responsável por verificar os dados e enviar para a api
  function submitHandler() {
    // Válido até que se prove o contrário
    valid = true;
    // Username não pode ser vázio
    if (!data.userName.trim()) {
      valid = false;
      errors.userName = "Este campo não pode ser vazio!";
    } else {
      errors.userName = "";
    }
    // Email não pode ser inválido
    if (!emailRegex.test(data.userEmail.trim())) {
      valid = false;
      errors.userEmail = "Insira um e-mail válido!";
    } else {
      errors.userEmail = "";
    }
    // Senha não pode ser menor que oito caractéres
    if (data.userPassword.length < 8) {
      valid = false;
      errors.userPassword = "Insira uma senha com oito caractéres ou mais!";
    } else {
      errors.userPassword = "";
    }

    // Envio após validação
    if (valid) {
      postJson(login, data).then((response) => processLogin(response));
    }
  }

  let loginFailed = "";

  function processLogin(response) {
    if (response.fail) {
      console.log(response.fail);
      loginFailed =
        "Algo deu errado!... Modifique suas informações e tente novamente.";
      return;
    }
    loginFailed = "";
    isLoggedIn.set("yes");
    // Confirmando que está logado é redirecionado diretamente para o diário
    if (logged === "yes") {
      navigate("/diary", { replace: true });
    }
  }
</script>

<!-- HTML -->
<p class="loggin-failed" class:visible={loginFailed}>
  {loginFailed}
</p>
<div class="container">
  <h1>Entre em sua conta</h1>
  <form method="post" on:submit|preventDefault={submitHandler}>
    <UserField
      type="username"
      bind:value={data.userName}
      error={errors.userName}
    />
    <UserField
      type="email"
      bind:value={data.userEmail}
      error={errors.userEmail}
    />
    <UserField
      type="password"
      bind:value={data.userPassword}
      error={errors.userPassword}
    />
    <SubmitButton>ENTRAR</SubmitButton>
  </form>

  <footer>
    <p>
      Ainda não possui uma conta?
      <Link to="signup">Cadastre-se por aqui</Link>
    </p>
    <Link to="/">Voltar para a página inicial</Link>
  </footer>
</div>

<!-- CSS -->
<style>
  .visible {
    display: flex;
  }
</style>
