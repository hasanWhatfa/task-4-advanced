interface FooterLinkObject {
    title:string,
    links: FooterLinks[]
}

type FooterLinks = {
    linkName:string,
    linkTo:string
}
export const footerLinksData : FooterLinkObject[] = [
    {
        title:'Service',
        links:[
            {
                linkName:'Payment & Tax',
                linkTo:'payment'
            },
            {
                linkName:'Features',
                linkTo:'features'
            },
            {
                linkName:'View Booking',
                linkTo:'viewBooking'
            },
            {
                linkName:'Support',
                linkTo:'support'
            }
        ]
    },
    {
        title:'About',
        links:[
            {
                linkName:'About us',
                linkTo:'about'
            },
            {
                linkName:'News',
                linkTo:'news'
            },
            {
                linkName:'Pricing',
                linkTo:'pricing'
            },
            {
                linkName:'New Property',
                linkTo:'newProperty'
            }
        ]
    }
]

interface ContactLinks{
    img:string , 
    alt:string
}

export const contactLinks : ContactLinks[] = [
    {
        img:'/asstes/icons/facebook-fill.svg',
        alt:'facebook logo'
    },
    {
        img:'/asstes/icons/twitter-fill.svg',
        alt:'twitter logo'
    },
    {
        img:'/asstes/icons/linkedin-fill.svg',
        alt:'linkedin logo'
    }
]