// Pages
import Home from '~/views/Home';
import Contact from '~/views/Contact';
import GoodCook from '~/views/GoodCook';
import Interview from '~/views/Interview';
import Introduce from '~/views/Introduce';
import Policy from '~/views/Policy';
import Profile from '~/views/Profile';

// Public routes
const publicRoutes = [
    { path: '/', component: Home },
    { path: '/contact', component: Contact },
    { path: '/goodcook', component: GoodCook },
    { path: '/interview', component: Interview },
    { path: '/introduce', component: Introduce },
    { path: '/policy', component: Policy },
    { path: '/profile', component: Profile },
    // { path: '/search', component: Search, layout: null },
];

const privateRoutes = [];

export { publicRoutes, privateRoutes };
