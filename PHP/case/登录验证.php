<?php
  $Uname = $_REQUEST['userName'];
  $pw = $_REQUEST['pw'];
  if ($Uname == 'a' && $pw == '123' || $Uname == 'b' && $pw == '456') {
    echo "欢迎您：$Uname";
  }elseif ($Uname == 'a' && $pw != '123' || $Uname == 'b' && $pw != '456') {
    echo '输入密码错误';
  }
  else {
    echo '用户不存在';
  };
?>
