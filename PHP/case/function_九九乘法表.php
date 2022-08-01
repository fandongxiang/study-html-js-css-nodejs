<?php
  function multi($num1) {
    if ($num1 <= 9) {
      for ($i = 1; $i <= $num1; $i++) {
        $str = '';
        for ($j = 1; $j <= $i; $j++ ) {
          $rel = $j.'*'.$i.'='.$j * $i;
          $str .= $rel.' ';
        };
        echo $str.'<br/>';
      }
    } else {
      echo '你输入的数字不能大于9';
    }

  };
  multi(9);
