console.log(dados);
const startButton = document.getElementById('start-interview');
const questionsDiv = document.getElementById('questions');
const questions = [
  "Qual sua maior experiência profissional?",
  "Por que se interessou por esta vaga?",
  // Adicione mais perguntas aqui
];

startButton.addEventListener('click', () => {
  questionsDiv.style.display = 'block';

  questions.forEach((question, index) => {
    const questionElement = document.createElement('div');
    questionElement.textContent = question;

    const form = document.createElement('form');
    const input = document.createElement('textarea');
    const submitButton = document.createElement('button');
    submitButton.textContent = 'Enviar';

    form.appendChild(input);
    form.appendChild(submitButton);
    questionElement.appendChild(form);

    questionsDiv.appendChild(questionElement);

    submitButton.addEventListener('click', (event) => {
      event.preventDefault();
      // Aqui você pode enviar os dados do formulário para um servidor ou realizar outra ação
      console.log(input.value); // Exemplo: console.log a resposta do usuário
    });
  });
});