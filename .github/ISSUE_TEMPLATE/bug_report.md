---
name: Bug report
about: Create a report to help us improve
title: ''
assignees: ''
labels: 'Bug (Potential)'
body:
- type: markdown
  attributes:
  value: Hi, thank you for taking the time to create an issue!
- type: checkboxes
  id: troubleshooting
  attributes:
  label: Preflight Checklist
  options:
  - label: I'm on [the latest version of EssaySpring](https://github.com/shadrqen/essayspring/releases).
    required: true
  - label: There's [no other issue](https://github.com/shadrqen/essayspring/issues?q=is%3Aissue) that already describes my problem.
    required: true
- type: textarea
  attributes:
  label: Describe the Bug
  description: A clear and concise description of what the bug is.
  validations:
  required: true
- type: textarea
  attributes:
  label: To Reproduce
  description: Steps to reproduce the behavior. Contributors should be able to follow the steps provided in order to reproduce the bug.
  validations:
  required: true
- type: textarea
  attributes:
  label: Errors Shown
  description: Are there any errors logged in the browser console, or terminal where you're running EssaySpring?
- type: input
  id: directus-version
  attributes:
  label: What version of EssaySpring are you using?
  description: 'Version is displayed under "Settings". For example: 9.0.1'
  validations:
  required: true
- type: input
  id: node-version
  attributes:
  label: What version of Node.js are you using?
  description: 'For example: 12.0.0'
  validations:
  required: true
- type: input
  attributes:
  label: What browser are you using?
  description: 'For example: Chrome, Safari'
  validations:
  required: true
- type: input
  id: operating-system
  attributes:
  label: What operating system are you using?
  description: 'For example: macOS, Windows'
  validations:
  required: true
- type: input
  attributes:
  label: How are you deploying EssaySpring?
  description: 'For example: running locally, Docker, PaaS'
  validations:
  required: true