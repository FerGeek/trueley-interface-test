////       Javascript       ////
function include(dir){
  let instr;
  try{
    let req = new XMLHttpRequest();
    req.open('POST', dir,false);req.send();
    instr = req.responseText;
  } catch(e){console.log(e);}
  if(instr !== undefined && instr !== ''){
    eval(instr);
  }
  else{console.log('include error');}
}
// include('js/jquery-3.3.1.min.js');
//Constants
//memory unities
const KBc = 1024; // Windows Convention
const KB = KBc;
const MB = KBc*KB;
const GB = KBc*MB;
const TB = KBc*GB;
//time constants.
const seg = 1000; // Milisegundos (unidad estandar de JavaScript)
const min = 60*seg;
const hour = 60*min;
const day = 24*hour;
const week = 7*day;
//Basics Validations
function isString(value){return typeof value === 'string' || value instanceof String;}
function isNumber(value){return typeof value === 'number' && isFinite(value);}
function isArray(value){return value && typeof value === 'object' && value.constructor === Array;}
function isObject(value){return value && typeof value === 'object' && value.constructor === Object;}
function isArrObj(array){return Array.isArray(array) ? true : isObject(array);}
function isNull(value){return value === null;}
function isInt(value){return isFinite(value) && parseInt(value)/value === 1;}
function isUndefined(value){return typeof value === 'undefined';}
function isBoolean(value){return typeof value === 'boolean';}
function getKeys(array){return isArrObj(array)?Object.keys(array):null;}
function idExist(id){return $('#'+id).length;}
function toID(id){return document.getElementById(id);}
function exp(array){
  if(isObject(array)){
    Object.keys(array).forEach(function(key){
      window[key] = array[key];
      })
    ;}
  else{
    console.log('Command error: is not an object');
  }}
function comp(){"use strict";
  var str = arguments[0];
  var pdel = arguments[1];
  var sdel = isset(arguments[2]) ? arguments[2] : '';
  var prearr = explode(pdel, str);
  var x, tmp = [], i = 1;
  if (sdel != '') {
    var Arr = [];
    prearr.forEach(function (x) {
      tmp = explode(sdel, x);
      Arr[tmp[0]] = tmp[1];
      i++;
    });
    //Arr.length = i;
    return Arr;
  }
  else{
  return prearr;
  }
}
function decomp() {"use strict";
var arr = arguments[0];
var pdel = arguments[1];
var sdel= isset(arguments[2]) ? arguments [2]: '';
var str='';
if(sdel!=''){
  Object.keys(arr).forEach(function (k) {
  str += k+sdel+arr[k]+pdel;
    })
}
else{
  arr.forEach( function (x){
    str += x + pdel;
  })
}
return str.substring(0, str.length - 1);
}
function compx(str,pkey,skey,tkey){
  var arr2  = str.split(pkey);var arr3 = [];i=0;
  arr2.forEach( function (k) {
    arr3[i] = k.split(skey);i++;
  });var arrr = []; c = 0;
  arr3.forEach( function (x) {
   arrr[x[0]] = x[1].split(tkey);
  })
  return arrr;
}
function decompx(){
  var array = arguments[0];
  var primaridel = arguments[1];
  var secundarydel = isset(arguments[2]) ? arguments[2] : '';
  var thirddel =  isset(arguments[3]) ? arguments[3] : '';
  var string = '', val = '', m = '';
  if(secundarydel!==''){
    Object.keys(array).forEach( function (key) {
      val = array[key];
      if(is_array(val)){m = decomp(val,thirddel);}
			else{m = val;}
		  string += key + secundarydel + m + primaridel;
    });
	}
	else{
		array.forEach( function (x) {
			$string += x + $primaridel;
		});
	}
	return str.substring(0,str.length - 1);
}
function toBool(V){
  var v = V;
  if(isString(v) || isNumber(v)){
    if (v=='1' || v==1) { v = true;}
    else if (v=='0' || v==0){ v = false;}
    else if(isBoolean(v)){}
    else if (isObject(v) && v !== {}) { v = true;}
    else if (isObject(v) && v === {}) { v = false;}
    else if (isArray(v) && v !== []) { v = true;}
    else if (isArray(v) && v === []) { v = false;}
    else if ((isString(v) || isNumber(v)) && (v !== 0 || v !== '')) { v = true;}
    else if ((isString(v) || isNumber(v)) && (v === 0 || v === '')) { v = false;}
    else{ v = null;}
    return v;
  }
}
function typeValidator(obj,type){
  if(isArrObj(obj) && isArray(type)){
    if(obj.constructor.name.verifCond('Arguments|Array~')){
      if(type.length >= obj.length){
        let ret = true;
        for(i=0;i<obj.length;i++){
          ret = ret && obj[i].constructor.name == type[i].capitalize();
        }
        return ret;
      }
      else{console.log(`Error at typeValidator: Invalid type of types elements or types lenght.`);return false;}
    }
    else{console.log(`Error at typeValidator: Object type isn't valid.`);return false;}
  }
  else{console.log(`Error at typeValidator: Invalid arguments.`);return false;}
}
//PHPEmul
function fileGetContents(url){
  var ret = '';
  $.ajax({url: url, async: false, success: function(x){ret = x;}}).fail(function( jqXHR, textStatus, errorThrown){
    ret = false;
    // console.log('Failed: '+errorThrown);
  });
  return ret;
}
function file_get_contents(url){
  var req = new XMLHttpRequest();
  req.open('POST', url,false);req.send();
  return str_replace(['\\"', '"\\'], '"', req.responseText);
}
function str_replace(search,replace,str){"use strict";
     if(isArray(search)){
      search.forEach(function(val){
        str = str_replace(val,replace,str);
      });
      return str;
     }
     else{return str.split(search).join(replace);}
}
function strpos(haystack,needle){
  let ret = haystack.indexOf(needle);
  return ret !== -1 ? ret  : false;
}
function substr_count(str, haystack){
  return str.split(haystack).length - 1;
}
function isset(val){return !isUndefined(val);}
function strlen(str){return str.length;}
function getTmp(array,tmp){"use strict";
   var array_k = Object.keys(array);var res = tmp;
   for(var i=0;i<array_k.length;i++){
      res = str_replace('{{'+array_k[i]+'}}',array[array_k[i]],res);
   }
   return str_replace("´","'",res);}
