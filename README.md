# Session Learnings Coach

Session Learnings Coach is a concept-preview plugin package for turning AI-assisted work sessions into reusable lessons, better prompts, and durable operating principles.

It is not a memory system, telemetry collector, compliance archive, or team wiki. It is a lightweight retrospective workflow that helps a user or team ask:

```text
What did we learn that should change how we work next time?
```

## What this is

Session Learnings Coach helps capture higher-order lessons from real work sessions:

- what worked
- what failed
- what pattern repeated
- which prior lessons or grounding sources apply
- what prompt would have helped
- what rule or habit should change
- what should be shared with a team
- what should remain private

The product is intentionally humble. It does not claim to solve knowledge management. It provides a structured way to turn session experience into reusable practice.

## What this is not

- not a telemetry collector
- not automatic surveillance of every session
- not a replacement for Copilot Memory
- not a compliance audit log
- not a full knowledge-management platform
- not a team wiki by itself
- not a tool that publishes private lessons without review
- not a tool that hardcodes personal or team lesson files into reusable skill logic

## Product promise

Session Learnings Coach helps individuals and teams convert AI-assisted work into reusable lessons, better prompts, and durable operating habits.

## Core artifacts

| Artifact | Purpose |
|---|---|
| `learnings.md` | Human-readable learning journal |
| `learnings.json` | Optional machine-readable learning records |
| `team-learnings.md` | Sanitized team-shareable export |
| `grounding-sources.md` | Configuration model for optional prior-lesson/domain grounding |

## Grounding references

Session Learnings Coach can use optional grounding references when a user wants a retrospective to consider prior lessons, recurring patterns, or domain-specific guidance.

Grounding sources are user-configured. They may point to local Markdown files, local JSON files, exported learning bundles, or product-provided reference packs. The skill should load only explicit/configured sources and record source names or paths in `groundingReferences`.

## Package outputs

This repo creates an Agency-style plugin bundle:

```text
marketplace\agency-plugin-bundle\
  INSTALL.md
  plugins\
    marketplace.json
    session-learnings-coach\
      .claude-plugin\plugin.json
      agency.json
      README.md
      agents\session-learnings-coach.md
      skills\session-learnings-playbook\SKILL.md
      skills\session-learnings-playbook\references\grounding-sources.md
```

## Suggested Marketplace title

**Session Learnings Coach**

## Suggested Marketplace description

Session Learnings Coach helps turn AI-assisted work sessions into reusable lessons, better prompts, and team-ready operating principles. It guides lightweight retrospectives, separates one-off mistakes from repeatable patterns, can compare against configured grounding references, and helps users decide what should become a personal rule, team guidance, or future prompt improvement.

This is an early plugin package. Feedback is welcome, especially on additional learning types, grounding source formats, export formats, privacy levels, and promotion workflows.
