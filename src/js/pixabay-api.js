import axios from 'axios';

const apiKey = '43953718-9ce06f0736fa41b18ed1e7ce5';
const perPage = 15;

export async function searchImages(query, page) {
  const url = `https://pixabay.com/api/?key=${apiKey}&q=${encodeURIComponent(
    query
  )}&image_type=photo&orientation=horizontal&safesearch=true&page=${page}&per_page=${perPage}`;

  try {
    const response = await axios.get(url);
    const { hits, totalHits } = response.data;
    return { hits, total: totalHits };
  } catch (error) {
    console.error('Error', error);
    throw error;
  }
}