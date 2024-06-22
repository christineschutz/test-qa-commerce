class CheckoutPage {
    //Elementos

    campoNome(){return cy.get('#first-name')}
    campoSobrenome(){return cy.get('#last-name')}
    campoEndereco(){return cy.get('#address')}
    campoNumero(){return cy.get('#number')}
    campoCep(){return cy.get('#cep')}
    campoTelefone(){return cy.get('#phone')}
    campoEmail(){return cy.get('#email')}
    checkComprasFuturas(){return cy.get('#create-account')}
    campoSenha(){return cy.get('#password')}
    campoConfirmarSenha(){return cy.get('#confirm-password')}
    radioFormaPagto(){return cy.get('#payment-pix')}
    checkTermos(){return cy.get('#terms')}
    botaoFinalizarPedido(){return cy.get('.btn')}


    //Métodos

    visitarUrlCheckout() {
        cy.visit('checkout.html')
    }

    preencherCheckout(nome, sobrenome, endereco, numero, cep, telefone, email) {
        this.campoNome().clear().type(nome)
        this.campoSobrenome().clear().type(sobrenome)
        this.campoEndereco().clear().type(endereco)
        this.campoNumero().clear().type(numero)
        this.campoCep().clear().type(cep)
        this.campoTelefone().clear().type(telefone)
        this.campoEmail().clear().type(email)
        this.radioFormaPagto().click()
        this.checkTermos().click()
        this.botaoFinalizarPedido().click()

    }

    preencherCheckoutCriarConta(nome, sobrenome, endereco, numero, cep, telefone, email, senha, confirmarSenha) {
        this.campoNome().clear().type(nome)
        this.campoSobrenome().clear().type(sobrenome)
        this.campoEndereco().clear().type(endereco)
        this.campoNumero().clear().type(numero)
        this.campoCep().clear().type(cep)
        this.campoTelefone().clear().type(telefone)
        this.campoEmail().clear().type(email)
        this.checkComprasFuturas().check()
        this.campoSenha().clear().type(senha)
        this.campoConfirmarSenha().clear().type(confirmarSenha)
        this.radioFormaPagto().click()
        this.checkTermos().click()
        this.botaoFinalizarPedido().click()
    }


}

export default new CheckoutPage