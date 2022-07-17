/// <reference types='cypress' />

import HomePageActions from '../../pageobjects/pageactions/HomePageActions'
describe("Check the Home Page validations",()=>{

    const homePage=new HomePageActions()
    beforeEach(()=>{
        homePage.navigateToURL();
    })

    Cypress.on('uncaught:exception', (err, runnable) => {
        if (err.message.includes('ResizeObserver loop limit exceeded')) {
          return false
        }
      })
      Cypress.on('uncaught:exception', (err, runnable) => {
        // returning false here prevents Cypress from
        // failing the test
        return false
      })

    it("verify the title of the Home Page",()=>{
        homePage.validateTitle().should('eq','Laptop Computers, Desktops, Printers, Ink & Toner | HP® United Kingdom')
    })

    it("Count how many product titles in the Home page",()=>{
        homePage.validateNumberOfProducts().then($elements => {
            cy.log($elements.length)
            cy.log($elements.find('h3').text())
          });
          
    })

    it("Add to cart functionality",()=>{
          var printerType='Home Printers'
          homePage.validateNumberOfProducts().each(($el, index, $list) => {
            const products=$el.find('h3').text()
            if(products.includes('PCs')){
                cy.wrap($el).click()
                cy.xpath('//div[@class="grid"]//div[contains(@class,"content-md-center")]//div').each(($el, index, $list) => {
                    const productItem=$el.find('h4').text()
                    cy.log(productItem)
                    if(productItem.includes('Desktops')){
                        cy.wrap($el).find('.c-button-link-with-arrow').click()
                        cy.xpath('//div[contains(@class,"ProductListContainer")]//div[contains(@class,"ProductTile")]').each(($el, index, $list) => {
                            console.log($el.find('h3').text())
                            if($el.find('h3').text().includes('HP Pavilion 27-d1023na 4K  NVIDIA® GeForce® GTX 1650 All-in-One - Core™ i7')){
                                cy.wrap($el).find('button').click()
                                //return false
                            }
                    })
                        return false
                    }
                })
                //Desktops's page
                                             
            }
        })

    })
})