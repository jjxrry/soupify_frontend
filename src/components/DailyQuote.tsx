import React, { useState, useEffect} from "react";

interface Quote {
    q: string,
    a: string
}

const apiURL: string = "https://cors-anywhere.herokuapp.com/https://zenquotes.io/api/today/";

const DailyQuote: React.FC = () => {
    const [randomQuote, setRandomQuote] = useState<Quote[] | null>(null);

    const fetchQuotes = async () => {
        try {
            const response = await fetch(apiURL);
            const data: Quote[] = await response.json();
            // const quoteData= data[0]; 
            setRandomQuote(data);
            localStorage.setItem('cachedQuote', JSON.stringify(data));
            localStorage.setItem('quoteDate', new Date().toLocaleDateString());
        } 
        catch(error) {
            console.log('Error fetching data: ', error);
        }
    };

    useEffect(() => {
        const savedQuote = localStorage.getItem('cachedQuote');
        const savedDate = localStorage.getItem('quoteDate');
        const currentDate = new Date().toLocaleDateString();

        // console.log("Saved quote: ", savedQuote);
        // console.log("Saved date: ", savedDate, "Current date: ", currentDate);
        
        if (savedQuote && 
            savedDate === currentDate){
            setRandomQuote(JSON.parse(savedQuote));
        } else {
            fetchQuotes();
        }
    }, []);

    return (
        <div>
            <div>
                {randomQuote != null ?(
                    <>
                        <p>{randomQuote[0].q}</p>
                        <p>{randomQuote[0].a}</p>
                    </>
                ) : (
                    <p>loading...</p>
                )}
            </div>
        </div>
    )
}

export default DailyQuote;