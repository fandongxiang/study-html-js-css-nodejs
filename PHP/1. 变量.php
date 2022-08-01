<?php
  $var = 1;
  echo $var,'</br>';
  $a = 'b';
  $b = 3;
  echo $$a,'</br>';

  //值传递:只将变量值传递给新变量
  $a = 3;
  $b = $a;
  $b = 1;
  echo $a,$b,'</br>';

  //引用传递:将变量地址传递给新变量
  $a = 3;
  $b = &$a;
  $b = 1;
  echo $a,$b;
?>


