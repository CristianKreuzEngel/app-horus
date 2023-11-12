var form = document.createElement('form');
form.id = 'vocationalTest';

var h1 = document.createElement('h1');
h1.textContent = 'Teste Vocacional';
form.appendChild(h1);

var p = document.createElement('p');
p.textContent = 'Responda às seguintes perguntas:';
form.appendChild(p);

var ol = document.createElement('ol');
for (var i = 0; i < 20; i++) {
    var li = document.createElement('li');

    var question = document.createElement('p');
    question.className = 'question';
    question.textContent = 'Pergunta ' + (i + 1);
    li.appendChild(question);

    ['a', 'b', 'c', 'd'].forEach(function(letter) {
        var input = document.createElement('input');
        input.type = 'radio';
        input.id = 'q' + (i + 1) + letter;
        input.name = 'q' + (i + 1);
        input.value = letter;
        li.appendChild(input);

        var label = document.createElement('label');
        label.htmlFor = input.id;
        label.textContent = 'Resposta ' + letter.toUpperCase();
        li.appendChild(label);

        li.appendChild(document.createElement('br'));
    });

    ol.appendChild(li);
}
form.appendChild(ol);

var submit = document.createElement('input');
submit.type = 'submit';
submit.value = 'Enviar';
form.appendChild(submit);

document.body.appendChild(form);

document.getElementById('vocationalTest').addEventListener('submit', function(event) {
    event.preventDefault();
    alert('Formulário enviado!');
});
