/* Ejemplo practico de como hacer una llamada fetch a una API para que esta nos devuelva los datos
 *  Para ejecutar este comando se debe usar Deno de la siguiente forma:
 *  deno run --allow-all example.ts
 */

// Tipos
interface ResponseData {
    statusCode:  number;
    message:     string;
    pagination:  Pagination;
    totalQuotes: null;
    data:        Quote[];
}
type Quote = {
    quoteText: string
    quoteAuthor: string
    quoteGenre: string
}

export interface Pagination {
    currentPage: null;
    nextPage:    null;
    totalPages:  null;
}

const fetchData = async () => {
  try {
    // Fetch a resource from the network. It returns a Promise
    // that resolves to the Response to that Request, whether it is successful or not.
    const response = await fetch(
      "https://quote-garden.onrender.com/api/v3/quotes"
    );

    // Takes a Response stream and reads it to completion. It returns a promise that resolves
    // with the result of parsing the body text as JSON.
    const respuesta: ResponseData = await response.json();

    console.log("Status:",respuesta);
    respuesta.data.forEach(elem => {
     console.log("Author: " + elem.quoteAuthor + " Genre: " +  elem.quoteGenre+ " Quote: "+ elem.quoteText)
    })
  } catch (error) {
    // Debemos tratar siempre los errores cuando trabajemos con Promesas
    console.log(error);
  }
};
await fetchData();