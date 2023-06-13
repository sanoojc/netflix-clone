
export const API_KEY="36e420391607fca50989c09f1463538d";
export const baseUrl= 'https://api.themoviedb.org/3';
export const imageUrl='https://image.tmdb.org/t/p/original';
export const originals = `${baseUrl}/discover/tv?api_key=${API_KEY}&with_networks=213`;
export const action =`${baseUrl}/discover/movie?api_key=${API_KEY}&with_genres=28`;
export const Comedy =`${baseUrl}/discover/movie?api_key=${API_KEY}&with_genres=35`;
export const Horror =`${baseUrl}/discover/movie?api_key=${API_KEY}&with_genres=27`;
export const Romance =`${baseUrl}/discover/movie?api_key=${API_KEY}&with_genres=10749`;
export const trending=`${baseUrl}/trending/all/week?api_key=${API_KEY}&language=en-US`;