describe('export to excel button functionality test', () => {
  beforeEach(() => {
    cy.visit("/")
  })

  it('downloads search results as an excel file', () => {
    cy.getDataTest('export-button').should('not.exist')

    cy.getDataTest('search-form').find('input').as('search-input')
    cy.get('@search-input').type('Physician Assistant')
    cy.getDataTest('submit-button').click()
    cy.getDataTest('export-button').should('exist')

    cy.getDataTest('export-button').click()
    cy.readFile("cypress/downloads/searchResults_export.xlsx")
  })
})