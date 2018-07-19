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
        height: 200,
        layout: 'fit',
        items:[
          {xtype: 'forminput'}
        ]
      });

      modal.show();
    }

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
