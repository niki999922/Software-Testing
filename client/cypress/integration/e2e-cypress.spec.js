/// <reference types="cypress" />

context('e2e test with cypress', () => {
    beforeEach(() => {
        cy.visit('http://localhost:3000/')
    })

    it(`Test open about page`, () => {
        cy.get('#aboutL').click()
        cy.wait(100);
        cy.get('.home-p-k').should('have.text', 'But behold this creation');
        cy.screenshot();
    });

    it(`Test open Home page without login user`, () => {
        cy.wait(100);
        cy.get('.home-p-h').should('have.text', 'Welcome to homepage, ');
        cy.get('.home-p-k').should('have.text', 'Enjoy!!!');
    });

    it(`Test open Trends page without login user`, () => {
        cy.wait(100);
        cy.visit('http://localhost:3000/trends')
        cy.get('.home-p-k').should('have.text', 'You have to be login');
    });

    it(`Test open Register page, register user, login user, see user name in main page, see trends, logout`, () => {
        let randomString = (length) => {
            let result = '';
            const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
            const charactersLength = characters.length;
            for (let i = 0; i < length; i++) {
                result += characters.charAt(Math.floor(Math.random() * charactersLength));
            }
            return result;
        }

        let login = randomString(7) + "@yandex.ru";
        let password = randomString(7);
        cy.visit('http://localhost:3000/logout');
        cy.visit('http://localhost:3000/register');
        cy.wait(100);
        cy.get('#login').type(login);
        cy.wait(200);
        cy.get('#password').type(password);
        cy.wait(200);
        cy.get('#submit-reg').click();
        cy.wait(100);

        cy.visit('http://localhost:3000/login');
        cy.wait(100);
        cy.get('#login').type(login);
        cy.wait(200);
        cy.get('#password').type(password);
        cy.wait(200);
        cy.get('#submit-log').click();
        cy.get('.home-p-h').should('have.text', 'Welcome to homepage, ' + login);

        cy.get('#trendsL').click();
        cy.get('#trendsL').click();
        cy.screenshot();
        cy.get('.list-style').first().should('have.text', 'Три полоскиПесня из 2007 о полосках? просто девушка в парке Победы');

        cy.visit('http://localhost:3000/logout');
    });

    it(`Test failed authorization`, () => {
        let randomString = (length) => {
            let result = '';
            const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
            const charactersLength = characters.length;
            for (let i = 0; i < length; i++) {
                result += characters.charAt(Math.floor(Math.random() * charactersLength));
            }
            return result;
        }

        let login = randomString(7) + "@yandex.ru";
        let password = randomString(7);

        cy.visit('http://localhost:3000/login');
        cy.wait(100);
        cy.get('#login').type(login);
        cy.wait(200);
        cy.get('#password').type(password);
        cy.wait(200);
        cy.get('#submit-log').click();
        cy.get('#submit-log').should('have.value', 'Login' );
    })
})