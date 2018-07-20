/**
 * This class is the controller for the main view for the application. It is specified as
 * the "controller" of the Main view class.
 *
 * TODO - Replace this content of this view to suite the needs of your application.
 */
Ext.define('mapros.view.main.form.FormController', {
    extend: 'Ext.app.ViewController',

    alias: 'controller.form',

    onSave : function(button) {
        var form = button.up('form').getForm();
        /*console.log("submit");
        if (form.isValid()) {
            form.submit({

                success: function(form, action) {
                   Ext.Msg.alert('Success', action.result.msg);
                },
                failure: function(form, action) {
                    Ext.Msg.alert('Failed', action.result.msg);
                }
            });
        }*/
        let store = Ext.getStore('Master');
        // let store = this.getStore('master');
        let view = this.getView();
        let name = view.down('textfield[name=name]').getValue();
        let email = view.down('textfield[name=email]').getValue();
        let phone = view.down('textfield[name=phone]').getValue();
        store.add({
            name : name,
            email: email,
            phone : phone
        });
        console.log({store});
        // console.log((store.getData().getSource() || store.getData()).getRange());
        return;
    },


});
