$.fn.makeMenu = function(ObjData){
  //vars
  //is <ul> or <ol>
 let all = $(this);
 let classNameIdent = isset(ObjData.classIdent) ? ObjData.classIdent : '';
 let def = isset(ObjData.defaultIndex) ? ObjData.defaultIndex : 0;
 let OnClick = isset(ObjData.OnClick) && typeof ObjData.OnClick === 'function' ? ObjData.OnClick : function(){};
 let current;
 //configvalid
 classNameIdent = classNameIdent.indexOf('.') !== -1 ? classNameIdent : '.' + classNameIdent ;
 //start
 $(this).on('click',function(){
   Object.keys(all).forEach(function(x){
     if($(all[x]).hasClass('active')){$(all[x]).removeClass('active');current = $(all[x]).attr('link');}
   });
   if(current !== $(this).attr('link')){
     OnClick();
     $(classNameIdent).each(function(){
       if($(this).attr('name') != current){$(this).hide();}
     });
     $(classNameIdent+'[name="'+current+'"]').hide( "drop", { direction: "up" }, 250 );
     // $(classNameIdent+'[name="'+current+'"]').hide("puff", {}, 300);
     $('div[name="' + $(this).attr('link') + '"]').delay(250).show(0);
   }
   $(this).addClass('active');
 });
 if(def !== null){
   $(this[def]).addClass('active');
   $('div[name="' + $(this[def]).attr('link') + '"]').show();
 };
};
$.fn.animateplay = function(ObjData){
  let animationName = isset(ObjData.animationName) ? ObjData.animationName : 'smooth';
  let time = isset(ObjData.animationTime) ? ObjData.animationTime : 0.3;
  let functionTime = isset(ObjData.animationFunctionTime) ? ObjData.animationFunctionTime : 'linear';
  let fillMode = isset(ObjData.animationFillMode) ? ObjData.animationFillMode : 'backwards';
  //config
  time = typeof time === 'number' || (typeof time === 'string' && time.indexOf('s') !== -1) ? parseFloat(time) : parseFloat(time.str_replace('s',''));
  let n = $(this).length, i = isset(ObjData.iterationProp) ? ObjData.iterationProp : 1/n, x = 0, r;
  $(this).each(function(){
    x += i;
    $(this).css({
      'animation-name': animationName,
      'animation-duration': time + (x/5) + 's',
      'animation-timing-function': functionTime,
      'animation-delay': x - (x/5) + 's',
      'animation-fill-mode': fillMode,
    });
  });
};
$.fn.clearAnim = function(){
  $(this).each(function(){
    $(this).css('animation','');
  });
};
