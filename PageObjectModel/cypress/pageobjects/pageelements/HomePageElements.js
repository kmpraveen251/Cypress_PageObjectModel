/// <reference types='cypress' />

export default class HomePageElements{
    homePageProducts(){
        return cy.xpath("//div[@class='swiper-wrapper']/div[contains(@class,'c-grid-cell')]")                                                                               
    }
}