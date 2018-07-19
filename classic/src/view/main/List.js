/**
 * This view is an example list of people.
 */
Ext.define('mapros.view.main.List', {
    extend: 'Ext.grid.Panel',
    xtype: 'mainlist',

    requires: [
        'mapros.store.Master',
        'mapros.view.main.ListController',
        'mapros.view.main.FormInput'
    ],

    controller: 'list',

    title: 'Grid Master',

    store: {
        type: 'master'
    },

    tbar: {
        items: [{
            xtype: 'button',
            name: 'tambah',
            text: 'Add Item',
            listeners: {
                click: 'addOnClick'
            }
        }]
    },

    columns: [
        { text: 'Name',  dataIndex: 'name' },
        { text: 'Email', dataIndex: 'email', flex: 1 },
        { text: 'Phone', dataIndex: 'phone', flex: 1 }
    ],

    listeners: {
        select: 'onItemSelected'
    }
});
