import { configureStore } from "@reduxjs/toolkit";

// It must be the same name of my slice.
import counter from "./slices/counter";

export default configureStore({
  reducer: { counter },
});
