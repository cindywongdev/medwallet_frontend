describe('search functionality test', () => {
  beforeEach(() => {
    cy.visit('/')
  })

  it('can search by recipient type', () => {
    cy.getDataTest('search-form').find('input').as('search-input')

    cy.contains(/Nurse Practitioner/i).should('not.exist')
    cy.get('@search-input').type('Nurse Practitioner')
    cy.getDataTest('submit-button').click()
    cy.contains(/Nurse Practitioner/i).should('exist')
    cy.getDataTest('records-display').within(() => {
      cy.get('[data-test^="record"]').should('have.length', 50)
    })

    cy.contains(/Doctor of Dentistry/i).should('not.exist')
    cy.get('@search-input').type('Doctor of Dentistry')
    cy.getDataTest('submit-button').click()
    cy.contains(/Doctor of Dentistry/i).should('exist')
    cy.getDataTest('records-display').within(() => {
      cy.get('[data-test^="record"]').should('have.length', 50)
    })
  })
})