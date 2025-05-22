interface HowItWorksObject{
    id:number,
    activeImage:string,
    image:string,
    title:string,
    text:string
}


export const howItWorksData :HowItWorksObject[]=[
    {
        id:1,
        activeImage:'/asstes/icons/searchHomeW.svg',
        image:'/asstes/icons/searchHomeIcon.svg',
        title:'Search Apartment',
        text:'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Imperdiet tempus felis vitae.'
    },
    {
        id:2,
        activeImage:'/asstes/icons/handHome.svg',
        image:'/asstes/icons/handHomeBlue.svg',
        title:'Select Apartment',
        text:'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Imperdiet tempus felis vitae.'
    },
    {
        id:3,
        activeImage:'/asstes/icons/correctHomeIconW.svg',
        image:'/asstes/icons/correctHome.svg',
        title:'Confirm Apartment',
        text:'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Imperdiet tempus felis vitae.'
    }
];