describe('index page functionality test', () => {
  beforeEach(() => {
    cy.visit('/')
  })

  it('checks that data exists', () => {
    cy.getDataTest('records-display').contains(/Justin Mitchell/i)
    cy.getDataTest('records-display').within(() => {
      cy.get('[data-test^="record"]').should('have.length.gt', 45)
    })
  })

  it('can navigate data using page buttons', () => {
    cy.contains(/Owen McGonigle/i).should('not.exist')
    cy.get('.page-link').contains('2').click()
    cy.contains(/Owen McGonigle/i).should('exist')

    cy.contains(/Joseph Sizensky/i).should('not.exist')
    cy.get('.page-link').contains('Next').click()
    cy.contains(/Joseph Sizensky/i).should('exist')

    cy.contains(/Matthew Zirwas/i).should('not.exist')
    cy.get('.page-link').contains('263037').click()
    cy.contains(/Matthew Zirwas/i).should('exist')

    cy.contains(/Lindsay Ackerman/i).should('not.exist')
    cy.get('.page-link').contains('Prev').click()
    cy.contains(/Lindsay Ackerman/i).should('exist')
  })
})