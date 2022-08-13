/// <reference types='cypress' />
import HomePageElements from '../pageelements/HomePageElements'

export default class HomePageActions{

    constructor(){
        globalThis.element=new HomePageElements();
    }
    
    navigateToURL(){
        cy.visit('https://www.hp.com/')
    }

    validateTitle(){
        return cy.title()
    }

    validateNumberOfProducts(){
        return element.homePageProducts()
        
    }
}
