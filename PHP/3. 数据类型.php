<?php
  //弱类型语言，变量本身没有数据类型，是存储数据本身的数据类型
  //一、简单（基本）数据类型：整型（int/integer）；浮点型（float/double）；字符串型（string）；布尔类型（Boolean）
  //二、复合数据类型：对象类型（object）；数组类型（array）
  //三、特殊数据类型：资源类型（resource）-存放资源数据库PHP外部数据库、文件等；空类型（NULL）
  // 1.1 布尔类型转换
  var_dump((bool)false);   //布尔值false本身为false
  var_dump((bool)0);       //整型值0为false
  var_dump((bool)0.0);     //浮点型0.0为false
  var_dump((bool)'');      //空字符串为false
  var_dump((bool)'0');     //空字符串’0‘为false
  var_dump((bool)[]);      //不包括任何元素的数组
  var_dump((bool)null);    //NULL为false
  var_dump((bool)$a);      //未被赋值的变量
  echo '<hr>';

  // 1.2 字符串单双引号区别
  $a = 10;
  echo 'abc$a','<br/>',"abc$a",'<br/>';  // 区别1：单引号里面的变量不会被解析，双引号里变量会被解析
  echo 'abc\'',"abc\"",'<br/>';
  echo 'abc\\',"abc\\",'<br/>';          // 区别2：单引号只会解析\',\\
  echo 'abc\r',"abc\rdef";               // 区别3：单引号不会对其它\r,\n解析


  echo '<hr>';
  //数据类型转换
  //一、自动转换
  //1、其它类型转数值
  //1.1 布尔true为1，false为0；
  //1.2 以字母开头的字符串，永远为0；
  //1.3 以数字开头的字符串，取到碰到字符串为止（不会同时含两个小数点）；
  $a = '1.1.1abv';
  $b = 'abc1.1.1';
  echo $a + $b;         //自动转换
  echo '<hr>';
  echo (float)$a,'<br/>',(float)$b;    //强制转换
  //二、强制手动转换：（数值类型）被转换数

  //数据类型判断
  //一、is_数值类型（变量）：匹配为true，不匹配为false
  echo '<hr>';
  $a = '1.1.1abc';
  var_dump($a);       //var_dump输出变量的类型和值
  echo '<br/>';
  var_dump(is_int($a));
  var_dump(is_string($a));

  //二、Gettyoe(变量名)：得到该类型对应的字符串
  echo '<hr>';
  $a = '1.1';
  $b = 1.1;
  echo gettype($a),gettype($b);

  //设定数据类型：settype(类型)变量,会改变数据的实际存储类型；
  echo '<hr>';
  $a = 'abc';
  $b = 123;
  settype($a,int);
  settype($b,string);
  echo $a,'<br/>',gettype($a),'<br/>',$b,'<br/>',gettype($b);
?>
