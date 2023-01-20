import { DashboardOutlined, ProfileOutlined } from '@ant-design/icons';

// icons
const icons = {
    DashboardOutlined,
    ProfileOutlined
};

const menuItem = {
    menu: [
        {
            label: 'Voir encheres',
            url: '/listesencheres',
            icon: icons.ProfileOutlined
        },
        {
            label: 'Historiques',
            url: '/menu',
            icon: icons.DashboardOutlined
        }
    ]
};

export default menuItem;
