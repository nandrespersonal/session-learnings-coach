# Learning schema

Recommended JSON shape:

```json
{
  "id": "2026-07-01-clear-marketplace-taxonomy",
  "date": "2026-07-01",
  "title": "Use the marketplace taxonomy users actually see",
  "weight": "important",
  "who": "ai",
  "type": "communication lesson",
  "privacy": "team-shareable",
  "principle": "Product copy should match the visible taxonomy of the marketplace, not adjacent platform terminology.",
  "context": "The assistant overused extension language when the marketplace centered plugins, skills, agents, and MCP.",
  "action": "Use the marketplace's visible categories before naming a package or writing documentation.",
  "betterPrompt": null,
  "promotionStatus": "candidate-rule",
  "tags": ["marketplace", "positioning", "terminology"],
  "groundingReferences": [
    {
      "source": "references/grounding-sources.md",
      "type": "configuration",
      "note": "Optional user-configured grounding source used to compare against prior lessons."
    }
  ]
}
```

Markdown can be generated from JSON, and JSON can be generated from a Markdown retrospective if the fields are clear.

## Grounding reference field

`groundingReferences` is optional. Use it when the learning was informed by configured prior lessons or reference bundles.

```json
{
  "groundingReferences": [
    {
      "source": "C:\\path\\to\\team-lessons.md",
      "type": "local-markdown",
      "note": "Used to compare whether this issue repeated a known workflow pattern."
    }
  ]
}
```

Do not place private source content directly into the schema field. Store only the source name/path and a short reason it influenced the learning.
