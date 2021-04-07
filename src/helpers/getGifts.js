export const getGifs = async (category) =>{
    const api_key = '0ruEXk0dBoZsNHmoT00T07AOfbYEUnUR'
    const value = encodeURI (category);
    const url = `https://api.giphy.com/v1/gifs/search?q=${value}&api_key=${api_key}&limit=10`
    
    const resp = await fetch(url);
    const {data} = await resp.json();
    const gifs = data.map(img =>{
        return {
            id: img.id,
            title: img.title,
            url: img.images?.downsized_medium.url
        }
    });
    return gifs;

}