import { createMapper } from "@automapper/core";
import { classes } from "@automapper/classes";

export const mapper = createMapper({
  name: "paire",
  pluginInitializer: classes,
});
