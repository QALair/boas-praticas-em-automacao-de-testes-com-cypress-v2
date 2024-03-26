describe('Code duplication bad practice - multiple checks', () => {
  beforeEach(() => {
    cy.visit('https://bit.ly/2XSuwCW')
  })
 
  it('checks all checkboxes from a specific fieldset', () => {
    cy.get('fieldset div input[type="checkbox"]').check()
  })
}) // I marked all checkboxes except the I agree, that is outside the div
   // if all checkboxes were wanted it is just use the selector [type="checkbox"]