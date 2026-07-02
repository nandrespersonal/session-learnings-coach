# Session Learnings Coach — install bundle

A Copilot CLI plugin for turning AI-assisted work sessions into reusable lessons, better prompts, and durable operating principles.

## Install

1. Unzip this bundle anywhere on your machine.
2. In Copilot CLI, register the local marketplace by pointing at the `plugins` folder:

   ```text
   /plugin marketplace add <path-to-unzipped-bundle>\plugins
   ```

3. Install the plugin:

   ```text
   /plugin install session-learnings-coach@session-learnings
   ```

## Use it

Select **Session Learnings Coach** from `/agent`, then ask:

- "Run an end-of-session retrospective."
- "What did we learn from this session?"
- "Turn this failure into a reusable lesson."
- "What prompt would have avoided this?"
- "Create a team-safe summary of these learnings."

## Uninstall

```text
/plugin uninstall session-learnings-coach
```

## What's inside

```text
plugins/
  marketplace.json
  session-learnings-coach/
    .claude-plugin/plugin.json
    agency.json
    agents/session-learnings-coach.md
    skills/session-learnings-playbook/...
    README.md, CHANGELOG.md, owners.txt
```
