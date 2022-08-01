<?php
  $opr = $_REQUEST['opr'];
  $num1 = $_REQUEST['num1'];
  $num2 = $_REQUEST['num2'];
  switch ($opr) {
    case '正方形':
      $rel = $num1 * $num1;
      echo "正方形的面积是：$rel";
      break;
    case '圆形':
      $rel = 3.14 * $num1 * $num1;
      echo "圆形的面积是：$rel";
      break;
    case '等腰三角形':
      echo '待算';
  }
?>
