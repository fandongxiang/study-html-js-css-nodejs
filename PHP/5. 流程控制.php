<?php
  //php相互引用
  // 1.require require_once: require_once先判断是否引入，只会引入一次
  require './case/require.php';
  require './case/require.php';
  require_once './case/require.php';     //前面有引入不会重复引入
  require_once './case/require.php';
  require './case/require.php';
  require './case/login.html';           //也可以引入html文件
  include 'noexit.php';                  //☞include出现错误会警告，但是会继续执行

  echo '<hr>';
  //if分支
  $day = 'friday';
  if ($day == 'sunday') {
    echo 'go out';
  } elseif ($day == 'monday') {
    echo 'work';
  } elseif ($day == 'friday') {
    echo 'relax';
  };
  echo '<hr>';

  //switch分支
  $friut = 'apple';
  switch ($friut) {
    case 'apple':
      echo 'apple price is 1.5$/kg';
    break;
    case 'bnana':
      echo 'bnana price is 2$/kg';
    break;
    default:
      echo 'null';
  };
  echo '<hr>';

  //for循环
  for ($i = 0; $i < 100; $i++) {
    $sum += $i;
  };
  echo $sum;
  echo '<hr>';

  for ($i = 0; $i < 5; $i++) {
    $str = ' ';
    for ($j = 0; $j < 5; $j++) {
      $str .= '⭐';
    };
    echo $str.'<br/>';
  };
  echo '<hr>';

  for ($i = 0; $i < 5; $i++) {
    $str = '';
    for ($j = 0; $j < $i + 1; $j++) {
      $str .= '⭐';
    };
    echo $str.'<br/>';
  };
  echo '<hr>';

  for ($i = 1; $i < 10; $i++) {
    $str = '';
    for ($j = 1; $j < $i + 1; $j++) {
      $str .= $j.'*'.$i.'='.$i * $j.' ';
    };
    echo $str.'<br/>';
  };
  echo '<hr>';

  // break i ：退出第i次循环
  for ($i = 0; $i < 13; $i++) {
    if ($i == 10) {
      break;             //break默认跳出1次循环体
    };
    echo $i;
  };
  echo '<hr>';
  // 退出多层循环体
  $i = 0;
  while (++$i) {
    switch ($i) {
      case 5:
        echo 'quit at 5';
        break;            //退出当前switch循环
      case 10:
        echo 'quit at 10';
        break 2;         //退出while循环体
    };
  };
  echo '$i='.$i;
  echo '<hr>';

  //continue：跳出当前循环剩余的代码
  for ($i = 0; $i < 13; $i++) {
    if ($i == 10) {
      continue;         //默认跳出当前循环次后面的代码
    };
    echo '$i='.$i.'<br/>';
  };
  echo '<hr>';
  //continue:跳出第n层循环后的代码
  for ($i = 0;$i < 2;$i++) {
    for ($j = 0; $j < 4;$j++) {
      if ($j == 2) {
        continue 2;               //退出j==2时候两次循环
      }
      echo '$i='.$i.'$j='.$j.'<br/>';
    }
  };
  echo '<hr>';

  //goto语句：goto 标签；标签：
  goto a;
  echo 'aa';
  a:
  echo 'bb';
  echo '<hr>';

  for($i = 0,$j = 50;$i < 100;$i++) {
    while($j--) {
      if ($j == 17) goto end;
    };
  };
  echo "i=$i";
  end:
  echo 'j=17';
?>
