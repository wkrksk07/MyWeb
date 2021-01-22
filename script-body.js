var Links = {
    setColor:function (color_1){
    var alist = document.querySelectorAll('a');
      var i = 0;
      while(i < alist.length){
      console.log(alist[i]);
      alist[i].style.color = color_1;
      i=i+1;
      }
  }
  }

  var Body = {
    setColor:function (color_1){
    document.querySelector('body').style.color = color_1;
    },
    bodySetBackGroundColor:function (color_1){
    document.querySelector('body').style.backgroundColor = color_1;
   }
  }

  var class_1 = {
    setClass_1:function (btn_1, btn_2, id_1){
    document.getElementById(id_1).classList.add(btn_1);
    document.getElementById(id_1).classList.remove(btn_2);
  }
  }

  function DarkwhiteHandler(self, id_1){
    var target = document.querySelector('body');
    if(self.value === 'Dark'){
      Body.bodySetBackGroundColor('black');

      Body.setColor('white');

      self.value = 'White';

      class_1.setClass_1('_btn-2', '_btn-1', id_1);

      alert('아직 불안정한 Dark모드 입니다.');
      
      Links.setColor('white');
      
    }else{
      Body.bodySetBackGroundColor('white');

      Body.setColor('black');

      self.value = 'Dark';

      class_1.setClass_1('_btn-1', '_btn-2', id_1);

      Links.setColor('black');
      }
    }