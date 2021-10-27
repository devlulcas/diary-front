<!-- JAVASCRIPT -->
<script>
  // Libs
  import { onMount } from "svelte";
  // Javascript auxiliar
  import { diary } from "../javascript/apiUrls";
  import { getText, putText } from "../javascript/fetchRequests";

  let value = "Loading...";
  // Requisitar o texto já existente para a API
  onMount(() => {
    getText(diary).then((response) => {
      if (response.success) value = response.text;
    });
  });

  // Salvar o diário enviando um request
  function saveDiary() {
    try {
      putText(diary, value).then((res) => console.log(res));
    } catch (error) {
      alert(error);
      console.log(error);
    }
  }

  // Salvar o diário automáticamente alguns segundo depois que o usuário para de digitar
  let timeout;
  function autoSave() {
    if (timeout) clearTimeout(timeout);
    timeout = setTimeout(saveDiary, 500);
  }
</script>

<!-- HTML -->
<textarea bind:value on:keyup={autoSave} autocorrect="off" />

<!-- CSS -->
<style>
  textarea {
    font-family: "Courier New", Courier, monospace;
    font-size: 1.6rem;
    width: 100%;
    height: 100%;
    background: var(--diary-bg);
    color: var(--text);
    padding: 1rem;
    border-radius: 1rem 1rem 0 0;
    resize: none;
  }

  textarea:focus {
    outline: none;
    background: var(--textarea-focus);
  }

  @media screen and (min-width: 40rem) {
    textarea {
      font-size: 2rem;
    }
  }
</style>
