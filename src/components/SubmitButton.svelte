<!-- HTML -->
<button>
  <slot />
</button>

<!-- CSS -->
<style>
  button {
    margin-top: 2rem;
    width: 20rem;
    height: 4rem;
    text-align: center;
    background-color: var(--button-bg);
    border-radius: 2rem;
    font-size: 2rem;
    font-weight: 600;
    filter: contrast(1.5);
    cursor: pointer;
    transition: 200ms;
  }

  button:hover {
    filter: brightness(1.1) contrast(3) saturate(200%);
  }

  button:active {
    filter: brightness(2.1);
  }
</style>
