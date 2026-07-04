# Session Learnings Coach

> **Status:** v0.1.0 concept-preview plugin package
> **For:** individuals and teams using AI assistants for real work

Session Learnings Coach helps turn AI-assisted work sessions into reusable lessons, better prompts, and durable operating principles.

It is a lightweight retrospective coach. It helps users ask what happened, what pattern appeared, what should change next time, and whether the lesson should become a personal rule, team guidance, or improved prompt.

## What it does

- Runs end-of-session retrospectives.
- Captures lessons as structured entries.
- Separates one-off mistakes from repeated patterns.
- Generates better future prompts from lessons.
- Optionally uses configurable grounding references from prior sessions or domain lesson files.
- Classifies privacy level before team sharing.
- Helps promote important learnings into durable rules.
- Supports Markdown for humans and JSON for future tools.

## What it does not do

- It does not automatically monitor every session.
- It does not collect telemetry.
- It does not publish private lessons without review.
- It does not hardcode personal or team lesson files; grounding sources must be configured or provided by the user.
- It does not replace Copilot Memory.
- It does not replace a team wiki or formal knowledge-management platform.

## Suggested output files

- `learnings.md`
- `learnings.json`
- `team-learnings.md`

## Grounding references

Users can configure optional grounding sources so the coach can compare a new retrospective against prior lessons or domain-specific guidance without hardcoding private knowledge in the skill.

See:

```text
references\grounding-sources.md
```

## Feedback welcome

This is an early product package. Feedback is welcome, especially on additional learning types, privacy levels, grounding source formats, export formats, and promotion destinations.
