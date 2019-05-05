

Field Definition format:

  <field-name>: {
    type: '<field-type>'
    text: ''
  }

  field-name:
    * must be camelCase *
    -used for variable name corresponding to field
    -broken on uppercase letters to create a label example:
      termsAndConditions becomes "Terms And Conditions"

  field-type (REQUIRED):
    string => text input
    boolean => single checkbox
    date => date picker
    time => time picker
    checkboxes => n number of checkboxes
    radioButtons => radio buttons
    select => drop down select menu
    yesNo => Radio buttons with yes or no

  text (optional):
    Text to be used for a label
