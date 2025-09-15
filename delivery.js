import stores from "./store.js";
import { user } from "./user.js";

function delivery(store, user) {
  console.log("New Delivery for " + user.name + " from " + store.name);
}

delivery(stores[0], user);
delivery(stores[1], user);