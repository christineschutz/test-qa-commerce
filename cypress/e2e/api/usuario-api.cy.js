/// <reference types='cypress' />

describe('Teste API - Funcionalidade: Usuário', () => {

let token
let id
before(() => {
    cy.token('admin@admin.com', 'admin').then((tokenGerado) =>{
        token = tokenGerado
    })
    //TO-DO: esconder login e senha
});

    it('GET - Deve listar usuários com sucesso', () => {
        cy.api({
            method: 'GET',
            url: 'api/users'
        }).then((response) =>{
            expect(response.status).equal(200)
            //expect(response.body.usuarios[0]).to.have.property('id') dessa forma caso o array tenha um 'nome'
            expect(response.body[0]).to.have.property('id').that.is.a('number') // verificar o tipo se for number, string, boolean, etc
            expect(response.body[0]).to.have.property('name')
            expect(response.body[0]).to.have.property('email')
            expect(response.body[0]).to.have.property('isAdmin')
        })
    });

    it.only('POST - Deve validar cadastro de um usuário com sucesso', () => {
        // biblioteca faker
        let email = Date.now() + '@teste.com'
        cy.api({
            method: 'POST',
            url: 'api/users',
            body: {
                name: "Teste Automatizado",
                email: email,
                password: "Teste123@",
                isAdmin: false
            }
        }).then((response) => {
            expect(response.status).equal(201)
            expect(response.body.message).to.contain('Usuário criado com sucesso')
        })
    });

    it('PUT - Deve atualizar um usuário com sucesso', () => {
        let email = Date.now() + '@teste.com'
        cy.cadastrarUsuarioApi('Teste update', email, 'Teste@123', false).then((id) => {
            cy.api({
                method: 'PUT',
                url: `api/users/${id}`,
                headers: {
                    Authorization: token
                },
                body: {
                    "name": "Teste update",
                    "email": email,
                    "password": "Teste123@",
                    "isAdmin": true
                  }
            }).then((response) => {
                expect(response.status).equal(200)
                expect(response.body.message).to.contain('Usuário atualizado com sucesso')
            })
        })

    });

    it('DELETE - Deve deleter um usuário com sucesso', () => {   
        cy.cadastrarUsuarioApi('Para deletar', 'email@delete.com', 'admindeletar', false).then((id) => {
            cy.api({
                method: 'DELETE',
                url: 'api/users/' + id, 
                headers: {
                    Authorization: token
                },
            }).then((response) => {
                expect(response.status).equal(200)
                expect(response.body.message).to.contain('Usuário deletado com sucesso')
            })
        })
    });

})