import Component from "@ember/component";
import { inject as service } from "@ember/service";

export default Component.extend({
  store: service(),
  actions: {
    addList() {
      this.get("store")
        .createRecord("list", {
          name: "User Added List"
        })
        .save();
    }
  }
});
