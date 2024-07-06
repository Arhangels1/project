import Swiper from 'swiper';
import 'swiper/css';
import { Navigation } from 'swiper/modules';
import 'swiper/css/navigation';

const swiper = new Swiper('.projects-swiper', {

    modules: [Navigation],
    navigation: {
        nextEl: '.projects-button-next',
        prevEl: '.projects-button-prev',
    },
    
    keyboard: {
        enabled: true,
        onlyInViewport: true,
    },
});