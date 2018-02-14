import Component from "@ember/component";
import { inject as service } from "@ember/service";

export default Component.extend({
  store: service(),
  editingName: false,
  editingDesc: false,
  actions: {
    toggleBox() {
      this.sendAction("toggleBox");
    },
    toggleEditState(element) {
      if (element === "name") {
        this.toggleProperty("editingName");
      } else if (element === "description") {
        this.toggleProperty("editingDesc");
      }
    },
    editItemName(newItem, id) {
      if (newItem.name) {
        this.toggleProperty("editingName");
        let editItem = this.get("store").findRecord("item", id);

        let that = this;
        editItem.then(function(item) {
          item.set("name", newItem.name);
          item.save();
          that.set("newItem", {});
        });
      }
    },
    editItemDescription(newItem, id) {
      if (newItem.description) {
        this.toggleProperty("editingDesc");
        let editItem = this.get("store").findRecord("item", id);

        let that = this;
        editItem.then(function(item) {
          item.set("description", newItem.description);
          item.save();
          that.set("newItem", {});
        });
      }
    },

    delItem(item) {
      console.log(item.id);
      let comfirm = confirm("Are you sure?");
      if (comfirm) {
        let thisItem = this.get("store")
          .peekRecord("item", item.id)
          .destroyRecord();

        this.sendAction("toggleBox");
      }
    }
  }
});
