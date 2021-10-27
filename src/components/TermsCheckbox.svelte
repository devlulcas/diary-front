<!-- JAVASCRIPT -->
<script>
  import { Link } from "svelte-routing";
  export let value = false;
  export let error = "";
</script>

<!-- HTML -->
<div>
  <input
    type="checkbox"
    name="termsAndConditions"
    id="termsAndConditions"
    bind:checked={value}
  />
  <label for="termsAndConditions">
    Aceita nossos termos e condições?
    <Link to="termsAndConditions">Leia-os aqui</Link>
  </label>
</div>
<strong class="error">{error}</strong>

<!-- CSS -->
<style>
  div {
    display: flex;
    align-items: center;
  }

  input {
    margin-right: 0.5rem;
    appearance: none;
    background-color: var(--input-bg);
    border: 0.2rem solid var(--button-bg);
    padding: 0.6rem;
    border-radius: 50%;
    position: relative;
    transition: 500ms;
  }

  input:checked {
    background-color: var(--button-bg);
    border: 0.2rem solid var(--input-bg);
  }

  label {
    font-size: 1.5rem;
  }

  /* Mensagem de erro */
  strong {
    display: block;
    text-align: center;
    font-size: 1.5rem;
    font-weight: 700;
    color: var(--error);
  }
</style>
