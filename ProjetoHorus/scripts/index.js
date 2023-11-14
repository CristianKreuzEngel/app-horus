// function fazPost(url, body) {
//     let request = new XMLHttpRequest();
//     request.open("POST", url, true);
//     request.setRequestHeader("Content-type", "application/json");
//     request.send(JSON.stringify(body));

//     request.onload = function () {};

//     return request.responseText;
//   }

//   // Captura o valor do campo input
//   function enviarDados() {
//     event.preventDefault();
//     let url = "http://127.0.0.1:5500/user";
//     let name = document.getElementById("nome").value;
//     let sobrenome = document.getElementById("sobrenome").value;
//     let telefone = document.getElementById("Telefone").value;
//     let cidade = document.getElementById("cidade").value;
//     console.log("teste");

//     body = {
//       name: name,
//       sobrenome: sobrenome,
//       telefone: telefone,
//       cidade: cidade
//     };
//   }
  function getCareer() {
    var questions = [
      "question1",
      "question2",
      "question3",
      "question4",
      "question5",
      "question6",
      "question7",
      "question8",
      "question9",
      "question10",
      "question11",
      "question12",
      "question13",
      "question14",
      "question15",
      "question16",
      "question17",
      "question18",
      "question19",
      "question20",
    ];
    var careers = { a: 0, b: 0, c: 0, d: 0 };

    for (var i = 0; i < questions.length; i++) {
      var radios = document.getElementsByName(questions[i]);
      for (var j = 0; j < radios.length; j++) {
        if (radios[j].checked) {
          careers[radios[j].value]++;
        }
      }
    }

    var max = 0;
    var career = "";
    for (var key in careers) {
      console.log(key);

      if (careers[key] > max) {
        max = careers[key];
        career = key;
      }
    }
    console.log(career);
    if (career == "a") {
      document.getElementById("result").innerHTML =
        "Sua maior pontuação foi em: a)";
      document.getElementById("result1").innerHTML =
        "A principal característica dos relacionados com a opção a), é o " +
        "movimento; gostam de novidade. Apresentam destreza física e boa expressão " +
        "corporal. Se forem mais propensos ao raciocínio lógico, terão mais êxito em " +
        "profissões que requeiram precisão e acuidade. Se forem mais inclinados ao" +
        "sentimento e à emoção, as profissões relacionadas ao trato com pessoas são " +
        "as mais indicadas. Pessoas assim, não gostam de rotina e veem o trabalho " +
        "como uma grande fonte de prazer.);<br>Carreiras mais apropriadas:<br>Esportista";
      document.getElementById("result2").innerHTML =
        "- Anestesista<br>" +
        "- Artista Plástico<br>" +
        "- Ator<br>" +
        "- Chef de Cozinha<br>" +
        "- Cineasta<br>" +
        "- Cirurgião<br>" +
        "- Coreógrafo<br>" +
        "- Dançarino<br>" +
        "- Dermatologista<br>" +
        "- Estilista<br>" +
        "- Fotógrafo<br>" +
        "- Guia de Turismo<br>" +
        "- Instrumentador Cirúrgico<br>" +
        "- Instrutor de Vôo<br>" +
        "- Jornalista<br>" +
        "- Médico Clínico<br>" +
        "- Músico<br>" +
        "- Paisagista<br>" +
        "- Personal Trainner<br>" +
        "- Personal Stylistic<br>" +
        "- Piloto<br>" +
        "- Publicitário<br>" +
        "- Relações Públicas<br>" +
        "- Roteirist";
      // document.getElementById("result").innerHTML = "Sua carreira sugerida é: " + career;
    } else if (career == "b") {
      document.getElementById("result").innerHTML =
        "Maior pontuação em: b)";
      document.getElementById("result1").innerHTML =
        "Comando e responsabilidade são duas palavras que definem as pessoas" +
        "desta opção. Elas gostam de lidar com fatos, quantidades, análises, " +
        "organização e planejamento. Trabalham duro e preferem profissões que lhes" +
        "proporcionem status e possibilidade de crescimento. São as mais presentes " +
        "no mundo corporativo.<br>Carreiras mais apropriadas:<br>";
      document.getElementById("result2").innerHTML =
        "- Administrador de Empresas<br>" +
        "- Advogado<br>" +
        "- Assistente Social<br>" +
        "- Bibliotecário<br>" +
        "- Delegado<br>" +
        "- Engenheiro Mecânico/Químico<br>" +
        "- Juiz de Direito<br>" +
        "- Pastor, Padre, Rabino<br>" +
        "- Policial<br>" +
        "- Promotor Público<br>";
    } else if (career == "c") {
      document.getElementById("result").innerHTML =
        "Maior pontuação em: c)";
      document.getElementById("result1").innerHTML =
        "Facilmente reconhecíveis por seu entusiasmo e interesse nas relações" +
        "humanas, as pessoas desta opção têm na intuição o seu ponto forte. Muitas" +
        "endereçam seu esforço e talento para o desenvolvimento intelectual de" +
        "alunos e discípulos e o conforto psicológicos de pacientes e colegas de" +
        "trabalho. No grupo desta opção, estão as personalidades mais contempladas" +
        "com o Nobel da Paz e de literatura.<br>" +
        "Carreiras mais apropriadas:<br>";
      document.getElementById("result2").innerHTML =
        "- Artista plástico<br>" +
        "- Dramaturgo<br>" +
        "- Educador<br>" +
        "- Escritor<br>" +
        "- Filósofo<br>" +
        "- Jornalista<br>" +
        "- Pedagogo<br>" +
        "- Professor<br>" +
        "- Psicólogo<br>" +
        "- Psiquiatra<br>" +
        "- Sociólogo<br>" +
        "- Terapeuta ocupacional<br>" +
        "- Traduto<br>";
    } else if (career == "d") {
      document.getElementById("result").innerHTML =
        "Maior pontuação em: d)";
      document.getElementById("result1").innerHTML =
        "São intuitivos como os da opção anterior, mas, em vez de se preocupar" +
        "com pessoas, costumam focar seus interesses em grandes áreas do " +
        "conhecimento, como ciência e tecnologia. Apresentam notável capacidade " +
        "para identificar problemas concretos e resolvê-los, bem como para o " +
        "raciocínio abstrato.<br>" +
        "Carreiras mais apropriadas:<br>";
      document.getElementById("result2").innerHTML =
        "- Analista de Sistemas<br>" +
        "- Antropólogo<br>" +
        "- Arquiteto<br>" +
        "- Astrônomo<br>" +
        "- Criador de Software<br>" +
        "- Designer Industrial<br>" +
        "- Economista<br>" +
        "- Engenheiro<br>" +
        "- Físico<br>" +
        "- Líder de uma Corporação<br>" +
        "- Matemático<br>" +
        "- Militar<br>" +
        "- Músico (Regente)<br>" +
        "- Oceanógrafo<br>" +
        "- Pesquisador<br>" +
        "- Químico<br>" +
        "- Urbanista<br>" +
        "- Zoólogo";
    }
  }