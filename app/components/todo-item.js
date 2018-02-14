import Component from "@ember/component";

export default Component.extend({
  actions: {
    selectItem(item) {
      this.sendAction("selectItem", item);
    }
  }
});
