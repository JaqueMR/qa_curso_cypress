describe('Página de cadastro', () => {
  it('Deve preencher os campos do formulário corretamente para cadastrar um novo usuário', () => {
    cy.visit('https://adopet-frontend-cypress.vercel.app/');
    cy.get('[data-test="register-button"]').click();
    cy.get('[data-test="input-name"]').type('Jaqueline Rocha');
    cy.get('[data-test="input-email"]').type('jaquelinemelquides@hotmail.com');
    cy.get('[data-test="input-password"]').type('Minhasenha123');
    cy.get('[data-test="input-confirm-password"]').type('Minhasenha123');
    cy.get('[data-test="submit-button"]').click();
    
  })
})