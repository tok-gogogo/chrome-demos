function loginPost(para,callBack){
  $.ajax({
    type:"POST",
    url:"http://localhost:3000/",
    data:para,
    beforeSend:function(){},
    success:function(data){
      console.log(data)
      callBack && callBack(data);
    }   ,
    error: function(){
    }
  });
}