function read_tmp(name){"use strict";
   var v = file_get_contents('/lib/content-plug/'+name+'.tmp');
   return v!==''?v:null;
}
function explode(del,str){"use strict";
  return str.split(del);
}
function in_array(){
  let a = isset(arguments[0]) ? arguments[0] : null;
  let arr = isset(arguments[1]) ? arguments[1] : null;
  let ret = false;
  if(arr !== null && a !== null){
    if(isArray(arr)){
      // arr.forEach( function (x){
      //   if(var === x){ ret = true; break;}
      // });
      for(x in arr){
          if(arr[x] === a){ ret = true; break;}
          // console.log(x);
      }
    }
    else if(isObject(arr)){
      for(const arr in x){
        if(arr[x] === a){ ret = true; break;}
        // console.log(arr[x]);
      }
    }
  }
  return ret;
}
function file_exists(dir){
  if(fileGetContents(dir) !== false){return true;}
  else{return false;}
}
function extract_text(text,since,to){
  let includeparam = isset(arguments[3]) && isBoolean(arguments[3]) ? arguments[3] : false;
	let start=strpos(text,since), stop=strpos(text,to);
	let r = includeparam ? text.strsub(start,stop-start+strlen(to)) : text.strsub((start+strlen(since)),stop-strlen(since)-start);
	return r;
}
function extract_all_txt(text,since,to){
  let res = [], n = substr_count(text,since), start, stop;
  let includeparam = isset(arguments[3]) && isBoolean(arguments[3]) ? arguments[3] : false;
	for(let i=0;i<n;i++){
		res[i] = extract_text(text,since,to,includeparam);
		start=strpos(text,since);
		stop=strpos(text,to);
		text = text.strsub(stop+strlen(to));
	}
  // delete res[res.length - 1];
	return res;
}
function time(){let time = new Date(); return parseInt((time.getTime())/1000);}
function date(str){
  let tmp = new Date(), ret, str_p = str;
  let time = isset(arguments[1]) && isInt(isset(arguments[1])) ? arguments[1] : parseInt(tmp.getTime()/1000);
  tmp.setTime(time*1000);
  let days = ['Mon','Tue','Wed','Thu','Fri','Sat','Sun'];
  let days_ = ['Monday','Tuesday','Wednesday','Thursday','Friday','Saturday','Sunday'];
  let month = ['Jan','Feb','Mar','Apr','May','Jun','Jul','Aug','Sep','Oct','Nov','Dec'];
  let month_ = ['January','February','March','April','May','June','July','August','September','October','November','December'];
  let tmp2 = new Date('January 1, '+tmp.getUTCFullYear());
  // console.log(tmp2);
  let relTime = tmp.getTime() - tmp2.getTime();
  (str_p.split('')).forEach(function(chr){
    switch(chr){
      //Hora
      case 'a': ret = tmp.getHours() >= 12 ? 'am' : 'pm';break;
      case 'A': ret = tmp.getHours() >= 12 ? 'AM' : 'PM';break;
      case 'B':break;
      case 'g': ret = Math.abs(tmp.getHours()-12);break;
      case 'G': ret = tmp.getHours();break;
      case 'h': ret = Math.abs(tmp.getHours()-12);ret = ret <= 9 ? '0' + ret : ret ;break;
      case 'H': ret = tmp.getHours(); ret = ret <= 9 ? '0' + ret : ret ;break;
      case 'i': ret = tmp.getMinutes();break;
      case 's': ret = tmp.getSeconds();ret = ret <= 9 ? '0' + ret : ret;break;
      case 'v': ret = tmp.getMilliseconds();break;
      //Dia
      case 'd':ret = tmp.getUTCDate();break;
      case 'D':ret = days[tmp.getDay()];break;
      case 'j':ret = tmp.getUTCDate();break;
      case 'l':ret = days_[tmp.getDay()];break;
      case 'N':ret = tmp.getDay();break;
      case 'w':ret = tmp.getDay() === 7 ? 0 : tmp.getDay();break;
      case 'z':ret = parseInt(relTime/day)+1;break;
      //Semana
      case 'W': ret = (parseInt(relTime/day)/7) + 1; break;
      //Mes
      case 'F': ret = month_[tmp.getUTCMonth()];break;
      case 'm': ret = tmp.getUTCMonth()+1; ret = ret <= 9 ? '0' + ret : ret;break;
      case 'M': ret = month[tmp.getUTCMonth()];break;
      case 'n': ret = tmp.getUTCMonth()+1;break;
      case 't': ret = tmp.getDate();break;
      //Anio
      case 'L':ret = tmp.getUTCFullYear() % 4 === 0 ? 1 : 0;break;
      case 'Y': case 'o':ret = tmp.getUTCFullYear();break;
      case 'y':ret = tmp.getUTCFullYear().toString().substr(2,2);break;
      default: ret = chr;break;
      //Fechas completas
      case 'c': break;
      case 'r': break;
      case 'U': ret = parseInt(tmp.getTime()/1000); break;
    }
    str = str_replace(chr.toString(),ret,str);
  });
  return str;
}
//Utility
function convert_to_filtre(str){"use strict";
    var excp = ['á','é','í','ó','ú','Á','É','Í','Ó','Ú'];
    var too = ['a','e','i','o','u','A','E','I','O','U'];
    for(var i; i < too.length; i++){
      str = str_replace(excp[i],too[i],str);
    }
    return str;
}
function viewport_(){"use strict";
        var w = $(window).width();
        var h = $(window).height();
        $('.viewerport').text(h+'x'+w);}
