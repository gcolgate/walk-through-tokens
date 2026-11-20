const MODULE_ID = "walk-through-tokens";
const SETTING_KEY = "allowWalkThrough";

Hooks.once("init", () => {
  game.settings.register(MODULE_ID, SETTING_KEY, {
    name: "Allow walking through creatures",
    hint: "When enabled, creature tokens do not block movement. Walking through a creature still costs extra movement if D&D 5e movement automation is set to Full.",
    scope: "world",
    config: true,
    type: Boolean,
    default: true
  });
});

Hooks.once("ready", () => {
  if (game.system.id !== "dnd5e") return;

  Hooks.on("dnd5e.determineOccupiedGridSpaceBlocking", (_space, _token, _options, found) => {
    if (!game.settings.get(MODULE_ID, SETTING_KEY)) return;
    found?.clear?.();
    if (Array.isArray(found)) found.length = 0;
  });
});
