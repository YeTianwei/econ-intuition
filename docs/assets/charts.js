(function(){
'use strict';
var NS='http://www.w3.org/2000/svg', MINUS='−';
function el(tag,attrs,text){var e=document.createElementNS(NS,tag);for(var k in attrs){e.setAttribute(k,attrs[k]);}if(text!=null){e.textContent=text;}return e;}
function fmt(n,d){var s=Math.abs(n).toFixed(d);return (n<0&&+s!==0?MINUS:'')+s;}
function fmtS(n,d){var s=Math.abs(n).toFixed(d);if(+s===0){return s;}return (n<0?MINUS:'+')+s;}
function sgnInt(n){return (n>0?'+':n<0?MINUS:'')+Math.abs(n);}

/* Liang-Barsky 线段裁剪,点为 [Q,P] */
function clip(a,b,r){
  var t0=0,t1=1,dq=b[0]-a[0],dp=b[1]-a[1];
  var tests=[[-dq,a[0]-r.q0],[dq,r.q1-a[0]],[-dp,a[1]-r.p0],[dp,r.p1-a[1]]];
  for(var i=0;i<4;i++){
    var p=tests[i][0],q=tests[i][1];
    if(p===0){if(q<0){return null;}}
    else{
      var t=q/p;
      if(p<0){if(t>t1){return null;}if(t>t0){t0=t;}}
      else{if(t<t0){return null;}if(t<t1){t1=t;}}
    }
  }
  return [[a[0]+t0*dq,a[1]+t0*dp],[a[0]+t1*dq,a[1]+t1*dp]];
}
/* fn: 价格 -> 数量(直线) */
function seg(fn,r){return clip([fn(-80),-80],[fn(80),80],r);}

function frame(box,c){
  var w=Math.max(280,Math.floor(box.clientWidth));
  var h=Math.round(Math.min(400,Math.max(250,w*0.62)));
  var m={l:w<440?44:52,r:14,t:12,b:44};
  var iw=w-m.l-m.r,ih=h-m.t-m.b;
  var f={
    m:m,iw:iw,ih:ih,w:w,h:h,mid:'ah'+c.id,
    x:function(q){return m.l+(q-c.q0)/(c.q1-c.q0)*iw;},
    y:function(p){return m.t+ih-(p-c.p0)/(c.p1-c.p0)*ih;}
  };
  var svg=el('svg',{viewBox:'0 0 '+w+' '+h,width:w,height:h,'class':'plot',role:'img','aria-label':c.label});
  var defs=el('defs',{});
  var mk=el('marker',{id:f.mid,viewBox:'0 0 10 10',refX:'9',refY:'5',markerWidth:'7',markerHeight:'7',orient:'auto'});
  mk.appendChild(el('path',{d:'M0 0L10 5L0 10z','class':'arrowhead'}));
  defs.appendChild(mk);svg.appendChild(defs);
  svg.appendChild(el('rect',{x:m.l,y:m.t,width:iw,height:ih,'class':'plotbg'}));
  var q,p,X,Y;
  for(q=c.q0;q<=c.q1+1e-9;q+=c.qs){
    X=f.x(q);
    svg.appendChild(el('line',{x1:X,x2:X,y1:m.t,y2:m.t+ih,'class':'gridline'}));
    svg.appendChild(el('text',{x:X,y:m.t+ih+16,'text-anchor':'middle','class':'tick'},String(q)));
  }
  for(p=c.p0;p<=c.p1+1e-9;p+=c.ps){
    Y=f.y(p);
    svg.appendChild(el('line',{x1:m.l,x2:m.l+iw,y1:Y,y2:Y,'class':'gridline'}));
    svg.appendChild(el('text',{x:m.l-8,y:Y+4,'text-anchor':'end','class':'tick'},String(p)));
  }
  svg.appendChild(el('rect',{x:m.l,y:m.t,width:iw,height:ih,'class':'plotframe'}));
  svg.appendChild(el('text',{x:m.l+iw/2,y:h-6,'text-anchor':'middle','class':'axtitle'},c.xt));
  svg.appendChild(el('text',{transform:'translate(12 '+(m.t+ih/2)+') rotate(-90)','text-anchor':'middle','class':'axtitle'},c.yt));
  f.svg=svg;
  return f;
}
function pathOf(f,s,cls){
  return el('path',{d:'M'+f.x(s[0][0]).toFixed(1)+' '+f.y(s[0][1]).toFixed(1)+'L'+f.x(s[1][0]).toFixed(1)+' '+f.y(s[1][1]).toFixed(1),'class':cls});
}
function label(f,text,cls,x,y,anchor){
  f.svg.appendChild(el('text',{x:x,y:y,'text-anchor':anchor,'class':'curvelab '+cls+' halo'},text));
}
function guides(f,x,y,faint){
  var a=el('line',{x1:x,x2:x,y1:y,y2:f.m.t+f.ih,'class':'guide'});
  var b=el('line',{x1:f.m.l,x2:x,y1:y,y2:y,'class':'guide'});
  if(faint){a.style.opacity='.5';b.style.opacity='.5';}
  f.svg.appendChild(a);f.svg.appendChild(b);
}
function arrow(f,x0,y0,x1,y1){
  var dx=x1-x0,dy=y1-y0,L=Math.sqrt(dx*dx+dy*dy);
  if(L<20){return;}
  var ux=dx/L,uy=dy/L;
  f.svg.appendChild(el('line',{x1:x0+ux*8,y1:y0+uy*8,x2:x1-ux*9,y2:y1-uy*9,'class':'shift','marker-end':'url(#'+f.mid+')'}));
}
function watch(box,fn){
  var w=0;
  if(window.ResizeObserver){
    new ResizeObserver(function(){var n=Math.round(box.clientWidth);if(n&&n!==w){w=n;fn();}}).observe(box);
  }else{window.addEventListener('resize',fn);}
}

window.Charts={el:el,clip:clip,seg:seg,frame:frame,pathOf:pathOf,label:label,guides:guides,arrow:arrow,watch:watch,fmt:fmt,fmtS:fmtS,sgnInt:sgnInt};
})();
