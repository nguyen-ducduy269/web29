const VITE_DOMAIN_SERVER = "http://localhost:3001";

const fetchApi = (url: string) => fetch(`${VITE_DOMAIN_SERVER}/${url}`);
export default fetchApi;
