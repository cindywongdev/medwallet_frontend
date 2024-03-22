describe('index page functionality test', () => {
  beforeEach(() => {
    cy.visit('/')
  })

  it('checks that data exists', () => {
    cy.getDataTest('records-display').contains(/Justin Mitchell/i)
    cy.getDataTest('records-display').contains(/Bryan McCullough/i)
  })

  it('can navigate data using page buttons', () => {
    
  })
})