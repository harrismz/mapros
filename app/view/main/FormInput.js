Ext.define('mapros.view.main.FormInput',{
  extend: 'Ext.form.Panel',
  xtype: 'forminput',

  requires: [
    'mapros.store.Master',
    'mapros.view.main.form.FormController'
  ],

  controller: 'form',
  // title: 'Simple Form',
    bodyPadding: 5,
    width: 350,

    // The form will submit an AJAX request to this URL when submitted
    // url: 'save-form.php',

    // Fields will be arranged vertically, stretched to full width
    layout: 'anchor',
    defaults: {
        anchor: '100%'
    },

    store: {
        type: 'master'
    },

    // The fields
    defaultType: 'textfield',
    items: [{
        fieldLabel: 'Name',
        name: 'name',
        allowBlank: false
    },{
        fieldLabel: 'Email',
        name: 'email',
        allowBlank: false
    },{
        fieldLabel: 'Phone',
        name: 'phone',
        allowBlank: false
    }],

    // Reset and Submit buttons
    buttons: [{
        text: 'Reset',
        handler: function() {
            this.up('form').getForm().reset();
        }
    }, {
        text: 'Submit',
        // formBind: true, //only enabled once the form is valid
        // disabled: true,
        handler: 'onSave'
    }]
});
