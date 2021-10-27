// Url padrão para CORS
import { defaultUrl } from "./apiUrls";

// Headers
const createHeaders = (mimeType) =>
  new Headers({
    "Access-Control-Allow-Origin": defaultUrl,
    "Access-Control-Allow-Credentials": "true",
    "Content-type": mimeType || "application/json",
  });

// REALIZA POST REQUESTS NO FORMATO JSON E RETORNA JSON
async function postJson(url, data) {
  const jsonData = JSON.stringify(data);
  const headers = createHeaders();
  try {
    const response = await fetch(url, {
      method: "POST",
      headers,
      mode: "cors",
      credentials: "include",
      body: jsonData,
    });
    return await response.json();
  } catch (error) {
    console.log(error);
    return { fail: true, error };
  }
}

// REALIZA GET REQUESTS NO FORMATO JSON E RETORNA JSON
async function getJson(url) {
  const headers = createHeaders();
  try {
    const response = await fetch(url, {
      headers,
      mode: "cors",
      credentials: "include",
    });
    return await response.json();
  } catch (error) {
    console.log(error);
    return { fail: true, error };
  }
}

// REALIZA PUT REQUESTS NO FORMATO JSON E RETORNA JSON
async function putJson(url, data) {
  const jsonData = JSON.stringify(data);
  const headers = createHeaders();
  try {
    const response = await fetch(url, {
      method: "PUT",
      headers,
      mode: "cors",
      credentials: "include",
      body: jsonData,
    });
    return await response.json();
  } catch (error) {
    console.log(error);
    return { fail: true, error };
  }
}

// REALIZA GET REQUESTS DE UM PLAIN TEXT E RETORNA JSON
async function getText(url) {
  try {
    const headers = createHeaders();
    const response = await fetch(url, {
      headers,
      mode: "cors",
      credentials: "include",
    });
    const text = await response.text();
    return { success: true, text };
  } catch (error) {
    console.log(error);
    return { fail: true, error };
  }
}

// REALIZA PUT REQUESTS DE UM PLAIN TEXT E RETORNA JSON
async function putText(url, text) {
  const headers = createHeaders("text/plain");
  try {
    const response = await fetch(url, {
      method: "PUT",
      headers,
      mode: "cors",
      credentials: "include",
      body: text,
    });
    return await response.json();
  } catch (error) {
    console.log(error);
    return { fail: true, error };
  }
}

export { postJson, getJson, putJson, getText, putText };
