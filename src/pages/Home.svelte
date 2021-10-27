<!-- JAVASCRIPT -->
<script>
  import { Link } from "svelte-routing";
  import Typewriter from "../assets/images/typewriter.svg";
</script>

<!-- HTML -->
<main>
  <header>
    <h1>
      <span class="tiny-h1"> my secret </span>
      <br />
      Diary
    </h1>
    <h2>Se torne seu melhor amigo</h2>
  </header>
  <div class="frame">
    <img src={Typewriter} alt="Máquina de escrever " />
  </div>
  <footer>
    <p>
      Ainda não tem uma conta?
      <Link to="signup">
        <span class="link"> Registre-se aqui </span>
      </Link>
    </p>
    <p>
      Já possui uma conta?
      <Link class="link" to="signin">
        <span class="link"> Entre por aqui </span>
      </Link>
    </p>
  </footer>
</main>

<!-- CSS -->
<style>
  main::before {
    content: "";
    height: 100%;
    width: 100%;
    position: absolute;
    z-index: -10;
    background-image: linear-gradient(
      60deg,
      var(--accent-color),
      var(--accent-color)
    );
  }

  main {
    width: 100%;
    height: 100%;
    background-image: url("data:image/svg+xml,%3Csvg width='52' height='26' viewBox='0 0 52 26' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23faf9fa' fill-opacity='0.06'%3E%3Cpath d='M10 10c0-2.21-1.79-4-4-4-3.314 0-6-2.686-6-6h2c0 2.21 1.79 4 4 4 3.314 0 6 2.686 6 6 0 2.21 1.79 4 4 4 3.314 0 6 2.686 6 6 0 2.21 1.79 4 4 4v2c-3.314 0-6-2.686-6-6 0-2.21-1.79-4-4-4-3.314 0-6-2.686-6-6zm25.464-1.95l8.486 8.486-1.414 1.414-8.486-8.486 1.414-1.414z' /%3E%3C/g%3E%3C/g%3E%3C/svg%3E");
    position: absolute;
    display: grid;
    grid-template-rows: 3fr 6fr 1fr;
  }

  header {
    text-align: center;
  }

  .tiny-h1 {
    font-size: 6.5rem;
  }

  h1 {
    line-height: 8rem;
    font-size: 12.5rem;
  }

  h2 {
    margin-top: 3.5rem;
    font-size: 2rem;
    font-family: "Courier New", Courier, monospace;
  }

  .frame {
    display: flex;
    align-items: center;
    justify-content: center;
  }

  img {
    height: 50vh;
  }

  @media screen and (max-width: 40rem) {
    img {
      width: 90%;
    }
  }
</style>
