interface heroMain {
    title:string,
    text:string,
}
const heroMainData : heroMain = 
    {
        title:"Discover a place you will love to live",
        text:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Imperdiet tempus felis vitae sit est quisque.",
    }


export {heroMainData}



interface heroCards{
    img:string,
    title:string,
    dcs:string
}

const heroCardsData : heroCards[] =[
    {
        img:'/asstes/icons/locationIcon.svg',
        title:'Location',
        dcs:'Ahmedabad, India'
    },
    {
        img:'/asstes/icons/dollarIcon.svg',
        title:'Price',
        dcs:'$1000 - $10,000'
    },
    {
        img:'/asstes/icons/houseIcon.svg',
        title:'Type of Property',
        dcs:'Apartment'
    }
]

export {heroCardsData}