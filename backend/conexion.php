<?php

class Conexion
{

    static public function conectar()
    {
        $link = new PDO(
            "mysql:host=localhost;dbname=mi-sitio",
            "root",
            ""
        );

        // $link = new PDO(
        //     "mysql:host=localhost;dbname=c2210955_neo",
        //     "c2210955_neo",
        //     "riMA76lolu"
        // );

        $link->exec("set names utf8");

        return $link;
    }
}