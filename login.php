<!DOCTYPE html>
<html lang="es" dir="ltr">
  <head>
    <meta charset="utf-8">
    <title>Login trueley</title>
    <style media="screen">
      body{
        background: #c0c0c0;
        /* color: #fff; */
      }
      .asp{
        width: 200px;
        height: 200px;
        border: 4px #000 solid;
        padding: 4px;
        display: block;
        /* width: auto;
        height: auto; */
        position: absolute;
      }
      .asp div{
        width: 200px;
        height: 200px;
        background: #000;
        color: #fff;
        /* padding: 3px; */
        margin: 0;
        display: flex;
        justify-content: center;
        align-items: center;
        position: relative;
        float: left;
      }
      .asp div span{
        width: auto;
        max-width: 90%;
        height: auto;
        max-height: 90%;
        position: relative;
        float: right;
        /* background: rgba(255, 255, 255, 0.5); */
      }
      /* .asp div p{position: relative; float: left;} */
    </style>
    <script type="text/javascript" src="js/jquery-3.3.1.min.js"></script>
    <script type="text/javascript" src="js/engine.js"></script>
    <script type="text/javascript">
      function verifinput(){
        let userin = $('input[name="user"]').val();
        let passin = $('input[name="pass"]').val();
        // console.log(`${userin}:${passin}`);
        if(userin != '' && userin.length >= 4 && passin != '' && passin.length > 5){
          $('button[name="checklogin"]').prop('disabled',false);
        }
        else{
          $('button[name="checklogin"]').prop('disabled',true);
        }
      }
      function login(){
        let ObjData = extractValForm('loginData');
        var localLogin = new localDB('usersFastLogin',true);
        if(!localLogin.tableExists('users')){
          localLogin.addTable('users',{tags: ['user*','mail_login','pass','data'], comment: ' Offline login database'});
        }
        var localLoginData = localLogin.getRow('users',{user: ObjData.user});
        console.log(ObjData);/**/
        // console.log(localLogin);
        //trying localLogin
        console.log(localLoginData);/**/
        if(isset(localLoginData.user) && isset(localLoginData.pass) && isset(localLoginData.mail_login)){
          console.log('local login...');
          if(ObjData.user === localLoginData.user || ObjData.user === localLoginData.mail_login){
            console.log(decryptJS(localLoginData.pass,ObjData.pass));
            if(ObjData.user === decryptJS(localLoginData.pass,ObjData.pass)){
              console.log(QVCDec(localLoginData.data));
              // setCookie('session_data', QVCDec(localLoginData.data,ObjData.pass), 25*day);
              setCookie('session_data', decryptJS(QueryToStr(localLoginData.data),ObjData.pass), 25*day);
              alert('contrasenia correcta');
            }
            else{alert('Contrasenia incorrecta');}
          }
        }
        else{
          console.log('online login...');
          $('input[link="login"]').prop('disabled',true);
          $('button[name="checklogin"]').prop('disabled',true);
          let rep = getReponse('http://api.trueley.io',ObjData,'POST','JSON');
          console.log(rep);
          if(isObject(rep)){
            if(!rep.success){
              alert(rep.message);
              $('input[link="login"]').prop('disabled',false);
              $('button[name="checklogin"]').prop('disabled',false);
            }
            else{
              alert(rep.message);
              setCookie('session_data',rep.session, 25*day);
              // let arm = isset(rep.data_login.mail_login) ? [ObjData.user,rep.data_login.mail_login,QVCEnc(ObjData.pass)]:[rep.data_login.user,rep.data_login.user,QVCEnc(ObjData.pass)];
              let arm = isset(rep.data_login.mail_login) ? [ObjData.user,rep.data_login.mail_login,strToQuery(encryptJS(ObjData.user,ObjData.pass)),strToQuery(encryptJS(rep.session,ObjData.pass))] : [rep.data_login.user,rep.data_login.user,strToQuery(encryptJS(ObjData.user,ObjData.pass)),strToQuery(encryptJS(rep.session,ObjData.pass))] ;
              console.log(arm);
              localStorage.setItem('data',rep.session);
              console.log(localLogin.addRow('users',arm));
              // redirectURL('index.php');
            }
          }
          else{
            alert('Login failed');
            $('input[link="login"]').prop('disabled',false);
            $('button[name="checklogin"]').prop('disabled',false);
          }
        }
      }
      function inputFormatter(name, format = 'NNNN NNNN NNNN NNNN'){
        let input = document.querySelector('input[name="'+name+'"]');
        /*validate*/
        input.value.forEach(function(x){});
        return input.value;
      }
      $('body').ready(function(){
        $('body').on('input','input[link="login"]',function(){verifinput();});
        // if(getCookie('session_data')){redirectURL('index.php');}
        // setInterval(function(){verifinput()},200);
      });
    </script>
  </head>
  <body>
    <div class="asp">
      <div>
        <span>
          <!-- <form name="loginData" action="http://localhost/trueley/FileSys/lib/API/" method="post"> -->
          <form name="loginData" method="post">
            <p>Login</p>
            <p>Username: <input autofocus type="text" link="login" name="user" value=""> </p>
            <p>Password: <input type="password" link="login" name="pass" value=""> </p>
            <!-- <p> <input type="submit" name="checklogin" value="Login"> </p> -->
            <p><button type="button" disabled onclick="login();" name="checklogin">Login</button> </p>
          </form>
        </span>
      </div>
    </div>
  </body>
</html>
