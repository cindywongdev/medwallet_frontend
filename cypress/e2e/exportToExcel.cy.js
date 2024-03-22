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

    cy.log('HI')

    cy.intercept('file').as('searchResultFile')
    cy.getDataTest('export-button').click()
    cy.wait('@searchResultFile').then((res) => {
      cy.log("helloooo")
      // const filename = res.response.headers['content-disposition'].split('filename=')[1];
      // const downloadedFilename = path.join(downloadsFolder, filename);
      // cy.readFile(downloadedFilename, 'binary', { timeout: 15000 })
      //   .should((buffer) => {
      //     expect(buffer.length).to.be.gt(100);
      //   });
      // cy.log(`**File ${filename} exists in downloads folder**`);
      // cy.readFile(downloadedFilename).should((text) => {
      //   const lines = text.split('\n');
      //   expect(lines).to.have.length.gt(2);
      //   expect(lines[0]).to.equal('%PDF-1.4');
      // });
    })
    
    cy.pause()
  
    cy.readFile("cypress/downloads")
  })

})