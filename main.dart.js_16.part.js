((a,b)=>{a[b]=a[b]||{}})(self,"$__dart_deferred_initializers__")
$__dart_deferred_initializers__.current=function(a,b,c,$){var B,C,A={Rf:function Rf(d,e,f,g,h){var _=this
_.C=d
_.X=null
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
_.dx=$},aVh:function aVh(d){this.a=d},arI:function arI(){},w7:function w7(d,e,f){this.e=d
this.c=e
this.a=f},
ci9(){var x=new B.bI(new Float64Array(16))
x.eB()
return new A.agT(x,$.aH())},
agT:function agT(d,e){var _=this
_.a=d
_.N$=0
_.Y$=e
_.aD$=_.ak$=0},
F6:function F6(d,e){this.a=d
this.b=e},
b4m:function b4m(){},
aA5:function aA5(){},
ccv(d){var x=new B.bI(new Float64Array(16))
if(x.jM(d)===0)throw B.k(B.ff(d,"other","Matrix cannot be inverted"))
return x},
acE:function acE(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
cqk(d){switch(d.a){case 0:return C.xF
case 2:return C.Zs
case 1:return C.Zr
case 3:return D.bli
case 4:return C.Zt}},
bEx(d,e){var x=0,w=B.D(y.e),v,u
var $async$bEx=B.z(function(f,g){if(f===1)return B.A(g,w)
for(;;)switch(x){case 0:if(e===D.afh||e===D.afi)u=!(d.gdR()==="https"||d.gdR()==="http")
else u=!1
if(u)throw B.k(B.ff(d,"url","To use an in-app web view, you must provide an http(s) URL."))
v=$.bSn().E2(d.j(0),new B.a8q(A.cqk(e),new B.a80(!0,!0,C.a4),null))
x=1
break
case 1:return B.B(v,w)}})
return B.C($async$bEx,w)}},D
B=c[0]
C=c[2]
A=a.updateHolder(c[14],A)
D=c[20]
A.Rf.prototype={
sb4i(d){if(this.C===d)return
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
x=(this.C&1)===1?d.gLn():d
w=v.av(C.aY,x,v.gdc())
return(this.C&1)===1?new B.W(w.b,w.a):w},
cn(){var x,w,v=this
v.X=null
x=v.K$
if(x!=null){w=y.a
x.dr((v.C&1)===1?w.a(B.a_.prototype.gab.call(v)).gLn():w.a(B.a_.prototype.gab.call(v)),!0)
x=v.C
w=v.K$
v.fy=(x&1)===1?new B.W(w.gF(0).b,v.K$.gF(0).a):w.gF(0)
x=new B.bI(new Float64Array(16))
x.eB()
x.ep(v.gF(0).a/2,v.gF(0).b/2,0,1)
x.EF(1.5707963267948966*C.t.aF(v.C,4))
x.ep(-v.K$.gF(0).a/2,-v.K$.gF(0).b/2,0,1)
v.X=x}else{x=y.a.a(B.a_.prototype.gab.call(v))
v.fy=new B.W(B.a5(0,x.a,x.b),B.a5(0,x.c,x.d))}},
e5(d,e){var x=this
if(x.K$==null||x.X==null)return!1
return d.JE(new A.aVh(x),e,x.X)},
aKp(d,e){var x=this.K$
x.toString
d.f1(x,e)},
b3(d,e){var x,w,v=this,u=v.Z
if(v.K$!=null){x=v.cx
x===$&&B.b()
w=v.X
w.toString
u.sbd(0,d.zz(x,e,w,v.gaKo(),u.a))}else u.sbd(0,null)},
m(){this.Z.sbd(0,null)
this.hH()},
eY(d,e){var x=this.X
if(x!=null)e.fl(0,x)
this.a02(d,e)}}
A.arI.prototype={
b5(d){var x
this.fq(d)
x=this.K$
if(x!=null)x.b5(d)},
aI(d){var x
this.fg(0)
x=this.K$
if(x!=null)x.aI(0)}}
A.w7.prototype={
bn(d){var x=new A.Rf(this.e,B.b3(y.i),null,new B.bv(),B.b3(y.d))
x.bl()
x.sbV(null)
return x},
bA(d,e){e.sb4i(this.e)}}
A.agT.prototype={}
A.F6.prototype={
J(){return"LaunchMode."+this.b}}
A.b4m.prototype={}
A.aA5.prototype={}
A.acE.prototype={
j(d){var x=this
return"[0] "+x.a.j(0)+"\n[1] "+x.b.j(0)+"\n[2] "+x.c.j(0)+"\n[3] "+x.d.j(0)+"\n"},
k(d,e){var x=this
if(e==null)return!1
return e instanceof A.acE&&x.d.k(0,e.d)&&x.c.k(0,e.c)&&x.b.k(0,e.b)&&x.a.k(0,e.a)},
gE(d){var x=this
return B.ak(x.a,x.b,x.c,x.d,C.c,C.c,C.c,C.c,C.c,C.c,C.c,C.c,C.c,C.c,C.c,C.c,C.c,C.c,C.c,C.c)}}
var z=a.updateTypes(["X(X)","~(rR,l)"])
A.aVh.prototype={
$2(d,e){return this.a.K$.dK(d,e)},
$S:42};(function installTearOffs(){var x=a._instance_1u,w=a._instance_2u
var v
x(v=A.Rf.prototype,"gcA","cb",0)
x(v,"gcs","c4",0)
x(v,"gcp","c5",0)
x(v,"gcr","c3",0)
w(v,"gaKo","aKp",1)})();(function inheritance(){var x=a.mixinHard,w=a.inherit,v=a.inheritMany
w(A.arI,B.a2)
w(A.Rf,A.arI)
w(A.aVh,B.ma)
w(A.w7,B.bL)
w(A.agT,B.cU)
w(A.F6,B.tL)
v(B.P,[A.b4m,A.aA5,A.acE])
x(A.arI,B.by)})()
B.lW(b.typeUniverse,JSON.parse('{"Rf":{"a2":[],"by":["a2"],"a_":[],"i":[],"b6":[]},"w7":{"bL":[],"ba":[],"f":[],"i":[]},"agT":{"cU":["bI"],"aw":[]}}'))
var y={a:B.a7("aB"),d:B.a7("ha"),i:B.a7("wA"),e:B.a7("L")};(function constants(){D.bD7=new A.aA5()
D.bDf=new A.b4m()
D.bDv=new A.F6(0,"platformDefault")
D.afh=new A.F6(1,"inAppWebView")
D.afi=new A.F6(2,"inAppBrowserView")
D.Dt=new A.F6(3,"externalApplication")
D.bli=new B.Ah(3,"externalApplication")})()};
(a=>{a["dsJjqHUZyf+EPpEK+ARxA57K2/E="]=a.current})($__dart_deferred_initializers__);