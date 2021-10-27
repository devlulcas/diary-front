<!-- JAVASCRIPT -->
<script>
  // Libs
  import { onMount } from "svelte";
  import InfiniteLoading from "svelte-infinite-loading";
  // Javascript auxiliar
  import { whisper } from "../javascript/apiUrls";
  import { getJson } from "../javascript/fetchRequests";

  let whispers = [];

  function handleInfiniteScroll({ detail: { loaded, complete } }) {
    getJson(whisper).then((response) => {
      if (response.whisper[0]) {
        whispers = [...whispers, ...response.whisper];
        loaded();
      } else {
        complete();
      }
    });
  }
</script>

<!-- HTML -->
<main class="feed">
  {#each whispers as data}
    <!-- Carregar dados baseado na alteração da lista -->
    <article class="post">
      {data}
    </article>
  {/each}
  <!-- Escuta o scroll e após o fim do evento, chama a função no custom event-->
  <InfiniteLoading on:infinite={handleInfiniteScroll} />
</main>

<!-- CSS -->
<style>
  .feed {
    overflow-y: scroll;
    position: absolute;
    height: 100%;
    width: 100%;
    background: var(--diary-bg);
    border-radius: 1rem 1rem 0 0;
    padding: 1rem;
    display: flex;
    flex-direction: column;
    gap: 1rem;
  }

  .post {
    background: var(--whisper-bg);
    font-size: 1.5rem;
    font-weight: 600;
    font-family: "Courier New", Courier, monospace;
    color: var(--text);
    word-break: break-all;
    word-wrap: break-word;
    padding: 1rem 2rem;
    border-radius: 1rem;
  }

  .feed::-webkit-scrollbar {
    background: var(--scroll-track-bg);
    border-radius: 1rem;
    padding: 0.1rem;
  }

  .feed::-webkit-scrollbar-thumb {
    background: var(--scroll-thumb-bg);
    border-radius: 1rem;
  }

  @media screen and (min-width: 40rem) {
    .post {
      font-size: 2rem;
    }
  }
</style>
