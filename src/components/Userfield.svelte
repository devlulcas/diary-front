<!-- JAVASCRIPT -->
<script>
  // Gera apenas o input necessário para a utilização
  export let type = "";
  export let value = "";
  export let error = "";
  $: isWrong = Boolean(error);
</script>

<!-- HTML -->
<div>
  {#if type === "username"}
    <label for="username">Nome de usuário</label>
    <input
      type="text"
      name="username"
      id="username"
      placeholder="Ex: joão_exemplo"
      bind:value
      class:wrong={isWrong}
    />
    <strong class="error">{error}</strong>
  {:else if type === "email"}
    <label for="email">Digite seu e-mail</label>
    <input
      type="email"
      name="email"
      id="email"
      placeholder="Ex: joão@email.com"
      bind:value
      class:wrong={isWrong}
    />
    <strong class="error">{error}</strong>
  {:else if type === "password"}
    <label for="password">Senha</label>
    <input
      type="password"
      name="password"
      id="password"
      bind:value
      class:wrong={isWrong}
    />
    <strong class="error">{error}</strong>
  {:else}
    <p>Invalid User Field</p>
  {/if}
</div>

<!-- CSS -->
<style>
  /* Label e container */
  div {
    width: 100%;
  }

  label {
    display: block;
    margin-left: 1.5rem;
    font-size: 2rem;
    font-weight: 700;
  }

  /* Input */
  input {
    width: 100%;
    margin-top: 0.3rem;
    border-radius: 1rem;
    padding: 0.5rem 1.5rem;
    font-size: 2rem;
    font-weight: 600;
    background: var(--input-bg);
  }

  input:focus {
    background: var(--focus);
    color: var(--text);
    outline: 0.1rem solid white;
  }

  input:focus::placeholder {
    color: var(--text);
  }

  /* Mensagem de erro */
  strong {
    margin-top: 0.5rem;
    display: block;
    text-align: center;
    font-size: 1.5rem;
    font-weight: 700;
    color: var(--error);
    filter: brightness(2);
  }

  .wrong {
    background-color: var(--error);
    filter: saturate(80%) brightness(1.5);
    outline: 0.1rem solid var(--error);
  }
</style>
