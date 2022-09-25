import { entity } from "simpler-state";

export const count = entity(0);

export const increment = () => {
  const getCurrentState = count.get();

  count.set(getCurrentState + 1);
};

// .get() is used to get current state
// .set() to update current state value
// .use() use current state value in components
