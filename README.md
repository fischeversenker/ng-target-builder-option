# Reproduction repository for issue with a `target` builder option

This repository contains an app called `target-builder-option` from a new workspace (created with `ng new target-builder-option`) and
a custom Angular Builder in `projects/builders`. The app was not changed after creating the workspace.
The builder is set up as a local architect target called `repro` for the app.

## Quick start

- Install the dependencies with `npm install`
- build the builder with `npm run build:builders`
- run the local builder with `ng run target-builder-option:repro` 
- see the error on the console: `Error: Invalid values: Argument: target, Given: "target-builder-option:repro", Choices: "app", "library"`

## "Fixing" the problem

Remove the `enum` property from the `target` property in file `projects/builders/src/schema.json`.
Now rebuild the builder and rerun the architect to see that the error is now gone.
