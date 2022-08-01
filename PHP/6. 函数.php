<?php
  function opr($num1,$num2,$opr) {               //函数名不区分大小写，opr和OPR同样的
  if (is_numeric($num1) && is_numeric($num2)) {
    switch ($opr) {
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
        $rel = $num1 / $num2;
        break;
      default:
        $rel = '请输入合法运算符';
    }
    }else {
      $rel = '请输入数字';
  };
    return $rel;
  };

  //函数调用--递归调用
  echo '<hr>';
  echo '<img src="./image/img.png" style="width: 800px;">';
  echo '<hr>';
  function abc($n) {
    if ($n > 2) {
      abc(--$n);             //注意：这里不能写成$n--，开始会把4传进去形成死循环
    }
    echo '$n='.$n.'<br/>';
  };
  abc(4);
  echo '<hr>';
  function abc1($n) {
  if ($n > 2) {
    abc1(--$n);
  }else {
    echo '$n='.$n.'<br/>';
  }
  };
  abc1(4);
  echo '<hr>';
  echo '<img src="./image/img_1.png" style="width: 800px;">';
  echo '<hr>';

  //函数默认值
  function fn ($a,$b = 2) {
    $rel = $a + $b;
    return $rel;
  };
  $a = 4;
  echo fn($a);
  echo '<hr>';
  //引用地址传递&
  //情形1
  $a = 213;
  function abc2 ($b) {      //默认是传递值
    $b = 314;
  };
  abc2($a);
  echo $a.'<br/>';
  //情形2
  $a = 213;
  function abc3 (&$b) {   //引用传递，将地址传递进去
    $b = 314;
  };
  abc3($a);
  echo $a,'<br/>';
  echo '<img src="image/img_2.png" style="width: 800px;">';



