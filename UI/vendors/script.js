 var reader;
 var user;
    function encodeImageFileAsURL(element) {
        var file = element.files[0];
        reader = new FileReader();
        reader.readAsDataURL(file);
        console.log('Result: ', reader.result);
    }

    $(document.getElementById("uploadImageButton")).click(function(){
        $.ajax({
          url:"http://localhost:52232/api/DataManagement/UploadImage",
          type:"POST",
          data:JSON.stringify({_id: "test-creation-1236",caption: "test",name: "test-1",imageB64:reader.result}),
          contentType:"application/json; charset=utf-8",
          dataType:"json",
          success: function(response){

          }
        })});

        $(document.getElementById("loginBtn")).click(function(){
        uname=document.getElementById("log_uname").value;
        password=document.getElementById("log_psw").value;
        $.ajax({
          url:"http://localhost:51748/api/login/",
          type:"POST",
          data:JSON.stringify({_id:uname,password:password}),
          contentType:"application/json; charset=utf-8",
          dataType:"json",
          success: function(response){
            if(response==201){
              user=uname;
              document.getElementById("Login").style.display='none';
                {document.getElementById("loginBtns").innerHTML="Welcome back "+uname+"!";}
                  }

          }
        })});



      $(document.getElementById("registerBtn")).click( function(){
          regUname=document.getElementById("reg_uname").value;
          regPsw=document.getElementById("reg_psw").value;
          $.ajax({
          url:"http://localhost:51748/api/login/createuser",
          type:"POST",
          data:JSON.stringify({_id: regUname,password: regPsw}),
          contentType:"application/json; charset=utf-8",
          dataType:"json",
          success: function(response){
                if(response==0)
                {
                  user=regUname;
                  document.getElementById('Register').style.display='none';
                  document.getElementById("loginBtns").innerHTML="Welcome "+regUname+"!";
                }
                else{
                  alert("This user name is already exist please sign in with another user name!")
                }
            }

        })});

       $(document.getElementById("subscribeBtn")).click( function(){
          var subscribee=document.getElementById("subscribee").value;
          
          $.ajax({
          url:"http://localhost:54887/api/subscription/subscribe",
          type:"POST",
          data:JSON.stringify({id: user,subscribeeID: subscribee}),
          contentType:"application/json; charset=utf-8",
          dataType:"json",
          success: function(response){
                if(response==1 || response==2)
                {
                  document.getElementById('Register').style.display='none';
                  document.getElementById("loginBtns").innerHTML="Welcome !";
                }
     
            }

        })});


        function loadImages(userId){

          $.ajax({
          url:"http://localhost:51748/api/datamanegment/r",
          type:"POST",
          data:JSON.stringify({_id: regUname,password: regPsw}),
          contentType:"application/json; charset=utf-8",
          dataType:"json",
          success: function(response){

          }
        })}








        // function foo(){
        //   return $.ajax({
        //   url:"http://localhost:51748/api/login/createuser",
        //   type:"POST",
        //   data:JSON.stringify({_id: regUname,password: regPsw}),
        //   contentType:"application/json; charset=utf-8",
        //   dataType:"json"
        // })
        // }


      //   function makeAjaxCall(url,methodType,callback,data){
      //   var xhr = new XMLHttpRequest();
      //   xhr.onreadystatechange = function(){
      //    if (xhr.readyState === 4){
      //    if (xhr.status === 200){
      //      console.log("xhr done successfully");
      //      var resp = xhr.responseText;
      //      var respJson = JSON.parse(resp);
      //      callback(respJson);
      //   }
      //     }
      //     }
      //   xhr.open(methodType, url, true);
      //   xhr.send(data);
      // }



      //   function processRegisterResponse(data){
      //     if(data==0)
      //       {document.getElementById("loginBtns").innerHTML="Hello"+
      //       regUname
      //      }
      //      else{
      //       document.alert("Cannot Register please try again!")
      //      }
      //   }


      // document.getElementById("registerBtn").addEventListener("click", function(){
      //     regUname=document.getElementById("reg_uname").value;
      //     regPsw=document.getElementById("reg_psw").value;
      //     var loginData= JSON.stringify({_id: regUname,password: regPsw});
      //     var URL ="http://localhost:51748/api/login/createuser";
      //     makeAjaxCall("http://localhost:51748/api/login/createuser", "Post",processRegisterResponse,loginData);
      //  });

      // document.getElementById("LoginBtn").addEventListener("click", function(){
      //   uname=document.getElementById("log_uname").value;
      //   password=document.getElementById("log_psw").value;
      //     var data="{_id: uname,password: password}";
      //     var URL = "http://localhost:51748/api/login/createuser";
      //     makeAjaxCall(URL, "Post", processRegisterResponse,data);
      //  });
      

      // function processUserRegisterResponse(data){
      // console.log("render user details", userData);
      // }

      // document.getElementById("registerBtn").addEventListener("click", function(){
      //     regUname=document.getElementById("reg_uname").value;
      //     regPsw=document.getElementById("reg_psw").value;
      //     var loginData= "{_id: regUname,password: regPsw}";
      //     var URL ="http://localhost:51748/api/login/createuser";
      // $.post(URL,loginData)
      //   .done(function( data ) { alert( "Data Loaded: " + data );
      //     });
      //  })
     

 
