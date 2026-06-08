((a,b)=>{a[b]=a[b]||{}})(self,"$__dart_deferred_initializers__")
$__dart_deferred_initializers__.current=function(a,b,c,$){var B,C,A={R1:function R1(d,e,f,g,h){var _=this
_.C=d
_.V=null
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
_.dx=$},aUX:function aUX(d){this.a=d},arm:function arm(){},w0:function w0(d,e,f){this.e=d
this.c=e
this.a=f},
cgH(){var x=new B.bI(new Float64Array(16))
x.eA()
return new A.agA(x,$.aH())},
agA:function agA(d,e){var _=this
_.a=d
_.N$=0
_.Z$=e
_.aD$=_.ak$=0},
ER:function ER(d,e){this.a=d
this.b=e},
b3M:function b3M(){},
azO:function azO(){},
cb0(d){var x=new B.bI(new Float64Array(16))
if(x.jJ(d)===0)throw B.k(B.fe(d,"other","Matrix cannot be inverted"))
return x},
acl:function acl(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
coN(d){switch(d.a){case 0:return C.xE
case 2:return C.Z5
case 1:return C.Z4
case 3:return D.bl2
case 4:return C.Z6}},
bDj(d,e){var x=0,w=B.E(y.e),v,u
var $async$bDj=B.A(function(f,g){if(f===1)return B.B(g,w)
for(;;)switch(x){case 0:if(e===D.aeU||e===D.aeV)u=!(d.gdQ()==="https"||d.gdQ()==="http")
else u=!1
if(u)throw B.k(B.fe(d,"url","To use an in-app web view, you must provide an http(s) URL."))
v=$.bR3().DM(d.j(0),new B.a87(A.coN(e),new B.a7I(!0,!0,C.a5),null))
x=1
break
case 1:return B.C(v,w)}})
return B.D($async$bDj,w)}},D
B=c[0]
C=c[2]
A=a.updateHolder(c[14],A)
D=c[19]
A.R1.prototype={
sb2S(d){if(this.C===d)return
this.C=d
this.ae()},
ca(d){var x=this.K$
if(x==null)return 0
return(this.C&1)===1?x.au(C.bU,d,x.gcp()):x.au(C.cc,d,x.gcw())},
c4(d){var x=this.K$
if(x==null)return 0
return(this.C&1)===1?x.au(C.c3,d,x.gcr()):x.au(C.c2,d,x.gcs())},
c5(d){var x=this.K$
if(x==null)return 0
return(this.C&1)===1?x.au(C.cc,d,x.gcw()):x.au(C.bU,d,x.gcp())},
c3(d){var x=this.K$
if(x==null)return 0
return(this.C&1)===1?x.au(C.c2,d,x.gcs()):x.au(C.c3,d,x.gcr())},
dq(d){var x,w,v=this.K$
if(v==null)return new B.V(B.a3(0,d.a,d.b),B.a3(0,d.c,d.d))
x=(this.C&1)===1?d.gL_():d
w=v.au(C.aX,x,v.gda())
return(this.C&1)===1?new B.V(w.b,w.a):w},
cn(){var x,w,v=this
v.V=null
x=v.K$
if(x!=null){w=y.a
x.dr((v.C&1)===1?w.a(B.Z.prototype.gab.call(v)).gL_():w.a(B.Z.prototype.gab.call(v)),!0)
x=v.C
w=v.K$
v.fy=(x&1)===1?new B.V(w.gF(0).b,v.K$.gF(0).a):w.gF(0)
x=new B.bI(new Float64Array(16))
x.eA()
x.en(v.gF(0).a/2,v.gF(0).b/2,0,1)
x.Eo(1.5707963267948966*C.t.aE(v.C,4))
x.en(-v.K$.gF(0).a/2,-v.K$.gF(0).b/2,0,1)
v.V=x}else{x=y.a.a(B.Z.prototype.gab.call(v))
v.fy=new B.V(B.a3(0,x.a,x.b),B.a3(0,x.c,x.d))}},
e4(d,e){var x=this
if(x.K$==null||x.V==null)return!1
return d.Jj(new A.aUX(x),e,x.V)},
aJ7(d,e){var x=this.K$
x.toString
d.f1(x,e)},
b2(d,e){var x,w,v=this,u=v.X
if(v.K$!=null){x=v.cx
x===$&&B.b()
w=v.V
w.toString
u.sbc(0,d.zk(x,e,w,v.gaJ6(),u.a))}else u.sbc(0,null)},
m(){this.X.sbc(0,null)
this.hD()},
eY(d,e){var x=this.V
if(x!=null)e.fm(0,x)
this.a_F(d,e)}}
A.arm.prototype={
b4(d){var x
this.fs(d)
x=this.K$
if(x!=null)x.b4(d)},
aH(d){var x
this.fh(0)
x=this.K$
if(x!=null)x.aH(0)}}
A.w0.prototype={
bk(d){var x=new A.R1(this.e,B.b3(y.i),null,new B.bv(),B.b3(y.d))
x.bj()
x.sbU(null)
return x},
bx(d,e){e.sb2S(this.e)}}
A.agA.prototype={}
A.ER.prototype={
J(){return"LaunchMode."+this.b}}
A.b3M.prototype={}
A.azO.prototype={}
A.acl.prototype={
j(d){var x=this
return"[0] "+x.a.j(0)+"\n[1] "+x.b.j(0)+"\n[2] "+x.c.j(0)+"\n[3] "+x.d.j(0)+"\n"},
k(d,e){var x=this
if(e==null)return!1
return e instanceof A.acl&&x.d.k(0,e.d)&&x.c.k(0,e.c)&&x.b.k(0,e.b)&&x.a.k(0,e.a)},
gE(d){var x=this
return B.al(x.a,x.b,x.c,x.d,C.c,C.c,C.c,C.c,C.c,C.c,C.c,C.c,C.c,C.c,C.c,C.c,C.c,C.c,C.c,C.c)}}
var z=a.updateTypes(["X(X)","~(rL,l)"])
A.aUX.prototype={
$2(d,e){return this.a.K$.dK(d,e)},
$S:38};(function installTearOffs(){var x=a._instance_1u,w=a._instance_2u
var v
x(v=A.R1.prototype,"gcw","ca",0)
x(v,"gcs","c4",0)
x(v,"gcp","c5",0)
x(v,"gcr","c3",0)
w(v,"gaJ6","aJ7",1)})();(function inheritance(){var x=a.mixinHard,w=a.inherit,v=a.inheritMany
w(A.arm,B.a2)
w(A.R1,A.arm)
w(A.aUX,B.ma)
w(A.w0,B.bL)
w(A.agA,B.cS)
w(A.ER,B.tF)
v(B.P,[A.b3M,A.azO,A.acl])
x(A.arm,B.by)})()
B.lW(b.typeUniverse,JSON.parse('{"R1":{"a2":[],"by":["a2"],"Z":[],"i":[],"b6":[]},"w0":{"bL":[],"ba":[],"e":[],"i":[]},"agA":{"cS":["bI"],"aw":[]}}'))
var y={a:B.a8("aB"),d:B.a8("ha"),i:B.a8("wt"),e:B.a8("M")};(function constants(){D.bCT=new A.azO()
D.bD0=new A.b3M()
D.bDg=new A.ER(0,"platformDefault")
D.aeU=new A.ER(1,"inAppWebView")
D.aeV=new A.ER(2,"inAppBrowserView")
D.Dk=new A.ER(3,"externalApplication")
D.bl2=new B.A6(3,"externalApplication")})()};
(a=>{a["WJbi7104Amtj+qu0yiyZpMPuj2E="]=a.current})($__dart_deferred_initializers__);