ContactManager.module("ContactsApp.List", function (List, ContactManager, Backbone, Mn, $, _) {
  List.Contact = Mn.ItemView.extend({
    tagName: "li",
    template: "#contact-list-item"
  });

  List.Contacts = Mn.CollectionView.extend({
    tagName: "ul",
    itemView: List.Contact,
    childView: List.Contact
  });
});
