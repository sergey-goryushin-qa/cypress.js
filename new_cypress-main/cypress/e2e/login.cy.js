describe('Проверка авторизации', function () {

    it('Верный пароль и верный логин', function () {
         cy.visit('https://login.qa.studio/');
         cy.get('#mail').type('german@dolnikov.ru');
         cy.get('#pass').type('iLoveqastudio1');
         cy.get('#loginButton').click();
         cy.get('#messageHeader').should('be.visible');
         cy.get('#messageHeader').contains("Авторизация прошла успешно");
         cy.get('#exitMessageButton > .exitIcon').should('be.visible');
     })
     it('Восстановление пароля', function () {
         cy.visit('https://login.qa.studio/');
         cy.get('#forgotEmailButton').click();
         cy.get('#mailForgot').type('sergey@goryushin.ru');
         cy.get('#restoreEmailButton').click();
         cy.get('#messageHeader').should('be.visible');
         cy.get('#messageHeader').contains("Успешно отправили пароль на e-mail");
         cy.get('#exitMessageButton > .exitIcon').should('be.visible');       
    })
    it('Не правильный логин', function () {
        cy.visit('https://login.qa.studio/');
        cy.get('#mail').type('german@dolnikov.ru');
        cy.get('#pass').type('iLoveqastudio12');
        cy.get('#loginButton').click();
        cy.get('#messageHeader').should('be.visible');
        cy.get('#messageHeader').contains("Такого логина или пароля нет");
        cy.get('#exitMessageButton > .exitIcon').should('be.visible');    
    })
    it('Не правильный пароль', function () {
        cy.visit('https://login.qa.studio/');
        cy.get('#mail').type('german7@dolnikov.ru');
        cy.get('#pass').type('iLoveqastudio1');
        cy.get('#loginButton').click();
        cy.get('#messageHeader').should('be.visible');
        cy.get('#messageHeader').contains("Такого логина или пароля нет");
        cy.get('#exitMessageButton > .exitIcon').should('be.visible');    
    })
    it('Ввести логин без @', function () {
        cy.visit('https://login.qa.studio/');
        cy.get('#mail').type('germandolnikov.ru');
        cy.get('#pass').type('iLoveqastudio1');
        cy.get('#loginButton').click();
        cy.get('#messageHeader').should('be.visible');
        cy.get('#messageHeader').contains("Нужно исправить проблему валидации");
        cy.get('#exitMessageButton > .exitIcon').should('be.visible');    
    })
    it('Проверка на приведение к строчным буквам в логине', function () {
        cy.visit('https://login.qa.studio/');
        cy.get('#mail').type('GerMan@Dolnikov.ru');
        cy.get('#pass').type('iLoveqastudio1');
        cy.get('#loginButton').click();
        cy.get('#messageHeader').should('be.visible');
        cy.get('#messageHeader').contains("Авторизация прошла успешно");
        cy.get('#exitMessageButton > .exitIcon').should('be.visible');    
    })
 })
 