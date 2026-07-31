# Security Policy

## Supported Versions

Security fixes are provided for the currently deployed `code.textmode.art` site and the source on the latest `main`
branch. Older deployments, forks, local modifications, and unmerged `dev` snapshots are not supported.

If you are unsure whether an issue is security-sensitive, report it privately anyway. We would rather review a false
alarm than miss a vulnerability.

## Reporting a Vulnerability

Report suspected vulnerabilities privately to [hello@textmode.art](mailto:hello@textmode.art).

Do not open a public GitHub issue, pull request, Discussion, or Discord thread. Public reports can put visitors at risk
before a fix is available.

Include as much of the following as possible:

- A description of the affected page, component, workflow, or dependency
- Reproduction steps or a minimal proof of concept
- Browser, operating system, URL, and relevant environment details
- The expected impact and any realistic attack scenario
- Mitigation ideas or candidate fixes already considered

Clearly identify any sensitive material, secrets, private project code, or exploit details in the report.

## What to Expect

The maintainers will make a best effort to acknowledge, triage, and reproduce the report, keep the reporter informed,
and deploy a fix when a vulnerability is confirmed. Timing depends on severity, maintainer availability, and the
affected system.

## Disclosure Process

`code.textmode.art` follows coordinated disclosure. Give the maintainers reasonable time to investigate and deploy a
fix before public disclosure. The project may publish a security advisory or release note after remediation and will
credit the reporter when appropriate and requested.

## Scope

This policy covers the source in this repository, the official deployment at `code.textmode.art`, project-maintained
examples, and documentation-site workflows. It does not cover unrelated third-party services, downstream forks,
private integrations, general support questions, or feature requests.
