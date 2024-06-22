/// <reference types='cypress' />
import CheckoutPage from "../../support/page-objects/checkout-page";
import faker from '@faker-js/faker';

describe('Funcionalidade: Checkout', () => {
    beforeEach(() => {
        CheckoutPage.visitarUrlCheckout()
    });

    it('Deve fazer chekout com sucesso com usuário comum com email random', () => {
        var email = 'teste' + Date.now() + '@teste.com'
        CheckoutPage.preencherCheckout('Christine', 'Schutz', 'Rua Teste', '199', '12345678', '', email )
        cy.get('h4').should('contain', 'Obrigado pelo seu pedido')
    });

    it.only('Deve fazer chekout com sucesso com usuário logado com email Faker', () => {
        var email = 'teste' + Date.now() + '@teste.com'
        CheckoutPage.preencherCheckoutCriarConta('Christine', 'Schutz', 'Rua Teste', '199', '12345678', '1234567890', email, 'Teste123@', 'Teste123@')
        cy.get('h4').should('contain', 'Obrigado pelo seu pedido')
    });

});