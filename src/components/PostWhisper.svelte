<!-- JAVASCRIPT -->
<script>
  // Javascript auxiliar
  import { whisper } from "../javascript/apiUrls";
  import { postJson } from "../javascript/fetchRequests";

  let value = "";
  $: whisperJson = { whisper: value };
  // Enviar whisper
  function sendWhisper() {
    if (value) {
      try {
        postJson(whisper, whisperJson).then((res) => console.log(res));
      } catch (error) {
        alert(error);
        console.log(error);
      }
    }
    value = "";
  }
</script>

<!-- HTML -->

<div class="create-whisper">
  <textarea bind:value />
  <button on:click={sendWhisper}>
    <svg class="send" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
      <path
        d="M24 0l-6 22-8.129-7.239 7.802-8.234-10.458 7.227-7.215-1.754 24-12zm-15 16.668v7.332l3.258-4.431-3.258-2.901z"
      />
    </svg>
  </button>
</div>

<!-- CSS -->
<style>
  .create-whisper {
    display: flex;
    gap: 0.5rem;
    height: 100%;
  }

  textarea {
    flex-grow: 2;
    font-family: "Courier New", Courier, monospace;
    font-size: 1.6rem;
    font-weight: 500;
    height: 100%;
    background: var(--diary-bg);
    color: var(--text);
    padding: 1rem;
    border-radius: 1rem;
    resize: none;
    border: none;
  }

  @media screen and (min-width: 40rem) {
    textarea {
      font-size: 2rem;
    }
  }

  textarea:focus {
    background: var(--textarea-focus);
    outline: none;
  }

  textarea::-webkit-scrollbar {
    background: var(--scroll-track-bg);
    border-radius: 1rem;
    padding: 0.1rem;
  }

  textarea::-webkit-scrollbar-thumb {
    background: var(--scroll-thumb-bg);
    border-radius: 1rem;
  }

  textarea::selection {
    color: var(--diary-bg);
  }

  button {
    background: var(--diary-bg);
    filter: brightness(3.1);
    border-radius: 2rem;
    width: fit-content;
    padding: 0 1rem;
    height: 100%;
  }

  button:hover {
    filter: brightness(6.1);
  }

  button:active {
    filter: brightness(10.1) saturate(150%);
  }

  .send {
    width: 2rem;
    fill: var(--links);
  }
</style>
