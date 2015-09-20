ContactManager.module("ContactsApp.List", function (List, ContactManager, Backbone, Mn, $, _) {
  List.Controller = {
    listContacts: function () {
      var contacts = ContactManager.request("contact:entities");

      var contactsListView = new List.Contacts({
        collection: contacts
      });

      contactsListView.on("itemview:contact:delete", function (childView, model) {
        contacts.remove(model);
      });

      ContactManager.mainRegion.show(contactsListView);
    }
  };
});