function fixArray(data,def){"use strict";
  if(isArrObj(data) && isArrObj(def)){
    //var kdata = getKeys(data);
    var kdef = getKeys(def);
    for(var i=0 ; i<kdef.length; i++){
      if(isset(data[kdef[i]])){
        data[kdef[i]]=def[kdef[i]];
      }
    }
   }
   else{
	   //console.log('error_param! #556852');
   }
  return data;}
function sortBy(data, key){
  // data structur: [{},{},{}] || [[],[],[]]
  let reverse = isset(arguments[2]) && isBoolean(arguments[2]) ? arguments[2] : false;
  let valid = isArray(data) && (isString(key) || isInt(key));
  let typeElement = isset(data[0]) ? (Array.isArray(data[0]) ? 'array' : 'object') : null;
  key = isNumber(key) ? parseInt(key).toString() : key.toString();
  let vEle =  true;
  if(valid){
    //Validar elementos
    let aux = isset(data[0]) && isArrObj(data[0]) ? (!Array.isArray(data[0]) ? getKeys(data[0]) : data[0].length) : null;
    // console.log(aux);
    if(typeElement !== null){
      data.forEach(function(x){
        if(typeof x === typeElement){
          vEle = true && vEle;
        }
        // console.log(`type: ${vEle}`);
        if(aux !== null){
          if(typeElement == 'object'){vEle = structurCompare(getKeys(x), aux) && vEle;}
          else if(typeElement == 'array'){vEle = (x.length == aux) && vEle;}
          else{vEle = false;}
        }
        else{vEle = false;}
        // console.log(`parametro: ${vEle}`);
        if(!isset(x[key])){vEle = false;}
        // console.log(`Defined: ${vEle}`);
      });
      if(valid && vEle){
        //Algoritmo
        let colectorArr = [], arrRet = [], ret = [], isText = false;
        data.forEach(function(x){colectorArr.push(x[key]);});
        colectorArr.forEach(function(x){if(!isNumber(x)){isText = true;}});
        if(isText){
          // ordenar alfabeticamente
          let auxU = [], auxO = colectorArr, t;
          colectorArr.forEach(function(x){auxU.push(x)}); auxO.sort();
          auxO.forEach(function(x){t = auxU.indexOf(x); ret.push(t); auxU[t] = '{{{{empty}}}}';});
        }
        else{
          // ordenar numericamente
          let min = colectorArr.getMin(), c = 0;
          while(c<colectorArr.length){ret.push(getMin(colectorArr,ret,true));c++;}
        }
        ret = reverse ? ret.reverse() : ret;
        for(x = 0; x < ret.length; x++){arrRet.push(data[ret[x]]);}
        return arrRet;
      }
      else{
        console.log('Primary error');
        return data;
      }
    }
    else{
      console.log('Secundary error');
      return data;
    }
  }
  else{
    console.log('Error');
    return data;
  }
}
function inOrder(array){}
function ArrN(int){"use strict";
				   var arr = [];
				   for(var i=0;i<int;i++){
					   arr[''+i+'']=i;
				   }
				   return arr;
				  }
