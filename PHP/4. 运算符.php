<?php
  $a = 123;
  $b = '123';
  var_dump($a == $b);    //等值不等型
  var_dump($a === $b);   //等值等型
  var_dump($a == 123 && $b === 123);   //逻辑与
  var_dump($a === '123' || $b == 123);  //逻辑或
  var_dump(!$a === 123);   //逻辑非
  echo '<hr>';

  //连接运算符
  $a = 'hello';
  $b = 'PHP';
  $c = $a.' '.$b;
  echo $c;

  echo '<hr>';
  $a = 'xiang';
  $b = 'zai';
  $a .= $b;
  echo $a;
  echo '<hr>';

  //错误抑制符
  $a = 5;
  $b = 0;
  $a / $b;
  @($a / $b);
  echo '<hr>';

  //三元运算符
  $a = 'hello';
  echo is_int($a) ? '输入正确' : '请输入数字';
  echo '<hr>';

  //自操作运算符
  $a = 1;
  $b = 1;
  echo ++$a,'<br/>',$b++,'<br/>';
  $a += $b;
  echo $a;
  echo '<br/>';
  $a -= $b - 1;    //a = a - (b - 1)
  echo $a;
  echo '<hr>';

  //类型运算符
  class Cat{};
  class Dog{};
  $cat1 = new Dog;
  if ($cat1 instanceof Dog) {
    echo '$cat1 是一只猫';
  };
  if (123 instanceof int) {
    echo '123是数字'
  };                                // instanceof 只能判断对象即类中

?>
