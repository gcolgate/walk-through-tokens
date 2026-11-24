# Walk Through Creatures

A Foundry VTT module for the D&D 5e system. It lets tokens walk through hostile creatures. It listens to the system's `dnd5e.determineOccupiedGridSpaceBlocking` hook and clears the blocking-token set. It does not change D&D 5e's extra movement cost for occupying a creature's space.

This module is separate from [Iris Rolls](https://github.com/gcolgate/iris-rolls).

## Requirements

- Foundry Virtual Tabletop **14**
- [D&D 5e](https://foundryvtt.com/packages/dnd5e) 5.3.3 or later (verified on 6.0.1)

## Install

**From a Manifest URL** (Foundry Setup or The Forge):

```
https://github.com/gcolgate/walk-through-tokens/releases/latest/download/module.json
```

**From this repo** (local development): copy or clone the `walk-through-tokens` folder into `{userData}/Data/modules/walk-through-tokens`.

## What's new in 1.0.1

- Compatible with all Foundry VTT **14** builds (minimum `14`, not a specific 14.xxx patch).

## What's new in 1.0.0

- Tokens can walk through hostile creatures while the world setting is on.
- Occupying a creature's space still costs extra movement when D&D 5e movement automation is set to Full.
- The world setting **Allow walking through creatures** is on by default. Turn it off to restore stock blocking without disabling the module.

See the [1.0.0 release notes](https://github.com/gcolgate/walk-through-tokens/releases/tag/1.0.0).

## How it works

Enable it in Foundry: **Manage Modules** → **Walk Through Creatures**.

The world setting **Allow walking through creatures** is on by default. While it is on, creature tokens do not block movement. Walking through a creature still costs extra movement if D&D 5e movement automation is set to Full. Turn the setting off to restore stock blocking without disabling the module.

## License

MIT. See [LICENSE](LICENSE).