function verifCond(str, cond){
  str = String(str);
  cond = cond.split(' ');
  let ret = true;
  let ctrlChar,instruction;
  cond.forEach(function(value){
    ctrlChar = value.substr(-1);
    instruction = value.substr(0,value.length - 1);
    // console.log(`ctrlChar: ${ctrlChar}, instruction: ${instruction}`);
    switch(ctrlChar){
      case '-':
        ret = ret && (str.indexOf(instruction) === -1);
        break;
      case '^':
        ret = ret && ((str.toUpperCase()).indexOf(instruction.toUpperCase()) !== -1);
        break;
      case '*':
        ret = ret && (str.indexOf(instruction) !== -1);
        break;
      case '~':
        instruction = instruction.split('|');
        let rt = false;
        instruction.forEach(function(x){
          rt = rt || (str.indexOf(x) !== -1);
        });
        ret = ret && rt;
        break;
      default:break;
    }
  });
  return ret;
}
function getMin(array){
  let ignore = isset(arguments[1]) && isArray(arguments[1]) ? arguments[1] : [];
  let min = Number.MAX_VALUE;
  let n = array.length;
  let pos = isset(arguments[2]) && isBoolean(arguments[2])? arguments[2] : false, p;
  for(i = 0; i < n; i++){
      if(!in_array(i, ignore) && array[i]<=min){min=array[i];p=i;}
  }
  return pos ? p : min;
};
function getMax(array){
  let ignore = isset(arguments[1]) && isArray(arguments[1]) ? arguments[1] : [];
  let max = Number.MIN_VALUE;
  let n = array.length;
  let pos = isset(arguments[2]) && isBoolean(arguments[2])? arguments[2] : false, p;
  for(i = 0; i < n; i++){
      if(!in_array(i, ignore) && array[i]>=max){max=array[i];p=i;}
  }
  return pos ? p : max;
};
String.prototype.capitalize = function() {
      return this.replace(/(?:^|\s)\S/g, function(a) { return a.toUpperCase(); });
};
String.prototype.deleteChars = function(arr) {
      let  chr = this;
      arr.forEach(function(x){
        chr = str_replace(x,'',chr);
      });
      return chr;
};
String.prototype.str_replace = function(haystack,needler){
  return str_replace(this,haystack,needler);
};
String.prototype.verifCond = function(cond){
  return verifCond(this,cond);
};
String.prototype.strpos = function(needle){
  return strpos(this,needle);
};
String.prototype.strsub = function(start,length){
  return length < 0 ? this.substr(start, this.length + length) : this.substr(start,length) ;
};
Array.prototype.verifCond = function(cond){
  let ret = true;
  this.forEach(function(x){
    ret = ret && x.verifCond(cond);
  });
  return ret;
};
Array.prototype.filtreCond = function(cond){
  let ret = [];
  this.forEach(function(x){
    if(typeof x === 'string' && x.verifCond(cond)){ret.push(x);}
  });
  return ret;
};
Array.prototype.remove = function(index){
  if((isInt(index) || index == 0) && index != -1 && isset(this[index])){
    this.splice(index,1);
    return true;
  }
  else{return false;}
}
Array.prototype.sortBy = function(key,i){
  return sortBy(this,key,i);
}
Array.prototype.getMin = function(){
  let ignore = isset(arguments[1]) && isArray(arguments[1]) ? arguments[1] : [];
  let pos = isset(arguments[2]) && isBoolean(arguments[2])? arguments[2] : false;
  return getMin(this,ignore,pos);
};
Array.prototype.getMax = function(){
  let ignore = isset(arguments[1]) && isArray(arguments[1]) ? arguments[1] : [];
  let pos = isset(arguments[2]) && isBoolean(arguments[2])? arguments[2] : false;
  return getMax(this,ignore,pos);
};
Array.prototype.sortBy = function(key){
  let reverse = isset(arguments[2]) && isBoolean(arguments[2]) ? arguments[2] : false;
  return sortBy(this,key,reverse);
}
//MyStrap
function switch_tab(string,id_act){"use strict";
	var arr = string.split(',');
	$('#'+id_act).show();
    for(var i = 0;i<arr.length;i++){
		if(id_act!=arr[i]){
			$('#'+arr[i]).hide();
		}
	}
}
function navmenu(ident){"use strict";
  $(ident+" li").click(function () {
    $(ident+" li.active").removeClass('active');
    $(this).addClass('active');
  });}
function minigal(id,config){"use strict";
  var id_='#'+id;
  config = fixArray(config,{start:0,length:5,step:3});
  var ele = $(id_).children();
  for(var i=2 ; i<=ele.length ; i++){
    //($(id+' div:nth-child('+i+')').hide())?console.log('OK! : '+i):console.log('Failed! : '+i);
    $(id_+' div:nth-child('+i+')').hide();
  }
  //Crear lista
  window['conf_minigal_'+id] = fixArray(config,{n:ele.length});}
function class_switch(select,classn){
    if($(select).hasClass(classn)){
      $(select).removeClass(classn);
    }
    else{$(select).addClass(classn)}
}
////       Jquery       ////
$.fn.getClass = function(){
  return $(this).attr('class').split(' ');
};
$.fn.interclass =function(classn){
    if($(this).hasClass(classn)){
    console.log($(this).getClass());
    $(this).removeClass(classn);
  }
  else{$(this).addClass(classn)}
};
$.fn.tagName = function(){
  if(isset(this.length)){
    let ret = true;
    let ref = this[0].localName;
    $(this).each(function(){
      if(!($(this).is(ref))){ret = false;}
    });
    return ret ? ref : undefined;
  }
  else{
    return this.localName;
  }
};
$.fn.eachchild = function(select,interv){
  $(select).each(function(){
    $(this).css('animation-delay',interv+'s');
    console.log(')animation-delay :'+interv+'s');
    interv+=interv;
  });
};
$.fn.centerer_h = function (){
  var w = $(this).width();
  var W = $(this).parent().width();
  var pl = parseInt($(this).css('padding-left'));
  var pr = parseInt($(this).css('padding-right'));
  $(this).css('margin-left',(W-(w+pr+pl))/2);};
$.fn.centerer_v = function (){
  var h = $(this).height();
  var H = $(this).parent().height();
  var pt = parseInt($(this).css('padding-top'));
  var pb = parseInt($(this).css('padding-bottom'));
  $(this).css('margin-top',(H-(h+pt+pb))/2);};
$.fn.nav_menu = function(ident,content){
    $(ident+" li").click(function () {
    $(ident+" li.active").removeClass('active');
    $(this).addClass('active');
    var $ele =  $(ident+" li"),arr = [],i=0;
    $ele.each(function(){
      arr[i] = $(this).attr('link');
      //$("#"+$(this).attr('link')).addClass('hidden');
      $("#"+$(this).attr('link')).hide();i++;
    });
    //console.log(arr);
    $("#"+$(this).attr('link')).show();
  });};
$.fn.minigal = function(config){
  var n = $(this).children().length;
  console.log('childs : '+n);
  for(var i=2;i<=n;i++){
    $(this+' div:nth-child('+i+')').hide();
  }};
