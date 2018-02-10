export default function() {
  this.get("/", function() {
    return {
      data: [
        {
          type: "list",
          id: 0,
          attributes: {
            title: "Default List"
          }
        }
      ]
    };
  });
}
