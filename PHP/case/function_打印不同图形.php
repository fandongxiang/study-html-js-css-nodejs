<?php
  $num = 5;
  for ($i = 0; $i < $num; $i++) {
    for ($k = 0; $k < $num - 1 - $i; $k++) {
      echo "&nbsp;";
    };
    $str = '';
    for ($j = 0; $j < 2 * $i + 1;$j++) {
      $str .= '*';
    };
    echo $str.'<br/>';
  }
