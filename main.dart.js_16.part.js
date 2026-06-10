((a,b)=>{a[b]=a[b]||{}})(self,"$__dart_deferred_initializers__")
$__dart_deferred_initializers__.current=function(a,b,c,$){var B,C,A={Ri:function Ri(d,e,f,g,h){var _=this
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
_.dx=$},aVn:function aVn(d){this.a=d},arL:function arL(){},w9:function w9(d,e,f){this.e=d
this.c=e
this.a=f},
cio(){var x=new B.bJ(new Float64Array(16))
x.eB()
return new A.agW(x,$.aH())},
agW:function agW(d,e){var _=this
_.a=d
_.N$=0
_.Z$=e
_.aD$=_.ak$=0},
F8:function F8(d,e){this.a=d
this.b=e},
b4r:function b4r(){},
aAa:function aAa(){},
ccS(d){var x=new B.bJ(new Float64Array(16))
if(x.jM(d)===0)throw B.k(B.fg(d,"other","Matrix cannot be inverted"))
return x},
acH:function acH(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
cqB(d){switch(d.a){case 0:return C.xG
case 2:return C.ZA
case 1:return C.Zz
case 3:return D.bln
case 4:return C.ZB}},
bEI(d,e){var x=0,w=B.D(y.e),v,u
var $async$bEI=B.z(function(f,g){if(f===1)return B.A(g,w)
for(;;)switch(x){case 0:if(e===D.afm||e===D.afn)u=!(d.gdR()==="https"||d.gdR()==="http")
else u=!1
if(u)throw B.k(B.fg(d,"url","To use an in-app web view, you must provide an http(s) URL."))
v=$.bSI().E6(d.j(0),new B.a8t(A.cqB(e),new B.a83(!0,!0,C.a4),null))
x=1
break
case 1:return B.B(v,w)}})
return B.C($async$bEI,w)}},D
B=c[0]
C=c[2]
A=a.updateHolder(c[14],A)
D=c[20]
A.Ri.prototype={
sb4F(d){if(this.C===d)return
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
if(v==null)return new B.W(B.a5(0,d.a,d.b),B.a5(0,d.c,d.d))
x=(this.C&1)===1?d.gLt():d
w=v.av(C.aZ,x,v.gdc())
return(this.C&1)===1?new B.W(w.b,w.a):w},
cn(){var x,w,v=this
v.W=null
x=v.K$
if(x!=null){w=y.a
x.dr((v.C&1)===1?w.a(B.Z.prototype.gab.call(v)).gLt():w.a(B.Z.prototype.gab.call(v)),!0)
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
e5(d,e){var x=this
if(x.K$==null||x.W==null)return!1
return d.JI(new A.aVn(x),e,x.W)},
aKF(d,e){var x=this.K$
x.toString
d.f1(x,e)},
b4(d,e){var x,w,v=this,u=v.Y
if(v.K$!=null){x=v.cx
x===$&&B.b()
w=v.W
w.toString
u.sbd(0,d.zC(x,e,w,v.gaKE(),u.a))}else u.sbd(0,null)},
m(){this.Y.sbd(0,null)
this.hI()},
eY(d,e){var x=this.W
if(x!=null)e.fl(0,x)
this.a0c(d,e)}}
A.arL.prototype={
b7(d){var x
this.fs(d)
x=this.K$
if(x!=null)x.b7(d)},
aI(d){var x
this.fg(0)
x=this.K$
if(x!=null)x.aI(0)}}
A.w9.prototype={
bn(d){var x=new A.Ri(this.e,B.b3(y.i),null,new B.bw(),B.b3(y.d))
x.bl()
x.sbV(null)
return x},
bA(d,e){e.sb4F(this.e)}}
A.agW.prototype={}
A.F8.prototype={
J(){return"LaunchMode."+this.b}}
A.b4r.prototype={}
A.aAa.prototype={}
A.acH.prototype={
j(d){var x=this
return"[0] "+x.a.j(0)+"\n[1] "+x.b.j(0)+"\n[2] "+x.c.j(0)+"\n[3] "+x.d.j(0)+"\n"},
k(d,e){var x=this
if(e==null)return!1
return e instanceof A.acH&&x.d.k(0,e.d)&&x.c.k(0,e.c)&&x.b.k(0,e.b)&&x.a.k(0,e.a)},
gE(d){var x=this
return B.al(x.a,x.b,x.c,x.d,C.c,C.c,C.c,C.c,C.c,C.c,C.c,C.c,C.c,C.c,C.c,C.c,C.c,C.c,C.c,C.c)}}
var z=a.updateTypes(["X(X)","~(rS,l)"])
A.aVn.prototype={
$2(d,e){return this.a.K$.dK(d,e)},
$S:40};(function installTearOffs(){var x=a._instance_1u,w=a._instance_2u
var v
x(v=A.Ri.prototype,"gcA","cb",0)
x(v,"gcs","c4",0)
x(v,"gcp","c5",0)
x(v,"gcr","c3",0)
w(v,"gaKE","aKF",1)})();(function inheritance(){var x=a.mixinHard,w=a.inherit,v=a.inheritMany
w(A.arL,B.a2)
w(A.Ri,A.arL)
w(A.aVn,B.mc)
w(A.w9,B.bM)
w(A.agW,B.cV)
w(A.F8,B.tM)
v(B.P,[A.b4r,A.aAa,A.acH])
x(A.arL,B.bz)})()
B.lZ(b.typeUniverse,JSON.parse('{"Ri":{"a2":[],"bz":["a2"],"Z":[],"i":[],"b6":[]},"w9":{"bM":[],"ba":[],"f":[],"i":[]},"agW":{"cV":["bJ"],"ax":[]}}'))
var y={a:B.a7("aE"),d:B.a7("hc"),i:B.a7("wC"),e:B.a7("K")};(function constants(){D.bDc=new A.aAa()
D.bDk=new A.b4r()
D.bDA=new A.F8(0,"platformDefault")
D.afm=new A.F8(1,"inAppWebView")
D.afn=new A.F8(2,"inAppBrowserView")
D.Dy=new A.F8(3,"externalApplication")
D.bln=new B.Aj(3,"externalApplication")})()};
(a=>{a["74C2gf75yahsxmb26x+a5jQmfn8="]=a.current})($__dart_deferred_initializers__);