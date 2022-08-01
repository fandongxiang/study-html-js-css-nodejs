<?php
  // count(array):计算数组的单元数目
  $num = [1,5,3,8];
  $sum = 0;
  for ($i = 0; $i < count($num); $i++) {
    $sum += $num[$i];
  };
  echo $sum;
  echo '<hr>';

  //is_array($arr)
  $abc = 0;
  var_dump(is_array($abc));
  echo '<hr>';

  //explode('字符串分隔符',$str):将字符串按特定分隔符分隔后存储为数组
  $str ='hello php hello world';
  $str = explode(' ',$str);
  foreach ($str as $k=>$val) {
    echo $val.'<br/>';
  }
  echo '<hr>';

  //unset($arr[index]):删除某个数组元素，但索引不会重新排列
  $arr2[0] = 0;
  $arr2[1] = 1;
  $arr2[2] = 2;
  echo '删除前：'.$arr2[1].$arr2[2];
  unset($arr2[1]);
  echo '删除后：'.$arr2[1].$arr2[2];
  echo '<hr>';

  //创建数组的几种方式
  $a = array(1,189,6,5);
 /* for ($i = 0; $i < count($a); $i++) {
    echo '<br/>'.$a[$i];
  };*/
  $sum = 0;
  foreach ($a as $val) {
    $sum += $val;
  };
  echo $sum;
  echo '<hr>';

  //创建数组自定义下标
  $info = array('name'=>'fan','age'=>27,'sex'=>'男');
  foreach ($info as $k=>$val) {           //foreach遍历：k是数组下标，val是值
    echo $k.'='.$val.'<br/>';
  };
  echo '<img src="image/foreach逻辑图.png" style="width: 800px;">','<hr>';

  //无下标是以最大下标自增
  $arr = array(5=>'fan','dong','xiang');
  foreach ($arr as $k=>$val) {
    echo $k.'='.$val.'<br>';
  };
  echo '<hr>';

  //true<==>1,null<==>''
  $arr1[true] = 10;
  $arr1[null] = 50;
  echo $arr1[1].'<br/>'.$arr1[''];
  echo '<hr>';

  //利用print_r或者var_dump查看数组结构
  $arr[1] = 'name';                      //php数组可以动态增长
  print_r($arr);
  echo '<br/>';
  var_dump($arr);