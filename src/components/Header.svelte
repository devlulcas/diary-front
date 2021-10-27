<!-- JAVASCRIPT -->
<script>
  // Libs
  import { Link } from "svelte-routing";
  // Javascript auxiliar
  import { logUserOut } from "../javascript/logout";
  // Components
  import RoundedButton from "../components/RoundedButton.svelte";
  // Icons
  import PenIcon from "../assets/images/pen.svg";
  // Props
  export let title, path, pathName;
</script>

<!-- HTML -->
<header>
  <h1>{title.toLowerCase()}</h1>
  <img src={PenIcon} alt="caneta" />
  <nav>
    <RoundedButton on:click={logUserOut}>SAIR</RoundedButton>
    <RoundedButton>
      <Link to={path}>
        <span class="link"> {pathName.toUpperCase()} </span>
      </Link>
    </RoundedButton>
  </nav>
</header>

<!-- CSS -->
<style>
  @media screen and (max-width: 30rem) {
    h1 {
      font-size: 3rem;
    }
  }

  header {
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 0 1rem;
  }

  nav {
    display: flex;
    gap: 1rem;
  }
</style>
