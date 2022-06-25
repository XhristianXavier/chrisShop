export const getProducts = async () =>{
    const response = await fetch(
        'database/Products.json'
    ).then((response) => response.json());
    return response;
}