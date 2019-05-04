To turn off a rule in a file:

  /* eslint <rule name>: "off" */

Example:

  /* eslint import/prefer-default-export: "off" */


To turn off a rule for a single line of code:

  // eslint-disable-next-line <rule name>
Example:

  // eslint-disable-line no-console
  console.log('linting is gold')
