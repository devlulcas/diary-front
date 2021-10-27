<!-- JAVASCRIPT -->
<script>
  // Components
  import PostWhisper from "../components/PostWhisper.svelte";
  import WhisperFeed from "../components/WhisperFeed.svelte";
  import Header from "../components/Header.svelte";
</script>

<!-- HTML -->
<div class="whispers">
  <Header title="whispers" path="diary" pathName="diary" />
  <PostWhisper />
  <div class="whisper-container">
    <WhisperFeed />
  </div>
</div>

<!-- CSS -->
<style>
  .whispers {
    overflow: hidden;
    height: 100vh;
    display: grid;
    padding: 0 0.5rem;
    gap: 0.5rem;
    grid-template-rows: 1.1fr 1fr 9fr;
    background-image: linear-gradient(
      30deg,
      var(--error),
      var(--error),
      var(--focus),
      var(--focus)
    );
  }

  .whisper-container {
    position: relative;
  }
</style>
