class RegisterFormPage {
    get emailCreatField() {
        return cy.get('#email_create')
    }
    fillEmail(userEmail) {
        this.emailCreatField.type(userEmail)
    }
    get CreateAccountButton() {
        return cy.get('#SubmitCreate > span')
    }
    get CreateAccountButtonClick() {
        this.CreateAccountButton.click();
    }
    get gender() {
        return cy.get("#id_gender1")
    }
    get gender() {
        return cy.get("#id_gender1");
    }
    selectMaleGender(gender) {
        this.gender.check({ force: true });
    }
}
export default new RegisterFormPage();