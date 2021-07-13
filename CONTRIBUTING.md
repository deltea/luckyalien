# Contributing
## Questions
Please ask questions in the [discussions tab](https://github.com/thcheetah777/alien/discussions). Label the discussion Q&A. If you have a bug or feature request, put it in an issue.

## Feedback
I have made a [feedback discussion](https://github.com/thcheetah777/alien/discussions/16) for feedback.

## Debug Mode
To enter debug mode, change ```config.js``` from
```javascript
// Options
enableBody: true,
// debug: true
```
to
```javascript
// Options
enableBody: true,
debug: true
```
and change ```script.js``` from
```javascript
abilities: {
  carrot: false,
  sword: false,
  bounceMagic: false,
  doubleJumps: false
}
```
to
```javascript
abilities: {
  carrot: true,
  sword: true,
  bounceMagic: true,
  doubleJumps: true
}
```

## Reports
### Feature Request
Please use the *Feature Request* issue template. Also be sure to add appropriate labels.

### Bug Report
Use the *Bug Report* template.

## Linters
I installed a linter called JSHint. You can run the linter by typing into the terminal:
```
node_modules/.bin/jshint data main scenes config.js script.js
```
P.S. Ignore the ES6 issues

## Pull Requests
After I have approved your issue, you may create a pull request. I will review it and merge it. I have installed a Code Quality check, so **if one of the checks fail, I will not review the request.**
Also make sure to add a ```Reset``` commit to disable debug mode and reset abilities, and a ```Fix JSHint issues``` commit to fix the JSHint linter issues.

## Code of Conduct
More details in CODE_OF_CONDUCT.md.
