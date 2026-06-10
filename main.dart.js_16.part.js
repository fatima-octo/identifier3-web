((a,b)=>{a[b]=a[b]||{}})(self,"$__dart_deferred_initializers__")
$__dart_deferred_initializers__.current=function(a,b,c,$){var B,C,A={Rh:function Rh(d,e,f,g,h){var _=this
_.C=d
_.W=null
_.X=e
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
_.dx=$},aVm:function aVm(d){this.a=d},arJ:function arJ(){},w7:function w7(d,e,f){this.e=d
this.c=e
this.a=f},
cip(){var x=new B.bJ(new Float64Array(16))
x.eB()
return new A.agW(x,$.aI())},
agW:function agW(d,e){var _=this
_.a=d
_.O$=0
_.Z$=e
_.aE$=_.al$=0},
F7:function F7(d,e){this.a=d
this.b=e},
b4p:function b4p(){},
aA8:function aA8(){},
ccT(d){var x=new B.bJ(new Float64Array(16))
if(x.jM(d)===0)throw B.k(B.fi(d,"other","Matrix cannot be inverted"))
return x},
acH:function acH(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
cqD(d){switch(d.a){case 0:return C.xF
case 2:return C.ZB
case 1:return C.ZA
case 3:return D.blo
case 4:return C.ZC}},
bED(d,e){var x=0,w=B.D(y.e),v,u
var $async$bED=B.z(function(f,g){if(f===1)return B.A(g,w)
for(;;)switch(x){case 0:if(e===D.afn||e===D.afo)u=!(d.gdR()==="https"||d.gdR()==="http")
else u=!1
if(u)throw B.k(B.fi(d,"url","To use an in-app web view, you must provide an http(s) URL."))
v=$.bSH().E6(d.j(0),new B.a8t(A.cqD(e),new B.a83(!0,!0,C.a4),null))
x=1
break
case 1:return B.B(v,w)}})
return B.C($async$bED,w)}},D
B=c[0]
C=c[2]
A=a.updateHolder(c[14],A)
D=c[20]
A.Rh.prototype={
sb4G(d){if(this.C===d)return
this.C=d
this.ae()},
cb(d){var x=this.K$
if(x==null)return 0
return(this.C&1)===1?x.av(C.bU,d,x.gcp()):x.av(C.cd,d,x.gcA())},
c4(d){var x=this.K$
if(x==null)return 0
return(this.C&1)===1?x.av(C.c4,d,x.gcr()):x.av(C.c3,d,x.gcs())},
c5(d){var x=this.K$
if(x==null)return 0
return(this.C&1)===1?x.av(C.cd,d,x.gcA()):x.av(C.bU,d,x.gcp())},
c3(d){var x=this.K$
if(x==null)return 0
return(this.C&1)===1?x.av(C.c3,d,x.gcs()):x.av(C.c4,d,x.gcr())},
dq(d){var x,w,v=this.K$
if(v==null)return new B.W(B.a5(0,d.a,d.b),B.a5(0,d.c,d.d))
x=(this.C&1)===1?d.gLs():d
w=v.av(C.aY,x,v.gdc())
return(this.C&1)===1?new B.W(w.b,w.a):w},
cn(){var x,w,v=this
v.W=null
x=v.K$
if(x!=null){w=y.a
x.dr((v.C&1)===1?w.a(B.Z.prototype.gab.call(v)).gLs():w.a(B.Z.prototype.gab.call(v)),!0)
x=v.C
w=v.K$
v.fy=(x&1)===1?new B.W(w.gF(0).b,v.K$.gF(0).a):w.gF(0)
x=new B.bJ(new Float64Array(16))
x.eB()
x.ep(v.gF(0).a/2,v.gF(0).b/2,0,1)
x.EK(1.5707963267948966*C.t.aG(v.C,4))
x.ep(-v.K$.gF(0).a/2,-v.K$.gF(0).b/2,0,1)
v.W=x}else{x=y.a.a(B.Z.prototype.gab.call(v))
v.fy=new B.W(B.a5(0,x.a,x.b),B.a5(0,x.c,x.d))}},
e4(d,e){var x=this
if(x.K$==null||x.W==null)return!1
return d.JH(new A.aVm(x),e,x.W)},
aKD(d,e){var x=this.K$
x.toString
d.f1(x,e)},
b4(d,e){var x,w,v=this,u=v.X
if(v.K$!=null){x=v.cx
x===$&&B.b()
w=v.W
w.toString
u.sbe(0,d.zC(x,e,w,v.gaKC(),u.a))}else u.sbe(0,null)},
m(){this.X.sbe(0,null)
this.hI()},
eY(d,e){var x=this.W
if(x!=null)e.fm(0,x)
this.a0b(d,e)}}
A.arJ.prototype={
b7(d){var x
this.ft(d)
x=this.K$
if(x!=null)x.b7(d)},
aI(d){var x
this.fg(0)
x=this.K$
if(x!=null)x.aI(0)}}
A.w7.prototype={
bn(d){var x=new A.Rh(this.e,B.b3(y.i),null,new B.bw(),B.b3(y.d))
x.bl()
x.sbV(null)
return x},
bA(d,e){e.sb4G(this.e)}}
A.agW.prototype={}
A.F7.prototype={
J(){return"LaunchMode."+this.b}}
A.b4p.prototype={}
A.aA8.prototype={}
A.acH.prototype={
j(d){var x=this
return"[0] "+x.a.j(0)+"\n[1] "+x.b.j(0)+"\n[2] "+x.c.j(0)+"\n[3] "+x.d.j(0)+"\n"},
k(d,e){var x=this
if(e==null)return!1
return e instanceof A.acH&&x.d.k(0,e.d)&&x.c.k(0,e.c)&&x.b.k(0,e.b)&&x.a.k(0,e.a)},
gE(d){var x=this
return B.am(x.a,x.b,x.c,x.d,C.c,C.c,C.c,C.c,C.c,C.c,C.c,C.c,C.c,C.c,C.c,C.c,C.c,C.c,C.c,C.c)}}
var z=a.updateTypes(["X(X)","~(rS,l)"])
A.aVm.prototype={
$2(d,e){return this.a.K$.dK(d,e)},
$S:42};(function installTearOffs(){var x=a._instance_1u,w=a._instance_2u
var v
x(v=A.Rh.prototype,"gcA","cb",0)
x(v,"gcs","c4",0)
x(v,"gcp","c5",0)
x(v,"gcr","c3",0)
w(v,"gaKC","aKD",1)})();(function inheritance(){var x=a.mixinHard,w=a.inherit,v=a.inheritMany
w(A.arJ,B.a2)
w(A.Rh,A.arJ)
w(A.aVm,B.md)
w(A.w7,B.bM)
w(A.agW,B.cX)
w(A.F7,B.tL)
v(B.P,[A.b4p,A.aA8,A.acH])
x(A.arJ,B.bz)})()
B.m_(b.typeUniverse,JSON.parse('{"Rh":{"a2":[],"bz":["a2"],"Z":[],"i":[],"b7":[]},"w7":{"bM":[],"ba":[],"f":[],"i":[]},"agW":{"cX":["bJ"],"ay":[]}}'))
var y={a:B.a7("aF"),d:B.a7("hc"),i:B.a7("wz"),e:B.a7("K")};(function constants(){D.bDc=new A.aA8()
D.bDk=new A.b4p()
D.bDA=new A.F7(0,"platformDefault")
D.afn=new A.F7(1,"inAppWebView")
D.afo=new A.F7(2,"inAppBrowserView")
D.Dz=new A.F7(3,"externalApplication")
D.blo=new B.Ah(3,"externalApplication")})()};
(a=>{a["ZuFi4hu4p2TFCPPV2T+/l6TCHoU="]=a.current})($__dart_deferred_initializers__);