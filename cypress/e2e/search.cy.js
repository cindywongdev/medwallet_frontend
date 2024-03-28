describe('search functionality test', () => {
  beforeEach(() => {
    cy.visit('/')
  })

  it('can search by recipient type', () => {   
    cy.getDataTest('search-form').find('input').as('search-input')

    cy.contains(/Dennis Orellana Bonilla/i).should('not.exist')
    cy.get('@search-input').type('Nurse Practitioner')
    cy.getDataTest('submit-button').click()
    cy.contains(/Dennis Orellana Bonilla/i).should('exist')
    cy.getDataTest('records-display').within(() => {
      cy.get('[data-test^="record"]').should('have.length', 50)
    })

    cy.contains(/Nahmjee Lee Skarada/i).should('not.exist')
    cy.get('@search-input').type('Doctor of Dentistry')
    cy.getDataTest('submit-button').click()
    cy.contains(/Nahmjee Lee Skarada/i).should('exist')
    cy.getDataTest('records-display').within(() => {
      cy.get('[data-test^="record"]').should('have.length', 50)
    })

    cy.contains(/Joseph Rocco/i).should('not.exist')
    cy.get('@search-input').type('Certified Registered Nurse Anesthetist')
    cy.getDataTest('submit-button').click()
    cy.contains(/Joseph Rocco/i).should('exist')
    cy.getDataTest('records-display').within(() => {
      cy.get('[data-test^="record"]').should('have.length', 50)
    })
  })
})