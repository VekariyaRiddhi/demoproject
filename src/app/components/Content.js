import React, { useState, useEffect } from "react";

const Content = () => {
  const [quote, setQuote] = useState("");

  const fetchRandomQuote = async () => {
    try {
      const response = await fetch(
        "https://api.chucknorris.io/jokes/random?category=dev"
      );
      if (response.ok) {
        const data = await response.json();
        setQuote(data.value);
      }
    } catch (error) {
      console.error("Error fetching quote:", error);
    }
  };

  useEffect(() => {
    fetchRandomQuote();
  }, []);

  return (
    <div className="lg:px-30 md:px-10">
      <div className="prose">
        <p>{quote}</p>
        <button
          onClick={fetchRandomQuote}
          className="bg-white text-blue-500 px-4 py-2 mt-2 rounded-md hover:bg-blue-200"
        >
          Get New Quote
        </button>
      </div>
    </div>
  );
};

export default Content;