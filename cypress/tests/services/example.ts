export default {
  example(): void {
    cy.request({
      url: 'https://swapi.dev/api/people/1/',
      method: 'GET',
    })
      .its('body')
      .then((response) => {
        console.log(response)
      })
  },
}
