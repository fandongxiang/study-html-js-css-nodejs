<?php
  $score = array('001'=>95,'113'=>94.2,'179'=>88,'542'=>88,'784'=>100);
  //输入学号查询成绩
  function idToScore($id) {
    //global $score;
    echo '您要查询的学生成绩是：'.$GLOBALS['score'][$id];     //php函数内引用全局变量两种方法之一
  };
  idToScore(179);
  echo '<hr>';
  //输入成绩查询学号
  function scoreToId($sco) {
    $str = '';
    foreach ($GLOBALS['score'] as $k=>$val) {
      if ($val == $sco) {
        $str .= $k.' ';
      }
    };
    if ($str) {                                            //利用空字符串的布尔值为false
      echo '您要查询的学生成绩为'.$sco.'的学号有'.$str;
    }else {
      echo '您查询的学生成绩不存在';
    }
  };
  scoreToId(88);
  echo '<hr>';
  //统计各个阶段的学生人数
  function countPeople() {
    global $score;
    $exc = 0;
    $soso = 0;
    $awe = 0;
    foreach ($score as $k => $val) {
      if ($val >= 90) {
        $exc++;
      }elseif ($val >= 60) {
        $soso++;
      }else {
        $awe++;
      }
    };
    echo '学生成绩优秀人数为(大于90分)：'.$exc.'<br/>';
    echo '学生成绩良好人数为(60-90分)：'.$soso.'<br/>';
    echo '学生成绩差人数为(小于60分)：'.$awe.'<br/>';
  };
  countPeople();
  echo '<hr>';
  //输入学号实现删除成绩功能
  function delete($id) {
    global $score;
    $i = 0;
    foreach ($score as $k => $val) {
      if ($id == $k) {
        unset($score[$k]);
        echo '您已成功删除学号为'.$id.'的学生的成绩';
        $i++;
      };

    };
    if ($i == 0) {
      echo '您输入的学号不存在';
    }
  };
  delete(001);
  echo '<br/>';
  delete(001);