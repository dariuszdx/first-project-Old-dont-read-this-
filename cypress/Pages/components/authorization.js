class authorization {
    get logout() {
        return cy.get(".logout")
    }
    clickLogout(logout) {
        this.logout.click();
    }
    get login() {
        return cy.get(".login")
    }
    clickLogin(login) {
        this.login.click();
    }
    get loginPage() {
        this.loginPageUrl = '/login';
    }

}
export default new authorization();