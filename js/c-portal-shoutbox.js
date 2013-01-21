/*************************************************
 * Models
 *************************************************/
$(document).ready(function() {
/**
 * A shoutbox consists of individual shouts
 */
Shout = Backbone.Model.extend({
    // each shout has a nickname and a text
    defaults: {
        nickname: 'bernd',
        text: 'Bernd erzählt vom Krieg.'
    },

    initialize: function(){

    }
});

var ShoutList = Backbone.Collection.extend({
    model: Shout
});

/*************************************************
 * Views
 *************************************************/

ShoutView = Backbone.View.extend({
    template: Handlebars.compile($('#shout_template').html()),
    tagName: "tr",

    initialize: function(){
        // do nothing
    },

    render: function() {
        this.$el.append((this.template(this.model.toJSON())));
        return this;
    },

    assign : function (view, selector) {
        view.setElement(this.$(selector)).render();
    }
});

ShoutBoxView = Backbone.View.extend({

    el: $("#shoutbox_container"),

    initialize: function(){
        this._myViews = {}; // view cache
        _(this).bindAll('add');
        this.model.bind('add', this.add);
        this.render();
        this.addAll();
    },

    add: function(m) {
        var myShoutView = new ShoutView({
            model: m
        });

        // cache the view
        this._myViews[m.get('text')] = myShoutView;

        // single model rendering
        // like appending <tr> or <li> elements
        myShoutView.setElement(this.$('.bla')).render();

        return this;
    },

    addAll: function() {
        this.model.each(this.add, this);
    },

    render: function(){
        // Compile the template using Handlebars
        var bla = $('#shoutbox_template').html();
        var template = Handlebars.compile(bla);
        var html = template({});
        // Load the compiled HTML into the Backbone "el"
        this.$el.html(html);
    }
});
    var test_json = '[{"nickname": "dazz", "text": "war schick"}, {"nickname": "xex", "text": "Vielleicht könnte man ja hier über die Ergenisse des Ingress Stammtischs am Freitag etwas schreiben. Ich kann leider nicht anwesend sein."}]';

    var myShoutList = new ShoutList(JSON.parse(test_json));

    console.log(myShoutList.models);

    var shoutBoxApp = new ShoutBoxView({model:myShoutList, el:'#shoutbox_container'});
});
