/**
 * This class is the main view for the application. It is specified in app.js as the
 * "mainView" property. That setting automatically applies the "viewport"
 * plugin causing this view to become the body element (i.e., the viewport).
 *
 * TODO - Replace this content of this view to suite the needs of your application.
 */
Ext.define('mapros.view.main.Main', {
    extend: 'Ext.tab.Panel',
    xtype: 'app-main',

    requires: [
        'Ext.plugin.Viewport',
        'Ext.window.MessageBox',

        'mapros.view.main.MainController',
        'mapros.view.main.MainModel',
        'mapros.view.main.List'
    ],

    controller: 'main',
    viewModel: 'main',
    plugins: 'viewport',

    ui: 'navigation',

    tabBarHeaderPosition: 1,
    titleRotation: 0,
    tabRotation: 0,

    header: {
        layout: {
            align: 'stretchmax'
        },
        title: {
            bind: {
                // text: '{name}'
                text: 'MAPROS'
            },
            flex: 0
        },
        // iconCls: 'fa-th-list'
        iconCls: 'fa-qrcode'
    },

    tabBar: {
        flex: 1,
        layout: {
            align: 'stretch',
            overflowHandler: 'none'
        }
    },

    // tbar: {
    //     items: [{
    //         xtype: 'button',
    //         text: 'Logout',
    //         margin: '10 0',
    //         handler: 'onClickButton'
    //     }]
    // }

    responsiveConfig: {
        tall: {
            headerPosition: 'top'
        },
        wide: {
            headerPosition: 'left'
        }
    },

    defaults: {
        bodyPadding: 20,
        tabConfig: {
            plugins: 'responsive',
            responsiveConfig: {
                wide: {
                    iconAlign: 'left',
                    textAlign: 'left'
                },
                tall: {
                    iconAlign: 'top',
                    textAlign: 'center',
                    width: 120
                }
            }
        }
    },

    items: [{
        title: 'Dashboard',
        iconCls: 'fa-home',
        // The following grid shares a store with the classic version's grid as well!
        items: [{
            xtype: 'mainlist'
        }]
    }, {
        title: 'Scanner',
        iconCls: 'fa-chevron-circle-right',
        bind: {
            html: '{loremIpsum}'
        }
    }, {
        title: 'Sequence',
        iconCls: 'fa-chevron-circle-right',
        bind: {
            html: '{loremIpsum}'
        }
    }, {
        title: 'Line',
        iconCls: 'fa-chevron-circle-right',
        bind: {
            html: '{loremIpsum}'
        }
    }]
    // items: [{
    //         xtype: 'button',
    //         text: 'Logout',
    //         margin: '10 0',
    //         handler: 'onClickButton'
    //     }]
});
