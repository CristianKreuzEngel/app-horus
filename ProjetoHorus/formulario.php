
<!DOCTYPE html>
<html lang="ptbr">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <link rel="stylesheet" href="style/style.css" />
    <title>Formulário</title>
  </head>
  <body>
    <header class="cabecalho">
      <img src="img/LOGO NOVA HORUS.webp" class="logo" />
      <h1 id="titulo">Teste Vocacional</h1>
    </header>
    <main class="container">
      <form action="perguntas.php" method="POST">
      <div class="grupo">
        <fieldset class="grupo">
          <!-- Campo do nome com legenda "nome" e css de classe "campo" -->
          <div class="campo">
            <label for="nome"><strong>Nome</strong></label>
            <input type="text" name="nome" id="nome" required />
          </div>

          <!-- Campo do sobrenome com legenda "sobrenome" e css de classe "campo" -->
          <div class="campo">
            <label for="sobrenome"><strong>Sobrenome</strong></label>
            <input type="text" name="sobrenome" id="sobrenome" required />
          </div>
        </fieldset>
        <fieldset class="grupo">
          <div class="campo">
            <label for="Telefone"><strong>Telefone</strong></label>
            <input type="text" name="telefone" id="telefone" required />
          </div>

          <div class="campo">
            <label for="cidade"><strong>Cidade</strong></label>
            <input type="text" name="cidade" id="cidade" required />
          </div>
        </fieldset>
      </div>
      <input class="botao" type="submit" name="submit">
      <!-- <button class="botao" type="submit" onclick="getCareer()">Obter Resultado</button> -->
    </form>
      <div class="campo">
        <div id="result" class="resultado"></div>
        <div id="result1" class="resultadoText"></div>
        <div id="result2"></div>
      </div>
    </main>
    <script src="scripts/index.js">



    </script>
  </body>
</html>
