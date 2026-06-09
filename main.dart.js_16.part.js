((a,b)=>{a[b]=a[b]||{}})(self,"$__dart_deferred_initializers__")
$__dart_deferred_initializers__.current=function(a,b,c,$){var B,C,A={R7:function R7(d,e,f,g,h){var _=this
_.C=d
_.W=null
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
_.dx=$},aV9:function aV9(d){this.a=d},aru:function aru(){},w3:function w3(d,e,f){this.e=d
this.c=e
this.a=f},
chi(){var x=new B.bJ(new Float64Array(16))
x.ez()
return new A.agI(x,$.aH())},
agI:function agI(d,e){var _=this
_.a=d
_.N$=0
_.Z$=e
_.aD$=_.al$=0},
EY:function EY(d,e){this.a=d
this.b=e},
b45:function b45(){},
azX:function azX(){},
cbC(d){var x=new B.bJ(new Float64Array(16))
if(x.jM(d)===0)throw B.k(B.fe(d,"other","Matrix cannot be inverted"))
return x},
acs:function acs(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
cpq(d){switch(d.a){case 0:return C.xF
case 2:return C.Zo
case 1:return C.Zn
case 3:return D.blc
case 4:return C.Zp}},
bDR(d,e){var x=0,w=B.E(y.e),v,u
var $async$bDR=B.z(function(f,g){if(f===1)return B.B(g,w)
for(;;)switch(x){case 0:if(e===D.afe||e===D.aff)u=!(d.gdQ()==="https"||d.gdQ()==="http")
else u=!1
if(u)throw B.k(B.fe(d,"url","To use an in-app web view, you must provide an http(s) URL."))
v=$.bRA().DR(d.j(0),new B.a8f(A.cpq(e),new B.a7Q(!0,!0,C.a5),null))
x=1
break
case 1:return B.C(v,w)}})
return B.D($async$bDR,w)}},D
B=c[0]
C=c[2]
A=a.updateHolder(c[14],A)
D=c[20]
A.R7.prototype={
sb3r(d){if(this.C===d)return
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
x=(this.C&1)===1?d.gLb():d
w=v.av(C.aY,x,v.gda())
return(this.C&1)===1?new B.V(w.b,w.a):w},
cn(){var x,w,v=this
v.W=null
x=v.K$
if(x!=null){w=y.a
x.dr((v.C&1)===1?w.a(B.Z.prototype.gab.call(v)).gLb():w.a(B.Z.prototype.gab.call(v)),!0)
x=v.C
w=v.K$
v.fy=(x&1)===1?new B.V(w.gF(0).b,v.K$.gF(0).a):w.gF(0)
x=new B.bJ(new Float64Array(16))
x.ez()
x.en(v.gF(0).a/2,v.gF(0).b/2,0,1)
x.Et(1.5707963267948966*C.t.aE(v.C,4))
x.en(-v.K$.gF(0).a/2,-v.K$.gF(0).b/2,0,1)
v.W=x}else{x=y.a.a(B.Z.prototype.gab.call(v))
v.fy=new B.V(B.a4(0,x.a,x.b),B.a4(0,x.c,x.d))}},
e4(d,e){var x=this
if(x.K$==null||x.W==null)return!1
return d.Js(new A.aV9(x),e,x.W)},
aJC(d,e){var x=this.K$
x.toString
d.f1(x,e)},
b3(d,e){var x,w,v=this,u=v.Y
if(v.K$!=null){x=v.cx
x===$&&B.b()
w=v.W
w.toString
u.sbe(0,d.zm(x,e,w,v.gaJB(),u.a))}else u.sbe(0,null)},
m(){this.Y.sbe(0,null)
this.hD()},
eY(d,e){var x=this.W
if(x!=null)e.fm(0,x)
this.a_P(d,e)}}
A.aru.prototype={
b5(d){var x
this.fs(d)
x=this.K$
if(x!=null)x.b5(d)},
aH(d){var x
this.fh(0)
x=this.K$
if(x!=null)x.aH(0)}}
A.w3.prototype={
bn(d){var x=new A.R7(this.e,B.b3(y.i),null,new B.bv(),B.b3(y.d))
x.bl()
x.sbV(null)
return x},
bA(d,e){e.sb3r(this.e)}}
A.agI.prototype={}
A.EY.prototype={
J(){return"LaunchMode."+this.b}}
A.b45.prototype={}
A.azX.prototype={}
A.acs.prototype={
j(d){var x=this
return"[0] "+x.a.j(0)+"\n[1] "+x.b.j(0)+"\n[2] "+x.c.j(0)+"\n[3] "+x.d.j(0)+"\n"},
k(d,e){var x=this
if(e==null)return!1
return e instanceof A.acs&&x.d.k(0,e.d)&&x.c.k(0,e.c)&&x.b.k(0,e.b)&&x.a.k(0,e.a)},
gE(d){var x=this
return B.ak(x.a,x.b,x.c,x.d,C.c,C.c,C.c,C.c,C.c,C.c,C.c,C.c,C.c,C.c,C.c,C.c,C.c,C.c,C.c,C.c)}}
var z=a.updateTypes(["X(X)","~(rN,l)"])
A.aV9.prototype={
$2(d,e){return this.a.K$.dK(d,e)},
$S:42};(function installTearOffs(){var x=a._instance_1u,w=a._instance_2u
var v
x(v=A.R7.prototype,"gcA","ca",0)
x(v,"gcs","c4",0)
x(v,"gcp","c5",0)
x(v,"gcr","c3",0)
w(v,"gaJB","aJC",1)})();(function inheritance(){var x=a.mixinHard,w=a.inherit,v=a.inheritMany
w(A.aru,B.a2)
w(A.R7,A.aru)
w(A.aV9,B.mb)
w(A.w3,B.bM)
w(A.agI,B.cT)
w(A.EY,B.tH)
v(B.P,[A.b45,A.azX,A.acs])
x(A.aru,B.by)})()
B.lX(b.typeUniverse,JSON.parse('{"R7":{"a2":[],"by":["a2"],"Z":[],"i":[],"b6":[]},"w3":{"bM":[],"ba":[],"f":[],"i":[]},"agI":{"cT":["bJ"],"ax":[]}}'))
var y={a:B.a8("aA"),d:B.a8("h9"),i:B.a8("ww"),e:B.a8("M")};(function constants(){D.bD1=new A.azX()
D.bD9=new A.b45()
D.bDp=new A.EY(0,"platformDefault")
D.afe=new A.EY(1,"inAppWebView")
D.aff=new A.EY(2,"inAppBrowserView")
D.Dr=new A.EY(3,"externalApplication")
D.blc=new B.Ab(3,"externalApplication")})()};
(a=>{a["V58KJtTVKaPAJlUzZCxARpYFXJM="]=a.current})($__dart_deferred_initializers__);