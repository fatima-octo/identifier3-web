((a,b)=>{a[b]=a[b]||{}})(self,"$__dart_deferred_initializers__")
$__dart_deferred_initializers__.current=function(a,b,c,$){var B,C,A={Tq:function Tq(d,e,f,g,h){var _=this
_.E=d
_.Z=null
_.a0=e
_.M$=f
_.dy=g
_.b=_.fy=null
_.c=0
_.y=_.d=null
_.z=!0
_.Q=null
_.as=!1
_.at=null
_.ay=$
_.ch=h
_.CW=!1
_.cx=$
_.cy=!0
_.db=!1
_.dx=$},b3K:function b3K(d){this.a=d},avq:function avq(){},xo:function xo(d,e,f){this.e=d
this.c=e
this.a=f},
cyN(){var x=new B.c2(new Float64Array(16))
x.eV()
return new A.ak3(x,$.aJ())},
ak3:function ak3(d,e){var _=this
_.a=d
_.P$=0
_.Y$=e
_.az$=_.ah$=0},
GJ:function GJ(d,e){this.a=d
this.b=e},
beh:function beh(){},
aEE:function aEE(){},
ct7(d){var x=new B.c2(new Float64Array(16))
if(x.kD(d)===0)throw B.k(B.fK(d,"other","Matrix cannot be inverted"))
return x},
afK:function afK(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
cHz(d){switch(d.a){case 0:return C.ya
case 2:return C.a_a
case 1:return C.a_9
case 3:return D.bmP
case 4:return C.a_b}},
bRq(d,e){var x=0,w=B.u(y.e),v,u
var $async$bRq=B.p(function(f,g){if(f===1)return B.q(g,w)
for(;;)switch(x){case 0:if(e===D.age||e===D.agf)u=!(d.ge8()==="https"||d.ge8()==="http")
else u=!1
if(u)throw B.k(B.fK(d,"url","To use an in-app web view, you must provide an http(s) URL."))
v=$.c62().Hm(d.j(0),new B.abt(A.cHz(e),new B.ab2(!0,!0,C.Z),null))
x=1
break
case 1:return B.r(v,w)}})
return B.t($async$bRq,w)}},D
B=c[0]
C=c[2]
A=a.updateHolder(c[14],A)
D=c[19]
A.Tq.prototype={
sbdO(d){if(this.E===d)return
this.E=d
this.ai()},
cn(d){var x=this.M$
if(x==null)return 0
return(this.E&1)===1?x.aF(C.bY,d,x.gcL()):x.aF(C.cf,d,x.gcS())},
cf(d){var x=this.M$
if(x==null)return 0
return(this.E&1)===1?x.aF(C.c6,d,x.gcN()):x.aF(C.c5,d,x.gcO())},
cg(d){var x=this.M$
if(x==null)return 0
return(this.E&1)===1?x.aF(C.cf,d,x.gcS()):x.aF(C.bY,d,x.gcL())},
ce(d){var x=this.M$
if(x==null)return 0
return(this.E&1)===1?x.aF(C.c5,d,x.gcO()):x.aF(C.c6,d,x.gcN())},
dJ(d){var x,w,v=this.M$
if(v==null)return new B.a_(B.ab(0,d.a,d.b),B.ab(0,d.c,d.d))
x=(this.E&1)===1?d.gP6():d
w=v.aF(C.b1,x,v.gdw())
return(this.E&1)===1?new B.a_(w.b,w.a):w},
cH(){var x,w,v=this
v.Z=null
x=v.M$
if(x!=null){w=y.a
x.dL((v.E&1)===1?w.a(B.a3.prototype.gad.call(v)).gP6():w.a(B.a3.prototype.gad.call(v)),!0)
x=v.E
w=v.M$
v.fy=(x&1)===1?new B.a_(w.gH(0).b,v.M$.gH(0).a):w.gH(0)
x=new B.c2(new Float64Array(16))
x.eV()
x.eK(v.gH(0).a/2,v.gH(0).b/2,0,1)
x.HY(1.5707963267948966*C.r.aJ(v.E,4))
x.eK(-v.M$.gH(0).a/2,-v.M$.gH(0).b/2,0,1)
v.Z=x}else{x=y.a.a(B.a3.prototype.gad.call(v))
v.fy=new B.a_(B.ab(0,x.a,x.b),B.ab(0,x.c,x.d))}},
eo(d,e){var x=this
if(x.M$==null||x.Z==null)return!1
return d.Nm(new A.b3K(x),e,x.Z)},
aQH(d,e){var x=this.M$
x.toString
d.fn(x,e)},
b9(d,e){var x,w,v=this,u=v.a0
if(v.M$!=null){x=v.cx
x===$&&B.b()
w=v.Z
w.toString
u.sbk(0,d.Cr(x,e,w,v.gaQG(),u.a))}else u.sbk(0,null)},
m(){this.a0.sbk(0,null)
this.ii()},
fi(d,e){var x=this.Z
if(x!=null)e.fP(0,x)
this.a4s(d,e)}}
A.avq.prototype={
bb(d){var x
this.fW(d)
x=this.M$
if(x!=null)x.bb(d)},
aL(d){var x
this.fI(0)
x=this.M$
if(x!=null)x.aL(0)}}
A.xo.prototype={
bt(d){var x=new A.Tq(this.e,B.b6(y.i),null,new B.bJ(),B.b6(y.d))
x.bs()
x.sc3(null)
return x},
bG(d,e){e.sbdO(this.e)}}
A.ak3.prototype={}
A.GJ.prototype={
K(){return"LaunchMode."+this.b}}
A.beh.prototype={}
A.aEE.prototype={}
A.afK.prototype={
j(d){var x=this
return"[0] "+x.a.j(0)+"\n[1] "+x.b.j(0)+"\n[2] "+x.c.j(0)+"\n[3] "+x.d.j(0)+"\n"},
l(d,e){var x=this
if(e==null)return!1
return e instanceof A.afK&&x.d.l(0,e.d)&&x.c.l(0,e.c)&&x.b.l(0,e.b)&&x.a.l(0,e.a)},
gF(d){var x=this
return B.ao(x.a,x.b,x.c,x.d,C.c,C.c,C.c,C.c,C.c,C.c,C.c,C.c,C.c,C.c,C.c,C.c,C.c,C.c,C.c,C.c)}}
var z=a.updateTypes(["a0(a0)","~(u2,n)"])
A.b3K.prototype={
$2(d,e){return this.a.M$.e3(d,e)},
$S:48};(function installTearOffs(){var x=a._instance_1u,w=a._instance_2u
var v
x(v=A.Tq.prototype,"gcS","cn",0)
x(v,"gcO","cf",0)
x(v,"gcL","cg",0)
x(v,"gcN","ce",0)
w(v,"gaQG","aQH",1)})();(function inheritance(){var x=a.mixinHard,w=a.inherit,v=a.inheritMany
w(A.avq,B.a7)
w(A.Tq,A.avq)
w(A.b3K,B.mW)
w(A.xo,B.c9)
w(A.ak3,B.d9)
w(A.GJ,B.uZ)
v(B.R,[A.beh,A.aEE,A.afK])
x(A.avq,B.bM)})()
B.nL(b.typeUniverse,JSON.parse('{"Tq":{"a7":[],"bM":["a7"],"a3":[],"i":[],"ba":[]},"xo":{"c9":[],"bc":[],"f":[],"i":[]},"ak3":{"d9":["c2"],"aD":[]}}'))
var y={a:B.a9("aM"),d:B.a9("hE"),i:B.a9("xR"),e:B.a9("M")};(function constants(){D.bEJ=new A.aEE()
D.bER=new A.beh()
D.bF6=new A.GJ(0,"platformDefault")
D.age=new A.GJ(1,"inAppWebView")
D.agf=new A.GJ(2,"inAppBrowserView")
D.E0=new A.GJ(3,"externalApplication")
D.bmP=new B.By(3,"externalApplication")})()};
(a=>{a["7KfxqEDaifpAVyblwSwZdYhTPQ4="]=a.current})($__dart_deferred_initializers__);