ContactManager.module("ContactsApp.List", function (List, ContactManager, Backbone, Mn, $, _) {
  List.Contact = Mn.ItemView.extend({
    tagName: "tr",
    template: "#contact-list-item",

    events: {
      "click": "highlightName",
      "click button.js-delete": "deleteClicked"
    },

    highlightName: function () {
      this.$el.toggleClass("warning");
    },
    deleteClicked: function (e) {
      e.stopPropagation();
      this.trigger("contact:delete", this.model);
    },
    remove: function () {
      var self = this;
      this.$el.fadeOut(function () {
        Mn.ItemView.prototype.remove.call(self);
      });
    }
  });

  List.Contacts = Mn.CompositeView.extend({
    tagName: "table",
    className: "table table-hover",
    template: "#contact-list",
    itemView: List.Contact,
    childView: List.Contact,
    childViewEventPrefix: "itemview",
    itemViewContainer: "tbody"
  });
});
