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
- "Use my configured grounding lessons while reviewing this session."

## Optional grounding setup

To let the coach consider prior lessons or domain-specific guidance, configure grounding sources after install.

See:

```text
plugins\session-learnings-coach\skills\session-learnings-playbook\references\grounding-sources.md
```

Grounding sources are optional and user-controlled. Do not place private local paths in a shared plugin package.

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
    skills/session-learnings-playbook/references/grounding-sources.md
    README.md, CHANGELOG.md, owners.txt
```
