// Altera o comportamento padrão do comando .type() para simular digitação humana em todo o projeto
Cypress.Keyboard.defaults({
  keystrokeDelay: 10 // 10ms de intervalo entre cada tecla pressionada globalmente
});