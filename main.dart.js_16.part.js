((a,b)=>{a[b]=a[b]||{}})(self,"$__dart_deferred_initializers__")
$__dart_deferred_initializers__.current=function(a,b,c,$){var B,C,A={R6:function R6(d,e,f,g,h){var _=this
_.C=d
_.V=null
_.Y=e
_.K$=f
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
_.dx=$},aV8:function aV8(d){this.a=d},aru:function aru(){},w2:function w2(d,e,f){this.e=d
this.c=e
this.a=f},
ch7(){var x=new B.bJ(new Float64Array(16))
x.ez()
return new A.agI(x,$.aG())},
agI:function agI(d,e){var _=this
_.a=d
_.N$=0
_.Z$=e
_.aD$=_.al$=0},
EV:function EV(d,e){this.a=d
this.b=e},
b44:function b44(){},
azX:function azX(){},
cbr(d){var x=new B.bJ(new Float64Array(16))
if(x.jM(d)===0)throw B.k(B.fe(d,"other","Matrix cannot be inverted"))
return x},
acs:function acs(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
cpd(d){switch(d.a){case 0:return C.xF
case 2:return C.Zo
case 1:return C.Zn
case 3:return D.blc
case 4:return C.Zp}},
bDK(d,e){var x=0,w=B.E(y.e),v,u
var $async$bDK=B.A(function(f,g){if(f===1)return B.B(g,w)
for(;;)switch(x){case 0:if(e===D.afe||e===D.aff)u=!(d.gdQ()==="https"||d.gdQ()==="http")
else u=!1
if(u)throw B.k(B.fe(d,"url","To use an in-app web view, you must provide an http(s) URL."))
v=$.bRq().DQ(d.j(0),new B.a8f(A.cpd(e),new B.a7Q(!0,!0,C.a5),null))
x=1
break
case 1:return B.C(v,w)}})
return B.D($async$bDK,w)}},D
B=c[0]
C=c[2]
A=a.updateHolder(c[14],A)
D=c[20]
A.R6.prototype={
sb3m(d){if(this.C===d)return
this.C=d
this.ae()},
ca(d){var x=this.K$
if(x==null)return 0
return(this.C&1)===1?x.av(C.bU,d,x.gcp()):x.av(C.cc,d,x.gcA())},
c4(d){var x=this.K$
if(x==null)return 0
return(this.C&1)===1?x.av(C.c3,d,x.gcr()):x.av(C.c2,d,x.gcs())},
c5(d){var x=this.K$
if(x==null)return 0
return(this.C&1)===1?x.av(C.cc,d,x.gcA()):x.av(C.bU,d,x.gcp())},
c3(d){var x=this.K$
if(x==null)return 0
return(this.C&1)===1?x.av(C.c2,d,x.gcs()):x.av(C.c3,d,x.gcr())},
dq(d){var x,w,v=this.K$
if(v==null)return new B.V(B.a4(0,d.a,d.b),B.a4(0,d.c,d.d))
x=(this.C&1)===1?d.gL6():d
w=v.av(C.aX,x,v.gda())
return(this.C&1)===1?new B.V(w.b,w.a):w},
cn(){var x,w,v=this
v.V=null
x=v.K$
if(x!=null){w=y.a
x.dr((v.C&1)===1?w.a(B.Z.prototype.gab.call(v)).gL6():w.a(B.Z.prototype.gab.call(v)),!0)
x=v.C
w=v.K$
v.fy=(x&1)===1?new B.V(w.gF(0).b,v.K$.gF(0).a):w.gF(0)
x=new B.bJ(new Float64Array(16))
x.ez()
x.en(v.gF(0).a/2,v.gF(0).b/2,0,1)
x.Es(1.5707963267948966*C.t.aE(v.C,4))
x.en(-v.K$.gF(0).a/2,-v.K$.gF(0).b/2,0,1)
v.V=x}else{x=y.a.a(B.Z.prototype.gab.call(v))
v.fy=new B.V(B.a4(0,x.a,x.b),B.a4(0,x.c,x.d))}},
e4(d,e){var x=this
if(x.K$==null||x.V==null)return!1
return d.Jo(new A.aV8(x),e,x.V)},
aJw(d,e){var x=this.K$
x.toString
d.f1(x,e)},
b2(d,e){var x,w,v=this,u=v.Y
if(v.K$!=null){x=v.cx
x===$&&B.b()
w=v.V
w.toString
u.sbd(0,d.zm(x,e,w,v.gaJv(),u.a))}else u.sbd(0,null)},
m(){this.Y.sbd(0,null)
this.hD()},
eY(d,e){var x=this.V
if(x!=null)e.fm(0,x)
this.a_M(d,e)}}
A.aru.prototype={
b4(d){var x
this.fs(d)
x=this.K$
if(x!=null)x.b4(d)},
aH(d){var x
this.fh(0)
x=this.K$
if(x!=null)x.aH(0)}}
A.w2.prototype={
bl(d){var x=new A.R6(this.e,B.b3(y.i),null,new B.bv(),B.b3(y.d))
x.bj()
x.sbV(null)
return x},
bA(d,e){e.sb3m(this.e)}}
A.agI.prototype={}
A.EV.prototype={
J(){return"LaunchMode."+this.b}}
A.b44.prototype={}
A.azX.prototype={}
A.acs.prototype={
j(d){var x=this
return"[0] "+x.a.j(0)+"\n[1] "+x.b.j(0)+"\n[2] "+x.c.j(0)+"\n[3] "+x.d.j(0)+"\n"},
k(d,e){var x=this
if(e==null)return!1
return e instanceof A.acs&&x.d.k(0,e.d)&&x.c.k(0,e.c)&&x.b.k(0,e.b)&&x.a.k(0,e.a)},
gE(d){var x=this
return B.ak(x.a,x.b,x.c,x.d,C.c,C.c,C.c,C.c,C.c,C.c,C.c,C.c,C.c,C.c,C.c,C.c,C.c,C.c,C.c,C.c)}}
var z=a.updateTypes(["X(X)","~(rM,l)"])
A.aV8.prototype={
$2(d,e){return this.a.K$.dK(d,e)},
$S:40};(function installTearOffs(){var x=a._instance_1u,w=a._instance_2u
var v
x(v=A.R6.prototype,"gcA","ca",0)
x(v,"gcs","c4",0)
x(v,"gcp","c5",0)
x(v,"gcr","c3",0)
w(v,"gaJv","aJw",1)})();(function inheritance(){var x=a.mixinHard,w=a.inherit,v=a.inheritMany
w(A.aru,B.a2)
w(A.R6,A.aru)
w(A.aV8,B.m9)
w(A.w2,B.bM)
w(A.agI,B.cT)
w(A.EV,B.tG)
v(B.P,[A.b44,A.azX,A.acs])
x(A.aru,B.by)})()
B.lV(b.typeUniverse,JSON.parse('{"R6":{"a2":[],"by":["a2"],"Z":[],"i":[],"b6":[]},"w2":{"bM":[],"b9":[],"f":[],"i":[]},"agI":{"cT":["bJ"],"aw":[]}}'))
var y={a:B.a8("az"),d:B.a8("h9"),i:B.a8("wv"),e:B.a8("M")};(function constants(){D.bD1=new A.azX()
D.bD9=new A.b44()
D.bDp=new A.EV(0,"platformDefault")
D.afe=new A.EV(1,"inAppWebView")
D.aff=new A.EV(2,"inAppBrowserView")
D.Dr=new A.EV(3,"externalApplication")
D.blc=new B.Aa(3,"externalApplication")})()};
(a=>{a["XawccAf2X4DO9xI2a0XDK1X9EHU="]=a.current})($__dart_deferred_initializers__);