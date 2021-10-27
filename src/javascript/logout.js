import { navigate } from "svelte-routing";
import { logout } from "./apiUrls";
import { getJson } from "./fetchRequests";
import { isLoggedIn } from "./stores";

export function logUserOut() {
  getJson(logout).then((response) => {
    console.log(response);
    isLoggedIn.set("no");
    navigate("/", { replace: true });
  });
}
