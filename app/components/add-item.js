import Component from "@ember/component";

export default Component.extend({
  inputable: false,
  actions: {
    editInput() {
      this.toggleProperty("inputable");
    },
    addItem: function(addItem, listId) {
      this.toggleProperty("inputable");
      this.sendAction("addItem", addItem, listId);
    }
  }
});
