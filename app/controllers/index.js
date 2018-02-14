import Controller from "@ember/controller";

export default Controller.extend({
  boxEnabled: false,
  newItem: {},
  itemInfo: {},
  actions: {
    toggleBox() {
      this.toggleProperty("boxEnabled");
    },
    addItem(newItem, listId) {
      if (newItem.name) {
        let addNewItem = this.store.createRecord("item", {
          name: newItem.name,
          desc: "Click Enter a Description."
        });

        this.store.findRecord("list", listId).then(list => {
          list.get("items").then(items => {
            items.pushObject(addNewItem).save();
          });
        });
      }
    },
    selectItem(item) {
      this.set("itemInfo", item);
      this.toggleProperty("boxEnabled");
    }
  }
});
