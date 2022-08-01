<?php
  //定义常量
  //方法1：使用函数define('常量名','常量值')；
  define('PI', 3.14);          //通常以大写字母开头

  //方法2：使用const关键词
  const PII = 3;
  echo PI, '</br>', PII, '</br>';

  //定义特殊常量:只能永define
  define('-_-', 'smile');
  echo constant('-_-');  //特殊常量访问函数constant('常量名');
  echo '</br>',constant('PI'),'</br>';

  //系统常量
  echo PHP_VERSION,'</br>';            //版本号
  echo PHP_INT_SIZE,'</br>';           //整型占有的字节数
  echo PHP_INT_MAX,'</br>';            //最大值

  //系统魔术常量
  echo __DIR__,'</br>';                //当前被执行的脚本在电脑中的绝对定位
  echo __FILE__,'</br>';               //当前被执行的脚本在电脑中的绝对定位，带自己的文件名
  echo __LINE__,'</br>';               //当前所在行

  echo __NAMESPACE__,'</br>';
  echo __CLASS__,'</br>';
  echo __METHOD__,'</br>';
?>
