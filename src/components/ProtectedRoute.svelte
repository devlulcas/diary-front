<!-- JAVASCRIPT -->
<script>
  import { Route } from "svelte-routing";
  import { isLoggedIn } from "../javascript/stores";
  import CannotAccess from "../pages/CannotAccess.svelte";

  export let path;
  export let component;

  $: hasAuthorization = $isLoggedIn === "yes" ? true : false;
</script>

<!-- "HTML" -->
{#if hasAuthorization}
  <Route {path} {component} />
{:else}
  <Route {path} component={CannotAccess} />
{/if}
