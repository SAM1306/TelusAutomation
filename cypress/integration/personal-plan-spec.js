import PersonalPage_PO from '../../cypress/support/pageObjects/PersonalPage_PO.js'

const testData = require("../../cypress/fixtures/example.json")

/// <reference types="cypress" />

testData.forEach((testCase) => {
    describe("Select and Configure Personal Plan for User", () => {
        Cypress.config('defaultCommandTimeout', 20000)
        const personalPage_PO = new PersonalPage_PO();

        it("Navigate to Personal Plan Page", () => {
            personalPage_PO.navigate_to_personal_plan_page()
            personalPage_PO.should_click_on_pick_your_options();
        });

        it(`Select Device storage ${testCase.storage} and Color ${testCase.color} and verify device name ${testCase.deviceName}`, () => {
            personalPage_PO.select_device_storage(testCase.storage);
            personalPage_PO.select_device_color(testCase.color);
            personalPage_PO.verify_device_name(testCase.deviceName);
            personalPage_PO.click_on_proceed_to_next_steps();
        });

        it('Select Device Payment Option', () => {
            personalPage_PO.select_device_payment_option(testCase.paymentOption);
            personalPage_PO.click_on_accept_the_agreement();
            personalPage_PO.click_on_continue_to_plans_button()
        })

        it('Click on Warranty button and verify error message', () => {
            personalPage_PO.click_on_continue_to_warranty_button();
            personalPage_PO.verify_plan_selection_error_message();
        })


        it(`Select Plan ${testCase.planOption25GB}  and on Warranty button and verify error message`, () => {
            personalPage_PO.select_plan(testCase.planOption25GB);
            personalPage_PO.click_on_continue_to_warranty_button();
        })

        it(`Select Protection Plan ${testCase.noProtectionPLan}, click on next steps and No Trade in Option`, () => {
            personalPage_PO.select_protection_plan(testCase.noProtectionPLan);
            personalPage_PO.click_on_next_steps_button();
            personalPage_PO.click_on_without_tradeIn_option();
        })

        it('Select Addons Telus Security Security With Basic PLan', () => {
            personalPage_PO.select_addon(testCase.TelusOnlineSecurity);
            personalPage_PO.select_telus_security_plan(testCase.TelusSecurityPlanBasic);
            personalPage_PO.click_on_continue_to_summary_button();
        })

        it("Verify Add to cart button and device name on Summary page", () => {
            personalPage_PO.verify_add_to_cart_button_is_visible()
            personalPage_PO.verify_device_in_cart(testCase.deviceName)
        })
    });
})