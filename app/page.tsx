'use client'
import { useEffect, useState } from "react"
import axios from 'axios'

const Home = () => {
      const [tarotCard, setTarotCard] = useState<any[]>([]);

      useEffect(() => {
            const fetchTarotCard = async () => {
              const options = {
                method: 'GET',
                url: 'https://horoscope-astrology.p.rapidapi.com/tarotcard',
                headers: {
                  'X-RapidAPI-Key': '1591618643mshd45411114ae3579p181d33jsn4a85dd05e1ea',
                  'X-RapidAPI-Host': 'horoscope-astrology.p.rapidapi.com'
                }
              };
        
              try {
                const response = await axios.request(options);

                const tarotCardData = response.data?.res || []; // Access the 'res' array within the response data
                setTarotCard(tarotCardData);
              } catch (error) {
                console.error('Error fetching tarot card:', error);
              }
            };
        
            fetchTarotCard();
      }, [])

      return (
            <section className='flex-start flex-col paddings mb-16'>
                  <h1>Categories</h1>
                  <h1>Posts</h1>
                  {tarotCard.length > 0 ? (
                        tarotCard.map((tarot, index) => (
                              <div key={index}>
                                    <p>Card Name: {tarot.name}</p>
                                    <p>Card Meaning: {tarot.desc}</p>
                                    <p>Card Rdesc: {tarot.rdesc}</p>
                                    <p>Card Sequence: {tarot.sequence}</p>
                              </div>
                        ))
                  ) : (
                        <p>No tarot cards available</p>
                  )}
                  <h1>Loadmore</h1>
            </section>
      )
}

export default Home