var ContactManager = new Mn.Application();

ContactManager.addRegions({
  mainRegion: "#main-region"
});

ContactManager.on("start", function () {
  ContactManager.ContactsApp.List.Controller.listContacts();
});
