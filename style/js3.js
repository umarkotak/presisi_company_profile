var checkisfloatexist=false;  //No I18N
var _ZSIQ = window._ZSIQ || {};  //No I18N
_ZSIQ.isagentschat = false;  //No I18N

try {  //No I18N
var zldistouch=false; //No I18N
_ZLDSCREENNAME="p3parkssro"; //No I18N
_ZLDEMBEDNAME="p3parkssro";  //No I18N
_ZLDUTSSERVER="vts.zohopublic.eu";  //No I18N
_LANG = "en";  //No I18N
var _CCODE= "US"; //No I18N
var isnewembed = true;//No I18N
_ZSIQ.analytics = [];  //No I18N
_ZSIQ.brandname = "Zoho"; //No I18N
_ZSIQ.isautopickenabled = false; //No I18N
_IS_FORCE_UTS_SECURE = false; // NO I18N

function ZloadFiles()
{
  if(checkisfloatexist){return;}

  checkisfloatexist=true;

  var headArr = document.getElementsByTagName("head");
  if (!headArr || headArr.length == 0)
  {
          headArr = [];
          headArr[0] = document.createElement("head");
          document.insertBefore(doc.body,headArr[0]);
  }
  var ocss = document.createElement("link");
  ocss.rel ="stylesheet";
  ocss.href = "https://css.zohostatic.eu/salesiq/Jan_15_2018_https/styles/floatsupportbtn.css";
  headArr[0].appendChild(ocss);

  try
  {
      var op = (((navigator.userAgent).indexOf("Opera")!=-1))
      var ie = !op && /msie/i.test(navigator.userAgent);  // preventing opera to be identified as ie
    if(ie && document.compatMode!="CSS1Compat")
    {
        var ocss = document.createElement("link");
        ocss.rel ="stylesheet";
        ocss.href = "https://css.zohostatic.eu/salesiq/Jan_15_2018_https/styles/floatiebtnfix.css";
        headArr[0].appendChild(ocss);
    }

    if("ontouchstart" in document.documentElement)
    {
      zldistouch=true; //No I18N
    }
  }
  catch(e)
  {}

  if(false)
  {
    var oscript=document.createElement("script"); //No I18N
      oscript.src="https://salesiq.zohopublic.eu/js/thirdparty/json.js";   //No I18N
      headArr[0].appendChild(oscript); //No I18N



      var oscript2=document.createElement("script"); //No I18N
      oscript2.src="https://salesiq.zohopublic.eu/js/embed/jsapi.js";   //No I18N
      headArr[0].appendChild(oscript2); //No I18N

      var oscript3=document.createElement("script"); //No I18N
      oscript3.src="https://salesiq.zohopublic.eu/js/embed/analytics.js";   //No I18N
      headArr[0].appendChild(oscript3); //No I18N


  }

  var oscript=document.createElement("script");//No I18N
  oscript.defer=true;//No I18N
  oscript.src="https://js.zohostatic.eu/salesiq/Jan_15_2018_https/js/track.js";  //No I18N
  headArr[0].appendChild(oscript);//No I18N
}

function ZaddEvent()
{

      if(window.addEventListener)
      {
            window.addEventListener('load',function(){ZloadFiles()}, false);
      }
      else
      {
            window.attachEvent('onload', function(){ZloadFiles()});
      }

}

    var iframeurl = "https://salesiq.zohopublic.eu/p3parkssro/chatwindow.ls?";
    var _zldcpage = "";
    var _zldreferrer = document.referrer;





    _zldreferrer = window.btoa(_zldreferrer); //No I18N
    _zldcpage = window.btoa(_zldcpage);  //No I18N


  _ZSIQ.initSIQAPI = _ZSIQ.initSIQAPI || function()   //No I18N
  {
    _ZSIQ.isapiinitialized = true;//No I18N
    _ZSIQ.JSAPI.identifySIQParam(); //No I18N
    function readCookie(n){n+='=';for(var a=document.cookie.split(/;\s*/),i=a.length-1;i>=0;i--)if(!a[i].indexOf(n))return a[i].replace(n,'');}
    var floatcookie = readCookie('zld5189000000002043float');//No I18N
  var embedinfo = {//No I18N
  embedtype: 'float',//No I18N
  floatstatus: (floatcookie === "1" && "maximized") || (floatcookie === "0" && "minimized") || (floatcookie === "-1" && "closed") || "initialized", //No I18N
  lsid:'5189000000002043' // NO I18N
  };
  try
  {
    $zohosq.internalready(embedinfo); // No I18N
  }catch(e){}
  try   //No I18N
  {
      $zohosq.ready(embedinfo)    //No I18N
    }
    catch(e){}//No I18N
  }

  _ZSIQ.initFloat = function()//No I18N
  {
  Float.newembed = true;//No I18N
        _ZSIQ.checkAndAdd = function (name, value) { //No I18N
            if (value !== undefined) {
                Float.lsobject[name] = value; //No I18N
            }
        };
    Float.i18nkeys = {"de":{"settings.embed.offline":"Eine Nachricht hinterlassen","common.mobile.chat":"Chat","float.chatwindow.closealert":"Ein anderer Chat wird ausgeführt. Möchten Sie einen neuen Chat starten?","common.online":"Online","infomsg.mobile.chatwithus":"Chatten Sie mit uns","infomsg.mobile.offline":"Offline","common.clicktochat":"Klicken Sie hier für den Chat"},"ru":{"settings.embed.offline":"Оставить сообщение","common.mobile.chat":"Чат","float.chatwindow.closealert":"Активен другой чат. Вы хотите начать новый чат?","common.online":"В сети","infomsg.mobile.chatwithus":"Поговорите с нами в чате","infomsg.mobile.offline":"Не в сети","common.clicktochat":"Нажмите здесь, чтобы начать чат"},"pt":{"settings.embed.offline":"Deixe uma mensagem","common.mobile.chat":"Bate-papo","float.chatwindow.closealert":"Outro chat está em andamento. Quer começar outro chat?","common.online":"On-line","infomsg.mobile.chatwithus":"Converse conosco","infomsg.mobile.offline":"Offline","common.clicktochat":"Clique aqui para conversar"},"hr":{"settings.embed.offline":"Ostavite poruku","common.mobile.chat":"Razgovor","float.chatwindow.closealert":"Već se vodi jedan razgovor. Želite li započeti novi razgovor?","common.online":"Na mreži","infomsg.mobile.chatwithus":"Razgovarajte s nama","infomsg.mobile.offline":"Izvan mreže","common.clicktochat":"Kliknite ovdje kako biste razgovarali"},"fr":{"settings.embed.offline":"Laisser un message","common.mobile.chat":"Conversation","float.chatwindow.closealert":"Un autre chat est en cours. Voulez-vous commencer un nouveau chat ?","common.online":"En ligne","infomsg.mobile.chatwithus":"Conversez avec nous","infomsg.mobile.offline":"Hors connexion","common.clicktochat":"Cliquez ici pour converser"},"hu":{"settings.embed.offline":"Hagyjon üzenetet.","common.mobile.chat":"Csevegés","float.chatwindow.closealert":"Egy másik csevegés van folyamatban. Kíván új csevegést indítani?","common.online":"Bejelentkezve","infomsg.mobile.chatwithus":"Csevegjen velünk","infomsg.mobile.offline":"Kijelentkezve","common.clicktochat":"Beszélgetéshez kattintson ide."},"sk":{"settings.embed.offline":"Zanechajte správu","common.mobile.chat":"Chat","float.chatwindow.closealert":"Prebieha iný chat. Chcete začať nový chat?","common.online":"Online","infomsg.mobile.chatwithus":"Chatujte s nami","infomsg.mobile.offline":"Offline","common.clicktochat":"Kliknutím tu spustíte chat"},"sl":{"settings.embed.offline":"Pustite sporočilo","common.mobile.chat":"Klepet","float.chatwindow.closealert":"Poteka drug klepet. Želite začeti nov klepet?","common.online":"Povezano","infomsg.mobile.chatwithus":"Klepetajte z nami","infomsg.mobile.offline":"Nepovezan","common.clicktochat":"Kliknite tukaj, če želite klepetati"},"ga":{"settings.embed.offline":"Fág teachtaireacht","common.mobile.chat":"Comhrá","float.chatwindow.closealert":"Tá comhrá eile ar siúl. Ar mhaith leat comhrá nua a thosú?","common.online":"Ar líne","infomsg.mobile.chatwithus":"Comhrá linn","infomsg.mobile.offline":"As líne","common.clicktochat":"Cliceáil anseo le haghaidh comhrá"},"sv":{"settings.embed.offline":"Lämna ett meddelande","common.mobile.chat":"Chatt","float.chatwindow.closealert":"En annan chatt pågår. Vill du starta en ny chatt?","common.online":"Online","infomsg.mobile.chatwithus":"Chatta med oss","infomsg.mobile.offline":"Offline","common.clicktochat":"Klicka här för att chatta"},"ko":{"settings.embed.offline":"메시지 남기기","common.mobile.chat":"채팅","float.chatwindow.closealert":"다른 채팅이 진행 중입니다. 새 채팅을 시작하시겠습니까?","common.online":"온라인","infomsg.mobile.chatwithus":"담당자와 채팅","infomsg.mobile.offline":"오프라인","common.clicktochat":"여기를 클릭하여 채팅하십시오."},"el":{"settings.embed.offline":"Αφήστε ένα μήνυμα","common.mobile.chat":"Συνομιλία","float.chatwindow.closealert":"Μια άλλη συνομιλία βρίσκεται σε εξέλιξη. Θα θέλατε να ξεκινήσετε νέα συνομιλία;","common.online":"Σε σύνδεση","infomsg.mobile.chatwithus":"Συνομιλήστε μαζί μας","infomsg.mobile.offline":"Εκτός σύνδεσης","common.clicktochat":"Κάντε κλικ εδώ για συνομιλία"},"en":{"settings.embed.offline":"Leave a message","common.mobile.chat":"Chat","float.chatwindow.closealert":"Another chat is going on. Would you like start a new chat ?","common.online":"Online","infomsg.mobile.chatwithus":"Chat with us","infomsg.mobile.offline":"Offline","common.clicktochat":"Click here to chat"},"it":{"settings.embed.offline":"Lascia un messaggio","common.mobile.chat":"Chat","float.chatwindow.closealert":"Un’altra chat è già in corso. Si desidera avviare una nuova chat?","common.online":"Connesso","infomsg.mobile.chatwithus":"Chatta con noi","infomsg.mobile.offline":"Non in linea","common.clicktochat":"Fai clic qui per avviare la chat"},"iw":{"settings.embed.offline":"שלח הודעה","common.mobile.chat":"צ׳אט","float.chatwindow.closealert":"קיים צ׳ט נוסף פעיל האם תרצה להתחיל צ׳ט חדש?","common.online":"מקוון","infomsg.mobile.chatwithus":"שוחח איתנו","infomsg.mobile.offline":"לא מחובר","common.clicktochat":"הקלק כאן לתחילת צ׳ט"},"zh":{"settings.embed.offline":"留言","common.mobile.chat":"聊天","float.chatwindow.closealert":"正在进行另一聊天。是否想要启动新聊天？","common.online":"在线","infomsg.mobile.chatwithus":"与我们聊天","infomsg.mobile.offline":"留言","common.clicktochat":"点击这里聊天"},"es":{"settings.embed.offline":"Dejar un mensaje","common.mobile.chat":"Chat","float.chatwindow.closealert":"Otro chat está en curso. ¿Desea comenzar un nuevo chat?","common.online":"Conexión","infomsg.mobile.chatwithus":"Chatee con nosotros","infomsg.mobile.offline":"Sin conexión","common.clicktochat":"Haga clic aquí para chatear"},"cs":{"settings.embed.offline":"Zanechat zprávu","common.mobile.chat":"Chat","float.chatwindow.closealert":"Právě probíhá jiný chat. Chcete zahájit nový chat?","common.online":"Online","infomsg.mobile.chatwithus":"Chatujte s námi","infomsg.mobile.offline":"Offline","common.clicktochat":"Kliknutím sem zahájíte chat"},"ar":{"settings.embed.offline":"ترك رسالة","common.mobile.chat":"محادثة","float.chatwindow.closealert":"تدور محادثة أخرى الآن. هل ترغب في بدء محادثة جديدة؟","common.online":"متصل","infomsg.mobile.chatwithus":"تحدث معنا","infomsg.mobile.offline":"غير متصل","common.clicktochat":"انقر هنا للمحادثة"},"th":{"settings.embed.offline":"ฝากข้อความ","common.mobile.chat":"สนทนา","float.chatwindow.closealert":"มีอีกหนึ่งการสนทนาที่กำลังดำเนินอยู่ คุณต้องการเริ่มการสนทนาใหม่หรือไม่?","common.online":"ออนไลน์","infomsg.mobile.chatwithus":"สนทนากับเรา ...","infomsg.mobile.offline":"ออฟไลน์","common.clicktochat":"คลิกที่นี่เพื่อสนทนา"},"nb":{"settings.embed.offline":"Legg igjen en melding","common.mobile.chat":"Chat","float.chatwindow.closealert":"En annen chat er i gang. Vil du starte en ny chat?","common.online":"Online","infomsg.mobile.chatwithus":"Chat med oss","infomsg.mobile.offline":"Offline","common.clicktochat":"Klikk her for å chatte"},"ja":{"settings.embed.offline":"メッセージを残してください","common.mobile.chat":"チャット ","float.chatwindow.closealert":"他のチャットが現在進行中です。新規チャットを開始しますか？","common.online":"オンライン","infomsg.mobile.chatwithus":"チャットで連絡 ","infomsg.mobile.offline":"メッセージを残してください","common.clicktochat":"クリックするとチャットできます"},"pl":{"settings.embed.offline":"Zostaw wiadomość","common.mobile.chat":"Rozmowa","float.chatwindow.closealert":"Trwa kolejna rozmowa. Czy chciałbyś rozpocząć nową rozmowę?","common.online":"Online","infomsg.mobile.chatwithus":"Porozmawiaj z nami","infomsg.mobile.offline":"Offline","common.clicktochat":"Naciśnij tutaj, aby rozpocząć rozmowę"},"he":{"settings.embed.offline":"שלח הודעה","common.mobile.chat":"צ׳אט","float.chatwindow.closealert":"קיים צ׳ט נוסף פעיל האם תרצה להתחיל צ׳ט חדש?","common.online":"מקוון","infomsg.mobile.chatwithus":"שוחח איתנו","infomsg.mobile.offline":"לא מחובר","common.clicktochat":"הקלק כאן לתחילת צ׳ט"},"ro":{"settings.embed.offline":"Lăsaţi un mesaj","common.mobile.chat":"Chat","float.chatwindow.closealert":"Se desfăşoară un alt chat. Doriţi să începeţi un chat nou?","common.online":"Online","infomsg.mobile.chatwithus":"Discutaţi cu noi","infomsg.mobile.offline":"Offline","common.clicktochat":"Faceţi clic aici pentru chat"},"da":{"settings.embed.offline":"Læg en besked","common.mobile.chat":"Chat","float.chatwindow.closealert":"En anden chat er i gang. Vil du starte en ny chat ?","common.online":"Online","infomsg.mobile.chatwithus":"Chat med os","infomsg.mobile.offline":"Offline","common.clicktochat":"Klik her for at chatte"},"tr":{"settings.embed.offline":"Bir mesaj bırakın","common.mobile.chat":"Sohbet","float.chatwindow.closealert":"Başka bir sohbet devam ediyor. Yeni bir sohbet başlatmak istiyor musunuz?","common.online":"Çevrimiçi","infomsg.mobile.chatwithus":"Bizimle sohbet edin...","infomsg.mobile.offline":"Çevrimdışı","common.clicktochat":"Sohbet için burayı tıklatın"},"nl":{"settings.embed.offline":"Laat een bericht achter","common.mobile.chat":"Chat","float.chatwindow.closealert":"Er is een andere chat bezig. Wilt u een nieuwe chat beginnen?","common.online":"Online","infomsg.mobile.chatwithus":"Chat met ons","infomsg.mobile.offline":"Offline","common.clicktochat":"Klik hier om te chatten"},"pt_PT":{"settings.embed.offline":"Deixar mensagem","common.mobile.chat":"Chat","float.chatwindow.closealert":"Está a decorrer outro chat. Gostaria de iniciar um novo chat ?","common.online":"Online","infomsg.mobile.chatwithus":"Converse connosco","infomsg.mobile.offline":"Offline","common.clicktochat":"Clique aqui para conversar"}};
        Float.lsobject={"autochat":"false","clickchat":"false","name":"","email":"","ques":"","department":"","embedname":"p3parkssro","lsid":"5189000000002043","bgcolor":"","oncontent":"settings.embed.offline","icon":"7","buttontheme":"blue-btn","oncontentcolor":"","status":"off","statustext":"Offline","serverurl":"https://salesiq.zohopublic.eu","url":"https://salesiq.zohopublic.eu/p3parkssro/chatwindow.ls?","floatposition":"bottomright","top":"0","bottom":"0","left":"0","right":"0","flipicon":"false","aligntoright":"false","floatmeasurement":"px","headercolor":"","sbicobg":"","fltsize":"small","mobileoncontent":"common.mobile.chat","ipadoncontent":"infomsg.mobile.chatwithus","mobileoffcontent":"infomsg.mobile.offline"};
        Float.lsobject["imgurl"] = "https://img.zohostatic.eu/salesiq/Jan_15_2018_https";
        Float.lsobject["attender"]="";
    Float.displayonly = false;
        Float.lsobject["mismsg"]="";
        Float.lsobject["offmsg"]="";
        Float.lsobject["exid"]="";
        Float.lsobject["waitmsg"]="";
        Float.lsobject["offrespmsg"]="";
        Float.lsobject["misrespmsg"]="";
        Float.lsobject["thanksmsg"]="";
        Float.lsobject["headlinetxt"]="";
        Float.lsobject["usermsgtxt"]="";
        Float.lsobject["classname"]="";
    Float.lsobject["info"]='';
        Float.lsobject["floattype"]='float';
        Float.lsobject["fltbubble"]="false";
        Float.lsobject["isagentschat"]="false";
    Float.lsobject.referrer = _zldreferrer;  //No I18N
    Float.lsobject["screenname"]="p3parkssro" ;
    Float.lsobject["custombubblename"]="";
    Float.lsobject["aatext"]="float.chatwindow.closealert";
    Float.lsobject["agentsemailid"]="";
    Float.lsobject["offason"]="true";
    Float.lsobject.cpage = _zldcpage;  //No I18N
    Float.lsobject.currdomain = "";
    Float.lsobject["float_fkey"]="0_5189000000002043";
    Float.lsobject["css_fkey"]="0_5189000000002043";
    Float.lsobject.themeid = "1"  ; //No I18N
      Float.lsobject.embedtheme="blue"; //NO I18N
      Float._zldvfp = ""; //No I18N
      Float.hideembed = false ;
    Float.classname= Float.getContClassName();//No I18N
        Float.ismailchimpenabled = false
    _ZSIQ.checkIfAPILoaded();//No I18N

      if(false)
    { //No I18N
      var headArr = document.getElementsByTagName("head"); //No I18N
      var oscript=document.createElement("script"); //No I18N
        oscript.src="https://salesiq.zohopublic.eu/js/embed/uts/uts.js";   //No I18N
        headArr[0].appendChild(oscript); //No I18N

        var oscript1=document.createElement("script"); //No I18N
        oscript1.src="https://salesiq.zohopublic.eu/js/embed/uts/utsaction.js";   //No I18N
        headArr[0].appendChild(oscript1); //No I18N
    }
  }
_ZSIQ.callCreateFloat = function()//No I18N
{
  var apivalues = {}; //No I18N
    try                 //No I18N
    {
         apivalues = $zohosq.values; //No I18N
    } catch (e) {}                  //No I18N

    _ZSIQ.checkAndAdd('embedtheme', apivalues.embedtheme); //No I18N
    _ZSIQ.checkAndAdd('embedheadertheme', apivalues.embedheadertheme); //No I18N
    if (Float.lsobject.buttontheme) { //Empty if the embed status is offline && offason is disabled
            _ZSIQ.checkAndAdd('buttontheme', apivalues.buttontheme); //No I18N
    }
    _ZSIQ.checkAndAdd('bgcolor', apivalues.sbonlinebg); //No I18N
    _ZSIQ.checkAndAdd('sbicobg', apivalues.sbicobg); //No I18N

  if(true)
    {
      Float.create();
    }
}
_ZSIQ.checkIfAPILoaded = function()//No I18N
{
  if(_ZSIQ.isapiinitialized)
    {
      _ZSIQ.callCreateFloat();//No I18N
    }
    else//No I18N
    {
      setTimeout(function(){_ZSIQ.checkIfAPILoaded()},200);//No I18N
    }
}

  try //No I18N
  {
          if(document.readyState==="complete")
          {
                  ZloadFiles(); //No I18N
          }
          else //No I18N
          {
                  ZaddEvent(); //No I18N
          }
  }
  catch(e) //No I18N
  {
          ZaddEvent(); //No I18N
  }
  }catch(e){}
