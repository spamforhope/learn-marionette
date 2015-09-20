ContactManager.module("ContactsApp.List", function (List, ContactManager, Backbone, Mn, $, _) {
  List.Contact = Mn.ItemView.extend({
    tagName: "tr",
    template: "#contact-list-item",

    events: {
      "click": "highlightName"
    },

    highlightName: function () {
      this.$el.toggleClass("warning");
    }
  });

  List.Contacts = Mn.CompositeView.extend({
    tagName: "table",
    className: "table table-hover",
    template: "#contact-list",
    itemView: List.Contact,
    childView: List.Contact,
    itemViewContainer: "tbody"
  });
});
