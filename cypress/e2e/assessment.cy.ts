describe('template spec', () => {
  it('passes', () => {
    cy.visit('https://www.google.com/')
    cy.get('textarea[aria-label="Search"]').type('testlio').type('{enter}')
    cy.get('a[href="https://testlio.com/"]').click()

    // i did exactly what the error told me to and used cy.origin() command as assertion did not seem to fix the issue, the button seemed to be calling a different origin
    cy.origin('https://testlio.com', () => {
    cy.get('a[class="button"]').should('be.visible').click()
    cy.get('a.button[href="https://platform.testlio.com/signup#/"]').invoke('removeAttr','target').click()
})
    cy.origin('https://platform.testlio.com', ()=>{
      cy.get('.scenes-Signup-styles__titleText__1r_H3').then(($text)=>{
      cy.log(`${$text.text()}`)
    })
    })
    
  })
})