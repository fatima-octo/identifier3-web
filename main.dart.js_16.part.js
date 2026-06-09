((a,b)=>{a[b]=a[b]||{}})(self,"$__dart_deferred_initializers__")
$__dart_deferred_initializers__.current=function(a,b,c,$){var B,C,A={R7:function R7(d,e,f,g,h){var _=this
_.C=d
_.W=null
_.Z=e
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
_.dx=$},aVa:function aVa(d){this.a=d},aru:function aru(){},w5:function w5(d,e,f){this.e=d
this.c=e
this.a=f},
chn(){var x=new B.bJ(new Float64Array(16))
x.eA()
return new A.agI(x,$.aH())},
agI:function agI(d,e){var _=this
_.a=d
_.N$=0
_.Y$=e
_.aD$=_.aj$=0},
EY:function EY(d,e){this.a=d
this.b=e},
b46:function b46(){},
azY:function azY(){},
cbH(d){var x=new B.bJ(new Float64Array(16))
if(x.jM(d)===0)throw B.k(B.ff(d,"other","Matrix cannot be inverted"))
return x},
acs:function acs(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
cpw(d){switch(d.a){case 0:return C.xF
case 2:return C.Zo
case 1:return C.Zn
case 3:return D.ble
case 4:return C.Zp}},
bDT(d,e){var x=0,w=B.E(y.e),v,u
var $async$bDT=B.z(function(f,g){if(f===1)return B.B(g,w)
for(;;)switch(x){case 0:if(e===D.afe||e===D.aff)u=!(d.gdQ()==="https"||d.gdQ()==="http")
else u=!1
if(u)throw B.k(B.ff(d,"url","To use an in-app web view, you must provide an http(s) URL."))
v=$.bRC().DR(d.j(0),new B.a8f(A.cpw(e),new B.a7Q(!0,!0,C.a4),null))
x=1
break
case 1:return B.C(v,w)}})
return B.D($async$bDT,w)}},D
B=c[0]
C=c[2]
A=a.updateHolder(c[14],A)
D=c[20]
A.R7.prototype={
sb3u(d){if(this.C===d)return
this.C=d
this.ae()},
cb(d){var x=this.K$
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
x.eA()
x.eo(v.gF(0).a/2,v.gF(0).b/2,0,1)
x.Et(1.5707963267948966*C.t.aE(v.C,4))
x.eo(-v.K$.gF(0).a/2,-v.K$.gF(0).b/2,0,1)
v.W=x}else{x=y.a.a(B.Z.prototype.gab.call(v))
v.fy=new B.V(B.a4(0,x.a,x.b),B.a4(0,x.c,x.d))}},
e4(d,e){var x=this
if(x.K$==null||x.W==null)return!1
return d.Js(new A.aVa(x),e,x.W)},
aJF(d,e){var x=this.K$
x.toString
d.f1(x,e)},
b3(d,e){var x,w,v=this,u=v.Z
if(v.K$!=null){x=v.cx
x===$&&B.b()
w=v.W
w.toString
u.sbe(0,d.zm(x,e,w,v.gaJE(),u.a))}else u.sbe(0,null)},
m(){this.Z.sbe(0,null)
this.hE()},
eY(d,e){var x=this.W
if(x!=null)e.fl(0,x)
this.a_N(d,e)}}
A.aru.prototype={
b5(d){var x
this.fq(d)
x=this.K$
if(x!=null)x.b5(d)},
aH(d){var x
this.fg(0)
x=this.K$
if(x!=null)x.aH(0)}}
A.w5.prototype={
bn(d){var x=new A.R7(this.e,B.b3(y.i),null,new B.bv(),B.b3(y.d))
x.bl()
x.sbV(null)
return x},
bA(d,e){e.sb3u(this.e)}}
A.agI.prototype={}
A.EY.prototype={
J(){return"LaunchMode."+this.b}}
A.b46.prototype={}
A.azY.prototype={}
A.acs.prototype={
j(d){var x=this
return"[0] "+x.a.j(0)+"\n[1] "+x.b.j(0)+"\n[2] "+x.c.j(0)+"\n[3] "+x.d.j(0)+"\n"},
k(d,e){var x=this
if(e==null)return!1
return e instanceof A.acs&&x.d.k(0,e.d)&&x.c.k(0,e.c)&&x.b.k(0,e.b)&&x.a.k(0,e.a)},
gE(d){var x=this
return B.ak(x.a,x.b,x.c,x.d,C.c,C.c,C.c,C.c,C.c,C.c,C.c,C.c,C.c,C.c,C.c,C.c,C.c,C.c,C.c,C.c)}}
var z=a.updateTypes(["X(X)","~(rN,l)"])
A.aVa.prototype={
$2(d,e){return this.a.K$.dK(d,e)},
$S:41};(function installTearOffs(){var x=a._instance_1u,w=a._instance_2u
var v
x(v=A.R7.prototype,"gcA","cb",0)
x(v,"gcs","c4",0)
x(v,"gcp","c5",0)
x(v,"gcr","c3",0)
w(v,"gaJE","aJF",1)})();(function inheritance(){var x=a.mixinHard,w=a.inherit,v=a.inheritMany
w(A.aru,B.a2)
w(A.R7,A.aru)
w(A.aVa,B.mb)
w(A.w5,B.bM)
w(A.agI,B.cU)
w(A.EY,B.tH)
v(B.P,[A.b46,A.azY,A.acs])
x(A.aru,B.by)})()
B.lX(b.typeUniverse,JSON.parse('{"R7":{"a2":[],"by":["a2"],"Z":[],"i":[],"b6":[]},"w5":{"bM":[],"ba":[],"f":[],"i":[]},"agI":{"cU":["bJ"],"aw":[]}}'))
var y={a:B.a8("aB"),d:B.a8("ha"),i:B.a8("wy"),e:B.a8("L")};(function constants(){D.bD3=new A.azY()
D.bDb=new A.b46()
D.bDr=new A.EY(0,"platformDefault")
D.afe=new A.EY(1,"inAppWebView")
D.aff=new A.EY(2,"inAppBrowserView")
D.Dr=new A.EY(3,"externalApplication")
D.ble=new B.Ac(3,"externalApplication")})()};
(a=>{a["10GVIly4mMUJjLITx+I9i5g7fKQ="]=a.current})($__dart_deferred_initializers__);