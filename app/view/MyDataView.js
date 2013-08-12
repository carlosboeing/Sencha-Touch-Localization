/**
 * Created by carlosboeing on 31/07/13.
 */
Ext.define('LocaleManagerTutorial.view.MyDataView', {
    extend: 'Ext.DataView',

    alias: 'widget.mydataview',

    config: {
        enableLocale: true,
        locales: {
            emptyText: 'MyDataView.emptyText'
        },
        height: 500,
        itemTpl: '{nameLabel}: {name}',
        store: Ext.create('Ext.data.Store', {
            fields: ['name'],
            data: [
            ] })
    },

    getStringLiterals: function(){
        return {
            nameLabel: Ux.locale.Manager.get('MyDataView.nameLabel')
        };
    },

    prepareData: function(data){
        data = this.callParent(arguments);
        return Ext.apply(data, this.getStringLiterals());
    }

});