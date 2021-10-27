<!-- JAVASCRIPT -->
<script>
  // Libs
  import { Router, Route } from "svelte-routing";
  // Assets
  import "./assets/css/style.css";
  // Páginas públicas
  import Home from "./pages/Home.svelte";
  import Register from "./pages/Register.svelte";
  import Login from "./pages/Login.svelte";
  import TermsAndConditions from "./pages/TermsAndConditions.svelte";
  // Páginas privadas
  import Diary from "./pages/Diary.svelte";
  // Componentes
  import ProtectedRoute from "./components/ProtectedRoute.svelte";
  import Whisper from "./pages/Whisper.svelte";
</script>

<!-- Gerenciador de rodas CS-->
<Router>
  <ProtectedRoute path="/whispers" component={Whisper} />
  <ProtectedRoute path="/diary" component={Diary} />
  <Route path="/signup" component={Register} />
  <Route path="/signin" component={Login} />
  <Route path="/termsAndConditions" component={TermsAndConditions} />
  <Route path="/" component={Home} />
</Router>
