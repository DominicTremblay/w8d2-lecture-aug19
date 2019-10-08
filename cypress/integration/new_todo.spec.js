describe('New Todo', () => {
  
  beforeEach(() => {
    // visit the homepage
    cy.visit('/');
  })


  it('receives the focus', () => {

    // target the input element on the page
    cy
      .get('#todo-input')
      .focused();

  });

  it('accepts a new todo value', () => {


      cy
      .get('#todo-input')
      .type('Get a coffee')
      .should('have.value', 'Get a coffee')
  })

  it('submits a new todo', ()=> {


          // Stubing the axios request
      cy.server();
      cy.route('POST', '/api/todos', {
        id: 2,
        task: "Get a coffee",
        completed: false
      });

      cy
      .get('#todo-input')
      .type('Get a coffee')
      .type('{enter}')
      
      cy
        .get('#todo-input')
        .should('have.value', "");
        
      cy
        .get('.list-group > li')
        .should('have.length', '2')
});

it.only ('should delete a todo', () => {
  cy
    .server();
  cy
    .route('DELETE', '/api/todos/1', {
      msg: 'Todo deleted'
    });

  cy
    .get('.remove-todo')
    .first()
    .click();    

    
    cy
    .get('.list-group')
    .contains('Walk the Dog')
    .should('not.be.visible');
    
  });
});
