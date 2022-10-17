const apiKey = '8ee71y8NNGxBM32YvDrKQKV2zpdY5jZT';

const peticion = fetch(`https://api.giphy.com/v1/gifs/random?api_key=${apiKey}`);

peticion
.then(respuesta => respuesta.json())
.then( ({data}) => {
    const {url} = data.images.original
    console.log(url)

    const img = document.createElement('img');
    img.src = url;

    document.body.append(img);
})
.catch(console.warn)