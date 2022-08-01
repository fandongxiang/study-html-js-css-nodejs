<?php
  $score = array('赵'=>7,'钱'=>8,'孙'=>9.5,'李'=>5);
  //去掉最高、最低分的最终得分
  function averScore($score) {
    $max = 0;
    $min = 100000;
    $sum = 0;
    foreach ($score as $k => $val) {
      if ($val > $max) {
        $max = $val;
      };
      if ($val < $min) {
        $min = $val;
      };
      $sum += $val;
    }
    $averge = ($sum - $max - $min) / (count($score) - 2);
    echo '最终得分为：'.$averge;
  };
  averScore($score);
  echo '<hr>';

  //找出打最低、最高分的评委
  function people($score) {
    $max = 0;
    $min = 100000;
    $sum = 0;
    $maxStr = '';
    $minStr = '';
    foreach ($score as $k => $val) {
      if ($val > $max) {
        $max = $val;
        $maxStr = $k;
      };
      if ($val < $min) {
        $min = $val;
        $minStr = $k;
      };
      $sum += $val;
    }
    echo "给出最低分$min"."分的评委是 $minStr".'<br/>';
    echo "给出最高分$max"."分的评委是 $maxStr".'<br/>';
  };
  people($score);
  echo '<hr>';
  //找出最佳评委和最差评委
  function best($score) {
    $max = 0;
    $min = 100000;
    $sum = 0;
    $maxStr = '';
    $minStr = '';
    $avg = averScore($score);
    foreach ($score as $k => $val) {
      if (abs(($val - $avg)) < $min) {
        $min = $val;
        $minStr = $k;
      };
      if (abs(($val - $avg)) > $max) {
        $max = $val;
        $maxStr = $k;
      }
    };
    echo "最佳评委是：$minStr".'<br/>';
    echo "最差评委是：$maxStr";
  };
  best($score);                             //输出为啥是相反的