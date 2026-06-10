((a,b)=>{a[b]=a[b]||{}})(self,"$__dart_deferred_initializers__")
$__dart_deferred_initializers__.current=function(a,b,c,$){var B,C,A={Ri:function Ri(d,e,f,g,h){var _=this
_.C=d
_.X=null
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
_.dx=$},aVq:function aVq(d){this.a=d},arM:function arM(){},wa:function wa(d,e,f){this.e=d
this.c=e
this.a=f},
ciz(){var x=new B.bJ(new Float64Array(16))
x.eB()
return new A.agX(x,$.aI())},
agX:function agX(d,e){var _=this
_.a=d
_.N$=0
_.Z$=e
_.aD$=_.ak$=0},
F9:function F9(d,e){this.a=d
this.b=e},
b4u:function b4u(){},
aAb:function aAb(){},
cd2(d){var x=new B.bJ(new Float64Array(16))
if(x.jN(d)===0)throw B.k(B.fi(d,"other","Matrix cannot be inverted"))
return x},
acI:function acI(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
cqN(d){switch(d.a){case 0:return C.xG
case 2:return C.ZB
case 1:return C.ZA
case 3:return D.blp
case 4:return C.ZC}},
bEM(d,e){var x=0,w=B.D(y.e),v,u
var $async$bEM=B.z(function(f,g){if(f===1)return B.A(g,w)
for(;;)switch(x){case 0:if(e===D.afo||e===D.afp)u=!(d.gdR()==="https"||d.gdR()==="http")
else u=!1
if(u)throw B.k(B.fi(d,"url","To use an in-app web view, you must provide an http(s) URL."))
v=$.bSS().E8(d.j(0),new B.a8u(A.cqN(e),new B.a84(!0,!0,C.a4),null))
x=1
break
case 1:return B.B(v,w)}})
return B.C($async$bEM,w)}},D
B=c[0]
C=c[2]
A=a.updateHolder(c[14],A)
D=c[20]
A.Ri.prototype={
sb4M(d){if(this.C===d)return
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
x=(this.C&1)===1?d.gLu():d
w=v.av(C.aZ,x,v.gdc())
return(this.C&1)===1?new B.W(w.b,w.a):w},
cn(){var x,w,v=this
v.X=null
x=v.K$
if(x!=null){w=y.a
x.dr((v.C&1)===1?w.a(B.Z.prototype.gab.call(v)).gLu():w.a(B.Z.prototype.gab.call(v)),!0)
x=v.C
w=v.K$
v.fy=(x&1)===1?new B.W(w.gF(0).b,v.K$.gF(0).a):w.gF(0)
x=new B.bJ(new Float64Array(16))
x.eB()
x.ep(v.gF(0).a/2,v.gF(0).b/2,0,1)
x.EM(1.5707963267948966*C.t.aG(v.C,4))
x.ep(-v.K$.gF(0).a/2,-v.K$.gF(0).b/2,0,1)
v.X=x}else{x=y.a.a(B.Z.prototype.gab.call(v))
v.fy=new B.W(B.a5(0,x.a,x.b),B.a5(0,x.c,x.d))}},
e5(d,e){var x=this
if(x.K$==null||x.X==null)return!1
return d.JJ(new A.aVq(x),e,x.X)},
aKI(d,e){var x=this.K$
x.toString
d.f1(x,e)},
b4(d,e){var x,w,v=this,u=v.Y
if(v.K$!=null){x=v.cx
x===$&&B.b()
w=v.X
w.toString
u.sbe(0,d.zD(x,e,w,v.gaKH(),u.a))}else u.sbe(0,null)},
m(){this.Y.sbe(0,null)
this.hI()},
eY(d,e){var x=this.X
if(x!=null)e.fm(0,x)
this.a0f(d,e)}}
A.arM.prototype={
b7(d){var x
this.ft(d)
x=this.K$
if(x!=null)x.b7(d)},
aI(d){var x
this.fg(0)
x=this.K$
if(x!=null)x.aI(0)}}
A.wa.prototype={
bn(d){var x=new A.Ri(this.e,B.b3(y.i),null,new B.bw(),B.b3(y.d))
x.bl()
x.sbV(null)
return x},
bA(d,e){e.sb4M(this.e)}}
A.agX.prototype={}
A.F9.prototype={
J(){return"LaunchMode."+this.b}}
A.b4u.prototype={}
A.aAb.prototype={}
A.acI.prototype={
j(d){var x=this
return"[0] "+x.a.j(0)+"\n[1] "+x.b.j(0)+"\n[2] "+x.c.j(0)+"\n[3] "+x.d.j(0)+"\n"},
k(d,e){var x=this
if(e==null)return!1
return e instanceof A.acI&&x.d.k(0,e.d)&&x.c.k(0,e.c)&&x.b.k(0,e.b)&&x.a.k(0,e.a)},
gE(d){var x=this
return B.am(x.a,x.b,x.c,x.d,C.c,C.c,C.c,C.c,C.c,C.c,C.c,C.c,C.c,C.c,C.c,C.c,C.c,C.c,C.c,C.c)}}
var z=a.updateTypes(["X(X)","~(rS,l)"])
A.aVq.prototype={
$2(d,e){return this.a.K$.dK(d,e)},
$S:42};(function installTearOffs(){var x=a._instance_1u,w=a._instance_2u
var v
x(v=A.Ri.prototype,"gcA","cb",0)
x(v,"gcs","c4",0)
x(v,"gcp","c5",0)
x(v,"gcr","c3",0)
w(v,"gaKH","aKI",1)})();(function inheritance(){var x=a.mixinHard,w=a.inherit,v=a.inheritMany
w(A.arM,B.a2)
w(A.Ri,A.arM)
w(A.aVq,B.md)
w(A.wa,B.bM)
w(A.agX,B.cX)
w(A.F9,B.tM)
v(B.P,[A.b4u,A.aAb,A.acI])
x(A.arM,B.bz)})()
B.m_(b.typeUniverse,JSON.parse('{"Ri":{"a2":[],"bz":["a2"],"Z":[],"i":[],"b7":[]},"wa":{"bM":[],"ba":[],"f":[],"i":[]},"agX":{"cX":["bJ"],"ax":[]}}'))
var y={a:B.a7("aF"),d:B.a7("hc"),i:B.a7("wD"),e:B.a7("K")};(function constants(){D.bDe=new A.aAb()
D.bDm=new A.b4u()
D.bDC=new A.F9(0,"platformDefault")
D.afo=new A.F9(1,"inAppWebView")
D.afp=new A.F9(2,"inAppBrowserView")
D.Dz=new A.F9(3,"externalApplication")
D.blp=new B.Al(3,"externalApplication")})()};
(a=>{a["cybATpEBeEbaSy3vRxWnCLsz5fA="]=a.current})($__dart_deferred_initializers__);