((a,b)=>{a[b]=a[b]||{}})(self,"$__dart_deferred_initializers__")
$__dart_deferred_initializers__.current=function(a,b,c,$){var B,C,A={Rb:function Rb(d,e,f,g,h){var _=this
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
_.dx=$},aV9:function aV9(d){this.a=d},arA:function arA(){},w6:function w6(d,e,f){this.e=d
this.c=e
this.a=f},
chD(){var x=new B.bJ(new Float64Array(16))
x.eA()
return new A.agN(x,$.aH())},
agN:function agN(d,e){var _=this
_.a=d
_.N$=0
_.Y$=e
_.aD$=_.ak$=0},
F_:function F_(d,e){this.a=d
this.b=e},
b45:function b45(){},
azZ:function azZ(){},
cbY(d){var x=new B.bJ(new Float64Array(16))
if(x.jM(d)===0)throw B.k(B.ff(d,"other","Matrix cannot be inverted"))
return x},
acz:function acz(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
cpN(d){switch(d.a){case 0:return C.xE
case 2:return C.Zn
case 1:return C.Zm
case 3:return D.blf
case 4:return C.Zo}},
bE6(d,e){var x=0,w=B.D(y.e),v,u
var $async$bE6=B.z(function(f,g){if(f===1)return B.A(g,w)
for(;;)switch(x){case 0:if(e===D.afd||e===D.afe)u=!(d.gdQ()==="https"||d.gdQ()==="http")
else u=!1
if(u)throw B.k(B.ff(d,"url","To use an in-app web view, you must provide an http(s) URL."))
v=$.bRT().DW(d.j(0),new B.a8l(A.cpN(e),new B.a7W(!0,!0,C.a4),null))
x=1
break
case 1:return B.B(v,w)}})
return B.C($async$bE6,w)}},D
B=c[0]
C=c[2]
A=a.updateHolder(c[14],A)
D=c[20]
A.Rb.prototype={
sb40(d){if(this.C===d)return
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
if(v==null)return new B.V(B.a5(0,d.a,d.b),B.a5(0,d.c,d.d))
x=(this.C&1)===1?d.gLg():d
w=v.av(C.aY,x,v.gda())
return(this.C&1)===1?new B.V(w.b,w.a):w},
cn(){var x,w,v=this
v.W=null
x=v.K$
if(x!=null){w=y.a
x.dr((v.C&1)===1?w.a(B.a_.prototype.gab.call(v)).gLg():w.a(B.a_.prototype.gab.call(v)),!0)
x=v.C
w=v.K$
v.fy=(x&1)===1?new B.V(w.gF(0).b,v.K$.gF(0).a):w.gF(0)
x=new B.bJ(new Float64Array(16))
x.eA()
x.eo(v.gF(0).a/2,v.gF(0).b/2,0,1)
x.Ey(1.5707963267948966*C.t.aF(v.C,4))
x.eo(-v.K$.gF(0).a/2,-v.K$.gF(0).b/2,0,1)
v.W=x}else{x=y.a.a(B.a_.prototype.gab.call(v))
v.fy=new B.V(B.a5(0,x.a,x.b),B.a5(0,x.c,x.d))}},
e4(d,e){var x=this
if(x.K$==null||x.W==null)return!1
return d.Jx(new A.aV9(x),e,x.W)},
aKa(d,e){var x=this.K$
x.toString
d.f1(x,e)},
b3(d,e){var x,w,v=this,u=v.Z
if(v.K$!=null){x=v.cx
x===$&&B.b()
w=v.W
w.toString
u.sbd(0,d.zs(x,e,w,v.gaK9(),u.a))}else u.sbd(0,null)},
m(){this.Z.sbd(0,null)
this.hF()},
eY(d,e){var x=this.W
if(x!=null)e.fl(0,x)
this.a_Y(d,e)}}
A.arA.prototype={
b5(d){var x
this.fq(d)
x=this.K$
if(x!=null)x.b5(d)},
aI(d){var x
this.fg(0)
x=this.K$
if(x!=null)x.aI(0)}}
A.w6.prototype={
bo(d){var x=new A.Rb(this.e,B.b3(y.i),null,new B.bv(),B.b3(y.d))
x.bm()
x.sbV(null)
return x},
bA(d,e){e.sb40(this.e)}}
A.agN.prototype={}
A.F_.prototype={
J(){return"LaunchMode."+this.b}}
A.b45.prototype={}
A.azZ.prototype={}
A.acz.prototype={
j(d){var x=this
return"[0] "+x.a.j(0)+"\n[1] "+x.b.j(0)+"\n[2] "+x.c.j(0)+"\n[3] "+x.d.j(0)+"\n"},
k(d,e){var x=this
if(e==null)return!1
return e instanceof A.acz&&x.d.k(0,e.d)&&x.c.k(0,e.c)&&x.b.k(0,e.b)&&x.a.k(0,e.a)},
gE(d){var x=this
return B.al(x.a,x.b,x.c,x.d,C.c,C.c,C.c,C.c,C.c,C.c,C.c,C.c,C.c,C.c,C.c,C.c,C.c,C.c,C.c,C.c)}}
var z=a.updateTypes(["X(X)","~(rP,l)"])
A.aV9.prototype={
$2(d,e){return this.a.K$.dK(d,e)},
$S:40};(function installTearOffs(){var x=a._instance_1u,w=a._instance_2u
var v
x(v=A.Rb.prototype,"gcA","cb",0)
x(v,"gcs","c4",0)
x(v,"gcp","c5",0)
x(v,"gcr","c3",0)
w(v,"gaK9","aKa",1)})();(function inheritance(){var x=a.mixinHard,w=a.inherit,v=a.inheritMany
w(A.arA,B.a2)
w(A.Rb,A.arA)
w(A.aV9,B.mb)
w(A.w6,B.bM)
w(A.agN,B.cU)
w(A.F_,B.tJ)
v(B.P,[A.b45,A.azZ,A.acz])
x(A.arA,B.by)})()
B.lX(b.typeUniverse,JSON.parse('{"Rb":{"a2":[],"by":["a2"],"a_":[],"i":[],"b6":[]},"w6":{"bM":[],"ba":[],"f":[],"i":[]},"agN":{"cU":["bJ"],"aw":[]}}'))
var y={a:B.a8("aB"),d:B.a8("ha"),i:B.a8("wz"),e:B.a8("L")};(function constants(){D.bD4=new A.azZ()
D.bDc=new A.b45()
D.bDs=new A.F_(0,"platformDefault")
D.afd=new A.F_(1,"inAppWebView")
D.afe=new A.F_(2,"inAppBrowserView")
D.Dp=new A.F_(3,"externalApplication")
D.blf=new B.Ad(3,"externalApplication")})()};
(a=>{a["zzm54fAvwejJM8TxqrLwkq+XmEA="]=a.current})($__dart_deferred_initializers__);