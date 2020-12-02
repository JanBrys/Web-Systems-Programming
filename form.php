<!DOCTYPE html>

<html>
   <head>
      <meta charset = "utf-8">
      <title>Form Validation</title>
      <style type = "text/css">
         p       { margin: 0px; }
         .error  { color: red }
         p.head  { font-weight: bold; margin-top: 10px; }
      </style>
   </head>
   <body>
      <?php
         if (!preg_match( "/^\([0-9]{3}\)[0-9]{6}$/",
            $_POST["phone"]))
         {
            print( "<p class = 'error'>Niewłaściwy numer telefonu</p>
               <p>Musi to być 9 cyfr</p><p>Wróć i popraw.</p></body></html>" );
            die();
         }
      ?>
      <p>Dzień dobry, <?php print( $_POST["name"] ); ?>. Rejestracja została wysłana na maila:
         <?php print( $_POST["email"] ); ?> Skontaktuj się, by odebrać nagrodę.</p>
      <p class = "head">Zapisano następujące informacje:</p>
      <p>Imię i nazwisko: <?php print( $_POST["name"] ); print(" ");
         print( $_POST["surname"] ); ?></p>
      <p>Email: <?php print( $_POST["email"] ); ?></p>
      <p>Phone: <?php print( $_POST["phone"] ); ?></p>
      <p>Data urodzin: <?php print( $_POST["day"]. (" ").$_POST["month-choice"].(" "). $_POST["year"] ); ?></p>

      <?php
      if (strcmp( $_POST["name"], "Tomasz") == 0) {
        print("<p>Masz na imię Tomasz!</p>");
      }
      else if ($_POST["name"] == "Jan") {
        print "<p>Masz na imię Jan!</p>" ;
      }
      $string = $_POST["name"];
      $patterns = array();
      $patterns[0] = '/Tomasz/';
      $patterns[1] = '/Jan/';
      $replacements = array();
      $replacements[1] = 'Tomek';
      $replacements[0] = 'Janek';
      print ("Chyba się znamy! Będziemy się do ciebie zwracać per ");
      print (preg_replace($patterns, $replacements, $string));
      $string = 12.3;
      print("<br><br>Typowanie dynamiczne: ".$string);
      settype( $string, "double" );
      print("<br><br>Konwersja na double: ".$string);
      settype( $string, "integer" );
      print("<br>Konwersja na int: ".$string);
      print("<br>Rzutowanie na double: ".(double) $string);
      print("<br>Konwersja na string: ".(string) $string);
      print("<br><br>");
      define( "VALUE", 5 );
      print("Suma 'string' + VALUE: ".$string = $string + VALUE."<br>");
      print("'string' * 2: ".$string *= 2+1);
      print("<br><br>");


      define( "FIVE_DAYS", 60 * 60 * 24 * 5 );
      setcookie( "name", $_POST["name"], time() + FIVE_DAYS );
      setcookie( "surname", $_POST["surname"], time() + FIVE_DAYS );
      print("<br><br>"."Zapisane ciastka:");
      foreach ($_COOKIE as $key => $value )
      print( "<p>$key: $value</p>" );
      print("<br><br>");


      $array[$_POST["name"]] = 2020 - $_POST["year"];
      $array[ "Agnieszka" ] = 21;
      $array[ "Bożena" ] = 23;
      $array[ "Cezary" ] = 18;
      for ( reset( $array ); $element = key( $array ); next( $array ) )
      print( "<p>$element is $array[$element]</p>");
      print("Jest ".count($array)." elementów w tablicy");
      print("<br><br>");

      $tablica[0] = $_POST["email"];
      $tablica[1] = "a@wp.pl";
      $tablica[2] = "b@gmail.com";
      $tablica[3] = "c@onet.pl";

      for ($i = 0; $i < 4; $i++)
        print( $tablica[$i]."<br>");

      ?>

   </body>
</html>
