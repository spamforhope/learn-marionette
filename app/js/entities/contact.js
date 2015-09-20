ContactManager.module("Entities", function (Entities, ContactManager, Backbone, Mn, $, _) {
  Entities.Contact = Backbone.Model.extend({
    defaults: {
      "phoneNumber": "No phone number"
    }
  });
  
  Entities.ContactCollection = Backbone.Collection.extend({
    model: Entities.Contact,
    comparator: "firstName"
  });
  
  var contacts;
  
  var initializeContacts = function () {
    contacts = new Entities.ContactCollection([
      {
        id: 1,
        firstName: "Bob",
        lastName: "Brigham",
        phoneNumber: "555-444"
      },
      {
        id: 2,
        firstName: "Alice",
        lastName: "Arten",
        phoneNumber: "555-666"
      },
      {
        id: 3,
        firstName: "Anton",
        lastName: "Yatsenyuk",
        phoneNumber: "999-333"
      }
    ]);
  };
  
  var API = {
    getContactEntities: function () {
      if (contacts === undefined) {
        initializeContacts()
      }
      return contacts;
    }
  };
  
  ContactManager.reqres.setHandler("contact:entities", function () {
    return API.getContactEntities();
  });
});