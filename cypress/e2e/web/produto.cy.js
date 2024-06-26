/// <reference types='cypress' />

describe('Funcionalidade: Produto', () => {
    
    beforeEach(() => {
        cy.visit('')
        //TO-DO: Resolver o métoco limpar carrinho: cy.limparCarrinho() - OK
    });
    
    
    it('Deve visitar a página do produto pelo nome', () => {
        cy.contains('Produto 6').click()
        cy.url().should('include', 'product.html')
    });

    it('Deve visitar a página do produto clicando na imagem', () => {
        //cy.get('.card-img-top').eq(2).click()
        //cy.get('.card-img-top').first().click()
        cy.get('.card-img-top').last().click()
        cy.url().should('include', 'product.html')
    });

    it.only('Deve adicionar ao carrinho pela página do produto', () => {
        cy.limparCarrinho() //resolvido alterando no método para clicar na home e limpar o carrinho, antes de seguir o processo
        cy.get('.card-img-top').last().click()
        cy.get('#product-quantity').clear().type(10)
        cy.get('#add-to-cart').click()
        cy.get('#cart-count').should('have.text', '10')
    });


});