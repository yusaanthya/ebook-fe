# Security review — 2026-10-28

## Scope and requirements

Scan the cloned demo, upgrade dependencies affected by known advisories, preserve application behavior, and record remaining issues before the separate build/dependency repair phase. This is a dependency audit and targeted source review, not a penetration test. No new application mechanism was added.

## Dependency audit

Counts are affected packages (including transitive dependencies), not unique CVEs or confirmed exploitable endpoints. Results depend on the npm advisory database at scan time.

| Scan | Critical | High | Moderate | Low | Total |
| --- | ---: | ---: | ---: | ---: | ---: |
| Before | 8 | 40 | 23 | 14 | 85 |
| After dependency upgrades | 0 | 13 | 4 | 9 | 26 |
| After Vite migration | 0 | 0 | 0 | 0 | 0 |

## Installed direct versions

- axios: 1.21.0
- react-pdf: 10.5.0
- @react-pdf/renderer: 3.4.5
- react-router-dom: 7.18.4
- vite: 8.3.5
- @vitejs/plugin-react: 6.1.2
- Node.js: 24.22.1 (`.nvmrc`)

Compatible transitive security updates are captured in package-lock.json. Use npm ci to reproduce this tree.

## Evidence and compatibility

- Axios and React Router upgraded to versions outside the scanned vulnerable ranges.
- react-pdf upgraded to 10.5.0, which supports the existing React 18 and installs pdfjs-dist 5.4.296. PDF.js previously allowed script execution from malicious PDFs: https://github.com/advisories/GHSA-wgrm-67xf-hhpq.
- The two PDF components now use the documented public import and a locally bundled worker. This is required by the react-pdf major upgrade.
- @react-pdf/renderer updated within major 3 because the original 3.0.0 peer dependency excludes React 18 and obstructs dependency resolution.
- npm audit fix updated compatible transitive dependencies; ws was separately updated within its allowed range.

## Vite migration

The CRA build/development/test chain and eslint-config-react-app have been removed. The lockfile was regenerated from the new manifest, and npm audit reports zero known vulnerabilities. This does not certify application security or audit vendored files such as public/webviewer/lib.

Requirements and evidence for the migration changes:

- Replace the vulnerable CRA chain: Vite configuration and scripts replace react-scripts; output remains build/ and the localhost port remains 3005 to match backend CORS.
- Support the existing JSX sources: component files use .jsx, preserving extensionless imports. Two PDF modal components had type annotations in JavaScript files; annotations were removed without changing their UI behavior.
- Support browser-native modules: image require() calls became static imports. Two API configuration locations now share VITE_API_URL, with the existing localhost endpoint as the default.
- Resolve verified build blockers: remove nonexistent useParam/useNavigate2 imports; correct the Bootstrap heart icon import; remove references to the entirely commented-out Tabbed draft. No working tab implementation existed to preserve.
- Make the runtime reproducible: .nvmrc records the already-installed Node.js 24.22.1. No system-wide runtime installation was changed.
- Keep static analysis available: a standalone ESLint configuration and lint script replace the CRA-provided lint configuration. No test suite existed, so the obsolete CRA test/eject scripts were removed.

## Verification and limits

- npm audit: zero known vulnerabilities after migration.
- npm ci --ignore-scripts: clean lockfile installation passed; the subsequent production build passed.
- npm ls --depth=0: passed.
- npm run build: passed. Existing Sass deprecation and large-bundle warnings remain.
- Development browser smoke checks: homepage, login, and PDF reader rendered without captured JavaScript page errors. PDF pages rendered using the local worker.
- Production browser checks: `/`, `/Login`, `/member-index`, `/Mart`, `/Preview`, and `/Preview-focus` rendered with no captured JavaScript page errors or failed local assets. PDF navigation from page 1 to page 3 and the collection dialog passed.
- Browser checks use a mocked unauthenticated backend response. Real authentication, database operations, orders, and checkout have not been integration-tested.
- npm run lint remains nonzero: the broader existing source tree contains legacy lint findings, including an unused CouponItem draft with a missing closing brace. These are recorded rather than suppressed or expanded into unrelated cleanup. ESLint 8 is retained for compatibility with the existing plugins; migrating the lint stack is follow-up work.
- Basic private-key/AWS/GitHub-token pattern scan: no matches; not a complete secret or history scan.

## Deferred work

- Fix backend authorization, pricing, and password-hash exposure findings in ../ebook-be/SECURITY-REVIEW.md before exposing the application publicly.
- Restore database schema/data and verify the full frontend/backend flows.
- Review vendored PDFTron WebViewer assets separately; npm audit does not scan their bundled source.
- Clean up unused demo drafts/lint findings and consider splitting the PDF viewer bundle and modernizing Sass separately.
