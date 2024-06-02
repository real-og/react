import Connect from './components/Connect';
import Home from './components/Home';
import Authorization from './components/Authorization';
import ProfilesList from './components/ProfilesList';
import ProfilesManage from './components/ProfilesManage';
import NFTList from './components/NFTList';
import NFTDetails from './components/NFTDetails';
import { compareVersions } from '@tma.js/sdk-react';


const routes = [
  {
    path: '/',
    component: Home,
    exact: true,
  },
  {
    path: '/connect',
    component: Connect,
  },
  {
    path: '/profiles-manage',
    component: ProfilesManage,
  },
  {
    path: '/profiles',
    component: ProfilesList,
  },
  {
    path: '/auth',
    component: Authorization,
  },
  {
    path: '/nft-list',
    component: NFTList,
  },
  {
    path: '/nft',
    component: NFTDetails,
  },
];

export default routes;
