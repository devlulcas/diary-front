<!-- HTML -->
<button on:click>
  <slot />
</button>

<!-- CSS -->
<style>
  button {
    align-items: center;
    background: var(--text);
    border-radius: 5rem;
    border: 0.2rem var(--accent-color) solid;
    bottom: 1rem;
    color: var(--links);
    cursor: pointer;
    display: flex;
    font-family: "Montserrat", sans-serif;
    font-size: 1.4rem;
    font-weight: 800;
    height: 4rem;
    width: fit-content;
    padding: 0 1rem;
    justify-content: center;
    transition: 200ms;
  }

  button:hover {
    border: 0.2rem var(--button-bg) solid;
  }

  button:active {
    background: var(--button-bg);
    color: var(--text);
  }
</style>
