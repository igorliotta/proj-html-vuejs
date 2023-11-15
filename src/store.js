import { reactive } from 'vue';

export const store = reactive({
    menuLogoSrc: '../img/menulogo.png',
    menuSearchSrc: '../img/search.svg',
    menuCartSrc: '../img/cart.svg',
    menuItems: [
        {
            name: 'Home',
            iconSrc: '../img/image.svg',
            id: '0',
        },
        {
            name: 'Pages',
            iconSrc: '../img/image.svg',
            id: '1',
        },
        {
            name: 'Tournament',
            id: '2',
        },
        {
            name: 'Shop',
            iconSrc: '../img/image.svg',
            id: '3',
        },
        {
            name: 'Blog',
            iconSrc: '../img/image.svg',
            id: '4',
        },
        {
            name: 'Contact',
            id: '5',
        },
    ],
    socialsSrc: ['../img/facebook.svg','../img/twitter.svg','../img/linkedin.svg','../img/instagram.svg'],
    headerTitle: 'Are you ready for your next challenge?',
    arrowRightSrc: '../img/image-12.svg',
    playBtnSrc: '../img/image-9.svg',
})