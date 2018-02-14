import Component from "@ember/component";
import { inject as service } from "@ember/service";

export default Component.extend({
  store: service(),
  actions: {
    selectItem(item) {
      this.sendAction("selectItem", item);
    },
    addItem: function(addItem, listId) {
      this.sendAction("addItem", addItem, listId);
    }
  }
});
