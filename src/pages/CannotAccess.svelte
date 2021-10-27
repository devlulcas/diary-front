<script>
  import { Link } from "svelte-routing";
  import AuthSVG from "../assets/images/authentication.svg";
</script>

<main>
  <div class="advice">
    <h1>
      Você deve fazer cadastro ou entrar em sua conta antes de acessar essa
      página!
    </h1>

    <Link to="/signin">
      <span class="link"> Entre em sua conta por aqui </span>
    </Link>

    <p>Ou</p>

    <Link to="/signup">
      <span class="link"> Faça seu cadastro por aqui </span>
    </Link>

    <Link to="/">
      <span class="link link--home">
        Ou volte para a página inicial para saber saber mais sobre nós
      </span>
    </Link>
  </div>

  <img src={AuthSVG} alt="Ilustração tela de autenticação" />
</main>

<!-- CSS -->
<style>
  main,
  .advice {
    display: grid;
    place-items: center;
  }

  main {
    background-attachment: fixed;
    background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 100 1000'%3E%3Cg %3E%3Ccircle fill='%23330055' cx='50' cy='0' r='50'/%3E%3Cg fill='%233a015d' %3E%3Ccircle cx='0' cy='50' r='50'/%3E%3Ccircle cx='100' cy='50' r='50'/%3E%3C/g%3E%3Ccircle fill='%23410165' cx='50' cy='100' r='50'/%3E%3Cg fill='%2348026e' %3E%3Ccircle cx='0' cy='150' r='50'/%3E%3Ccircle cx='100' cy='150' r='50'/%3E%3C/g%3E%3Ccircle fill='%23500376' cx='50' cy='200' r='50'/%3E%3Cg fill='%2357047e' %3E%3Ccircle cx='0' cy='250' r='50'/%3E%3Ccircle cx='100' cy='250' r='50'/%3E%3C/g%3E%3Ccircle fill='%235f0587' cx='50' cy='300' r='50'/%3E%3Cg fill='%2367068f' %3E%3Ccircle cx='0' cy='350' r='50'/%3E%3Ccircle cx='100' cy='350' r='50'/%3E%3C/g%3E%3Ccircle fill='%236f0798' cx='50' cy='400' r='50'/%3E%3Cg fill='%237707a0' %3E%3Ccircle cx='0' cy='450' r='50'/%3E%3Ccircle cx='100' cy='450' r='50'/%3E%3C/g%3E%3Ccircle fill='%238008a9' cx='50' cy='500' r='50'/%3E%3Cg fill='%238909b1' %3E%3Ccircle cx='0' cy='550' r='50'/%3E%3Ccircle cx='100' cy='550' r='50'/%3E%3C/g%3E%3Ccircle fill='%239109ba' cx='50' cy='600' r='50'/%3E%3Cg fill='%239a09c3' %3E%3Ccircle cx='0' cy='650' r='50'/%3E%3Ccircle cx='100' cy='650' r='50'/%3E%3C/g%3E%3Ccircle fill='%23a309cb' cx='50' cy='700' r='50'/%3E%3Cg fill='%23ad09d4' %3E%3Ccircle cx='0' cy='750' r='50'/%3E%3Ccircle cx='100' cy='750' r='50'/%3E%3C/g%3E%3Ccircle fill='%23b608dc' cx='50' cy='800' r='50'/%3E%3Cg fill='%23c007e5' %3E%3Ccircle cx='0' cy='850' r='50'/%3E%3Ccircle cx='100' cy='850' r='50'/%3E%3C/g%3E%3Ccircle fill='%23c905ee' cx='50' cy='900' r='50'/%3E%3Cg fill='%23d303f6' %3E%3Ccircle cx='0' cy='950' r='50'/%3E%3Ccircle cx='100' cy='950' r='50'/%3E%3C/g%3E%3Ccircle fill='%23D0F' cx='50' cy='1000' r='50'/%3E%3C/g%3E%3C/svg%3E");
    background-size: contain;
    filter: saturate(100%);
    height: 100vh;
  }

  .advice {
    backdrop-filter: blur(18px) saturate(30%);
    background: rgba(82, 5, 97, 0.95);
    background-image: url("data:image/svg+xml,%3Csvg width='52' height='26' viewBox='0 0 52 26' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23faf9fa' fill-opacity='0.06'%3E%3Cpath d='M10 10c0-2.21-1.79-4-4-4-3.314 0-6-2.686-6-6h2c0 2.21 1.79 4 4 4 3.314 0 6 2.686 6 6 0 2.21 1.79 4 4 4 3.314 0 6 2.686 6 6 0 2.21 1.79 4 4 4v2c-3.314 0-6-2.686-6-6 0-2.21-1.79-4-4-4-3.314 0-6-2.686-6-6zm25.464-1.95l8.486 8.486-1.414 1.414-8.486-8.486 1.414-1.414z' /%3E%3C/g%3E%3C/g%3E%3C/svg%3E");
    border-radius: 1rem;
    border: 0.1rem solid rgba(79, 3, 94, 0.25, 0.75);
    filter: saturate(120%);
    height: 70%;
    padding: 2rem;
    position: relative;
    width: 70%;
  }

  h1 {
    font-size: calc(2.1vw + 2vh);
    font-weight: 800;
    text-align: center;
  }

  .link {
    color: var(--important-link);
    display: block;
    font-size: 2rem;
    text-align: center;
  }

  p,
  .link--home {
    font-size: 1.5rem;
  }

  img {
    bottom: 0;
    height: 45vh;
    position: absolute;
    right: 0;
    width: auto;
  }

  @media screen and (max-width: 90rem) {
    .advice {
      backdrop-filter: blur(3px) saturate(200%);
      position: absolute;
      z-index: 10;
    }

    img {
      position: relative;
    }
  }

  @media screen and (max-width: 40rem) {
    .advice {
      border-radius: 1rem;
      width: 90%;
    }

    img {
      height: 30vh;
    }
  }
</style>
