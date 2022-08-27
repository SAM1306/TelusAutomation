class PersonalPage_PO {
    verify_text(slector, text) {
        cy.get(slector).then(($headerText) => {
            const headerText = $headerText.text()
            cy.log("Found header text: " + headerText)
            expect(headerText).contains(text)
        })
    }

    navigate_to_personal_plan_page() {
        cy.visit("/" + "/mobility/configure?product=iphone-13&sku=NLAIP13128PK")
        cy.document().should("have.property", "charset").and("eq", "UTF-8");
        cy.title().should("include", "Customize your device and plan | TELUS");
        cy.url().should("include", "iphone");
    }

    should_click_on_pick_your_options() {
        cy.get('a').contains('Pick your options').click()
        this.verify_text(`[data-id="sku-selector-heading"]`, "Review device selection.")
    }

    select_device_storage(selector) {
        cy.get(`[data-id="${selector}"]`).click()
    }

    select_device_color(selector) {
        cy.get(`[data-sku-color="${selector}"]`).click()
    }

    verify_device_name(selector) {
        this.verify_text(`[data-id-sku-name="iPhone 13"]`, selector)
    }

    click_on_proceed_to_next_steps() {
        cy.get('[data-id="sku-selector-next-step-button"]').click()
        this.verify_text(`[data-id="offer-selector-heading-finance"]`, "Device payment options.")
    }

    select_device_payment_option(selector) {
        cy.get(`[data-id="offer-selector-24-${selector}-button"]`).click()
    }

    click_on_accept_the_agreement() {
        cy.get('[data-testid="fake-input"]').should('not.be.checked')
        cy.get('[data-testid="fake-input"]').click()
    }

    click_on_continue_to_plans_button() {
        cy.get('[data-id="offer-selector-next-step-button"]').click()
        this.verify_text(`[data-id="plan-selector-heading"]`, "Pick your perfect plan.")
    }

    click_on_continue_to_warranty_button() {
        cy.get('[data-id="plan-selector-next-step-button"]').click()
    }

    verify_plan_selection_error_message() {
        this.verify_text(`[data-id="plan-selector-error-description"]`, "You must select a plan before proceeding to the next step.")
    }

    select_plan(selector) {
        cy.get(`[data-id="${selector}"]`).click()
    }

    select_protection_plan(selector) {
        cy.get(`[data-id="${selector}"]`).click()
    }

    click_on_next_steps_button() {
        cy.get('[data-id="warranty-selector-next-step-button"]').click()
    }

    click_on_without_tradeIn_option() {
        cy.get('[data-id="tradein-declaration-Proceed-without-Trade-In-link"]').click()
    }

    select_addon(selector) {
        cy.get(`[data-id="${selector}"]`).click()
    }

    select_telus_security_plan(selector) {
        cy.get(`[data-id="'checkbox-selector'-${selector}-button"]`).click()
    }

    click_on_continue_to_summary_button() {
        cy.get('[data-id="addon-selector-next-step-button"]').click()
    }

    verify_add_to_cart_button_is_visible() {
        //cy.get('[data-id="Add-to-cart-button-link"]').should('be.visible')
        cy.isVisible('[data-id="Add-to-cart-button-link"]')
    }

    verify_device_in_cart(selector) {
        this.verify_text(`.styledComponents__SummaryCardHeader-sc-vepien-5`, selector)
    }
}
export default PersonalPage_PO;