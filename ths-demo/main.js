(function () {
  let main = {
    init () {
      this.bind()
    },
    bind () {
      let btn = document.getElementById('btn')
      let loginBtn = document.getElementById('login')
      if (!btn) return
      let that = this;
      loginBtn.addEventListener('click',()=>{
        that.loginTest()
      })
      btn.addEventListener('click', function () {
        let url = document.getElementById('url')
        if (!url.value) {
          console.error('please enter your url')
          return
        }
        chrome.tabs.getSelected(null, function (tab) {
          chrome.cookies.getAll({ url: tab.url }, function (cookies) {
            cookies.forEach(function (cookie) {
              chrome.cookies.set({
                url: url.value,
                name: cookie.name,
                value: cookie.value
              })
            })
            chrome.tabs.create({ url: url.value });
          })
        })
      })
    },
    loginTest(){
        // $.ajax({
        //   type:"POST",
        //   url:"http://localhost:3000/",
        //   data:{Name:"thsName",Password:"thsPassowrd"},
        //   beforeSend:function(){},
        //   success:function(data){
        //     console.log(data)
        //   }   ,
        //   error: function(){
        //   }
        // });

      var bgPage = chrome.extension.getBackgroundPage();
      bgPage.loginPost({Name:"thsName",Password:"thsPassowrd"},(data)=>{
        console.log('popUp',data)
      })
    }
  }
  main.init()
})()