$.fn.input_controll = function(affect_inpt){
  	var arr = affect_inpt.split(','), c = 0;
  	for(var i = 0; i<arr.length;i++){
  		if($('input[name="'+arr[i]+'"]').val()!==''){c++;}
  	}
  	$(this).prop('disabled', (c!=arr.length));
};
function clearObj(obj){
  if(isObject(obj)){
    Object.keys(obj).forEach( function (x) {
      obj[x] = null;
    });
  }
}
function chargeForm(id,data){
  let objTemp = id;
  clearObj(objTemp);
  let se = 'form[name="' + id + '"] ';
  var $inputs = $(se + 'input, ' + se + 'select');
  $inputs.each(function () {
    if(isset(data[$(this).attr('name')])){
      $(this).val(data[$(this).attr('name')]);
    }
  });
}
function extractValForm(id){
  var se = 'form[name="' + id + '"] ';
  var resi = {}; var name; var val;
  $(se + 'input').each(function (){
    if($(this).attr('type') !== 'file'){
      name = $(this).attr('name');
      val = $(this).val();
      resi[name] = val;
    }
  });
  $(se + 'select').each(function (){
    name = $(this).attr('name');
    val = $(this).val();
    resi[name] = val;
  });
  Object.keys(resi).forEach(function (x){if(x == 'undefined'){delete resi[x];}});
  return resi;
}
function clearForm(name){
  var se = 'form[name="' + name + '"] ';
  $(se + 'input').each(function (){
    $(this).val('');
  });
}
function getReponse(){
  var result = null;
  var url = isset(arguments[0])?arguments[0]:null;
  var data = isset(arguments[1]) && isArrObj(arguments[1])?arguments[1]:[];
  var type = isset(arguments[2])?arguments[2]:'';
  var dataType = isset(arguments[3])?arguments[3]:'';
  $.ajax({
              url: url,
              type: type,
              data: data,
              dataType: dataType,
              async: false,
              success: function(dataa) {
                  result = dataa;
              }
            });
  return result;
}
function valKeys(){
  var object = arguments[0];
  var keys = isString(arguments[1])?[arguments[1]]:(isArray(arguments[1])?arguments[1]:[]);
  var strict = isset(arguments[2])?arguments[2]:false;
  var ret = true; var enter = true;
  ///
  if(isObject(object)){
    keys.forEach( function (x) {
      if(strict){
        if(enter){
          if(isset(object[x])){
            if(object[x] == ''){ret = false; enter = false;}
          }
          else{ret = false; enter = false;}
        }
      }
      else{
        if(!isset(object[x])) {ret=false;};
      }
    });
  }
  else if (isArray(object)){
    object.forEach( function (x) {
      if(enter){
       if(!valKeys(x,keys,strict)){ret=false; enter=false;}
      }
    });
  }
  else{ret=null; console.log('Error: Se esperaba un object o array en el primer argumento.')}
  ///
  return ret;
}
function agrupEle(object,elements,gname){
  object[gname] = {};
  elements.forEach(function (x) {
    object[gname][x] = object[x];
    delete object[x];
  });
  return object;
}
function renameEle(object,objn,nobjn){
  var ret = false;
  if(isObject(object)){
    if( isString(objn) && isString(nobjn)){
      if(isset(object[objn])){
        object[nobjn] = object[objn];
        delete object[objn];
        ret = true;
      }
    }
    else if((isArray(objn) && isArray(nobjn))){
      if(objn.length === nobjn.length){
        var n = objn.length;
        for (var i = 0; i < n; i++) {
          if(isset(object[objn[i]])){
            object[nobjn[i]] = object[objn[i]];
            delete object[objn[i]];
          }
        }
        ret = true;
      }
      else{ console.log('Dimention error!'); }
    }
  }
  else{ console.log('Input error!') ;ret = false;}
  return ret ? object : null;
}
function setCookie(){
  let time = new Date();
  let name = arguments[0];
  let value = arguments[1];
  let expire = isset(arguments[2]) ? arguments[2] : 5*day;
  time.setTime(time.getTime() + expire);
  let ret = false;
  if(document.cookie = `${name}=${value}; expires=${time.toGMTString()}; path=/`){ret = true;}
  else{console.log('Fallo');}
  // document.cookie = `${name}=${value};max-age=${expire};path=/`;
  return ret;
}
function deleteCookie(name){
  let ret = false;
  if(document.cookie = `${name}=; expires=Thu, 01 Jan 1970 00:00:00 UTC`){ret = true;}
  return ret;
}
function getCookie(){
  let cookies = document.cookie;
  let name = isset(arguments[0]) ? arguments[0] : '';
  let ret = {};
  cookies.split(';').forEach(function(x){
    let tmp = x.split('=');
    ret[tmp[0]] = tmp[1] + (isset(tmp[2]) ? '=' + tmp[2] : '');
  });
  // console.log(ret);
  return name === '' ? ret : (isset(ret[name]) ? ret[name] : undefined );
}
function redirectURL(url){
  window.location.replace(url);
}
// Encoding
var vChar = {since: 33, until: 126}, asciiRange = [vChar.since,vChar.until];
function char(code){
  return String.fromCharCode(code);
}
function charToCode(str){
  str = isString(str) ? str : str.toString();
  let allVars = isset(arguments[1])  && isBoolean(arguments[1]) ? arguments[1] : false, ret = [];
  if(str.length>1){for(let i = 0 ; i < str.length ; i++){ret[i] = charToCode(str[i],allVars);}}
  else{ret[0] = str[0].codePointAt();}
  return allVars ? ret : ret[0];
}
function strToQuery(str){
  str = str_replace('\\','\\\\',str);
  // str = str_replace('`','\\`',str);
  str = str_replace('"','\\"',str);
  str = str_replace('`','\\`',str);
  str = str_replace("'","\\'",str);
  return str;
}
function QueryToStr(str){
  str = str_replace('\\\\','\\',str);
  str = str_replace('\\"','"',str);
  str = str_replace('\\`','`',str);
  str = str_replace("\\'","'",str);
  return str;
}
function encStr(str){
  str = isString(str) ? str : str.toString();
  let strA = str.split('');
  for(let i = 0; i < strA.length ; i++){
    if(charToCode(strA[i]) > vChar.until || charToCode(strA[i]) < vChar.since){strA[i] = '[[' + charToCode(strA[i]) + ']]';}
  }
  return strA.join('');
}
function decStr(str){
  let ref = fixArrayEmpty(extract_all_txt(str,'[[',']]'));
  ref.forEach(function(x){str = str_replace('[['+x+']]',char(x),str);});
  return str;
}
function QVCEnc(str){
  str = encStr(str);
  let code = str.split('').reverse();
  let ret = [];
  for(i=0;i<code.length;i++){
    ret.push(String.fromCharCode(asciiRange.CiR(code[i].codePointAt(),-1*((i+2)**2))));
  }
  return ret.join('');
}
function QVCDec(code){
  let str = code.split('');
  for(i=0;i<code.length;i++){
    str[i] = String.fromCharCode(asciiRange.CiR(code[i].codePointAt(),((i+2)**2)));
  }
  return decStr(str.reverse().join(''));
}
function encryptJS(str,pass){
  if(isString(str) && verifCond(typeof pass,'string|number~ object- function-')){
    let code = encStr(str).split('').reverse(), iter = '';
    pass.split('').forEach(function(x){
      iter += x.charCodeAt(0);
      // console.log(`${x} --> ${x.charCodeAt(0)}`);
    });
    iter = iter.strsub(0,2) + (iter.strsub(iter.length % 2 == 0 ? (iter.length/2)-2 : (((iter.length)-1)/2),3) - 1) + iter.substr(0,-2);
    for(i=0;i<code.length;i++){
      code[i] = String.fromCharCode(asciiRange.CiR(code[i].codePointAt(),-1*((i+2+parseInt(iter))**2)));
    }
    return code.join('');
  }
  else{
    return null;
  }
}
function decryptJS(code,pass){
  if(isString(code) && verifCond(typeof pass,'string|number~ object- function-')){
    let str = code.split(''), iter = '';
    pass.split('').forEach(function(x){
      iter += x.charCodeAt(0);
      // console.log(`${x} --> ${x.charCodeAt(0)}`);
    });
    iter = iter.strsub(0,2) + (iter.strsub(iter.length % 2 == 0 ? (iter.length/2)-2 : (((iter.length)-1)/2),3) - 1) + iter.substr(0,-2);
    // console.log(iter);
    for(i=0;i<code.length;i++){
      str[i] = String.fromCharCode(asciiRange.CiR(code[i].codePointAt(),((i+2+parseInt(iter))**2)));
    }
    return decStr(str.reverse().join(''));
  }
  else{return null;}
}
function CiR(since, until, val, des){
  let pos = val - since, maxPos = until-since, ret = {};
  let allVars = isset(arguments[4]) && isBoolean(arguments[4]) ? arguments[4] : false;
  let valid = pos !== -1 && since <= val <= until, relPos = pos + des;
  relPos = 0 <= relPos && relPos <= maxPos ? (relPos) : (des + pos > 0 ? (relPos % (maxPos + 1)) : (maxPos >= Math.abs(relPos) ? maxPos + relPos + 1 : maxPos + ((relPos+1)%(maxPos+1)))) ;
  ret = {
    ret: since + relPos,
    pos: pos,
    maxPos: maxPos,
    relPos: relPos,
    valid: valid
  };
  return valid ? (allVars ? ret : ret.ret) : null;
}
function rotoDes(start,end,val,des){
  let length = end - start;
  let retDes = val + des;
}
Array.prototype.CiR = function(val, des){
  return CiR(this[0],this[1],val,des,isset(arguments[2]) ? arguments[2] : false);
};
function adition(){
  let ret = 0, c = 0;
  while(c < arguments.length){ret += isNumber(arguments[c]) ? parseFloat(arguments[c]) : 0;c++;}
  return ret;
}
String.prototype.strToQuery = function () {
  return strToQuery(this);
};
String.prototype.QueryToStr = function () {
  return QueryToStr(this);
};
class localDB{
  version = "2.0";
  constructor(database){
    let create = isset(arguments[1]) && isBoolean(arguments[1]) ? arguments[1] : false ;
    this.database = isString(database) ? database : '';
    let tdata = localStorage.getItem(database);
    if(tdata === null && create){
      let info = `{"info_db": { "version_db": "${this.version}", "name": "${database}", "tables": [], "date":${time()}, "comment": null}}`;
      localStorage.getItem(database,info);
      console.log(`localDB: ${database} has been created.`);
      this.data = JSON.parse(info);
      this.__update__();
      return true;
    } else if(tdata === null){
      console.log(`localDB: ${database} not exists.`);
      this.data = undefined;
      return false;
    } else{
      if(this.__databaseExist__(database) && JSON.parse(tdata).info_db.version_db === this.version){
        this.data = JSON.parse(tdata);
        return true;
      }
      else{
        console.log(`localDB: ${database} isn't compatible with current version (ver. ${this.version}).`);
        return false;
      }
    }
    // console.log(this.data);
  }
  switchDatabase(database){
    if(this.__databaseExist__(database)){
      this.database = database;
      this.__update__();
      return true;
    }
    else{
      console.log(`localDB: ${database} not exists.`);
      return false;
    }
  }
  addTable(name,head){
    let table = {}, i = 0;
    let newElement = isset(arguments[2]) ? (isArray(arguments[2]) ? arguments[2] : null) : null;
    let valid = Object.keys(head).verifCond('tags|comment|types~') && isArray(head.tags) && !this.tableExists(name);
    if(valid){
      table.head = head;
      table.head.title = name;
      table.head.comment = isset(head.comment) ? head.comment : "";
      table.head.date = time();
      table.head.columns = table.head.tags.length;
      table.head.types = isset(table.head.types) && table.head.types === table.head.columns ? table.head.types : fillArray('mixed',table.head.columns);
      table.head.keys = [];
      table.head.tags.forEach(function(x){
        if(x.substr(-1).verifCond('~|*~')){
          table.head.keys.push(x);
        }
      });
      i=0;
      table.head.tags.forEach(function(x){if(x.indexOf('*') !== -1 || x.indexOf('~') !== -1) table.head.tags[i] = str_replace('*','',str_replace('~','',x));i++;});
      table.content = isArray(newElement) && newElement.length ===  table.head.columns ? [newElement] : [];
      table.head.rows = table.content.length;
      this.data[name] = table;
      this.data.info_db.tables.push(name);
      return this.__update__();
    }
    else if(isset(this.data[name])){
      console.log(`localDB: ${name} already exists in ${this.database}.`);
      return false;
    }
    else{
      console.log(`localDB: unknow error.`);
    }
  }
  removeTable(table){
    if(this.tableExists(table)){
      delete this.data[table];
      let pos = this.data.info_db.tables.indexOf(table);
      this.data.info_db.tables.remove(pos);
      return this.__update__();
    }
    else{
      console.log(`LocalDB: ${table} no exists in ${this.database}.`);
    }
  }
  tableExists(table){
    return this.data.info_db.tables.indexOf(table) !== -1;
  }
  getTable(table){return this.__buildData__(table);}
  getTableInfo(table){
    if(this.tableExists(table)){
      return this.data[table].head;
    }
    else{return null;}
  }
  setKeysType(table,typeMode){
    if(this.tableExists(table)){
    let validType = typeof typeMode === 'array';
    validType = validType && typeMode.verifCond('mixed|int||string|float|number~ -function -object');
    validType = validType && typeMode.length === this.data[table].head.columns;
        if(validType){ let c = 0, tmp;
          typeMode.forEach(function(x){
            tmp = this.data[table].head.types[c];
            this.data[table].head.types[c] = x === '' ? tmp : x;c++;
          });
          return this.__update__();
        }
    }
    else{return false;}
  }
  addRow(table,row){
    if(this.tableExists(table) && this.__validate__(table,row)){
      if(row.length < this.data[table].head.columns){
        let lrow = row.length, hrow = this.data[table].head.columns;
        while (lrow < hrow) {row.push(''); lrow++;}
      }
      this.data[table].content.push(row);
      this.data[table].head.rows++;
      // console.log(this.data[table].content);
      return this.__update__();
    }
    else{return false;}
  }
  getRow(table,where){
    if(this.tableExists(table) && typeof where === 'object' && Object.keys(where).verifCond(this.data[table].head.tags.join('|')+'~')){
      let all = isset(arguments[2]) && isBoolean(arguments[2]) ? arguments[2] : false;
      let arrdata = this.__buildData__(table), ret = [], equals = true;
      arrdata.forEach(function(x){
      for(const key in where){
        if(x[key] !== where[key]){equals = false;}
      }
      if(equals){ret.push(x);}
      equals = true;
      });
      return all ? ret : (isset(ret[0]) ? ret[0] : ret);
    }
    else{return null;}
  }
  deleteRow(table,where,all = false){
    if(this.tableExists(table)){
      let pos = this.__search__(table,where,all);
      if(pos !== null){
        if(!all){
          /*delete this.data[table].content[pos];*/
          this.data[table].content.splice(pos,1);
        }
        else{
          pos.forEach(function(x){
            /*delete this.data[table].content[x];*/
            this.data[table].content.splice(x,1);
          });
        }
      }
      else{return false;}
      this.data[table].head.rows = this.data[table].content.length;
      this.__update__();
      return true;
    }
    else{return false;}
  }
  addColumn(table,column){
    if(this.tableExists(table) && this.data[table].head.tags.indexOf(column) === -1 && typeof column === 'string'){
      let type = isset(arguments[2]) && typeof arguments[2] === 'string' && arguments[2].verifCond('mixed|int|number|string~ function- object- undefined-')? arguments[2] : 'mixed',i;
      if((this.data[table].head.combinatedKeys && column.substr(-1) === '~') || (!this.data[table].head.combinatedKeys && column.substr(-1) === '*')){
        column = column.strsub(0,-1);
        this.data[table].head.keys.push(column);
      }
      this.data[table].head.tags.push(column);
      this.data[table].head.types.push(type);
      this.data[table].head.columns++;
      // console.log(this.data[table].content);
      for(let i = 0;i<this.data[table].content.length;i++){
        // console.log(`${i}:${this.data[table].content[i]}`);
        this.data[table].content[i].push('');
      }
      return this.__update__();
    }
    else{return false;}
  }
  removeColumn(table, column){
    if(this.tableExists(table)){
      let pos = this.data[table].head.tags.indexOf(column), k = this.data[table].head.keys.indexOf(column);
      if(pos === -1){return false;}
      this.data[table].content.forEach(function(x){x.remove(pos);});
      if(k !== -1){this.data[table].head.keys.remove(k);}
      this.data[table].head.tags.remove(pos);
      this.data[table].head.types.remove(pos);
      this.data[table].head.columns--;
      this.__update__();
    }
    else {return false;}
  }
  deleteThisDatabase(verif){
    if(isBoolean(verif) && verif){
      localStorage.removeItem(this.database);
      delete this;
      return true;
    }
    else{return false;}
  }
  __search__(table,where){
    if(this.tableExists(table) && typeof where === 'object' && Object.keys(where).verifCond(this.data[table].head.tags.join('|')+'~')){
      let all = isset(arguments[2]) && isBoolean(arguments[2]) ? arguments[2] : false;
      let arrdata = this.__buildData__(table), ret = [], equals = true, c = 0;
      arrdata.forEach(function(x){
      for(const key in where){
        if(x[key] !== where[key]){equals = false;}
      }
      if(equals){ret.push(c);}
      equals = true;
      c++;
      });
      return all ? ret : (isset(ret[0]) ? ret[0] : ret);
    }
    else{return null;}
  }
  __update__(){
    localStorage.setItem(this.database,JSON.stringify(this.data));
    return true;
  }
  __buildData__(table){
    if(this.tableExists(table)){
      let ret = [],tag = this.data[table].head.tags, i = 0, c, n = tag.length;
      // this.data[table].content.forEach(function(x){c = 0;ret[i] = {};tag.forEach(function(z){ret[i][z] = x[c];c++;});i++;});
      this.data[table].content.forEach(function(x){c = 0;ret[i] = {};while(c < n){ret[i][tag[c]] = x[c];c++;}i++;});
      return ret;
    }
    else{return null;}
  }
  __validate__(table,ele){
    if(this.tableExists(table) && isArray(ele)){
      let ret = true, i;
      if(this.data[table].head.columns >= ele.length){
        for(i = 0; i < ele.length; i++){
          // VALIDACION DE TIPO
          switch(this.data[table].head.types[i]){
            case 'mixed':
            ret = typeof ele[i] === 'string' || typeof ele[i] === 'number';
            break;
            case 'int':
            ret = ele[i] === parseInt(ele[i]);
            break;
            case 'float':
            ret = typeof ele[i] === 'number' && (ele[i] - parseInt(ele[i]) > 0 || (ele[i].toString().indexOf('.') !== -1));
            break;
            default:
            ret = typeof ele[i] === this.data[table].head.types[i];
            break;
          }
        }
        console.log(`Type validation completed - ${ret ? 'OK' : 'Failed'}`);
        // VALIDACION DE LLAVES
        let keys = this.data[table].head.keys;
        let primaryKeys = []; keys.forEach(function(x){if(x.indexOf('*')!==-1) primaryKeys.push(str_replace('*','',str_replace('~','',x)));});
        let uniqueKeys = []; keys.forEach(function(x){if(x.indexOf('~')!==-1) uniqueKeys.push(str_replace('~','',str_replace('*','',x)));});
        if(keys !== [] && ret){
          let arrdata = this.__buildData__(table),tags = this.data[table].head.tags;
          // Llaves primarias
          //.
            // let posEle;
            let posEle, tkey = '', mkey = '', ind = [];
            primaryKeys.forEach(function(x){
              posEle = ele[tags.indexOf(x)];
              arrdata.forEach(function(z){
                ret = ret && (posEle !== z[x] && posEle != '');
                // console.log(`${posEle} -- ${z[x]}`);
              });
            });
          //.
          // Combinacion de llaves
          //.
            // let posEle, tkey = '', mkey = '', ind = [];
            uniqueKeys.forEach(function(x){
              posEle = ele[tags.indexOf(x)];
              tkey += (posEle === undefined ? '' : posEle) + '_';
              ind.push(tags.indexOf(x));
            });
            arrdata.forEach(function(x){
              //calcular llave
              ind.forEach(function(q){
                mkey += x[tags[q]] + '_';
              });
              //Comprarlas
              // console.log(`${mkey} -- ${tkey}`);
              ret = ret && (mkey !== tkey);
              mkey = '';
            });
          //.
          console.log(`Keys validation completed - ${ret ? 'OK' : 'Failed'}`);
        }
        return ret;
      }
    }
    else{return null;}
  }
  __databaseExist__(database){
    let tmp_data = localStorage.getItem(database);
    if(tmp_data !== null){
      let tmp_db = JSON.parse(tmp_data);
      return (valKeys(tmp_db,['info_db']) && tmp_db.info_db.version_db === this.version);
    }

  }
}
function safeReplace(str,search,replace){
  let arr = str.split('');
  return true;
}
function setRange(since,until){
  let ret = [];
  for(i = 0; i <= adition(until,-since); i++){ret[i] = since + i;}
  return ret;
}
function fillArray(str,n){
  let ret = [],i = 0;
  while(i < n){
    ret.push(str); i++;
  }
  return ret;
}
function fixArrayEmpty(array){
  if(isArray(array)){
    let ret = [];
    for(let i = 0 ; i < array.length ; i++){
      if(typeof array[i] !== 'undefined' && array[i] != ''){ret.push(array[i]);}
    }
    return ret;
  }
}
function getRandomNumber(min, max){
  return Math.random() * (max - min) + min;
}
function trimInvalid(str, param){
  let arr = str.split('');
  //param is array
  arr.forEach(function(x){

  });
}
function structurCompare(){
  let first = isset(arguments[0]) ? JSON.stringify(arguments[0]) : null, ret = true;
  if(first !== null){
    for(i = 0; i < arguments.length; i++){
      if(first !== JSON.stringify(arguments[i])){ret = false;}
    }
    return ret;
  }
  else{return false;}
}
//Util
var SL = char(10);
function sleep(ms){
  return new Promise(resolve => setTimeout(resolve, ms));
}
