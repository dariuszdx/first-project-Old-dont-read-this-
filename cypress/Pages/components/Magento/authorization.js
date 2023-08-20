
class authorization {
    get signIn() {
        return cy.get('.panel > .header > .authorization-link > a')
    }
    clickOnSignInButton(signIn) {
        this.signIn.click();
    }
    get createAccount() {
        return cy.get('.login-container > .block-new-customer > .block-content > .actions-toolbar > div.primary > .action > span')
    }
    clickOnCreateAccountButton(createAccount) {
        this.createAccount.click();
    }

    get creatAnAccountBtn() {
        return cy.get('#form-validate > .actions-toolbar > div.primary > .action > span')
    }
    clickOnCreateAnAccountButton(creatAnAccountBtn) {
        this.creatAnAccountBtn.click();
    }
    get list() {
        return cy.get(':nth-child(2) > .customer-welcome > .customer-name > .action')
    }
    clickOnTheBMList() {
        this.list.click();
    }
    get signOut() {
        return cy.get(':nth-child(2) > .customer-welcome > .customer-menu > .header > .authorization-link > a')
    }
    clickOnSignOutButton(signOut) {
        this.signOut.click({ force: true });
    }
}
export default new authorization();