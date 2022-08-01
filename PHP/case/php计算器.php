<?php
  $num1 = $_REQUEST['num1'];
  $num2 = $_REQUEST['num2'];
  $oper = $_REQUEST['oper'];
  switch ($oper) {
    case '+':
      $rel = $num1 + $num2;
      break;
    case '-':
      $rel = $num1 - $num2;
      break;
    case '*':
      $rel = $num1 * $num2;
      break;
    case '/':
      $rel = $num1 + $num2;
      break;
    default:
      echo '运算符不正确';
  };
  echo '计算结果是:'.$rel;
  echo '<a href="计算器.html">点我返回</a>'
?>
