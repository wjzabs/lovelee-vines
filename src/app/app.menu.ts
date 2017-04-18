import { MenuItem } from './../abs/services/menu-service';

export let initialMenuItems: Array<MenuItem> = [
    {
        text: 'Dashboard',
        icon: 'glyphicon-dashboard',
        route: '/vines/dashboard',
        submenu: null
    },
    {
        text: 'Wines',
        icon: 'glyphicon-filter',
        route: null,
        submenu: [
            {
                text: 'Select',
                icon: 'glyphicon-expand',
                route: null,
                submenu: [
                    {
                        text: 'Wine1',
                        icon: 'glyphicon-filter',
                        route: '/vines/wine-detail/Wine1', 
                        submenu: null                       
                    },
                    {
                        text: 'Wine2',
                        icon: 'glyphicon-filter',
                        route: '/vines/wine-detail/Wine2', 
                        submenu: null                       
                    },
                    {
                        text: 'Wine3',
                        icon: 'glyphicon-filter',
                        route: '/vines/wine-detail/Wine3', 
                        submenu: null                       
                    }                                        
                ]
            },
            {
                text: 'Top 3',
                icon: 'glyphicon-filter',
                route: '/vines/wine-list/3', 
                submenu: null                  
            },
            {
                text: 'Top 10',
                icon: 'glyphicon-filter',
                route: '/vines/wine-list/10', 
                submenu: null                  
            },
            {
                text: 'All',
                icon: 'glyphicon-filter',
                route: '/vines/wine-list/0', 
                submenu: null                  
            }                        
        ]
    },
    {
        text: 'Maintenance',
        icon: 'glyphicon-wrench',
        route: null,
        submenu: [
            {
                text: 'Wine List',
                icon: 'glyphicon-filter',
                route: '/vines/wine-maint', 
                submenu: null                       
            },
            {
                text: 'Settings',
                icon: 'glyphicon-cog',
                route: 'settings', 
                submenu: null                       
            }                                        
        ]
    }        
]