class Authorization {

    get registerButton() {
        return cy.get("#loginPanel > :nth-child(3) > a")
    }

    clickRegisterButton(registerButton) {
        this.registerButton.click();
    }

    get logout() {
        return cy.get('#leftPanel > ul > :nth-child(8) > a')
    }

    clickLogoutButton(logout) {
        this.logout.click();
    }
}

export default new Authorization();





