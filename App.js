import React from 'react';

export const data = [
    {
        id: 1,
        date: "May 2018",
        title: "Panajachel, Lake Atitlán",
        description: "The busiest and most built-up lakeside town, Panajachel ('Pana') is the gateway to Lago de Atitlán for most travelers.",
        coverImg: "https://tse1.mm.bing.net/th?id=OIP.2_aYjVSO-dycZ7DgRVxEIgHaEK&pid=Api&P=0&h=180",
        country: "GUATEMALA",
        googleMapLink: "https://tse4.mm.bing.net/th?id=OIP.pBvdmXFYp5MdFikBP0SgPAHaE8&pid=Api&P=0&h=180",
    },
    {
        id: 2,
        date: "December 2019",
        title: "Secret Beach",
        description: "Experience the beautiful landscape and meet new friends all while enjoying pristine warm waves of the Atlantic.",
        coverImg: "https://tse4.mm.bing.net/th?id=OIP.X9ddG2GCQHhdmjgnDViuvQHaD0&pid=Api&P=0&h=180",
        country: "BELIZE",
        googleMapLink: "https://www.google.com/maps/search/belize+secret+beach/@18.0171292,-87.9672513,13z/data=!3m1!4b1?entry=ttu",
    }
];

export default function Cards(props) {
    return (
        <div className='card-container'>
            {data.map(item => (
                <div className='card' key={item.id}>
                    <section className='column-left'>
                        <img className="card-img" src={item.coverImg} alt="images" />
                    </section>
                    <section className='column-right'>
                        <span className='material-symbols-outlined'>location_on</span>
                        <span className="card-country">{item.country} </span>
                        <a href={item.googleMapLink}>View on Google Maps</a>
                        <h3 className="card-country-title">{item.title}</h3>
                        <h4 className="card-date">{item.date}</h4>
                        <p>{item.description}</p>
                        <span>Read more..</span>
                    </section>
                </div>
            ))}
        </div>
    )
}