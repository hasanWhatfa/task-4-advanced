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
        activeImage:'/task-4-advanced/asstes/icons/searchHomeW.svg',
        image:'/task-4-advanced/asstes/icons/searchHomeIcon.svg',
        title:'Search Apartment',
        text:'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Imperdiet tempus felis vitae.'
    },
    {
        id:2,
        activeImage:'/task-4-advanced/asstes/icons/handHome.svg',
        image:'/task-4-advanced/asstes/icons/handHomeBlue.svg',
        title:'Select Apartment',
        text:'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Imperdiet tempus felis vitae.'
    },
    {
        id:3,
        activeImage:'/task-4-advanced/asstes/icons/correctHomeIconW.svg',
        image:'/task-4-advanced/asstes/icons/correctHome.svg',
        title:'Confirm Apartment',
        text:'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Imperdiet tempus felis vitae.'
    }
];