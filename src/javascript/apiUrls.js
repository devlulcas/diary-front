const defaultUrl = "http://localhost:2309";

const register = `${defaultUrl}/user/register`; // POST JSON
const login = `${defaultUrl}/user/login`; // POST JSON
const logout = `${defaultUrl}/user/logout`; // GET
const update = `${defaultUrl}/user/update`; // PUT JSON
const diary = `${defaultUrl}/diary`; // GET PUT PLAIN-TEXT
const config = `${defaultUrl}/config`; // GET PUT JSON
const whisper = `${defaultUrl}/whisper`; // POST GET JSON

export { register, login, logout, update, diary, config, whisper, defaultUrl };
