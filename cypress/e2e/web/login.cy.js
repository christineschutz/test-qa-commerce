/// <reference types='cypress' />
import LoginPage from "../../support/page-objects/login-page";

describe('Funcionalidade: Login', () => {
    
    beforeEach(() => {
        LoginPage.visitarUrlLogin()
    });
    
    it('Deve fazer login com sucesso', () => {
        
        LoginPage.preencherLogin('admin@admin.com', 'admin')
        //LoginPage.preencherLogin('teste@teste.com', 'Teste123@')

        cy.get('h1').should('contain', 'Minha conta')
        cy.url().should('include', 'dashboard')


    });
});