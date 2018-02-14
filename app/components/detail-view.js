import Component from "@ember/component";
import { inject as service } from "@ember/service";

export default Component.extend({
  store: service(),
  editName: false,
  editDesc: false,
  actions: {
    toggleBox() {
      this.sendAction("toggleBox");
    },
    toggleEditState(element) {
      if (element === "name") {
        this.toggleProperty("editName");
      } else if (element === "desc") {
        this.toggleProperty("editDesc");
      }
    },
    editItemName(newItem, id) {
      if (newItem.name) {
        this.toggleProperty("editName");
        let editItem = this.get("store").findRecord("item", id);

        let that = this;
        editItem.then(function(item) {
          item.set("name", newItem.name);
          item.save();
          that.set("newItem", {});
        });
      }
    },
    editItemDesc(newItem, id) {
      if (newItem.desc) {
        this.toggleProperty("editDesc");
        let editItem = this.get("store").findRecord("item", id);

        let that = this;
        editItem.then(function(item) {
          item.set("desc", newItem.desc);
          item.save();
          that.set("newItem", {});
        });
      }
    },

    delItem(item) {
      console.log(item.id);
      let comfirm = confirm("Are you sure?");
      if (comfirm) {
        this.get("store")
          .peekRecord("item", item.id)
          .destroyRecord();

        this.sendAction("toggleBox");
      }
    }
  }
});
