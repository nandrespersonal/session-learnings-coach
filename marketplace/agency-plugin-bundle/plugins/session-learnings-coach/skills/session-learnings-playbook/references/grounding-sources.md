# Grounding sources

Grounding sources let Session Learnings Coach use prior lessons without hardcoding personal, team, or domain-specific knowledge into the skill.

## Purpose

Use grounding sources when the user wants retrospectives to consider durable lessons from previous sessions, domain-specific debugging guides, exact-instruction rules, or team operating principles.

Examples:

- prior session learnings
- Power Automate troubleshooting lessons
- tool-calling error patterns
- team-specific retrospective principles
- product-specific prompt guidance

## Configuration model

Users can provide grounding sources in one of three ways:

1. Directly in the prompt: "Use this file as grounding: `<path>`."
2. In a local configuration file that lists source paths.
3. As a product-provided reference bundle included with the plugin.

Do not hardcode user-specific paths in the reusable skill logic.

## Suggested local config

Create a local-only file next to the installed skill, or in a user-controlled config location:

```markdown
# Local grounding sources

## personal-session-learnings

Type:
local-markdown

Path:
<user-provided-path-to-learnings-file>

Privacy:
personal

Use for:
Compare new retrospectives against prior personal lessons.

## team-debugging-lessons

Type:
local-markdown

Path:
<user-provided-path-to-team-safe-lessons-file>

Privacy:
team-shareable

Use for:
Identify repeated debugging and validation patterns.
```

## JSON-style shape

```json
{
  "groundingSources": [
    {
      "name": "personal-session-learnings",
      "type": "local-markdown",
      "path": "user-provided-path",
      "privacy": "personal",
      "useFor": "Compare new retrospectives against prior personal lessons."
    },
    {
      "name": "domain-debugging-lessons",
      "type": "reference-bundle",
      "path": "references/domain-debugging-lessons.md",
      "privacy": "team-shareable",
      "useFor": "Apply domain-specific debugging principles."
    }
  ]
}
```

## Runtime behavior

When the user asks to capture or review learnings:

1. Ask whether they want to use configured grounding sources when the request mentions prior lessons, domain lessons, grounding, or recurring patterns.
2. Load only user-approved or explicitly configured sources.
3. Compare the current session against those sources.
4. Identify whether the new learning is:
   - new
   - a recurrence of an existing pattern
   - a sharper version of an existing learning
   - a candidate for promotion
5. Record source names or paths in `groundingReferences`.

## Privacy rules

- Do not publish private grounding files.
- Do not copy private source text into team-safe exports.
- Do not assume a local path exists for every user.
- Do not silently load arbitrary files.
- Do not treat grounding sources as telemetry.

