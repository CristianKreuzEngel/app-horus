<?php
    $dbHost = 'Localhost';
    $dbUsername = 'root';
    $dbPassword = '';
    $dbName = 'projetohorus';


    $conection = new mysqli(
        $dbHost,
        $dbUsername,
        $dbPassword,
        $dbName
    );

    // verificação de conexão
    // if($conection -> connect_errno){
    //     echo "Error";
    // }else{
    //     echo "conexão efetuada com sucesso";
    // }

?>