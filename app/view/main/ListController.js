/**
 * This class is the controller for the main view for the application. It is specified as
 * the "controller" of the Main view class.
 *
 * TODO - Replace this content of this view to suite the needs of your application.
 */
Ext.define('mapros.view.main.ListController', {
    extend: 'Ext.app.ViewController',

    alias: 'controller.list',

    addOnClick: function() {
      let modal = Ext.create('Ext.window.Window',{
        title: 'Form Input',
        width: 400,
        layout: 'fit',
        items:[
          {xtype: 'forminput'}
        ]
      });

      modal.show();
    },

    onDelete(sender, record) {
        Ext.Msg.confirm('Confirm', 'Are you sure?', 'onConfirm', this);
    },

    onDelete(grid,rowIndex,colIndex) {
        console.log({
            grid,
            rowIndex,
            colIndex
        })
        let store = Ext.getStore('Master');
        let record = grid.store.getAt(rowIndex);
        Ext.Msg.confirm('Delete Record', 'Are you sure you want delete ?',
            function(button,window) {
                if (button == 'yes') {
                    grid.store.remove(record);
                } else {
                    
                }
            }
        );
    },

    // onChange(grid,rowIndex,colIndex) {
        // console.log({
        //     grid,
        //     rowIndex,
        //     colIndex
        // });
    // }
    // onItemSelected: function (sender, record) {
    //     Ext.Msg.confirm('Confirm', 'Are you sure?', 'onConfirm', this);
    // },
    //
    // onConfirm: function (choice) {
    //     if (choice === 'yes') {
    //         Ext.Msg.alert("Alert","Harris bau !");
    //     } else {
    //       Ext.Msg.alert("Alert","Harris ganteng !");
    //     }
    // }
});
