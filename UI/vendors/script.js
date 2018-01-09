 var reader;
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
          dataType:"json"
        })});

        $(document.getElementById("loginBtn")).click(function(){
          console.log("here")
        uname=document.getElementById("log_uname").value;
        password=document.getElementById("log_psw").value;
        $.ajax({
          url:"http://localhost:51748/api/login/loginUser",
          type:"POST",
          data:JSON.stringify({_id:uname,password:password}),
          contentType:"application/json; charset=utf-8",
          dataType:"json"
        })});

        $(document.getElementById("registerBtn")).click(function(){
        regUname=document.getElementById("reg_uname").value;
        regPsw=document.getElementById("reg_psw").value;
        $.ajax({
          url:"http://localhost:51748/api/login/createuser",
          type:"POST",
          data:JSON.stringify({_id: regUname,password: regPsw}),
          contentType:"application/json; charset=utf-8",
          dataType:"json"
        })});



