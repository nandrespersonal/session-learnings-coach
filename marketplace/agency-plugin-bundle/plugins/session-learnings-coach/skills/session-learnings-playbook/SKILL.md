---
name: session-learnings-playbook
description: >
  Grounding for Session Learnings Coach. Defines learning types, privacy
  levels, storage formats, retrospective flow, better-prompt generation, and
  promotion paths.
---

# Session Learnings Playbook

Use this skill when capturing, reviewing, exporting, or promoting session learnings.

## Product promise

Turn AI-assisted work sessions into reusable lessons, better prompts, and durable operating habits.

## Core entry fields

Each learning should include:

- `id`
- `date`
- `title`
- `weight`
- `who`
- `type`
- `privacy`
- `principle`
- `context`
- `action`
- `betterPrompt`
- `promotionStatus`
- `tags`
- `groundingReferences`

## Weight values

- `critical`
- `important`
- `notable`

## Who values

- `user`
- `ai`
- `both`
- `team`

## Privacy values

- `personal`
- `team-shareable`
- `sensitive`
- `do-not-share`

## Promotion statuses

- `captured`
- `candidate-rule`
- `promoted-personal-rule`
- `promoted-team-guidance`
- `archived`

## Configurable grounding references

Before capturing or reviewing learnings, check whether the user has configured grounding references. Grounding references are optional, user-controlled sources of prior lessons, domain-specific debugging patterns, or workflow principles that should inform the retrospective.

Use:

- `references/grounding-sources.md` for the configuration model and setup instructions.

Grounding references may point to local Markdown files, local JSON files, exported learning bundles, or product-provided reference packs. They must not be hardcoded in the skill. If no grounding references are configured, continue with the normal retrospective flow and say that no additional grounding source was loaded.

When grounding references are available:

1. Load only the sources explicitly configured or provided by the user.
2. Treat those sources as context, not as facts to copy verbatim.
3. Use them to identify repeated patterns, sharper principles, and better future prompts.
4. Preserve privacy boundaries from the source material.
5. Cite the grounding source path or bundle name in `groundingReferences`.

## References

- `references/learning-schema.md`
- `references/privacy-and-export.md`
- `references/promotion-pipeline.md`
- `references/marketplace-positioning.md`
- `references/grounding-sources.md`
