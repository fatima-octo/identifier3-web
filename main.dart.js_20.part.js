((a,b)=>{a[b]=a[b]||{}})(self,"$__dart_deferred_initializers__")
$__dart_deferred_initializers__.current=function(a,b,c,$){var A,C,B={XI:function XI(d,e,f,g,h){var _=this
_.F=d
_.a3=null
_.a5=e
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
_.dx=$},b9f:function b9f(d){this.a=d},aBK:function aBK(){},zD:function zD(d,e,f){this.e=d
this.c=e
this.a=f},
cMK(){var x=new A.c_(new Float64Array(16))
x.f_()
return new B.apK(x,$.aC())},
apK:function apK(d,e){var _=this
_.a=d
_.Y$=0
_.X$=e
_.am$=_.aA$=0},
cGz(d){var x=new A.c_(new Float64Array(16))
if(x.lp(d)===0)throw A.j(A.hj(d,"other","Matrix cannot be inverted"))
return x},
alj:function alj(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g}}
A=c[0]
C=c[2]
B=a.updateHolder(c[15],B)
B.XI.prototype={
sbmD(d){if(this.F===d)return
this.F=d
this.an()},
cz(d){var x=this.K$
if(x==null)return 0
return(this.F&1)===1?x.aB(C.bN,d,x.gcG()):x.aB(C.c5,d,x.gcW())},
cs(d){var x=this.K$
if(x==null)return 0
return(this.F&1)===1?x.aB(C.bV,d,x.gcK()):x.aB(C.bC,d,x.gcD())},
ct(d){var x=this.K$
if(x==null)return 0
return(this.F&1)===1?x.aB(C.c5,d,x.gcW()):x.aB(C.bN,d,x.gcG())},
cr(d){var x=this.K$
if(x==null)return 0
return(this.F&1)===1?x.aB(C.bC,d,x.gcD()):x.aB(C.bV,d,x.gcK())},
dK(d){var x,w,v=this.K$
if(v==null)return new A.a8(A.ab(0,d.a,d.b),A.ab(0,d.c,d.d))
x=(this.F&1)===1?d.gRR():d
w=v.aB(C.aP,x,v.gdn())
return(this.F&1)===1?new A.a8(w.b,w.a):w},
cN(){var x,w,v=this
v.a3=null
x=v.K$
if(x!=null){w=y.a
x.dD((v.F&1)===1?w.a(A.a3.prototype.gae.call(v)).gRR():w.a(A.a3.prototype.gae.call(v)),!0)
x=v.F
w=v.K$
v.fy=(x&1)===1?new A.a8(w.gG(0).b,v.K$.gG(0).a):w.gG(0)
x=new A.c_(new Float64Array(16))
x.f_()
x.eN(v.gG(0).a/2,v.gG(0).b/2,0,1)
x.K_(1.5707963267948966*C.j.aD(v.F,4))
x.eN(-v.K$.gG(0).a/2,-v.K$.gG(0).b/2,0,1)
v.a3=x}else{x=y.a.a(A.a3.prototype.gae.call(v))
v.fy=new A.a8(A.ab(0,x.a,x.b),A.ab(0,x.c,x.d))}},
eJ(d,e){var x=this
if(x.K$==null||x.a3==null)return!1
return d.Hq(new B.b9f(x),e,x.a3)},
aZn(d,e){var x=this.K$
x.toString
d.fZ(x,e)},
bm(d,e){var x,w,v=this,u=v.a5
if(v.K$!=null){x=v.cx
x===$&&A.b()
w=v.a3
w.toString
u.sbA(0,d.zN(x,e,w,v.gaZm(),u.a))}else u.sbA(0,null)},
m(){this.a5.sbA(0,null)
this.j3()},
fB(d,e){var x=this.a3
if(x!=null)e.ha(0,x)
this.a7Y(d,e)}}
B.aBK.prototype={
be(d){var x
this.hh(d)
x=this.K$
if(x!=null)x.be(d)},
aY(d){var x
this.h3(0)
x=this.K$
if(x!=null)x.aY(0)}}
B.zD.prototype={
bH(d){var x=new B.XI(this.e,A.b2(y.i),null,new A.bE(),A.b2(y.d))
x.bG()
x.scn(null)
return x},
bQ(d,e){e.sbmD(this.e)}}
B.apK.prototype={}
B.alj.prototype={
k(d){var x=this
return"[0] "+x.a.k(0)+"\n[1] "+x.b.k(0)+"\n[2] "+x.c.k(0)+"\n[3] "+x.d.k(0)+"\n"},
l(d,e){var x=this
if(e==null)return!1
return e instanceof B.alj&&x.d.l(0,e.d)&&x.c.l(0,e.c)&&x.b.l(0,e.b)&&x.a.l(0,e.a)},
gD(d){var x=this
return A.an(x.a,x.b,x.c,x.d,C.c,C.c,C.c,C.c,C.c,C.c,C.c,C.c,C.c,C.c,C.c,C.c,C.c,C.c,C.c,C.c)}}
var z=a.updateTypes(["Z(Z)","~(qV,n)"])
B.b9f.prototype={
$2(d,e){return this.a.K$.em(d,e)},
$S:43};(function installTearOffs(){var x=a._instance_1u,w=a._instance_2u
var v
x(v=B.XI.prototype,"gcW","cz",0)
x(v,"gcD","cs",0)
x(v,"gcG","ct",0)
x(v,"gcK","cr",0)
w(v,"gaZm","aZn",1)})();(function inheritance(){var x=a.mixinHard,w=a.inherit
w(B.aBK,A.a9)
w(B.XI,B.aBK)
w(B.b9f,A.jM)
w(B.zD,A.bV)
w(B.apK,A.de)
w(B.alj,A.T)
x(B.aBK,A.bH)})()
A.kJ(b.typeUniverse,JSON.parse('{"XI":{"a9":[],"bH":["a9"],"a3":[],"h":[],"ba":[]},"zD":{"bV":[],"bc":[],"e":[],"h":[]},"apK":{"de":["c_"],"aw":[]}}'))
var y={a:A.Y("aD"),d:A.Y("hM"),i:A.Y("rk")}};
(a=>{a["SVLYt4tcb4tBm8ot4QwSB9M5XG0="]=a.current})($__dart_deferred_initializers__);