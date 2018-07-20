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

    // store: {
    //     type: 'master',
    // },
    store: 'Master',

    plugins: {
        ptype: 'rowediting',
        clicksToEdit: 2,
        listeners: {
            cancelEdit: function(rowEditing, context) {
                // Canceling editing of a locally added, unsaved record: remove it
                if (context.record.phantom) {
                    var store = Ext.data.StoreManager.lookup('Master');
                    store.remove(context.record);
                }
            }
        }
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
        { text: 'Name',  dataIndex: 'name',
            editor: {
                completeOnEnter: false,

                // If the editor config contains a field property, then
                // the editor config is used to create the Ext.grid.CellEditor
                // and the field property is used to create the editing input field.
                field: {
                    xtype: 'textfield',
                    allowBlank: false
                }
            }
        },
        { text: 'Email', dataIndex: 'email', flex: 1,
            editor: {
                completeOnEnter: false,
                field: {
                    xtype: 'textfield',
                    allowBlank: false
                }
            }
        },
        { text: 'Phone', dataIndex: 'phone', flex: 1,
            editor: {
                completeOnEnter: false,
                field: {
                    xtype: 'textfield',
                    allowBlank: false
                }
            }
        },
        {
            xtype:'actioncolumn',
            width:50,
            items: [{
                iconCls: 'x-fa fa-trash',
                tooltip: 'Delete',
                handler: 'onDelete'
                // handler: function(grid, rowIndex, colIndex) {
                //     let store = Ext.getStore('Master');
                //     var rec = grid.store.getAt(rowIndex);
                //     store.remove(rec);
                //     // console.log("Delete = " + rec.get('name'));
                //     // console.log(store);
                // }
            }]
        }
    ],

    // selModel: 'cellmodel',
    // plugins: {
    //     ptype: 'cellediting',
    //     clicksToEdit: 2
    // },

    // listeners: {
    //     select: 'onItemSelected'
    // }
});
