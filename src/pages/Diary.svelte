<!-- JAVASCRIPT -->
<script>
  // Components
  import Textarea from "../components/Textarea.svelte";
  import Header from "../components/Header.svelte";
</script>

<!-- HTML -->
<div class="diary">
  <Header title="diary" path="whispers" pathName="whispers" />
  <Textarea />
</div>

<!-- CSS -->
<style>
  .diary {
    height: 100vh;
    display: grid;
    padding: 0 0.5rem;
    grid-template-rows: 1fr 9fr;
    background-image: linear-gradient(
      30deg,
      var(--error),
      var(--error),
      var(--focus),
      var(--focus)
    );
  }
</style>
