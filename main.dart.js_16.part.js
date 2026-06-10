((a,b)=>{a[b]=a[b]||{}})(self,"$__dart_deferred_initializers__")
$__dart_deferred_initializers__.current=function(a,b,c,$){var B,C,A={Rc:function Rc(d,e,f,g,h){var _=this
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
_.dx=$},aVb:function aVb(d){this.a=d},arC:function arC(){},w4:function w4(d,e,f){this.e=d
this.c=e
this.a=f},
chF(){var x=new B.bI(new Float64Array(16))
x.eA()
return new A.agO(x,$.aH())},
agO:function agO(d,e){var _=this
_.a=d
_.N$=0
_.Y$=e
_.aD$=_.ak$=0},
F0:function F0(d,e){this.a=d
this.b=e},
b47:function b47(){},
aA0:function aA0(){},
cc_(d){var x=new B.bI(new Float64Array(16))
if(x.jM(d)===0)throw B.k(B.ff(d,"other","Matrix cannot be inverted"))
return x},
acA:function acA(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
cpQ(d){switch(d.a){case 0:return C.xE
case 2:return C.Zo
case 1:return C.Zn
case 3:return D.blf
case 4:return C.Zp}},
bE8(d,e){var x=0,w=B.D(y.e),v,u
var $async$bE8=B.z(function(f,g){if(f===1)return B.A(g,w)
for(;;)switch(x){case 0:if(e===D.afd||e===D.afe)u=!(d.gdQ()==="https"||d.gdQ()==="http")
else u=!1
if(u)throw B.k(B.ff(d,"url","To use an in-app web view, you must provide an http(s) URL."))
v=$.bRV().DX(d.j(0),new B.a8m(A.cpQ(e),new B.a7X(!0,!0,C.a4),null))
x=1
break
case 1:return B.B(v,w)}})
return B.C($async$bE8,w)}},D
B=c[0]
C=c[2]
A=a.updateHolder(c[14],A)
D=c[20]
A.Rc.prototype={
sb42(d){if(this.C===d)return
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
x=(this.C&1)===1?d.gLh():d
w=v.av(C.aY,x,v.gda())
return(this.C&1)===1?new B.V(w.b,w.a):w},
cn(){var x,w,v=this
v.W=null
x=v.K$
if(x!=null){w=y.a
x.dr((v.C&1)===1?w.a(B.a_.prototype.gab.call(v)).gLh():w.a(B.a_.prototype.gab.call(v)),!0)
x=v.C
w=v.K$
v.fy=(x&1)===1?new B.V(w.gF(0).b,v.K$.gF(0).a):w.gF(0)
x=new B.bI(new Float64Array(16))
x.eA()
x.eo(v.gF(0).a/2,v.gF(0).b/2,0,1)
x.Ez(1.5707963267948966*C.t.aF(v.C,4))
x.eo(-v.K$.gF(0).a/2,-v.K$.gF(0).b/2,0,1)
v.W=x}else{x=y.a.a(B.a_.prototype.gab.call(v))
v.fy=new B.V(B.a5(0,x.a,x.b),B.a5(0,x.c,x.d))}},
e4(d,e){var x=this
if(x.K$==null||x.W==null)return!1
return d.Jy(new A.aVb(x),e,x.W)},
aKb(d,e){var x=this.K$
x.toString
d.f1(x,e)},
b3(d,e){var x,w,v=this,u=v.Z
if(v.K$!=null){x=v.cx
x===$&&B.b()
w=v.W
w.toString
u.sbd(0,d.zt(x,e,w,v.gaKa(),u.a))}else u.sbd(0,null)},
m(){this.Z.sbd(0,null)
this.hF()},
eY(d,e){var x=this.W
if(x!=null)e.fl(0,x)
this.a_Z(d,e)}}
A.arC.prototype={
b5(d){var x
this.fq(d)
x=this.K$
if(x!=null)x.b5(d)},
aI(d){var x
this.fg(0)
x=this.K$
if(x!=null)x.aI(0)}}
A.w4.prototype={
bo(d){var x=new A.Rc(this.e,B.b3(y.i),null,new B.bv(),B.b3(y.d))
x.bm()
x.sbV(null)
return x},
bA(d,e){e.sb42(this.e)}}
A.agO.prototype={}
A.F0.prototype={
J(){return"LaunchMode."+this.b}}
A.b47.prototype={}
A.aA0.prototype={}
A.acA.prototype={
j(d){var x=this
return"[0] "+x.a.j(0)+"\n[1] "+x.b.j(0)+"\n[2] "+x.c.j(0)+"\n[3] "+x.d.j(0)+"\n"},
k(d,e){var x=this
if(e==null)return!1
return e instanceof A.acA&&x.d.k(0,e.d)&&x.c.k(0,e.c)&&x.b.k(0,e.b)&&x.a.k(0,e.a)},
gE(d){var x=this
return B.al(x.a,x.b,x.c,x.d,C.c,C.c,C.c,C.c,C.c,C.c,C.c,C.c,C.c,C.c,C.c,C.c,C.c,C.c,C.c,C.c)}}
var z=a.updateTypes(["X(X)","~(rO,l)"])
A.aVb.prototype={
$2(d,e){return this.a.K$.dK(d,e)},
$S:40};(function installTearOffs(){var x=a._instance_1u,w=a._instance_2u
var v
x(v=A.Rc.prototype,"gcA","cb",0)
x(v,"gcs","c4",0)
x(v,"gcp","c5",0)
x(v,"gcr","c3",0)
w(v,"gaKa","aKb",1)})();(function inheritance(){var x=a.mixinHard,w=a.inherit,v=a.inheritMany
w(A.arC,B.a2)
w(A.Rc,A.arC)
w(A.aVb,B.ma)
w(A.w4,B.bL)
w(A.agO,B.cU)
w(A.F0,B.tI)
v(B.P,[A.b47,A.aA0,A.acA])
x(A.arC,B.by)})()
B.lW(b.typeUniverse,JSON.parse('{"Rc":{"a2":[],"by":["a2"],"a_":[],"i":[],"b6":[]},"w4":{"bL":[],"ba":[],"f":[],"i":[]},"agO":{"cU":["bI"],"aw":[]}}'))
var y={a:B.a8("aB"),d:B.a8("ha"),i:B.a8("wx"),e:B.a8("L")};(function constants(){D.bD4=new A.aA0()
D.bDc=new A.b47()
D.bDs=new A.F0(0,"platformDefault")
D.afd=new A.F0(1,"inAppWebView")
D.afe=new A.F0(2,"inAppBrowserView")
D.Dq=new A.F0(3,"externalApplication")
D.blf=new B.Ac(3,"externalApplication")})()};
(a=>{a["UI3rSjLNwHmHVcBoP4TmZn4wmsI="]=a.current})($__dart_deferred_initializers__);