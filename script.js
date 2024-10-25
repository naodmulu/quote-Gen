const getQuote() => {

    const URL = "https://api.api-ninjas.com/v1/quotes?category=learning"

    try{
        const response = await fetch(URL);
        data = await response.json()
        console.log("hello")
    }
    catch (error){

    }
}