// Pages
import Home from '~/views/Home';
import Following from '~/views/Following';
import Profile from '~/views/Profile';
import Upload from '~/views/Upload';
import Search from '~/views/Search';

// Public routes
const publicRoutes = [
    { path: '/', component: Home },
    { path: '/following', component: Following },
    { path: '/profile', component: Profile },
    { path: '/upload', component: Upload },
    { path: '/search', component: Search, layout: null },
];

const privateRoutes = [];

export { publicRoutes, privateRoutes };
