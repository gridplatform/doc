# Contributing to Grid Docs

Thank you for improving Grid’s documentation.

## How to contribute

1. Fork [gridplatform/doc](https://github.com/gridplatform/doc)
2. Branch: `git checkout -b docs/your-topic`
3. Edit Markdown under `docs/`
4. Env vars → edit `data/configuration.json` then `npm run sync:config`
5. Preview: `npm ci && npm start`
6. PR against `main`

## Naming convention

Match Deep-Dive style (no numeric prefixes required):

| Kind | Pattern | Examples |
|------|---------|----------|
| Folder | `Pascal-Case-With-Hyphens` | `Getting-Started`, `Concepts`, `Install` |
| File | `Title_With_Underscores.md` | `Desired_State.md`, `Archive_And_Remote_State.md` |

## Where content goes

| Topic | Path |
|-------|------|
| Product thesis | `docs/What_Is_Grid.md`, `docs/Architecture/` |
| Onboarding | `docs/Getting-Started/` |
| Desired state / sync / releases | `docs/Concepts/` |
| Multi-cloud maturity | `docs/Clouds/` |
| Console | `docs/Console/` |
| RBAC | `docs/Admin/` |
| CLI | `docs/CLI/` |
| Install | `docs/Install/` |
| Upcoming work | `docs/Roadmap.md` |
| Env-var SoT | `data/configuration.json` |

Do not duplicate install shell scripts here — link to [grid-core/install](https://github.com/gridplatform/grid-core/tree/main/install).

## Style

- Deep and accurate over short marketing blurbs
- Separate **samples / modules / CLI catalog / console flags** when maturity differs
- Prefer tables and copy-pasteable commands
- Use blockquotes for callouts so GitHub stays readable
- Absolute GitHub URLs for other repos
- Never document secrets; use placeholders

## License

MIT — see [LICENSE](LICENSE).
