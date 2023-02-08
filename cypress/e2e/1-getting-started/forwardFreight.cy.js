/// <reference types="cypress" />



describe('example to-do app', () => {
  beforeEach(() => {

    cy.visit('https://forwardfreightlogistics.net/')
  })

  it('should display Connect Today', () => {
    
    const connectTodayButton = '#1532578369'

    cy.get(connectTodayButton).should('be.visible')

  })

  it('should fill out Connect Today form', () => {
  
    const connectButton = '#1532578369'

    cy.get(connectButton).click();
    
    cy.get('[name="dmform-0"]')
    .should('be.visible')
    .type('John Doe')

    cy.get('[name="dmform-4"]')
    .should('be.visible')
    .type('922933627348992')

    cy.get('[name="dmform-1"]')
    .should('be.visible')
    .type('doingcoolstuff@coolstuff.com')

    cy.get('[name="dmform-5"]')
    .should('be.visible')
    .type('Fireball Inc.')

    cy.get('[name="dmform-6"]')
    .should('be.visible')
    .type('Hoolywood FL')

    cy.get('[name="dmform-3"]')
    .should('be.visible')
    .type('Test by Robert making sure website form works!')

  }),

  it('should display social media logos',() => {

    cy.get('.dmSocialInstagram')
    .should('be.visible')

    cy.get('.dmSocialLinkedin')
    .should('be.visible')

    cy.get('.dmSocialFacebook')
    .should('be.visible')

    cy.get('.dmSocialTwitter')
    .should('be.visible')

    cy.get('.dmSocialEmail')
    .should('be.visible')

  })

})
