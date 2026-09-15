import{j as H}from"./framer-motion-W8YWNWhL.js";import{r as qt,L as to}from"./react-vendor-KyPt3PYb.js";import{c as xc,d as oo,e as N0,u as D0,f as U0,b as gf,a as F0,t as Do,X as pp,B as Ds}from"./index-DGHf9twz.js";import{e as O0,f as B0,g as k0,h as z0,i as H0,j as V0,k as G0,S as W0}from"./radix-ui-DcFaH5bZ.js";import{a as zs,G as qa,r as xf,P as Cr,M as X0,b as q0,U as Y0,V as mp,C as K0,f as j0,D as $0}from"./carmodels-CZMz5vca.js";import{G as Z0,Z as gp}from"./zap-BaBY-GT6.js";import"./charts-CZfnbeC7.js";const J0=[["path",{d:"m12 19-7-7 7-7",key:"1l729n"}],["path",{d:"M19 12H5",key:"x3x0zl"}]],Q0=xc("arrow-left",J0);const em=[["path",{d:"M17.5 19H9a7 7 0 1 1 6.71-9h1.79a4.5 4.5 0 1 1 0 9Z",key:"p7xjir"}]],tm=xc("cloud",em);const nm=[["path",{d:"M3 12a9 9 0 1 0 9-9 9.75 9.75 0 0 0-6.74 2.74L3 8",key:"1357e3"}],["path",{d:"M3 3v5h5",key:"1xhq8a"}]],im=xc("rotate-ccw",nm);const sm=[["path",{d:"M14 17H5",key:"gfn3mx"}],["path",{d:"M19 7h-9",key:"6i9tg"}],["circle",{cx:"17",cy:"17",r:"3",key:"18b49y"}],["circle",{cx:"7",cy:"7",r:"3",key:"dfmy0x"}]],rm=xc("settings-2",sm);const om=[["circle",{cx:"12",cy:"12",r:"4",key:"4exip2"}],["path",{d:"M12 2v2",key:"tus03m"}],["path",{d:"M12 20v2",key:"1lh1kg"}],["path",{d:"m4.93 4.93 1.41 1.41",key:"149t6j"}],["path",{d:"m17.66 17.66 1.41 1.41",key:"ptbguv"}],["path",{d:"M2 12h2",key:"1t8f8n"}],["path",{d:"M20 12h2",key:"1q8mjw"}],["path",{d:"m6.34 17.66-1.41 1.41",key:"1m8zz5"}],["path",{d:"m19.07 4.93-1.41 1.41",key:"1shlcs"}]],ml=xc("sun",om);function _f({className:s,defaultValue:e,value:t,min:n=0,max:i=100,...r}){const o=qt.useMemo(()=>Array.isArray(t)?t:Array.isArray(e)?e:[n,i],[t,e,n,i]);return H.jsxs(O0,{"data-slot":"slider",defaultValue:e,value:t,min:n,max:i,className:oo("relative flex w-full touch-none items-center select-none data-[disabled]:opacity-50 data-[orientation=vertical]:h-full data-[orientation=vertical]:min-h-44 data-[orientation=vertical]:w-auto data-[orientation=vertical]:flex-col",s),...r,children:[H.jsx(B0,{"data-slot":"slider-track",className:oo("bg-muted relative grow overflow-hidden rounded-full data-[orientation=horizontal]:h-1.5 data-[orientation=horizontal]:w-full data-[orientation=vertical]:h-full data-[orientation=vertical]:w-1.5"),children:H.jsx(k0,{"data-slot":"slider-range",className:oo("bg-primary absolute data-[orientation=horizontal]:h-full data-[orientation=vertical]:w-full")})}),Array.from({length:o.length},(a,c)=>H.jsx(z0,{"data-slot":"slider-thumb",className:"border-primary ring-ring/50 block size-4 shrink-0 rounded-full border bg-white shadow-sm transition-[color,box-shadow] hover:ring-4 focus-visible:ring-4 focus-visible:outline-hidden disabled:pointer-events-none disabled:opacity-50"},c))]})}function am({className:s,...e}){return H.jsx(H0,{"data-slot":"switch",className:oo("peer data-[state=checked]:bg-primary data-[state=unchecked]:bg-input focus-visible:border-ring focus-visible:ring-ring/50 dark:data-[state=unchecked]:bg-input/80 inline-flex h-[1.15rem] w-8 shrink-0 items-center rounded-full border border-transparent shadow-xs transition-all outline-none focus-visible:ring-[3px] disabled:cursor-not-allowed disabled:opacity-50",s),...e,children:H.jsx(V0,{"data-slot":"switch-thumb",className:oo("bg-background dark:data-[state=unchecked]:bg-foreground dark:data-[state=checked]:bg-primary-foreground pointer-events-none block size-4 rounded-full ring-0 transition-transform data-[state=checked]:translate-x-[calc(100%-2px)] data-[state=unchecked]:translate-x-0")})})}function vf({className:s,...e}){return H.jsx(G0,{"data-slot":"label",className:oo("flex items-center gap-2 text-sm leading-none font-medium select-none group-data-[disabled=true]:pointer-events-none group-data-[disabled=true]:opacity-50 peer-disabled:cursor-not-allowed peer-disabled:opacity-50",s),...e})}const cm=N0("inline-flex items-center justify-center rounded-full border px-2 py-0.5 text-xs font-medium w-fit whitespace-nowrap shrink-0 [&>svg]:size-3 gap-1 [&>svg]:pointer-events-none focus-visible:border-ring focus-visible:ring-ring/50 focus-visible:ring-[3px] aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive transition-[color,box-shadow] overflow-hidden",{variants:{variant:{default:"border-transparent bg-primary text-primary-foreground [a&]:hover:bg-primary/90",secondary:"border-transparent bg-secondary text-secondary-foreground [a&]:hover:bg-secondary/90",destructive:"border-transparent bg-destructive text-white [a&]:hover:bg-destructive/90 focus-visible:ring-destructive/20 dark:focus-visible:ring-destructive/40 dark:bg-destructive/60",outline:"text-foreground [a&]:hover:bg-accent [a&]:hover:text-accent-foreground"}},defaultVariants:{variant:"default"}});function Mf({className:s,variant:e,asChild:t=!1,...n}){const i=t?W0:"span";return H.jsx(i,{"data-slot":"badge",className:oo(cm({variant:e}),s),...n})}const Bh="186",lm=0,yf=1,um=2,gl=1,xp=2,Ya=3,Ir=0,Di=1,pi=2,or=0,Za=1,Sf=2,bf=3,Tf=4,hm=5,Zo=100,fm=101,dm=102,pm=103,mm=104,gm=200,xm=201,_m=202,vm=203,_p=204,vp=205,Mm=206,ym=207,Sm=208,bm=209,Tm=210,Em=211,wm=212,Am=213,Rm=214,Bu=0,ku=1,zu=2,nc=3,Hu=4,Vu=5,Gu=6,Wu=7,Mp=0,Cm=1,Pm=2,Hs=0,yp=1,Sp=2,bp=3,kh=4,Tp=5,Ep=6,wp=7,Ef="attached",Im="detached",Ap=300,lo=301,sa=302,Kl=303,jl=304,Ul=306,Lr=1e3,Bs=1001,wl=1002,ci=1003,Rp=1004,Ka=1005,li=1006,xl=1007,sr=1008,Yi=1009,Cp=1010,Pp=1011,ic=1012,zh=1013,Gs=1014,is=1015,Ws=1016,Hh=1017,Vh=1018,sc=1020,Ip=35902,Lp=35899,Np=1021,Dp=1022,ss=1023,cr=1026,io=1027,Gh=1028,Wh=1029,uo=1030,Xh=1031,qh=1033,_l=33776,vl=33777,Ml=33778,yl=33779,Xu=35840,qu=35841,Yu=35842,Ku=35843,ju=36196,$u=37492,Zu=37496,Ju=37488,Qu=37489,Al=37490,eh=37491,th=37808,nh=37809,ih=37810,sh=37811,rh=37812,oh=37813,ah=37814,ch=37815,lh=37816,uh=37817,hh=37818,fh=37819,dh=37820,ph=37821,mh=36492,gh=36494,xh=36495,_h=36283,vh=36284,Rl=36285,Mh=36286,rc=2300,oc=2301,$l=2302,wf=2303,Af=2400,Rf=2401,Cf=2402,Lm=2500,Nm=0,Up=1,yh=2,Dm=3200,Sh=0,Um=1,Rr="",Xn="srgb",Hi="srgb-linear",Cl="linear",Sn="srgb",Zl=7680,Fm=519,Om=512,Bm=513,km=514,Yh=515,zm=516,Hm=517,Kh=518,Vm=519,Fp=35044,Pf="300 es",ks=2e3,ac=2001;function Gm(s){for(let e=s.length-1;e>=0;--e)if(s[e]>=65535)return!0;return!1}function Wm(s){return ArrayBuffer.isView(s)&&!(s instanceof DataView)}function cc(s){return document.createElementNS("http://www.w3.org/1999/xhtml",s)}function Xm(){const s=cc("canvas");return s.style.display="block",s}const If={};function Pl(...s){const e="THREE."+s.shift();console.log(e,...s)}function Op(s){const e=s[0];if(typeof e=="string"&&e.startsWith("TSL:")){const t=s[1];t&&t.isStackTrace?s[0]+=" "+t.getLocation():s[1]='Stack trace not available. Enable "THREE.Node.captureStackTrace" to capture stack traces.'}return s}function yt(...s){s=Op(s);const e="THREE."+s.shift();{const t=s[0];t&&t.isStackTrace?console.warn(t.getError(e)):console.warn(e,...s)}}function kt(...s){s=Op(s);const e="THREE."+s.shift();{const t=s[0];t&&t.isStackTrace?console.error(t.getError(e)):console.error(e,...s)}}function ta(...s){const e=s.join(" ");e in If||(If[e]=!0,yt(...s))}function qm(s,e,t){return new Promise(function(n,i){function r(){switch(s.clientWaitSync(e,s.SYNC_FLUSH_COMMANDS_BIT,0)){case s.WAIT_FAILED:i();break;case s.TIMEOUT_EXPIRED:setTimeout(r,t);break;default:n()}}setTimeout(r,t)})}const Ym={[Bu]:ku,[zu]:Gu,[Hu]:Wu,[nc]:Vu,[ku]:Bu,[Gu]:zu,[Wu]:Hu,[Vu]:nc};class fo{addEventListener(e,t){this._listeners===void 0&&(this._listeners={});const n=this._listeners;n[e]===void 0&&(n[e]=[]),n[e].indexOf(t)===-1&&n[e].push(t)}hasEventListener(e,t){const n=this._listeners;return n===void 0?!1:n[e]!==void 0&&n[e].indexOf(t)!==-1}removeEventListener(e,t){const n=this._listeners;if(n===void 0)return;const i=n[e];if(i!==void 0){const r=i.indexOf(t);r!==-1&&i.splice(r,1)}}dispatchEvent(e){const t=this._listeners;if(t===void 0)return;const n=t[e.type];if(n!==void 0){e.target=this;const i=n.slice(0);for(let r=0,o=i.length;r<o;r++)i[r].call(this,e);e.target=null}}}const Ei=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"];let Lf=1234567;const Ja=Math.PI/180,ra=180/Math.PI;function rs(){const s=Math.random()*4294967295|0,e=Math.random()*4294967295|0,t=Math.random()*4294967295|0,n=Math.random()*4294967295|0;return(Ei[s&255]+Ei[s>>8&255]+Ei[s>>16&255]+Ei[s>>24&255]+"-"+Ei[e&255]+Ei[e>>8&255]+"-"+Ei[e>>16&15|64]+Ei[e>>24&255]+"-"+Ei[t&63|128]+Ei[t>>8&255]+"-"+Ei[t>>16&255]+Ei[t>>24&255]+Ei[n&255]+Ei[n>>8&255]+Ei[n>>16&255]+Ei[n>>24&255]).toLowerCase()}function Jt(s,e,t){return Math.max(e,Math.min(t,s))}function jh(s,e){return(s%e+e)%e}function Km(s,e,t,n,i){return n+(s-e)*(i-n)/(t-e)}function jm(s,e,t){return s!==e?(t-s)/(e-s):0}function Qa(s,e,t){return(1-t)*s+t*e}function $m(s,e,t,n){return Qa(s,e,1-Math.exp(-t*n))}function Zm(s,e=1){return e-Math.abs(jh(s,e*2)-e)}function Jm(s,e,t){return s<=e?0:s>=t?1:(s=(s-e)/(t-e),s*s*(3-2*s))}function Qm(s,e,t){return s<=e?0:s>=t?1:(s=(s-e)/(t-e),s*s*s*(s*(s*6-15)+10))}function eg(s,e){return s+Math.floor(Math.random()*(e-s+1))}function tg(s,e){return s+Math.random()*(e-s)}function ng(s){return s*(.5-Math.random())}function ig(s){s!==void 0&&(Lf=s);let e=Lf+=1831565813;return e=Math.imul(e^e>>>15,e|1),e^=e+Math.imul(e^e>>>7,e|61),((e^e>>>14)>>>0)/4294967296}function sg(s){return s*Ja}function rg(s){return s*ra}function og(s){return s>0&&Number.isInteger(s)&&2**Math.round(Math.log2(s))===s}function ag(s){return Math.pow(2,Math.ceil(Math.log(s)/Math.LN2))}function cg(s){return Math.pow(2,Math.floor(Math.log(s)/Math.LN2))}function lg(s,e,t,n,i){const r=Math.cos,o=Math.sin,a=r(t/2),c=o(t/2),l=r((e+n)/2),u=o((e+n)/2),f=r((e-n)/2),h=o((e-n)/2),d=r((n-e)/2),m=o((n-e)/2);switch(i){case"XYX":s.set(a*u,c*f,c*h,a*l);break;case"YZY":s.set(c*h,a*u,c*f,a*l);break;case"ZXZ":s.set(c*f,c*h,a*u,a*l);break;case"XZX":s.set(a*u,c*m,c*d,a*l);break;case"YXY":s.set(c*d,a*u,c*m,a*l);break;case"ZYZ":s.set(c*m,c*d,a*u,a*l);break;default:yt("MathUtils: .setQuaternionFromProperEuler() encountered an unknown order: "+i)}}function vs(s,e){switch(e.constructor){case Float32Array:return s;case Uint32Array:return s/4294967295;case Uint16Array:return s/65535;case Uint8Array:case Uint8ClampedArray:return s/255;case Int32Array:return Math.max(s/2147483647,-1);case Int16Array:return Math.max(s/32767,-1);case Int8Array:return Math.max(s/127,-1);default:throw new Error("THREE.MathUtils: Invalid component type.")}}function bn(s,e){switch(e.constructor){case Float32Array:return s;case Uint32Array:return Math.round(s*4294967295);case Uint16Array:return Math.round(s*65535);case Uint8Array:case Uint8ClampedArray:return Math.round(s*255);case Int32Array:return Math.round(s*2147483647);case Int16Array:return Math.round(s*32767);case Int8Array:return Math.round(s*127);default:throw new Error("THREE.MathUtils: Invalid component type.")}}const ug={DEG2RAD:Ja,RAD2DEG:ra,generateUUID:rs,clamp:Jt,euclideanModulo:jh,mapLinear:Km,inverseLerp:jm,lerp:Qa,damp:$m,pingpong:Zm,smoothstep:Jm,smootherstep:Qm,randInt:eg,randFloat:tg,randFloatSpread:ng,seededRandom:ig,degToRad:sg,radToDeg:rg,isPowerOfTwo:og,ceilPowerOfTwo:ag,floorPowerOfTwo:cg,setQuaternionFromProperEuler:lg,normalize:bn,denormalize:vs};class Ye{static{Ye.prototype.isVector2=!0}constructor(e=0,t=0){this.x=e,this.y=t}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,t){return this.x=e,this.y=t,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;default:throw new Error("THREE.Vector2: index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("THREE.Vector2: index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){const t=this.x,n=this.y,i=e.elements;return this.x=i[0]*t+i[3]*n+i[6],this.y=i[1]*t+i[4]*n+i[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,t){return this.x=Jt(this.x,e.x,t.x),this.y=Jt(this.y,e.y,t.y),this}clampScalar(e,t){return this.x=Jt(this.x,e,t),this.y=Jt(this.y,e,t),this}clampLength(e,t){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Jt(n,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const n=this.dot(e)/t;return Math.acos(Jt(n,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,n=this.y-e.y;return t*t+n*n}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this}rotateAround(e,t){const n=Math.cos(t),i=Math.sin(t),r=this.x-e.x,o=this.y-e.y;return this.x=r*n-o*i+e.x,this.y=r*i+o*n+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class ni{constructor(e=0,t=0,n=0,i=1){this.isQuaternion=!0,this._x=e,this._y=t,this._z=n,this._w=i}static slerpFlat(e,t,n,i,r,o,a){let c=n[i+0],l=n[i+1],u=n[i+2],f=n[i+3],h=r[o+0],d=r[o+1],m=r[o+2],M=r[o+3];if(f!==M||c!==h||l!==d||u!==m){let x=c*h+l*d+u*m+f*M;x<0&&(h=-h,d=-d,m=-m,M=-M,x=-x);let g=1-a;if(x<.9995){const A=Math.acos(x),I=Math.sin(A);g=Math.sin(g*A)/I,a=Math.sin(a*A)/I,c=c*g+h*a,l=l*g+d*a,u=u*g+m*a,f=f*g+M*a}else{c=c*g+h*a,l=l*g+d*a,u=u*g+m*a,f=f*g+M*a;const A=1/Math.sqrt(c*c+l*l+u*u+f*f);c*=A,l*=A,u*=A,f*=A}}e[t]=c,e[t+1]=l,e[t+2]=u,e[t+3]=f}static multiplyQuaternionsFlat(e,t,n,i,r,o){const a=n[i],c=n[i+1],l=n[i+2],u=n[i+3],f=r[o],h=r[o+1],d=r[o+2],m=r[o+3];return e[t]=a*m+u*f+c*d-l*h,e[t+1]=c*m+u*h+l*f-a*d,e[t+2]=l*m+u*d+a*h-c*f,e[t+3]=u*m-a*f-c*h-l*d,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,t,n,i){return this._x=e,this._y=t,this._z=n,this._w=i,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,t=!0){const n=e._x,i=e._y,r=e._z,o=e._order,a=Math.cos,c=Math.sin,l=a(n/2),u=a(i/2),f=a(r/2),h=c(n/2),d=c(i/2),m=c(r/2);switch(o){case"XYZ":this._x=h*u*f+l*d*m,this._y=l*d*f-h*u*m,this._z=l*u*m+h*d*f,this._w=l*u*f-h*d*m;break;case"YXZ":this._x=h*u*f+l*d*m,this._y=l*d*f-h*u*m,this._z=l*u*m-h*d*f,this._w=l*u*f+h*d*m;break;case"ZXY":this._x=h*u*f-l*d*m,this._y=l*d*f+h*u*m,this._z=l*u*m+h*d*f,this._w=l*u*f-h*d*m;break;case"ZYX":this._x=h*u*f-l*d*m,this._y=l*d*f+h*u*m,this._z=l*u*m-h*d*f,this._w=l*u*f+h*d*m;break;case"YZX":this._x=h*u*f+l*d*m,this._y=l*d*f+h*u*m,this._z=l*u*m-h*d*f,this._w=l*u*f-h*d*m;break;case"XZY":this._x=h*u*f-l*d*m,this._y=l*d*f-h*u*m,this._z=l*u*m+h*d*f,this._w=l*u*f+h*d*m;break;default:yt("Quaternion: .setFromEuler() encountered an unknown order: "+o)}return t===!0&&this._onChangeCallback(),this}setFromAxisAngle(e,t){const n=t/2,i=Math.sin(n);return this._x=e.x*i,this._y=e.y*i,this._z=e.z*i,this._w=Math.cos(n),this._onChangeCallback(),this}setFromRotationMatrix(e){const t=e.elements,n=t[0],i=t[4],r=t[8],o=t[1],a=t[5],c=t[9],l=t[2],u=t[6],f=t[10],h=n+a+f;if(h>0){const d=.5/Math.sqrt(h+1);this._w=.25/d,this._x=(u-c)*d,this._y=(r-l)*d,this._z=(o-i)*d}else if(n>a&&n>f){const d=2*Math.sqrt(1+n-a-f);this._w=(u-c)/d,this._x=.25*d,this._y=(i+o)/d,this._z=(r+l)/d}else if(a>f){const d=2*Math.sqrt(1+a-n-f);this._w=(r-l)/d,this._x=(i+o)/d,this._y=.25*d,this._z=(c+u)/d}else{const d=2*Math.sqrt(1+f-n-a);this._w=(o-i)/d,this._x=(r+l)/d,this._y=(c+u)/d,this._z=.25*d}return this._onChangeCallback(),this}setFromUnitVectors(e,t){let n=e.dot(t)+1;return n<1e-8?(n=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=n):(this._x=0,this._y=-e.z,this._z=e.y,this._w=n)):(this._x=e.y*t.z-e.z*t.y,this._y=e.z*t.x-e.x*t.z,this._z=e.x*t.y-e.y*t.x,this._w=n),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(Jt(this.dot(e),-1,1)))}rotateTowards(e,t){const n=this.angleTo(e);if(n===0)return this;const i=Math.min(1,t/n);return this.slerp(e,i),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,t){const n=e._x,i=e._y,r=e._z,o=e._w,a=t._x,c=t._y,l=t._z,u=t._w;return this._x=n*u+o*a+i*l-r*c,this._y=i*u+o*c+r*a-n*l,this._z=r*u+o*l+n*c-i*a,this._w=o*u-n*a-i*c-r*l,this._onChangeCallback(),this}slerp(e,t){let n=e._x,i=e._y,r=e._z,o=e._w,a=this.dot(e);a<0&&(n=-n,i=-i,r=-r,o=-o,a=-a);let c=1-t;if(a<.9995){const l=Math.acos(a),u=Math.sin(l);c=Math.sin(c*l)/u,t=Math.sin(t*l)/u,this._x=this._x*c+n*t,this._y=this._y*c+i*t,this._z=this._z*c+r*t,this._w=this._w*c+o*t,this._onChangeCallback()}else this._x=this._x*c+n*t,this._y=this._y*c+i*t,this._z=this._z*c+r*t,this._w=this._w*c+o*t,this.normalize();return this}slerpQuaternions(e,t,n){return this.copy(e).slerp(t,n)}random(){const e=2*Math.PI*Math.random(),t=2*Math.PI*Math.random(),n=Math.random(),i=Math.sqrt(1-n),r=Math.sqrt(n);return this.set(i*Math.sin(e),i*Math.cos(e),r*Math.sin(t),r*Math.cos(t))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,t=0){return this._x=e[t],this._y=e[t+1],this._z=e[t+2],this._w=e[t+3],this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._w,e}fromBufferAttribute(e,t){return this._x=e.getX(t),this._y=e.getY(t),this._z=e.getZ(t),this._w=e.getW(t),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class V{static{V.prototype.isVector3=!0}constructor(e=0,t=0,n=0){this.x=e,this.y=t,this.z=n}set(e,t,n){return n===void 0&&(n=this.z),this.x=e,this.y=t,this.z=n,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;default:throw new Error("THREE.Vector3: index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("THREE.Vector3: index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,t){return this.x=e.x*t.x,this.y=e.y*t.y,this.z=e.z*t.z,this}applyEuler(e){return this.applyQuaternion(Nf.setFromEuler(e))}applyAxisAngle(e,t){return this.applyQuaternion(Nf.setFromAxisAngle(e,t))}applyMatrix3(e){const t=this.x,n=this.y,i=this.z,r=e.elements;return this.x=r[0]*t+r[3]*n+r[6]*i,this.y=r[1]*t+r[4]*n+r[7]*i,this.z=r[2]*t+r[5]*n+r[8]*i,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){const t=this.x,n=this.y,i=this.z,r=e.elements,o=1/(r[3]*t+r[7]*n+r[11]*i+r[15]);return this.x=(r[0]*t+r[4]*n+r[8]*i+r[12])*o,this.y=(r[1]*t+r[5]*n+r[9]*i+r[13])*o,this.z=(r[2]*t+r[6]*n+r[10]*i+r[14])*o,this}applyQuaternion(e){const t=this.x,n=this.y,i=this.z,r=e.x,o=e.y,a=e.z,c=e.w,l=2*(o*i-a*n),u=2*(a*t-r*i),f=2*(r*n-o*t);return this.x=t+c*l+o*f-a*u,this.y=n+c*u+a*l-r*f,this.z=i+c*f+r*u-o*l,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){const t=this.x,n=this.y,i=this.z,r=e.elements;return this.x=r[0]*t+r[4]*n+r[8]*i,this.y=r[1]*t+r[5]*n+r[9]*i,this.z=r[2]*t+r[6]*n+r[10]*i,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,t){return this.x=Jt(this.x,e.x,t.x),this.y=Jt(this.y,e.y,t.y),this.z=Jt(this.z,e.z,t.z),this}clampScalar(e,t){return this.x=Jt(this.x,e,t),this.y=Jt(this.y,e,t),this.z=Jt(this.z,e,t),this}clampLength(e,t){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Jt(n,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this.z=e.z+(t.z-e.z)*n,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,t){const n=e.x,i=e.y,r=e.z,o=t.x,a=t.y,c=t.z;return this.x=i*c-r*a,this.y=r*o-n*c,this.z=n*a-i*o,this}projectOnVector(e){const t=e.lengthSq();if(t===0)return this.set(0,0,0);const n=e.dot(this)/t;return this.copy(e).multiplyScalar(n)}projectOnPlane(e){return Jl.copy(this).projectOnVector(e),this.sub(Jl)}reflect(e){return this.sub(Jl.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const n=this.dot(e)/t;return Math.acos(Jt(n,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,n=this.y-e.y,i=this.z-e.z;return t*t+n*n+i*i}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,t,n){const i=Math.sin(t)*e;return this.x=i*Math.sin(n),this.y=Math.cos(t)*e,this.z=i*Math.cos(n),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,t,n){return this.x=e*Math.sin(t),this.y=n,this.z=e*Math.cos(t),this}setFromMatrixPosition(e){const t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this}setFromMatrixScale(e){const t=this.setFromMatrixColumn(e,0).length(),n=this.setFromMatrixColumn(e,1).length(),i=this.setFromMatrixColumn(e,2).length();return this.x=t,this.y=n,this.z=i,this}setFromMatrixColumn(e,t){return this.fromArray(e.elements,t*4)}setFromMatrix3Column(e,t){return this.fromArray(e.elements,t*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const e=Math.random()*Math.PI*2,t=Math.random()*2-1,n=Math.sqrt(1-t*t);return this.x=n*Math.cos(e),this.y=t,this.z=n*Math.sin(e),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}const Jl=new V,Nf=new ni;class Gt{static{Gt.prototype.isMatrix3=!0}constructor(e,t,n,i,r,o,a,c,l){this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,t,n,i,r,o,a,c,l)}set(e,t,n,i,r,o,a,c,l){const u=this.elements;return u[0]=e,u[1]=i,u[2]=a,u[3]=t,u[4]=r,u[5]=c,u[6]=n,u[7]=o,u[8]=l,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){const t=this.elements,n=e.elements;return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],this}extractBasis(e,t,n){return e.setFromMatrix3Column(this,0),t.setFromMatrix3Column(this,1),n.setFromMatrix3Column(this,2),this}setFromMatrix4(e){const t=e.elements;return this.set(t[0],t[4],t[8],t[1],t[5],t[9],t[2],t[6],t[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const n=e.elements,i=t.elements,r=this.elements,o=n[0],a=n[3],c=n[6],l=n[1],u=n[4],f=n[7],h=n[2],d=n[5],m=n[8],M=i[0],x=i[3],g=i[6],A=i[1],I=i[4],_=i[7],w=i[2],R=i[5],D=i[8];return r[0]=o*M+a*A+c*w,r[3]=o*x+a*I+c*R,r[6]=o*g+a*_+c*D,r[1]=l*M+u*A+f*w,r[4]=l*x+u*I+f*R,r[7]=l*g+u*_+f*D,r[2]=h*M+d*A+m*w,r[5]=h*x+d*I+m*R,r[8]=h*g+d*_+m*D,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[3]*=e,t[6]*=e,t[1]*=e,t[4]*=e,t[7]*=e,t[2]*=e,t[5]*=e,t[8]*=e,this}determinant(){const e=this.elements,t=e[0],n=e[1],i=e[2],r=e[3],o=e[4],a=e[5],c=e[6],l=e[7],u=e[8];return t*o*u-t*a*l-n*r*u+n*a*c+i*r*l-i*o*c}invert(){const e=this.elements,t=e[0],n=e[1],i=e[2],r=e[3],o=e[4],a=e[5],c=e[6],l=e[7],u=e[8],f=u*o-a*l,h=a*c-u*r,d=l*r-o*c,m=t*f+n*h+i*d;if(m===0)return this.set(0,0,0,0,0,0,0,0,0);const M=1/m;return e[0]=f*M,e[1]=(i*l-u*n)*M,e[2]=(a*n-i*o)*M,e[3]=h*M,e[4]=(u*t-i*c)*M,e[5]=(i*r-a*t)*M,e[6]=d*M,e[7]=(n*c-l*t)*M,e[8]=(o*t-n*r)*M,this}transpose(){let e;const t=this.elements;return e=t[1],t[1]=t[3],t[3]=e,e=t[2],t[2]=t[6],t[6]=e,e=t[5],t[5]=t[7],t[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){const t=this.elements;return e[0]=t[0],e[1]=t[3],e[2]=t[6],e[3]=t[1],e[4]=t[4],e[5]=t[7],e[6]=t[2],e[7]=t[5],e[8]=t[8],this}setUvTransform(e,t,n,i,r,o,a){const c=Math.cos(r),l=Math.sin(r);return this.set(n*c,n*l,-n*(c*o+l*a)+o+e,-i*l,i*c,-i*(-l*o+c*a)+a+t,0,0,1),this}scale(e,t){return ta("Matrix3: .scale() is deprecated. Use .makeScale() instead."),this.premultiply(Ql.makeScale(e,t)),this}rotate(e){return ta("Matrix3: .rotate() is deprecated. Use .makeRotation() instead."),this.premultiply(Ql.makeRotation(-e)),this}translate(e,t){return ta("Matrix3: .translate() is deprecated. Use .makeTranslation() instead."),this.premultiply(Ql.makeTranslation(e,t)),this}makeTranslation(e,t){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,t,0,0,1),this}makeRotation(e){const t=Math.cos(e),n=Math.sin(e);return this.set(t,-n,0,n,t,0,0,0,1),this}makeScale(e,t){return this.set(e,0,0,0,t,0,0,0,1),this}equals(e){const t=this.elements,n=e.elements;for(let i=0;i<9;i++)if(t[i]!==n[i])return!1;return!0}fromArray(e,t=0){for(let n=0;n<9;n++)this.elements[n]=e[n+t];return this}toArray(e=[],t=0){const n=this.elements;return e[t]=n[0],e[t+1]=n[1],e[t+2]=n[2],e[t+3]=n[3],e[t+4]=n[4],e[t+5]=n[5],e[t+6]=n[6],e[t+7]=n[7],e[t+8]=n[8],e}clone(){return new this.constructor().fromArray(this.elements)}}const Ql=new Gt,Df=new Gt().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),Uf=new Gt().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);function hg(){const s={enabled:!0,workingColorSpace:Hi,spaces:{},convert:function(i,r,o){return this.enabled===!1||r===o||!r||!o||(this.spaces[r].transfer===Sn&&(i.r=ar(i.r),i.g=ar(i.g),i.b=ar(i.b)),this.spaces[r].primaries!==this.spaces[o].primaries&&(i.applyMatrix3(this.spaces[r].toXYZ),i.applyMatrix3(this.spaces[o].fromXYZ)),this.spaces[o].transfer===Sn&&(i.r=na(i.r),i.g=na(i.g),i.b=na(i.b))),i},workingToColorSpace:function(i,r){return this.convert(i,this.workingColorSpace,r)},colorSpaceToWorking:function(i,r){return this.convert(i,r,this.workingColorSpace)},getPrimaries:function(i){return this.spaces[i].primaries},getTransfer:function(i){return i===Rr?Cl:this.spaces[i].transfer},getToneMappingMode:function(i){return this.spaces[i].outputColorSpaceConfig.toneMappingMode||"standard"},getLuminanceCoefficients:function(i,r=this.workingColorSpace){return i.fromArray(this.spaces[r].luminanceCoefficients)},define:function(i){Object.assign(this.spaces,i)},_getMatrix:function(i,r,o){return i.copy(this.spaces[r].toXYZ).multiply(this.spaces[o].fromXYZ)},_getDrawingBufferColorSpace:function(i){return this.spaces[i].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(i=this.workingColorSpace){return this.spaces[i].workingColorSpaceConfig.unpackColorSpace},fromWorkingColorSpace:function(i,r){return ta("ColorManagement: .fromWorkingColorSpace() has been renamed to .workingToColorSpace()."),s.workingToColorSpace(i,r)},toWorkingColorSpace:function(i,r){return ta("ColorManagement: .toWorkingColorSpace() has been renamed to .colorSpaceToWorking()."),s.colorSpaceToWorking(i,r)}},e=[.64,.33,.3,.6,.15,.06],t=[.2126,.7152,.0722],n=[.3127,.329];return s.define({[Hi]:{primaries:e,whitePoint:n,transfer:Cl,toXYZ:Df,fromXYZ:Uf,luminanceCoefficients:t,workingColorSpaceConfig:{unpackColorSpace:Xn},outputColorSpaceConfig:{drawingBufferColorSpace:Xn}},[Xn]:{primaries:e,whitePoint:n,transfer:Sn,toXYZ:Df,fromXYZ:Uf,luminanceCoefficients:t,outputColorSpaceConfig:{drawingBufferColorSpace:Xn}}}),s}const Qt=hg();function ar(s){return s<.04045?s*.0773993808:Math.pow(s*.9478672986+.0521327014,2.4)}function na(s){return s<.0031308?s*12.92:1.055*Math.pow(s,.41666)-.055}let Uo;class fg{static getDataURL(e,t="image/png"){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let n;if(e instanceof HTMLCanvasElement)n=e;else{Uo===void 0&&(Uo=cc("canvas")),Uo.width=e.width,Uo.height=e.height;const i=Uo.getContext("2d");e instanceof ImageData?i.putImageData(e,0,0):i.drawImage(e,0,0,e.width,e.height),n=Uo}return n.toDataURL(t)}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){const t=cc("canvas");t.width=e.width,t.height=e.height;const n=t.getContext("2d");n.drawImage(e,0,0,e.width,e.height);const i=n.getImageData(0,0,e.width,e.height),r=i.data;for(let o=0;o<r.length;o++)r[o]=ar(r[o]/255)*255;return n.putImageData(i,0,0),t}else if(e.data){const t=e.data.slice(0);for(let n=0;n<t.length;n++)t instanceof Uint8Array||t instanceof Uint8ClampedArray?t[n]=Math.floor(ar(t[n]/255)*255):t[n]=ar(t[n]);return{data:t,width:e.width,height:e.height}}else return yt("ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}}let dg=0;class $h{constructor(e=null){this.isTextureSource=!0,Object.defineProperty(this,"id",{value:dg++}),this.uuid=rs(),this.data=e,this.dataReady=!0,this.version=0}getSize(e){const t=this.data;return typeof HTMLVideoElement<"u"&&t instanceof HTMLVideoElement?e.set(t.videoWidth,t.videoHeight,0):typeof VideoFrame<"u"&&t instanceof VideoFrame?e.set(t.displayWidth,t.displayHeight,0):t!==null?e.set(t.width,t.height,t.depth||0):e.set(0,0,0),e}set needsUpdate(e){e===!0&&this.version++}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.images[this.uuid]!==void 0)return e.images[this.uuid];const n={uuid:this.uuid,url:""},i=this.data;if(i!==null){let r;if(Array.isArray(i)){r=[];for(let o=0,a=i.length;o<a;o++)i[o].isDataTexture?r.push(eu(i[o].image)):r.push(eu(i[o]))}else r=eu(i);n.url=r}return t||(e.images[this.uuid]=n),n}}function eu(s){return typeof HTMLImageElement<"u"&&s instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&s instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&s instanceof ImageBitmap?fg.getDataURL(s):s.data?{data:Array.from(s.data),width:s.width,height:s.height,type:s.data.constructor.name}:(yt("Texture: Unable to serialize Texture."),{})}let pg=0;const tu=new V;class ui extends fo{constructor(e=ui.DEFAULT_IMAGE,t=ui.DEFAULT_MAPPING,n=Bs,i=Bs,r=li,o=sr,a=ss,c=Yi,l=ui.DEFAULT_ANISOTROPY,u=Rr){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:pg++}),this.uuid=rs(),this.name="",this.source=new $h(e),this.mipmaps=[],this.mapping=t,this.channel=0,this.wrapS=n,this.wrapT=i,this.magFilter=r,this.minFilter=o,this.anisotropy=l,this.format=a,this.internalFormat=null,this.type=c,this.offset=new Ye(0,0),this.repeat=new Ye(1,1),this.center=new Ye(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new Gt,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=u,this.userData={},this.updateRanges=[],this.version=0,this.onUpdate=null,this.renderTarget=null,this.isRenderTargetTexture=!1,this.isArrayTexture=!!(e&&e.depth&&e.depth>1),this.pmremVersion=0,this.normalized=!1}get width(){return this.source.getSize(tu).x}get height(){return this.source.getSize(tu).y}get depth(){return this.source.getSize(tu).z}get image(){return this.source.data}set image(e){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.normalized=e.normalized,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.renderTarget=e.renderTarget,this.isRenderTargetTexture=e.isRenderTargetTexture,this.isArrayTexture=e.isArrayTexture,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}setValues(e){for(const t in e){const n=e[t];if(n===void 0){yt(`Texture.setValues(): parameter '${t}' has value of undefined.`);continue}const i=this[t];if(i===void 0){yt(`Texture.setValues(): property '${t}' does not exist.`);continue}i&&n&&i.isVector2&&n.isVector2||i&&n&&i.isVector3&&n.isVector3||i&&n&&i.isMatrix3&&n.isMatrix3?i.copy(n):this[t]=n}}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];const n={metadata:{version:4.7,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,normalized:this.normalized,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(n.userData=this.userData),t||(e.textures[this.uuid]=n),n}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==Ap)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case Lr:e.x=e.x-Math.floor(e.x);break;case Bs:e.x=e.x<0?0:1;break;case wl:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case Lr:e.y=e.y-Math.floor(e.y);break;case Bs:e.y=e.y<0?0:1;break;case wl:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(e){e===!0&&this.pmremVersion++}}ui.DEFAULT_IMAGE=null;ui.DEFAULT_MAPPING=Ap;ui.DEFAULT_ANISOTROPY=1;class Cn{static{Cn.prototype.isVector4=!0}constructor(e=0,t=0,n=0,i=1){this.x=e,this.y=t,this.z=n,this.w=i}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,t,n,i){return this.x=e,this.y=t,this.z=n,this.w=i,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;case 3:this.w=t;break;default:throw new Error("THREE.Vector4: index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("THREE.Vector4: index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this.w=e.w+t.w,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this.w+=e.w*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this.w=e.w-t.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){const t=this.x,n=this.y,i=this.z,r=this.w,o=e.elements;return this.x=o[0]*t+o[4]*n+o[8]*i+o[12]*r,this.y=o[1]*t+o[5]*n+o[9]*i+o[13]*r,this.z=o[2]*t+o[6]*n+o[10]*i+o[14]*r,this.w=o[3]*t+o[7]*n+o[11]*i+o[15]*r,this}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this.w/=e.w,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);const t=Math.sqrt(1-e.w*e.w);return t<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/t,this.y=e.y/t,this.z=e.z/t),this}setAxisAngleFromRotationMatrix(e){let t,n,i,r;const c=e.elements,l=c[0],u=c[4],f=c[8],h=c[1],d=c[5],m=c[9],M=c[2],x=c[6],g=c[10];if(Math.abs(u-h)<.01&&Math.abs(f-M)<.01&&Math.abs(m-x)<.01){if(Math.abs(u+h)<.1&&Math.abs(f+M)<.1&&Math.abs(m+x)<.1&&Math.abs(l+d+g-3)<.1)return this.set(1,0,0,0),this;t=Math.PI;const I=(l+1)/2,_=(d+1)/2,w=(g+1)/2,R=(u+h)/4,D=(f+M)/4,v=(m+x)/4;return I>_&&I>w?I<.01?(n=0,i=.707106781,r=.707106781):(n=Math.sqrt(I),i=R/n,r=D/n):_>w?_<.01?(n=.707106781,i=0,r=.707106781):(i=Math.sqrt(_),n=R/i,r=v/i):w<.01?(n=.707106781,i=.707106781,r=0):(r=Math.sqrt(w),n=D/r,i=v/r),this.set(n,i,r,t),this}let A=Math.sqrt((x-m)*(x-m)+(f-M)*(f-M)+(h-u)*(h-u));return Math.abs(A)<.001&&(A=1),this.x=(x-m)/A,this.y=(f-M)/A,this.z=(h-u)/A,this.w=Math.acos((l+d+g-1)/2),this}setFromMatrixPosition(e){const t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this.w=t[15],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,t){return this.x=Jt(this.x,e.x,t.x),this.y=Jt(this.y,e.y,t.y),this.z=Jt(this.z,e.z,t.z),this.w=Jt(this.w,e.w,t.w),this}clampScalar(e,t){return this.x=Jt(this.x,e,t),this.y=Jt(this.y,e,t),this.z=Jt(this.z,e,t),this.w=Jt(this.w,e,t),this}clampLength(e,t){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Jt(n,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this.w+=(e.w-this.w)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this.z=e.z+(t.z-e.z)*n,this.w=e.w+(t.w-e.w)*n,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this.w=e[t+3],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e[t+3]=this.w,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this.w=e.getW(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class mg extends fo{constructor(e=1,t=1,n={}){super(),n=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:li,depthBuffer:!0,stencilBuffer:!1,resolveColorBuffer:!0,resolveDepthBuffer:!0,resolveStencilBuffer:!0,storeMultisampledColorBuffer:!0,storeMultisampledDepthBuffer:!0,storeMultisampledStencilBuffer:!0,depthTexture:null,samples:0,count:1,depth:1,multiview:!1,useArrayDepthTexture:!1},n),this.isRenderTarget=!0,this.width=e,this.height=t,this.depth=n.depth,this.scissor=new Cn(0,0,e,t),this.scissorTest=!1,this.viewport=new Cn(0,0,e,t),this.textures=[];const i={width:e,height:t,depth:n.depth},r=new ui(i),o=n.count;for(let a=0;a<o;a++)this.textures[a]=r.clone(),this.textures[a].isRenderTargetTexture=!0,this.textures[a].renderTarget=this;this._setTextureOptions(n),this.depthBuffer=n.depthBuffer,this.stencilBuffer=n.stencilBuffer,this.resolveColorBuffer=n.resolveColorBuffer,this.resolveDepthBuffer=n.resolveDepthBuffer,this.resolveStencilBuffer=n.resolveStencilBuffer,this.storeMultisampledColorBuffer=n.storeMultisampledColorBuffer,this.storeMultisampledDepthBuffer=n.storeMultisampledDepthBuffer,this.storeMultisampledStencilBuffer=n.storeMultisampledStencilBuffer,this._depthTexture=null,this.depthTexture=n.depthTexture,this.samples=n.samples,this.multiview=n.multiview,this.useArrayDepthTexture=n.useArrayDepthTexture}_setTextureOptions(e={}){const t={minFilter:li,generateMipmaps:!1,flipY:!1,internalFormat:null};e.mapping!==void 0&&(t.mapping=e.mapping),e.wrapS!==void 0&&(t.wrapS=e.wrapS),e.wrapT!==void 0&&(t.wrapT=e.wrapT),e.wrapR!==void 0&&(t.wrapR=e.wrapR),e.magFilter!==void 0&&(t.magFilter=e.magFilter),e.minFilter!==void 0&&(t.minFilter=e.minFilter),e.format!==void 0&&(t.format=e.format),e.type!==void 0&&(t.type=e.type),e.anisotropy!==void 0&&(t.anisotropy=e.anisotropy),e.colorSpace!==void 0&&(t.colorSpace=e.colorSpace),e.flipY!==void 0&&(t.flipY=e.flipY),e.generateMipmaps!==void 0&&(t.generateMipmaps=e.generateMipmaps),e.internalFormat!==void 0&&(t.internalFormat=e.internalFormat);for(let n=0;n<this.textures.length;n++)this.textures[n].setValues(t)}get texture(){return this.textures[0]}set texture(e){this.textures[0]=e}set depthTexture(e){this._depthTexture!==null&&this._depthTexture.renderTarget===this&&(this._depthTexture.renderTarget=null),e!==null&&e.renderTarget===null&&(e.renderTarget=this),this._depthTexture=e}get depthTexture(){return this._depthTexture}setSize(e,t,n=1){if(this.width!==e||this.height!==t||this.depth!==n){this.width=e,this.height=t,this.depth=n;for(let i=0,r=this.textures.length;i<r;i++)this.textures[i].image.width=e,this.textures[i].image.height=t,this.textures[i].image.depth=n,this.textures[i].isData3DTexture!==!0&&(this.textures[i].isArrayTexture=this.textures[i].image.depth>1);this.dispose()}this.viewport.set(0,0,e,t),this.scissor.set(0,0,e,t)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.textures.length=0;for(let t=0,n=e.textures.length;t<n;t++){this.textures[t]=e.textures[t].clone(),this.textures[t].isRenderTargetTexture=!0,this.textures[t].renderTarget=this;const i=Object.assign({},e.textures[t].image);this.textures[t].source=new $h(i)}if(this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,this.resolveColorBuffer=e.resolveColorBuffer,this.resolveDepthBuffer=e.resolveDepthBuffer,this.resolveStencilBuffer=e.resolveStencilBuffer,this.storeMultisampledColorBuffer=e.storeMultisampledColorBuffer,this.storeMultisampledDepthBuffer=e.storeMultisampledDepthBuffer,this.storeMultisampledStencilBuffer=e.storeMultisampledStencilBuffer,e.depthTexture!==null)if(e.depthTexture.renderTarget===e){const t=e.depthTexture.clone();t.renderTarget=null,this.depthTexture=t}else this.depthTexture=e.depthTexture;return this.samples=e.samples,this.multiview=e.multiview,this.useArrayDepthTexture=e.useArrayDepthTexture,this}dispose(){this.dispatchEvent({type:"dispose"})}}class ys extends mg{constructor(e=1,t=1,n={}){super(e,t,n),this.isWebGLRenderTarget=!0}}class Bp extends ui{constructor(e=null,t=1,n=1,i=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:t,height:n,depth:i},this.magFilter=ci,this.minFilter=ci,this.wrapR=Bs,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}copy(e){return super.copy(e),this.wrapR=e.wrapR,this}addLayerUpdate(e){this.layerUpdates.add(e)}clearLayerUpdates(){this.layerUpdates.clear()}}class gg extends ui{constructor(e=null,t=1,n=1,i=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:t,height:n,depth:i},this.magFilter=ci,this.minFilter=ci,this.wrapR=Bs,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}copy(e){return super.copy(e),this.wrapR=e.wrapR,this}}class zt{static{zt.prototype.isMatrix4=!0}constructor(e,t,n,i,r,o,a,c,l,u,f,h,d,m,M,x){this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,t,n,i,r,o,a,c,l,u,f,h,d,m,M,x)}set(e,t,n,i,r,o,a,c,l,u,f,h,d,m,M,x){const g=this.elements;return g[0]=e,g[4]=t,g[8]=n,g[12]=i,g[1]=r,g[5]=o,g[9]=a,g[13]=c,g[2]=l,g[6]=u,g[10]=f,g[14]=h,g[3]=d,g[7]=m,g[11]=M,g[15]=x,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new zt().fromArray(this.elements)}copy(e){const t=this.elements,n=e.elements;return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],t[9]=n[9],t[10]=n[10],t[11]=n[11],t[12]=n[12],t[13]=n[13],t[14]=n[14],t[15]=n[15],this}copyPosition(e){const t=this.elements,n=e.elements;return t[12]=n[12],t[13]=n[13],t[14]=n[14],this}setFromMatrix3(e){const t=e.elements;return this.set(t[0],t[3],t[6],0,t[1],t[4],t[7],0,t[2],t[5],t[8],0,0,0,0,1),this}extractBasis(e,t,n){return this.determinantAffine()===0?(e.set(1,0,0),t.set(0,1,0),n.set(0,0,1),this):(e.setFromMatrixColumn(this,0),t.setFromMatrixColumn(this,1),n.setFromMatrixColumn(this,2),this)}makeBasis(e,t,n){return this.set(e.x,t.x,n.x,0,e.y,t.y,n.y,0,e.z,t.z,n.z,0,0,0,0,1),this}extractRotation(e){if(e.determinantAffine()===0)return this.identity();const t=this.elements,n=e.elements,i=1/Fo.setFromMatrixColumn(e,0).length(),r=1/Fo.setFromMatrixColumn(e,1).length(),o=1/Fo.setFromMatrixColumn(e,2).length();return t[0]=n[0]*i,t[1]=n[1]*i,t[2]=n[2]*i,t[3]=0,t[4]=n[4]*r,t[5]=n[5]*r,t[6]=n[6]*r,t[7]=0,t[8]=n[8]*o,t[9]=n[9]*o,t[10]=n[10]*o,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromEuler(e){const t=this.elements,n=e.x,i=e.y,r=e.z,o=Math.cos(n),a=Math.sin(n),c=Math.cos(i),l=Math.sin(i),u=Math.cos(r),f=Math.sin(r);if(e.order==="XYZ"){const h=o*u,d=o*f,m=a*u,M=a*f;t[0]=c*u,t[4]=-c*f,t[8]=l,t[1]=d+m*l,t[5]=h-M*l,t[9]=-a*c,t[2]=M-h*l,t[6]=m+d*l,t[10]=o*c}else if(e.order==="YXZ"){const h=c*u,d=c*f,m=l*u,M=l*f;t[0]=h+M*a,t[4]=m*a-d,t[8]=o*l,t[1]=o*f,t[5]=o*u,t[9]=-a,t[2]=d*a-m,t[6]=M+h*a,t[10]=o*c}else if(e.order==="ZXY"){const h=c*u,d=c*f,m=l*u,M=l*f;t[0]=h-M*a,t[4]=-o*f,t[8]=m+d*a,t[1]=d+m*a,t[5]=o*u,t[9]=M-h*a,t[2]=-o*l,t[6]=a,t[10]=o*c}else if(e.order==="ZYX"){const h=o*u,d=o*f,m=a*u,M=a*f;t[0]=c*u,t[4]=m*l-d,t[8]=h*l+M,t[1]=c*f,t[5]=M*l+h,t[9]=d*l-m,t[2]=-l,t[6]=a*c,t[10]=o*c}else if(e.order==="YZX"){const h=o*c,d=o*l,m=a*c,M=a*l;t[0]=c*u,t[4]=M-h*f,t[8]=m*f+d,t[1]=f,t[5]=o*u,t[9]=-a*u,t[2]=-l*u,t[6]=d*f+m,t[10]=h-M*f}else if(e.order==="XZY"){const h=o*c,d=o*l,m=a*c,M=a*l;t[0]=c*u,t[4]=-f,t[8]=l*u,t[1]=h*f+M,t[5]=o*u,t[9]=d*f-m,t[2]=m*f-d,t[6]=a*u,t[10]=M*f+h}return t[3]=0,t[7]=0,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromQuaternion(e){return this.compose(xg,e,_g)}lookAt(e,t,n){const i=this.elements;return Xi.subVectors(e,t),Xi.lengthSq()===0&&(Xi.z=1),Xi.normalize(),Mr.crossVectors(n,Xi),Mr.lengthSq()===0&&(Math.abs(n.z)===1?Xi.x+=1e-4:Xi.z+=1e-4,Xi.normalize(),Mr.crossVectors(n,Xi)),Mr.normalize(),Fc.crossVectors(Xi,Mr),i[0]=Mr.x,i[4]=Fc.x,i[8]=Xi.x,i[1]=Mr.y,i[5]=Fc.y,i[9]=Xi.y,i[2]=Mr.z,i[6]=Fc.z,i[10]=Xi.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const n=e.elements,i=t.elements,r=this.elements,o=n[0],a=n[4],c=n[8],l=n[12],u=n[1],f=n[5],h=n[9],d=n[13],m=n[2],M=n[6],x=n[10],g=n[14],A=n[3],I=n[7],_=n[11],w=n[15],R=i[0],D=i[4],v=i[8],L=i[12],O=i[1],z=i[5],K=i[9],ee=i[13],X=i[2],J=i[6],ce=i[10],se=i[14],Ee=i[3],ue=i[7],ge=i[11],Se=i[15];return r[0]=o*R+a*O+c*X+l*Ee,r[4]=o*D+a*z+c*J+l*ue,r[8]=o*v+a*K+c*ce+l*ge,r[12]=o*L+a*ee+c*se+l*Se,r[1]=u*R+f*O+h*X+d*Ee,r[5]=u*D+f*z+h*J+d*ue,r[9]=u*v+f*K+h*ce+d*ge,r[13]=u*L+f*ee+h*se+d*Se,r[2]=m*R+M*O+x*X+g*Ee,r[6]=m*D+M*z+x*J+g*ue,r[10]=m*v+M*K+x*ce+g*ge,r[14]=m*L+M*ee+x*se+g*Se,r[3]=A*R+I*O+_*X+w*Ee,r[7]=A*D+I*z+_*J+w*ue,r[11]=A*v+I*K+_*ce+w*ge,r[15]=A*L+I*ee+_*se+w*Se,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[4]*=e,t[8]*=e,t[12]*=e,t[1]*=e,t[5]*=e,t[9]*=e,t[13]*=e,t[2]*=e,t[6]*=e,t[10]*=e,t[14]*=e,t[3]*=e,t[7]*=e,t[11]*=e,t[15]*=e,this}determinant(){const e=this.elements,t=e[0],n=e[4],i=e[8],r=e[12],o=e[1],a=e[5],c=e[9],l=e[13],u=e[2],f=e[6],h=e[10],d=e[14],m=e[3],M=e[7],x=e[11],g=e[15],A=c*d-l*h,I=a*d-l*f,_=a*h-c*f,w=o*d-l*u,R=o*h-c*u,D=o*f-a*u;return t*(M*A-x*I+g*_)-n*(m*A-x*w+g*R)+i*(m*I-M*w+g*D)-r*(m*_-M*R+x*D)}determinantAffine(){const e=this.elements,t=e[0],n=e[4],i=e[8],r=e[1],o=e[5],a=e[9],c=e[2],l=e[6],u=e[10];return t*(o*u-a*l)-n*(r*u-a*c)+i*(r*l-o*c)}transpose(){const e=this.elements;let t;return t=e[1],e[1]=e[4],e[4]=t,t=e[2],e[2]=e[8],e[8]=t,t=e[6],e[6]=e[9],e[9]=t,t=e[3],e[3]=e[12],e[12]=t,t=e[7],e[7]=e[13],e[13]=t,t=e[11],e[11]=e[14],e[14]=t,this}setPosition(e,t,n){const i=this.elements;return e.isVector3?(i[12]=e.x,i[13]=e.y,i[14]=e.z):(i[12]=e,i[13]=t,i[14]=n),this}invert(){const e=this.elements,t=e[0],n=e[1],i=e[2],r=e[3],o=e[4],a=e[5],c=e[6],l=e[7],u=e[8],f=e[9],h=e[10],d=e[11],m=e[12],M=e[13],x=e[14],g=e[15],A=t*a-n*o,I=t*c-i*o,_=t*l-r*o,w=n*c-i*a,R=n*l-r*a,D=i*l-r*c,v=u*M-f*m,L=u*x-h*m,O=u*g-d*m,z=f*x-h*M,K=f*g-d*M,ee=h*g-d*x,X=A*ee-I*K+_*z+w*O-R*L+D*v;if(X===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const J=1/X;return e[0]=(a*ee-c*K+l*z)*J,e[1]=(i*K-n*ee-r*z)*J,e[2]=(M*D-x*R+g*w)*J,e[3]=(h*R-f*D-d*w)*J,e[4]=(c*O-o*ee-l*L)*J,e[5]=(t*ee-i*O+r*L)*J,e[6]=(x*_-m*D-g*I)*J,e[7]=(u*D-h*_+d*I)*J,e[8]=(o*K-a*O+l*v)*J,e[9]=(n*O-t*K-r*v)*J,e[10]=(m*R-M*_+g*A)*J,e[11]=(f*_-u*R-d*A)*J,e[12]=(a*L-o*z-c*v)*J,e[13]=(t*z-n*L+i*v)*J,e[14]=(M*I-m*w-x*A)*J,e[15]=(u*w-f*I+h*A)*J,this}scale(e){const t=this.elements,n=e.x,i=e.y,r=e.z;return t[0]*=n,t[4]*=i,t[8]*=r,t[1]*=n,t[5]*=i,t[9]*=r,t[2]*=n,t[6]*=i,t[10]*=r,t[3]*=n,t[7]*=i,t[11]*=r,this}getMaxScaleOnAxis(){const e=this.elements,t=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],n=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],i=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(t,n,i))}makeTranslation(e,t,n){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,t,0,0,1,n,0,0,0,1),this}makeRotationX(e){const t=Math.cos(e),n=Math.sin(e);return this.set(1,0,0,0,0,t,-n,0,0,n,t,0,0,0,0,1),this}makeRotationY(e){const t=Math.cos(e),n=Math.sin(e);return this.set(t,0,n,0,0,1,0,0,-n,0,t,0,0,0,0,1),this}makeRotationZ(e){const t=Math.cos(e),n=Math.sin(e);return this.set(t,-n,0,0,n,t,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,t){const n=Math.cos(t),i=Math.sin(t),r=1-n,o=e.x,a=e.y,c=e.z,l=r*o,u=r*a;return this.set(l*o+n,l*a-i*c,l*c+i*a,0,l*a+i*c,u*a+n,u*c-i*o,0,l*c-i*a,u*c+i*o,r*c*c+n,0,0,0,0,1),this}makeScale(e,t,n){return this.set(e,0,0,0,0,t,0,0,0,0,n,0,0,0,0,1),this}makeShear(e,t,n,i,r,o){return this.set(1,n,r,0,e,1,o,0,t,i,1,0,0,0,0,1),this}compose(e,t,n){const i=this.elements,r=t._x,o=t._y,a=t._z,c=t._w,l=r+r,u=o+o,f=a+a,h=r*l,d=r*u,m=r*f,M=o*u,x=o*f,g=a*f,A=c*l,I=c*u,_=c*f,w=n.x,R=n.y,D=n.z;return i[0]=(1-(M+g))*w,i[1]=(d+_)*w,i[2]=(m-I)*w,i[3]=0,i[4]=(d-_)*R,i[5]=(1-(h+g))*R,i[6]=(x+A)*R,i[7]=0,i[8]=(m+I)*D,i[9]=(x-A)*D,i[10]=(1-(h+M))*D,i[11]=0,i[12]=e.x,i[13]=e.y,i[14]=e.z,i[15]=1,this}decompose(e,t,n){const i=this.elements;e.x=i[12],e.y=i[13],e.z=i[14];const r=this.determinantAffine();if(r===0)return n.set(1,1,1),t.identity(),this;let o=Fo.set(i[0],i[1],i[2]).length();const a=Fo.set(i[4],i[5],i[6]).length(),c=Fo.set(i[8],i[9],i[10]).length();r<0&&(o=-o),ms.copy(this);const l=1/o,u=1/a,f=1/c;return ms.elements[0]*=l,ms.elements[1]*=l,ms.elements[2]*=l,ms.elements[4]*=u,ms.elements[5]*=u,ms.elements[6]*=u,ms.elements[8]*=f,ms.elements[9]*=f,ms.elements[10]*=f,t.setFromRotationMatrix(ms),n.x=o,n.y=a,n.z=c,this}makePerspective(e,t,n,i,r,o,a=ks,c=!1){const l=this.elements,u=2*r/(t-e),f=2*r/(n-i),h=(t+e)/(t-e),d=(n+i)/(n-i);let m,M;if(c)m=r/(o-r),M=o*r/(o-r);else if(a===ks)m=-(o+r)/(o-r),M=-2*o*r/(o-r);else if(a===ac)m=-o/(o-r),M=-o*r/(o-r);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+a);return l[0]=u,l[4]=0,l[8]=h,l[12]=0,l[1]=0,l[5]=f,l[9]=d,l[13]=0,l[2]=0,l[6]=0,l[10]=m,l[14]=M,l[3]=0,l[7]=0,l[11]=-1,l[15]=0,this}makeOrthographic(e,t,n,i,r,o,a=ks,c=!1){const l=this.elements,u=2/(t-e),f=2/(n-i),h=-(t+e)/(t-e),d=-(n+i)/(n-i);let m,M;if(c)m=1/(o-r),M=o/(o-r);else if(a===ks)m=-2/(o-r),M=-(o+r)/(o-r);else if(a===ac)m=-1/(o-r),M=-r/(o-r);else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+a);return l[0]=u,l[4]=0,l[8]=0,l[12]=h,l[1]=0,l[5]=f,l[9]=0,l[13]=d,l[2]=0,l[6]=0,l[10]=m,l[14]=M,l[3]=0,l[7]=0,l[11]=0,l[15]=1,this}equals(e){const t=this.elements,n=e.elements;for(let i=0;i<16;i++)if(t[i]!==n[i])return!1;return!0}fromArray(e,t=0){for(let n=0;n<16;n++)this.elements[n]=e[n+t];return this}toArray(e=[],t=0){const n=this.elements;return e[t]=n[0],e[t+1]=n[1],e[t+2]=n[2],e[t+3]=n[3],e[t+4]=n[4],e[t+5]=n[5],e[t+6]=n[6],e[t+7]=n[7],e[t+8]=n[8],e[t+9]=n[9],e[t+10]=n[10],e[t+11]=n[11],e[t+12]=n[12],e[t+13]=n[13],e[t+14]=n[14],e[t+15]=n[15],e}}const Fo=new V,ms=new zt,xg=new V(0,0,0),_g=new V(1,1,1),Mr=new V,Fc=new V,Xi=new V,Ff=new zt,Of=new ni;class Xs{constructor(e=0,t=0,n=0,i=Xs.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=t,this._z=n,this._order=i}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,t,n,i=this._order){return this._x=e,this._y=t,this._z=n,this._order=i,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,t=this._order,n=!0){const i=e.elements,r=i[0],o=i[4],a=i[8],c=i[1],l=i[5],u=i[9],f=i[2],h=i[6],d=i[10];switch(t){case"XYZ":this._y=Math.asin(Jt(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(-u,d),this._z=Math.atan2(-o,r)):(this._x=Math.atan2(h,l),this._z=0);break;case"YXZ":this._x=Math.asin(-Jt(u,-1,1)),Math.abs(u)<.9999999?(this._y=Math.atan2(a,d),this._z=Math.atan2(c,l)):(this._y=Math.atan2(-f,r),this._z=0);break;case"ZXY":this._x=Math.asin(Jt(h,-1,1)),Math.abs(h)<.9999999?(this._y=Math.atan2(-f,d),this._z=Math.atan2(-o,l)):(this._y=0,this._z=Math.atan2(c,r));break;case"ZYX":this._y=Math.asin(-Jt(f,-1,1)),Math.abs(f)<.9999999?(this._x=Math.atan2(h,d),this._z=Math.atan2(c,r)):(this._x=0,this._z=Math.atan2(-o,l));break;case"YZX":this._z=Math.asin(Jt(c,-1,1)),Math.abs(c)<.9999999?(this._x=Math.atan2(-u,l),this._y=Math.atan2(-f,r)):(this._x=0,this._y=Math.atan2(a,d));break;case"XZY":this._z=Math.asin(-Jt(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(h,l),this._y=Math.atan2(a,r)):(this._x=Math.atan2(-u,d),this._y=0);break;default:yt("Euler: .setFromRotationMatrix() encountered an unknown order: "+t)}return this._order=t,n===!0&&this._onChangeCallback(),this}setFromQuaternion(e,t,n){return Ff.makeRotationFromQuaternion(e),this.setFromRotationMatrix(Ff,t,n)}setFromVector3(e,t=this._order){return this.set(e.x,e.y,e.z,t)}reorder(e){return Of.setFromEuler(this),this.setFromQuaternion(Of,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}Xs.DEFAULT_ORDER="XYZ";class kp{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}}let vg=0;const Bf=new V,Oo=new ni,Js=new zt,Oc=new V,Na=new V,Mg=new V,yg=new ni,kf=new V(1,0,0),zf=new V(0,1,0),Hf=new V(0,0,1),Vf={type:"added"},Sg={type:"removed"},Bo={type:"childadded",child:null},nu={type:"childremoved",child:null};class On extends fo{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:vg++}),this.uuid=rs(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=On.DEFAULT_UP.clone();const e=new V,t=new Xs,n=new ni,i=new V(1,1,1);function r(){n.setFromEuler(t,!1)}function o(){t.setFromQuaternion(n,void 0,!1)}t._onChange(r),n._onChange(o),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:t},quaternion:{configurable:!0,enumerable:!0,value:n},scale:{configurable:!0,enumerable:!0,value:i},modelViewMatrix:{value:new zt},normalMatrix:{value:new Gt}}),this.matrix=new zt,this.matrixWorld=new zt,this.matrixAutoUpdate=On.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=On.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new kp,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.customDepthMaterial=void 0,this.customDistanceMaterial=void 0,this.static=!1,this.userData={},this.pivot=null}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,t){this.quaternion.setFromAxisAngle(e,t)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,t){return Oo.setFromAxisAngle(e,t),this.quaternion.multiply(Oo),this}rotateOnWorldAxis(e,t){return Oo.setFromAxisAngle(e,t),this.quaternion.premultiply(Oo),this}rotateX(e){return this.rotateOnAxis(kf,e)}rotateY(e){return this.rotateOnAxis(zf,e)}rotateZ(e){return this.rotateOnAxis(Hf,e)}translateOnAxis(e,t){return Bf.copy(e).applyQuaternion(this.quaternion),this.position.add(Bf.multiplyScalar(t)),this}translateX(e){return this.translateOnAxis(kf,e)}translateY(e){return this.translateOnAxis(zf,e)}translateZ(e){return this.translateOnAxis(Hf,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(Js.copy(this.matrixWorld).invert())}lookAt(e,t,n){e.isVector3?Oc.copy(e):Oc.set(e,t,n);const i=this.parent;this.updateWorldMatrix(!0,!1),Na.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?Js.lookAt(Na,Oc,this.up):Js.lookAt(Oc,Na,this.up),this.quaternion.setFromRotationMatrix(Js),i&&(Js.extractRotation(i.matrixWorld),Oo.setFromRotationMatrix(Js),this.quaternion.premultiply(Oo.invert()))}add(e){if(arguments.length>1){for(let t=0;t<arguments.length;t++)this.add(arguments[t]);return this}return e===this?(kt("Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.removeFromParent(),e.parent=this,this.children.push(e),e.dispatchEvent(Vf),Bo.child=e,this.dispatchEvent(Bo),Bo.child=null):kt("Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.remove(arguments[n]);return this}const t=this.children.indexOf(e);return t!==-1&&(e.parent=null,this.children.splice(t,1),e.dispatchEvent(Sg),nu.child=e,this.dispatchEvent(nu),nu.child=null),this}removeFromParent(){const e=this.parent;return e!==null&&e.remove(this),this}clear(){return this.remove(...this.children)}attach(e){return this.updateWorldMatrix(!0,!1),Js.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),Js.multiply(e.parent.matrixWorld)),e.applyMatrix4(Js),e.removeFromParent(),e.parent=this,this.children.push(e),e.updateWorldMatrix(!1,!0),e.dispatchEvent(Vf),Bo.child=e,this.dispatchEvent(Bo),Bo.child=null,this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,t){if(this[e]===t)return this;for(let n=0,i=this.children.length;n<i;n++){const o=this.children[n].getObjectByProperty(e,t);if(o!==void 0)return o}}getObjectsByProperty(e,t,n=[]){this[e]===t&&n.push(this);const i=this.children;for(let r=0,o=i.length;r<o;r++)i[r].getObjectsByProperty(e,t,n);return n}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Na,e,Mg),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Na,yg,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);const t=this.matrixWorld.elements;return e.set(t[8],t[9],t[10]).normalize()}raycast(){}intersectsFrustum(){}traverse(e){e(this);const t=this.children;for(let n=0,i=t.length;n<i;n++)t[n].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);const t=this.children;for(let n=0,i=t.length;n<i;n++)t[n].traverseVisible(e)}traverseAncestors(e){const t=this.parent;t!==null&&(e(t),t.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale);const e=this.pivot;if(e!==null){const t=e.x,n=e.y,i=e.z,r=this.matrix.elements;r[12]+=t-r[0]*t-r[4]*n-r[8]*i,r[13]+=n-r[1]*t-r[5]*n-r[9]*i,r[14]+=i-r[2]*t-r[6]*n-r[10]*i}this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,e=!0);const t=this.children;for(let n=0,i=t.length;n<i;n++)t[n].updateMatrixWorld(e)}updateWorldMatrix(e,t,n=!1){const i=this.parent;if(e===!0&&i!==null&&i.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||n)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,n=!0),t===!0){const r=this.children;for(let o=0,a=r.length;o<a;o++)r[o].updateWorldMatrix(!1,!0,n)}}toJSON(e){const t=e===void 0||typeof e=="string",n={};t&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},n.metadata={version:4.7,type:"Object",generator:"Object3D.toJSON"});const i={};i.uuid=this.uuid,i.type=this.type,i.name=this.name,i.castShadow=this.castShadow,i.receiveShadow=this.receiveShadow,i.visible=this.visible,i.frustumCulled=this.frustumCulled,i.renderOrder=this.renderOrder,i.static=this.static,i.matrixAutoUpdate=this.matrixAutoUpdate,Object.keys(this.userData).length>0&&(i.userData=this.userData),i.layers=this.layers.mask,i.matrix=this.matrix.toArray(),i.up=this.up.toArray(),this.pivot!==null&&(i.pivot=this.pivot.toArray()),this.morphTargetDictionary!==void 0&&(i.morphTargetDictionary=Object.assign({},this.morphTargetDictionary)),this.morphTargetInfluences!==void 0&&(i.morphTargetInfluences=this.morphTargetInfluences.slice()),this.isInstancedMesh&&(i.type="InstancedMesh",i.count=this.count,i.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(i.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(i.type="BatchedMesh",i.perObjectFrustumCulled=this.perObjectFrustumCulled,i.sortObjects=this.sortObjects,i.drawRanges=this._drawRanges,i.reservedRanges=this._reservedRanges,i.geometryInfo=this._geometryInfo.map(a=>({...a,boundingBox:a.boundingBox?a.boundingBox.toJSON():void 0,boundingSphere:a.boundingSphere?a.boundingSphere.toJSON():void 0})),i.instanceInfo=this._instanceInfo.map(a=>({...a})),i.availableInstanceIds=this._availableInstanceIds.slice(),i.availableGeometryIds=this._availableGeometryIds.slice(),i.nextIndexStart=this._nextIndexStart,i.nextVertexStart=this._nextVertexStart,i.geometryCount=this._geometryCount,i.maxInstanceCount=this._maxInstanceCount,i.maxVertexCount=this._maxVertexCount,i.maxIndexCount=this._maxIndexCount,i.geometryInitialized=this._geometryInitialized,i.matricesTexture=this._matricesTexture.toJSON(e),i.indirectTexture=this._indirectTexture.toJSON(e),this._colorsTexture!==null&&(i.colorsTexture=this._colorsTexture.toJSON(e)),this.boundingSphere!==null&&(i.boundingSphere=this.boundingSphere.toJSON()),this.boundingBox!==null&&(i.boundingBox=this.boundingBox.toJSON()));function r(a,c){return a[c.uuid]===void 0&&(a[c.uuid]=c.toJSON(e)),c.uuid}if(this.isScene)this.background&&(this.background.isColor?i.background=this.background.toJSON():this.background.isTexture&&(i.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(i.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){i.geometry=r(e.geometries,this.geometry);const a=this.geometry.parameters;if(a!==void 0&&a.shapes!==void 0){const c=a.shapes;if(Array.isArray(c))for(let l=0,u=c.length;l<u;l++){const f=c[l];r(e.shapes,f)}else r(e.shapes,c)}}if(this.isSkinnedMesh&&(i.bindMode=this.bindMode,i.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(r(e.skeletons,this.skeleton),i.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const a=[];for(let c=0,l=this.material.length;c<l;c++)a.push(r(e.materials,this.material[c]));i.material=a}else i.material=r(e.materials,this.material);if(this.children.length>0){i.children=[];for(let a=0;a<this.children.length;a++)i.children.push(this.children[a].toJSON(e).object)}if(this.animations.length>0){i.animations=[];for(let a=0;a<this.animations.length;a++){const c=this.animations[a];i.animations.push(r(e.animations,c))}}if(t){const a=o(e.geometries),c=o(e.materials),l=o(e.textures),u=o(e.images),f=o(e.shapes),h=o(e.skeletons),d=o(e.animations),m=o(e.nodes);a.length>0&&(n.geometries=a),c.length>0&&(n.materials=c),l.length>0&&(n.textures=l),u.length>0&&(n.images=u),f.length>0&&(n.shapes=f),h.length>0&&(n.skeletons=h),d.length>0&&(n.animations=d),m.length>0&&(n.nodes=m)}return n.object=i,n;function o(a){const c=[];for(const l in a){const u=a[l];delete u.metadata,c.push(u)}return c}}clone(e){return new this.constructor().copy(this,e)}copy(e,t=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.pivot=e.pivot!==null?e.pivot.clone():null,this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.static=e.static,this.animations=e.animations.slice(),this.userData=JSON.parse(JSON.stringify(e.userData)),t===!0)for(let n=0;n<e.children.length;n++){const i=e.children[n];this.add(i.clone())}return this}dispose(){this.dispatchEvent({type:"dispose"})}}On.DEFAULT_UP=new V(0,1,0);On.DEFAULT_MATRIX_AUTO_UPDATE=!0;On.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;let Vn=class extends On{constructor(){super(),this.isGroup=!0,this.type="Group"}};const bg={type:"move"};class iu{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new Vn,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new Vn,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new V,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new V),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new Vn,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new V,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new V,this._grip.eventsEnabled=!1),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){const t=this._hand;if(t)for(const n of e.hand.values())this._getHandJoint(t,n)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,t,n){let i=null,r=null,o=null;const a=this._targetRay,c=this._grip,l=this._hand;if(e&&t.session.visibilityState!=="visible-blurred"){if(l&&e.hand){o=!0;for(const M of e.hand.values()){const x=t.getJointPose(M,n),g=this._getHandJoint(l,M);x!==null&&(g.matrix.fromArray(x.transform.matrix),g.matrix.decompose(g.position,g.rotation,g.scale),g.matrixWorldNeedsUpdate=!0,g.jointRadius=x.radius),g.visible=x!==null}const u=l.joints["index-finger-tip"],f=l.joints["thumb-tip"],h=u.position.distanceTo(f.position),d=.02,m=.005;l.inputState.pinching&&h>d+m?(l.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!l.inputState.pinching&&h<=d-m&&(l.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else c!==null&&e.gripSpace&&(r=t.getPose(e.gripSpace,n),r!==null&&(c.matrix.fromArray(r.transform.matrix),c.matrix.decompose(c.position,c.rotation,c.scale),c.matrixWorldNeedsUpdate=!0,r.linearVelocity?(c.hasLinearVelocity=!0,c.linearVelocity.copy(r.linearVelocity)):c.hasLinearVelocity=!1,r.angularVelocity?(c.hasAngularVelocity=!0,c.angularVelocity.copy(r.angularVelocity)):c.hasAngularVelocity=!1,c.eventsEnabled&&c.dispatchEvent({type:"gripUpdated",data:e,target:this})));a!==null&&(i=t.getPose(e.targetRaySpace,n),i===null&&r!==null&&(i=r),i!==null&&(a.matrix.fromArray(i.transform.matrix),a.matrix.decompose(a.position,a.rotation,a.scale),a.matrixWorldNeedsUpdate=!0,i.linearVelocity?(a.hasLinearVelocity=!0,a.linearVelocity.copy(i.linearVelocity)):a.hasLinearVelocity=!1,i.angularVelocity?(a.hasAngularVelocity=!0,a.angularVelocity.copy(i.angularVelocity)):a.hasAngularVelocity=!1,this.dispatchEvent(bg)))}return a!==null&&(a.visible=i!==null),c!==null&&(c.visible=r!==null),l!==null&&(l.visible=o!==null),this}_getHandJoint(e,t){if(e.joints[t.jointName]===void 0){const n=new Vn;n.matrixAutoUpdate=!1,n.visible=!1,e.joints[t.jointName]=n,e.add(n)}return e.joints[t.jointName]}}const zp={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},yr={h:0,s:0,l:0},Bc={h:0,s:0,l:0};function su(s,e,t){return t<0&&(t+=1),t>1&&(t-=1),t<1/6?s+(e-s)*6*t:t<1/2?e:t<2/3?s+(e-s)*6*(2/3-t):s}class it{constructor(e,t,n){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,t,n)}set(e,t,n){if(t===void 0&&n===void 0){const i=e;i&&i.isColor?this.copy(i):typeof i=="number"?this.setHex(i):typeof i=="string"&&this.setStyle(i)}else this.setRGB(e,t,n);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,t=Xn){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,Qt.colorSpaceToWorking(this,t),this}setRGB(e,t,n,i=Qt.workingColorSpace){return this.r=e,this.g=t,this.b=n,Qt.colorSpaceToWorking(this,i),this}setHSL(e,t,n,i=Qt.workingColorSpace){if(e=jh(e,1),t=Jt(t,0,1),n=Jt(n,0,1),t===0)this.r=this.g=this.b=n;else{const r=n<=.5?n*(1+t):n+t-n*t,o=2*n-r;this.r=su(o,r,e+1/3),this.g=su(o,r,e),this.b=su(o,r,e-1/3)}return Qt.colorSpaceToWorking(this,i),this}setStyle(e,t=Xn){function n(r){r!==void 0&&parseFloat(r)<1&&yt("Color: Alpha component of "+e+" will be ignored.")}let i;if(i=/^(\w+)\(([^\)]*)\)/.exec(e)){let r;const o=i[1],a=i[2];switch(o){case"rgb":case"rgba":if(r=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return n(r[4]),this.setRGB(Math.min(255,parseInt(r[1],10))/255,Math.min(255,parseInt(r[2],10))/255,Math.min(255,parseInt(r[3],10))/255,t);if(r=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return n(r[4]),this.setRGB(Math.min(100,parseInt(r[1],10))/100,Math.min(100,parseInt(r[2],10))/100,Math.min(100,parseInt(r[3],10))/100,t);break;case"hsl":case"hsla":if(r=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return n(r[4]),this.setHSL(parseFloat(r[1])/360,parseFloat(r[2])/100,parseFloat(r[3])/100,t);break;default:yt("Color: Unknown color model "+e)}}else if(i=/^\#([A-Fa-f\d]+)$/.exec(e)){const r=i[1],o=r.length;if(o===3)return this.setRGB(parseInt(r.charAt(0),16)/15,parseInt(r.charAt(1),16)/15,parseInt(r.charAt(2),16)/15,t);if(o===6)return this.setHex(parseInt(r,16),t);yt("Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,t);return this}setColorName(e,t=Xn){const n=zp[e.toLowerCase()];return n!==void 0?this.setHex(n,t):yt("Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=ar(e.r),this.g=ar(e.g),this.b=ar(e.b),this}copyLinearToSRGB(e){return this.r=na(e.r),this.g=na(e.g),this.b=na(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=Xn){return Qt.workingToColorSpace(wi.copy(this),e),Math.round(Jt(wi.r*255,0,255))*65536+Math.round(Jt(wi.g*255,0,255))*256+Math.round(Jt(wi.b*255,0,255))}getHexString(e=Xn){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,t=Qt.workingColorSpace){Qt.workingToColorSpace(wi.copy(this),t);const n=wi.r,i=wi.g,r=wi.b,o=Math.max(n,i,r),a=Math.min(n,i,r);let c,l;const u=(a+o)/2;if(a===o)c=0,l=0;else{const f=o-a;switch(l=u<=.5?f/(o+a):f/(2-o-a),o){case n:c=(i-r)/f+(i<r?6:0);break;case i:c=(r-n)/f+2;break;case r:c=(n-i)/f+4;break}c/=6}return e.h=c,e.s=l,e.l=u,e}getRGB(e,t=Qt.workingColorSpace){return Qt.workingToColorSpace(wi.copy(this),t),e.r=wi.r,e.g=wi.g,e.b=wi.b,e}getStyle(e=Xn){Qt.workingToColorSpace(wi.copy(this),e);const t=wi.r,n=wi.g,i=wi.b;return e!==Xn?`color(${e} ${t.toFixed(3)} ${n.toFixed(3)} ${i.toFixed(3)})`:`rgb(${Math.round(t*255)},${Math.round(n*255)},${Math.round(i*255)})`}offsetHSL(e,t,n){return this.getHSL(yr),this.setHSL(yr.h+e,yr.s+t,yr.l+n)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,t){return this.r=e.r+t.r,this.g=e.g+t.g,this.b=e.b+t.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,t){return this.r+=(e.r-this.r)*t,this.g+=(e.g-this.g)*t,this.b+=(e.b-this.b)*t,this}lerpColors(e,t,n){return this.r=e.r+(t.r-e.r)*n,this.g=e.g+(t.g-e.g)*n,this.b=e.b+(t.b-e.b)*n,this}lerpHSL(e,t){this.getHSL(yr),e.getHSL(Bc);const n=Qa(yr.h,Bc.h,t),i=Qa(yr.s,Bc.s,t),r=Qa(yr.l,Bc.l,t);return this.setHSL(n,i,r),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){const t=this.r,n=this.g,i=this.b,r=e.elements;return this.r=r[0]*t+r[3]*n+r[6]*i,this.g=r[1]*t+r[4]*n+r[7]*i,this.b=r[2]*t+r[5]*n+r[8]*i,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,t=0){return this.r=e[t],this.g=e[t+1],this.b=e[t+2],this}toArray(e=[],t=0){return e[t]=this.r,e[t+1]=this.g,e[t+2]=this.b,e}fromBufferAttribute(e,t){return this.r=e.getX(t),this.g=e.getY(t),this.b=e.getZ(t),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const wi=new it;it.NAMES=zp;class Zh{constructor(e,t=1,n=1e3){this.isFog=!0,this.name="",this.color=new it(e),this.near=t,this.far=n}clone(){return new Zh(this.color,this.near,this.far)}toJSON(){return{type:"Fog",name:this.name,color:this.color.getHex(),near:this.near,far:this.far}}}class Gf extends On{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new Xs,this.environmentIntensity=1,this.environmentRotation=new Xs,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,t){return super.copy(e,t),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,this.backgroundRotation.copy(e.backgroundRotation),this.environmentIntensity=e.environmentIntensity,this.environmentRotation.copy(e.environmentRotation),e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){const t=super.toJSON(e);return this.fog!==null&&(t.object.fog=this.fog.toJSON()),t.object.backgroundBlurriness=this.backgroundBlurriness,t.object.backgroundIntensity=this.backgroundIntensity,t.object.backgroundRotation=this.backgroundRotation.toArray(),t.object.environmentIntensity=this.environmentIntensity,t.object.environmentRotation=this.environmentRotation.toArray(),t}}const gs=new V,Qs=new V,ru=new V,er=new V,ko=new V,zo=new V,Wf=new V,ou=new V,au=new V,cu=new V,lu=new Cn,uu=new Cn,hu=new Cn;class Ms{constructor(e=new V,t=new V,n=new V){this.a=e,this.b=t,this.c=n}static getNormal(e,t,n,i){i.subVectors(n,t),gs.subVectors(e,t),i.cross(gs);const r=i.lengthSq();return r>0?i.multiplyScalar(1/Math.sqrt(r)):i.set(0,0,0)}static getBarycoord(e,t,n,i,r){gs.subVectors(i,t),Qs.subVectors(n,t),ru.subVectors(e,t);const o=gs.dot(gs),a=gs.dot(Qs),c=gs.dot(ru),l=Qs.dot(Qs),u=Qs.dot(ru),f=o*l-a*a;if(f===0)return r.set(0,0,0),null;const h=1/f,d=(l*c-a*u)*h,m=(o*u-a*c)*h;return r.set(1-d-m,m,d)}static containsPoint(e,t,n,i){return this.getBarycoord(e,t,n,i,er)===null?!1:er.x>=0&&er.y>=0&&er.x+er.y<=1}static getInterpolation(e,t,n,i,r,o,a,c){return this.getBarycoord(e,t,n,i,er)===null?(c.x=0,c.y=0,"z"in c&&(c.z=0),"w"in c&&(c.w=0),null):(c.setScalar(0),c.addScaledVector(r,er.x),c.addScaledVector(o,er.y),c.addScaledVector(a,er.z),c)}static getInterpolatedAttribute(e,t,n,i,r,o){return lu.setScalar(0),uu.setScalar(0),hu.setScalar(0),lu.fromBufferAttribute(e,t),uu.fromBufferAttribute(e,n),hu.fromBufferAttribute(e,i),o.setScalar(0),o.addScaledVector(lu,r.x),o.addScaledVector(uu,r.y),o.addScaledVector(hu,r.z),o}static isFrontFacing(e,t,n,i){return gs.subVectors(n,t),Qs.subVectors(e,t),gs.cross(Qs).dot(i)<0}set(e,t,n){return this.a.copy(e),this.b.copy(t),this.c.copy(n),this}setFromPointsAndIndices(e,t,n,i){return this.a.copy(e[t]),this.b.copy(e[n]),this.c.copy(e[i]),this}setFromAttributeAndIndices(e,t,n,i){return this.a.fromBufferAttribute(e,t),this.b.fromBufferAttribute(e,n),this.c.fromBufferAttribute(e,i),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return gs.subVectors(this.c,this.b),Qs.subVectors(this.a,this.b),gs.cross(Qs).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return Ms.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,t){return Ms.getBarycoord(e,this.a,this.b,this.c,t)}getInterpolation(e,t,n,i,r){return Ms.getInterpolation(e,this.a,this.b,this.c,t,n,i,r)}containsPoint(e){return Ms.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return Ms.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,t){const n=this.a,i=this.b,r=this.c;let o,a;ko.subVectors(i,n),zo.subVectors(r,n),ou.subVectors(e,n);const c=ko.dot(ou),l=zo.dot(ou);if(c<=0&&l<=0)return t.copy(n);au.subVectors(e,i);const u=ko.dot(au),f=zo.dot(au);if(u>=0&&f<=u)return t.copy(i);const h=c*f-u*l;if(h<=0&&c>=0&&u<=0)return o=c/(c-u),t.copy(n).addScaledVector(ko,o);cu.subVectors(e,r);const d=ko.dot(cu),m=zo.dot(cu);if(m>=0&&d<=m)return t.copy(r);const M=d*l-c*m;if(M<=0&&l>=0&&m<=0)return a=l/(l-m),t.copy(n).addScaledVector(zo,a);const x=u*m-d*f;if(x<=0&&f-u>=0&&d-m>=0)return Wf.subVectors(r,i),a=(f-u)/(f-u+(d-m)),t.copy(i).addScaledVector(Wf,a);const g=1/(x+M+h);return o=M*g,a=h*g,t.copy(n).addScaledVector(ko,o).addScaledVector(zo,a)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}}class os{constructor(e=new V(1/0,1/0,1/0),t=new V(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=t}set(e,t){return this.min.copy(e),this.max.copy(t),this}setFromArray(e){this.makeEmpty();for(let t=0,n=e.length;t<n;t+=3)this.expandByPoint(xs.fromArray(e,t));return this}setFromBufferAttribute(e){this.makeEmpty();for(let t=0,n=e.count;t<n;t++)this.expandByPoint(xs.fromBufferAttribute(e,t));return this}setFromPoints(e){this.makeEmpty();for(let t=0,n=e.length;t<n;t++)this.expandByPoint(e[t]);return this}setFromCenterAndSize(e,t){const n=xs.copy(t).multiplyScalar(.5);return this.min.copy(e).sub(n),this.max.copy(e).add(n),this}setFromObject(e,t=!1){return this.makeEmpty(),this.expandByObject(e,t)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,t=!1){e.updateWorldMatrix(!1,!1);const n=e.geometry;if(n!==void 0){const r=n.getAttribute("position");if(t===!0&&r!==void 0&&e.isInstancedMesh!==!0)for(let o=0,a=r.count;o<a;o++)e.isMesh===!0?e.getVertexPosition(o,xs):xs.fromBufferAttribute(r,o),xs.applyMatrix4(e.matrixWorld),this.expandByPoint(xs);else e.boundingBox!==void 0?(e.boundingBox===null&&e.computeBoundingBox(),kc.copy(e.boundingBox)):(n.boundingBox===null&&n.computeBoundingBox(),kc.copy(n.boundingBox)),kc.applyMatrix4(e.matrixWorld),this.union(kc)}const i=e.children;for(let r=0,o=i.length;r<o;r++)this.expandByObject(i[r],t);return this}containsPoint(e){return e.x>=this.min.x&&e.x<=this.max.x&&e.y>=this.min.y&&e.y<=this.max.y&&e.z>=this.min.z&&e.z<=this.max.z}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,t){return t.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return e.max.x>=this.min.x&&e.min.x<=this.max.x&&e.max.y>=this.min.y&&e.min.y<=this.max.y&&e.max.z>=this.min.z&&e.min.z<=this.max.z}intersectsSphere(e){return this.clampPoint(e.center,xs),xs.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let t,n;return e.normal.x>0?(t=e.normal.x*this.min.x,n=e.normal.x*this.max.x):(t=e.normal.x*this.max.x,n=e.normal.x*this.min.x),e.normal.y>0?(t+=e.normal.y*this.min.y,n+=e.normal.y*this.max.y):(t+=e.normal.y*this.max.y,n+=e.normal.y*this.min.y),e.normal.z>0?(t+=e.normal.z*this.min.z,n+=e.normal.z*this.max.z):(t+=e.normal.z*this.max.z,n+=e.normal.z*this.min.z),t<=-e.constant&&n>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(Da),zc.subVectors(this.max,Da),Ho.subVectors(e.a,Da),Vo.subVectors(e.b,Da),Go.subVectors(e.c,Da),Sr.subVectors(Vo,Ho),br.subVectors(Go,Vo),Yr.subVectors(Ho,Go);let t=[0,-Sr.z,Sr.y,0,-br.z,br.y,0,-Yr.z,Yr.y,Sr.z,0,-Sr.x,br.z,0,-br.x,Yr.z,0,-Yr.x,-Sr.y,Sr.x,0,-br.y,br.x,0,-Yr.y,Yr.x,0];return!fu(t,Ho,Vo,Go,zc)||(t=[1,0,0,0,1,0,0,0,1],!fu(t,Ho,Vo,Go,zc))?!1:(Hc.crossVectors(Sr,br),t=[Hc.x,Hc.y,Hc.z],fu(t,Ho,Vo,Go,zc))}clampPoint(e,t){return t.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,xs).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(xs).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(tr[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),tr[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),tr[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),tr[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),tr[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),tr[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),tr[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),tr[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(tr),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}toJSON(){return{min:this.min.toArray(),max:this.max.toArray()}}fromJSON(e){return this.min.fromArray(e.min),this.max.fromArray(e.max),this}}const tr=[new V,new V,new V,new V,new V,new V,new V,new V],xs=new V,kc=new os,Ho=new V,Vo=new V,Go=new V,Sr=new V,br=new V,Yr=new V,Da=new V,zc=new V,Hc=new V,Kr=new V;function fu(s,e,t,n,i){for(let r=0,o=s.length-3;r<=o;r+=3){Kr.fromArray(s,r);const a=i.x*Math.abs(Kr.x)+i.y*Math.abs(Kr.y)+i.z*Math.abs(Kr.z),c=e.dot(Kr),l=t.dot(Kr),u=n.dot(Kr);if(Math.max(-Math.max(c,l,u),Math.min(c,l,u))>a)return!1}return!0}const ti=new V,Vc=new Ye;let Tg=0;class Fn extends fo{constructor(e,t,n=!1){if(super(),Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,Object.defineProperty(this,"id",{value:Tg++}),this.name="",this.array=e,this.itemSize=t,this.count=e!==void 0?e.length/t:0,this.normalized=n,this.usage=Fp,this.updateRanges=[],this.gpuType=is,this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this}copyAt(e,t,n){e*=this.itemSize,n*=t.itemSize;for(let i=0,r=this.itemSize;i<r;i++)this.array[e+i]=t.array[n+i];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let t=0,n=this.count;t<n;t++)Vc.fromBufferAttribute(this,t),Vc.applyMatrix3(e),this.setXY(t,Vc.x,Vc.y);else if(this.itemSize===3)for(let t=0,n=this.count;t<n;t++)ti.fromBufferAttribute(this,t),ti.applyMatrix3(e),this.setXYZ(t,ti.x,ti.y,ti.z);return this}applyMatrix4(e){for(let t=0,n=this.count;t<n;t++)ti.fromBufferAttribute(this,t),ti.applyMatrix4(e),this.setXYZ(t,ti.x,ti.y,ti.z);return this}applyNormalMatrix(e){for(let t=0,n=this.count;t<n;t++)ti.fromBufferAttribute(this,t),ti.applyNormalMatrix(e),this.setXYZ(t,ti.x,ti.y,ti.z);return this}transformDirection(e){for(let t=0,n=this.count;t<n;t++)ti.fromBufferAttribute(this,t),ti.transformDirection(e),this.setXYZ(t,ti.x,ti.y,ti.z);return this}set(e,t=0){return this.array.set(e,t),this}getComponent(e,t){let n=this.array[e*this.itemSize+t];return this.normalized&&(n=vs(n,this.array)),n}setComponent(e,t,n){return this.normalized&&(n=bn(n,this.array)),this.array[e*this.itemSize+t]=n,this}getX(e){let t=this.array[e*this.itemSize];return this.normalized&&(t=vs(t,this.array)),t}setX(e,t){return this.normalized&&(t=bn(t,this.array)),this.array[e*this.itemSize]=t,this}getY(e){let t=this.array[e*this.itemSize+1];return this.normalized&&(t=vs(t,this.array)),t}setY(e,t){return this.normalized&&(t=bn(t,this.array)),this.array[e*this.itemSize+1]=t,this}getZ(e){let t=this.array[e*this.itemSize+2];return this.normalized&&(t=vs(t,this.array)),t}setZ(e,t){return this.normalized&&(t=bn(t,this.array)),this.array[e*this.itemSize+2]=t,this}getW(e){let t=this.array[e*this.itemSize+3];return this.normalized&&(t=vs(t,this.array)),t}setW(e,t){return this.normalized&&(t=bn(t,this.array)),this.array[e*this.itemSize+3]=t,this}setXY(e,t,n){return e*=this.itemSize,this.normalized&&(t=bn(t,this.array),n=bn(n,this.array)),this.array[e+0]=t,this.array[e+1]=n,this}setXYZ(e,t,n,i){return e*=this.itemSize,this.normalized&&(t=bn(t,this.array),n=bn(n,this.array),i=bn(i,this.array)),this.array[e+0]=t,this.array[e+1]=n,this.array[e+2]=i,this}setXYZW(e,t,n,i,r){return e*=this.itemSize,this.normalized&&(t=bn(t,this.array),n=bn(n,this.array),i=bn(i,this.array),r=bn(r,this.array)),this.array[e+0]=t,this.array[e+1]=n,this.array[e+2]=i,this.array[e+3]=r,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return e.name=this.name,e.usage=this.usage,e.gpuType=this.gpuType,e}dispose(){this.dispatchEvent({type:"dispose"})}}class Hp extends Fn{constructor(e,t,n){super(new Uint16Array(e),t,n)}}class Vp extends Fn{constructor(e,t,n){super(new Uint32Array(e),t,n)}}class on extends Fn{constructor(e,t,n){super(new Float32Array(e),t,n)}}const Eg=new os,Ua=new V,du=new V;class qs{constructor(e=new V,t=-1){this.isSphere=!0,this.center=e,this.radius=t}set(e,t){return this.center.copy(e),this.radius=t,this}setFromPoints(e,t){const n=this.center;t!==void 0?n.copy(t):Eg.setFromPoints(e).getCenter(n);let i=0;for(let r=0,o=e.length;r<o;r++)i=Math.max(i,n.distanceToSquared(e[r]));return this.radius=Math.sqrt(i),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){const t=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=t*t}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,t){const n=this.center.distanceToSquared(e);return t.copy(e),n>this.radius*this.radius&&(t.sub(this.center).normalize(),t.multiplyScalar(this.radius).add(this.center)),t}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;Ua.subVectors(e,this.center);const t=Ua.lengthSq();if(t>this.radius*this.radius){const n=Math.sqrt(t),i=(n-this.radius)*.5;this.center.addScaledVector(Ua,i/n),this.radius+=i}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(du.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(Ua.copy(e.center).add(du)),this.expandByPoint(Ua.copy(e.center).sub(du))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}toJSON(){return{radius:this.radius,center:this.center.toArray()}}fromJSON(e){return this.radius=e.radius,this.center.fromArray(e.center),this}}let wg=0;const es=new zt,pu=new On,Wo=new V,qi=new os,Fa=new os,di=new V;class Rn extends fo{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:wg++}),this.uuid=rs(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.indirectOffset=0,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={},this._transformed=!1}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(Gm(e)?Vp:Hp)(e,1):this.index=e,this}setIndirect(e,t=0){return this.indirect=e,this.indirectOffset=t,this}getIndirect(){return this.indirect}getAttribute(e){return this.attributes[e]}setAttribute(e,t){return this.attributes[e]=t,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,t,n=0){this.groups.push({start:e,count:t,materialIndex:n})}clearGroups(){this.groups=[]}setDrawRange(e,t){this.drawRange.start=e,this.drawRange.count=t}applyMatrix4(e){const t=this.attributes.position;t!==void 0&&(t.applyMatrix4(e),t.needsUpdate=!0);const n=this.attributes.normal;if(n!==void 0){const r=new Gt().getNormalMatrix(e);n.applyNormalMatrix(r),n.needsUpdate=!0}const i=this.attributes.tangent;return i!==void 0&&(i.transformDirection(e),i.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this._transformed=!0,this}applyQuaternion(e){return es.makeRotationFromQuaternion(e),this.applyMatrix4(es),this}rotateX(e){return es.makeRotationX(e),this.applyMatrix4(es),this}rotateY(e){return es.makeRotationY(e),this.applyMatrix4(es),this}rotateZ(e){return es.makeRotationZ(e),this.applyMatrix4(es),this}translate(e,t,n){return es.makeTranslation(e,t,n),this.applyMatrix4(es),this}scale(e,t,n){return es.makeScale(e,t,n),this.applyMatrix4(es),this}lookAt(e){return pu.lookAt(e),pu.updateMatrix(),this.applyMatrix4(pu.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(Wo).negate(),this.translate(Wo.x,Wo.y,Wo.z),this}setFromPoints(e){const t=this.getAttribute("position");if(t===void 0){const n=[];for(let i=0,r=e.length;i<r;i++){const o=e[i];n.push(o.x,o.y,o.z||0)}this.setAttribute("position",new on(n,3))}else{const n=Math.min(e.length,t.count);for(let i=0;i<n;i++){const r=e[i];t.setXYZ(i,r.x,r.y,r.z||0)}e.length>t.count&&yt("BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),t.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new os);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){kt("BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new V(-1/0,-1/0,-1/0),new V(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),t)for(let n=0,i=t.length;n<i;n++){const r=t[n];qi.setFromBufferAttribute(r),this.morphTargetsRelative?(di.addVectors(this.boundingBox.min,qi.min),this.boundingBox.expandByPoint(di),di.addVectors(this.boundingBox.max,qi.max),this.boundingBox.expandByPoint(di)):(this.boundingBox.expandByPoint(qi.min),this.boundingBox.expandByPoint(qi.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&kt('BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new qs);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){kt("BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new V,1/0);return}if(e){const n=this.boundingSphere.center;if(qi.setFromBufferAttribute(e),t)for(let r=0,o=t.length;r<o;r++){const a=t[r];Fa.setFromBufferAttribute(a),this.morphTargetsRelative?(di.addVectors(qi.min,Fa.min),qi.expandByPoint(di),di.addVectors(qi.max,Fa.max),qi.expandByPoint(di)):(qi.expandByPoint(Fa.min),qi.expandByPoint(Fa.max))}qi.getCenter(n);let i=0;for(let r=0,o=e.count;r<o;r++)di.fromBufferAttribute(e,r),i=Math.max(i,n.distanceToSquared(di));if(t)for(let r=0,o=t.length;r<o;r++){const a=t[r],c=this.morphTargetsRelative;for(let l=0,u=a.count;l<u;l++)di.fromBufferAttribute(a,l),c&&(Wo.fromBufferAttribute(e,l),di.add(Wo)),i=Math.max(i,n.distanceToSquared(di))}this.boundingSphere.radius=Math.sqrt(i),isNaN(this.boundingSphere.radius)&&kt('BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const e=this.index,t=this.attributes;if(e===null||t.position===void 0||t.normal===void 0||t.uv===void 0){kt("BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const n=t.position,i=t.normal,r=t.uv;let o=this.getAttribute("tangent");(o===void 0||o.count!==n.count)&&(o=new Fn(new Float32Array(4*n.count),4),this.setAttribute("tangent",o));const a=[],c=[];for(let v=0;v<n.count;v++)a[v]=new V,c[v]=new V;const l=new V,u=new V,f=new V,h=new Ye,d=new Ye,m=new Ye,M=new V,x=new V;function g(v,L,O){l.fromBufferAttribute(n,v),u.fromBufferAttribute(n,L),f.fromBufferAttribute(n,O),h.fromBufferAttribute(r,v),d.fromBufferAttribute(r,L),m.fromBufferAttribute(r,O),u.sub(l),f.sub(l),d.sub(h),m.sub(h);const z=1/(d.x*m.y-m.x*d.y);isFinite(z)&&(M.copy(u).multiplyScalar(m.y).addScaledVector(f,-d.y).multiplyScalar(z),x.copy(f).multiplyScalar(d.x).addScaledVector(u,-m.x).multiplyScalar(z),a[v].add(M),a[L].add(M),a[O].add(M),c[v].add(x),c[L].add(x),c[O].add(x))}let A=this.groups;A.length===0&&(A=[{start:0,count:e.count}]);for(let v=0,L=A.length;v<L;++v){const O=A[v],z=O.start,K=O.count;for(let ee=z,X=z+K;ee<X;ee+=3)g(e.getX(ee+0),e.getX(ee+1),e.getX(ee+2))}const I=new V,_=new V,w=new V,R=new V;function D(v){w.fromBufferAttribute(i,v),R.copy(w);const L=a[v];I.copy(L),I.sub(w.multiplyScalar(w.dot(L))).normalize(),_.crossVectors(R,L);const z=_.dot(c[v])<0?-1:1;o.setXYZW(v,I.x,I.y,I.z,z)}for(let v=0,L=A.length;v<L;++v){const O=A[v],z=O.start,K=O.count;for(let ee=z,X=z+K;ee<X;ee+=3)D(e.getX(ee+0)),D(e.getX(ee+1)),D(e.getX(ee+2))}this._transformed=!0}computeVertexNormals(){const e=this.index,t=this.getAttribute("position");if(t!==void 0){let n=this.getAttribute("normal");if(n===void 0||n.count!==t.count)n=new Fn(new Float32Array(t.count*3),3),this.setAttribute("normal",n);else for(let h=0,d=n.count;h<d;h++)n.setXYZ(h,0,0,0);const i=new V,r=new V,o=new V,a=new V,c=new V,l=new V,u=new V,f=new V;if(e)for(let h=0,d=e.count;h<d;h+=3){const m=e.getX(h+0),M=e.getX(h+1),x=e.getX(h+2);i.fromBufferAttribute(t,m),r.fromBufferAttribute(t,M),o.fromBufferAttribute(t,x),u.subVectors(o,r),f.subVectors(i,r),u.cross(f),a.fromBufferAttribute(n,m),c.fromBufferAttribute(n,M),l.fromBufferAttribute(n,x),a.add(u),c.add(u),l.add(u),n.setXYZ(m,a.x,a.y,a.z),n.setXYZ(M,c.x,c.y,c.z),n.setXYZ(x,l.x,l.y,l.z)}else for(let h=0,d=t.count;h<d;h+=3)i.fromBufferAttribute(t,h+0),r.fromBufferAttribute(t,h+1),o.fromBufferAttribute(t,h+2),u.subVectors(o,r),f.subVectors(i,r),u.cross(f),n.setXYZ(h+0,u.x,u.y,u.z),n.setXYZ(h+1,u.x,u.y,u.z),n.setXYZ(h+2,u.x,u.y,u.z);this.normalizeNormals(),n.needsUpdate=!0}}normalizeNormals(){const e=this.attributes.normal;for(let t=0,n=e.count;t<n;t++)di.fromBufferAttribute(e,t),di.normalize(),e.setXYZ(t,di.x,di.y,di.z)}toNonIndexed(){function e(a,c){const l=a.array,u=a.itemSize,f=a.normalized,h=new l.constructor(c.length*u);let d=0,m=0;for(let M=0,x=c.length;M<x;M++){a.isInterleavedBufferAttribute?d=c[M]*a.data.stride+a.offset:d=c[M]*u;for(let g=0;g<u;g++)h[m++]=l[d++]}return new Fn(h,u,f)}if(this.index===null)return yt("BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const t=new Rn,n=this.index.array,i=this.attributes;for(const a in i){const c=i[a],l=e(c,n);t.setAttribute(a,l)}const r=this.morphAttributes;for(const a in r){const c=[],l=r[a];for(let u=0,f=l.length;u<f;u++){const h=l[u],d=e(h,n);c.push(d)}t.morphAttributes[a]=c}t.morphTargetsRelative=this.morphTargetsRelative;const o=this.groups;for(let a=0,c=o.length;a<c;a++){const l=o[a];t.addGroup(l.start,l.count,l.materialIndex)}return t}toJSON(){const e={metadata:{version:4.7,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.parameters!==void 0&&this._transformed===!0?"BufferGeometry":this.type,e.name=this.name,Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0&&this._transformed!==!0){const c=this.parameters;for(const l in c)c[l]!==void 0&&(e[l]=c[l]);return e}e.data={attributes:{}};const t=this.index;t!==null&&(e.data.index={type:t.array.constructor.name,array:Array.prototype.slice.call(t.array)});const n=this.attributes;for(const c in n){const l=n[c];e.data.attributes[c]=l.toJSON(e.data)}const i={};let r=!1;for(const c in this.morphAttributes){const l=this.morphAttributes[c],u=[];for(let f=0,h=l.length;f<h;f++){const d=l[f];u.push(d.toJSON(e.data))}u.length>0&&(i[c]=u,r=!0)}r&&(e.data.morphAttributes=i,e.data.morphTargetsRelative=this.morphTargetsRelative);const o=this.groups;o.length>0&&(e.data.groups=JSON.parse(JSON.stringify(o)));const a=this.boundingSphere;return a!==null&&(e.data.boundingSphere=a.toJSON()),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const t={};this.name=e.name;const n=e.index;n!==null&&this.setIndex(n.clone());const i=e.attributes;for(const l in i){const u=i[l];this.setAttribute(l,u.clone(t))}const r=e.morphAttributes;for(const l in r){const u=[],f=r[l];for(let h=0,d=f.length;h<d;h++)u.push(f[h].clone(t));this.morphAttributes[l]=u}this.morphTargetsRelative=e.morphTargetsRelative;const o=e.groups;for(let l=0,u=o.length;l<u;l++){const f=o[l];this.addGroup(f.start,f.count,f.materialIndex)}const a=e.boundingBox;a!==null&&(this.boundingBox=a.clone());const c=e.boundingSphere;return c!==null&&(this.boundingSphere=c.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this._transformed=e._transformed,this}dispose(){this.dispatchEvent({type:"dispose"})}}class Gp{constructor(e,t){this.isInterleavedBuffer=!0,this.array=e,this.stride=t,this.count=e!==void 0?e.length/t:0,this.usage=Fp,this.updateRanges=[],this.version=0,this.uuid=rs()}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.array=new e.array.constructor(e.array),this.count=e.count,this.stride=e.stride,this.usage=e.usage,this}copyAt(e,t,n){e*=this.stride,n*=t.stride;for(let i=0,r=this.stride;i<r;i++)this.array[e+i]=t.array[n+i];return this}set(e,t=0){return this.array.set(e,t),this}clone(e){e.arrayBuffers===void 0&&(e.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=rs()),e.arrayBuffers[this.array.buffer._uuid]===void 0&&(e.arrayBuffers[this.array.buffer._uuid]=this.array.slice(0).buffer);const t=new this.array.constructor(e.arrayBuffers[this.array.buffer._uuid]),n=new this.constructor(t,this.stride);return n.setUsage(this.usage),n}onUpload(e){return this.onUploadCallback=e,this}toJSON(e){e.arrayBuffers===void 0&&(e.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=rs()),e.arrayBuffers[this.array.buffer._uuid]===void 0&&(e.arrayBuffers[this.array.buffer._uuid]=Array.from(new Uint32Array(this.array.buffer)));const t={uuid:this.uuid,buffer:this.array.buffer._uuid,type:this.array.constructor.name,stride:this.stride};return t.usage=this.usage,t}}const Pi=new V;class Fl{constructor(e,t,n,i=!1){this.isInterleavedBufferAttribute=!0,this.name="",this.data=e,this.itemSize=t,this.offset=n,this.normalized=i}get count(){return this.data.count}get array(){return this.data.array}set needsUpdate(e){this.data.needsUpdate=e}applyMatrix4(e){for(let t=0,n=this.data.count;t<n;t++)Pi.fromBufferAttribute(this,t),Pi.applyMatrix4(e),this.setXYZ(t,Pi.x,Pi.y,Pi.z);return this}applyNormalMatrix(e){for(let t=0,n=this.count;t<n;t++)Pi.fromBufferAttribute(this,t),Pi.applyNormalMatrix(e),this.setXYZ(t,Pi.x,Pi.y,Pi.z);return this}transformDirection(e){for(let t=0,n=this.count;t<n;t++)Pi.fromBufferAttribute(this,t),Pi.transformDirection(e),this.setXYZ(t,Pi.x,Pi.y,Pi.z);return this}getComponent(e,t){let n=this.array[e*this.data.stride+this.offset+t];return this.normalized&&(n=vs(n,this.array)),n}setComponent(e,t,n){return this.normalized&&(n=bn(n,this.array)),this.data.array[e*this.data.stride+this.offset+t]=n,this}setX(e,t){return this.normalized&&(t=bn(t,this.array)),this.data.array[e*this.data.stride+this.offset]=t,this}setY(e,t){return this.normalized&&(t=bn(t,this.array)),this.data.array[e*this.data.stride+this.offset+1]=t,this}setZ(e,t){return this.normalized&&(t=bn(t,this.array)),this.data.array[e*this.data.stride+this.offset+2]=t,this}setW(e,t){return this.normalized&&(t=bn(t,this.array)),this.data.array[e*this.data.stride+this.offset+3]=t,this}getX(e){let t=this.data.array[e*this.data.stride+this.offset];return this.normalized&&(t=vs(t,this.array)),t}getY(e){let t=this.data.array[e*this.data.stride+this.offset+1];return this.normalized&&(t=vs(t,this.array)),t}getZ(e){let t=this.data.array[e*this.data.stride+this.offset+2];return this.normalized&&(t=vs(t,this.array)),t}getW(e){let t=this.data.array[e*this.data.stride+this.offset+3];return this.normalized&&(t=vs(t,this.array)),t}setXY(e,t,n){return e=e*this.data.stride+this.offset,this.normalized&&(t=bn(t,this.array),n=bn(n,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=n,this}setXYZ(e,t,n,i){return e=e*this.data.stride+this.offset,this.normalized&&(t=bn(t,this.array),n=bn(n,this.array),i=bn(i,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=n,this.data.array[e+2]=i,this}setXYZW(e,t,n,i,r){return e=e*this.data.stride+this.offset,this.normalized&&(t=bn(t,this.array),n=bn(n,this.array),i=bn(i,this.array),r=bn(r,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=n,this.data.array[e+2]=i,this.data.array[e+3]=r,this}clone(e){if(e===void 0){Pl("InterleavedBufferAttribute.clone(): Cloning an interleaved buffer attribute will de-interleave buffer data.");const t=[];for(let n=0;n<this.count;n++){const i=n*this.data.stride+this.offset;for(let r=0;r<this.itemSize;r++)t.push(this.data.array[i+r])}return new Fn(new this.array.constructor(t),this.itemSize,this.normalized)}else return e.interleavedBuffers===void 0&&(e.interleavedBuffers={}),e.interleavedBuffers[this.data.uuid]===void 0&&(e.interleavedBuffers[this.data.uuid]=this.data.clone(e)),new Fl(e.interleavedBuffers[this.data.uuid],this.itemSize,this.offset,this.normalized)}toJSON(e){if(e===void 0){Pl("InterleavedBufferAttribute.toJSON(): Serializing an interleaved buffer attribute will de-interleave buffer data.");const t=[];for(let n=0;n<this.count;n++){const i=n*this.data.stride+this.offset;for(let r=0;r<this.itemSize;r++)t.push(this.data.array[i+r])}return{itemSize:this.itemSize,type:this.array.constructor.name,array:t,normalized:this.normalized}}else return e.interleavedBuffers===void 0&&(e.interleavedBuffers={}),e.interleavedBuffers[this.data.uuid]===void 0&&(e.interleavedBuffers[this.data.uuid]=this.data.toJSON(e)),{isInterleavedBufferAttribute:!0,itemSize:this.itemSize,data:this.data.uuid,offset:this.offset,normalized:this.normalized}}}const mu=new V,Ag=new V,Rg=new Gt;class wr{constructor(e=new V(1,0,0),t=0){this.isPlane=!0,this.normal=e,this.constant=t}set(e,t){return this.normal.copy(e),this.constant=t,this}setComponents(e,t,n,i){return this.normal.set(e,t,n),this.constant=i,this}setFromNormalAndCoplanarPoint(e,t){return this.normal.copy(e),this.constant=-t.dot(this.normal),this}setFromCoplanarPoints(e,t,n){const i=mu.subVectors(n,t).cross(Ag.subVectors(e,t)).normalize();return this.setFromNormalAndCoplanarPoint(i,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){const e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,t){return t.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,t,n=!0){const i=e.delta(mu),r=this.normal.dot(i);if(r===0)return this.distanceToPoint(e.start)===0?t.copy(e.start):null;const o=-(e.start.dot(this.normal)+this.constant)/r;return n===!0&&(o<0||o>1)?null:t.copy(e.start).addScaledVector(i,o)}intersectsLine(e){const t=this.distanceToPoint(e.start),n=this.distanceToPoint(e.end);return t<0&&n>0||n<0&&t>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,t){const n=t||Rg.getNormalMatrix(e),i=this.coplanarPoint(mu).applyMatrix4(e),r=this.normal.applyMatrix3(n).normalize();return this.constant=-i.dot(r),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}toJSON(){return{normal:this.normal.toArray(),constant:this.constant}}fromJSON(e){return this.normal.fromArray(e.normal),this.constant=e.constant,this}}let Cg=0;class Vs extends fo{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:Cg++}),this.uuid=rs(),this.name="",this.type="Material",this.blending=Za,this.side=Ir,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=_p,this.blendDst=vp,this.blendEquation=Zo,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new it(0,0,0),this.blendAlpha=0,this.depthFunc=nc,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=Fm,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=Zl,this.stencilZFail=Zl,this.stencilZPass=Zl,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.allowOverride=!0,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(const t in e){const n=e[t];if(n===void 0){yt(`Material: parameter '${t}' has value of undefined.`);continue}const i=this[t];if(i===void 0){yt(`Material: '${t}' is not a property of THREE.${this.type}.`);continue}i&&i.isColor?i.set(n):i&&i.isVector2&&n&&n.isVector2||i&&i.isEuler&&n&&n.isEuler||i&&i.isVector3&&n&&n.isVector3?i.copy(n):this[t]=n}}toJSON(e){const t=e===void 0||typeof e=="string";t&&(e={textures:{},images:{}});const n={metadata:{version:4.7,type:"Material",generator:"Material.toJSON"}};n.uuid=this.uuid,n.type=this.type,n.blending=this.blending,n.side=this.side,n.shadowSide=this.shadowSide,n.vertexColors=this.vertexColors,n.opacity=this.opacity,n.transparent=this.transparent,n.blendSrc=this.blendSrc,n.blendDst=this.blendDst,n.blendEquation=this.blendEquation,n.blendSrcAlpha=this.blendSrcAlpha,n.blendDstAlpha=this.blendDstAlpha,n.blendEquationAlpha=this.blendEquationAlpha,n.blendColor=this.blendColor.getHex(),n.blendAlpha=this.blendAlpha,n.depthFunc=this.depthFunc,n.depthTest=this.depthTest,n.depthWrite=this.depthWrite,n.colorWrite=this.colorWrite,n.clipIntersection=this.clipIntersection,n.clipShadows=this.clipShadows,n.stencilWriteMask=this.stencilWriteMask,n.stencilFunc=this.stencilFunc,n.stencilRef=this.stencilRef,n.stencilFuncMask=this.stencilFuncMask,n.stencilFail=this.stencilFail,n.stencilZFail=this.stencilZFail,n.stencilZPass=this.stencilZPass,n.stencilWrite=this.stencilWrite,n.polygonOffset=this.polygonOffset,n.polygonOffsetFactor=this.polygonOffsetFactor,n.polygonOffsetUnits=this.polygonOffsetUnits,n.dithering=this.dithering,n.alphaTest=this.alphaTest,n.alphaHash=this.alphaHash,n.alphaToCoverage=this.alphaToCoverage,n.premultipliedAlpha=this.premultipliedAlpha,n.forceSinglePass=this.forceSinglePass,n.allowOverride=this.allowOverride,n.visible=this.visible,n.toneMapped=this.toneMapped,n.name=this.name,this.color&&this.color.isColor&&(n.color=this.color.getHex()),this.roughness!==void 0&&(n.roughness=this.roughness),this.metalness!==void 0&&(n.metalness=this.metalness),this.sheen!==void 0&&(n.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(n.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(n.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(n.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&(n.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(n.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(n.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(n.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(n.shininess=this.shininess),this.clearcoat!==void 0&&(n.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(n.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(n.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(n.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(n.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,n.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.sheenColorMap&&this.sheenColorMap.isTexture&&(n.sheenColorMap=this.sheenColorMap.toJSON(e).uuid),this.sheenRoughnessMap&&this.sheenRoughnessMap.isTexture&&(n.sheenRoughnessMap=this.sheenRoughnessMap.toJSON(e).uuid),this.dispersion!==void 0&&(n.dispersion=this.dispersion),this.retroreflectivity!==void 0&&(n.retroreflectivity=this.retroreflectivity),this.iridescence!==void 0&&(n.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(n.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(n.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(n.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(n.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(n.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(n.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(n.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(n.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(n.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(n.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(n.lightMap=this.lightMap.toJSON(e).uuid,n.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(n.aoMap=this.aoMap.toJSON(e).uuid,n.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(n.bumpMap=this.bumpMap.toJSON(e).uuid,n.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(n.normalMap=this.normalMap.toJSON(e).uuid,n.normalMapType=this.normalMapType,n.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(n.displacementMap=this.displacementMap.toJSON(e).uuid,n.displacementScale=this.displacementScale,n.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(n.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(n.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(n.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(n.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(n.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(n.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(n.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(n.combine=this.combine)),this.envMapRotation!==void 0&&(n.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(n.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(n.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(n.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(n.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(n.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(n.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(n.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(n.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&(n.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(n.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(n.size=this.size),this.sizeAttenuation!==void 0&&(n.sizeAttenuation=this.sizeAttenuation),Array.isArray(this.clippingPlanes)&&this.clippingPlanes.length>0&&(n.clippingPlanes=this.clippingPlanes.map(r=>r.toJSON())),this.rotation!==void 0&&(n.rotation=this.rotation),this.depthPacking!==void 0&&(n.depthPacking=this.depthPacking),this.linewidth!==void 0&&(n.linewidth=this.linewidth),this.linecap!==void 0&&(n.linecap=this.linecap),this.linejoin!==void 0&&(n.linejoin=this.linejoin),this.dashSize!==void 0&&(n.dashSize=this.dashSize),this.gapSize!==void 0&&(n.gapSize=this.gapSize),this.scale!==void 0&&(n.scale=this.scale),this.wireframe!==void 0&&(n.wireframe=this.wireframe),this.wireframeLinewidth!==void 0&&(n.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!==void 0&&(n.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!==void 0&&(n.wireframeLinejoin=this.wireframeLinejoin),this.flatShading!==void 0&&(n.flatShading=this.flatShading),this.fog!==void 0&&(n.fog=this.fog),Object.keys(this.userData).length>0&&(n.userData=this.userData);function i(r){const o=[];for(const a in r){const c=r[a];delete c.metadata,o.push(c)}return o}if(t){const r=i(e.textures),o=i(e.images);r.length>0&&(n.textures=r),o.length>0&&(n.images=o)}return n}fromJSON(e,t){if(e.uuid!==void 0&&(this.uuid=e.uuid),e.name!==void 0&&(this.name=e.name),e.color!==void 0&&this.color!==void 0&&this.color.setHex(e.color),e.roughness!==void 0&&(this.roughness=e.roughness),e.metalness!==void 0&&(this.metalness=e.metalness),e.sheen!==void 0&&(this.sheen=e.sheen),e.sheenColor!==void 0&&(this.sheenColor=new it().setHex(e.sheenColor)),e.sheenRoughness!==void 0&&(this.sheenRoughness=e.sheenRoughness),e.emissive!==void 0&&this.emissive!==void 0&&this.emissive.setHex(e.emissive),e.specular!==void 0&&this.specular!==void 0&&this.specular.setHex(e.specular),e.specularIntensity!==void 0&&(this.specularIntensity=e.specularIntensity),e.specularColor!==void 0&&this.specularColor!==void 0&&this.specularColor.setHex(e.specularColor),e.shininess!==void 0&&(this.shininess=e.shininess),e.clearcoat!==void 0&&(this.clearcoat=e.clearcoat),e.clearcoatRoughness!==void 0&&(this.clearcoatRoughness=e.clearcoatRoughness),e.dispersion!==void 0&&(this.dispersion=e.dispersion),e.retroreflectivity!==void 0&&(this.retroreflectivity=e.retroreflectivity),e.iridescence!==void 0&&(this.iridescence=e.iridescence),e.iridescenceIOR!==void 0&&(this.iridescenceIOR=e.iridescenceIOR),e.iridescenceThicknessRange!==void 0&&(this.iridescenceThicknessRange=e.iridescenceThicknessRange),e.transmission!==void 0&&(this.transmission=e.transmission),e.thickness!==void 0&&(this.thickness=e.thickness),e.attenuationDistance!==void 0&&(this.attenuationDistance=e.attenuationDistance),e.attenuationColor!==void 0&&this.attenuationColor!==void 0&&this.attenuationColor.setHex(e.attenuationColor),e.anisotropy!==void 0&&(this.anisotropy=e.anisotropy),e.anisotropyRotation!==void 0&&(this.anisotropyRotation=e.anisotropyRotation),e.fog!==void 0&&(this.fog=e.fog),e.flatShading!==void 0&&(this.flatShading=e.flatShading),e.blending!==void 0&&(this.blending=e.blending),e.combine!==void 0&&(this.combine=e.combine),e.side!==void 0&&(this.side=e.side),e.shadowSide!==void 0&&(this.shadowSide=e.shadowSide),e.opacity!==void 0&&(this.opacity=e.opacity),e.transparent!==void 0&&(this.transparent=e.transparent),e.alphaTest!==void 0&&(this.alphaTest=e.alphaTest),e.alphaHash!==void 0&&(this.alphaHash=e.alphaHash),e.depthFunc!==void 0&&(this.depthFunc=e.depthFunc),e.depthTest!==void 0&&(this.depthTest=e.depthTest),e.depthWrite!==void 0&&(this.depthWrite=e.depthWrite),e.colorWrite!==void 0&&(this.colorWrite=e.colorWrite),e.clippingPlanes!==void 0&&(this.clippingPlanes=e.clippingPlanes.map(n=>new wr().fromJSON(n))),e.clipIntersection!==void 0&&(this.clipIntersection=e.clipIntersection),e.clipShadows!==void 0&&(this.clipShadows=e.clipShadows),e.depthPacking!==void 0&&(this.depthPacking=e.depthPacking),e.blendSrc!==void 0&&(this.blendSrc=e.blendSrc),e.blendDst!==void 0&&(this.blendDst=e.blendDst),e.blendEquation!==void 0&&(this.blendEquation=e.blendEquation),e.blendSrcAlpha!==void 0&&(this.blendSrcAlpha=e.blendSrcAlpha),e.blendDstAlpha!==void 0&&(this.blendDstAlpha=e.blendDstAlpha),e.blendEquationAlpha!==void 0&&(this.blendEquationAlpha=e.blendEquationAlpha),e.blendColor!==void 0&&this.blendColor!==void 0&&this.blendColor.setHex(e.blendColor),e.blendAlpha!==void 0&&(this.blendAlpha=e.blendAlpha),e.stencilWriteMask!==void 0&&(this.stencilWriteMask=e.stencilWriteMask),e.stencilFunc!==void 0&&(this.stencilFunc=e.stencilFunc),e.stencilRef!==void 0&&(this.stencilRef=e.stencilRef),e.stencilFuncMask!==void 0&&(this.stencilFuncMask=e.stencilFuncMask),e.stencilFail!==void 0&&(this.stencilFail=e.stencilFail),e.stencilZFail!==void 0&&(this.stencilZFail=e.stencilZFail),e.stencilZPass!==void 0&&(this.stencilZPass=e.stencilZPass),e.stencilWrite!==void 0&&(this.stencilWrite=e.stencilWrite),e.wireframe!==void 0&&(this.wireframe=e.wireframe),e.wireframeLinewidth!==void 0&&(this.wireframeLinewidth=e.wireframeLinewidth),e.wireframeLinecap!==void 0&&(this.wireframeLinecap=e.wireframeLinecap),e.wireframeLinejoin!==void 0&&(this.wireframeLinejoin=e.wireframeLinejoin),e.rotation!==void 0&&(this.rotation=e.rotation),e.linewidth!==void 0&&(this.linewidth=e.linewidth),e.linecap!==void 0&&(this.linecap=e.linecap),e.linejoin!==void 0&&(this.linejoin=e.linejoin),e.dashSize!==void 0&&(this.dashSize=e.dashSize),e.gapSize!==void 0&&(this.gapSize=e.gapSize),e.scale!==void 0&&(this.scale=e.scale),e.polygonOffset!==void 0&&(this.polygonOffset=e.polygonOffset),e.polygonOffsetFactor!==void 0&&(this.polygonOffsetFactor=e.polygonOffsetFactor),e.polygonOffsetUnits!==void 0&&(this.polygonOffsetUnits=e.polygonOffsetUnits),e.dithering!==void 0&&(this.dithering=e.dithering),e.alphaToCoverage!==void 0&&(this.alphaToCoverage=e.alphaToCoverage),e.premultipliedAlpha!==void 0&&(this.premultipliedAlpha=e.premultipliedAlpha),e.forceSinglePass!==void 0&&(this.forceSinglePass=e.forceSinglePass),e.allowOverride!==void 0&&(this.allowOverride=e.allowOverride),e.visible!==void 0&&(this.visible=e.visible),e.toneMapped!==void 0&&(this.toneMapped=e.toneMapped),e.userData!==void 0&&(this.userData=e.userData),e.vertexColors!==void 0&&(typeof e.vertexColors=="number"?this.vertexColors=e.vertexColors>0:this.vertexColors=e.vertexColors),e.size!==void 0&&(this.size=e.size),e.sizeAttenuation!==void 0&&(this.sizeAttenuation=e.sizeAttenuation),e.map!==void 0&&(this.map=t[e.map]||null),e.matcap!==void 0&&(this.matcap=t[e.matcap]||null),e.alphaMap!==void 0&&(this.alphaMap=t[e.alphaMap]||null),e.bumpMap!==void 0&&(this.bumpMap=t[e.bumpMap]||null),e.bumpScale!==void 0&&(this.bumpScale=e.bumpScale),e.normalMap!==void 0&&(this.normalMap=t[e.normalMap]||null),e.normalMapType!==void 0&&(this.normalMapType=e.normalMapType),e.normalScale!==void 0){let n=e.normalScale;Array.isArray(n)===!1&&(n=[n,n]),this.normalScale=new Ye().fromArray(n)}return e.displacementMap!==void 0&&(this.displacementMap=t[e.displacementMap]||null),e.displacementScale!==void 0&&(this.displacementScale=e.displacementScale),e.displacementBias!==void 0&&(this.displacementBias=e.displacementBias),e.roughnessMap!==void 0&&(this.roughnessMap=t[e.roughnessMap]||null),e.metalnessMap!==void 0&&(this.metalnessMap=t[e.metalnessMap]||null),e.emissiveMap!==void 0&&(this.emissiveMap=t[e.emissiveMap]||null),e.emissiveIntensity!==void 0&&(this.emissiveIntensity=e.emissiveIntensity),e.specularMap!==void 0&&(this.specularMap=t[e.specularMap]||null),e.specularIntensityMap!==void 0&&(this.specularIntensityMap=t[e.specularIntensityMap]||null),e.specularColorMap!==void 0&&(this.specularColorMap=t[e.specularColorMap]||null),e.envMap!==void 0&&(this.envMap=t[e.envMap]||null),e.envMapRotation!==void 0&&this.envMapRotation.fromArray(e.envMapRotation),e.envMapIntensity!==void 0&&(this.envMapIntensity=e.envMapIntensity),e.reflectivity!==void 0&&(this.reflectivity=e.reflectivity),e.refractionRatio!==void 0&&(this.refractionRatio=e.refractionRatio),e.lightMap!==void 0&&(this.lightMap=t[e.lightMap]||null),e.lightMapIntensity!==void 0&&(this.lightMapIntensity=e.lightMapIntensity),e.aoMap!==void 0&&(this.aoMap=t[e.aoMap]||null),e.aoMapIntensity!==void 0&&(this.aoMapIntensity=e.aoMapIntensity),e.gradientMap!==void 0&&(this.gradientMap=t[e.gradientMap]||null),e.clearcoatMap!==void 0&&(this.clearcoatMap=t[e.clearcoatMap]||null),e.clearcoatRoughnessMap!==void 0&&(this.clearcoatRoughnessMap=t[e.clearcoatRoughnessMap]||null),e.clearcoatNormalMap!==void 0&&(this.clearcoatNormalMap=t[e.clearcoatNormalMap]||null),e.clearcoatNormalScale!==void 0&&(this.clearcoatNormalScale=new Ye().fromArray(e.clearcoatNormalScale)),e.iridescenceMap!==void 0&&(this.iridescenceMap=t[e.iridescenceMap]||null),e.iridescenceThicknessMap!==void 0&&(this.iridescenceThicknessMap=t[e.iridescenceThicknessMap]||null),e.transmissionMap!==void 0&&(this.transmissionMap=t[e.transmissionMap]||null),e.thicknessMap!==void 0&&(this.thicknessMap=t[e.thicknessMap]||null),e.anisotropyMap!==void 0&&(this.anisotropyMap=t[e.anisotropyMap]||null),e.sheenColorMap!==void 0&&(this.sheenColorMap=t[e.sheenColorMap]||null),e.sheenRoughnessMap!==void 0&&(this.sheenRoughnessMap=t[e.sheenRoughnessMap]||null),this}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.blendColor.copy(e.blendColor),this.blendAlpha=e.blendAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;const t=e.clippingPlanes;let n=null;if(t!==null){const i=t.length;n=new Array(i);for(let r=0;r!==i;++r)n[r]=t[r].clone()}return this.clippingPlanes=n,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.allowOverride=e.allowOverride,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}}const nr=new V,gu=new V,Gc=new V,Wc=new V;class Ol{constructor(e=new V,t=new V(0,0,-1)){this.origin=e,this.direction=t}set(e,t){return this.origin.copy(e),this.direction.copy(t),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,t){return t.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,nr)),this}closestPointToPoint(e,t){t.subVectors(e,this.origin);const n=t.dot(this.direction);return n<0?t.copy(this.origin):t.copy(this.origin).addScaledVector(this.direction,n)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){const t=nr.subVectors(e,this.origin).dot(this.direction);return t<0?this.origin.distanceToSquared(e):(nr.copy(this.origin).addScaledVector(this.direction,t),nr.distanceToSquared(e))}distanceSqToSegment(e,t,n,i){gu.copy(e).add(t).multiplyScalar(.5),Gc.copy(t).sub(e).normalize(),Wc.copy(this.origin).sub(gu);const r=e.distanceTo(t)*.5,o=-this.direction.dot(Gc),a=Wc.dot(this.direction),c=-Wc.dot(Gc),l=Wc.lengthSq(),u=Math.abs(1-o*o);let f,h,d,m;if(u>0)if(f=o*c-a,h=o*a-c,m=r*u,f>=0)if(h>=-m)if(h<=m){const M=1/u;f*=M,h*=M,d=f*(f+o*h+2*a)+h*(o*f+h+2*c)+l}else h=r,f=Math.max(0,-(o*h+a)),d=-f*f+h*(h+2*c)+l;else h=-r,f=Math.max(0,-(o*h+a)),d=-f*f+h*(h+2*c)+l;else h<=-m?(f=Math.max(0,-(-o*r+a)),h=f>0?-r:Math.min(Math.max(-r,-c),r),d=-f*f+h*(h+2*c)+l):h<=m?(f=0,h=Math.min(Math.max(-r,-c),r),d=h*(h+2*c)+l):(f=Math.max(0,-(o*r+a)),h=f>0?r:Math.min(Math.max(-r,-c),r),d=-f*f+h*(h+2*c)+l);else h=o>0?-r:r,f=Math.max(0,-(o*h+a)),d=-f*f+h*(h+2*c)+l;return n&&n.copy(this.origin).addScaledVector(this.direction,f),i&&i.copy(gu).addScaledVector(Gc,h),d}intersectSphere(e,t){if(e.radius<0)return null;nr.subVectors(e.center,this.origin);const n=nr.dot(this.direction),i=nr.dot(nr)-n*n,r=e.radius*e.radius;if(i>r)return null;const o=Math.sqrt(r-i),a=n-o,c=n+o;return c<0?null:a<0?this.at(c,t):this.at(a,t)}intersectsSphere(e){return e.radius<0?!1:this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){const t=e.normal.dot(this.direction);if(t===0)return e.distanceToPoint(this.origin)===0?0:null;const n=-(this.origin.dot(e.normal)+e.constant)/t;return n>=0?n:null}intersectPlane(e,t){const n=this.distanceToPlane(e);return n===null?null:this.at(n,t)}intersectsPlane(e){const t=e.distanceToPoint(this.origin);return t===0||e.normal.dot(this.direction)*t<0}intersectBox(e,t){let n,i,r,o,a,c;const l=1/this.direction.x,u=1/this.direction.y,f=1/this.direction.z,h=this.origin;return l>=0?(n=(e.min.x-h.x)*l,i=(e.max.x-h.x)*l):(n=(e.max.x-h.x)*l,i=(e.min.x-h.x)*l),u>=0?(r=(e.min.y-h.y)*u,o=(e.max.y-h.y)*u):(r=(e.max.y-h.y)*u,o=(e.min.y-h.y)*u),n>o||r>i||((r>n||isNaN(n))&&(n=r),(o<i||isNaN(i))&&(i=o),f>=0?(a=(e.min.z-h.z)*f,c=(e.max.z-h.z)*f):(a=(e.max.z-h.z)*f,c=(e.min.z-h.z)*f),n>c||a>i)||((a>n||n!==n)&&(n=a),(c<i||i!==i)&&(i=c),i<0)?null:this.at(n>=0?n:i,t)}intersectsBox(e){return this.intersectBox(e,nr)!==null}intersectTriangle(e,t,n,i,r){const o=this.origin,a=this.direction,c=a.x,l=a.y,u=a.z,f=e.x-o.x,h=e.y-o.y,d=e.z-o.z,m=t.x-o.x,M=t.y-o.y,x=t.z-o.z,g=n.x-o.x,A=n.y-o.y,I=n.z-o.z,_=Math.abs(c),w=Math.abs(l),R=Math.abs(u);let D,v,L,O,z,K,ee,X,J,ce,se,Ee;if(_>=w&&_>=R?(L=c,K=f,J=m,Ee=g,c>=0?(D=l,v=u,O=h,z=d,ee=M,X=x,ce=A,se=I):(D=u,v=l,O=d,z=h,ee=x,X=M,ce=I,se=A)):w>=R?(L=l,K=h,J=M,Ee=A,l>=0?(D=u,v=c,O=d,z=f,ee=x,X=m,ce=I,se=g):(D=c,v=u,O=f,z=d,ee=m,X=x,ce=g,se=I)):(L=u,K=d,J=x,Ee=I,u>=0?(D=c,v=l,O=f,z=h,ee=m,X=M,ce=g,se=A):(D=l,v=c,O=h,z=f,ee=M,X=m,ce=A,se=g)),L===0)return null;const ue=D/L,ge=v/L,Se=1/L,tt=O-ue*K,Ze=z-ge*K,At=ee-ue*J,bt=X-ge*J,Wt=ce-ue*Ee,he=se-ge*Ee,Me=Wt*bt-he*At,We=tt*he-Ze*Wt,lt=At*Ze-bt*tt;if(i){if(Me<0||We<0||lt<0)return null}else if((Me<0||We<0||lt<0)&&(Me>0||We>0||lt>0))return null;const je=Me+We+lt;if(je===0)return null;const Tt=Se*(Me*K+We*J+lt*Ee);return(je>0?Tt<0:Tt>0)?null:this.at(Tt/je,r)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class ki extends Vs{constructor(e){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new it(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Xs,this.combine=Mp,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}}const Xf=new zt,jr=new Ol,Xc=new qs,qf=new V,qc=new V,Yc=new V,Kc=new V,xu=new V,jc=new V,Yf=new V,$c=new V;class Ut extends On{constructor(e=new Rn,t=new ki){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=t,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.count=1,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){const t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){const i=t[n[0]];if(i!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,o=i.length;r<o;r++){const a=i[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=r}}}}getVertexPosition(e,t){const n=this.geometry,i=n.attributes.position,r=n.morphAttributes.position,o=n.morphTargetsRelative;t.fromBufferAttribute(i,e);const a=this.morphTargetInfluences;if(r&&a){jc.set(0,0,0);for(let c=0,l=r.length;c<l;c++){const u=a[c],f=r[c];u!==0&&(xu.fromBufferAttribute(f,e),o?jc.addScaledVector(xu,u):jc.addScaledVector(xu.sub(t),u))}t.add(jc)}return t}intersectsFrustum(e){return e.intersectsObject(this)}raycast(e,t){const n=this.geometry,i=this.material,r=this.matrixWorld;i!==void 0&&(n.boundingSphere===null&&n.computeBoundingSphere(),Xc.copy(n.boundingSphere),Xc.applyMatrix4(r),jr.copy(e.ray).recast(e.near),!(Xc.containsPoint(jr.origin)===!1&&(jr.intersectSphere(Xc,qf)===null||jr.origin.distanceToSquared(qf)>(e.far-e.near)**2))&&(Xf.copy(r).invert(),jr.copy(e.ray).applyMatrix4(Xf),!(n.boundingBox!==null&&jr.intersectsBox(n.boundingBox)===!1)&&this._computeIntersections(e,t,jr)))}_computeIntersections(e,t,n){let i;const r=this.geometry,o=this.material,a=r.index,c=r.attributes.position,l=r.attributes.uv,u=r.attributes.uv1,f=r.attributes.normal,h=r.groups,d=r.drawRange;if(a!==null)if(Array.isArray(o))for(let m=0,M=h.length;m<M;m++){const x=h[m],g=o[x.materialIndex],A=Math.max(x.start,d.start),I=Math.min(a.count,Math.min(x.start+x.count,d.start+d.count));for(let _=A,w=I;_<w;_+=3){const R=a.getX(_),D=a.getX(_+1),v=a.getX(_+2);i=Zc(this,g,e,n,l,u,f,R,D,v),i&&(i.faceIndex=Math.floor(_/3),i.face.materialIndex=x.materialIndex,t.push(i))}}else{const m=Math.max(0,d.start),M=Math.min(a.count,d.start+d.count);for(let x=m,g=M;x<g;x+=3){const A=a.getX(x),I=a.getX(x+1),_=a.getX(x+2);i=Zc(this,o,e,n,l,u,f,A,I,_),i&&(i.faceIndex=Math.floor(x/3),t.push(i))}}else if(c!==void 0)if(Array.isArray(o))for(let m=0,M=h.length;m<M;m++){const x=h[m],g=o[x.materialIndex],A=Math.max(x.start,d.start),I=Math.min(c.count,Math.min(x.start+x.count,d.start+d.count));for(let _=A,w=I;_<w;_+=3){const R=_,D=_+1,v=_+2;i=Zc(this,g,e,n,l,u,f,R,D,v),i&&(i.faceIndex=Math.floor(_/3),i.face.materialIndex=x.materialIndex,t.push(i))}}else{const m=Math.max(0,d.start),M=Math.min(c.count,d.start+d.count);for(let x=m,g=M;x<g;x+=3){const A=x,I=x+1,_=x+2;i=Zc(this,o,e,n,l,u,f,A,I,_),i&&(i.faceIndex=Math.floor(x/3),t.push(i))}}}}function Pg(s,e,t,n,i,r,o,a){let c;if(e.side===Di?c=n.intersectTriangle(o,r,i,!0,a):c=n.intersectTriangle(i,r,o,e.side===Ir,a),c===null)return null;$c.copy(a),$c.applyMatrix4(s.matrixWorld);const l=t.ray.origin.distanceTo($c);return l<t.near||l>t.far?null:{distance:l,point:$c.clone(),object:s}}function Zc(s,e,t,n,i,r,o,a,c,l){s.getVertexPosition(a,qc),s.getVertexPosition(c,Yc),s.getVertexPosition(l,Kc);const u=Pg(s,e,t,n,qc,Yc,Kc,Yf);if(u){const f=new V;Ms.getBarycoord(Yf,qc,Yc,Kc,f),i&&(u.uv=Ms.getInterpolatedAttribute(i,a,c,l,f,new Ye)),r&&(u.uv1=Ms.getInterpolatedAttribute(r,a,c,l,f,new Ye)),o&&(u.normal=Ms.getInterpolatedAttribute(o,a,c,l,f,new V),u.normal.dot(n.direction)>0&&u.normal.multiplyScalar(-1));const h={a,b:c,c:l,normal:new V,materialIndex:0};Ms.getNormal(qc,Yc,Kc,h.normal),u.face=h,u.barycoord=f}return u}const Oa=new Cn,Kf=new Cn,jf=new Cn,Ig=new Cn,$f=new zt,Jc=new V,_u=new qs,Zf=new zt,vu=new Ol;class Lg extends Ut{constructor(e,t){super(e,t),this.isSkinnedMesh=!0,this.type="SkinnedMesh",this.bindMode=Ef,this.bindMatrix=new zt,this.bindMatrixInverse=new zt,this.boundingBox=null,this.boundingSphere=null}computeBoundingBox(){const e=this.geometry;this.boundingBox===null&&(this.boundingBox=new os),this.boundingBox.makeEmpty();const t=e.getAttribute("position");for(let n=0;n<t.count;n++)this.getVertexPosition(n,Jc),this.boundingBox.expandByPoint(Jc)}computeBoundingSphere(){const e=this.geometry;this.boundingSphere===null&&(this.boundingSphere=new qs),this.boundingSphere.makeEmpty();const t=e.getAttribute("position");for(let n=0;n<t.count;n++)this.getVertexPosition(n,Jc),this.boundingSphere.expandByPoint(Jc)}copy(e,t){return super.copy(e,t),this.bindMode=e.bindMode,this.bindMatrix.copy(e.bindMatrix),this.bindMatrixInverse.copy(e.bindMatrixInverse),this.skeleton=e.skeleton,e.boundingBox!==null&&(this.boundingBox=e.boundingBox.clone()),e.boundingSphere!==null&&(this.boundingSphere=e.boundingSphere.clone()),this}raycast(e,t){const n=this.material,i=this.matrixWorld;n!==void 0&&(this.boundingSphere===null&&this.computeBoundingSphere(),_u.copy(this.boundingSphere),_u.applyMatrix4(i),e.ray.intersectsSphere(_u)!==!1&&(Zf.copy(i).invert(),vu.copy(e.ray).applyMatrix4(Zf),!(this.boundingBox!==null&&vu.intersectsBox(this.boundingBox)===!1)&&this._computeIntersections(e,t,vu)))}getVertexPosition(e,t){return super.getVertexPosition(e,t),this.applyBoneTransform(e,t),t}bind(e,t){this.skeleton=e,t===void 0&&(this.updateMatrixWorld(!0),this.skeleton.calculateInverses(),t=this.matrixWorld),this.bindMatrix.copy(t),this.bindMatrixInverse.copy(t).invert()}pose(){this.skeleton.pose()}normalizeSkinWeights(){const e=new Cn,t=this.geometry.attributes.skinWeight;for(let n=0,i=t.count;n<i;n++){e.fromBufferAttribute(t,n);const r=1/e.manhattanLength();r!==1/0?e.multiplyScalar(r):e.set(1,0,0,0),t.setXYZW(n,e.x,e.y,e.z,e.w)}}updateMatrixWorld(e){super.updateMatrixWorld(e),this.bindMode===Ef?this.bindMatrixInverse.copy(this.matrixWorld).invert():this.bindMode===Im?this.bindMatrixInverse.copy(this.bindMatrix).invert():yt("SkinnedMesh: Unrecognized bindMode: "+this.bindMode)}applyBoneTransform(e,t){const n=this.skeleton,i=this.geometry;Kf.fromBufferAttribute(i.attributes.skinIndex,e),jf.fromBufferAttribute(i.attributes.skinWeight,e),t.isVector4?(Oa.copy(t),t.set(0,0,0,0)):(Oa.set(...t,1),t.set(0,0,0)),Oa.applyMatrix4(this.bindMatrix);for(let r=0;r<4;r++){const o=jf.getComponent(r);if(o!==0){const a=Kf.getComponent(r);$f.multiplyMatrices(n.bones[a].matrixWorld,n.boneInverses[a]),t.addScaledVector(Ig.copy(Oa).applyMatrix4($f),o)}}return t.isVector4&&(t.w=Oa.w),t.applyMatrix4(this.bindMatrixInverse)}}class Wp extends On{constructor(){super(),this.isBone=!0,this.type="Bone"}}class Jh extends ui{constructor(e=null,t=1,n=1,i,r,o,a,c,l=ci,u=ci,f,h){super(null,o,a,c,l,u,i,r,f,h),this.isDataTexture=!0,this.image={data:e,width:t,height:n},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}const Jf=new zt,Ng=new zt;class Qh{constructor(e=[],t=[]){this.uuid=rs(),this.bones=e.slice(0),this.boneInverses=t,this.boneMatrices=null,this.boneTexture=null,this.init()}init(){const e=this.bones,t=this.boneInverses;if(this.boneMatrices=new Float32Array(e.length*16),t.length===0)this.calculateInverses();else if(e.length!==t.length){yt("Skeleton: Number of inverse bone matrices does not match amount of bones."),this.boneInverses=[];for(let n=0,i=this.bones.length;n<i;n++)this.boneInverses.push(new zt)}}calculateInverses(){this.boneInverses.length=0;for(let e=0,t=this.bones.length;e<t;e++){const n=new zt;this.bones[e]&&n.copy(this.bones[e].matrixWorld).invert(),this.boneInverses.push(n)}}pose(){for(let e=0,t=this.bones.length;e<t;e++){const n=this.bones[e];n&&n.matrixWorld.copy(this.boneInverses[e]).invert()}for(let e=0,t=this.bones.length;e<t;e++){const n=this.bones[e];n&&(n.parent&&n.parent.isBone?(n.matrix.copy(n.parent.matrixWorld).invert(),n.matrix.multiply(n.matrixWorld)):n.matrix.copy(n.matrixWorld),n.matrix.decompose(n.position,n.quaternion,n.scale))}}update(){const e=this.bones,t=this.boneInverses,n=this.boneMatrices,i=this.boneTexture;for(let r=0,o=e.length;r<o;r++){const a=e[r]?e[r].matrixWorld:Ng;Jf.multiplyMatrices(a,t[r]),Jf.toArray(n,r*16)}i!==null&&(i.needsUpdate=!0)}clone(){return new Qh(this.bones,this.boneInverses)}computeBoneTexture(){let e=Math.sqrt(this.bones.length*4);e=Math.ceil(e/4)*4,e=Math.max(e,4);const t=new Float32Array(e*e*4);t.set(this.boneMatrices);const n=new Jh(t,e,e,ss,is);return n.needsUpdate=!0,this.boneMatrices=t,this.boneTexture=n,this}getBoneByName(e){for(let t=0,n=this.bones.length;t<n;t++){const i=this.bones[t];if(i.name===e)return i}}dispose(){this.boneTexture!==null&&(this.boneTexture.dispose(),this.boneTexture=null)}fromJSON(e,t){this.uuid=e.uuid;for(let n=0,i=e.bones.length;n<i;n++){const r=e.bones[n];let o=t[r];o===void 0&&(yt("Skeleton: No bone found with UUID:",r),o=new Wp),this.bones.push(o),this.boneInverses.push(new zt().fromArray(e.boneInverses[n]))}return this.init(),this}toJSON(){const e={metadata:{version:4.7,type:"Skeleton",generator:"Skeleton.toJSON"},bones:[],boneInverses:[]};e.uuid=this.uuid;const t=this.bones,n=this.boneInverses;for(let i=0,r=t.length;i<r;i++){const o=t[i];e.bones.push(o.uuid);const a=n[i];e.boneInverses.push(a.toArray())}return e}}class lc extends Fn{constructor(e,t,n,i=1){super(e,t,n),this.isInstancedBufferAttribute=!0,this.meshPerAttribute=i}copy(e){return super.copy(e),this.meshPerAttribute=e.meshPerAttribute,this}toJSON(){const e=super.toJSON();return e.meshPerAttribute=this.meshPerAttribute,e.isInstancedBufferAttribute=!0,e}}const Xo=new zt,Qf=new zt,Qc=[],ed=new os,Dg=new zt,Ba=new Ut,ka=new qs;class so extends Ut{constructor(e,t,n){super(e,t),this.isInstancedMesh=!0,this.instanceMatrix=new lc(new Float32Array(n*16),16),this.instanceColor=null,this.morphTexture=null,this.count=n,this.boundingBox=null,this.boundingSphere=null;for(let i=0;i<n;i++)this.setMatrixAt(i,Dg)}computeBoundingBox(){const e=this.geometry,t=this.count;this.boundingBox===null&&(this.boundingBox=new os),e.boundingBox===null&&e.computeBoundingBox(),this.boundingBox.makeEmpty();for(let n=0;n<t;n++)this.getMatrixAt(n,Xo),ed.copy(e.boundingBox).applyMatrix4(Xo),this.boundingBox.union(ed)}computeBoundingSphere(){const e=this.geometry,t=this.count;this.boundingSphere===null&&(this.boundingSphere=new qs),e.boundingSphere===null&&e.computeBoundingSphere(),this.boundingSphere.makeEmpty();for(let n=0;n<t;n++)this.getMatrixAt(n,Xo),ka.copy(e.boundingSphere).applyMatrix4(Xo),this.boundingSphere.union(ka)}copy(e,t){return super.copy(e,t),this.instanceMatrix.copy(e.instanceMatrix),e.morphTexture!==null&&(this.morphTexture=e.morphTexture.clone()),e.instanceColor!==null&&(this.instanceColor=e.instanceColor.clone()),this.count=e.count,e.boundingBox!==null&&(this.boundingBox=e.boundingBox.clone()),e.boundingSphere!==null&&(this.boundingSphere=e.boundingSphere.clone()),this}getColorAt(e,t){return this.instanceColor===null?t.setRGB(1,1,1):t.fromArray(this.instanceColor.array,e*3)}getMatrixAt(e,t){return t.fromArray(this.instanceMatrix.array,e*16)}getMorphAt(e,t){const n=t.morphTargetInfluences,i=this.morphTexture.source.data.data,r=n.length+1,o=e*r+1;for(let a=0;a<n.length;a++)n[a]=i[o+a]}raycast(e,t){const n=this.matrixWorld,i=this.count;if(Ba.geometry=this.geometry,Ba.material=this.material,Ba.material!==void 0&&(this.boundingSphere===null&&this.computeBoundingSphere(),ka.copy(this.boundingSphere),ka.applyMatrix4(n),e.ray.intersectsSphere(ka)!==!1))for(let r=0;r<i;r++){this.getMatrixAt(r,Xo),Qf.multiplyMatrices(n,Xo),Ba.matrixWorld=Qf,Ba.raycast(e,Qc);for(let o=0,a=Qc.length;o<a;o++){const c=Qc[o];c.instanceId=r,c.object=this,t.push(c)}Qc.length=0}}setColorAt(e,t){return this.instanceColor===null&&(this.instanceColor=new lc(new Float32Array(this.instanceMatrix.count*3).fill(1),3)),t.toArray(this.instanceColor.array,e*3),this}setMatrixAt(e,t){return t.toArray(this.instanceMatrix.array,e*16),this}setMorphAt(e,t){const n=t.morphTargetInfluences,i=n.length+1;this.morphTexture===null&&(this.morphTexture=new Jh(new Float32Array(i*this.count),i,this.count,Gh,is));const r=this.morphTexture.source.data.data;let o=0;for(let l=0;l<n.length;l++)o+=n[l];const a=this.geometry.morphTargetsRelative?1:1-o,c=i*e;return r[c]=a,r.set(n,c+1),this}updateMorphTargets(){}dispose(){super.dispose(),this.morphTexture!==null&&(this.morphTexture.dispose(),this.morphTexture=null)}}const $r=new qs,Ug=new Ye(.5,.5),el=new V;class ef{constructor(e=new wr,t=new wr,n=new wr,i=new wr,r=new wr,o=new wr){this.planes=[e,t,n,i,r,o]}set(e,t,n,i,r,o){const a=this.planes;return a[0].copy(e),a[1].copy(t),a[2].copy(n),a[3].copy(i),a[4].copy(r),a[5].copy(o),this}copy(e){const t=this.planes;for(let n=0;n<6;n++)t[n].copy(e.planes[n]);return this}setFromProjectionMatrix(e,t=ks,n=!1){const i=this.planes,r=e.elements,o=r[0],a=r[1],c=r[2],l=r[3],u=r[4],f=r[5],h=r[6],d=r[7],m=r[8],M=r[9],x=r[10],g=r[11],A=r[12],I=r[13],_=r[14],w=r[15];if(i[0].setComponents(l-o,d-u,g-m,w-A).normalize(),i[1].setComponents(l+o,d+u,g+m,w+A).normalize(),i[2].setComponents(l+a,d+f,g+M,w+I).normalize(),i[3].setComponents(l-a,d-f,g-M,w-I).normalize(),n)i[4].setComponents(c,h,x,_).normalize(),i[5].setComponents(l-c,d-h,g-x,w-_).normalize();else if(i[4].setComponents(l-c,d-h,g-x,w-_).normalize(),t===ks)i[5].setComponents(l+c,d+h,g+x,w+_).normalize();else if(t===ac)i[5].setComponents(c,h,x,_).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+t);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),$r.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{const t=e.geometry;t.boundingSphere===null&&t.computeBoundingSphere(),$r.copy(t.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere($r)}intersectsSprite(e){$r.center.set(0,0,0);const t=Ug.distanceTo(e.center);return $r.radius=.7071067811865476+t,$r.applyMatrix4(e.matrixWorld),this.intersectsSphere($r)}intersectsSphere(e){const t=this.planes,n=e.center,i=-e.radius;for(let r=0;r<6;r++)if(t[r].distanceToPoint(n)<i)return!1;return!0}intersectsBox(e){const t=this.planes;for(let n=0;n<6;n++){const i=t[n];if(el.x=i.normal.x>0?e.max.x:e.min.x,el.y=i.normal.y>0?e.max.y:e.min.y,el.z=i.normal.z>0?e.max.z:e.min.z,i.distanceToPoint(el)<0)return!1}return!0}containsPoint(e){const t=this.planes;for(let n=0;n<6;n++)if(t[n].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}class tf extends Vs{constructor(e){super(),this.isLineBasicMaterial=!0,this.type="LineBasicMaterial",this.color=new it(16777215),this.map=null,this.linewidth=1,this.linecap="round",this.linejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.linewidth=e.linewidth,this.linecap=e.linecap,this.linejoin=e.linejoin,this.fog=e.fog,this}}const Il=new V,Ll=new V,td=new zt,za=new Ol,tl=new qs,Mu=new V,nd=new V;class nf extends On{constructor(e=new Rn,t=new tf){super(),this.isLine=!0,this.type="Line",this.geometry=e,this.material=t,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}computeLineDistances(){const e=this.geometry;if(e.index===null){const t=e.attributes.position,n=[0];for(let i=1,r=t.count;i<r;i++)Il.fromBufferAttribute(t,i-1),Ll.fromBufferAttribute(t,i),n[i]=n[i-1],n[i]+=Il.distanceTo(Ll);e.setAttribute("lineDistance",new on(n,1))}else yt("Line.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}intersectsFrustum(e){return e.intersectsObject(this)}raycast(e,t){const n=this.geometry,i=this.matrixWorld,r=e.params.Line.threshold,o=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),tl.copy(n.boundingSphere),tl.applyMatrix4(i),tl.radius+=r,e.ray.intersectsSphere(tl)===!1)return;td.copy(i).invert(),za.copy(e.ray).applyMatrix4(td);const a=r/((this.scale.x+this.scale.y+this.scale.z)/3),c=a*a,l=this.isLineSegments?2:1,u=n.index,h=n.attributes.position;if(u!==null){const d=Math.max(0,o.start),m=Math.min(u.count,o.start+o.count);for(let M=d,x=m-1;M<x;M+=l){const g=u.getX(M),A=u.getX(M+1),I=nl(this,e,za,c,g,A,M);I&&t.push(I)}if(this.isLineLoop){const M=u.getX(m-1),x=u.getX(d),g=nl(this,e,za,c,M,x,m-1);g&&t.push(g)}}else{const d=Math.max(0,o.start),m=Math.min(h.count,o.start+o.count);for(let M=d,x=m-1;M<x;M+=l){const g=nl(this,e,za,c,M,M+1,M);g&&t.push(g)}if(this.isLineLoop){const M=nl(this,e,za,c,m-1,d,m-1);M&&t.push(M)}}}updateMorphTargets(){const t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){const i=t[n[0]];if(i!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,o=i.length;r<o;r++){const a=i[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=r}}}}}function nl(s,e,t,n,i,r,o){const a=s.geometry.attributes.position;if(Il.fromBufferAttribute(a,i),Ll.fromBufferAttribute(a,r),t.distanceSqToSegment(Il,Ll,Mu,nd)>n)return;Mu.applyMatrix4(s.matrixWorld);const l=e.ray.origin.distanceTo(Mu);if(!(l<e.near||l>e.far))return{distance:l,point:nd.clone().applyMatrix4(s.matrixWorld),index:o,face:null,faceIndex:null,barycoord:null,object:s}}const id=new V,sd=new V;class Xp extends nf{constructor(e,t){super(e,t),this.isLineSegments=!0,this.type="LineSegments"}computeLineDistances(){const e=this.geometry;if(e.index===null){const t=e.attributes.position,n=[];for(let i=0,r=t.count;i<r;i+=2)id.fromBufferAttribute(t,i),sd.fromBufferAttribute(t,i+1),n[i]=i===0?0:n[i-1],n[i+1]=n[i]+id.distanceTo(sd);e.setAttribute("lineDistance",new on(n,1))}else yt("LineSegments.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}}class Fg extends nf{constructor(e,t){super(e,t),this.isLineLoop=!0,this.type="LineLoop"}}class qp extends Vs{constructor(e){super(),this.isPointsMaterial=!0,this.type="PointsMaterial",this.color=new it(16777215),this.map=null,this.alphaMap=null,this.size=1,this.sizeAttenuation=!0,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.alphaMap=e.alphaMap,this.size=e.size,this.sizeAttenuation=e.sizeAttenuation,this.fog=e.fog,this}}const rd=new zt,bh=new Ol,il=new qs,sl=new V;class Yp extends On{constructor(e=new Rn,t=new qp){super(),this.isPoints=!0,this.type="Points",this.geometry=e,this.material=t,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}intersectsFrustum(e){return e.intersectsObject(this)}raycast(e,t){const n=this.geometry,i=this.matrixWorld,r=e.params.Points.threshold,o=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),il.copy(n.boundingSphere),il.applyMatrix4(i),il.radius+=r,e.ray.intersectsSphere(il)===!1)return;rd.copy(i).invert(),bh.copy(e.ray).applyMatrix4(rd);const a=r/((this.scale.x+this.scale.y+this.scale.z)/3),c=a*a,l=n.index,f=n.attributes.position;if(l!==null){const h=Math.max(0,o.start),d=Math.min(l.count,o.start+o.count);for(let m=h,M=d;m<M;m++){const x=l.getX(m);sl.fromBufferAttribute(f,x),od(sl,x,c,i,e,t,this)}}else{const h=Math.max(0,o.start),d=Math.min(f.count,o.start+o.count);for(let m=h,M=d;m<M;m++)sl.fromBufferAttribute(f,m),od(sl,m,c,i,e,t,this)}}updateMorphTargets(){const t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){const i=t[n[0]];if(i!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,o=i.length;r<o;r++){const a=i[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=r}}}}}function od(s,e,t,n,i,r,o){const a=bh.distanceSqToPoint(s);if(a<t){const c=new V;bh.closestPointToPoint(s,c),c.applyMatrix4(n);const l=i.ray.origin.distanceTo(c);if(l<i.near||l>i.far)return;r.push({distance:l,distanceToRay:Math.sqrt(a),point:c,index:e,face:null,faceIndex:null,barycoord:null,object:o})}}class Kp extends ui{constructor(e=[],t=lo,n,i,r,o,a,c,l,u){super(e,t,n,i,r,o,a,c,l,u),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}}class Th extends ui{constructor(e,t,n,i,r,o,a,c,l){super(e,t,n,i,r,o,a,c,l),this.isCanvasTexture=!0,this.needsUpdate=!0}}class uc extends ui{constructor(e,t,n=Gs,i,r,o,a=ci,c=ci,l,u=cr,f=1){if(u!==cr&&u!==io)throw new Error("THREE.DepthTexture: format must be either THREE.DepthFormat or THREE.DepthStencilFormat");const h={width:e,height:t,depth:f};super(h,i,r,o,a,c,u,n,l),this.isDepthTexture=!0,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.source=new $h(Object.assign({},e.image)),this.compareFunction=e.compareFunction,this}toJSON(e){const t=super.toJSON(e);return t.compareFunction=this.compareFunction,t}}class Og extends uc{constructor(e,t=Gs,n=lo,i,r,o=ci,a=ci,c,l=cr){const u={width:e,height:e,depth:1},f=[u,u,u,u,u,u];super(e,e,t,n,i,r,o,a,c,l),this.image=f,this.isCubeDepthTexture=!0,this.isCubeTexture=!0}get images(){return this.image}set images(e){this.image=e}}class jp extends ui{constructor(e=null){super(),this.sourceTexture=e,this.isExternalTexture=!0}copy(e){return super.copy(e),this.sourceTexture=e.sourceTexture,this}}class Ki extends Rn{constructor(e=1,t=1,n=1,i=1,r=1,o=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:t,depth:n,widthSegments:i,heightSegments:r,depthSegments:o};const a=this;i=Math.floor(i),r=Math.floor(r),o=Math.floor(o);const c=[],l=[],u=[],f=[];let h=0,d=0;m("z","y","x",-1,-1,n,t,e,o,r,0),m("z","y","x",1,-1,n,t,-e,o,r,1),m("x","z","y",1,1,e,n,t,i,o,2),m("x","z","y",1,-1,e,n,-t,i,o,3),m("x","y","z",1,-1,e,t,n,i,r,4),m("x","y","z",-1,-1,e,t,-n,i,r,5),this.setIndex(c),this.setAttribute("position",new on(l,3)),this.setAttribute("normal",new on(u,3)),this.setAttribute("uv",new on(f,2));function m(M,x,g,A,I,_,w,R,D,v,L){const O=_/D,z=w/v,K=_/2,ee=w/2,X=R/2,J=D+1,ce=v+1;let se=0,Ee=0;const ue=new V;for(let ge=0;ge<ce;ge++){const Se=ge*z-ee;for(let tt=0;tt<J;tt++){const Ze=tt*O-K;ue[M]=Ze*A,ue[x]=Se*I,ue[g]=X,l.push(ue.x,ue.y,ue.z),ue[M]=0,ue[x]=0,ue[g]=R>0?1:-1,u.push(ue.x,ue.y,ue.z),f.push(tt/D),f.push(1-ge/v),se+=1}}for(let ge=0;ge<v;ge++)for(let Se=0;Se<D;Se++){const tt=h+Se+J*ge,Ze=h+Se+J*(ge+1),At=h+(Se+1)+J*(ge+1),bt=h+(Se+1)+J*ge;c.push(tt,Ze,bt),c.push(Ze,At,bt),Ee+=6}a.addGroup(d,Ee,L),d+=Ee,h+=se}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Ki(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}}class Bl extends Rn{constructor(e=1,t=32,n=0,i=Math.PI*2){super(),this.type="CircleGeometry",this.parameters={radius:e,segments:t,thetaStart:n,thetaLength:i},t=Math.max(3,t);const r=[],o=[],a=[],c=[],l=new V,u=new Ye;o.push(0,0,0),a.push(0,0,1),c.push(.5,.5);for(let f=0,h=3;f<=t;f++,h+=3){const d=n+f/t*i;l.x=e*Math.cos(d),l.y=e*Math.sin(d),o.push(l.x,l.y,l.z),a.push(0,0,1),u.x=(o[h]/e+1)/2,u.y=(o[h+1]/e+1)/2,c.push(u.x,u.y)}for(let f=1;f<=t;f++)r.push(f,f+1,0);this.setIndex(r),this.setAttribute("position",new on(o,3)),this.setAttribute("normal",new on(a,3)),this.setAttribute("uv",new on(c,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Bl(e.radius,e.segments,e.thetaStart,e.thetaLength)}}class Li extends Rn{constructor(e=1,t=1,n=1,i=32,r=1,o=!1,a=0,c=Math.PI*2){super(),this.type="CylinderGeometry",this.parameters={radiusTop:e,radiusBottom:t,height:n,radialSegments:i,heightSegments:r,openEnded:o,thetaStart:a,thetaLength:c};const l=this;i=Math.floor(i),r=Math.floor(r);const u=[],f=[],h=[],d=[];let m=0;const M=[],x=n/2;let g=0;A(),o===!1&&(e>0&&I(!0),t>0&&I(!1)),this.setIndex(u),this.setAttribute("position",new on(f,3)),this.setAttribute("normal",new on(h,3)),this.setAttribute("uv",new on(d,2));function A(){const _=new V,w=new V;let R=0;const D=(t-e)/n;for(let v=0;v<=r;v++){const L=[],O=v/r,z=O*(t-e)+e;for(let K=0;K<=i;K++){const ee=K/i,X=ee*c+a,J=Math.sin(X),ce=Math.cos(X);w.x=z*J,w.y=-O*n+x,w.z=z*ce,f.push(w.x,w.y,w.z),_.set(J,D,ce).normalize(),h.push(_.x,_.y,_.z),d.push(ee,1-O),L.push(m++)}M.push(L)}for(let v=0;v<i;v++)for(let L=0;L<r;L++){const O=M[L][v],z=M[L+1][v],K=M[L+1][v+1],ee=M[L][v+1];(e>0||L!==0)&&(u.push(O,z,ee),R+=3),(t>0||L!==r-1)&&(u.push(z,K,ee),R+=3)}l.addGroup(g,R,0),g+=R}function I(_){const w=m,R=new Ye,D=new V;let v=0;const L=_===!0?e:t,O=_===!0?1:-1;for(let K=1;K<=i;K++)f.push(0,x*O,0),h.push(0,O,0),d.push(.5,.5),m++;const z=m;for(let K=0;K<=i;K++){const X=K/i*c+a,J=Math.cos(X),ce=Math.sin(X);D.x=L*ce,D.y=x*O,D.z=L*J,f.push(D.x,D.y,D.z),h.push(0,O,0),R.x=J*.5+.5,R.y=ce*.5*O+.5,d.push(R.x,R.y),m++}for(let K=0;K<i;K++){const ee=w+K,X=z+K;_===!0?u.push(X,X+1,ee):u.push(X+1,X,ee),v+=3}l.addGroup(g,v,_===!0?1:2),g+=v}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Li(e.radiusTop,e.radiusBottom,e.height,e.radialSegments,e.heightSegments,e.openEnded,e.thetaStart,e.thetaLength)}}class hc extends Li{constructor(e=1,t=1,n=32,i=1,r=!1,o=0,a=Math.PI*2){super(0,e,t,n,i,r,o,a),this.type="ConeGeometry",this.parameters={radius:e,height:t,radialSegments:n,heightSegments:i,openEnded:r,thetaStart:o,thetaLength:a}}static fromJSON(e){return new hc(e.radius,e.height,e.radialSegments,e.heightSegments,e.openEnded,e.thetaStart,e.thetaLength)}}class sf extends Rn{constructor(e=[],t=[],n=1,i=0){super(),this.type="PolyhedronGeometry",this.parameters={vertices:e,indices:t,radius:n,detail:i};const r=[],o=[];a(i),l(n),u(),this.setAttribute("position",new on(r,3)),this.setAttribute("normal",new on(r.slice(),3)),this.setAttribute("uv",new on(o,2)),i===0?this.computeVertexNormals():this.normalizeNormals();function a(A){const I=new V,_=new V,w=new V;for(let R=0;R<t.length;R+=3)d(t[R+0],I),d(t[R+1],_),d(t[R+2],w),c(I,_,w,A)}function c(A,I,_,w){const R=w+1,D=[];for(let v=0;v<=R;v++){D[v]=[];const L=A.clone().lerp(_,v/R),O=I.clone().lerp(_,v/R),z=R-v;for(let K=0;K<=z;K++)K===0&&v===R?D[v][K]=L:D[v][K]=L.clone().lerp(O,K/z)}for(let v=0;v<R;v++)for(let L=0;L<2*(R-v)-1;L++){const O=Math.floor(L/2);L%2===0?(h(D[v][O+1]),h(D[v+1][O]),h(D[v][O])):(h(D[v][O+1]),h(D[v+1][O+1]),h(D[v+1][O]))}}function l(A){const I=new V;for(let _=0;_<r.length;_+=3)I.x=r[_+0],I.y=r[_+1],I.z=r[_+2],I.normalize().multiplyScalar(A),r[_+0]=I.x,r[_+1]=I.y,r[_+2]=I.z}function u(){const A=new V;for(let I=0;I<r.length;I+=3){A.x=r[I+0],A.y=r[I+1],A.z=r[I+2];const _=x(A)/2/Math.PI+.5,w=g(A)/Math.PI+.5;o.push(_,1-w)}m(),f()}function f(){for(let A=0;A<o.length;A+=6){const I=o[A+0],_=o[A+2],w=o[A+4],R=Math.max(I,_,w),D=Math.min(I,_,w);R>.9&&D<.1&&(I<.2&&(o[A+0]+=1),_<.2&&(o[A+2]+=1),w<.2&&(o[A+4]+=1))}}function h(A){r.push(A.x,A.y,A.z)}function d(A,I){const _=A*3;I.x=e[_+0],I.y=e[_+1],I.z=e[_+2]}function m(){const A=new V,I=new V,_=new V,w=new V,R=new Ye,D=new Ye,v=new Ye;for(let L=0,O=0;L<r.length;L+=9,O+=6){A.set(r[L+0],r[L+1],r[L+2]),I.set(r[L+3],r[L+4],r[L+5]),_.set(r[L+6],r[L+7],r[L+8]),R.set(o[O+0],o[O+1]),D.set(o[O+2],o[O+3]),v.set(o[O+4],o[O+5]),w.copy(A).add(I).add(_).divideScalar(3);const z=x(w);M(R,O+0,A,z),M(D,O+2,I,z),M(v,O+4,_,z)}}function M(A,I,_,w){w<0&&A.x===1&&(o[I]=A.x-1),_.x===0&&_.z===0&&(o[I]=w/2/Math.PI+.5)}function x(A){return Math.atan2(A.z,-A.x)}function g(A){return Math.atan2(-A.y,Math.sqrt(A.x*A.x+A.z*A.z))}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new sf(e.vertices,e.indices,e.radius,e.detail)}}class Ys{constructor(){this.type="Curve",this.arcLengthDivisions=200,this.needsUpdate=!1,this.cacheArcLengths=null}getPoint(){yt("Curve: .getPoint() not implemented.")}getPointAt(e,t){const n=this.getUtoTmapping(e);return this.getPoint(n,t)}getPoints(e=5){const t=[];for(let n=0;n<=e;n++)t.push(this.getPoint(n/e));return t}getSpacedPoints(e=5){const t=[];for(let n=0;n<=e;n++)t.push(this.getPointAt(n/e));return t}getLength(){const e=this.getLengths();return e[e.length-1]}getLengths(e=this.arcLengthDivisions){if(this.cacheArcLengths&&this.cacheArcLengths.length===e+1&&!this.needsUpdate)return this.cacheArcLengths;this.needsUpdate=!1;const t=[];let n,i=this.getPoint(0),r=0;t.push(0);for(let o=1;o<=e;o++)n=this.getPoint(o/e),r+=n.distanceTo(i),t.push(r),i=n;return this.cacheArcLengths=t,t}updateArcLengths(){this.needsUpdate=!0,this.getLengths()}getUtoTmapping(e,t=null){const n=this.getLengths();let i=0;const r=n.length;let o;t?o=t:o=e*n[r-1];let a=0,c=r-1,l;for(;a<=c;)if(i=Math.floor(a+(c-a)/2),l=n[i]-o,l<0)a=i+1;else if(l>0)c=i-1;else{c=i;break}if(i=c,n[i]===o)return i/(r-1);const u=n[i],h=n[i+1]-u,d=(o-u)/h;return(i+d)/(r-1)}getTangent(e,t){let i=e-1e-4,r=e+1e-4;i<0&&(i=0),r>1&&(r=1);const o=this.getPoint(i),a=this.getPoint(r),c=t||(o.isVector2?new Ye:new V);return c.copy(a).sub(o).normalize(),c}getTangentAt(e,t){const n=this.getUtoTmapping(e);return this.getTangent(n,t)}computeFrenetFrames(e,t=!1){const n=new V,i=[],r=[],o=[],a=new V,c=new zt;for(let d=0;d<=e;d++){const m=d/e;i[d]=this.getTangentAt(m,new V)}r[0]=new V,o[0]=new V;let l=Number.MAX_VALUE;const u=Math.abs(i[0].x),f=Math.abs(i[0].y),h=Math.abs(i[0].z);u<=l&&(l=u,n.set(1,0,0)),f<=l&&(l=f,n.set(0,1,0)),h<=l&&n.set(0,0,1),a.crossVectors(i[0],n).normalize(),r[0].crossVectors(i[0],a),o[0].crossVectors(i[0],r[0]);for(let d=1;d<=e;d++){if(r[d]=r[d-1].clone(),o[d]=o[d-1].clone(),a.crossVectors(i[d-1],i[d]),a.length()>Number.EPSILON){a.normalize();const m=Math.acos(Jt(i[d-1].dot(i[d]),-1,1));r[d].applyMatrix4(c.makeRotationAxis(a,m))}o[d].crossVectors(i[d],r[d])}if(t===!0){let d=Math.acos(Jt(r[0].dot(r[e]),-1,1));d/=e,i[0].dot(a.crossVectors(r[0],r[e]))>0&&(d=-d);for(let m=1;m<=e;m++)r[m].applyMatrix4(c.makeRotationAxis(i[m],d*m)),o[m].crossVectors(i[m],r[m])}return{tangents:i,normals:r,binormals:o}}clone(){return new this.constructor().copy(this)}copy(e){return this.arcLengthDivisions=e.arcLengthDivisions,this}toJSON(){const e={metadata:{version:4.7,type:"Curve",generator:"Curve.toJSON"}};return e.arcLengthDivisions=this.arcLengthDivisions,e.type=this.type,e}fromJSON(e){return this.arcLengthDivisions=e.arcLengthDivisions,this}}class rf extends Ys{constructor(e=0,t=0,n=1,i=1,r=0,o=Math.PI*2,a=!1,c=0){super(),this.isEllipseCurve=!0,this.type="EllipseCurve",this.aX=e,this.aY=t,this.xRadius=n,this.yRadius=i,this.aStartAngle=r,this.aEndAngle=o,this.aClockwise=a,this.aRotation=c}getPoint(e,t=new Ye){const n=t,i=Math.PI*2;let r=this.aEndAngle-this.aStartAngle;const o=Math.abs(r)<Number.EPSILON;for(;r<0;)r+=i;for(;r>i;)r-=i;r<Number.EPSILON&&(o?r=0:r=i),this.aClockwise===!0&&!o&&(r===i?r=-i:r=r-i);const a=this.aStartAngle+e*r;let c=this.aX+this.xRadius*Math.cos(a),l=this.aY+this.yRadius*Math.sin(a);if(this.aRotation!==0){const u=Math.cos(this.aRotation),f=Math.sin(this.aRotation),h=c-this.aX,d=l-this.aY;c=h*u-d*f+this.aX,l=h*f+d*u+this.aY}return n.set(c,l)}copy(e){return super.copy(e),this.aX=e.aX,this.aY=e.aY,this.xRadius=e.xRadius,this.yRadius=e.yRadius,this.aStartAngle=e.aStartAngle,this.aEndAngle=e.aEndAngle,this.aClockwise=e.aClockwise,this.aRotation=e.aRotation,this}toJSON(){const e=super.toJSON();return e.aX=this.aX,e.aY=this.aY,e.xRadius=this.xRadius,e.yRadius=this.yRadius,e.aStartAngle=this.aStartAngle,e.aEndAngle=this.aEndAngle,e.aClockwise=this.aClockwise,e.aRotation=this.aRotation,e}fromJSON(e){return super.fromJSON(e),this.aX=e.aX,this.aY=e.aY,this.xRadius=e.xRadius,this.yRadius=e.yRadius,this.aStartAngle=e.aStartAngle,this.aEndAngle=e.aEndAngle,this.aClockwise=e.aClockwise,this.aRotation=e.aRotation,this}}class Bg extends rf{constructor(e,t,n,i,r,o){super(e,t,n,n,i,r,o),this.isArcCurve=!0,this.type="ArcCurve"}}function of(){let s=0,e=0,t=0,n=0;function i(r,o,a,c){s=r,e=a,t=-3*r+3*o-2*a-c,n=2*r-2*o+a+c}return{initCatmullRom:function(r,o,a,c,l){i(o,a,l*(a-r),l*(c-o))},initNonuniformCatmullRom:function(r,o,a,c,l,u,f){let h=(o-r)/l-(a-r)/(l+u)+(a-o)/u,d=(a-o)/u-(c-o)/(u+f)+(c-a)/f;h*=u,d*=u,i(o,a,h,d)},calc:function(r){const o=r*r,a=o*r;return s+e*r+t*o+n*a}}}const ad=new V,cd=new V,yu=new of,Su=new of,bu=new of;class $p extends Ys{constructor(e=[],t=!1,n="centripetal",i=.5){super(),this.isCatmullRomCurve3=!0,this.type="CatmullRomCurve3",this.points=e,this.closed=t,this.curveType=n,this.tension=i}getPoint(e,t=new V){const n=t,i=this.points,r=i.length,o=(r-(this.closed?0:1))*e;let a=Math.floor(o),c=o-a;this.closed?a+=a>0?0:(Math.floor(Math.abs(a)/r)+1)*r:c===0&&a===r-1&&(a=r-2,c=1);let l,u;this.closed||a>0?l=i[(a-1)%r]:(cd.subVectors(i[0],i[1]).add(i[0]),l=cd);const f=i[a%r],h=i[(a+1)%r];if(this.closed||a+2<r?u=i[(a+2)%r]:(ad.subVectors(i[r-1],i[r-2]).add(i[r-1]),u=ad),this.curveType==="centripetal"||this.curveType==="chordal"){const d=this.curveType==="chordal"?.5:.25;let m=Math.pow(l.distanceToSquared(f),d),M=Math.pow(f.distanceToSquared(h),d),x=Math.pow(h.distanceToSquared(u),d);M<1e-4&&(M=1),m<1e-4&&(m=M),x<1e-4&&(x=M),yu.initNonuniformCatmullRom(l.x,f.x,h.x,u.x,m,M,x),Su.initNonuniformCatmullRom(l.y,f.y,h.y,u.y,m,M,x),bu.initNonuniformCatmullRom(l.z,f.z,h.z,u.z,m,M,x)}else this.curveType==="catmullrom"&&(yu.initCatmullRom(l.x,f.x,h.x,u.x,this.tension),Su.initCatmullRom(l.y,f.y,h.y,u.y,this.tension),bu.initCatmullRom(l.z,f.z,h.z,u.z,this.tension));return n.set(yu.calc(c),Su.calc(c),bu.calc(c)),n}copy(e){super.copy(e),this.points=[];for(let t=0,n=e.points.length;t<n;t++){const i=e.points[t];this.points.push(i.clone())}return this.closed=e.closed,this.curveType=e.curveType,this.tension=e.tension,this}toJSON(){const e=super.toJSON();e.points=[];for(let t=0,n=this.points.length;t<n;t++){const i=this.points[t];e.points.push(i.toArray())}return e.closed=this.closed,e.curveType=this.curveType,e.tension=this.tension,e}fromJSON(e){super.fromJSON(e),this.points=[];for(let t=0,n=e.points.length;t<n;t++){const i=e.points[t];this.points.push(new V().fromArray(i))}return this.closed=e.closed,this.curveType=e.curveType,this.tension=e.tension,this}}function ld(s,e,t,n,i){const r=(n-e)*.5,o=(i-t)*.5,a=s*s,c=s*a;return(2*t-2*n+r+o)*c+(-3*t+3*n-2*r-o)*a+r*s+t}function kg(s,e){const t=1-s;return t*t*e}function zg(s,e){return 2*(1-s)*s*e}function Hg(s,e){return s*s*e}function ec(s,e,t,n){return kg(s,e)+zg(s,t)+Hg(s,n)}function Vg(s,e){const t=1-s;return t*t*t*e}function Gg(s,e){const t=1-s;return 3*t*t*s*e}function Wg(s,e){return 3*(1-s)*s*s*e}function Xg(s,e){return s*s*s*e}function tc(s,e,t,n,i){return Vg(s,e)+Gg(s,t)+Wg(s,n)+Xg(s,i)}class Zp extends Ys{constructor(e=new Ye,t=new Ye,n=new Ye,i=new Ye){super(),this.isCubicBezierCurve=!0,this.type="CubicBezierCurve",this.v0=e,this.v1=t,this.v2=n,this.v3=i}getPoint(e,t=new Ye){const n=t,i=this.v0,r=this.v1,o=this.v2,a=this.v3;return n.set(tc(e,i.x,r.x,o.x,a.x),tc(e,i.y,r.y,o.y,a.y)),n}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this.v3.copy(e.v3),this}toJSON(){const e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e.v3=this.v3.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this.v3.fromArray(e.v3),this}}class qg extends Ys{constructor(e=new V,t=new V,n=new V,i=new V){super(),this.isCubicBezierCurve3=!0,this.type="CubicBezierCurve3",this.v0=e,this.v1=t,this.v2=n,this.v3=i}getPoint(e,t=new V){const n=t,i=this.v0,r=this.v1,o=this.v2,a=this.v3;return n.set(tc(e,i.x,r.x,o.x,a.x),tc(e,i.y,r.y,o.y,a.y),tc(e,i.z,r.z,o.z,a.z)),n}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this.v3.copy(e.v3),this}toJSON(){const e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e.v3=this.v3.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this.v3.fromArray(e.v3),this}}class Jp extends Ys{constructor(e=new Ye,t=new Ye){super(),this.isLineCurve=!0,this.type="LineCurve",this.v1=e,this.v2=t}getPoint(e,t=new Ye){const n=t;return e===1?n.copy(this.v2):(n.copy(this.v2).sub(this.v1),n.multiplyScalar(e).add(this.v1)),n}getPointAt(e,t){return this.getPoint(e,t)}getTangent(e,t=new Ye){return t.subVectors(this.v2,this.v1).normalize()}getTangentAt(e,t){return this.getTangent(e,t)}copy(e){return super.copy(e),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){const e=super.toJSON();return e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}}class Yg extends Ys{constructor(e=new V,t=new V){super(),this.isLineCurve3=!0,this.type="LineCurve3",this.v1=e,this.v2=t}getPoint(e,t=new V){const n=t;return e===1?n.copy(this.v2):(n.copy(this.v2).sub(this.v1),n.multiplyScalar(e).add(this.v1)),n}getPointAt(e,t){return this.getPoint(e,t)}getTangent(e,t=new V){return t.subVectors(this.v2,this.v1).normalize()}getTangentAt(e,t){return this.getTangent(e,t)}copy(e){return super.copy(e),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){const e=super.toJSON();return e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}}class Qp extends Ys{constructor(e=new Ye,t=new Ye,n=new Ye){super(),this.isQuadraticBezierCurve=!0,this.type="QuadraticBezierCurve",this.v0=e,this.v1=t,this.v2=n}getPoint(e,t=new Ye){const n=t,i=this.v0,r=this.v1,o=this.v2;return n.set(ec(e,i.x,r.x,o.x),ec(e,i.y,r.y,o.y)),n}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){const e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}}class Kg extends Ys{constructor(e=new V,t=new V,n=new V){super(),this.isQuadraticBezierCurve3=!0,this.type="QuadraticBezierCurve3",this.v0=e,this.v1=t,this.v2=n}getPoint(e,t=new V){const n=t,i=this.v0,r=this.v1,o=this.v2;return n.set(ec(e,i.x,r.x,o.x),ec(e,i.y,r.y,o.y),ec(e,i.z,r.z,o.z)),n}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){const e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}}class e0 extends Ys{constructor(e=[]){super(),this.isSplineCurve=!0,this.type="SplineCurve",this.points=e}getPoint(e,t=new Ye){const n=t,i=this.points,r=(i.length-1)*e,o=Math.floor(r),a=r-o,c=i[o===0?o:o-1],l=i[o],u=i[o>i.length-2?i.length-1:o+1],f=i[o>i.length-3?i.length-1:o+2];return n.set(ld(a,c.x,l.x,u.x,f.x),ld(a,c.y,l.y,u.y,f.y)),n}copy(e){super.copy(e),this.points=[];for(let t=0,n=e.points.length;t<n;t++){const i=e.points[t];this.points.push(i.clone())}return this}toJSON(){const e=super.toJSON();e.points=[];for(let t=0,n=this.points.length;t<n;t++){const i=this.points[t];e.points.push(i.toArray())}return e}fromJSON(e){super.fromJSON(e),this.points=[];for(let t=0,n=e.points.length;t<n;t++){const i=e.points[t];this.points.push(new Ye().fromArray(i))}return this}}var Eh=Object.freeze({__proto__:null,ArcCurve:Bg,CatmullRomCurve3:$p,CubicBezierCurve:Zp,CubicBezierCurve3:qg,EllipseCurve:rf,LineCurve:Jp,LineCurve3:Yg,QuadraticBezierCurve:Qp,QuadraticBezierCurve3:Kg,SplineCurve:e0});class jg extends Ys{constructor(){super(),this.type="CurvePath",this.curves=[],this.autoClose=!1}add(e){this.curves.push(e)}closePath(){const e=this.curves[0].getPoint(0),t=this.curves[this.curves.length-1].getPoint(1);if(!e.equals(t)){const n=e.isVector2===!0?"LineCurve":"LineCurve3";this.curves.push(new Eh[n](t,e))}return this}getPoint(e,t){const n=e*this.getLength(),i=this.getCurveLengths();let r=0;for(;r<i.length;){if(i[r]>=n){const o=i[r]-n,a=this.curves[r],c=a.getLength(),l=c===0?0:1-o/c;return a.getPointAt(l,t)}r++}return null}getLength(){const e=this.getCurveLengths();return e[e.length-1]}updateArcLengths(){this.needsUpdate=!0,this.cacheLengths=null,this.getCurveLengths()}getCurveLengths(){if(this.cacheLengths&&this.cacheLengths.length===this.curves.length)return this.cacheLengths;const e=[];let t=0;for(let n=0,i=this.curves.length;n<i;n++)t+=this.curves[n].getLength(),e.push(t);return this.cacheLengths=e,e}getSpacedPoints(e=40){const t=[];for(let n=0;n<=e;n++)t.push(this.getPoint(n/e));return this.autoClose&&t.push(t[0]),t}getPoints(e=12){const t=[];let n;for(let i=0,r=this.curves;i<r.length;i++){const o=r[i],a=o.isEllipseCurve?e*2:o.isLineCurve||o.isLineCurve3?1:o.isSplineCurve?e*o.points.length:e,c=o.getPoints(a);for(let l=0;l<c.length;l++){const u=c[l];n&&n.equals(u)||(t.push(u),n=u)}}return this.autoClose&&t.length>1&&!t[t.length-1].equals(t[0])&&t.push(t[0]),t}copy(e){super.copy(e),this.curves=[];for(let t=0,n=e.curves.length;t<n;t++){const i=e.curves[t];this.curves.push(i.clone())}return this.autoClose=e.autoClose,this}toJSON(){const e=super.toJSON();e.autoClose=this.autoClose,e.curves=[];for(let t=0,n=this.curves.length;t<n;t++){const i=this.curves[t];e.curves.push(i.toJSON())}return e}fromJSON(e){super.fromJSON(e),this.autoClose=e.autoClose,this.curves=[];for(let t=0,n=e.curves.length;t<n;t++){const i=e.curves[t];this.curves.push(new Eh[i.type]().fromJSON(i))}return this}}class ud extends jg{constructor(e){super(),this.type="Path",this.currentPoint=new Ye,e&&this.setFromPoints(e)}setFromPoints(e){this.moveTo(e[0].x,e[0].y);for(let t=1,n=e.length;t<n;t++)this.lineTo(e[t].x,e[t].y);return this}moveTo(e,t){return this.currentPoint.set(e,t),this}lineTo(e,t){const n=new Jp(this.currentPoint.clone(),new Ye(e,t));return this.curves.push(n),this.currentPoint.set(e,t),this}quadraticCurveTo(e,t,n,i){const r=new Qp(this.currentPoint.clone(),new Ye(e,t),new Ye(n,i));return this.curves.push(r),this.currentPoint.set(n,i),this}bezierCurveTo(e,t,n,i,r,o){const a=new Zp(this.currentPoint.clone(),new Ye(e,t),new Ye(n,i),new Ye(r,o));return this.curves.push(a),this.currentPoint.set(r,o),this}splineThru(e){const t=[this.currentPoint.clone()].concat(e),n=new e0(t);return this.curves.push(n),this.currentPoint.copy(e[e.length-1]),this}arc(e,t,n,i,r,o){const a=this.currentPoint.x,c=this.currentPoint.y;return this.absarc(e+a,t+c,n,i,r,o),this}absarc(e,t,n,i,r,o){return this.absellipse(e,t,n,n,i,r,o),this}ellipse(e,t,n,i,r,o,a,c){const l=this.currentPoint.x,u=this.currentPoint.y;return this.absellipse(e+l,t+u,n,i,r,o,a,c),this}absellipse(e,t,n,i,r,o,a,c){const l=new rf(e,t,n,i,r,o,a,c);if(this.curves.length>0){const f=l.getPoint(0);f.equals(this.currentPoint)||this.lineTo(f.x,f.y)}this.curves.push(l);const u=l.getPoint(1);return this.currentPoint.copy(u),this}copy(e){return super.copy(e),this.currentPoint.copy(e.currentPoint),this}toJSON(){const e=super.toJSON();return e.currentPoint=this.currentPoint.toArray(),e}fromJSON(e){return super.fromJSON(e),this.currentPoint.fromArray(e.currentPoint),this}}class t0 extends ud{constructor(e){super(e),this.uuid=rs(),this.type="Shape",this.holes=[]}getPointsHoles(e){const t=[];for(let n=0,i=this.holes.length;n<i;n++)t[n]=this.holes[n].getPoints(e);return t}extractPoints(e){return{shape:this.getPoints(e),holes:this.getPointsHoles(e)}}copy(e){super.copy(e),this.holes=[];for(let t=0,n=e.holes.length;t<n;t++){const i=e.holes[t];this.holes.push(i.clone())}return this}toJSON(){const e=super.toJSON();e.uuid=this.uuid,e.holes=[];for(let t=0,n=this.holes.length;t<n;t++){const i=this.holes[t];e.holes.push(i.toJSON())}return e}fromJSON(e){super.fromJSON(e),this.uuid=e.uuid,this.holes=[];for(let t=0,n=e.holes.length;t<n;t++){const i=e.holes[t];this.holes.push(new ud().fromJSON(i))}return this}}function $g(s,e,t=2){const n=e&&e.length,i=n?e[0]*t:s.length;let r=n0(s,0,i,t,!0);const o=[];if(!r||r.next===r.prev)return o;let a,c,l;if(n&&(r=tx(s,e,r,t)),s.length>80*t){a=s[0],c=s[1];let u=a,f=c;for(let h=t;h<i;h+=t){const d=s[h],m=s[h+1];d<a&&(a=d),m<c&&(c=m),d>u&&(u=d),m>f&&(f=m)}l=Math.max(u-a,f-c),l=l!==0?32767/l:0}return fc(r,o,t,a,c,l,0),o}function n0(s,e,t,n,i){let r;if(i===fx(s,e,t,n)>0)for(let o=e;o<t;o+=n)r=hd(o/n|0,s[o],s[o+1],r);else for(let o=t-n;o>=e;o-=n)r=hd(o/n|0,s[o],s[o+1],r);return r&&oa(r,r.next)&&(pc(r),r=r.next),r}function ho(s,e){if(!s)return s;e||(e=s);let t=s,n;do if(n=!1,!t.steiner&&(oa(t,t.next)||qn(t.prev,t,t.next)===0)){if(pc(t),t=e=t.prev,t===t.next)break;n=!0}else t=t.next;while(n||t!==e);return e}function fc(s,e,t,n,i,r,o){if(!s)return;!o&&r&&ox(s,n,i,r);let a=s;for(;s.prev!==s.next;){const c=s.prev,l=s.next;if(r?Jg(s,n,i,r):Zg(s)){e.push(c.i,s.i,l.i),pc(s),s=l.next,a=l.next;continue}if(s=l,s===a){o?o===1?(s=Qg(ho(s),e),fc(s,e,t,n,i,r,2)):o===2&&ex(s,e,t,n,i,r):fc(ho(s),e,t,n,i,r,1);break}}}function Zg(s){const e=s.prev,t=s,n=s.next;if(qn(e,t,n)>=0)return!1;const i=e.x,r=t.x,o=n.x,a=e.y,c=t.y,l=n.y,u=Math.min(i,r,o),f=Math.min(a,c,l),h=Math.max(i,r,o),d=Math.max(a,c,l);let m=n.next;for(;m!==e;){if(m.x>=u&&m.x<=h&&m.y>=f&&m.y<=d&&ja(i,a,r,c,o,l,m.x,m.y)&&qn(m.prev,m,m.next)>=0)return!1;m=m.next}return!0}function Jg(s,e,t,n){const i=s.prev,r=s,o=s.next;if(qn(i,r,o)>=0)return!1;const a=i.x,c=r.x,l=o.x,u=i.y,f=r.y,h=o.y,d=Math.min(a,c,l),m=Math.min(u,f,h),M=Math.max(a,c,l),x=Math.max(u,f,h),g=wh(d,m,e,t,n),A=wh(M,x,e,t,n);let I=s.prevZ,_=s.nextZ;for(;I&&I.z>=g&&_&&_.z<=A;){if(I.x>=d&&I.x<=M&&I.y>=m&&I.y<=x&&I!==i&&I!==o&&ja(a,u,c,f,l,h,I.x,I.y)&&qn(I.prev,I,I.next)>=0||(I=I.prevZ,_.x>=d&&_.x<=M&&_.y>=m&&_.y<=x&&_!==i&&_!==o&&ja(a,u,c,f,l,h,_.x,_.y)&&qn(_.prev,_,_.next)>=0))return!1;_=_.nextZ}for(;I&&I.z>=g;){if(I.x>=d&&I.x<=M&&I.y>=m&&I.y<=x&&I!==i&&I!==o&&ja(a,u,c,f,l,h,I.x,I.y)&&qn(I.prev,I,I.next)>=0)return!1;I=I.prevZ}for(;_&&_.z<=A;){if(_.x>=d&&_.x<=M&&_.y>=m&&_.y<=x&&_!==i&&_!==o&&ja(a,u,c,f,l,h,_.x,_.y)&&qn(_.prev,_,_.next)>=0)return!1;_=_.nextZ}return!0}function Qg(s,e){let t=s;do{const n=t.prev,i=t.next.next;!oa(n,i)&&s0(n,t,t.next,i)&&dc(n,i)&&dc(i,n)&&(e.push(n.i,t.i,i.i),pc(t),pc(t.next),t=s=i),t=t.next}while(t!==s);return ho(t)}function ex(s,e,t,n,i,r){let o=s;do{let a=o.next.next;for(;a!==o.prev;){if(o.i!==a.i&&lx(o,a)){let c=r0(o,a);o=ho(o,o.next),c=ho(c,c.next),fc(o,e,t,n,i,r,0),fc(c,e,t,n,i,r,0);return}a=a.next}o=o.next}while(o!==s)}function tx(s,e,t,n){const i=[];for(let r=0,o=e.length;r<o;r++){const a=e[r]*n,c=r<o-1?e[r+1]*n:s.length,l=n0(s,a,c,n,!1);l===l.next&&(l.steiner=!0),i.push(cx(l))}i.sort(nx);for(let r=0;r<i.length;r++)t=ix(i[r],t);return t}function nx(s,e){let t=s.x-e.x;if(t===0&&(t=s.y-e.y,t===0)){const n=(s.next.y-s.y)/(s.next.x-s.x),i=(e.next.y-e.y)/(e.next.x-e.x);t=n-i}return t}function ix(s,e){const t=sx(s,e);if(!t)return e;const n=r0(t,s);return ho(n,n.next),ho(t,t.next)}function sx(s,e){let t=e;const n=s.x,i=s.y;let r=-1/0,o;if(oa(s,t))return t;do{if(oa(s,t.next))return t.next;if(i<=t.y&&i>=t.next.y&&t.next.y!==t.y){const f=t.x+(i-t.y)*(t.next.x-t.x)/(t.next.y-t.y);if(f<=n&&f>r&&(r=f,o=t.x<t.next.x?t:t.next,f===n))return o}t=t.next}while(t!==e);if(!o)return null;const a=o,c=o.x,l=o.y;let u=1/0;t=o;do{if(n>=t.x&&t.x>=c&&n!==t.x&&i0(i<l?n:r,i,c,l,i<l?r:n,i,t.x,t.y)){const f=Math.abs(i-t.y)/(n-t.x);dc(t,s)&&(f<u||f===u&&(t.x>o.x||t.x===o.x&&rx(o,t)))&&(o=t,u=f)}t=t.next}while(t!==a);return o}function rx(s,e){return qn(s.prev,s,e.prev)<0&&qn(e.next,s,s.next)<0}function ox(s,e,t,n){let i=s;do i.z===0&&(i.z=wh(i.x,i.y,e,t,n)),i.prevZ=i.prev,i.nextZ=i.next,i=i.next;while(i!==s);i.prevZ.nextZ=null,i.prevZ=null,ax(i)}function ax(s){let e,t=1;do{let n=s,i;s=null;let r=null;for(e=0;n;){e++;let o=n,a=0;for(let l=0;l<t&&(a++,o=o.nextZ,!!o);l++);let c=t;for(;a>0||c>0&&o;)a!==0&&(c===0||!o||n.z<=o.z)?(i=n,n=n.nextZ,a--):(i=o,o=o.nextZ,c--),r?r.nextZ=i:s=i,i.prevZ=r,r=i;n=o}r.nextZ=null,t*=2}while(e>1);return s}function wh(s,e,t,n,i){return s=(s-t)*i|0,e=(e-n)*i|0,s=(s|s<<8)&16711935,s=(s|s<<4)&252645135,s=(s|s<<2)&858993459,s=(s|s<<1)&1431655765,e=(e|e<<8)&16711935,e=(e|e<<4)&252645135,e=(e|e<<2)&858993459,e=(e|e<<1)&1431655765,s|e<<1}function cx(s){let e=s,t=s;do(e.x<t.x||e.x===t.x&&e.y<t.y)&&(t=e),e=e.next;while(e!==s);return t}function i0(s,e,t,n,i,r,o,a){return(i-o)*(e-a)>=(s-o)*(r-a)&&(s-o)*(n-a)>=(t-o)*(e-a)&&(t-o)*(r-a)>=(i-o)*(n-a)}function ja(s,e,t,n,i,r,o,a){return!(s===o&&e===a)&&i0(s,e,t,n,i,r,o,a)}function lx(s,e){return s.next.i!==e.i&&s.prev.i!==e.i&&!ux(s,e)&&(dc(s,e)&&dc(e,s)&&hx(s,e)&&(qn(s.prev,s,e.prev)||qn(s,e.prev,e))||oa(s,e)&&qn(s.prev,s,s.next)>0&&qn(e.prev,e,e.next)>0)}function qn(s,e,t){return(e.y-s.y)*(t.x-e.x)-(e.x-s.x)*(t.y-e.y)}function oa(s,e){return s.x===e.x&&s.y===e.y}function s0(s,e,t,n){const i=ol(qn(s,e,t)),r=ol(qn(s,e,n)),o=ol(qn(t,n,s)),a=ol(qn(t,n,e));return!!(i!==r&&o!==a||i===0&&rl(s,t,e)||r===0&&rl(s,n,e)||o===0&&rl(t,s,n)||a===0&&rl(t,e,n))}function rl(s,e,t){return e.x<=Math.max(s.x,t.x)&&e.x>=Math.min(s.x,t.x)&&e.y<=Math.max(s.y,t.y)&&e.y>=Math.min(s.y,t.y)}function ol(s){return s>0?1:s<0?-1:0}function ux(s,e){let t=s;do{if(t.i!==s.i&&t.next.i!==s.i&&t.i!==e.i&&t.next.i!==e.i&&s0(t,t.next,s,e))return!0;t=t.next}while(t!==s);return!1}function dc(s,e){return qn(s.prev,s,s.next)<0?qn(s,e,s.next)>=0&&qn(s,s.prev,e)>=0:qn(s,e,s.prev)<0||qn(s,s.next,e)<0}function hx(s,e){let t=s,n=!1;const i=(s.x+e.x)/2,r=(s.y+e.y)/2;do t.y>r!=t.next.y>r&&t.next.y!==t.y&&i<(t.next.x-t.x)*(r-t.y)/(t.next.y-t.y)+t.x&&(n=!n),t=t.next;while(t!==s);return n}function r0(s,e){const t=Ah(s.i,s.x,s.y),n=Ah(e.i,e.x,e.y),i=s.next,r=e.prev;return s.next=e,e.prev=s,t.next=i,i.prev=t,n.next=t,t.prev=n,r.next=n,n.prev=r,n}function hd(s,e,t,n){const i=Ah(s,e,t);return n?(i.next=n.next,i.prev=n,n.next.prev=i,n.next=i):(i.prev=i,i.next=i),i}function pc(s){s.next.prev=s.prev,s.prev.next=s.next,s.prevZ&&(s.prevZ.nextZ=s.nextZ),s.nextZ&&(s.nextZ.prevZ=s.prevZ)}function Ah(s,e,t){return{i:s,x:e,y:t,prev:null,next:null,z:0,prevZ:null,nextZ:null,steiner:!1}}function fx(s,e,t,n){let i=0;for(let r=e,o=t-n;r<t;r+=n)i+=(s[o]-s[r])*(s[r+1]+s[o+1]),o=r;return i}class dx{static triangulate(e,t,n=2){return $g(e,t,n)}}class Qo{static area(e){const t=e.length;let n=0;for(let i=t-1,r=0;r<t;i=r++)n+=e[i].x*e[r].y-e[r].x*e[i].y;return n*.5}static isClockWise(e){return Qo.area(e)<0}static triangulateShape(e,t){const n=[],i=[],r=[];fd(e),dd(n,e);let o=e.length;t.forEach(fd);for(let c=0;c<t.length;c++)i.push(o),o+=t[c].length,dd(n,t[c]);const a=dx.triangulate(n,i);for(let c=0;c<a.length;c+=3)r.push(a.slice(c,c+3));return r}}function fd(s){const e=s.length;e>2&&s[e-1].equals(s[0])&&s.pop()}function dd(s,e){for(let t=0;t<e.length;t++)s.push(e[t].x),s.push(e[t].y)}class af extends Rn{constructor(e=new t0([new Ye(.5,.5),new Ye(-.5,.5),new Ye(-.5,-.5),new Ye(.5,-.5)]),t={}){super(),this.type="ExtrudeGeometry",this.parameters={shapes:e,options:t},e=Array.isArray(e)?e:[e];const n=this,i=[],r=[];for(let a=0,c=e.length;a<c;a++){const l=e[a];o(l)}this.setAttribute("position",new on(i,3)),this.setAttribute("uv",new on(r,2)),this.computeVertexNormals();function o(a){const c=[],l=t.curveSegments!==void 0?t.curveSegments:12,u=t.steps!==void 0?t.steps:1,f=t.depth!==void 0?t.depth:1;let h=t.bevelEnabled!==void 0?t.bevelEnabled:!0,d=t.bevelThickness!==void 0?t.bevelThickness:.2,m=t.bevelSize!==void 0?t.bevelSize:d-.1,M=t.bevelOffset!==void 0?t.bevelOffset:0,x=t.bevelSegments!==void 0?t.bevelSegments:3;const g=t.extrudePath,A=t.UVGenerator!==void 0?t.UVGenerator:px;let I,_=!1,w,R,D,v;if(g){I=g.getSpacedPoints(u),_=!0,h=!1;const be=g.isCatmullRomCurve3?g.closed:!1;w=g.computeFrenetFrames(u,be),R=new V,D=new V,v=new V}h||(x=0,d=0,m=0,M=0);const L=a.extractPoints(l);let O=L.shape;const z=L.holes;if(!Qo.isClockWise(O)){O=O.reverse();for(let be=0,Ae=z.length;be<Ae;be++){const Re=z[be];Qo.isClockWise(Re)&&(z[be]=Re.reverse())}}function ee(be){const Re=10000000000000001e-36;let Pe=be[0];for(let Ve=1;Ve<=be.length;Ve++){const vt=Ve%be.length,ut=be[vt],Mt=ut.x-Pe.x,re=ut.y-Pe.y,F=Mt*Mt+re*re,xt=Math.max(Math.abs(ut.x),Math.abs(ut.y),Math.abs(Pe.x),Math.abs(Pe.y)),Ct=Re*xt*xt;if(F<=Ct){be.splice(vt,1),Ve--;continue}Pe=ut}}ee(O),z.forEach(ee);const X=z.length,J=O;for(let be=0;be<X;be++){const Ae=z[be];O=O.concat(Ae)}function ce(be,Ae,Re){return Ae||kt("ExtrudeGeometry: vec does not exist"),be.clone().addScaledVector(Ae,Re)}const se=O.length;function Ee(be,Ae,Re){let Pe,Ve,vt;const ut=be.x-Ae.x,Mt=be.y-Ae.y,re=Re.x-be.x,F=Re.y-be.y,xt=ut*ut+Mt*Mt,Ct=ut*F-Mt*re;if(Math.abs(Ct)>Number.EPSILON){const U=Math.sqrt(xt),y=Math.sqrt(re*re+F*F),$=Ae.x-Mt/U,ie=Ae.y+ut/U,de=Re.x-F/y,Le=Re.y+re/y,ke=((de-$)*F-(Le-ie)*re)/(ut*F-Mt*re);Pe=$+ut*ke-be.x,Ve=ie+Mt*ke-be.y;const pe=Pe*Pe+Ve*Ve;if(pe<=2)return new Ye(Pe,Ve);vt=Math.sqrt(pe/2)}else{let U=!1;ut>Number.EPSILON?re>Number.EPSILON&&(U=!0):ut<-Number.EPSILON?re<-Number.EPSILON&&(U=!0):Math.sign(Mt)===Math.sign(F)&&(U=!0),U?(Pe=-Mt,Ve=ut,vt=Math.sqrt(xt)):(Pe=ut,Ve=Mt,vt=Math.sqrt(xt/2))}return new Ye(Pe/vt,Ve/vt)}const ue=[];for(let be=0,Ae=J.length,Re=Ae-1,Pe=be+1;be<Ae;be++,Re++,Pe++)Re===Ae&&(Re=0),Pe===Ae&&(Pe=0),ue[be]=Ee(J[be],J[Re],J[Pe]);const ge=[];let Se,tt=ue.concat();for(let be=0,Ae=X;be<Ae;be++){const Re=z[be];Se=[];for(let Pe=0,Ve=Re.length,vt=Ve-1,ut=Pe+1;Pe<Ve;Pe++,vt++,ut++)vt===Ve&&(vt=0),ut===Ve&&(ut=0),Se[Pe]=Ee(Re[Pe],Re[vt],Re[ut]);ge.push(Se),tt=tt.concat(Se)}let Ze;if(x===0)Ze=Qo.triangulateShape(J,z);else{const be=[],Ae=[];for(let Re=0;Re<x;Re++){const Pe=Re/x,Ve=d*Math.cos(Pe*Math.PI/2),vt=m*Math.sin(Pe*Math.PI/2)+M;for(let ut=0,Mt=J.length;ut<Mt;ut++){const re=ce(J[ut],ue[ut],vt);We(re.x,re.y,-Ve),Pe===0&&be.push(re)}for(let ut=0,Mt=X;ut<Mt;ut++){const re=z[ut];Se=ge[ut];const F=[];for(let xt=0,Ct=re.length;xt<Ct;xt++){const U=ce(re[xt],Se[xt],vt);We(U.x,U.y,-Ve),Pe===0&&F.push(U)}Pe===0&&Ae.push(F)}}Ze=Qo.triangulateShape(be,Ae)}const At=Ze.length,bt=m+M;for(let be=0;be<se;be++){const Ae=h?ce(O[be],tt[be],bt):O[be];_?(D.copy(w.normals[0]).multiplyScalar(Ae.x),R.copy(w.binormals[0]).multiplyScalar(Ae.y),v.copy(I[0]).add(D).add(R),We(v.x,v.y,v.z)):We(Ae.x,Ae.y,0)}for(let be=1;be<=u;be++)for(let Ae=0;Ae<se;Ae++){const Re=h?ce(O[Ae],tt[Ae],bt):O[Ae];_?(D.copy(w.normals[be]).multiplyScalar(Re.x),R.copy(w.binormals[be]).multiplyScalar(Re.y),v.copy(I[be]).add(D).add(R),We(v.x,v.y,v.z)):We(Re.x,Re.y,f/u*be)}for(let be=x-1;be>=0;be--){const Ae=be/x,Re=d*Math.cos(Ae*Math.PI/2),Pe=m*Math.sin(Ae*Math.PI/2)+M;for(let Ve=0,vt=J.length;Ve<vt;Ve++){const ut=ce(J[Ve],ue[Ve],Pe);We(ut.x,ut.y,f+Re)}for(let Ve=0,vt=z.length;Ve<vt;Ve++){const ut=z[Ve];Se=ge[Ve];for(let Mt=0,re=ut.length;Mt<re;Mt++){const F=ce(ut[Mt],Se[Mt],Pe);_?We(F.x,F.y+I[u-1].y,I[u-1].x+Re):We(F.x,F.y,f+Re)}}}Wt(),he();function Wt(){const be=i.length/3;if(h){let Ae=0,Re=se*Ae;for(let Pe=0;Pe<At;Pe++){const Ve=Ze[Pe];lt(Ve[2]+Re,Ve[1]+Re,Ve[0]+Re)}Ae=u+x*2,Re=se*Ae;for(let Pe=0;Pe<At;Pe++){const Ve=Ze[Pe];lt(Ve[0]+Re,Ve[1]+Re,Ve[2]+Re)}}else{for(let Ae=0;Ae<At;Ae++){const Re=Ze[Ae];lt(Re[2],Re[1],Re[0])}for(let Ae=0;Ae<At;Ae++){const Re=Ze[Ae];lt(Re[0]+se*u,Re[1]+se*u,Re[2]+se*u)}}n.addGroup(be,i.length/3-be,0)}function he(){const be=i.length/3;let Ae=0;Me(J,Ae),Ae+=J.length;for(let Re=0,Pe=z.length;Re<Pe;Re++){const Ve=z[Re];Me(Ve,Ae),Ae+=Ve.length}n.addGroup(be,i.length/3-be,1)}function Me(be,Ae){let Re=be.length;for(;--Re>=0;){const Pe=Re;let Ve=Re-1;Ve<0&&(Ve=be.length-1);for(let vt=0,ut=u+x*2;vt<ut;vt++){const Mt=se*vt,re=se*(vt+1),F=Ae+Pe+Mt,xt=Ae+Ve+Mt,Ct=Ae+Ve+re,U=Ae+Pe+re;je(F,xt,Ct,U)}}}function We(be,Ae,Re){c.push(be),c.push(Ae),c.push(Re)}function lt(be,Ae,Re){Tt(be),Tt(Ae),Tt(Re);const Pe=i.length/3,Ve=A.generateTopUV(n,i,Pe-3,Pe-2,Pe-1);tn(Ve[0]),tn(Ve[1]),tn(Ve[2])}function je(be,Ae,Re,Pe){Tt(be),Tt(Ae),Tt(Pe),Tt(Ae),Tt(Re),Tt(Pe);const Ve=i.length/3,vt=A.generateSideWallUV(n,i,Ve-6,Ve-3,Ve-2,Ve-1);tn(vt[0]),tn(vt[1]),tn(vt[3]),tn(vt[1]),tn(vt[2]),tn(vt[3])}function Tt(be){i.push(c[be*3+0]),i.push(c[be*3+1]),i.push(c[be*3+2])}function tn(be){r.push(be.x),r.push(be.y)}}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}toJSON(){const e=super.toJSON(),t=this.parameters.shapes,n=this.parameters.options;return mx(t,n,e)}static fromJSON(e,t){const n=[];for(let r=0,o=e.shapes.length;r<o;r++){const a=t[e.shapes[r]];n.push(a)}const i=e.options.extrudePath;return i!==void 0&&(e.options.extrudePath=new Eh[i.type]().fromJSON(i)),new af(n,e.options)}}const px={generateTopUV:function(s,e,t,n,i){const r=e[t*3],o=e[t*3+1],a=e[n*3],c=e[n*3+1],l=e[i*3],u=e[i*3+1];return[new Ye(r,o),new Ye(a,c),new Ye(l,u)]},generateSideWallUV:function(s,e,t,n,i,r){const o=e[t*3],a=e[t*3+1],c=e[t*3+2],l=e[n*3],u=e[n*3+1],f=e[n*3+2],h=e[i*3],d=e[i*3+1],m=e[i*3+2],M=e[r*3],x=e[r*3+1],g=e[r*3+2];return Math.abs(a-u)<Math.abs(o-l)?[new Ye(o,1-c),new Ye(l,1-f),new Ye(h,1-m),new Ye(M,1-g)]:[new Ye(a,1-c),new Ye(u,1-f),new Ye(d,1-m),new Ye(x,1-g)]}};function mx(s,e,t){if(t.shapes=[],Array.isArray(s))for(let n=0,i=s.length;n<i;n++){const r=s[n];t.shapes.push(r.uuid)}else t.shapes.push(s.uuid);return t.options=Object.assign({},e),e.extrudePath!==void 0&&(t.options.extrudePath=e.extrudePath.toJSON()),t}class kl extends sf{constructor(e=1,t=0){const n=(1+Math.sqrt(5))/2,i=[-1,n,0,1,n,0,-1,-n,0,1,-n,0,0,-1,n,0,1,n,0,-1,-n,0,1,-n,n,0,-1,n,0,1,-n,0,-1,-n,0,1],r=[0,11,5,0,5,1,0,1,7,0,7,10,0,10,11,1,5,9,5,11,4,11,10,2,10,7,6,7,1,8,3,9,4,3,4,2,3,2,6,3,6,8,3,8,9,4,9,5,2,4,11,6,2,10,8,6,7,9,8,1];super(i,r,e,t),this.type="IcosahedronGeometry",this.parameters={radius:e,detail:t}}static fromJSON(e){return new kl(e.radius,e.detail)}}class ai extends Rn{constructor(e=1,t=1,n=1,i=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:t,widthSegments:n,heightSegments:i};const r=e/2,o=t/2,a=Math.floor(n),c=Math.floor(i),l=a+1,u=c+1,f=e/a,h=t/c,d=[],m=[],M=[],x=[];for(let g=0;g<u;g++){const A=g*h-o;for(let I=0;I<l;I++){const _=I*f-r;m.push(_,-A,0),M.push(0,0,1),x.push(I/a),x.push(1-g/c)}}for(let g=0;g<c;g++)for(let A=0;A<a;A++){const I=A+l*g,_=A+l*(g+1),w=A+1+l*(g+1),R=A+1+l*g;d.push(I,_,R),d.push(_,w,R)}this.setIndex(d),this.setAttribute("position",new on(m,3)),this.setAttribute("normal",new on(M,3)),this.setAttribute("uv",new on(x,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new ai(e.width,e.height,e.widthSegments,e.heightSegments)}}class cf extends Rn{constructor(e=.5,t=1,n=32,i=1,r=0,o=Math.PI*2){super(),this.type="RingGeometry",this.parameters={innerRadius:e,outerRadius:t,thetaSegments:n,phiSegments:i,thetaStart:r,thetaLength:o},n=Math.max(3,n),i=Math.max(1,i);const a=[],c=[],l=[],u=[];let f=e;const h=(t-e)/i,d=new V,m=new Ye;for(let M=0;M<=i;M++){for(let x=0;x<=n;x++){const g=r+x/n*o;d.x=f*Math.cos(g),d.y=f*Math.sin(g),c.push(d.x,d.y,d.z),l.push(0,0,1),m.x=(d.x/t+1)/2,m.y=(d.y/t+1)/2,u.push(m.x,m.y)}f+=h}for(let M=0;M<i;M++){const x=M*(n+1);for(let g=0;g<n;g++){const A=g+x,I=A,_=A+n+1,w=A+n+2,R=A+1;a.push(I,_,R),a.push(_,w,R)}}this.setIndex(a),this.setAttribute("position",new on(c,3)),this.setAttribute("normal",new on(l,3)),this.setAttribute("uv",new on(u,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new cf(e.innerRadius,e.outerRadius,e.thetaSegments,e.phiSegments,e.thetaStart,e.thetaLength)}}class ao extends Rn{constructor(e=1,t=32,n=16,i=0,r=Math.PI*2,o=0,a=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:e,widthSegments:t,heightSegments:n,phiStart:i,phiLength:r,thetaStart:o,thetaLength:a},t=Math.max(3,Math.floor(t)),n=Math.max(2,Math.floor(n));const c=Math.min(o+a,Math.PI);let l=0;const u=[],f=new V,h=new V,d=[],m=[],M=[],x=[];for(let g=0;g<=n;g++){const A=[],I=g/n,_=o+I*a,w=e*Math.cos(_),R=Math.sqrt(e*e-w*w);let D=0;g===0&&o===0?D=.5/t:g===n&&c===Math.PI&&(D=-.5/t);for(let v=0;v<=t;v++){const L=v/t,O=i+L*r;f.x=-R*Math.cos(O),f.y=w,f.z=R*Math.sin(O),m.push(f.x,f.y,f.z),h.copy(f).normalize(),M.push(h.x,h.y,h.z),x.push(L+D,1-I),A.push(l++)}u.push(A)}for(let g=0;g<n;g++)for(let A=0;A<t;A++){const I=u[g][A+1],_=u[g][A],w=u[g+1][A],R=u[g+1][A+1];(g!==0||o>0)&&d.push(I,_,R),(g!==n-1||c<Math.PI)&&d.push(_,w,R)}this.setIndex(d),this.setAttribute("position",new on(m,3)),this.setAttribute("normal",new on(M,3)),this.setAttribute("uv",new on(x,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new ao(e.radius,e.widthSegments,e.heightSegments,e.phiStart,e.phiLength,e.thetaStart,e.thetaLength)}}class co extends Rn{constructor(e=1,t=.4,n=12,i=48,r=Math.PI*2,o=0,a=Math.PI*2){super(),this.type="TorusGeometry",this.parameters={radius:e,tube:t,radialSegments:n,tubularSegments:i,arc:r,thetaStart:o,thetaLength:a},n=Math.floor(n),i=Math.floor(i);const c=[],l=[],u=[],f=[],h=new V,d=new V,m=new V;for(let M=0;M<=n;M++){const x=o+M/n*a;for(let g=0;g<=i;g++){const A=g/i*r;d.x=(e+t*Math.cos(x))*Math.cos(A),d.y=(e+t*Math.cos(x))*Math.sin(A),d.z=t*Math.sin(x),l.push(d.x,d.y,d.z),h.x=e*Math.cos(A),h.y=e*Math.sin(A),m.subVectors(d,h).normalize(),u.push(m.x,m.y,m.z),f.push(g/i),f.push(M/n)}}for(let M=1;M<=n;M++)for(let x=1;x<=i;x++){const g=(i+1)*M+x-1,A=(i+1)*(M-1)+x-1,I=(i+1)*(M-1)+x,_=(i+1)*M+x;c.push(g,A,_),c.push(A,I,_)}this.setIndex(c),this.setAttribute("position",new on(l,3)),this.setAttribute("normal",new on(u,3)),this.setAttribute("uv",new on(f,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new co(e.radius,e.tube,e.radialSegments,e.tubularSegments,e.arc,e.thetaStart,e.thetaLength)}}function aa(s){const e={};for(const t in s){e[t]={};for(const n in s[t]){const i=s[t][n];if(pd(i))i.isRenderTargetTexture?(yt("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),e[t][n]=null):e[t][n]=i.clone();else if(Array.isArray(i))if(pd(i[0])){const r=[];for(let o=0,a=i.length;o<a;o++)r[o]=i[o].clone();e[t][n]=r}else e[t][n]=i.slice();else e[t][n]=i}}return e}function Ii(s){const e={};for(let t=0;t<s.length;t++){const n=aa(s[t]);for(const i in n)e[i]=n[i]}return e}function pd(s){return s&&(s.isColor||s.isMatrix3||s.isMatrix4||s.isVector2||s.isVector3||s.isVector4||s.isTexture||s.isQuaternion)}function gx(s){const e=[];for(let t=0;t<s.length;t++)e.push(s[t].clone());return e}function o0(s){const e=s.getRenderTarget();return e===null?s.outputColorSpace:e.isXRRenderTarget===!0?e.texture.colorSpace:Qt.workingColorSpace}const xx={clone:aa,merge:Ii};var _x=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,vx=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class ji extends Vs{constructor(e){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=_x,this.fragmentShader=vx,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=aa(e.uniforms),this.uniformsGroups=gx(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this.defaultAttributeValues=Object.assign({},e.defaultAttributeValues),this.index0AttributeName=e.index0AttributeName,this.uniformsNeedUpdate=e.uniformsNeedUpdate,this}toJSON(e){const t=super.toJSON(e);t.glslVersion=this.glslVersion,t.uniforms={};for(const i in this.uniforms){const o=this.uniforms[i].value;o&&o.isTexture?t.uniforms[i]={type:"t",value:o.toJSON(e).uuid}:o&&o.isColor?t.uniforms[i]={type:"c",value:o.getHex()}:o&&o.isVector2?t.uniforms[i]={type:"v2",value:o.toArray()}:o&&o.isVector3?t.uniforms[i]={type:"v3",value:o.toArray()}:o&&o.isVector4?t.uniforms[i]={type:"v4",value:o.toArray()}:o&&o.isMatrix3?t.uniforms[i]={type:"m3",value:o.toArray()}:o&&o.isMatrix4?t.uniforms[i]={type:"m4",value:o.toArray()}:t.uniforms[i]={value:o}}Object.keys(this.defines).length>0&&(t.defines=this.defines),t.vertexShader=this.vertexShader,t.fragmentShader=this.fragmentShader,t.lights=this.lights,t.clipping=this.clipping;const n={};for(const i in this.extensions)this.extensions[i]===!0&&(n[i]=!0);return Object.keys(n).length>0&&(t.extensions=n),t}fromJSON(e,t){if(super.fromJSON(e,t),e.uniforms!==void 0)for(const n in e.uniforms){const i=e.uniforms[n];switch(this.uniforms[n]={},i.type){case"t":this.uniforms[n].value=t[i.value]||null;break;case"c":this.uniforms[n].value=new it().setHex(i.value);break;case"v2":this.uniforms[n].value=new Ye().fromArray(i.value);break;case"v3":this.uniforms[n].value=new V().fromArray(i.value);break;case"v4":this.uniforms[n].value=new Cn().fromArray(i.value);break;case"m3":this.uniforms[n].value=new Gt().fromArray(i.value);break;case"m4":this.uniforms[n].value=new zt().fromArray(i.value);break;default:this.uniforms[n].value=i.value}}if(e.defines!==void 0&&(this.defines=e.defines),e.vertexShader!==void 0&&(this.vertexShader=e.vertexShader),e.fragmentShader!==void 0&&(this.fragmentShader=e.fragmentShader),e.glslVersion!==void 0&&(this.glslVersion=e.glslVersion),e.extensions!==void 0)for(const n in e.extensions)this.extensions[n]=e.extensions[n];return e.lights!==void 0&&(this.lights=e.lights),e.clipping!==void 0&&(this.clipping=e.clipping),this}}class Mx extends ji{constructor(e){super(e),this.isRawShaderMaterial=!0,this.type="RawShaderMaterial"}}class $e extends Vs{constructor(e){super(),this.isMeshStandardMaterial=!0,this.type="MeshStandardMaterial",this.defines={STANDARD:""},this.color=new it(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new it(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=Sh,this.normalScale=new Ye(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Xs,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.defines={STANDARD:""},this.color.copy(e.color),this.roughness=e.roughness,this.metalness=e.metalness,this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.roughnessMap=e.roughnessMap,this.metalnessMap=e.metalnessMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.envMapIntensity=e.envMapIntensity,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}}class as extends $e{constructor(e){super(),this.isMeshPhysicalMaterial=!0,this.defines={STANDARD:"",PHYSICAL:""},this.type="MeshPhysicalMaterial",this.anisotropyRotation=0,this.anisotropyMap=null,this.clearcoatMap=null,this.clearcoatRoughness=0,this.clearcoatRoughnessMap=null,this.clearcoatNormalScale=new Ye(1,1),this.clearcoatNormalMap=null,this.ior=1.5,Object.defineProperty(this,"reflectivity",{get:function(){return Jt(2.5*(this.ior-1)/(this.ior+1),0,1)},set:function(t){this.ior=(1+.4*t)/(1-.4*t)}}),this.iridescenceMap=null,this.iridescenceIOR=1.3,this.iridescenceThicknessRange=[100,400],this.iridescenceThicknessMap=null,this.sheenColor=new it(0),this.sheenColorMap=null,this.sheenRoughness=1,this.sheenRoughnessMap=null,this.transmissionMap=null,this.thickness=0,this.thicknessMap=null,this.attenuationDistance=1/0,this.attenuationColor=new it(1,1,1),this.specularIntensity=1,this.specularIntensityMap=null,this.specularColor=new it(1,1,1),this.specularColorMap=null,this._anisotropy=0,this._clearcoat=0,this._dispersion=0,this._iridescence=0,this._retroreflectivity=0,this._sheen=0,this._transmission=0,this.setValues(e)}get anisotropy(){return this._anisotropy}set anisotropy(e){this._anisotropy>0!=e>0&&this.version++,this._anisotropy=e}get clearcoat(){return this._clearcoat}set clearcoat(e){this._clearcoat>0!=e>0&&this.version++,this._clearcoat=e}get iridescence(){return this._iridescence}set iridescence(e){this._iridescence>0!=e>0&&this.version++,this._iridescence=e}get dispersion(){return this._dispersion}set dispersion(e){this._dispersion>0!=e>0&&this.version++,this._dispersion=e}get retroreflectivity(){return this._retroreflectivity}set retroreflectivity(e){this._retroreflectivity>0!=e>0&&this.version++,this._retroreflectivity=e}get sheen(){return this._sheen}set sheen(e){this._sheen>0!=e>0&&this.version++,this._sheen=e}get transmission(){return this._transmission}set transmission(e){this._transmission>0!=e>0&&this.version++,this._transmission=e}copy(e){return super.copy(e),this.defines={STANDARD:"",PHYSICAL:""},this.anisotropy=e.anisotropy,this.anisotropyRotation=e.anisotropyRotation,this.anisotropyMap=e.anisotropyMap,this.clearcoat=e.clearcoat,this.clearcoatMap=e.clearcoatMap,this.clearcoatRoughness=e.clearcoatRoughness,this.clearcoatRoughnessMap=e.clearcoatRoughnessMap,this.clearcoatNormalMap=e.clearcoatNormalMap,this.clearcoatNormalScale.copy(e.clearcoatNormalScale),this.dispersion=e.dispersion,this.ior=e.ior,this.iridescence=e.iridescence,this.iridescenceMap=e.iridescenceMap,this.iridescenceIOR=e.iridescenceIOR,this.iridescenceThicknessRange=[...e.iridescenceThicknessRange],this.iridescenceThicknessMap=e.iridescenceThicknessMap,this.retroreflectivity=e.retroreflectivity,this.sheen=e.sheen,this.sheenColor.copy(e.sheenColor),this.sheenColorMap=e.sheenColorMap,this.sheenRoughness=e.sheenRoughness,this.sheenRoughnessMap=e.sheenRoughnessMap,this.transmission=e.transmission,this.transmissionMap=e.transmissionMap,this.thickness=e.thickness,this.thicknessMap=e.thicknessMap,this.attenuationDistance=e.attenuationDistance,this.attenuationColor.copy(e.attenuationColor),this.specularIntensity=e.specularIntensity,this.specularIntensityMap=e.specularIntensityMap,this.specularColor.copy(e.specularColor),this.specularColorMap=e.specularColorMap,this}}class yx extends Vs{constructor(e){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=Dm,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}}class Sx extends Vs{constructor(e){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}}function Ar(s,e){return!s||s.constructor===e?s:typeof e.BYTES_PER_ELEMENT=="number"?new e(s):Array.prototype.slice.call(s)}function Sl(s){return s!==void 0&&s.inTangents!==void 0&&s.outTangents!==void 0}function bx(s){function e(i,r){return s[i]-s[r]}const t=s.length,n=new Array(t);for(let i=0;i!==t;++i)n[i]=i;return n.sort(e),n}function md(s,e,t){const n=s.length,i=new s.constructor(n);for(let r=0,o=0;o!==n;++r){const a=t[r]*e;for(let c=0;c!==e;++c)i[o++]=s[a+c]}return i}function Tx(s,e,t,n){let i=1,r=s[0];for(;r!==void 0&&r[n]===void 0;)r=s[i++];if(r===void 0)return;let o=r[n];if(o!==void 0)if(Array.isArray(o))do o=r[n],o!==void 0&&(e.push(r.time),t.push(...o)),r=s[i++];while(r!==void 0);else if(o.toArray!==void 0)do o=r[n],o!==void 0&&(e.push(r.time),o.toArray(t,t.length)),r=s[i++];while(r!==void 0);else do o=r[n],o!==void 0&&(e.push(r.time),t.push(o)),r=s[i++];while(r!==void 0)}class ca{constructor(e,t,n,i){this.parameterPositions=e,this._cachedIndex=0,this.resultBuffer=i!==void 0?i:new t.constructor(n),this.sampleValues=t,this.valueSize=n,this.settings=null,this.DefaultSettings_={}}evaluate(e){const t=this.parameterPositions;let n=this._cachedIndex,i=t[n],r=t[n-1];n:{e:{let o;t:{i:if(!(e<i)){for(let a=n+2;;){if(i===void 0){if(e<r)break i;return n=t.length,this._cachedIndex=n,this.copySampleValue_(n-1)}if(n===a)break;if(r=i,i=t[++n],e<i)break e}o=t.length;break t}if(!(e>=r)){const a=t[1];e<a&&(n=2,r=a);for(let c=n-2;;){if(r===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(n===c)break;if(i=r,r=t[--n-1],e>=r)break e}o=n,n=0;break t}break n}for(;n<o;){const a=n+o>>>1;e<t[a]?o=a:n=a+1}if(i=t[n],r=t[n-1],r===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(i===void 0)return n=t.length,this._cachedIndex=n,this.copySampleValue_(n-1)}this._cachedIndex=n,this.intervalChanged_(n,r,i)}return this.interpolate_(n,r,e,i)}getSettings_(){return this.settings||this.DefaultSettings_}copySampleValue_(e){const t=this.resultBuffer,n=this.sampleValues,i=this.valueSize,r=e*i;for(let o=0;o!==i;++o)t[o]=n[r+o];return t}interpolate_(){throw new Error("THREE.Interpolant: Call to abstract method.")}intervalChanged_(){}}class Ex extends ca{constructor(e,t,n,i){super(e,t,n,i),this._weightPrev=-0,this._offsetPrev=-0,this._weightNext=-0,this._offsetNext=-0,this.DefaultSettings_={endingStart:Af,endingEnd:Af}}intervalChanged_(e,t,n){const i=this.parameterPositions;let r=e-2,o=e+1,a=i[r],c=i[o];if(a===void 0)switch(this.getSettings_().endingStart){case Rf:r=e,a=2*t-n;break;case Cf:r=i.length-2,a=t+i[r]-i[r+1];break;default:r=e,a=n}if(c===void 0)switch(this.getSettings_().endingEnd){case Rf:o=e,c=2*n-t;break;case Cf:o=1,c=n+i[1]-i[0];break;default:o=e-1,c=t}const l=(n-t)*.5,u=this.valueSize;this._weightPrev=l/(t-a),this._weightNext=l/(c-n),this._offsetPrev=r*u,this._offsetNext=o*u}interpolate_(e,t,n,i){const r=this.resultBuffer,o=this.sampleValues,a=this.valueSize,c=e*a,l=c-a,u=this._offsetPrev,f=this._offsetNext,h=this._weightPrev,d=this._weightNext,m=(n-t)/(i-t),M=m*m,x=M*m,g=-h*x+2*h*M-h*m,A=(1+h)*x+(-1.5-2*h)*M+(-.5+h)*m+1,I=(-1-d)*x+(1.5+d)*M+.5*m,_=d*x-d*M;for(let w=0;w!==a;++w)r[w]=g*o[u+w]+A*o[l+w]+I*o[c+w]+_*o[f+w];return r}}class wx extends ca{constructor(e,t,n,i){super(e,t,n,i)}interpolate_(e,t,n,i){const r=this.resultBuffer,o=this.sampleValues,a=this.valueSize,c=e*a,l=c-a,u=(n-t)/(i-t),f=1-u;for(let h=0;h!==a;++h)r[h]=o[l+h]*f+o[c+h]*u;return r}}class Ax extends ca{constructor(e,t,n,i){super(e,t,n,i)}interpolate_(e){return this.copySampleValue_(e-1)}}class Rx extends ca{interpolate_(e,t,n,i){const r=this.resultBuffer,o=this.sampleValues,a=this.valueSize,c=e*a,l=c-a,u=this.inTangents,f=this.outTangents;if(!u||!f){const m=(n-t)/(i-t),M=1-m;for(let x=0;x!==a;++x)r[x]=o[l+x]*M+o[c+x]*m;return r}const h=a*2,d=e-1;for(let m=0;m!==a;++m){const M=o[l+m],x=o[c+m],g=d*h+m*2,A=f[g],I=f[g+1],_=e*h+m*2,w=u[_],R=u[_+1],D=Px(n,t,A,w,i);r[m]=a0(D,M,I,R,x)}return r}}function a0(s,e,t,n,i){const r=1-s;return r*r*r*e+3*r*r*s*t+3*r*s*s*n+s*s*s*i}function Cx(s,e,t,n,i){const r=1-s;return 3*r*r*(t-e)+6*r*s*(n-t)+3*s*s*(i-n)}function Px(s,e,t,n,i){let r=(s-e)/(i-e);for(let o=0;o<8;o++){const a=a0(r,e,t,n,i)-s;if(Math.abs(a)<1e-10)break;const c=Cx(r,e,t,n,i);if(Math.abs(c)<1e-10)break;r=Math.max(0,Math.min(1,r-a/c))}return r}class Ss{constructor(e,t,n,i){if(e===void 0)throw new Error("THREE.KeyframeTrack: track name is undefined");if(t===void 0||t.length===0)throw new Error("THREE.KeyframeTrack: no keyframes in track named "+e);this.name=e,this.times=Ar(t,this.TimeBufferType),this.values=Ar(n,this.ValueBufferType),this.setInterpolation(i||this.DefaultInterpolation)}static toJSON(e){const t=e.constructor;let n;if(t.toJSON!==this.toJSON)n=t.toJSON(e);else{n={name:e.name,times:Ar(e.times,Array),values:Ar(e.values,Array)};const i=e.getInterpolation();i!==e.DefaultInterpolation&&(n.interpolation=i),Sl(e.settings)&&(n.settings={inTangents:Ar(e.settings.inTangents,Array),outTangents:Ar(e.settings.outTangents,Array)})}return n.type=e.ValueTypeName,n}InterpolantFactoryMethodDiscrete(e){return new Ax(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodLinear(e){return new wx(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodSmooth(e){return new Ex(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodBezier(e){const t=new Rx(this.times,this.values,this.getValueSize(),e);return this.settings&&(t.inTangents=this.settings.inTangents,t.outTangents=this.settings.outTangents),t}setInterpolation(e){let t;switch(e){case rc:t=this.InterpolantFactoryMethodDiscrete;break;case oc:t=this.InterpolantFactoryMethodLinear;break;case $l:t=this.InterpolantFactoryMethodSmooth;break;case wf:t=this.InterpolantFactoryMethodBezier;break}if(t===void 0){const n="unsupported interpolation for "+this.ValueTypeName+" keyframe track named "+this.name;if(this.createInterpolant===void 0)if(e!==this.DefaultInterpolation)this.setInterpolation(this.DefaultInterpolation);else throw new Error(n);return yt("KeyframeTrack:",n),this}return this.createInterpolant=t,this}getInterpolation(){switch(this.createInterpolant){case this.InterpolantFactoryMethodDiscrete:return rc;case this.InterpolantFactoryMethodLinear:return oc;case this.InterpolantFactoryMethodSmooth:return $l;case this.InterpolantFactoryMethodBezier:return wf}}getValueSize(){return this.values.length/this.times.length}shift(e){if(e!==0){const t=this.times;for(let n=0,i=t.length;n!==i;++n)t[n]+=e}return this}scale(e){if(e!==1){const t=this.times;for(let n=0,i=t.length;n!==i;++n)t[n]*=e;Sl(this.settings)&&(gd(this.settings.inTangents,e),gd(this.settings.outTangents,e))}return this}trim(e,t){const n=this.times,i=n.length;let r=0,o=i-1;for(;r!==i&&n[r]<e;)++r;for(;o!==-1&&n[o]>t;)--o;if(++o,r!==0||o!==i){r>=o&&(o=Math.max(o,1),r=o-1);const a=this.getValueSize();this.times=n.slice(r,o),this.values=this.values.slice(r*a,o*a)}return this}validate(){let e=!0;const t=this.getValueSize();t-Math.floor(t)!==0&&(kt("KeyframeTrack: Invalid value size in track.",this),e=!1);const n=this.times,i=this.values,r=n.length;r===0&&(kt("KeyframeTrack: Track is empty.",this),e=!1);let o=null;for(let a=0;a!==r;a++){const c=n[a];if(typeof c=="number"&&isNaN(c)){kt("KeyframeTrack: Time is not a valid number.",this,a,c),e=!1;break}if(o!==null&&o>c){kt("KeyframeTrack: Out of order keys.",this,a,c,o),e=!1;break}o=c}if(i!==void 0&&Wm(i))for(let a=0,c=i.length;a!==c;++a){const l=i[a];if(isNaN(l)){kt("KeyframeTrack: Value is not a valid number.",this,a,l),e=!1;break}}return e}optimize(){const e=this.times.slice(),t=this.values.slice(),n=this.getValueSize(),i=this.getInterpolation()===$l,r=e.length-1;let o=1;for(let a=1;a<r;++a){let c=!1;const l=e[a],u=e[a+1];if(l!==u&&(a!==1||l!==e[0]))if(i)c=!0;else{const f=a*n,h=f-n,d=f+n;for(let m=0;m!==n;++m){const M=t[f+m];if(M!==t[h+m]||M!==t[d+m]){c=!0;break}}}if(c){if(a!==o){e[o]=e[a];const f=a*n,h=o*n;for(let d=0;d!==n;++d)t[h+d]=t[f+d]}++o}}if(r>0){e[o]=e[r];for(let a=r*n,c=o*n,l=0;l!==n;++l)t[c+l]=t[a+l];++o}return o!==e.length?(this.times=e.slice(0,o),this.values=t.slice(0,o*n)):(this.times=e,this.values=t),this}clone(){const e=this.times.slice(),t=this.values.slice(),n=this.constructor,i=new n(this.name,e,t);return i.createInterpolant=this.createInterpolant,Sl(this.settings)&&(i.settings={inTangents:this.settings.inTangents.slice(),outTangents:this.settings.outTangents.slice()}),i}}function gd(s,e){for(let t=0,n=s.length;t!==n;t+=2)s[t]*=e}Ss.prototype.ValueTypeName="";Ss.prototype.TimeBufferType=Float32Array;Ss.prototype.ValueBufferType=Float32Array;Ss.prototype.DefaultInterpolation=oc;class la extends Ss{constructor(e,t,n){super(e,t,n)}}la.prototype.ValueTypeName="bool";la.prototype.ValueBufferType=Array;la.prototype.DefaultInterpolation=rc;la.prototype.InterpolantFactoryMethodLinear=void 0;la.prototype.InterpolantFactoryMethodSmooth=void 0;class c0 extends Ss{constructor(e,t,n,i){super(e,t,n,i)}}c0.prototype.ValueTypeName="color";class mc extends Ss{constructor(e,t,n,i){super(e,t,n,i)}}mc.prototype.ValueTypeName="number";class Ix extends ca{constructor(e,t,n,i){super(e,t,n,i)}interpolate_(e,t,n,i){const r=this.resultBuffer,o=this.sampleValues,a=this.valueSize,c=(n-t)/(i-t);let l=e*a;for(let u=l+a;l!==u;l+=4)ni.slerpFlat(r,0,o,l-a,o,l,c);return r}}class gc extends Ss{constructor(e,t,n,i){super(e,t,n,i)}InterpolantFactoryMethodLinear(e){return new Ix(this.times,this.values,this.getValueSize(),e)}}gc.prototype.ValueTypeName="quaternion";gc.prototype.InterpolantFactoryMethodSmooth=void 0;class ua extends Ss{constructor(e,t,n){super(e,t,n)}}ua.prototype.ValueTypeName="string";ua.prototype.ValueBufferType=Array;ua.prototype.DefaultInterpolation=rc;ua.prototype.InterpolantFactoryMethodLinear=void 0;ua.prototype.InterpolantFactoryMethodSmooth=void 0;class Nl extends Ss{constructor(e,t,n,i){super(e,t,n,i)}}Nl.prototype.ValueTypeName="vector";class Lx{constructor(e="",t=-1,n=[],i=Lm){this.name=e,this.tracks=n,this.duration=t,this.blendMode=i,this.uuid=rs(),this.userData={},this.duration<0&&this.resetDuration()}static parse(e){const t=[],n=e.tracks,i=1/(e.fps||1);for(let o=0,a=n.length;o!==a;++o)t.push(Dx(n[o]).scale(i));const r=new this(e.name,e.duration,t,e.blendMode);return r.uuid=e.uuid,r.userData=JSON.parse(e.userData||"{}"),r}static toJSON(e){const t=[],n=e.tracks,i={name:e.name,duration:e.duration,tracks:t,uuid:e.uuid,blendMode:e.blendMode,userData:JSON.stringify(e.userData)};for(let r=0,o=n.length;r!==o;++r)t.push(Ss.toJSON(n[r]));return i}static CreateFromMorphTargetSequence(e,t,n,i){const r=t.length,o=[];for(let a=0;a<r;a++){let c=[],l=[];c.push((a+r-1)%r,a,(a+1)%r),l.push(0,1,0);const u=bx(c);c=md(c,1,u),l=md(l,1,u),!i&&c[0]===0&&(c.push(r),l.push(l[0])),o.push(new mc(".morphTargetInfluences["+t[a].name+"]",c,l).scale(1/n))}return new this(e,-1,o)}static findByName(e,t){let n=e;if(!Array.isArray(e)){const i=e;n=i.geometry&&i.geometry.animations||i.animations}for(let i=0;i<n.length;i++)if(n[i].name===t)return n[i];return null}static CreateClipsFromMorphTargetSequences(e,t,n){const i={},r=/^([\w-]*?)([\d]+)$/;for(let a=0,c=e.length;a<c;a++){const l=e[a],u=l.name.match(r);if(u&&u.length>1){const f=u[1];let h=i[f];h||(i[f]=h=[]),h.push(l)}}const o=[];for(const a in i)o.push(this.CreateFromMorphTargetSequence(a,i[a],t,n));return o}resetDuration(){const e=this.tracks;let t=0;for(let n=0,i=e.length;n!==i;++n){const r=this.tracks[n];t=Math.max(t,r.times[r.times.length-1])}return this.duration=t,this}trim(){for(let e=0;e<this.tracks.length;e++)this.tracks[e].trim(0,this.duration);return this}validate(){let e=!0;for(let t=0;t<this.tracks.length;t++)e=e&&this.tracks[t].validate();return e}optimize(){for(let e=0;e<this.tracks.length;e++)this.tracks[e].optimize();return this}clone(){const e=[];for(let n=0;n<this.tracks.length;n++)e.push(this.tracks[n].clone());const t=new this.constructor(this.name,this.duration,e,this.blendMode);return t.userData=JSON.parse(JSON.stringify(this.userData)),t}toJSON(){return this.constructor.toJSON(this)}}function Nx(s){switch(s.toLowerCase()){case"scalar":case"double":case"float":case"number":case"integer":return mc;case"vector":case"vector2":case"vector3":case"vector4":return Nl;case"color":return c0;case"quaternion":return gc;case"bool":case"boolean":return la;case"string":return ua}throw new Error("THREE.KeyframeTrack: Unsupported typeName: "+s)}function Dx(s){if(s.type===void 0)throw new Error("THREE.KeyframeTrack: track type undefined, can not parse");const e=Nx(s.type);if(s.times===void 0){const n=[],i=[];Tx(s.keys,n,i,"value"),s.times=n,s.values=i}let t;return e.parse!==void 0?t=e.parse(s):t=new e(s.name,s.times,s.values,s.interpolation),Sl(s.settings)&&(t.settings={inTangents:Ar(s.settings.inTangents,Float32Array),outTangents:Ar(s.settings.outTangents,Float32Array)}),t}const rr={enabled:!1,files:{},add:function(s,e){this.enabled!==!1&&(xd(s)||(this.files[s]=e))},get:function(s){if(this.enabled!==!1&&!xd(s))return this.files[s]},remove:function(s){delete this.files[s]},clear:function(){this.files={}}};function xd(s){try{const e=s.slice(s.indexOf(":")+1);return new URL(e).protocol==="blob:"}catch{return!1}}class Ux{constructor(e,t,n){const i=this;let r=!1,o=0,a=0,c;const l=[];this.onStart=void 0,this.onLoad=e,this.onProgress=t,this.onError=n,this._abortController=null,this.itemStart=function(u){a++,r===!1&&i.onStart!==void 0&&i.onStart(u,o,a),r=!0},this.itemEnd=function(u){o++,i.onProgress!==void 0&&i.onProgress(u,o,a),o===a&&(r=!1,i.onLoad!==void 0&&i.onLoad())},this.itemError=function(u){i.onError!==void 0&&i.onError(u)},this.resolveURL=function(u){return u=u.normalize("NFC"),c?c(u):u},this.setURLModifier=function(u){return c=u,this},this.addHandler=function(u,f){return l.push(u,f),this},this.removeHandler=function(u){const f=l.indexOf(u);return f!==-1&&l.splice(f,2),this},this.getHandler=function(u){for(let f=0,h=l.length;f<h;f+=2){const d=l[f],m=l[f+1];if(d.global&&(d.lastIndex=0),d.test(u))return m}return null},this.abort=function(){return this.abortController.abort(),this._abortController=null,this}}get abortController(){return this._abortController||(this._abortController=new AbortController),this._abortController}}const Fx=new Ux;class po{constructor(e){this.manager=e!==void 0?e:Fx,this.crossOrigin="anonymous",this.withCredentials=!1,this.path="",this.resourcePath="",this.requestHeader={},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}load(){}loadAsync(e,t){const n=this;return new Promise(function(i,r){n.load(e,i,t,r)})}parse(){}setCrossOrigin(e){return this.crossOrigin=e,this}setWithCredentials(e){return this.withCredentials=e,this}setPath(e){return this.path=e,this}setResourcePath(e){return this.resourcePath=e,this}setRequestHeader(e){return this.requestHeader=e,this}abort(){return this}}po.DEFAULT_MATERIAL_NAME="__DEFAULT";const ir={};class Ox extends Error{constructor(e,t){super(e),this.response=t}}class Dl extends po{constructor(e){super(e),this.mimeType="",this.responseType="",this._abortController=new AbortController}load(e,t,n,i){e===void 0&&(e=""),this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);const r=rr.get(`file:${e}`);if(r!==void 0){this.manager.itemStart(e),setTimeout(()=>{t&&t(r),this.manager.itemEnd(e)},0);return}if(ir[e]!==void 0){ir[e].push({onLoad:t,onProgress:n,onError:i});return}ir[e]=[],ir[e].push({onLoad:t,onProgress:n,onError:i});const o=new Request(e,{headers:new Headers(this.requestHeader),credentials:this.withCredentials?"include":"same-origin",signal:typeof AbortSignal.any=="function"?AbortSignal.any([this._abortController.signal,this.manager.abortController.signal]):this._abortController.signal}),a=this.mimeType,c=this.responseType;fetch(o).then(l=>{if(l.status===200||l.status===0){if(l.status===0&&yt("FileLoader: HTTP Status 0 received."),typeof ReadableStream>"u"||l.body===void 0||l.body.getReader===void 0)return l;const u=ir[e],f=l.body.getReader(),h=l.headers.get("X-File-Size")||l.headers.get("Content-Length"),d=h?parseInt(h):0,m=d!==0;let M=0;const x=new ReadableStream({start(g){A();function A(){f.read().then(({done:I,value:_})=>{if(I)g.close();else{M+=_.byteLength;const w=new ProgressEvent("progress",{lengthComputable:m,loaded:M,total:d});for(let R=0,D=u.length;R<D;R++){const v=u[R];v.onProgress&&v.onProgress(w)}g.enqueue(_),A()}},I=>{g.error(I)})}}});return new Response(x)}else throw new Ox(`fetch for "${l.url}" responded with ${l.status}: ${l.statusText}`,l)}).then(l=>{switch(c){case"arraybuffer":return l.arrayBuffer();case"blob":return l.blob();case"document":return l.text().then(u=>new DOMParser().parseFromString(u,a));case"json":return l.json();default:if(a==="")return l.text();{const f=/charset="?([^;"\s]*)"?/i.exec(a),h=f&&f[1]?f[1].toLowerCase():void 0,d=new TextDecoder(h);return l.arrayBuffer().then(m=>d.decode(m))}}}).then(l=>{rr.add(`file:${e}`,l);const u=ir[e];delete ir[e];for(let f=0,h=u.length;f<h;f++){const d=u[f];d.onLoad&&d.onLoad(l)}}).catch(l=>{const u=ir[e];if(u===void 0)throw this.manager.itemError(e),l;delete ir[e];for(let f=0,h=u.length;f<h;f++){const d=u[f];d.onError&&d.onError(l)}this.manager.itemError(e)}).finally(()=>{this.manager.itemEnd(e)}),this.manager.itemStart(e)}setResponseType(e){return this.responseType=e,this}setMimeType(e){return this.mimeType=e,this}abort(){return this._abortController.abort(),this._abortController=new AbortController,this}}const qo=new WeakMap;class Bx extends po{constructor(e){super(e)}load(e,t,n,i){this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);const r=this,o=rr.get(`image:${e}`);if(o!==void 0){if(o.complete===!0)r.manager.itemStart(e),setTimeout(function(){t&&t(o),r.manager.itemEnd(e)},0);else{let f=qo.get(o);f===void 0&&(f=[],qo.set(o,f)),f.push({onLoad:t,onError:i})}return o}const a=cc("img");function c(){u(),t&&t(this);const f=qo.get(this)||[];for(let h=0;h<f.length;h++){const d=f[h];d.onLoad&&d.onLoad(this)}qo.delete(this),r.manager.itemEnd(e)}function l(f){u(),i&&i(f),rr.remove(`image:${e}`);const h=qo.get(this)||[];for(let d=0;d<h.length;d++){const m=h[d];m.onError&&m.onError(f)}qo.delete(this),r.manager.itemError(e),r.manager.itemEnd(e)}function u(){a.removeEventListener("load",c,!1),a.removeEventListener("error",l,!1)}return a.addEventListener("load",c,!1),a.addEventListener("error",l,!1),e.slice(0,5)!=="data:"&&this.crossOrigin!==void 0&&(a.crossOrigin=this.crossOrigin),rr.add(`image:${e}`,a),r.manager.itemStart(e),a.src=e,a}}class kx extends po{constructor(e){super(e)}load(e,t,n,i){const r=new ui,o=new Bx(this.manager);return o.setCrossOrigin(this.crossOrigin),o.setPath(this.path),o.load(e,function(a){r.image=a,r.needsUpdate=!0,t!==void 0&&t(r)},n,i),r}}class zl extends On{constructor(e,t=1){super(),this.isLight=!0,this.type="Light",this.color=new it(e),this.intensity=t}copy(e,t){return super.copy(e,t),this.color.copy(e.color),this.intensity=e.intensity,this}toJSON(e){const t=super.toJSON(e);return t.object.color=this.color.getHex(),t.object.intensity=this.intensity,t}}class zx extends zl{constructor(e,t,n){super(e,n),this.isHemisphereLight=!0,this.type="HemisphereLight",this.position.copy(On.DEFAULT_UP),this.updateMatrix(),this.groundColor=new it(t)}copy(e,t){return super.copy(e,t),this.groundColor.copy(e.groundColor),this}toJSON(e){const t=super.toJSON(e);return t.object.groundColor=this.groundColor.getHex(),t}}const Tu=new zt,_d=new V,vd=new V;class lf{constructor(e){this.camera=e,this.intensity=1,this.bias=0,this.biasNode=null,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new Ye(512,512),this.mapType=Yi,this.map=null,this.mapPass=null,this.matrix=new zt,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new ef,this._frameExtents=new Ye(1,1),this._viewportCount=1,this._viewports=[new Cn(0,0,1,1)]}getViewportCount(){return this._viewportCount}getCamera(){return this.camera}getFrustum(){return this._frustum}updateMatrices(e){const t=this.camera;_d.setFromMatrixPosition(e.matrixWorld),t.position.copy(_d),vd.setFromMatrixPosition(e.target.matrixWorld),t.lookAt(vd),t.updateMatrixWorld(),this._updateMatrix(t,this.matrix,this._frustum)}_updateMatrix(e,t,n,i){Tu.multiplyMatrices(e.projectionMatrix,e.matrixWorldInverse),n.setFromProjectionMatrix(Tu,e.coordinateSystem,e.reversedDepth);const r=this._frameExtents,o=i?i.z/r.x:1,a=i?i.w/r.y:1,c=i?i.x/r.x:0,l=i?i.y/r.y:0;e.coordinateSystem===ac||e.reversedDepth?t.set(.5*o,0,0,.5*o+c,0,.5*a,0,.5*a+l,0,0,1,0,0,0,0,1):t.set(.5*o,0,0,.5*o+c,0,.5*a,0,.5*a+l,0,0,.5,.5,0,0,0,1),t.multiply(Tu)}getViewport(e){return this._viewports[e]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(e){return this.camera=e.camera.clone(),this.intensity=e.intensity,this.bias=e.bias,this.radius=e.radius,this.autoUpdate=e.autoUpdate,this.needsUpdate=e.needsUpdate,this.normalBias=e.normalBias,this.blurSamples=e.blurSamples,this.mapSize.copy(e.mapSize),this.biasNode=e.biasNode,this}clone(){return new this.constructor().copy(this)}toJSON(){const e={};return e.intensity=this.intensity,e.bias=this.bias,e.normalBias=this.normalBias,e.radius=this.radius,e.blurSamples=this.blurSamples,e.mapSize=this.mapSize.toArray(),e.camera=this.camera.toJSON(!1).object,delete e.camera.matrix,e}}const al=new V,cl=new ni,Is=new V;class l0 extends On{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new zt,this.projectionMatrix=new zt,this.projectionMatrixInverse=new zt,this.coordinateSystem=ks,this._reversedDepth=!1}get reversedDepth(){return this._reversedDepth}copy(e,t){return super.copy(e,t),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){return super.getWorldDirection(e).negate()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorld.decompose(al,cl,Is),Is.x===1&&Is.y===1&&Is.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(al,cl,Is.set(1,1,1)).invert()}updateWorldMatrix(e,t,n=!1){super.updateWorldMatrix(e,t,n),this.matrixWorld.decompose(al,cl,Is),Is.x===1&&Is.y===1&&Is.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(al,cl,Is.set(1,1,1)).invert()}clone(){return new this.constructor().copy(this)}}const Tr=new V,Md=new Ye,yd=new Ye;class Ni extends l0{constructor(e=50,t=1,n=.1,i=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=n,this.far=i,this.focus=10,this.aspect=t,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){const t=.5*this.getFilmHeight()/e;this.fov=ra*2*Math.atan(t),this.updateProjectionMatrix()}getFocalLength(){const e=Math.tan(Ja*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return ra*2*Math.atan(Math.tan(Ja*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(e,t,n){Tr.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),t.set(Tr.x,Tr.y).multiplyScalar(-e/Tr.z),Tr.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),n.set(Tr.x,Tr.y).multiplyScalar(-e/Tr.z)}getViewSize(e,t){return this.getViewBounds(e,Md,yd),t.subVectors(yd,Md)}setViewOffset(e,t,n,i,r,o){this.aspect=e/t,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=n,this.view.offsetY=i,this.view.width=r,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=this.near;let t=e*Math.tan(Ja*.5*this.fov)/this.zoom,n=2*t,i=this.aspect*n,r=-.5*i;const o=this.view;if(this.view!==null&&this.view.enabled){const c=o.fullWidth,l=o.fullHeight;r+=o.offsetX*i/c,t-=o.offsetY*n/l,i*=o.width/c,n*=o.height/l}const a=this.filmOffset;a!==0&&(r+=e*a/this.getFilmWidth()),this.projectionMatrix.makePerspective(r,r+i,t,t-n,e,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.fov=this.fov,t.object.zoom=this.zoom,t.object.near=this.near,t.object.far=this.far,t.object.focus=this.focus,t.object.aspect=this.aspect,this.view!==null&&(t.object.view=Object.assign({},this.view)),t.object.filmGauge=this.filmGauge,t.object.filmOffset=this.filmOffset,t}}class Hx extends lf{constructor(){super(new Ni(50,1,.5,500)),this.isSpotLightShadow=!0,this.focus=1,this.aspect=1}updateMatrices(e){const t=this.camera,n=ra*2*e.angle*this.focus,i=this.mapSize.width/this.mapSize.height*this.aspect,r=e.distance||t.far;(n!==t.fov||i!==t.aspect||r!==t.far)&&(t.fov=n,t.aspect=i,t.far=r,t.updateProjectionMatrix()),super.updateMatrices(e)}copy(e){return super.copy(e),this.focus=e.focus,this.aspect=e.aspect,this}toJSON(){const e=super.toJSON();return e.focus=this.focus,e.aspect=this.aspect,e}}class Rh extends zl{constructor(e,t,n=0,i=Math.PI/3,r=0,o=2){super(e,t),this.isSpotLight=!0,this.type="SpotLight",this.position.copy(On.DEFAULT_UP),this.updateMatrix(),this.target=new On,this.distance=n,this.angle=i,this.penumbra=r,this.decay=o,this.map=null,this.shadow=new Hx}get power(){return this.intensity*Math.PI}set power(e){this.intensity=e/Math.PI}dispose(){super.dispose(),this.shadow.dispose()}copy(e,t){return super.copy(e,t),this.distance=e.distance,this.angle=e.angle,this.penumbra=e.penumbra,this.decay=e.decay,this.target=e.target.clone(),this.map=e.map,this.shadow=e.shadow.clone(),this}toJSON(e){const t=super.toJSON(e);return t.object.distance=this.distance,t.object.angle=this.angle,t.object.decay=this.decay,t.object.penumbra=this.penumbra,t.object.target=this.target.uuid,this.map&&this.map.isTexture&&(t.object.map=this.map.toJSON(e).uuid),t.object.shadow=this.shadow.toJSON(),t}}class Vx extends lf{constructor(){super(new Ni(90,1,.5,500)),this.isPointLightShadow=!0}}class bl extends zl{constructor(e,t,n=0,i=2){super(e,t),this.isPointLight=!0,this.type="PointLight",this.distance=n,this.decay=i,this.shadow=new Vx}get power(){return this.intensity*4*Math.PI}set power(e){this.intensity=e/(4*Math.PI)}dispose(){super.dispose(),this.shadow.dispose()}copy(e,t){return super.copy(e,t),this.distance=e.distance,this.decay=e.decay,this.shadow=e.shadow.clone(),this}toJSON(e){const t=super.toJSON(e);return t.object.distance=this.distance,t.object.decay=this.decay,t.object.shadow=this.shadow.toJSON(),t}}class Hl extends l0{constructor(e=-1,t=1,n=1,i=-1,r=.1,o=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=t,this.top=n,this.bottom=i,this.near=r,this.far=o,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,t,n,i,r,o){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=n,this.view.offsetY=i,this.view.width=r,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=(this.right-this.left)/(2*this.zoom),t=(this.top-this.bottom)/(2*this.zoom),n=(this.right+this.left)/2,i=(this.top+this.bottom)/2;let r=n-e,o=n+e,a=i+t,c=i-t;if(this.view!==null&&this.view.enabled){const l=(this.right-this.left)/this.view.fullWidth/this.zoom,u=(this.top-this.bottom)/this.view.fullHeight/this.zoom;r+=l*this.view.offsetX,o=r+l*this.view.width,a-=u*this.view.offsetY,c=a-u*this.view.height}this.projectionMatrix.makeOrthographic(r,o,a,c,this.near,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.zoom=this.zoom,t.object.left=this.left,t.object.right=this.right,t.object.top=this.top,t.object.bottom=this.bottom,t.object.near=this.near,t.object.far=this.far,this.view!==null&&(t.object.view=Object.assign({},this.view)),t}}class Gx extends lf{constructor(){super(new Hl(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}}class u0 extends zl{constructor(e,t){super(e,t),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(On.DEFAULT_UP),this.updateMatrix(),this.target=new On,this.shadow=new Gx}dispose(){super.dispose(),this.shadow.dispose()}copy(e){return super.copy(e),this.target=e.target.clone(),this.shadow=e.shadow.clone(),this}toJSON(e){const t=super.toJSON(e);return t.object.shadow=this.shadow.toJSON(),t.object.target=this.target.uuid,t}}class Pr{static extractUrlBase(e){const t=e.lastIndexOf("/");return t===-1?"./":e.slice(0,t+1)}static resolveURL(e,t){return typeof e!="string"||e===""?"":(/^https?:\/\//i.test(t)&&/^\//.test(e)&&(t=t.replace(/(^https?:\/\/[^\/]+).*/i,"$1")),/^(https?:)?\/\//i.test(e)||/^data:.*,.*$/i.test(e)||/^blob:.*$/i.test(e)?e:t+e)}}const Eu=new WeakMap;class Wx extends po{constructor(e){super(e),this.isImageBitmapLoader=!0,typeof createImageBitmap>"u"&&yt("ImageBitmapLoader: createImageBitmap() not supported."),typeof fetch>"u"&&yt("ImageBitmapLoader: fetch() not supported."),this.options={premultiplyAlpha:"none"},this._abortController=new AbortController}setOptions(e){return this.options=e,this}load(e,t,n,i){e===void 0&&(e=""),this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);const r=this,o=rr.get(`image-bitmap:${e}`);if(o!==void 0){if(r.manager.itemStart(e),o.then){o.then(l=>{Eu.has(o)===!0?(i&&i(Eu.get(o)),r.manager.itemError(e),r.manager.itemEnd(e)):(t&&t(l),r.manager.itemEnd(e))});return}setTimeout(function(){t&&t(o),r.manager.itemEnd(e)},0);return}const a={};a.credentials=this.crossOrigin==="anonymous"?"same-origin":"include",a.headers=this.requestHeader,a.signal=typeof AbortSignal.any=="function"?AbortSignal.any([this._abortController.signal,this.manager.abortController.signal]):this._abortController.signal;const c=fetch(e,a).then(function(l){return l.blob()}).then(function(l){return createImageBitmap(l,Object.assign({},r.options,{colorSpaceConversion:"none"}))}).then(function(l){return rr.add(`image-bitmap:${e}`,l),t&&t(l),r.manager.itemEnd(e),l}).catch(function(l){i&&i(l),Eu.set(c,l),rr.remove(`image-bitmap:${e}`),r.manager.itemError(e),r.manager.itemEnd(e)});rr.add(`image-bitmap:${e}`,c),r.manager.itemStart(e)}abort(){return this._abortController.abort(),this._abortController=new AbortController,this}}const Yo=-90,Ko=1;class Xx extends On{constructor(e,t,n){super(),this.type="CubeCamera",this.renderTarget=n,this.coordinateSystem=null,this.activeMipmapLevel=0;const i=new Ni(Yo,Ko,e,t);i.layers=this.layers,this.add(i);const r=new Ni(Yo,Ko,e,t);r.layers=this.layers,this.add(r);const o=new Ni(Yo,Ko,e,t);o.layers=this.layers,this.add(o);const a=new Ni(Yo,Ko,e,t);a.layers=this.layers,this.add(a);const c=new Ni(Yo,Ko,e,t);c.layers=this.layers,this.add(c);const l=new Ni(Yo,Ko,e,t);l.layers=this.layers,this.add(l)}updateCoordinateSystem(){const e=this.coordinateSystem,t=this.children.concat(),[n,i,r,o,a,c]=t;for(const l of t)this.remove(l);if(e===ks)n.up.set(0,1,0),n.lookAt(1,0,0),i.up.set(0,1,0),i.lookAt(-1,0,0),r.up.set(0,0,-1),r.lookAt(0,1,0),o.up.set(0,0,1),o.lookAt(0,-1,0),a.up.set(0,1,0),a.lookAt(0,0,1),c.up.set(0,1,0),c.lookAt(0,0,-1);else if(e===ac)n.up.set(0,-1,0),n.lookAt(-1,0,0),i.up.set(0,-1,0),i.lookAt(1,0,0),r.up.set(0,0,1),r.lookAt(0,1,0),o.up.set(0,0,-1),o.lookAt(0,-1,0),a.up.set(0,-1,0),a.lookAt(0,0,1),c.up.set(0,-1,0),c.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+e);for(const l of t)this.add(l),l.updateMatrixWorld()}update(e,t){this.parent===null&&this.updateMatrixWorld();const{renderTarget:n,activeMipmapLevel:i}=this;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());const[r,o,a,c,l,u]=this.children,f=e.getRenderTarget(),h=e.getActiveCubeFace(),d=e.getActiveMipmapLevel(),m=e.xr.enabled;e.xr.enabled=!1;const M=n.texture.generateMipmaps;n.texture.generateMipmaps=!1;let x=!1;e.isWebGLRenderer===!0?x=e.state.buffers.depth.getReversed():x=e.reversedDepthBuffer,e.setRenderTarget(n,0,i),x&&e.autoClear===!1&&e.clearDepth(),e.render(t,r),e.setRenderTarget(n,1,i),x&&e.autoClear===!1&&e.clearDepth(),e.render(t,o),e.setRenderTarget(n,2,i),x&&e.autoClear===!1&&e.clearDepth(),e.render(t,a),e.setRenderTarget(n,3,i),x&&e.autoClear===!1&&e.clearDepth(),e.render(t,c),e.setRenderTarget(n,4,i),x&&e.autoClear===!1&&e.clearDepth(),e.render(t,l),n.texture.generateMipmaps=M,e.setRenderTarget(n,5,i),x&&e.autoClear===!1&&e.clearDepth(),e.render(t,u),e.setRenderTarget(f,h,d),e.xr.enabled=m,n.texture.needsPMREMUpdate=!0}}class qx extends Ni{constructor(e=[]){super(),this.isArrayCamera=!0,this.isMultiViewCamera=!1,this.cameras=e}}const uf="\\[\\]\\.:\\/",Yx=new RegExp("["+uf+"]","g"),hf="[^"+uf+"]",Kx="[^"+uf.replace("\\.","")+"]",jx=/((?:WC+[\/:])*)/.source.replace("WC",hf),$x=/(WCOD+)?/.source.replace("WCOD",Kx),Zx=/(?:\.(WC+)(?:\[(.+)\])?)?/.source.replace("WC",hf),Jx=/\.(WC+)(?:\[(.+)\])?/.source.replace("WC",hf),Qx=new RegExp("^"+jx+$x+Zx+Jx+"$"),e_=["material","materials","bones","map"];class t_{constructor(e,t,n){const i=n||Tn.parseTrackName(t);this._targetGroup=e,this._bindings=e.subscribe_(t,i)}getValue(e,t){this.bind();const n=this._targetGroup.nCachedObjects_,i=this._bindings[n];i!==void 0&&i.getValue(e,t)}setValue(e,t){const n=this._bindings;for(let i=this._targetGroup.nCachedObjects_,r=n.length;i!==r;++i)n[i].setValue(e,t)}bind(){const e=this._bindings;for(let t=this._targetGroup.nCachedObjects_,n=e.length;t!==n;++t)e[t].bind()}unbind(){const e=this._bindings;for(let t=this._targetGroup.nCachedObjects_,n=e.length;t!==n;++t)e[t].unbind()}}class Tn{constructor(e,t,n){this.path=t,this.parsedPath=n||Tn.parseTrackName(t),this.node=Tn.findNode(e,this.parsedPath.nodeName),this.rootNode=e,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}static create(e,t,n){return e&&e.isAnimationObjectGroup?new Tn.Composite(e,t,n):new Tn(e,t,n)}static sanitizeNodeName(e){return e.replace(/\s/g,"_").replace(Yx,"")}static parseTrackName(e){const t=Qx.exec(e);if(t===null)throw new Error("THREE.PropertyBinding: Cannot parse trackName: "+e);const n={nodeName:t[2],objectName:t[3],objectIndex:t[4],propertyName:t[5],propertyIndex:t[6]},i=n.nodeName&&n.nodeName.lastIndexOf(".");if(i!==void 0&&i!==-1){const r=n.nodeName.substring(i+1);e_.indexOf(r)!==-1&&(n.nodeName=n.nodeName.substring(0,i),n.objectName=r)}if(n.propertyName===null||n.propertyName.length===0)throw new Error("THREE.PropertyBinding: can not parse propertyName from trackName: "+e);return n}static findNode(e,t){if(t===void 0||t===""||t==="."||t===-1||t===e.name||t===e.uuid)return e;if(e.skeleton){const n=e.skeleton.getBoneByName(t);if(n!==void 0)return n}if(e.children){const n=function(r){for(let o=0;o<r.length;o++){const a=r[o];if(a.name===t||a.uuid===t)return a;const c=n(a.children);if(c)return c}return null},i=n(e.children);if(i)return i}return null}_getValue_unavailable(){}_setValue_unavailable(){}_getValue_direct(e,t){e[t]=this.targetObject[this.propertyName]}_getValue_array(e,t){const n=this.resolvedProperty;for(let i=0,r=n.length;i!==r;++i)e[t++]=n[i]}_getValue_arrayElement(e,t){e[t]=this.resolvedProperty[this.propertyIndex]}_getValue_toArray(e,t){this.resolvedProperty.toArray(e,t)}_setValue_direct(e,t){this.targetObject[this.propertyName]=e[t]}_setValue_direct_setNeedsUpdate(e,t){this.targetObject[this.propertyName]=e[t],this.targetObject.needsUpdate=!0}_setValue_direct_setMatrixWorldNeedsUpdate(e,t){this.targetObject[this.propertyName]=e[t],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_array(e,t){const n=this.resolvedProperty;for(let i=0,r=n.length;i!==r;++i)n[i]=e[t++]}_setValue_array_setNeedsUpdate(e,t){const n=this.resolvedProperty;for(let i=0,r=n.length;i!==r;++i)n[i]=e[t++];this.targetObject.needsUpdate=!0}_setValue_array_setMatrixWorldNeedsUpdate(e,t){const n=this.resolvedProperty;for(let i=0,r=n.length;i!==r;++i)n[i]=e[t++];this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_arrayElement(e,t){this.resolvedProperty[this.propertyIndex]=e[t]}_setValue_arrayElement_setNeedsUpdate(e,t){this.resolvedProperty[this.propertyIndex]=e[t],this.targetObject.needsUpdate=!0}_setValue_arrayElement_setMatrixWorldNeedsUpdate(e,t){this.resolvedProperty[this.propertyIndex]=e[t],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_fromArray(e,t){this.resolvedProperty.fromArray(e,t)}_setValue_fromArray_setNeedsUpdate(e,t){this.resolvedProperty.fromArray(e,t),this.targetObject.needsUpdate=!0}_setValue_fromArray_setMatrixWorldNeedsUpdate(e,t){this.resolvedProperty.fromArray(e,t),this.targetObject.matrixWorldNeedsUpdate=!0}_getValue_unbound(e,t){this.bind(),this.getValue(e,t)}_setValue_unbound(e,t){this.bind(),this.setValue(e,t)}bind(){let e=this.node;const t=this.parsedPath,n=t.objectName,i=t.propertyName;let r=t.propertyIndex;if(e||(e=Tn.findNode(this.rootNode,t.nodeName),this.node=e),this.getValue=this._getValue_unavailable,this.setValue=this._setValue_unavailable,!e){yt("PropertyBinding: No target node found for track: "+this.path+".");return}if(n){let l=t.objectIndex;switch(n){case"materials":if(!e.material){kt("PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!e.material.materials){kt("PropertyBinding: Can not bind to material.materials as node.material does not have a materials array.",this);return}e=e.material.materials;break;case"bones":if(!e.skeleton){kt("PropertyBinding: Can not bind to bones as node does not have a skeleton.",this);return}e=e.skeleton.bones;for(let u=0;u<e.length;u++)if(e[u].name===l){l=u;break}break;case"map":if("map"in e){e=e.map;break}if(!e.material){kt("PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!e.material.map){kt("PropertyBinding: Can not bind to material.map as node.material does not have a map.",this);return}e=e.material.map;break;default:if(e[n]===void 0){kt("PropertyBinding: Can not bind to objectName of node undefined.",this);return}e=e[n]}if(l!==void 0){if(e[l]===void 0){kt("PropertyBinding: Trying to bind to objectIndex of objectName, but is undefined.",this,e);return}e=e[l]}}const o=e[i];if(o===void 0){const l=t.nodeName;kt("PropertyBinding: Trying to update property for track: "+l+"."+i+" but it wasn't found.",e);return}let a=this.Versioning.None;this.targetObject=e,e.isMaterial===!0?a=this.Versioning.NeedsUpdate:e.isObject3D===!0&&(a=this.Versioning.MatrixWorldNeedsUpdate);let c=this.BindingType.Direct;if(r!==void 0){if(i==="morphTargetInfluences"){if(!e.geometry){kt("PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.",this);return}if(!e.geometry.morphAttributes){kt("PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.morphAttributes.",this);return}e.morphTargetDictionary[r]!==void 0&&(r=e.morphTargetDictionary[r])}c=this.BindingType.ArrayElement,this.resolvedProperty=o,this.propertyIndex=r}else o.fromArray!==void 0&&o.toArray!==void 0?(c=this.BindingType.HasFromToArray,this.resolvedProperty=o):Array.isArray(o)?(c=this.BindingType.EntireArray,this.resolvedProperty=o):this.propertyName=i;this.getValue=this.GetterByBindingType[c],this.setValue=this.SetterByBindingTypeAndVersioning[c][a]}unbind(){this.node=null,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}}Tn.Composite=t_;Tn.prototype.BindingType={Direct:0,EntireArray:1,ArrayElement:2,HasFromToArray:3};Tn.prototype.Versioning={None:0,NeedsUpdate:1,MatrixWorldNeedsUpdate:2};Tn.prototype.GetterByBindingType=[Tn.prototype._getValue_direct,Tn.prototype._getValue_array,Tn.prototype._getValue_arrayElement,Tn.prototype._getValue_toArray];Tn.prototype.SetterByBindingTypeAndVersioning=[[Tn.prototype._setValue_direct,Tn.prototype._setValue_direct_setNeedsUpdate,Tn.prototype._setValue_direct_setMatrixWorldNeedsUpdate],[Tn.prototype._setValue_array,Tn.prototype._setValue_array_setNeedsUpdate,Tn.prototype._setValue_array_setMatrixWorldNeedsUpdate],[Tn.prototype._setValue_arrayElement,Tn.prototype._setValue_arrayElement_setNeedsUpdate,Tn.prototype._setValue_arrayElement_setMatrixWorldNeedsUpdate],[Tn.prototype._setValue_fromArray,Tn.prototype._setValue_fromArray_setNeedsUpdate,Tn.prototype._setValue_fromArray_setMatrixWorldNeedsUpdate]];class h0{static{h0.prototype.isMatrix2=!0}constructor(e,t,n,i){this.elements=[1,0,0,1],e!==void 0&&this.set(e,t,n,i)}identity(){return this.set(1,0,0,1),this}fromArray(e,t=0){for(let n=0;n<4;n++)this.elements[n]=e[n+t];return this}set(e,t,n,i){const r=this.elements;return r[0]=e,r[2]=t,r[1]=n,r[3]=i,this}}function Sd(s,e,t,n){const i=n_(n);switch(t){case Np:return s*e;case Gh:return s*e/i.components*i.byteLength;case Wh:return s*e/i.components*i.byteLength;case uo:return s*e*2/i.components*i.byteLength;case Xh:return s*e*2/i.components*i.byteLength;case Dp:return s*e*3/i.components*i.byteLength;case ss:return s*e*4/i.components*i.byteLength;case qh:return s*e*4/i.components*i.byteLength;case _l:case vl:return Math.floor((s+3)/4)*Math.floor((e+3)/4)*8;case Ml:case yl:return Math.floor((s+3)/4)*Math.floor((e+3)/4)*16;case qu:case Ku:return Math.max(s,16)*Math.max(e,8)/4;case Xu:case Yu:return Math.max(s,8)*Math.max(e,8)/2;case ju:case $u:case Ju:case Qu:return Math.floor((s+3)/4)*Math.floor((e+3)/4)*8;case Zu:case Al:case eh:return Math.floor((s+3)/4)*Math.floor((e+3)/4)*16;case th:return Math.floor((s+3)/4)*Math.floor((e+3)/4)*16;case nh:return Math.floor((s+4)/5)*Math.floor((e+3)/4)*16;case ih:return Math.floor((s+4)/5)*Math.floor((e+4)/5)*16;case sh:return Math.floor((s+5)/6)*Math.floor((e+4)/5)*16;case rh:return Math.floor((s+5)/6)*Math.floor((e+5)/6)*16;case oh:return Math.floor((s+7)/8)*Math.floor((e+4)/5)*16;case ah:return Math.floor((s+7)/8)*Math.floor((e+5)/6)*16;case ch:return Math.floor((s+7)/8)*Math.floor((e+7)/8)*16;case lh:return Math.floor((s+9)/10)*Math.floor((e+4)/5)*16;case uh:return Math.floor((s+9)/10)*Math.floor((e+5)/6)*16;case hh:return Math.floor((s+9)/10)*Math.floor((e+7)/8)*16;case fh:return Math.floor((s+9)/10)*Math.floor((e+9)/10)*16;case dh:return Math.floor((s+11)/12)*Math.floor((e+9)/10)*16;case ph:return Math.floor((s+11)/12)*Math.floor((e+11)/12)*16;case mh:case gh:case xh:return Math.ceil(s/4)*Math.ceil(e/4)*16;case _h:case vh:return Math.ceil(s/4)*Math.ceil(e/4)*8;case Rl:case Mh:return Math.ceil(s/4)*Math.ceil(e/4)*16}throw new Error(`Unable to determine texture byte length for ${t} format.`)}function n_(s){switch(s){case Yi:case Cp:return{byteLength:1,components:1};case ic:case Pp:case Ws:return{byteLength:2,components:1};case Hh:case Vh:return{byteLength:2,components:4};case Gs:case zh:case is:return{byteLength:4,components:1};case Ip:case Lp:return{byteLength:4,components:3}}throw new Error(`THREE.TextureUtils: Unknown texture type ${s}.`)}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:Bh}}));typeof window<"u"&&(window.__THREE__?yt("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=Bh);function f0(){let s=null,e=!1,t=null,n=null;function i(r,o){n=s.requestAnimationFrame(i),t(r,o)}return{start:function(){e!==!0&&t!==null&&s!==null&&(n=s.requestAnimationFrame(i),e=!0)},stop:function(){s!==null&&s.cancelAnimationFrame(n),e=!1},setAnimationLoop:function(r){t=r},setContext:function(r){s=r}}}function i_(s){const e=new WeakMap;function t(a,c){const l=a.array,u=a.usage,f=l.byteLength,h=s.createBuffer();s.bindBuffer(c,h),s.bufferData(c,l,u),a.onUploadCallback();let d;if(l instanceof Float32Array)d=s.FLOAT;else if(typeof Float16Array<"u"&&l instanceof Float16Array)d=s.HALF_FLOAT;else if(l instanceof Uint16Array)a.isFloat16BufferAttribute?d=s.HALF_FLOAT:d=s.UNSIGNED_SHORT;else if(l instanceof Int16Array)d=s.SHORT;else if(l instanceof Uint32Array)d=s.UNSIGNED_INT;else if(l instanceof Int32Array)d=s.INT;else if(l instanceof Int8Array)d=s.BYTE;else if(l instanceof Uint8Array)d=s.UNSIGNED_BYTE;else if(l instanceof Uint8ClampedArray)d=s.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+l);return{buffer:h,type:d,bytesPerElement:l.BYTES_PER_ELEMENT,version:a.version,size:f}}function n(a,c,l){const u=c.array,f=c.updateRanges;if(s.bindBuffer(l,a),f.length===0)s.bufferSubData(l,0,u);else{f.sort((d,m)=>d.start-m.start);let h=0;for(let d=1;d<f.length;d++){const m=f[h],M=f[d];M.start<=m.start+m.count+1?m.count=Math.max(m.count,M.start+M.count-m.start):(++h,f[h]=M)}f.length=h+1;for(let d=0,m=f.length;d<m;d++){const M=f[d];s.bufferSubData(l,M.start*u.BYTES_PER_ELEMENT,u,M.start,M.count)}c.clearUpdateRanges()}c.onUploadCallback()}function i(a){return a.isInterleavedBufferAttribute&&(a=a.data),e.get(a)}function r(a){a.isInterleavedBufferAttribute&&(a=a.data);const c=e.get(a);c&&(s.deleteBuffer(c.buffer),e.delete(a))}function o(a,c){if(a.isInterleavedBufferAttribute&&(a=a.data),a.isGLBufferAttribute){const u=e.get(a);(!u||u.version<a.version)&&e.set(a,{buffer:a.buffer,type:a.type,bytesPerElement:a.elementSize,version:a.version});return}const l=e.get(a);if(l===void 0)e.set(a,t(a,c));else if(l.version<a.version){if(l.size!==a.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");n(l.buffer,a,c),l.version=a.version}}return{get:i,remove:r,update:o}}var s_=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,r_=`#ifdef USE_ALPHAHASH
	const float ALPHA_HASH_SCALE = 0.05;
	float hash2D( vec2 value ) {
		return fract( 1.0e4 * sin( 17.0 * value.x + 0.1 * value.y ) * ( 0.1 + abs( sin( 13.0 * value.y + value.x ) ) ) );
	}
	float hash3D( vec3 value ) {
		return hash2D( vec2( hash2D( value.xy ), value.z ) );
	}
	float getAlphaHashThreshold( vec3 position ) {
		float maxDeriv = max(
			length( dFdx( position.xyz ) ),
			length( dFdy( position.xyz ) )
		);
		float pixScale = 1.0 / ( ALPHA_HASH_SCALE * maxDeriv );
		vec2 pixScales = vec2(
			exp2( floor( log2( pixScale ) ) ),
			exp2( ceil( log2( pixScale ) ) )
		);
		vec2 alpha = vec2(
			hash3D( floor( pixScales.x * position.xyz ) ),
			hash3D( floor( pixScales.y * position.xyz ) )
		);
		float lerpFactor = fract( log2( pixScale ) );
		float x = ( 1.0 - lerpFactor ) * alpha.x + lerpFactor * alpha.y;
		float a = min( lerpFactor, 1.0 - lerpFactor );
		vec3 cases = vec3(
			x * x / ( 2.0 * a * ( 1.0 - a ) ),
			( x - 0.5 * a ) / ( 1.0 - a ),
			1.0 - ( ( 1.0 - x ) * ( 1.0 - x ) / ( 2.0 * a * ( 1.0 - a ) ) )
		);
		float threshold = ( x < ( 1.0 - a ) )
			? ( ( x < a ) ? cases.x : cases.y )
			: cases.z;
		return clamp( threshold , 1.0e-6, 1.0 );
	}
#endif`,o_=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,a_=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,c_=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,l_=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,u_=`#ifdef USE_AOMAP
	float ambientOcclusion = ( texture2D( aoMap, vAoMapUv ).r - 1.0 ) * aoMapIntensity + 1.0;
	reflectedLight.indirectDiffuse *= ambientOcclusion;
	#if defined( USE_CLEARCOAT ) 
		clearcoatSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_SHEEN ) 
		sheenSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD )
		float dotNV = saturate( dot( geometryNormal, geometryViewDir ) );
		reflectedLight.indirectSpecular *= computeSpecularOcclusion( dotNV, ambientOcclusion, material.roughness );
	#endif
#endif`,h_=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,f_=`#ifdef USE_BATCHING
	#if ! defined( GL_ANGLE_multi_draw )
	#define gl_DrawID _gl_DrawID
	uniform int _gl_DrawID;
	#endif
	uniform highp sampler2D batchingTexture;
	uniform highp usampler2D batchingIdTexture;
	mat4 getBatchingMatrix( const in float i ) {
		int size = textureSize( batchingTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( batchingTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( batchingTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( batchingTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( batchingTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
	float getIndirectIndex( const in int i ) {
		int size = textureSize( batchingIdTexture, 0 ).x;
		int x = i % size;
		int y = i / size;
		return float( texelFetch( batchingIdTexture, ivec2( x, y ), 0 ).r );
	}
#endif
#ifdef USE_BATCHING_COLOR
	uniform sampler2D batchingColorTexture;
	vec4 getBatchingColor( const in float i ) {
		int size = textureSize( batchingColorTexture, 0 ).x;
		int j = int( i );
		int x = j % size;
		int y = j / size;
		return texelFetch( batchingColorTexture, ivec2( x, y ), 0 );
	}
#endif`,d_=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,p_=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,m_=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,g_=`float G_BlinnPhong_Implicit( ) {
	return 0.25;
}
float D_BlinnPhong( const in float shininess, const in float dotNH ) {
	return RECIPROCAL_PI * ( shininess * 0.5 + 1.0 ) * pow( dotNH, shininess );
}
vec3 BRDF_BlinnPhong( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in vec3 specularColor, const in float shininess ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( specularColor, 1.0, dotVH );
	float G = G_BlinnPhong_Implicit( );
	float D = D_BlinnPhong( shininess, dotNH );
	return F * ( G * D );
} // validated`,x_=`#ifdef USE_IRIDESCENCE
	const mat3 XYZ_TO_REC709 = mat3(
		 3.2404542, -0.9692660,  0.0556434,
		-1.5371385,  1.8760108, -0.2040259,
		-0.4985314,  0.0415560,  1.0572252
	);
	vec3 Fresnel0ToIor( vec3 fresnel0 ) {
		vec3 sqrtF0 = sqrt( fresnel0 );
		return ( vec3( 1.0 ) + sqrtF0 ) / ( vec3( 1.0 ) - sqrtF0 );
	}
	vec3 IorToFresnel0( vec3 transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - vec3( incidentIor ) ) / ( transmittedIor + vec3( incidentIor ) ) );
	}
	float IorToFresnel0( float transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - incidentIor ) / ( transmittedIor + incidentIor ));
	}
	vec3 evalSensitivity( float OPD, vec3 shift ) {
		float phase = 2.0 * PI * OPD * 1.0e-9;
		vec3 val = vec3( 5.4856e-13, 4.4201e-13, 5.2481e-13 );
		vec3 pos = vec3( 1.6810e+06, 1.7953e+06, 2.2084e+06 );
		vec3 var = vec3( 4.3278e+09, 9.3046e+09, 6.6121e+09 );
		vec3 xyz = val * sqrt( 2.0 * PI * var ) * cos( pos * phase + shift ) * exp( - pow2( phase ) * var );
		xyz.x += 9.7470e-14 * sqrt( 2.0 * PI * 4.5282e+09 ) * cos( 2.2399e+06 * phase + shift[ 0 ] ) * exp( - 4.5282e+09 * pow2( phase ) );
		xyz /= 1.0685e-7;
		vec3 rgb = XYZ_TO_REC709 * xyz;
		return rgb;
	}
	vec3 evalIridescence( float outsideIOR, float eta2, float cosTheta1, float thinFilmThickness, vec3 baseF0 ) {
		vec3 I;
		float iridescenceIOR = mix( outsideIOR, eta2, smoothstep( 0.0, 0.03, thinFilmThickness ) );
		float sinTheta2Sq = pow2( outsideIOR / iridescenceIOR ) * ( 1.0 - pow2( cosTheta1 ) );
		float cosTheta2Sq = 1.0 - sinTheta2Sq;
		if ( cosTheta2Sq < 0.0 ) {
			return vec3( 1.0 );
		}
		float cosTheta2 = sqrt( cosTheta2Sq );
		float R0 = IorToFresnel0( iridescenceIOR, outsideIOR );
		float R12 = F_Schlick( R0, 1.0, cosTheta1 );
		float T121 = 1.0 - R12;
		float phi12 = 0.0;
		if ( iridescenceIOR < outsideIOR ) phi12 = PI;
		float phi21 = PI - phi12;
		vec3 baseIOR = Fresnel0ToIor( clamp( baseF0, 0.0, 0.9999 ) );		vec3 R1 = IorToFresnel0( baseIOR, iridescenceIOR );
		vec3 R23 = F_Schlick( R1, 1.0, cosTheta2 );
		vec3 phi23 = vec3( 0.0 );
		if ( baseIOR[ 0 ] < iridescenceIOR ) phi23[ 0 ] = PI;
		if ( baseIOR[ 1 ] < iridescenceIOR ) phi23[ 1 ] = PI;
		if ( baseIOR[ 2 ] < iridescenceIOR ) phi23[ 2 ] = PI;
		float OPD = 2.0 * iridescenceIOR * thinFilmThickness * cosTheta2;
		vec3 phi = vec3( phi21 ) + phi23;
		vec3 R123 = clamp( R12 * R23, 1e-5, 0.9999 );
		vec3 r123 = sqrt( R123 );
		vec3 Rs = pow2( T121 ) * R23 / ( vec3( 1.0 ) - R123 );
		vec3 C0 = R12 + Rs;
		I = C0;
		vec3 Cm = Rs - T121;
		for ( int m = 1; m <= 2; ++ m ) {
			Cm *= r123;
			vec3 Sm = 2.0 * evalSensitivity( float( m ) * OPD, float( m ) * phi );
			I += Cm * Sm;
		}
		return max( I, vec3( 0.0 ) );
	}
#endif`,__=`#ifdef USE_BUMPMAP
	uniform sampler2D bumpMap;
	uniform float bumpScale;
	vec2 dHdxy_fwd() {
		vec2 dSTdx = dFdx( vBumpMapUv );
		vec2 dSTdy = dFdy( vBumpMapUv );
		float Hll = bumpScale * texture2D( bumpMap, vBumpMapUv ).x;
		float dBx = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdx ).x - Hll;
		float dBy = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdy ).x - Hll;
		return vec2( dBx, dBy );
	}
	vec3 perturbNormalArb( vec3 surf_pos, vec3 surf_norm, vec2 dHdxy, float faceDirection ) {
		vec3 vSigmaX = normalize( dFdx( surf_pos.xyz ) );
		vec3 vSigmaY = normalize( dFdy( surf_pos.xyz ) );
		vec3 vN = surf_norm;
		vec3 R1 = cross( vSigmaY, vN );
		vec3 R2 = cross( vN, vSigmaX );
		float fDet = dot( vSigmaX, R1 ) * faceDirection;
		vec3 vGrad = sign( fDet ) * ( dHdxy.x * R1 + dHdxy.y * R2 );
		return normalize( abs( fDet ) * surf_norm - vGrad );
	}
#endif`,v_=`#if NUM_CLIPPING_PLANES > 0
	vec4 plane;
	#ifdef ALPHA_TO_COVERAGE
		float distanceToPlane, distanceGradient;
		float clipOpacity = 1.0;
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
			distanceGradient = fwidth( distanceToPlane ) / 2.0;
			clipOpacity *= smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			if ( clipOpacity == 0.0 ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			float unionClipOpacity = 1.0;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
				distanceGradient = fwidth( distanceToPlane ) / 2.0;
				unionClipOpacity *= 1.0 - smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			}
			#pragma unroll_loop_end
			clipOpacity *= 1.0 - unionClipOpacity;
		#endif
		diffuseColor.a *= clipOpacity;
		if ( diffuseColor.a == 0.0 ) discard;
	#else
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			if ( dot( vClipPosition, plane.xyz ) > plane.w ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			bool clipped = true;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				clipped = ( dot( vClipPosition, plane.xyz ) > plane.w ) && clipped;
			}
			#pragma unroll_loop_end
			if ( clipped ) discard;
		#endif
	#endif
#endif`,M_=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,y_=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,S_=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,b_=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#endif`,T_=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#endif`,E_=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec4 vColor;
#endif`,w_=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	vColor = vec4( 1.0 );
#endif
#ifdef USE_COLOR_ALPHA
	vColor *= color;
#elif defined( USE_COLOR )
	vColor.rgb *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.rgb *= instanceColor.rgb;
#endif
#ifdef USE_BATCHING_COLOR
	vColor *= getBatchingColor( getIndirectIndex( gl_DrawID ) );
#endif`,A_=`#define PI 3.141592653589793
#define PI2 6.283185307179586
#define PI_HALF 1.5707963267948966
#define RECIPROCAL_PI 0.3183098861837907
#define RECIPROCAL_PI2 0.15915494309189535
#define EPSILON 1e-6
#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
#define whiteComplement( a ) ( 1.0 - saturate( a ) )
float pow2( const in float x ) { return x*x; }
vec3 pow2( const in vec3 x ) { return x*x; }
float pow3( const in float x ) { return x*x*x; }
float pow4( const in float x ) { float x2 = x*x; return x2*x2; }
float max3( const in vec3 v ) { return max( max( v.x, v.y ), v.z ); }
float average( const in vec3 v ) { return dot( v, vec3( 0.3333333 ) ); }
highp float rand( const in vec2 uv ) {
	const highp float a = 12.9898, b = 78.233, c = 43758.5453;
	highp float dt = dot( uv.xy, vec2( a,b ) ), sn = mod( dt, PI );
	return fract( sin( sn ) * c );
}
#ifdef HIGH_PRECISION
	float precisionSafeLength( vec3 v ) { return length( v ); }
#else
	float precisionSafeLength( vec3 v ) {
		float maxComponent = max3( abs( v ) );
		return length( v / maxComponent ) * maxComponent;
	}
#endif
struct IncidentLight {
	vec3 color;
	vec3 direction;
	bool visible;
};
struct ReflectedLight {
	vec3 directDiffuse;
	vec3 directSpecular;
	vec3 indirectDiffuse;
	vec3 indirectSpecular;
};
#ifdef USE_ALPHAHASH
	varying vec3 vPosition;
#endif
vec3 transformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );
}
#define inverseTransformDirection transformDirectionByInverseViewMatrix
vec3 transformNormalByInverseViewMatrix( in vec3 normal, in mat4 viewMatrix ) {
	return normalize( ( vec4( normal, 0.0 ) * viewMatrix ).xyz );
}
vec3 transformDirectionByInverseViewMatrix( in vec3 dir, in mat4 viewMatrix ) {
	return normalize( ( vec4( dir, 0.0 ) * viewMatrix ).xyz );
}
bool isPerspectiveMatrix( mat4 m ) {
	return m[ 2 ][ 3 ] == - 1.0;
}
vec2 equirectUv( in vec3 dir ) {
	float u = atan( dir.z, dir.x ) * RECIPROCAL_PI2 + 0.5;
	float v = asin( clamp( dir.y, - 1.0, 1.0 ) ) * RECIPROCAL_PI + 0.5;
	return vec2( u, v );
}
vec3 BRDF_Lambert( const in vec3 diffuseColor ) {
	return RECIPROCAL_PI * diffuseColor;
}
vec3 F_Schlick( const in vec3 f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
}
float F_Schlick( const in float f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
} // validated`,R_=`#ifdef ENVMAP_TYPE_CUBE_UV
	#define cubeUV_minMipLevel 4.0
	#define cubeUV_minTileSize 16.0
	float getFace( vec3 direction ) {
		vec3 absDirection = abs( direction );
		float face = - 1.0;
		if ( absDirection.x > absDirection.z ) {
			if ( absDirection.x > absDirection.y )
				face = direction.x > 0.0 ? 0.0 : 3.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		} else {
			if ( absDirection.z > absDirection.y )
				face = direction.z > 0.0 ? 2.0 : 5.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		}
		return face;
	}
	vec2 getUV( vec3 direction, float face ) {
		vec2 uv;
		if ( face == 0.0 ) {
			uv = vec2( direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 1.0 ) {
			uv = vec2( - direction.x, - direction.z ) / abs( direction.y );
		} else if ( face == 2.0 ) {
			uv = vec2( - direction.x, direction.y ) / abs( direction.z );
		} else if ( face == 3.0 ) {
			uv = vec2( - direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 4.0 ) {
			uv = vec2( - direction.x, direction.z ) / abs( direction.y );
		} else {
			uv = vec2( direction.x, direction.y ) / abs( direction.z );
		}
		return 0.5 * ( uv + 1.0 );
	}
	vec3 bilinearCubeUV( sampler2D envMap, vec3 direction, float mipInt ) {
		float face = getFace( direction );
		float filterInt = max( cubeUV_minMipLevel - mipInt, 0.0 );
		mipInt = max( mipInt, cubeUV_minMipLevel );
		float faceSize = exp2( mipInt );
		highp vec2 uv = getUV( direction, face ) * ( faceSize - 2.0 ) + 1.0;
		if ( face > 2.0 ) {
			uv.y += faceSize;
			face -= 3.0;
		}
		uv.x += face * faceSize;
		uv.x += filterInt * 3.0 * cubeUV_minTileSize;
		uv.y += 4.0 * ( exp2( CUBEUV_MAX_MIP ) - faceSize );
		uv.x *= CUBEUV_TEXEL_WIDTH;
		uv.y *= CUBEUV_TEXEL_HEIGHT;
		#ifdef texture2DGradEXT
			return texture2DGradEXT( envMap, uv, vec2( 0.0 ), vec2( 0.0 ) ).rgb;
		#else
			return texture2D( envMap, uv ).rgb;
		#endif
	}
	#define cubeUV_r0 1.0
	#define cubeUV_m0 - 2.0
	#define cubeUV_r1 0.8
	#define cubeUV_m1 - 1.0
	#define cubeUV_r4 0.4
	#define cubeUV_m4 2.0
	#define cubeUV_r5 0.305
	#define cubeUV_m5 3.0
	#define cubeUV_r6 0.21
	#define cubeUV_m6 4.0
	float roughnessToMip( float roughness ) {
		float mip = 0.0;
		if ( roughness >= cubeUV_r1 ) {
			mip = ( cubeUV_r0 - roughness ) * ( cubeUV_m1 - cubeUV_m0 ) / ( cubeUV_r0 - cubeUV_r1 ) + cubeUV_m0;
		} else if ( roughness >= cubeUV_r4 ) {
			mip = ( cubeUV_r1 - roughness ) * ( cubeUV_m4 - cubeUV_m1 ) / ( cubeUV_r1 - cubeUV_r4 ) + cubeUV_m1;
		} else if ( roughness >= cubeUV_r5 ) {
			mip = ( cubeUV_r4 - roughness ) * ( cubeUV_m5 - cubeUV_m4 ) / ( cubeUV_r4 - cubeUV_r5 ) + cubeUV_m4;
		} else if ( roughness >= cubeUV_r6 ) {
			mip = ( cubeUV_r5 - roughness ) * ( cubeUV_m6 - cubeUV_m5 ) / ( cubeUV_r5 - cubeUV_r6 ) + cubeUV_m5;
		} else {
			mip = - 2.0 * log2( 1.16 * roughness );		}
		return mip;
	}
	vec4 textureCubeUV( sampler2D envMap, vec3 sampleDir, float roughness ) {
		float mip = clamp( roughnessToMip( roughness ), cubeUV_m0, CUBEUV_MAX_MIP );
		float mipF = fract( mip );
		float mipInt = floor( mip );
		vec3 color0 = bilinearCubeUV( envMap, sampleDir, mipInt );
		if ( mipF == 0.0 ) {
			return vec4( color0, 1.0 );
		} else {
			vec3 color1 = bilinearCubeUV( envMap, sampleDir, mipInt + 1.0 );
			return vec4( mix( color0, color1, mipF ), 1.0 );
		}
	}
#endif`,C_=`vec3 transformedNormal = objectNormal;
#ifdef USE_TANGENT
	vec3 transformedTangent = objectTangent;
#endif
#ifdef USE_BATCHING
	mat3 bm = mat3( batchingMatrix );
	transformedNormal /= vec3( dot( bm[ 0 ], bm[ 0 ] ), dot( bm[ 1 ], bm[ 1 ] ), dot( bm[ 2 ], bm[ 2 ] ) );
	transformedNormal = bm * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = bm * transformedTangent;
	#endif
#endif
#ifdef USE_INSTANCING
	mat3 im = mat3( instanceMatrix );
	transformedNormal /= vec3( dot( im[ 0 ], im[ 0 ] ), dot( im[ 1 ], im[ 1 ] ), dot( im[ 2 ], im[ 2 ] ) );
	transformedNormal = im * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = im * transformedTangent;
	#endif
#endif
transformedNormal = normalMatrix * transformedNormal;
#ifdef FLIP_SIDED
	transformedNormal = - transformedNormal;
#endif
#ifdef USE_TANGENT
	transformedTangent = ( modelViewMatrix * vec4( transformedTangent, 0.0 ) ).xyz;
#endif`,P_=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,I_=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,L_=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,N_=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,D_="gl_FragColor = linearToOutputTexel( gl_FragColor );",U_=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,F_=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vec3 cameraToFrag;
		if ( isOrthographic ) {
			cameraToFrag = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToFrag = normalize( vWorldPosition - cameraPosition );
		}
		vec3 worldNormal = transformNormalByInverseViewMatrix( normal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vec3 reflectVec = reflect( cameraToFrag, worldNormal );
		#else
			vec3 reflectVec = refract( cameraToFrag, worldNormal, refractionRatio );
		#endif
	#else
		vec3 reflectVec = vReflect;
	#endif
	#ifdef ENVMAP_TYPE_CUBE
		vec4 envColor = textureCube( envMap, envMapRotation * reflectVec );
		#ifdef ENVMAP_BLENDING_MULTIPLY
			outgoingLight = mix( outgoingLight, outgoingLight * envColor.xyz, specularStrength * reflectivity );
		#elif defined( ENVMAP_BLENDING_MIX )
			outgoingLight = mix( outgoingLight, envColor.xyz, specularStrength * reflectivity );
		#elif defined( ENVMAP_BLENDING_ADD )
			outgoingLight += envColor.xyz * specularStrength * reflectivity;
		#endif
	#endif
#endif`,O_=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
#endif`,B_=`#ifdef USE_ENVMAP
	uniform float reflectivity;
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		varying vec3 vWorldPosition;
		uniform float refractionRatio;
	#else
		varying vec3 vReflect;
	#endif
#endif`,k_=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,z_=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vWorldPosition = worldPosition.xyz;
	#else
		vec3 cameraToVertex;
		if ( isOrthographic ) {
			cameraToVertex = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToVertex = normalize( worldPosition.xyz - cameraPosition );
		}
		vec3 worldNormal = transformNormalByInverseViewMatrix( transformedNormal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vReflect = reflect( cameraToVertex, worldNormal );
		#else
			vReflect = refract( cameraToVertex, worldNormal, refractionRatio );
		#endif
	#endif
#endif`,H_=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,V_=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,G_=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,W_=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,X_=`#ifdef USE_GRADIENTMAP
	uniform sampler2D gradientMap;
#endif
vec3 getGradientIrradiance( vec3 normal, vec3 lightDirection ) {
	float dotNL = dot( normal, lightDirection );
	vec2 coord = vec2( dotNL * 0.5 + 0.5, 0.0 );
	#ifdef USE_GRADIENTMAP
		return vec3( texture2D( gradientMap, coord ).r );
	#else
		vec2 fw = fwidth( coord ) * 0.5;
		return mix( vec3( 0.7 ), vec3( 1.0 ), smoothstep( 0.7 - fw.x, 0.7 + fw.x, coord.x ) );
	#endif
}`,q_=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,Y_=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,K_=`varying vec3 vViewPosition;
struct LambertMaterial {
	vec3 diffuseColor;
	float specularStrength;
};
void RE_Direct_Lambert( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Lambert( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Lambert
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,j_=`uniform bool receiveShadow;
uniform vec3 ambientLightColor;
#if defined( USE_LIGHT_PROBES )
	uniform vec3 lightProbe[ 9 ];
#endif
vec3 shGetIrradianceAt( in vec3 normal, in vec3 shCoefficients[ 9 ] ) {
	float x = normal.x, y = normal.y, z = normal.z;
	vec3 result = shCoefficients[ 0 ] * 0.886227;
	result += shCoefficients[ 1 ] * 2.0 * 0.511664 * y;
	result += shCoefficients[ 2 ] * 2.0 * 0.511664 * z;
	result += shCoefficients[ 3 ] * 2.0 * 0.511664 * x;
	result += shCoefficients[ 4 ] * 2.0 * 0.429043 * x * y;
	result += shCoefficients[ 5 ] * 2.0 * 0.429043 * y * z;
	result += shCoefficients[ 6 ] * ( 0.743125 * z * z - 0.247708 );
	result += shCoefficients[ 7 ] * 2.0 * 0.429043 * x * z;
	result += shCoefficients[ 8 ] * 0.429043 * ( x * x - y * y );
	return result;
}
vec3 getLightProbeIrradiance( const in vec3 lightProbe[ 9 ], const in vec3 normal ) {
	vec3 worldNormal = transformNormalByInverseViewMatrix( normal, viewMatrix );
	vec3 irradiance = shGetIrradianceAt( worldNormal, lightProbe );
	return irradiance;
}
vec3 getAmbientLightIrradiance( const in vec3 ambientLightColor ) {
	vec3 irradiance = ambientLightColor;
	return irradiance;
}
float getDistanceAttenuation( const in float lightDistance, const in float cutoffDistance, const in float decayExponent ) {
	float distanceFalloff = 1.0 / max( pow( lightDistance, decayExponent ), 0.01 );
	if ( cutoffDistance > 0.0 ) {
		distanceFalloff *= pow2( saturate( 1.0 - pow4( lightDistance / cutoffDistance ) ) );
	}
	return distanceFalloff;
}
float getSpotAttenuation( const in float coneCosine, const in float penumbraCosine, const in float angleCosine ) {
	return smoothstep( coneCosine, penumbraCosine, angleCosine );
}
#if NUM_SUN_LIGHTS > 0
	struct SunLight {
		vec3 direction;
		vec3 color;
	};
	uniform SunLight sunLights[ NUM_SUN_LIGHTS ];
	void getSunLightInfo( const in SunLight sunLight, out IncidentLight light ) {
		light.color = sunLight.color;
		light.direction = sunLight.direction;
		light.visible = true;
	}
#endif
#if NUM_DIR_LIGHTS > 0
	struct DirectionalLight {
		vec3 direction;
		vec3 color;
	};
	uniform DirectionalLight directionalLights[ NUM_DIR_LIGHTS ];
	void getDirectionalLightInfo( const in DirectionalLight directionalLight, out IncidentLight light ) {
		light.color = directionalLight.color;
		light.direction = directionalLight.direction;
		light.visible = true;
	}
#endif
#if NUM_POINT_LIGHTS > 0
	struct PointLight {
		vec3 position;
		vec3 color;
		float distance;
		float decay;
	};
	uniform PointLight pointLights[ NUM_POINT_LIGHTS ];
	void getPointLightInfo( const in PointLight pointLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = pointLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float lightDistance = length( lVector );
		light.color = pointLight.color;
		light.color *= getDistanceAttenuation( lightDistance, pointLight.distance, pointLight.decay );
		light.visible = ( light.color != vec3( 0.0 ) );
	}
#endif
#if NUM_SPOT_LIGHTS > 0
	struct SpotLight {
		vec3 position;
		vec3 direction;
		vec3 color;
		float distance;
		float decay;
		float coneCos;
		float penumbraCos;
	};
	uniform SpotLight spotLights[ NUM_SPOT_LIGHTS ];
	void getSpotLightInfo( const in SpotLight spotLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = spotLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float angleCos = dot( light.direction, spotLight.direction );
		float spotAttenuation = getSpotAttenuation( spotLight.coneCos, spotLight.penumbraCos, angleCos );
		if ( spotAttenuation > 0.0 ) {
			float lightDistance = length( lVector );
			light.color = spotLight.color * spotAttenuation;
			light.color *= getDistanceAttenuation( lightDistance, spotLight.distance, spotLight.decay );
			light.visible = ( light.color != vec3( 0.0 ) );
		} else {
			light.color = vec3( 0.0 );
			light.visible = false;
		}
	}
#endif
#if NUM_RECT_AREA_LIGHTS > 0
	struct RectAreaLight {
		vec3 color;
		vec3 position;
		vec3 halfWidth;
		vec3 halfHeight;
	};
	uniform sampler2D ltc_1;	uniform sampler2D ltc_2;
	uniform RectAreaLight rectAreaLights[ NUM_RECT_AREA_LIGHTS ];
#endif
#if NUM_HEMI_LIGHTS > 0
	struct HemisphereLight {
		vec3 direction;
		vec3 skyColor;
		vec3 groundColor;
	};
	uniform HemisphereLight hemisphereLights[ NUM_HEMI_LIGHTS ];
	vec3 getHemisphereLightIrradiance( const in HemisphereLight hemiLight, const in vec3 normal ) {
		float dotNL = dot( normal, hemiLight.direction );
		float hemiDiffuseWeight = 0.5 * dotNL + 0.5;
		vec3 irradiance = mix( hemiLight.groundColor, hemiLight.skyColor, hemiDiffuseWeight );
		return irradiance;
	}
#endif
#include <lightprobes_pars_fragment>`,$_=`#ifdef USE_ENVMAP
	vec3 getIBLIrradiance( const in vec3 normal ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 worldNormal = transformNormalByInverseViewMatrix( normal, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * worldNormal, 1.0 );
			return PI * envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	vec3 getIBLRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 reflectVec = reflect( - viewDir, normal );
			reflectVec = normalize( mix( reflectVec, normal, pow4( roughness ) ) );
			reflectVec = transformDirectionByInverseViewMatrix( reflectVec, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * reflectVec, roughness );
			return envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	#ifdef USE_RETROREFLECTION
		vec3 getIBLRetroRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {
			#ifdef ENVMAP_TYPE_CUBE_UV
				vec3 retroVec = normalize( mix( viewDir, normal, pow4( roughness ) ) );
				retroVec = transformDirectionByInverseViewMatrix( retroVec, viewMatrix );
				vec4 envMapColor = textureCubeUV( envMap, envMapRotation * retroVec, roughness );
				return envMapColor.rgb * envMapIntensity;
			#else
				return vec3( 0.0 );
			#endif
		}
	#endif
	#ifdef USE_ANISOTROPY
		vec3 getIBLAnisotropyRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness, const in vec3 bitangent, const in float anisotropy ) {
			#ifdef ENVMAP_TYPE_CUBE_UV
				vec3 bentNormal = cross( bitangent, viewDir );
				bentNormal = normalize( cross( bentNormal, bitangent ) );
				bentNormal = normalize( mix( bentNormal, normal, pow2( pow2( 1.0 - anisotropy * ( 1.0 - roughness ) ) ) ) );
				return getIBLRadiance( viewDir, bentNormal, roughness );
			#else
				return vec3( 0.0 );
			#endif
		}
		#ifdef USE_RETROREFLECTION
			vec3 getIBLAnisotropyRetroRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness, const in vec3 bitangent, const in float anisotropy ) {
				#ifdef ENVMAP_TYPE_CUBE_UV
					vec3 bentNormal = cross( bitangent, viewDir );
					bentNormal = normalize( cross( bentNormal, bitangent ) );
					bentNormal = normalize( mix( bentNormal, normal, pow2( pow2( 1.0 - anisotropy * ( 1.0 - roughness ) ) ) ) );
					return getIBLRetroRadiance( viewDir, bentNormal, roughness );
				#else
					return vec3( 0.0 );
				#endif
			}
		#endif
	#endif
#endif`,Z_=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,J_=`varying vec3 vViewPosition;
struct ToonMaterial {
	vec3 diffuseColor;
};
void RE_Direct_Toon( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 irradiance = getGradientIrradiance( geometryNormal, directLight.direction ) * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Toon( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Toon
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,Q_=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,ev=`varying vec3 vViewPosition;
struct BlinnPhongMaterial {
	vec3 diffuseColor;
	vec3 specularColor;
	float specularShininess;
	float specularStrength;
};
void RE_Direct_BlinnPhong( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
	reflectedLight.directSpecular += irradiance * BRDF_BlinnPhong( directLight.direction, geometryViewDir, geometryNormal, material.specularColor, material.specularShininess ) * material.specularStrength;
}
void RE_IndirectDiffuse_BlinnPhong( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_BlinnPhong
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,tv=`PhysicalMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.diffuseContribution = diffuseColor.rgb * ( 1.0 - metalnessFactor );
material.metalness = metalnessFactor;
vec3 dxy = max( abs( dFdx( nonPerturbedNormal ) ), abs( dFdy( nonPerturbedNormal ) ) );
float geometryRoughness = max( max( dxy.x, dxy.y ), dxy.z );
material.roughness = max( roughnessFactor, 0.0525 );material.roughness += geometryRoughness;
material.roughness = min( material.roughness, 1.0 );
#ifdef IOR
	material.ior = ior;
	#ifdef USE_SPECULAR
		float specularIntensityFactor = specularIntensity;
		vec3 specularColorFactor = specularColor;
		#ifdef USE_SPECULAR_COLORMAP
			specularColorFactor *= texture2D( specularColorMap, vSpecularColorMapUv ).rgb;
		#endif
		#ifdef USE_SPECULAR_INTENSITYMAP
			specularIntensityFactor *= texture2D( specularIntensityMap, vSpecularIntensityMapUv ).a;
		#endif
		material.specularF90 = mix( specularIntensityFactor, 1.0, metalnessFactor );
	#else
		float specularIntensityFactor = 1.0;
		vec3 specularColorFactor = vec3( 1.0 );
		material.specularF90 = 1.0;
	#endif
	material.specularColor = min( pow2( ( material.ior - 1.0 ) / ( material.ior + 1.0 ) ) * specularColorFactor, vec3( 1.0 ) ) * specularIntensityFactor;
	material.specularColorBlended = mix( material.specularColor, diffuseColor.rgb, metalnessFactor );
#else
	material.specularColor = vec3( 0.04 );
	material.specularColorBlended = mix( material.specularColor, diffuseColor.rgb, metalnessFactor );
	material.specularF90 = 1.0;
#endif
#ifdef USE_CLEARCOAT
	material.clearcoat = clearcoat;
	material.clearcoatRoughness = clearcoatRoughness;
	material.clearcoatF0 = vec3( 0.04 );
	material.clearcoatF90 = 1.0;
	#ifdef USE_CLEARCOATMAP
		material.clearcoat *= texture2D( clearcoatMap, vClearcoatMapUv ).x;
	#endif
	#ifdef USE_CLEARCOAT_ROUGHNESSMAP
		material.clearcoatRoughness *= texture2D( clearcoatRoughnessMap, vClearcoatRoughnessMapUv ).y;
	#endif
	material.clearcoat = saturate( material.clearcoat );	material.clearcoatRoughness = max( material.clearcoatRoughness, 0.0525 );
	material.clearcoatRoughness += geometryRoughness;
	material.clearcoatRoughness = min( material.clearcoatRoughness, 1.0 );
#endif
#ifdef USE_DISPERSION
	material.dispersion = dispersion;
#endif
#ifdef USE_RETROREFLECTION
	material.retroreflectivity = retroreflectivity;
#endif
#ifdef USE_IRIDESCENCE
	material.iridescence = iridescence;
	material.iridescenceIOR = iridescenceIOR;
	#ifdef USE_IRIDESCENCEMAP
		material.iridescence *= texture2D( iridescenceMap, vIridescenceMapUv ).r;
	#endif
	#ifdef USE_IRIDESCENCE_THICKNESSMAP
		material.iridescenceThickness = (iridescenceThicknessMaximum - iridescenceThicknessMinimum) * texture2D( iridescenceThicknessMap, vIridescenceThicknessMapUv ).g + iridescenceThicknessMinimum;
	#else
		material.iridescenceThickness = iridescenceThicknessMaximum;
	#endif
#endif
#ifdef USE_SHEEN
	material.sheenColor = sheenColor;
	#ifdef USE_SHEEN_COLORMAP
		material.sheenColor *= texture2D( sheenColorMap, vSheenColorMapUv ).rgb;
	#endif
	material.sheenRoughness = clamp( sheenRoughness, 0.0001, 1.0 );
	#ifdef USE_SHEEN_ROUGHNESSMAP
		material.sheenRoughness *= texture2D( sheenRoughnessMap, vSheenRoughnessMapUv ).a;
	#endif
#endif
#ifdef USE_ANISOTROPY
	#ifdef USE_ANISOTROPYMAP
		mat2 anisotropyMat = mat2( anisotropyVector.x, anisotropyVector.y, - anisotropyVector.y, anisotropyVector.x );
		vec3 anisotropyPolar = texture2D( anisotropyMap, vAnisotropyMapUv ).rgb;
		vec2 anisotropyV = anisotropyMat * normalize( 2.0 * anisotropyPolar.rg - vec2( 1.0 ) ) * anisotropyPolar.b;
	#else
		vec2 anisotropyV = anisotropyVector;
	#endif
	material.anisotropy = length( anisotropyV );
	if( material.anisotropy == 0.0 ) {
		anisotropyV = vec2( 1.0, 0.0 );
	} else {
		anisotropyV /= material.anisotropy;
		material.anisotropy = saturate( material.anisotropy );
	}
	material.alphaT = mix( pow2( material.roughness ), 1.0, pow2( material.anisotropy ) );
	material.anisotropyT = tbn[ 0 ] * anisotropyV.x + tbn[ 1 ] * anisotropyV.y;
	material.anisotropyB = tbn[ 1 ] * anisotropyV.x - tbn[ 0 ] * anisotropyV.y;
#endif`,nv=`uniform sampler2D dfgLUT;
struct PhysicalMaterial {
	vec3 diffuseColor;
	vec3 diffuseContribution;
	vec3 specularColor;
	vec3 specularColorBlended;
	float roughness;
	float metalness;
	float specularF90;
	float dispersion;
	vec2 dfg;
	vec3 multiScatteringCompensation;
	#ifdef USE_RETROREFLECTION
		float retroreflectivity;
	#endif
	#ifdef USE_CLEARCOAT
		float clearcoat;
		float clearcoatRoughness;
		vec3 clearcoatF0;
		float clearcoatF90;
	#endif
	#ifdef USE_IRIDESCENCE
		float iridescence;
		float iridescenceIOR;
		float iridescenceThickness;
		vec3 iridescenceFresnel;
		vec3 iridescenceF0Dielectric;
		vec3 iridescenceF0Metallic;
	#endif
	#ifdef USE_SHEEN
		vec3 sheenColor;
		float sheenRoughness;
	#endif
	#ifdef IOR
		float ior;
	#endif
	#ifdef USE_TRANSMISSION
		float transmission;
		float transmissionAlpha;
		float thickness;
		float attenuationDistance;
		vec3 attenuationColor;
	#endif
	#ifdef USE_ANISOTROPY
		float anisotropy;
		float alphaT;
		vec3 anisotropyT;
		vec3 anisotropyB;
	#endif
};
vec3 clearcoatSpecularDirect = vec3( 0.0 );
vec3 clearcoatSpecularIndirect = vec3( 0.0 );
vec3 sheenSpecularDirect = vec3( 0.0 );
vec3 sheenSpecularIndirect = vec3(0.0 );
vec3 Schlick_to_F0( const in vec3 f, const in float f90, const in float dotVH ) {
    float x = clamp( 1.0 - dotVH, 0.0, 1.0 );
    float x2 = x * x;
    float x5 = clamp( x * x2 * x2, 0.0, 0.9999 );
    return ( f - vec3( f90 ) * x5 ) / ( 1.0 - x5 );
}
float V_GGX_SmithCorrelated( const in float alpha, const in float dotNL, const in float dotNV ) {
	float a2 = pow2( alpha );
	float gv = dotNL * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNV ) );
	float gl = dotNV * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNL ) );
	return 0.5 / max( gv + gl, EPSILON );
}
float D_GGX( const in float alpha, const in float dotNH ) {
	float a2 = pow2( alpha );
	float denom = pow2( dotNH ) * ( a2 - 1.0 ) + 1.0;
	return RECIPROCAL_PI * a2 / pow2( denom );
}
#ifdef USE_ANISOTROPY
	float V_GGX_SmithCorrelated_Anisotropic( const in float alphaT, const in float alphaB, const in float dotTV, const in float dotBV, const in float dotTL, const in float dotBL, const in float dotNV, const in float dotNL ) {
		float gv = dotNL * length( vec3( alphaT * dotTV, alphaB * dotBV, dotNV ) );
		float gl = dotNV * length( vec3( alphaT * dotTL, alphaB * dotBL, dotNL ) );
		return 0.5 / max( gv + gl, EPSILON );
	}
	float D_GGX_Anisotropic( const in float alphaT, const in float alphaB, const in float dotNH, const in float dotTH, const in float dotBH ) {
		float a2 = alphaT * alphaB;
		highp vec3 v = vec3( alphaB * dotTH, alphaT * dotBH, a2 * dotNH );
		highp float v2 = dot( v, v );
		float w2 = a2 / v2;
		return RECIPROCAL_PI * a2 * pow2 ( w2 );
	}
#endif
#ifdef USE_CLEARCOAT
	vec3 BRDF_GGX_Clearcoat( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material) {
		vec3 f0 = material.clearcoatF0;
		float f90 = material.clearcoatF90;
		float roughness = material.clearcoatRoughness;
		float alpha = pow2( roughness );
		vec3 halfDir = normalize( lightDir + viewDir );
		float dotNL = saturate( dot( normal, lightDir ) );
		float dotNV = saturate( dot( normal, viewDir ) );
		float dotNH = saturate( dot( normal, halfDir ) );
		float dotVH = saturate( dot( viewDir, halfDir ) );
		vec3 F = F_Schlick( f0, f90, dotVH );
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
		return F * ( V * D );
	}
#endif
vec3 BRDF_GGX( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material ) {
	vec3 f0 = material.specularColorBlended;
	float f90 = material.specularF90;
	float roughness = material.roughness;
	float alpha = pow2( roughness );
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( f0, f90, dotVH );
	#ifdef USE_IRIDESCENCE
		F = mix( F, material.iridescenceFresnel, material.iridescence );
	#endif
	#ifdef USE_ANISOTROPY
		float dotTL = dot( material.anisotropyT, lightDir );
		float dotTV = dot( material.anisotropyT, viewDir );
		float dotTH = dot( material.anisotropyT, halfDir );
		float dotBL = dot( material.anisotropyB, lightDir );
		float dotBV = dot( material.anisotropyB, viewDir );
		float dotBH = dot( material.anisotropyB, halfDir );
		float V = V_GGX_SmithCorrelated_Anisotropic( material.alphaT, alpha, dotTV, dotBV, dotTL, dotBL, dotNV, dotNL );
		float D = D_GGX_Anisotropic( material.alphaT, alpha, dotNH, dotTH, dotBH );
	#else
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
	#endif
	return F * ( V * D );
}
vec2 LTC_Uv( const in vec3 N, const in vec3 V, const in float roughness ) {
	const float LUT_SIZE = 64.0;
	const float LUT_SCALE = ( LUT_SIZE - 1.0 ) / LUT_SIZE;
	const float LUT_BIAS = 0.5 / LUT_SIZE;
	float dotNV = saturate( dot( N, V ) );
	vec2 uv = vec2( roughness, sqrt( 1.0 - dotNV ) );
	uv = uv * LUT_SCALE + LUT_BIAS;
	return uv;
}
float LTC_ClippedSphereFormFactor( const in vec3 f ) {
	float l = length( f );
	return max( ( l * l + f.z ) / ( l + 1.0 ), 0.0 );
}
vec3 LTC_EdgeVectorFormFactor( const in vec3 v1, const in vec3 v2 ) {
	float x = dot( v1, v2 );
	float y = abs( x );
	float a = 0.8543985 + ( 0.4965155 + 0.0145206 * y ) * y;
	float b = 3.4175940 + ( 4.1616724 + y ) * y;
	float v = a / b;
	float theta_sintheta = ( x > 0.0 ) ? v : 0.5 * inversesqrt( max( 1.0 - x * x, 1e-7 ) ) - v;
	return cross( v1, v2 ) * theta_sintheta;
}
vec3 LTC_Evaluate( const in vec3 N, const in vec3 V, const in vec3 P, const in mat3 mInv, const in vec3 rectCoords[ 4 ] ) {
	vec3 v1 = rectCoords[ 1 ] - rectCoords[ 0 ];
	vec3 v2 = rectCoords[ 3 ] - rectCoords[ 0 ];
	vec3 lightNormal = cross( v1, v2 );
	if( dot( lightNormal, P - rectCoords[ 0 ] ) < 0.0 ) return vec3( 0.0 );
	vec3 T1, T2;
	T1 = normalize( V - N * dot( V, N ) );
	T2 = - cross( N, T1 );
	mat3 mat = mInv * transpose( mat3( T1, T2, N ) );
	vec3 coords[ 4 ];
	coords[ 0 ] = mat * ( rectCoords[ 0 ] - P );
	coords[ 1 ] = mat * ( rectCoords[ 1 ] - P );
	coords[ 2 ] = mat * ( rectCoords[ 2 ] - P );
	coords[ 3 ] = mat * ( rectCoords[ 3 ] - P );
	coords[ 0 ] = normalize( coords[ 0 ] );
	coords[ 1 ] = normalize( coords[ 1 ] );
	coords[ 2 ] = normalize( coords[ 2 ] );
	coords[ 3 ] = normalize( coords[ 3 ] );
	vec3 vectorFormFactor = vec3( 0.0 );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 0 ], coords[ 1 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 1 ], coords[ 2 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 2 ], coords[ 3 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 3 ], coords[ 0 ] );
	float result = LTC_ClippedSphereFormFactor( vectorFormFactor );
	return vec3( result );
}
#if defined( USE_SHEEN )
float D_Charlie( float roughness, float dotNH ) {
	float alpha = pow2( roughness );
	float invAlpha = 1.0 / alpha;
	float cos2h = dotNH * dotNH;
	float sin2h = max( 1.0 - cos2h, 0.0078125 );
	return ( 2.0 + invAlpha ) * pow( sin2h, invAlpha * 0.5 ) / ( 2.0 * PI );
}
float V_Neubelt( float dotNV, float dotNL ) {
	return saturate( 1.0 / ( 4.0 * ( dotNL + dotNV - dotNL * dotNV ) ) );
}
vec3 BRDF_Sheen( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, vec3 sheenColor, const in float sheenRoughness ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float D = D_Charlie( sheenRoughness, dotNH );
	float V = V_Neubelt( dotNV, dotNL );
	return sheenColor * ( D * V );
}
#endif
float IBLSheenBRDF( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	float r2 = roughness * roughness;
	float rInv = 1.0 / ( roughness + 0.1 );
	float a = -1.9362 + 1.0678 * roughness + 0.4573 * r2 - 0.8469 * rInv;
	float b = -0.6014 + 0.5538 * roughness - 0.4670 * r2 - 0.1255 * rInv;
	float DG = exp( a * dotNV + b );
	return saturate( DG );
}
vec3 EnvironmentBRDF( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	vec2 fab = texture2D( dfgLUT, vec2( roughness, dotNV ) ).rg;
	return specularColor * fab.x + specularF90 * fab.y;
}
#ifdef USE_IRIDESCENCE
void computeMultiscatteringIridescence( const in vec2 fab, const in vec3 specularColor, const in float specularF90, const in float iridescence, const in vec3 iridescenceF0, inout vec3 singleScatter, inout vec3 multiScatter ) {
#else
void computeMultiscattering( const in vec2 fab, const in vec3 specularColor, const in float specularF90, inout vec3 singleScatter, inout vec3 multiScatter ) {
#endif
	#ifdef USE_IRIDESCENCE
		vec3 Fr = mix( specularColor, iridescenceF0, iridescence );
	#else
		vec3 Fr = specularColor;
	#endif
	vec3 FssEss = Fr * fab.x + specularF90 * fab.y;
	float Ess = fab.x + fab.y;
	float Ems = 1.0 - Ess;
	vec3 Favg = Fr + ( 1.0 - Fr ) * 0.047619;	vec3 Fms = FssEss * Favg / ( 1.0 - Ems * Favg );
	singleScatter += FssEss;
	multiScatter += Fms * Ems;
}
#if NUM_RECT_AREA_LIGHTS > 0
	void RE_Direct_RectArea_Physical( const in RectAreaLight rectAreaLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
		vec3 normal = geometryNormal;
		vec3 viewDir = geometryViewDir;
		vec3 position = geometryPosition;
		vec3 lightPos = rectAreaLight.position;
		vec3 halfWidth = rectAreaLight.halfWidth;
		vec3 halfHeight = rectAreaLight.halfHeight;
		vec3 lightColor = rectAreaLight.color;
		float roughness = material.roughness;
		vec3 rectCoords[ 4 ];
		rectCoords[ 0 ] = lightPos + halfWidth - halfHeight;		rectCoords[ 1 ] = lightPos - halfWidth - halfHeight;
		rectCoords[ 2 ] = lightPos - halfWidth + halfHeight;
		rectCoords[ 3 ] = lightPos + halfWidth + halfHeight;
		vec2 uv = LTC_Uv( normal, viewDir, roughness );
		vec4 t1 = texture2D( ltc_1, uv );
		vec4 t2 = texture2D( ltc_2, uv );
		mat3 mInv = mat3(
			vec3( t1.x, 0, t1.y ),
			vec3(    0, 1,    0 ),
			vec3( t1.z, 0, t1.w )
		);
		vec3 fresnel = ( material.specularColorBlended * t2.x + ( material.specularF90 - material.specularColorBlended ) * t2.y );
		reflectedLight.directSpecular += lightColor * fresnel * LTC_Evaluate( normal, viewDir, position, mInv, rectCoords );
		reflectedLight.directDiffuse += lightColor * material.diffuseContribution * LTC_Evaluate( normal, viewDir, position, mat3( 1.0 ), rectCoords );
		#ifdef USE_CLEARCOAT
			vec3 Ncc = geometryClearcoatNormal;
			vec2 uvClearcoat = LTC_Uv( Ncc, viewDir, material.clearcoatRoughness );
			vec4 t1Clearcoat = texture2D( ltc_1, uvClearcoat );
			vec4 t2Clearcoat = texture2D( ltc_2, uvClearcoat );
			mat3 mInvClearcoat = mat3(
				vec3( t1Clearcoat.x, 0, t1Clearcoat.y ),
				vec3(             0, 1,             0 ),
				vec3( t1Clearcoat.z, 0, t1Clearcoat.w )
			);
			vec3 fresnelClearcoat = material.clearcoatF0 * t2Clearcoat.x + ( material.clearcoatF90 - material.clearcoatF0 ) * t2Clearcoat.y;
			clearcoatSpecularDirect += lightColor * fresnelClearcoat * LTC_Evaluate( Ncc, viewDir, position, mInvClearcoat, rectCoords );
		#endif
	}
#endif
void RE_Direct_Physical( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	#ifdef USE_CLEARCOAT
		float dotNLcc = saturate( dot( geometryClearcoatNormal, directLight.direction ) );
		vec3 ccIrradiance = dotNLcc * directLight.color;
		clearcoatSpecularDirect += ccIrradiance * BRDF_GGX_Clearcoat( directLight.direction, geometryViewDir, geometryClearcoatNormal, material );
	#endif
	#ifdef USE_SHEEN
 
 		sheenSpecularDirect += irradiance * BRDF_Sheen( directLight.direction, geometryViewDir, geometryNormal, material.sheenColor, material.sheenRoughness );
 
 		float sheenAlbedoV = IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
 		float sheenAlbedoL = IBLSheenBRDF( geometryNormal, directLight.direction, material.sheenRoughness );
 
 		float sheenEnergyComp = 1.0 - max3( material.sheenColor ) * max( sheenAlbedoV, sheenAlbedoL );
 
 		irradiance *= sheenEnergyComp;
 
 	#endif
	vec3 specularBRDF = BRDF_GGX( directLight.direction, geometryViewDir, geometryNormal, material );
	#ifdef USE_RETROREFLECTION
		vec3 retroViewDir = reflect( - geometryViewDir, geometryNormal );
		vec3 retroSpecularBRDF = BRDF_GGX( directLight.direction, retroViewDir, geometryNormal, material );
		specularBRDF = mix( specularBRDF, retroSpecularBRDF, saturate( material.retroreflectivity ) );
	#endif
	reflectedLight.directSpecular += irradiance * specularBRDF * material.multiScatteringCompensation;
	vec3 halfDir = normalize( directLight.direction + geometryViewDir );
	float dotVH = saturate( dot( geometryViewDir, halfDir ) );
	vec3 F = F_Schlick( material.specularColor, material.specularF90, dotVH );
	#ifdef USE_RETROREFLECTION
		vec3 retroHalfDir = normalize( directLight.direction + retroViewDir );
		float dotRetroVH = saturate( dot( retroViewDir, retroHalfDir ) );
		vec3 retroF = F_Schlick( material.specularColor, material.specularF90, dotRetroVH );
		F = mix( F, retroF, saturate( material.retroreflectivity ) );
	#endif
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseContribution ) * ( 1.0 - F );
}
void RE_IndirectDiffuse_Physical( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 singleScattering = vec3( 0.0 );
	vec3 multiScattering = vec3( 0.0 );
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( material.dfg, material.specularColor, material.specularF90, material.iridescence, material.iridescenceF0Dielectric, singleScattering, multiScattering );
	#else
		computeMultiscattering( material.dfg, material.specularColor, material.specularF90, singleScattering, multiScattering );
	#endif
	vec3 diffuse = irradiance * BRDF_Lambert( material.diffuseContribution ) * ( 1.0 - singleScattering - multiScattering );
	#ifdef USE_SHEEN
		float sheenAlbedo = IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
		sheenSpecularIndirect += irradiance * material.sheenColor * sheenAlbedo * RECIPROCAL_PI;
		float sheenEnergyComp = 1.0 - max3( material.sheenColor ) * sheenAlbedo;
		diffuse *= sheenEnergyComp;
	#endif
	reflectedLight.indirectDiffuse += diffuse;
}
void RE_IndirectSpecular_Physical( const in vec3 radiance, const in vec3 irradiance, const in vec3 clearcoatRadiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight) {
	#ifdef USE_CLEARCOAT
		clearcoatSpecularIndirect += clearcoatRadiance * EnvironmentBRDF( geometryClearcoatNormal, geometryViewDir, material.clearcoatF0, material.clearcoatF90, material.clearcoatRoughness );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularIndirect += irradiance * material.sheenColor * IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness ) * RECIPROCAL_PI;
 	#endif
	vec3 singleScatteringDielectric = vec3( 0.0 );
	vec3 multiScatteringDielectric = vec3( 0.0 );
	vec3 singleScatteringMetallic = vec3( 0.0 );
	vec3 multiScatteringMetallic = vec3( 0.0 );
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( material.dfg, material.specularColor, material.specularF90, material.iridescence, material.iridescenceF0Dielectric, singleScatteringDielectric, multiScatteringDielectric );
		computeMultiscatteringIridescence( material.dfg, material.diffuseColor, material.specularF90, material.iridescence, material.iridescenceF0Metallic, singleScatteringMetallic, multiScatteringMetallic );
	#else
		computeMultiscattering( material.dfg, material.specularColor, material.specularF90, singleScatteringDielectric, multiScatteringDielectric );
		computeMultiscattering( material.dfg, material.diffuseColor, material.specularF90, singleScatteringMetallic, multiScatteringMetallic );
	#endif
	vec3 singleScattering = mix( singleScatteringDielectric, singleScatteringMetallic, material.metalness );
	vec3 multiScattering = mix( multiScatteringDielectric, multiScatteringMetallic, material.metalness );
	vec3 totalScatteringDielectric = singleScatteringDielectric + multiScatteringDielectric;
	vec3 diffuse = material.diffuseContribution * ( 1.0 - totalScatteringDielectric );
	vec3 cosineWeightedIrradiance = irradiance * RECIPROCAL_PI;
	vec3 indirectSpecular = radiance * singleScattering;
	indirectSpecular += multiScattering * cosineWeightedIrradiance;
	vec3 indirectDiffuse = diffuse * cosineWeightedIrradiance;
	#ifdef USE_SHEEN
		float sheenAlbedo = IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
		float sheenEnergyComp = 1.0 - max3( material.sheenColor ) * sheenAlbedo;
		indirectSpecular *= sheenEnergyComp;
		indirectDiffuse *= sheenEnergyComp;
	#endif
	reflectedLight.indirectSpecular += indirectSpecular;
	reflectedLight.indirectDiffuse += indirectDiffuse;
}
#define RE_Direct				RE_Direct_Physical
#define RE_Direct_RectArea		RE_Direct_RectArea_Physical
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Physical
#define RE_IndirectSpecular		RE_IndirectSpecular_Physical
float computeSpecularOcclusion( const in float dotNV, const in float ambientOcclusion, const in float roughness ) {
	return saturate( pow( dotNV + ambientOcclusion, exp2( - 16.0 * roughness - 1.0 ) ) - 1.0 + ambientOcclusion );
}`,iv=`
vec3 geometryPosition = - vViewPosition;
vec3 geometryNormal = normal;
vec3 geometryViewDir = ( isOrthographic ) ? vec3( 0, 0, 1 ) : normalize( vViewPosition );
vec3 geometryClearcoatNormal = vec3( 0.0 );
#ifdef USE_CLEARCOAT
	geometryClearcoatNormal = clearcoatNormal;
#endif
#ifdef USE_IRIDESCENCE
	float dotNVi = saturate( dot( normal, geometryViewDir ) );
	if ( material.iridescenceThickness == 0.0 ) {
		material.iridescence = 0.0;
	} else {
		material.iridescence = saturate( material.iridescence );
	}
	if ( material.iridescence > 0.0 ) {
		vec3 iridescenceFresnelDielectric = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.specularColor );
		vec3 iridescenceFresnelMetallic = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.diffuseColor );
		material.iridescenceFresnel = mix( iridescenceFresnelDielectric, iridescenceFresnelMetallic, material.metalness );
		material.iridescenceF0Dielectric = Schlick_to_F0( iridescenceFresnelDielectric, 1.0, dotNVi );
		material.iridescenceF0Metallic = Schlick_to_F0( iridescenceFresnelMetallic, 1.0, dotNVi );
	}
#endif
#ifdef STANDARD
	float dotNVms = saturate( dot( geometryNormal, geometryViewDir ) );
	material.dfg = texture2D( dfgLUT, vec2( material.roughness, dotNVms ) ).rg;
	#if ( NUM_SUN_LIGHTS > 0 || NUM_DIR_LIGHTS > 0 || NUM_POINT_LIGHTS > 0 || NUM_SPOT_LIGHTS > 0 )
		float EssMs = material.dfg.x + material.dfg.y;
		material.multiScatteringCompensation = 1.0 + material.specularColorBlended * ( 1.0 / EssMs - 1.0 );
	#endif
#endif
IncidentLight directLight;
#if ( NUM_POINT_LIGHTS > 0 ) && defined( RE_Direct )
	PointLight pointLight;
	#if defined( USE_SHADOWMAP ) && NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHTS; i ++ ) {
		pointLight = pointLights[ i ];
		getPointLightInfo( pointLight, geometryPosition, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_POINT_LIGHT_SHADOWS ) && ( defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_BASIC ) )
		pointLightShadow = pointLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getPointShadow( pointShadowMap[ i ], pointLightShadow.shadowMapSize, pointLightShadow.shadowIntensity, pointLightShadow.shadowBias, pointLightShadow.shadowRadius, vPointShadowCoord[ i ], pointLightShadow.shadowCameraNear, pointLightShadow.shadowCameraFar ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_SPOT_LIGHTS > 0 ) && defined( RE_Direct )
	SpotLight spotLight;
	vec4 spotColor;
	vec3 spotLightCoord;
	bool inSpotLightMap;
	#if defined( USE_SHADOWMAP ) && NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHTS; i ++ ) {
		spotLight = spotLights[ i ];
		getSpotLightInfo( spotLight, geometryPosition, directLight );
		#if ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#define SPOT_LIGHT_MAP_INDEX UNROLLED_LOOP_INDEX
		#elif ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		#define SPOT_LIGHT_MAP_INDEX NUM_SPOT_LIGHT_MAPS
		#else
		#define SPOT_LIGHT_MAP_INDEX ( UNROLLED_LOOP_INDEX - NUM_SPOT_LIGHT_SHADOWS + NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#endif
		#if ( SPOT_LIGHT_MAP_INDEX < NUM_SPOT_LIGHT_MAPS )
			spotLightCoord = vSpotLightCoord[ i ].xyz / vSpotLightCoord[ i ].w;
			inSpotLightMap = all( lessThan( abs( spotLightCoord * 2. - 1. ), vec3( 1.0 ) ) );
			spotColor = texture2D( spotLightMap[ SPOT_LIGHT_MAP_INDEX ], spotLightCoord.xy );
			directLight.color = inSpotLightMap ? directLight.color * spotColor.rgb : directLight.color;
		#endif
		#undef SPOT_LIGHT_MAP_INDEX
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		spotLightShadow = spotLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( spotShadowMap[ i ], spotLightShadow.shadowMapSize, spotLightShadow.shadowIntensity, spotLightShadow.shadowBias, spotLightShadow.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_SUN_LIGHTS > 0 ) && defined( RE_Direct )
	SunLight sunLight;
	#if defined( USE_SHADOWMAP ) && NUM_SUN_LIGHT_SHADOWS > 0
	SunLightShadow sunLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SUN_LIGHTS; i ++ ) {
		sunLight = sunLights[ i ];
		getSunLightInfo( sunLight, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_SUN_LIGHT_SHADOWS )
		sunLightShadow = sunLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getSunShadow( sunShadowMap[ i ], sunLightShadow, UNROLLED_LOOP_INDEX ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_DIR_LIGHTS > 0 ) && defined( RE_Direct )
	DirectionalLight directionalLight;
	#if defined( USE_SHADOWMAP ) && NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHTS; i ++ ) {
		directionalLight = directionalLights[ i ];
		getDirectionalLightInfo( directionalLight, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_DIR_LIGHT_SHADOWS )
		directionalLightShadow = directionalLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( directionalShadowMap[ i ], directionalLightShadow.shadowMapSize, directionalLightShadow.shadowIntensity, directionalLightShadow.shadowBias, directionalLightShadow.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_RECT_AREA_LIGHTS > 0 ) && defined( RE_Direct_RectArea )
	RectAreaLight rectAreaLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_RECT_AREA_LIGHTS; i ++ ) {
		rectAreaLight = rectAreaLights[ i ];
		RE_Direct_RectArea( rectAreaLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if defined( RE_IndirectDiffuse )
	vec3 iblIrradiance = vec3( 0.0 );
	vec3 irradiance = getAmbientLightIrradiance( ambientLightColor );
	#if defined( USE_LIGHT_PROBES )
		irradiance += getLightProbeIrradiance( lightProbe, geometryNormal );
	#endif
	#if ( NUM_HEMI_LIGHTS > 0 )
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_HEMI_LIGHTS; i ++ ) {
			irradiance += getHemisphereLightIrradiance( hemisphereLights[ i ], geometryNormal );
		}
		#pragma unroll_loop_end
	#endif
	#ifdef USE_LIGHT_PROBES_GRID
		vec3 probeWorldPos = ( ( vec4( geometryPosition, 1.0 ) - viewMatrix[ 3 ] ) * viewMatrix ).xyz;
		vec3 probeWorldNormal = transformNormalByInverseViewMatrix( geometryNormal, viewMatrix );
		irradiance += getLightProbeGridIrradiance( probeWorldPos, probeWorldNormal );
	#endif
#endif
#if defined( RE_IndirectSpecular )
	vec3 radiance = vec3( 0.0 );
	vec3 clearcoatRadiance = vec3( 0.0 );
#endif`,sv=`#if defined( RE_IndirectDiffuse )
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
		irradiance += lightMapIrradiance;
	#endif
	#if defined( USE_ENVMAP ) && defined( ENVMAP_TYPE_CUBE_UV )
		#if defined( STANDARD ) || defined( LAMBERT ) || defined( PHONG )
			iblIrradiance += getIBLIrradiance( geometryNormal );
		#endif
	#endif
#endif
#if defined( USE_ENVMAP ) && defined( RE_IndirectSpecular )
	#ifdef USE_ANISOTROPY
		vec3 iblRadiance = getIBLAnisotropyRadiance( geometryViewDir, geometryNormal, material.roughness, material.anisotropyB, material.anisotropy );
	#else
		vec3 iblRadiance = getIBLRadiance( geometryViewDir, geometryNormal, material.roughness );
	#endif
	#ifdef USE_RETROREFLECTION
		#ifdef USE_ANISOTROPY
			vec3 retroIBLRadiance = getIBLAnisotropyRetroRadiance( geometryViewDir, geometryNormal, material.roughness, material.anisotropyB, material.anisotropy );
		#else
			vec3 retroIBLRadiance = getIBLRetroRadiance( geometryViewDir, geometryNormal, material.roughness );
		#endif
		iblRadiance = mix( iblRadiance, retroIBLRadiance, saturate( material.retroreflectivity ) );
	#endif
	radiance += iblRadiance;
	#ifdef USE_CLEARCOAT
		clearcoatRadiance += getIBLRadiance( geometryViewDir, geometryClearcoatNormal, material.clearcoatRoughness );
	#endif
#endif`,rv=`#if defined( RE_IndirectDiffuse )
	#if defined( LAMBERT ) || defined( PHONG )
		irradiance += iblIrradiance;
	#endif
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,ov=`#ifdef USE_LIGHT_PROBES_GRID
uniform highp sampler3D probesSH;
uniform vec3 probesMin;
uniform vec3 probesMax;
uniform vec3 probesResolution;
vec3 getLightProbeGridIrradiance( vec3 worldPos, vec3 worldNormal ) {
	vec3 res = probesResolution;
	vec3 gridRange = probesMax - probesMin;
	vec3 resMinusOne = res - 1.0;
	vec3 probeSpacing = gridRange / resMinusOne;
	vec3 samplePos = worldPos + worldNormal * probeSpacing * 0.5;
	vec3 uvw = clamp( ( samplePos - probesMin ) / gridRange, 0.0, 1.0 );
	uvw = uvw * resMinusOne / res + 0.5 / res;
	float nz          = res.z;
	float paddedSlices = nz + 2.0;
	float atlasDepth  = 7.0 * paddedSlices;
	float uvZBase     = uvw.z * nz + 1.0;
	vec4 s0 = texture( probesSH, vec3( uvw.xy, ( uvZBase                       ) / atlasDepth ) );
	vec4 s1 = texture( probesSH, vec3( uvw.xy, ( uvZBase +       paddedSlices   ) / atlasDepth ) );
	vec4 s2 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 2.0 * paddedSlices   ) / atlasDepth ) );
	vec4 s3 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 3.0 * paddedSlices   ) / atlasDepth ) );
	vec4 s4 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 4.0 * paddedSlices   ) / atlasDepth ) );
	vec4 s5 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 5.0 * paddedSlices   ) / atlasDepth ) );
	vec4 s6 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 6.0 * paddedSlices   ) / atlasDepth ) );
	vec3 c0 = s0.xyz;
	vec3 c1 = vec3( s0.w, s1.xy );
	vec3 c2 = vec3( s1.zw, s2.x );
	vec3 c3 = s2.yzw;
	vec3 c4 = s3.xyz;
	vec3 c5 = vec3( s3.w, s4.xy );
	vec3 c6 = vec3( s4.zw, s5.x );
	vec3 c7 = s5.yzw;
	vec3 c8 = s6.xyz;
	float x = worldNormal.x, y = worldNormal.y, z = worldNormal.z;
	vec3 result = c0 * 0.886227;
	result += c1 * 2.0 * 0.511664 * y;
	result += c2 * 2.0 * 0.511664 * z;
	result += c3 * 2.0 * 0.511664 * x;
	result += c4 * 2.0 * 0.429043 * x * y;
	result += c5 * 2.0 * 0.429043 * y * z;
	result += c6 * ( 0.743125 * z * z - 0.247708 );
	result += c7 * 2.0 * 0.429043 * x * z;
	result += c8 * 0.429043 * ( x * x - y * y );
	return max( result, vec3( 0.0 ) );
}
#endif`,av=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,cv=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,lv=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,uv=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,hv=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,fv=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,dv=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
	#if defined( USE_POINTS_UV )
		vec2 uv = vUv;
	#else
		vec2 uv = ( uvTransform * vec3( gl_PointCoord.x, 1.0 - gl_PointCoord.y, 1 ) ).xy;
	#endif
#endif
#ifdef USE_MAP
	diffuseColor *= texture2D( map, uv );
#endif
#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, uv ).g;
#endif`,pv=`#if defined( USE_POINTS_UV )
	varying vec2 vUv;
#else
	#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
		uniform mat3 uvTransform;
	#endif
#endif
#ifdef USE_MAP
	uniform sampler2D map;
#endif
#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,mv=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,gv=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,xv=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,_v=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,vv=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,Mv=`#ifdef USE_MORPHTARGETS
	#ifndef USE_INSTANCING_MORPH
		uniform float morphTargetBaseInfluence;
		uniform float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	#endif
	uniform sampler2DArray morphTargetsTexture;
	uniform ivec2 morphTargetsTextureSize;
	vec4 getMorph( const in int vertexIndex, const in int morphTargetIndex, const in int offset ) {
		int texelIndex = vertexIndex * MORPHTARGETS_TEXTURE_STRIDE + offset;
		int y = texelIndex / morphTargetsTextureSize.x;
		int x = texelIndex - y * morphTargetsTextureSize.x;
		ivec3 morphUV = ivec3( x, y, morphTargetIndex );
		return texelFetch( morphTargetsTexture, morphUV, 0 );
	}
#endif`,yv=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,Sv=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
#ifdef FLAT_SHADED
	vec3 fdx = dFdx( vViewPosition );
	vec3 fdy = dFdy( vViewPosition );
	vec3 normal = normalize( cross( fdx, fdy ) );
#else
	vec3 normal = normalize( vNormal );
	#ifdef DOUBLE_SIDED
		normal *= faceDirection;
	#endif
#endif
#if defined( USE_NORMALMAP_TANGENTSPACE ) || defined( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY )
	#ifdef USE_TANGENT
		mat3 tbn = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn = getTangentFrame( - vViewPosition, normal,
		#if defined( USE_NORMALMAP )
			vNormalMapUv
		#elif defined( USE_CLEARCOAT_NORMALMAP )
			vClearcoatNormalMapUv
		#else
			vUv
		#endif
		);
	#endif
	#ifdef DOUBLE_SIDED
		tbn[0] *= faceDirection;
		tbn[1] *= faceDirection;
	#endif
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	#ifdef USE_TANGENT
		mat3 tbn2 = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn2 = getTangentFrame( - vViewPosition, normal, vClearcoatNormalMapUv );
	#endif
	#ifdef DOUBLE_SIDED
		tbn2[0] *= faceDirection;
		tbn2[1] *= faceDirection;
	#endif
#endif
vec3 nonPerturbedNormal = normal;`,bv=`#ifdef USE_NORMALMAP_OBJECTSPACE
	normal = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	#ifdef FLIP_SIDED
		normal = - normal;
	#endif
	#ifdef DOUBLE_SIDED
		normal = normal * faceDirection;
	#endif
	normal = normalize( normalMatrix * normal );
#elif defined( USE_NORMALMAP_TANGENTSPACE )
	vec3 mapN = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	#if defined( USE_PACKED_NORMALMAP )
		mapN = vec3( mapN.xy, sqrt( saturate( 1.0 - dot( mapN.xy, mapN.xy ) ) ) );
	#endif
	mapN.xy *= normalScale;
	normal = normalize( tbn * mapN );
#elif defined( USE_BUMPMAP )
	normal = perturbNormalArb( - vViewPosition, normal, dHdxy_fwd(), faceDirection );
#endif`,Tv=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,Ev=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,wv=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
		#ifdef FLIP_SIDED
			vBitangent = - vBitangent;
		#endif
	#endif
#endif`,Av=`#ifdef USE_NORMALMAP
	uniform sampler2D normalMap;
	uniform vec2 normalScale;
#endif
#ifdef USE_NORMALMAP_OBJECTSPACE
	uniform mat3 normalMatrix;
#endif
#if ! defined ( USE_TANGENT ) && ( defined ( USE_NORMALMAP_TANGENTSPACE ) || defined ( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY ) )
	mat3 getTangentFrame( vec3 eye_pos, vec3 surf_norm, vec2 uv ) {
		vec3 q0 = dFdx( eye_pos.xyz );
		vec3 q1 = dFdy( eye_pos.xyz );
		vec2 st0 = dFdx( uv.st );
		vec2 st1 = dFdy( uv.st );
		vec3 N = surf_norm;
		vec3 q1perp = cross( q1, N );
		vec3 q0perp = cross( N, q0 );
		vec3 T = q1perp * st0.x + q0perp * st1.x;
		vec3 B = q1perp * st0.y + q0perp * st1.y;
		float det = max( dot( T, T ), dot( B, B ) );
		float scale = ( det == 0.0 ) ? 0.0 : inversesqrt( det );
		return mat3( T * scale, B * scale, N );
	}
#endif`,Rv=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,Cv=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,Pv=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,Iv=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,Lv=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,Nv=`vec3 packNormalToRGB( const in vec3 normal ) {
	return normalize( normal ) * 0.5 + 0.5;
}
vec3 unpackRGBToNormal( const in vec3 rgb ) {
	return 2.0 * rgb.xyz - 1.0;
}
const float PackUpscale = 256. / 255.;const float UnpackDownscale = 255. / 256.;const float ShiftRight8 = 1. / 256.;
const float Inv255 = 1. / 255.;
const vec4 PackFactors = vec4( 1.0, 256.0, 256.0 * 256.0, 256.0 * 256.0 * 256.0 );
const vec2 UnpackFactors2 = vec2( UnpackDownscale, 1.0 / PackFactors.g );
const vec3 UnpackFactors3 = vec3( UnpackDownscale / PackFactors.rg, 1.0 / PackFactors.b );
const vec4 UnpackFactors4 = vec4( UnpackDownscale / PackFactors.rgb, 1.0 / PackFactors.a );
vec4 packDepthToRGBA( const in float v ) {
	if( v <= 0.0 )
		return vec4( 0., 0., 0., 0. );
	if( v >= 1.0 )
		return vec4( 1., 1., 1., 1. );
	float vuf;
	float af = modf( v * PackFactors.a, vuf );
	float bf = modf( vuf * ShiftRight8, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec4( vuf * Inv255, gf * PackUpscale, bf * PackUpscale, af );
}
vec3 packDepthToRGB( const in float v ) {
	if( v <= 0.0 )
		return vec3( 0., 0., 0. );
	if( v >= 1.0 )
		return vec3( 1., 1., 1. );
	float vuf;
	float bf = modf( v * PackFactors.b, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec3( vuf * Inv255, gf * PackUpscale, bf );
}
vec2 packDepthToRG( const in float v ) {
	if( v <= 0.0 )
		return vec2( 0., 0. );
	if( v >= 1.0 )
		return vec2( 1., 1. );
	float vuf;
	float gf = modf( v * 256., vuf );
	return vec2( vuf * Inv255, gf );
}
float unpackRGBAToDepth( const in vec4 v ) {
	return dot( v, UnpackFactors4 );
}
float unpackRGBToDepth( const in vec3 v ) {
	return dot( v, UnpackFactors3 );
}
float unpackRGToDepth( const in vec2 v ) {
	return v.r * UnpackFactors2.r + v.g * UnpackFactors2.g;
}
vec4 pack2HalfToRGBA( const in vec2 v ) {
	vec4 r = vec4( v.x, fract( v.x * 255.0 ), v.y, fract( v.y * 255.0 ) );
	return vec4( r.x - r.y / 255.0, r.y, r.z - r.w / 255.0, r.w );
}
vec2 unpackRGBATo2Half( const in vec4 v ) {
	return vec2( v.x + ( v.y / 255.0 ), v.z + ( v.w / 255.0 ) );
}
float viewZToOrthographicDepth( const in float viewZ, const in float near, const in float far ) {
	return ( viewZ + near ) / ( near - far );
}
float orthographicDepthToViewZ( const in float depth, const in float near, const in float far ) {
	#ifdef USE_REVERSED_DEPTH_BUFFER
	
		return depth * ( far - near ) - far;
	#else
		return depth * ( near - far ) - near;
	#endif
}
float viewZToPerspectiveDepth( const in float viewZ, const in float near, const in float far ) {
	return ( ( near + viewZ ) * far ) / ( ( far - near ) * viewZ );
}
float perspectiveDepthToViewZ( const in float depth, const in float near, const in float far ) {
	
	#ifdef USE_REVERSED_DEPTH_BUFFER
		return ( near * far ) / ( ( near - far ) * depth - near );
	#else
		return ( near * far ) / ( ( far - near ) * depth - far );
	#endif
}`,Dv=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,Uv=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,Fv=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,Ov=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,Bv=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,kv=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,zv=`#if NUM_SPOT_LIGHT_COORDS > 0
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#if NUM_SPOT_LIGHT_MAPS > 0
	uniform sampler2D spotLightMap[ NUM_SPOT_LIGHT_MAPS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_SUN_LIGHT_SHADOWS > 0
		#define SUN_LIGHT_CASCADES 2
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform sampler2DShadow sunShadowMap[ NUM_SUN_LIGHT_SHADOWS ];
		#else
			uniform sampler2D sunShadowMap[ NUM_SUN_LIGHT_SHADOWS ];
		#endif
		uniform mat4 sunShadowMatrix[ NUM_SUN_LIGHT_SHADOWS * SUN_LIGHT_CASCADES ];
		uniform vec4 sunShadowCascade[ NUM_SUN_LIGHT_SHADOWS * SUN_LIGHT_CASCADES ];
		varying vec4 vSunShadowWorldPosition;
		varying vec3 vSunShadowWorldNormal;
		struct SunLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SunLightShadow sunLightShadows[ NUM_SUN_LIGHT_SHADOWS ];
	#endif
	#if NUM_DIR_LIGHT_SHADOWS > 0
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform sampler2DShadow directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		#else
			uniform sampler2D directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		#endif
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform sampler2DShadow spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		#else
			uniform sampler2D spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		#endif
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform samplerCubeShadow pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		#elif defined( SHADOWMAP_TYPE_BASIC )
			uniform samplerCube pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		#endif
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
	#if defined( SHADOWMAP_TYPE_PCF )
		float interleavedGradientNoise( vec2 position ) {
			return fract( 52.9829189 * fract( dot( position, vec2( 0.06711056, 0.00583715 ) ) ) );
		}
		vec2 vogelDiskSample( int sampleIndex, int samplesCount, float phi ) {
			const float goldenAngle = 2.399963229728653;
			float r = sqrt( ( float( sampleIndex ) + 0.5 ) / float( samplesCount ) );
			float theta = float( sampleIndex ) * goldenAngle + phi;
			return vec2( cos( theta ), sin( theta ) ) * r;
		}
	#endif
	#if defined( SHADOWMAP_TYPE_PCF )
		float getShadow( sampler2DShadow shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
			float shadow = 1.0;
			shadowCoord.xyz /= shadowCoord.w;
			shadowCoord.z += shadowBias;
			bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
			bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
			if ( frustumTest ) {
				vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
				float radius = shadowRadius * texelSize.x;
				float phi = interleavedGradientNoise( gl_FragCoord.xy ) * PI2;
				shadow = (
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 0, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 1, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 2, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 3, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 4, 5, phi ) * radius, shadowCoord.z ) )
				) * 0.2;
			}
			return mix( 1.0, shadow, shadowIntensity );
		}
	#elif defined( SHADOWMAP_TYPE_VSM )
		float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
			float shadow = 1.0;
			shadowCoord.xyz /= shadowCoord.w;
			#ifdef USE_REVERSED_DEPTH_BUFFER
				shadowCoord.z -= shadowBias;
			#else
				shadowCoord.z += shadowBias;
			#endif
			bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
			bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
			if ( frustumTest ) {
				vec2 distribution = texture2D( shadowMap, shadowCoord.xy ).rg;
				float mean = distribution.x;
				float variance = distribution.y * distribution.y;
				#ifdef USE_REVERSED_DEPTH_BUFFER
					float hard_shadow = step( mean, shadowCoord.z );
				#else
					float hard_shadow = step( shadowCoord.z, mean );
				#endif
				
				if ( hard_shadow == 1.0 ) {
					shadow = 1.0;
				} else {
					variance = max( variance, 0.0000001 );
					float d = shadowCoord.z - mean;
					float p_max = variance / ( variance + d * d );
					p_max = clamp( ( p_max - 0.3 ) / 0.65, 0.0, 1.0 );
					shadow = max( hard_shadow, p_max );
				}
			}
			return mix( 1.0, shadow, shadowIntensity );
		}
	#else
		float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
			float shadow = 1.0;
			shadowCoord.xyz /= shadowCoord.w;
			#ifdef USE_REVERSED_DEPTH_BUFFER
				shadowCoord.z -= shadowBias;
			#else
				shadowCoord.z += shadowBias;
			#endif
			bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
			bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
			if ( frustumTest ) {
				float depth = texture2D( shadowMap, shadowCoord.xy ).r;
				#ifdef USE_REVERSED_DEPTH_BUFFER
					shadow = step( depth, shadowCoord.z );
				#else
					shadow = step( shadowCoord.z, depth );
				#endif
			}
			return mix( 1.0, shadow, shadowIntensity );
		}
	#endif
	#if NUM_SUN_LIGHT_SHADOWS > 0
		float getSunShadow(
			#if defined( SHADOWMAP_TYPE_PCF )
				sampler2DShadow shadowMap,
			#else
				sampler2D shadowMap,
			#endif
			SunLightShadow sunLightShadow,
			int shadowIndex
		) {
			vec4 shadowWorldPosition = vec4( vSunShadowWorldPosition.xyz + vSunShadowWorldNormal * sunLightShadow.shadowNormalBias, 1.0 );
			float viewDepth = vSunShadowWorldPosition.w;
			int cascadeOffset = shadowIndex * SUN_LIGHT_CASCADES;
			float shadow = 1.0;
			for ( int i = SUN_LIGHT_CASCADES - 1; i >= 0; i -- ) {
				vec4 cascade = sunShadowCascade[ cascadeOffset + i ];
				if ( viewDepth >= cascade.x && viewDepth < cascade.y ) {
					float cascadeShadow = getShadow(
						shadowMap,
						sunLightShadow.shadowMapSize,
						sunLightShadow.shadowIntensity,
						sunLightShadow.shadowBias,
						sunLightShadow.shadowRadius,
						sunShadowMatrix[ cascadeOffset + i ] * shadowWorldPosition
					);
					shadow = mix( cascadeShadow, shadow, smoothstep( cascade.z, cascade.y, viewDepth ) );
				}
			}
			return shadow;
		}
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
	#if defined( SHADOWMAP_TYPE_PCF )
	float getPointShadow( samplerCubeShadow shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		float shadow = 1.0;
		vec3 lightToPosition = shadowCoord.xyz;
		vec3 bd3D = normalize( lightToPosition );
		vec3 absVec = abs( lightToPosition );
		float viewSpaceZ = max( max( absVec.x, absVec.y ), absVec.z );
		if ( viewSpaceZ - shadowCameraFar <= 0.0 && viewSpaceZ - shadowCameraNear >= 0.0 ) {
			#ifdef USE_REVERSED_DEPTH_BUFFER
				float dp = ( shadowCameraNear * ( shadowCameraFar - viewSpaceZ ) ) / ( viewSpaceZ * ( shadowCameraFar - shadowCameraNear ) );
				dp -= shadowBias;
			#else
				float dp = ( shadowCameraFar * ( viewSpaceZ - shadowCameraNear ) ) / ( viewSpaceZ * ( shadowCameraFar - shadowCameraNear ) );
				dp += shadowBias;
			#endif
			float texelSize = shadowRadius / shadowMapSize.x;
			vec3 absDir = abs( bd3D );
			vec3 tangent = absDir.x > absDir.z ? vec3( 0.0, 1.0, 0.0 ) : vec3( 1.0, 0.0, 0.0 );
			tangent = normalize( cross( bd3D, tangent ) );
			vec3 bitangent = cross( bd3D, tangent );
			float phi = interleavedGradientNoise( gl_FragCoord.xy ) * PI2;
			vec2 sample0 = vogelDiskSample( 0, 5, phi );
			vec2 sample1 = vogelDiskSample( 1, 5, phi );
			vec2 sample2 = vogelDiskSample( 2, 5, phi );
			vec2 sample3 = vogelDiskSample( 3, 5, phi );
			vec2 sample4 = vogelDiskSample( 4, 5, phi );
			shadow = (
				texture( shadowMap, vec4( bd3D + ( tangent * sample0.x + bitangent * sample0.y ) * texelSize, dp ) ) +
				texture( shadowMap, vec4( bd3D + ( tangent * sample1.x + bitangent * sample1.y ) * texelSize, dp ) ) +
				texture( shadowMap, vec4( bd3D + ( tangent * sample2.x + bitangent * sample2.y ) * texelSize, dp ) ) +
				texture( shadowMap, vec4( bd3D + ( tangent * sample3.x + bitangent * sample3.y ) * texelSize, dp ) ) +
				texture( shadowMap, vec4( bd3D + ( tangent * sample4.x + bitangent * sample4.y ) * texelSize, dp ) )
			) * 0.2;
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
	#elif defined( SHADOWMAP_TYPE_BASIC )
	float getPointShadow( samplerCube shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		float shadow = 1.0;
		vec3 lightToPosition = shadowCoord.xyz;
		vec3 absVec = abs( lightToPosition );
		float viewSpaceZ = max( max( absVec.x, absVec.y ), absVec.z );
		if ( viewSpaceZ - shadowCameraFar <= 0.0 && viewSpaceZ - shadowCameraNear >= 0.0 ) {
			float dp = ( shadowCameraFar * ( viewSpaceZ - shadowCameraNear ) ) / ( viewSpaceZ * ( shadowCameraFar - shadowCameraNear ) );
			dp += shadowBias;
			vec3 bd3D = normalize( lightToPosition );
			float depth = textureCube( shadowMap, bd3D ).r;
			#ifdef USE_REVERSED_DEPTH_BUFFER
				depth = 1.0 - depth;
			#endif
			shadow = step( dp, depth );
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
	#endif
	#endif
#endif`,Hv=`#if NUM_SPOT_LIGHT_COORDS > 0
	uniform mat4 spotLightMatrix[ NUM_SPOT_LIGHT_COORDS ];
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_SUN_LIGHT_SHADOWS > 0
		varying vec4 vSunShadowWorldPosition;
		varying vec3 vSunShadowWorldNormal;
	#endif
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform mat4 directionalShadowMatrix[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform mat4 pointShadowMatrix[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
#endif`,Vv=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_SUN_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
	#ifdef HAS_NORMAL
		vec3 shadowWorldNormal = transformNormalByInverseViewMatrix( transformedNormal, viewMatrix );
	#else
		vec3 shadowWorldNormal = vec3( 0.0 );
	#endif
	vec4 shadowWorldPosition;
#endif
#if defined( USE_SHADOWMAP )
	#if NUM_SUN_LIGHT_SHADOWS > 0
		vSunShadowWorldPosition = vec4( worldPosition.xyz, - mvPosition.z );
		vSunShadowWorldNormal = shadowWorldNormal;
	#endif
	#if NUM_DIR_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * directionalLightShadows[ i ].shadowNormalBias, 0 );
			vDirectionalShadowCoord[ i ] = directionalShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * pointLightShadows[ i ].shadowNormalBias, 0 );
			vPointShadowCoord[ i ] = pointShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
#endif
#if NUM_SPOT_LIGHT_COORDS > 0
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_COORDS; i ++ ) {
		shadowWorldPosition = worldPosition;
		#if ( defined( USE_SHADOWMAP ) && UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
			shadowWorldPosition.xyz += shadowWorldNormal * spotLightShadows[ i ].shadowNormalBias;
		#endif
		vSpotLightCoord[ i ] = spotLightMatrix[ i ] * shadowWorldPosition;
	}
	#pragma unroll_loop_end
#endif`,Gv=`float getShadowMask() {
	float shadow = 1.0;
	#ifdef USE_SHADOWMAP
	#if NUM_SUN_LIGHT_SHADOWS > 0
	SunLightShadow sunLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SUN_LIGHT_SHADOWS; i ++ ) {
		sunLight = sunLightShadows[ i ];
		shadow *= receiveShadow ? getSunShadow( sunShadowMap[ i ], sunLight, UNROLLED_LOOP_INDEX ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
		directionalLight = directionalLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( directionalShadowMap[ i ], directionalLight.shadowMapSize, directionalLight.shadowIntensity, directionalLight.shadowBias, directionalLight.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_SHADOWS; i ++ ) {
		spotLight = spotLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( spotShadowMap[ i ], spotLight.shadowMapSize, spotLight.shadowIntensity, spotLight.shadowBias, spotLight.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0 && ( defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_BASIC ) )
	PointLightShadow pointLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
		pointLight = pointLightShadows[ i ];
		shadow *= receiveShadow ? getPointShadow( pointShadowMap[ i ], pointLight.shadowMapSize, pointLight.shadowIntensity, pointLight.shadowBias, pointLight.shadowRadius, vPointShadowCoord[ i ], pointLight.shadowCameraNear, pointLight.shadowCameraFar ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#endif
	return shadow;
}`,Wv=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,Xv=`#ifdef USE_SKINNING
	uniform mat4 bindMatrix;
	uniform mat4 bindMatrixInverse;
	uniform highp sampler2D boneTexture;
	mat4 getBoneMatrix( const in float i ) {
		int size = textureSize( boneTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( boneTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( boneTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( boneTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( boneTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
#endif`,qv=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,Yv=`#ifdef USE_SKINNING
	mat4 skinMatrix = mat4( 0.0 );
	skinMatrix += skinWeight.x * boneMatX;
	skinMatrix += skinWeight.y * boneMatY;
	skinMatrix += skinWeight.z * boneMatZ;
	skinMatrix += skinWeight.w * boneMatW;
	skinMatrix = bindMatrixInverse * skinMatrix * bindMatrix;
	objectNormal = vec4( skinMatrix * vec4( objectNormal, 0.0 ) ).xyz;
	#ifdef USE_TANGENT
		objectTangent = vec4( skinMatrix * vec4( objectTangent, 0.0 ) ).xyz;
	#endif
#endif`,Kv=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,jv=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,$v=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,Zv=`#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
uniform float toneMappingExposure;
vec3 LinearToneMapping( vec3 color ) {
	return saturate( toneMappingExposure * color );
}
vec3 ReinhardToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	return saturate( color / ( vec3( 1.0 ) + color ) );
}
vec3 CineonToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	color = max( vec3( 0.0 ), color - 0.004 );
	return pow( ( color * ( 6.2 * color + 0.5 ) ) / ( color * ( 6.2 * color + 1.7 ) + 0.06 ), vec3( 2.2 ) );
}
vec3 RRTAndODTFit( vec3 v ) {
	vec3 a = v * ( v + 0.0245786 ) - 0.000090537;
	vec3 b = v * ( 0.983729 * v + 0.4329510 ) + 0.238081;
	return a / b;
}
vec3 ACESFilmicToneMapping( vec3 color ) {
	const mat3 ACESInputMat = mat3(
		vec3( 0.59719, 0.07600, 0.02840 ),		vec3( 0.35458, 0.90834, 0.13383 ),
		vec3( 0.04823, 0.01566, 0.83777 )
	);
	const mat3 ACESOutputMat = mat3(
		vec3(  1.60475, -0.10208, -0.00327 ),		vec3( -0.53108,  1.10813, -0.07276 ),
		vec3( -0.07367, -0.00605,  1.07602 )
	);
	color *= toneMappingExposure / 0.6;
	color = ACESInputMat * color;
	color = RRTAndODTFit( color );
	color = ACESOutputMat * color;
	return saturate( color );
}
const mat3 LINEAR_REC2020_TO_LINEAR_SRGB = mat3(
	vec3( 1.6605, - 0.1246, - 0.0182 ),
	vec3( - 0.5876, 1.1329, - 0.1006 ),
	vec3( - 0.0728, - 0.0083, 1.1187 )
);
const mat3 LINEAR_SRGB_TO_LINEAR_REC2020 = mat3(
	vec3( 0.6274, 0.0691, 0.0164 ),
	vec3( 0.3293, 0.9195, 0.0880 ),
	vec3( 0.0433, 0.0113, 0.8956 )
);
vec3 agxDefaultContrastApprox( vec3 x ) {
	vec3 x2 = x * x;
	vec3 x4 = x2 * x2;
	return + 15.5 * x4 * x2
		- 40.14 * x4 * x
		+ 31.96 * x4
		- 6.868 * x2 * x
		+ 0.4298 * x2
		+ 0.1191 * x
		- 0.00232;
}
vec3 AgXToneMapping( vec3 color ) {
	const mat3 AgXInsetMatrix = mat3(
		vec3( 0.856627153315983, 0.137318972929847, 0.11189821299995 ),
		vec3( 0.0951212405381588, 0.761241990602591, 0.0767994186031903 ),
		vec3( 0.0482516061458583, 0.101439036467562, 0.811302368396859 )
	);
	const mat3 AgXOutsetMatrix = mat3(
		vec3( 1.1271005818144368, - 0.1413297634984383, - 0.14132976349843826 ),
		vec3( - 0.11060664309660323, 1.157823702216272, - 0.11060664309660294 ),
		vec3( - 0.016493938717834573, - 0.016493938717834257, 1.2519364065950405 )
	);
	const float AgxMinEv = - 12.47393;	const float AgxMaxEv = 4.026069;
	color *= toneMappingExposure;
	color = LINEAR_SRGB_TO_LINEAR_REC2020 * color;
	color = AgXInsetMatrix * color;
	color = max( color, 1e-10 );	color = log2( color );
	color = ( color - AgxMinEv ) / ( AgxMaxEv - AgxMinEv );
	color = clamp( color, 0.0, 1.0 );
	color = agxDefaultContrastApprox( color );
	color = AgXOutsetMatrix * color;
	color = pow( max( vec3( 0.0 ), color ), vec3( 2.2 ) );
	color = LINEAR_REC2020_TO_LINEAR_SRGB * color;
	color = clamp( color, 0.0, 1.0 );
	return color;
}
vec3 NeutralToneMapping( vec3 color ) {
	const float StartCompression = 0.8 - 0.04;
	const float Desaturation = 0.15;
	color *= toneMappingExposure;
	float x = min( color.r, min( color.g, color.b ) );
	float offset = x < 0.08 ? x - 6.25 * x * x : 0.04;
	color -= offset;
	float peak = max( color.r, max( color.g, color.b ) );
	if ( peak < StartCompression ) return color;
	float d = 1. - StartCompression;
	float newPeak = 1. - d * d / ( peak + d - StartCompression );
	color *= newPeak / peak;
	float g = 1. - 1. / ( Desaturation * ( peak - newPeak ) + 1. );
	return mix( color, vec3( newPeak ), g );
}
vec3 CustomToneMapping( vec3 color ) { return color; }`,Jv=`#ifdef USE_TRANSMISSION
	material.transmission = transmission;
	material.transmissionAlpha = 1.0;
	material.thickness = thickness;
	material.attenuationDistance = attenuationDistance;
	material.attenuationColor = attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		material.transmission *= texture2D( transmissionMap, vTransmissionMapUv ).r;
	#endif
	#ifdef USE_THICKNESSMAP
		material.thickness *= texture2D( thicknessMap, vThicknessMapUv ).g;
	#endif
	vec3 pos = vWorldPosition;
	vec3 v = normalize( cameraPosition - pos );
	vec3 n = transformNormalByInverseViewMatrix( normal, viewMatrix );
	vec4 transmitted = getIBLVolumeRefraction(
		n, v, material.roughness, material.diffuseContribution, material.specularColorBlended, material.specularF90,
		pos, modelMatrix, viewMatrix, projectionMatrix, material.dispersion, material.ior, material.thickness,
		material.attenuationColor, material.attenuationDistance );
	material.transmissionAlpha = mix( material.transmissionAlpha, transmitted.a, material.transmission );
	totalDiffuse = mix( totalDiffuse, transmitted.rgb, material.transmission );
#endif`,Qv=`#ifdef USE_TRANSMISSION
	uniform float transmission;
	uniform float thickness;
	uniform float attenuationDistance;
	uniform vec3 attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		uniform sampler2D transmissionMap;
	#endif
	#ifdef USE_THICKNESSMAP
		uniform sampler2D thicknessMap;
	#endif
	uniform vec2 transmissionSamplerSize;
	uniform sampler2D transmissionSamplerMap;
	uniform mat4 modelMatrix;
	uniform mat4 projectionMatrix;
	varying vec3 vWorldPosition;
	float w0( float a ) {
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - a + 3.0 ) - 3.0 ) + 1.0 );
	}
	float w1( float a ) {
		return ( 1.0 / 6.0 ) * ( a *  a * ( 3.0 * a - 6.0 ) + 4.0 );
	}
	float w2( float a ){
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - 3.0 * a + 3.0 ) + 3.0 ) + 1.0 );
	}
	float w3( float a ) {
		return ( 1.0 / 6.0 ) * ( a * a * a );
	}
	float g0( float a ) {
		return w0( a ) + w1( a );
	}
	float g1( float a ) {
		return w2( a ) + w3( a );
	}
	float h0( float a ) {
		return - 1.0 + w1( a ) / ( w0( a ) + w1( a ) );
	}
	float h1( float a ) {
		return 1.0 + w3( a ) / ( w2( a ) + w3( a ) );
	}
	vec4 bicubic( sampler2D tex, vec2 uv, vec4 texelSize, float lod ) {
		uv = uv * texelSize.zw + 0.5;
		vec2 iuv = floor( uv );
		vec2 fuv = fract( uv );
		float g0x = g0( fuv.x );
		float g1x = g1( fuv.x );
		float h0x = h0( fuv.x );
		float h1x = h1( fuv.x );
		float h0y = h0( fuv.y );
		float h1y = h1( fuv.y );
		vec2 p0 = ( vec2( iuv.x + h0x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p1 = ( vec2( iuv.x + h1x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p2 = ( vec2( iuv.x + h0x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		vec2 p3 = ( vec2( iuv.x + h1x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		return g0( fuv.y ) * ( g0x * textureLod( tex, p0, lod ) + g1x * textureLod( tex, p1, lod ) ) +
			g1( fuv.y ) * ( g0x * textureLod( tex, p2, lod ) + g1x * textureLod( tex, p3, lod ) );
	}
	vec4 textureBicubic( sampler2D sampler, vec2 uv, float lod ) {
		vec2 fLodSize = vec2( textureSize( sampler, int( lod ) ) );
		vec2 cLodSize = vec2( textureSize( sampler, int( lod + 1.0 ) ) );
		vec2 fLodSizeInv = 1.0 / fLodSize;
		vec2 cLodSizeInv = 1.0 / cLodSize;
		vec4 fSample = bicubic( sampler, uv, vec4( fLodSizeInv, fLodSize ), floor( lod ) );
		vec4 cSample = bicubic( sampler, uv, vec4( cLodSizeInv, cLodSize ), ceil( lod ) );
		return mix( fSample, cSample, fract( lod ) );
	}
	vec3 getVolumeTransmissionRay( const in vec3 n, const in vec3 v, const in float thickness, const in float ior, const in mat4 modelMatrix ) {
		vec3 refractionVector = refract( - v, normalize( n ), 1.0 / ior );
		vec3 modelScale;
		modelScale.x = length( vec3( modelMatrix[ 0 ].xyz ) );
		modelScale.y = length( vec3( modelMatrix[ 1 ].xyz ) );
		modelScale.z = length( vec3( modelMatrix[ 2 ].xyz ) );
		return normalize( refractionVector ) * thickness * modelScale;
	}
	float applyIorToRoughness( const in float roughness, const in float ior ) {
		return roughness * clamp( ior * 2.0 - 2.0, 0.0, 1.0 );
	}
	vec4 getTransmissionSample( const in vec2 fragCoord, const in float roughness, const in float ior ) {
		float lod = log2( transmissionSamplerSize.x ) * applyIorToRoughness( roughness, ior );
		return textureBicubic( transmissionSamplerMap, fragCoord.xy, lod );
	}
	vec3 volumeAttenuation( const in float transmissionDistance, const in vec3 attenuationColor, const in float attenuationDistance ) {
		if ( isinf( attenuationDistance ) ) {
			return vec3( 1.0 );
		} else {
			vec3 attenuationCoefficient = -log( attenuationColor ) / attenuationDistance;
			vec3 transmittance = exp( - attenuationCoefficient * transmissionDistance );			return transmittance;
		}
	}
	vec4 getIBLVolumeRefraction( const in vec3 n, const in vec3 v, const in float roughness, const in vec3 diffuseColor,
		const in vec3 specularColor, const in float specularF90, const in vec3 position, const in mat4 modelMatrix,
		const in mat4 viewMatrix, const in mat4 projMatrix, const in float dispersion, const in float ior, const in float thickness,
		const in vec3 attenuationColor, const in float attenuationDistance ) {
		vec4 transmittedLight;
		vec3 transmittance;
		#ifdef USE_DISPERSION
			float halfSpread = ( ior - 1.0 ) * 0.025 * dispersion;
			vec3 iors = vec3( ior - halfSpread, ior, ior + halfSpread );
			for ( int i = 0; i < 3; i ++ ) {
				vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, iors[ i ], modelMatrix );
				vec3 refractedRayExit = position + transmissionRay;
				vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
				vec2 refractionCoords = ndcPos.xy / ndcPos.w;
				refractionCoords += 1.0;
				refractionCoords /= 2.0;
				vec4 transmissionSample = getTransmissionSample( refractionCoords, roughness, iors[ i ] );
				transmittedLight[ i ] = transmissionSample[ i ];
				transmittedLight.a += transmissionSample.a;
				transmittance[ i ] = diffuseColor[ i ] * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance )[ i ];
			}
			transmittedLight.a /= 3.0;
		#else
			vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, ior, modelMatrix );
			vec3 refractedRayExit = position + transmissionRay;
			vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
			vec2 refractionCoords = ndcPos.xy / ndcPos.w;
			refractionCoords += 1.0;
			refractionCoords /= 2.0;
			transmittedLight = getTransmissionSample( refractionCoords, roughness, ior );
			transmittance = diffuseColor * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance );
		#endif
		vec3 attenuatedColor = transmittance * transmittedLight.rgb;
		vec3 F = EnvironmentBRDF( n, v, specularColor, specularF90, roughness );
		float transmittanceFactor = ( transmittance.r + transmittance.g + transmittance.b ) / 3.0;
		return vec4( ( 1.0 - F ) * attenuatedColor, 1.0 - ( 1.0 - transmittedLight.a ) * transmittanceFactor );
	}
#endif`,eM=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_SPECULARMAP
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,tM=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	uniform mat3 mapTransform;
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	uniform mat3 alphaMapTransform;
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	uniform mat3 lightMapTransform;
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	uniform mat3 aoMapTransform;
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	uniform mat3 bumpMapTransform;
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	uniform mat3 normalMapTransform;
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_DISPLACEMENTMAP
	uniform mat3 displacementMapTransform;
	varying vec2 vDisplacementMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	uniform mat3 emissiveMapTransform;
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	uniform mat3 metalnessMapTransform;
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	uniform mat3 roughnessMapTransform;
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	uniform mat3 anisotropyMapTransform;
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	uniform mat3 clearcoatMapTransform;
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform mat3 clearcoatNormalMapTransform;
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform mat3 clearcoatRoughnessMapTransform;
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	uniform mat3 sheenColorMapTransform;
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	uniform mat3 sheenRoughnessMapTransform;
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	uniform mat3 iridescenceMapTransform;
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform mat3 iridescenceThicknessMapTransform;
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SPECULARMAP
	uniform mat3 specularMapTransform;
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	uniform mat3 specularColorMapTransform;
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	uniform mat3 specularIntensityMapTransform;
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,nM=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	vUv = vec3( uv, 1 ).xy;
#endif
#ifdef USE_MAP
	vMapUv = ( mapTransform * vec3( MAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ALPHAMAP
	vAlphaMapUv = ( alphaMapTransform * vec3( ALPHAMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_LIGHTMAP
	vLightMapUv = ( lightMapTransform * vec3( LIGHTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_AOMAP
	vAoMapUv = ( aoMapTransform * vec3( AOMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_BUMPMAP
	vBumpMapUv = ( bumpMapTransform * vec3( BUMPMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_NORMALMAP
	vNormalMapUv = ( normalMapTransform * vec3( NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_DISPLACEMENTMAP
	vDisplacementMapUv = ( displacementMapTransform * vec3( DISPLACEMENTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_EMISSIVEMAP
	vEmissiveMapUv = ( emissiveMapTransform * vec3( EMISSIVEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_METALNESSMAP
	vMetalnessMapUv = ( metalnessMapTransform * vec3( METALNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ROUGHNESSMAP
	vRoughnessMapUv = ( roughnessMapTransform * vec3( ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ANISOTROPYMAP
	vAnisotropyMapUv = ( anisotropyMapTransform * vec3( ANISOTROPYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOATMAP
	vClearcoatMapUv = ( clearcoatMapTransform * vec3( CLEARCOATMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	vClearcoatNormalMapUv = ( clearcoatNormalMapTransform * vec3( CLEARCOAT_NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	vClearcoatRoughnessMapUv = ( clearcoatRoughnessMapTransform * vec3( CLEARCOAT_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCEMAP
	vIridescenceMapUv = ( iridescenceMapTransform * vec3( IRIDESCENCEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	vIridescenceThicknessMapUv = ( iridescenceThicknessMapTransform * vec3( IRIDESCENCE_THICKNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_COLORMAP
	vSheenColorMapUv = ( sheenColorMapTransform * vec3( SHEEN_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	vSheenRoughnessMapUv = ( sheenRoughnessMapTransform * vec3( SHEEN_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULARMAP
	vSpecularMapUv = ( specularMapTransform * vec3( SPECULARMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_COLORMAP
	vSpecularColorMapUv = ( specularColorMapTransform * vec3( SPECULAR_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	vSpecularIntensityMapUv = ( specularIntensityMapTransform * vec3( SPECULAR_INTENSITYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_TRANSMISSIONMAP
	vTransmissionMapUv = ( transmissionMapTransform * vec3( TRANSMISSIONMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_THICKNESSMAP
	vThicknessMapUv = ( thicknessMapTransform * vec3( THICKNESSMAP_UV, 1 ) ).xy;
#endif`,iM=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const sM=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,rM=`uniform sampler2D t2D;
uniform float backgroundIntensity;
varying vec2 vUv;
void main() {
	vec4 texColor = texture2D( t2D, vUv );
	#ifdef DECODE_VIDEO_TEXTURE
		texColor = vec4( mix( pow( texColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), texColor.rgb * 0.0773993808, vec3( lessThanEqual( texColor.rgb, vec3( 0.04045 ) ) ) ), texColor.w );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,oM=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,aM=`#ifdef ENVMAP_TYPE_CUBE
	uniform samplerCube envMap;
#elif defined( ENVMAP_TYPE_CUBE_UV )
	uniform sampler2D envMap;
#endif
uniform float backgroundBlurriness;
uniform float backgroundIntensity;
uniform mat3 backgroundRotation;
varying vec3 vWorldDirection;
#include <cube_uv_reflection_fragment>
void main() {
	#ifdef ENVMAP_TYPE_CUBE
		vec4 texColor = textureCube( envMap, backgroundRotation * vWorldDirection );
	#elif defined( ENVMAP_TYPE_CUBE_UV )
		vec4 texColor = textureCubeUV( envMap, backgroundRotation * vWorldDirection, backgroundBlurriness );
	#else
		vec4 texColor = vec4( 0.0, 0.0, 0.0, 1.0 );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,cM=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,lM=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,uM=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
varying vec2 vHighPrecisionZW;
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vHighPrecisionZW = gl_Position.zw;
}`,hM=`#if DEPTH_PACKING == 3200
	uniform float opacity;
#endif
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
varying vec2 vHighPrecisionZW;
void main() {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#if DEPTH_PACKING == 3200
		diffuseColor.a = opacity;
	#endif
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <logdepthbuf_fragment>
	#ifdef USE_REVERSED_DEPTH_BUFFER
		float fragCoordZ = vHighPrecisionZW[ 0 ] / vHighPrecisionZW[ 1 ];
	#else
		float fragCoordZ = 0.5 * vHighPrecisionZW[ 0 ] / vHighPrecisionZW[ 1 ] + 0.5;
	#endif
	#if DEPTH_PACKING == 3200
		gl_FragColor = vec4( vec3( 1.0 - fragCoordZ ), opacity );
	#elif DEPTH_PACKING == 3201
		gl_FragColor = packDepthToRGBA( fragCoordZ );
	#elif DEPTH_PACKING == 3202
		gl_FragColor = vec4( packDepthToRGB( fragCoordZ ), 1.0 );
	#elif DEPTH_PACKING == 3203
		gl_FragColor = vec4( packDepthToRG( fragCoordZ ), 0.0, 1.0 );
	#endif
}`,fM=`#define DISTANCE
varying vec3 vWorldPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <worldpos_vertex>
	#include <clipping_planes_vertex>
	vWorldPosition = worldPosition.xyz;
}`,dM=`#define DISTANCE
uniform vec3 referencePosition;
uniform float nearDistance;
uniform float farDistance;
varying vec3 vWorldPosition;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	float dist = length( vWorldPosition - referencePosition );
	dist = ( dist - nearDistance ) / ( farDistance - nearDistance );
	dist = saturate( dist );
	gl_FragColor = vec4( dist, 0.0, 0.0, 1.0 );
}`,pM=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,mM=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,gM=`uniform float scale;
attribute float lineDistance;
varying float vLineDistance;
#include <common>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	vLineDistance = scale * lineDistance;
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,xM=`uniform vec3 diffuse;
uniform float opacity;
uniform float dashSize;
uniform float totalSize;
varying float vLineDistance;
#include <common>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	if ( mod( vLineDistance, totalSize ) > dashSize ) {
		discard;
	}
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,_M=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#if defined ( USE_ENVMAP ) || defined ( USE_SKINNING )
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinbase_vertex>
		#include <skinnormal_vertex>
		#include <defaultnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <fog_vertex>
}`,vM=`uniform vec3 diffuse;
uniform float opacity;
#ifndef FLAT_SHADED
	varying vec3 vNormal;
#endif
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		reflectedLight.indirectDiffuse += lightMapTexel.rgb * lightMapIntensity * RECIPROCAL_PI;
	#else
		reflectedLight.indirectDiffuse += vec3( 1.0 );
	#endif
	#include <aomap_fragment>
	reflectedLight.indirectDiffuse *= diffuseColor.rgb;
	vec3 outgoingLight = reflectedLight.indirectDiffuse;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,MM=`#define LAMBERT
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,yM=`#define LAMBERT
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_lambert_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_lambert_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,SM=`#define MATCAP
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <displacementmap_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
	vViewPosition = - mvPosition.xyz;
}`,bM=`#define MATCAP
uniform vec3 diffuse;
uniform float opacity;
uniform sampler2D matcap;
varying vec3 vViewPosition;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	vec3 viewDir = normalize( vViewPosition );
	vec3 x = normalize( vec3( viewDir.z, 0.0, - viewDir.x ) );
	vec3 y = cross( viewDir, x );
	vec2 uv = vec2( dot( x, normal ), dot( y, normal ) ) * 0.495 + 0.5;
	#ifdef USE_MATCAP
		vec4 matcapColor = texture2D( matcap, uv );
	#else
		vec4 matcapColor = vec4( vec3( mix( 0.2, 0.8, uv.y ) ), 1.0 );
	#endif
	vec3 outgoingLight = diffuseColor.rgb * matcapColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,TM=`#define NORMAL
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	vViewPosition = - mvPosition.xyz;
#endif
}`,EM=`#define NORMAL
uniform float opacity;
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <uv_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( 0.0, 0.0, 0.0, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	gl_FragColor = vec4( normalize( normal ) * 0.5 + 0.5, diffuseColor.a );
	#ifdef OPAQUE
		gl_FragColor.a = 1.0;
	#endif
}`,wM=`#define PHONG
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,AM=`#define PHONG
uniform vec3 diffuse;
uniform vec3 emissive;
uniform vec3 specular;
uniform float shininess;
uniform float opacity;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_phong_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_phong_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + reflectedLight.directSpecular + reflectedLight.indirectSpecular + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,RM=`#define STANDARD
varying vec3 vViewPosition;
#ifdef USE_TRANSMISSION
	varying vec3 vWorldPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
#ifdef USE_TRANSMISSION
	vWorldPosition = worldPosition.xyz;
#endif
}`,CM=`#define STANDARD
#ifdef PHYSICAL
	#define IOR
	#define USE_SPECULAR
#endif
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float roughness;
uniform float metalness;
uniform float opacity;
#ifdef IOR
	uniform float ior;
#endif
#ifdef USE_SPECULAR
	uniform float specularIntensity;
	uniform vec3 specularColor;
	#ifdef USE_SPECULAR_COLORMAP
		uniform sampler2D specularColorMap;
	#endif
	#ifdef USE_SPECULAR_INTENSITYMAP
		uniform sampler2D specularIntensityMap;
	#endif
#endif
#ifdef USE_CLEARCOAT
	uniform float clearcoat;
	uniform float clearcoatRoughness;
#endif
#ifdef USE_DISPERSION
	uniform float dispersion;
#endif
#ifdef USE_RETROREFLECTION
	uniform float retroreflectivity;
#endif
#ifdef USE_IRIDESCENCE
	uniform float iridescence;
	uniform float iridescenceIOR;
	uniform float iridescenceThicknessMinimum;
	uniform float iridescenceThicknessMaximum;
#endif
#ifdef USE_SHEEN
	uniform vec3 sheenColor;
	uniform float sheenRoughness;
	#ifdef USE_SHEEN_COLORMAP
		uniform sampler2D sheenColorMap;
	#endif
	#ifdef USE_SHEEN_ROUGHNESSMAP
		uniform sampler2D sheenRoughnessMap;
	#endif
#endif
#ifdef USE_ANISOTROPY
	uniform vec2 anisotropyVector;
	#ifdef USE_ANISOTROPYMAP
		uniform sampler2D anisotropyMap;
	#endif
#endif
varying vec3 vViewPosition;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <iridescence_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_physical_pars_fragment>
#include <transmission_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <clearcoat_pars_fragment>
#include <iridescence_pars_fragment>
#include <roughnessmap_pars_fragment>
#include <metalnessmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <roughnessmap_fragment>
	#include <metalnessmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <clearcoat_normal_fragment_begin>
	#include <clearcoat_normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_physical_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 totalDiffuse = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse;
	vec3 totalSpecular = reflectedLight.directSpecular + reflectedLight.indirectSpecular;
	#include <transmission_fragment>
	vec3 outgoingLight = totalDiffuse + totalSpecular + totalEmissiveRadiance;
	#ifdef USE_SHEEN
 
		outgoingLight = outgoingLight + sheenSpecularDirect + sheenSpecularIndirect;
 
 	#endif
	#ifdef USE_CLEARCOAT
		float dotNVcc = saturate( dot( geometryClearcoatNormal, geometryViewDir ) );
		vec3 Fcc = F_Schlick( material.clearcoatF0, material.clearcoatF90, dotNVcc );
		outgoingLight = outgoingLight * ( 1.0 - material.clearcoat * Fcc ) + ( clearcoatSpecularDirect + clearcoatSpecularIndirect ) * material.clearcoat;
	#endif
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,PM=`#define TOON
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,IM=`#define TOON
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <gradientmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_toon_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_toon_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,LM=`uniform float size;
uniform float scale;
#include <common>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
#ifdef USE_POINTS_UV
	varying vec2 vUv;
	uniform mat3 uvTransform;
#endif
void main() {
	#ifdef USE_POINTS_UV
		vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	#endif
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	gl_PointSize = size;
	#ifdef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) gl_PointSize *= ( scale / - mvPosition.z );
	#endif
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <fog_vertex>
}`,NM=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <color_pars_fragment>
#include <map_particle_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_particle_fragment>
	#include <color_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,DM=`#include <common>
#include <batching_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <shadowmap_pars_vertex>
void main() {
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,UM=`uniform vec3 color;
uniform float opacity;
#include <common>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <logdepthbuf_pars_fragment>
#include <shadowmap_pars_fragment>
#include <shadowmask_pars_fragment>
void main() {
	#include <logdepthbuf_fragment>
	gl_FragColor = vec4( color, opacity * ( 1.0 - getShadowMask() ) );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,FM=`uniform float rotation;
uniform vec2 center;
#include <common>
#include <uv_pars_vertex>
#include <fog_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	vec4 mvPosition = modelViewMatrix[ 3 ];
	vec2 scale = vec2( length( modelMatrix[ 0 ].xyz ), length( modelMatrix[ 1 ].xyz ) );
	#ifndef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) scale *= - mvPosition.z;
	#endif
	vec2 alignedPosition = ( position.xy - ( center - vec2( 0.5 ) ) ) * scale;
	vec2 rotatedPosition;
	rotatedPosition.x = cos( rotation ) * alignedPosition.x - sin( rotation ) * alignedPosition.y;
	rotatedPosition.y = sin( rotation ) * alignedPosition.x + cos( rotation ) * alignedPosition.y;
	mvPosition.xy += rotatedPosition;
	gl_Position = projectionMatrix * mvPosition;
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,OM=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,jt={alphahash_fragment:s_,alphahash_pars_fragment:r_,alphamap_fragment:o_,alphamap_pars_fragment:a_,alphatest_fragment:c_,alphatest_pars_fragment:l_,aomap_fragment:u_,aomap_pars_fragment:h_,batching_pars_vertex:f_,batching_vertex:d_,begin_vertex:p_,beginnormal_vertex:m_,bsdfs:g_,iridescence_fragment:x_,bumpmap_pars_fragment:__,clipping_planes_fragment:v_,clipping_planes_pars_fragment:M_,clipping_planes_pars_vertex:y_,clipping_planes_vertex:S_,color_fragment:b_,color_pars_fragment:T_,color_pars_vertex:E_,color_vertex:w_,common:A_,cube_uv_reflection_fragment:R_,defaultnormal_vertex:C_,displacementmap_pars_vertex:P_,displacementmap_vertex:I_,emissivemap_fragment:L_,emissivemap_pars_fragment:N_,colorspace_fragment:D_,colorspace_pars_fragment:U_,envmap_fragment:F_,envmap_common_pars_fragment:O_,envmap_pars_fragment:B_,envmap_pars_vertex:k_,envmap_physical_pars_fragment:$_,envmap_vertex:z_,fog_vertex:H_,fog_pars_vertex:V_,fog_fragment:G_,fog_pars_fragment:W_,gradientmap_pars_fragment:X_,lightmap_pars_fragment:q_,lights_lambert_fragment:Y_,lights_lambert_pars_fragment:K_,lights_pars_begin:j_,lights_toon_fragment:Z_,lights_toon_pars_fragment:J_,lights_phong_fragment:Q_,lights_phong_pars_fragment:ev,lights_physical_fragment:tv,lights_physical_pars_fragment:nv,lights_fragment_begin:iv,lights_fragment_maps:sv,lights_fragment_end:rv,lightprobes_pars_fragment:ov,logdepthbuf_fragment:av,logdepthbuf_pars_fragment:cv,logdepthbuf_pars_vertex:lv,logdepthbuf_vertex:uv,map_fragment:hv,map_pars_fragment:fv,map_particle_fragment:dv,map_particle_pars_fragment:pv,metalnessmap_fragment:mv,metalnessmap_pars_fragment:gv,morphinstance_vertex:xv,morphcolor_vertex:_v,morphnormal_vertex:vv,morphtarget_pars_vertex:Mv,morphtarget_vertex:yv,normal_fragment_begin:Sv,normal_fragment_maps:bv,normal_pars_fragment:Tv,normal_pars_vertex:Ev,normal_vertex:wv,normalmap_pars_fragment:Av,clearcoat_normal_fragment_begin:Rv,clearcoat_normal_fragment_maps:Cv,clearcoat_pars_fragment:Pv,iridescence_pars_fragment:Iv,opaque_fragment:Lv,packing:Nv,premultiplied_alpha_fragment:Dv,project_vertex:Uv,dithering_fragment:Fv,dithering_pars_fragment:Ov,roughnessmap_fragment:Bv,roughnessmap_pars_fragment:kv,shadowmap_pars_fragment:zv,shadowmap_pars_vertex:Hv,shadowmap_vertex:Vv,shadowmask_pars_fragment:Gv,skinbase_vertex:Wv,skinning_pars_vertex:Xv,skinning_vertex:qv,skinnormal_vertex:Yv,specularmap_fragment:Kv,specularmap_pars_fragment:jv,tonemapping_fragment:$v,tonemapping_pars_fragment:Zv,transmission_fragment:Jv,transmission_pars_fragment:Qv,uv_pars_fragment:eM,uv_pars_vertex:tM,uv_vertex:nM,worldpos_vertex:iM,background_vert:sM,background_frag:rM,backgroundCube_vert:oM,backgroundCube_frag:aM,cube_vert:cM,cube_frag:lM,depth_vert:uM,depth_frag:hM,distance_vert:fM,distance_frag:dM,equirect_vert:pM,equirect_frag:mM,linedashed_vert:gM,linedashed_frag:xM,meshbasic_vert:_M,meshbasic_frag:vM,meshlambert_vert:MM,meshlambert_frag:yM,meshmatcap_vert:SM,meshmatcap_frag:bM,meshnormal_vert:TM,meshnormal_frag:EM,meshphong_vert:wM,meshphong_frag:AM,meshphysical_vert:RM,meshphysical_frag:CM,meshtoon_vert:PM,meshtoon_frag:IM,points_vert:LM,points_frag:NM,shadow_vert:DM,shadow_frag:UM,sprite_vert:FM,sprite_frag:OM},et={common:{diffuse:{value:new it(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new Gt},alphaMap:{value:null},alphaMapTransform:{value:new Gt},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new Gt}},envmap:{envMap:{value:null},envMapRotation:{value:new Gt},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98},dfgLUT:{value:null}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new Gt}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new Gt}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new Gt},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new Gt},normalScale:{value:new Ye(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new Gt},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new Gt}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new Gt}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new Gt}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new it(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},sunLights:{value:[],properties:{direction:{},color:{}}},sunLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},sunShadowMatrix:{value:[]},sunShadowCascade:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null},probesSH:{value:null},probesMin:{value:new V},probesMax:{value:new V},probesResolution:{value:new V}},points:{diffuse:{value:new it(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new Gt},alphaTest:{value:0},uvTransform:{value:new Gt}},sprite:{diffuse:{value:new it(16777215)},opacity:{value:1},center:{value:new Ye(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new Gt},alphaMap:{value:null},alphaMapTransform:{value:new Gt},alphaTest:{value:0}}},Os={basic:{uniforms:Ii([et.common,et.specularmap,et.envmap,et.aomap,et.lightmap,et.fog]),vertexShader:jt.meshbasic_vert,fragmentShader:jt.meshbasic_frag},lambert:{uniforms:Ii([et.common,et.specularmap,et.envmap,et.aomap,et.lightmap,et.emissivemap,et.bumpmap,et.normalmap,et.displacementmap,et.fog,et.lights,{emissive:{value:new it(0)},envMapIntensity:{value:1}}]),vertexShader:jt.meshlambert_vert,fragmentShader:jt.meshlambert_frag},phong:{uniforms:Ii([et.common,et.specularmap,et.envmap,et.aomap,et.lightmap,et.emissivemap,et.bumpmap,et.normalmap,et.displacementmap,et.fog,et.lights,{emissive:{value:new it(0)},specular:{value:new it(1118481)},shininess:{value:30},envMapIntensity:{value:1}}]),vertexShader:jt.meshphong_vert,fragmentShader:jt.meshphong_frag},standard:{uniforms:Ii([et.common,et.envmap,et.aomap,et.lightmap,et.emissivemap,et.bumpmap,et.normalmap,et.displacementmap,et.roughnessmap,et.metalnessmap,et.fog,et.lights,{emissive:{value:new it(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:jt.meshphysical_vert,fragmentShader:jt.meshphysical_frag},toon:{uniforms:Ii([et.common,et.aomap,et.lightmap,et.emissivemap,et.bumpmap,et.normalmap,et.displacementmap,et.gradientmap,et.fog,et.lights,{emissive:{value:new it(0)}}]),vertexShader:jt.meshtoon_vert,fragmentShader:jt.meshtoon_frag},matcap:{uniforms:Ii([et.common,et.bumpmap,et.normalmap,et.displacementmap,et.fog,{matcap:{value:null}}]),vertexShader:jt.meshmatcap_vert,fragmentShader:jt.meshmatcap_frag},points:{uniforms:Ii([et.points,et.fog]),vertexShader:jt.points_vert,fragmentShader:jt.points_frag},dashed:{uniforms:Ii([et.common,et.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:jt.linedashed_vert,fragmentShader:jt.linedashed_frag},depth:{uniforms:Ii([et.common,et.displacementmap]),vertexShader:jt.depth_vert,fragmentShader:jt.depth_frag},normal:{uniforms:Ii([et.common,et.bumpmap,et.normalmap,et.displacementmap,{opacity:{value:1}}]),vertexShader:jt.meshnormal_vert,fragmentShader:jt.meshnormal_frag},sprite:{uniforms:Ii([et.sprite,et.fog]),vertexShader:jt.sprite_vert,fragmentShader:jt.sprite_frag},background:{uniforms:{uvTransform:{value:new Gt},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:jt.background_vert,fragmentShader:jt.background_frag},backgroundCube:{uniforms:{envMap:{value:null},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new Gt}},vertexShader:jt.backgroundCube_vert,fragmentShader:jt.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:jt.cube_vert,fragmentShader:jt.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:jt.equirect_vert,fragmentShader:jt.equirect_frag},distance:{uniforms:Ii([et.common,et.displacementmap,{referencePosition:{value:new V},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:jt.distance_vert,fragmentShader:jt.distance_frag},shadow:{uniforms:Ii([et.lights,et.fog,{color:{value:new it(0)},opacity:{value:1}}]),vertexShader:jt.shadow_vert,fragmentShader:jt.shadow_frag}};Os.physical={uniforms:Ii([Os.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new Gt},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new Gt},clearcoatNormalScale:{value:new Ye(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new Gt},dispersion:{value:0},retroreflectivity:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new Gt},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new Gt},sheen:{value:0},sheenColor:{value:new it(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new Gt},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new Gt},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new Gt},transmissionSamplerSize:{value:new Ye},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new Gt},attenuationDistance:{value:0},attenuationColor:{value:new it(0)},specularColor:{value:new it(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new Gt},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new Gt},anisotropyVector:{value:new Ye},anisotropyMap:{value:null},anisotropyMapTransform:{value:new Gt}}]),vertexShader:jt.meshphysical_vert,fragmentShader:jt.meshphysical_frag};const ll={r:0,b:0,g:0},BM=new zt,d0=new Gt;d0.set(-1,0,0,0,1,0,0,0,1);function kM(s,e,t,n,i,r){const o=new it(0);let a=i===!0?0:1,c,l,u=null,f=0,h=null;function d(A){let I=A.isScene===!0?A.background:null;if(I&&I.isTexture){const _=A.backgroundBlurriness>0;I=e.get(I,_)}return I}function m(A){let I=!1;const _=d(A);_===null?x(o,a):_&&_.isColor&&(x(_,1),I=!0);const w=s.xr.getEnvironmentBlendMode();w==="additive"?t.buffers.color.setClear(0,0,0,1,r):w==="alpha-blend"&&t.buffers.color.setClear(0,0,0,0,r),(s.autoClear||I)&&(t.buffers.depth.setTest(!0),t.buffers.depth.setMask(!0),t.buffers.color.setMask(!0),s.clear(s.autoClearColor,s.autoClearDepth,s.autoClearStencil))}function M(A,I){const _=d(I);_&&(_.isCubeTexture||_.mapping===Ul)?(l===void 0&&(l=new Ut(new Ki(1,1,1),new ji({name:"BackgroundCubeMaterial",uniforms:aa(Os.backgroundCube.uniforms),vertexShader:Os.backgroundCube.vertexShader,fragmentShader:Os.backgroundCube.fragmentShader,side:Di,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),l.geometry.deleteAttribute("normal"),l.geometry.deleteAttribute("uv"),l.onBeforeRender=function(w,R,D){this.matrixWorld.copyPosition(D.matrixWorld)},Object.defineProperty(l.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),n.update(l)),l.material.uniforms.envMap.value=_,l.material.uniforms.backgroundBlurriness.value=I.backgroundBlurriness,l.material.uniforms.backgroundIntensity.value=I.backgroundIntensity,l.material.uniforms.backgroundRotation.value.setFromMatrix4(BM.makeRotationFromEuler(I.backgroundRotation)).transpose(),_.isCubeTexture&&_.isRenderTargetTexture===!1&&l.material.uniforms.backgroundRotation.value.premultiply(d0),l.material.toneMapped=Qt.getTransfer(_.colorSpace)!==Sn,(u!==_||f!==_.version||h!==s.toneMapping)&&(l.material.needsUpdate=!0,u=_,f=_.version,h=s.toneMapping),l.layers.enableAll(),A.unshift(l,l.geometry,l.material,0,0,null)):_&&_.isTexture&&(c===void 0&&(c=new Ut(new ai(2,2),new ji({name:"BackgroundMaterial",uniforms:aa(Os.background.uniforms),vertexShader:Os.background.vertexShader,fragmentShader:Os.background.fragmentShader,side:Ir,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),c.geometry.deleteAttribute("normal"),Object.defineProperty(c.material,"map",{get:function(){return this.uniforms.t2D.value}}),n.update(c)),c.material.uniforms.t2D.value=_,c.material.uniforms.backgroundIntensity.value=I.backgroundIntensity,c.material.toneMapped=Qt.getTransfer(_.colorSpace)!==Sn,_.matrixAutoUpdate===!0&&_.updateMatrix(),c.material.uniforms.uvTransform.value.copy(_.matrix),(u!==_||f!==_.version||h!==s.toneMapping)&&(c.material.needsUpdate=!0,u=_,f=_.version,h=s.toneMapping),c.layers.enableAll(),A.unshift(c,c.geometry,c.material,0,0,null))}function x(A,I){A.getRGB(ll,o0(s)),t.buffers.color.setClear(ll.r,ll.g,ll.b,I,r)}function g(){l!==void 0&&(l.geometry.dispose(),l.material.dispose(),l=void 0),c!==void 0&&(c.geometry.dispose(),c.material.dispose(),c=void 0)}return{getClearColor:function(){return o},setClearColor:function(A,I=1){o.set(A),a=I,x(o,a)},getClearAlpha:function(){return a},setClearAlpha:function(A){a=A,x(o,a)},render:m,addToRenderList:M,dispose:g}}function zM(s,e){const t=s.getParameter(s.MAX_VERTEX_ATTRIBS),n={},i=h(null);let r=i,o=!1;function a(z,K,ee,X,J){let ce=!1;const se=f(z,X,ee,K);r!==se&&(r=se,l(r.object)),ce=d(z,X,ee,J),ce&&m(z,X,ee,J),J!==null&&e.update(J,s.ELEMENT_ARRAY_BUFFER),(ce||o)&&(o=!1,_(z,K,ee,X),J!==null&&s.bindBuffer(s.ELEMENT_ARRAY_BUFFER,e.get(J).buffer))}function c(){return s.createVertexArray()}function l(z){return s.bindVertexArray(z)}function u(z){return s.deleteVertexArray(z)}function f(z,K,ee,X){const J=X.wireframe===!0;let ce=n[K.id];ce===void 0&&(ce={},n[K.id]=ce);const se=z.isInstancedMesh===!0?z.id:0;let Ee=ce[se];Ee===void 0&&(Ee={},ce[se]=Ee);let ue=Ee[ee.id];ue===void 0&&(ue={},Ee[ee.id]=ue);let ge=ue[J];return ge===void 0&&(ge=h(c()),ue[J]=ge),ge}function h(z){const K=[],ee=[],X=[];for(let J=0;J<t;J++)K[J]=0,ee[J]=0,X[J]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:K,enabledAttributes:ee,attributeDivisors:X,object:z,attributes:{},index:null}}function d(z,K,ee,X){const J=r.attributes,ce=K.attributes;let se=0;const Ee=ee.getAttributes();for(const ue in Ee)if(Ee[ue].location>=0){const Se=J[ue];let tt=ce[ue];if(tt===void 0&&(ue==="instanceMatrix"&&z.instanceMatrix&&(tt=z.instanceMatrix),ue==="instanceColor"&&z.instanceColor&&(tt=z.instanceColor)),Se===void 0||Se.attribute!==tt||tt&&Se.data!==tt.data)return!0;se++}return r.attributesNum!==se||r.index!==X}function m(z,K,ee,X){const J={},ce=K.attributes;let se=0;const Ee=ee.getAttributes();for(const ue in Ee)if(Ee[ue].location>=0){let Se=ce[ue];Se===void 0&&(ue==="instanceMatrix"&&z.instanceMatrix&&(Se=z.instanceMatrix),ue==="instanceColor"&&z.instanceColor&&(Se=z.instanceColor));const tt={};tt.attribute=Se,Se&&Se.data&&(tt.data=Se.data),J[ue]=tt,se++}r.attributes=J,r.attributesNum=se,r.index=X}function M(){const z=r.newAttributes;for(let K=0,ee=z.length;K<ee;K++)z[K]=0}function x(z){g(z,0)}function g(z,K){const ee=r.newAttributes,X=r.enabledAttributes,J=r.attributeDivisors;ee[z]=1,X[z]===0&&(s.enableVertexAttribArray(z),X[z]=1),J[z]!==K&&(s.vertexAttribDivisor(z,K),J[z]=K)}function A(){const z=r.newAttributes,K=r.enabledAttributes;for(let ee=0,X=K.length;ee<X;ee++)K[ee]!==z[ee]&&(s.disableVertexAttribArray(ee),K[ee]=0)}function I(z,K,ee,X,J,ce,se){se===!0?s.vertexAttribIPointer(z,K,ee,J,ce):s.vertexAttribPointer(z,K,ee,X,J,ce)}function _(z,K,ee,X){M();const J=X.attributes,ce=ee.getAttributes(),se=K.defaultAttributeValues;for(const Ee in ce){const ue=ce[Ee];if(ue.location>=0){let ge=J[Ee];if(ge===void 0&&(Ee==="instanceMatrix"&&z.instanceMatrix&&(ge=z.instanceMatrix),Ee==="instanceColor"&&z.instanceColor&&(ge=z.instanceColor)),ge!==void 0){const Se=ge.normalized,tt=ge.itemSize,Ze=e.get(ge);if(Ze===void 0)continue;const At=Ze.buffer,bt=Ze.type,Wt=Ze.bytesPerElement,he=bt===s.INT||bt===s.UNSIGNED_INT||ge.gpuType===zh;if(ge.isInterleavedBufferAttribute){const Me=ge.data,We=Me.stride,lt=ge.offset;if(Me.isInstancedInterleavedBuffer){for(let je=0;je<ue.locationSize;je++)g(ue.location+je,Me.meshPerAttribute);z.isInstancedMesh!==!0&&X._maxInstanceCount===void 0&&(X._maxInstanceCount=Me.meshPerAttribute*Me.count)}else for(let je=0;je<ue.locationSize;je++)x(ue.location+je);s.bindBuffer(s.ARRAY_BUFFER,At);for(let je=0;je<ue.locationSize;je++)I(ue.location+je,tt/ue.locationSize,bt,Se,We*Wt,(lt+tt/ue.locationSize*je)*Wt,he)}else{if(ge.isInstancedBufferAttribute){for(let Me=0;Me<ue.locationSize;Me++)g(ue.location+Me,ge.meshPerAttribute);z.isInstancedMesh!==!0&&X._maxInstanceCount===void 0&&(X._maxInstanceCount=ge.meshPerAttribute*ge.count)}else for(let Me=0;Me<ue.locationSize;Me++)x(ue.location+Me);s.bindBuffer(s.ARRAY_BUFFER,At);for(let Me=0;Me<ue.locationSize;Me++)I(ue.location+Me,tt/ue.locationSize,bt,Se,tt*Wt,tt/ue.locationSize*Me*Wt,he)}}else if(se!==void 0){const Se=se[Ee];if(Se!==void 0)switch(Se.length){case 2:s.vertexAttrib2fv(ue.location,Se);break;case 3:s.vertexAttrib3fv(ue.location,Se);break;case 4:s.vertexAttrib4fv(ue.location,Se);break;default:s.vertexAttrib1fv(ue.location,Se)}}}}A()}function w(){L();for(const z in n){const K=n[z];for(const ee in K){const X=K[ee];for(const J in X){const ce=X[J];for(const se in ce)u(ce[se].object),delete ce[se];delete X[J]}}delete n[z]}}function R(z){if(n[z.id]===void 0)return;const K=n[z.id];for(const ee in K){const X=K[ee];for(const J in X){const ce=X[J];for(const se in ce)u(ce[se].object),delete ce[se];delete X[J]}}delete n[z.id]}function D(z){for(const K in n){const ee=n[K];for(const X in ee){const J=ee[X];if(J[z.id]===void 0)continue;const ce=J[z.id];for(const se in ce)u(ce[se].object),delete ce[se];delete J[z.id]}}}function v(z){for(const K in n){const ee=n[K],X=z.isInstancedMesh===!0?z.id:0,J=ee[X];if(J!==void 0){for(const ce in J){const se=J[ce];for(const Ee in se)u(se[Ee].object),delete se[Ee];delete J[ce]}delete ee[X],Object.keys(ee).length===0&&delete n[K]}}}function L(){O(),o=!0,r!==i&&(r=i,l(r.object))}function O(){i.geometry=null,i.program=null,i.wireframe=!1}return{setup:a,reset:L,resetDefaultState:O,dispose:w,releaseStatesOfGeometry:R,releaseStatesOfObject:v,releaseStatesOfProgram:D,initAttributes:M,enableAttribute:x,disableUnusedAttributes:A}}function HM(s,e,t){let n;function i(c){n=c}function r(c,l){s.drawArrays(n,c,l),t.update(l,n,1)}function o(c,l,u){u!==0&&(s.drawArraysInstanced(n,c,l,u),t.update(l,n,u))}function a(c,l,u){if(u===0)return;e.get("WEBGL_multi_draw").multiDrawArraysWEBGL(n,c,0,l,0,u);let h=0;for(let d=0;d<u;d++)h+=l[d];t.update(h,n,1)}this.setMode=i,this.render=r,this.renderInstances=o,this.renderMultiDraw=a}function VM(s,e,t,n){let i;function r(){if(i!==void 0)return i;if(e.has("EXT_texture_filter_anisotropic")===!0){const D=e.get("EXT_texture_filter_anisotropic");i=s.getParameter(D.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else i=0;return i}function o(D){return!(D!==ss&&n.convert(D)!==s.getParameter(s.IMPLEMENTATION_COLOR_READ_FORMAT))}function a(D){const v=D===Ws&&(e.has("EXT_color_buffer_half_float")||e.has("EXT_color_buffer_float"));return!(D!==Yi&&D!==is&&!v&&n.convert(D)!==s.getParameter(s.IMPLEMENTATION_COLOR_READ_TYPE))}function c(D){if(D==="highp"){if(s.getShaderPrecisionFormat(s.VERTEX_SHADER,s.HIGH_FLOAT).precision>0&&s.getShaderPrecisionFormat(s.FRAGMENT_SHADER,s.HIGH_FLOAT).precision>0)return"highp";D="mediump"}return D==="mediump"&&s.getShaderPrecisionFormat(s.VERTEX_SHADER,s.MEDIUM_FLOAT).precision>0&&s.getShaderPrecisionFormat(s.FRAGMENT_SHADER,s.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let l=t.precision!==void 0?t.precision:"highp";const u=c(l);u!==l&&(yt("WebGLRenderer:",l,"not supported, using",u,"instead."),l=u);const f=t.logarithmicDepthBuffer===!0,h=t.reversedDepthBuffer===!0&&e.has("EXT_clip_control");t.reversedDepthBuffer===!0&&h===!1&&yt("WebGLRenderer: Unable to use reversed depth buffer due to missing EXT_clip_control extension. Fallback to default depth buffer.");const d=s.getParameter(s.MAX_TEXTURE_IMAGE_UNITS),m=s.getParameter(s.MAX_VERTEX_TEXTURE_IMAGE_UNITS),M=s.getParameter(s.MAX_TEXTURE_SIZE),x=s.getParameter(s.MAX_CUBE_MAP_TEXTURE_SIZE),g=s.getParameter(s.MAX_VERTEX_ATTRIBS),A=s.getParameter(s.MAX_VERTEX_UNIFORM_VECTORS),I=s.getParameter(s.MAX_VARYING_VECTORS),_=s.getParameter(s.MAX_FRAGMENT_UNIFORM_VECTORS),w=s.getParameter(s.MAX_SAMPLES),R=s.getParameter(s.SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:r,getMaxPrecision:c,textureFormatReadable:o,textureTypeReadable:a,precision:l,logarithmicDepthBuffer:f,reversedDepthBuffer:h,maxTextures:d,maxVertexTextures:m,maxTextureSize:M,maxCubemapSize:x,maxAttributes:g,maxVertexUniforms:A,maxVaryings:I,maxFragmentUniforms:_,maxSamples:w,samples:R}}function GM(s){const e=this;let t=null,n=0,i=!1,r=!1;const o=new wr,a=new Gt,c={value:null,needsUpdate:!1};this.uniform=c,this.numPlanes=0,this.numIntersection=0,this.init=function(f,h){const d=f.length!==0||h||n!==0||i;return i=h,n=f.length,d},this.beginShadows=function(){r=!0,u(null)},this.endShadows=function(){r=!1},this.setGlobalState=function(f,h){t=u(f,h,0)},this.setState=function(f,h,d){const m=f.clippingPlanes,M=f.clipIntersection,x=f.clipShadows,g=s.get(f);if(!i||m===null||m.length===0||r&&!x)r?u(null):l();else{const A=r?0:n,I=A*4;let _=g.clippingState||null;c.value=_,_=u(m,h,I,d);for(let w=0;w!==I;++w)_[w]=t[w];g.clippingState=_,this.numIntersection=M?this.numPlanes:0,this.numPlanes+=A}};function l(){c.value!==t&&(c.value=t,c.needsUpdate=n>0),e.numPlanes=n,e.numIntersection=0}function u(f,h,d,m){const M=f!==null?f.length:0;let x=null;if(M!==0){if(x=c.value,m!==!0||x===null){const g=d+M*4,A=h.matrixWorldInverse;a.getNormalMatrix(A),(x===null||x.length<g)&&(x=new Float32Array(g));for(let I=0,_=d;I!==M;++I,_+=4)o.copy(f[I]).applyMatrix4(A,a),o.normal.toArray(x,_),x[_+3]=o.constant}c.value=x,c.needsUpdate=!0}return e.numPlanes=M,e.numIntersection=0,x}}const ea=4,WM=6,XM=20,qM=256,Ha=new Hl,bd=new it;let wu=null,Au=0,Ru=0,Cu=!1;const YM=new V,Zr=new V;class Ch{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._sizeLods=[],this._lodMeshes=[],this._backgroundBox=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._blurMaterial=null,this._ggxMaterial=null}fromScene(e,t=0,n=.1,i=100,r={}){const{size:o=256,position:a=YM}=r;wu=this._renderer.getRenderTarget(),Au=this._renderer.getActiveCubeFace(),Ru=this._renderer.getActiveMipmapLevel(),Cu=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(o);const c=this._allocateTargets();return c.depthBuffer=!0,this._sceneToCubeUV(e,n,i,c,a),t>0&&this._blur(c,0,0,t),this._applyPMREM(c),this._cleanup(c),c}fromEquirectangular(e,t=null){return this._fromTexture(e,t)}fromCubemap(e,t=null){return this._fromTexture(e,t)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=wd(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=Ed(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose(),this._backgroundBox!==null&&(this._backgroundBox.geometry.dispose(),this._backgroundBox.material.dispose())}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._ggxMaterial!==null&&this._ggxMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodMeshes.length;e++)this._lodMeshes[e].geometry.dispose()}_cleanup(e){this._renderer.setRenderTarget(wu,Au,Ru),this._renderer.xr.enabled=Cu,e.scissorTest=!1,jo(e,0,0,e.width,e.height)}_fromTexture(e,t){e.mapping===lo||e.mapping===sa?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),wu=this._renderer.getRenderTarget(),Au=this._renderer.getActiveCubeFace(),Ru=this._renderer.getActiveMipmapLevel(),Cu=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;const n=t||this._allocateTargets();return this._textureToCubeUV(e,n),this._applyPMREM(n),this._cleanup(n),n}_allocateTargets(){const e=3*Math.max(this._cubeSize,112),t=4*this._cubeSize,n={magFilter:li,minFilter:li,generateMipmaps:!1,type:Ws,format:ss,colorSpace:Hi,depthBuffer:!1},i=Td(e,t,n);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e||this._pingPongRenderTarget.height!==t){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=Td(e,t,n);const{_lodMax:r}=this;({lodMeshes:this._lodMeshes,sizeLods:this._sizeLods}=KM(r)),this._blurMaterial=$M(r,e,t),this._ggxMaterial=jM(r,e,t)}return i}_compileMaterial(e){const t=new Ut(new Rn,e);this._renderer.compile(t,Ha)}_sceneToCubeUV(e,t,n,i,r){const c=new Ni(90,1,t,n),l=[1,-1,1,1,1,1],u=[1,1,1,-1,-1,-1],f=this._renderer,h=f.autoClear,d=f.toneMapping;f.getClearColor(bd),f.toneMapping=Hs,f.autoClear=!1,f.state.buffers.depth.getReversed()&&(f.setRenderTarget(i),f.clearDepth(),f.setRenderTarget(null)),this._backgroundBox===null&&(this._backgroundBox=new Ut(new Ki,new ki({name:"PMREM.Background",side:Di,depthWrite:!1,depthTest:!1})));const M=this._backgroundBox,x=M.material;let g=!1;const A=e.background;A?A.isColor&&(x.color.copy(A),e.background=null,g=!0):(x.color.copy(bd),g=!0);for(let I=0;I<6;I++){const _=I%3;_===0?(c.up.set(0,l[I],0),c.position.set(r.x,r.y,r.z),c.lookAt(r.x+u[I],r.y,r.z)):_===1?(c.up.set(0,0,l[I]),c.position.set(r.x,r.y,r.z),c.lookAt(r.x,r.y+u[I],r.z)):(c.up.set(0,l[I],0),c.position.set(r.x,r.y,r.z),c.lookAt(r.x,r.y,r.z+u[I]));const w=this._cubeSize;jo(i,_*w,I>2?w:0,w,w),f.setRenderTarget(i),g&&f.render(M,c),f.render(e,c)}f.toneMapping=d,f.autoClear=h,e.background=A}_textureToCubeUV(e,t){const n=this._renderer,i=e.mapping===lo||e.mapping===sa;i?(this._cubemapMaterial===null&&(this._cubemapMaterial=wd()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=Ed());const r=i?this._cubemapMaterial:this._equirectMaterial,o=this._lodMeshes[0];o.material=r;const a=r.uniforms;a.envMap.value=e;const c=this._cubeSize;jo(t,0,0,3*c,2*c),n.setRenderTarget(t),n.render(o,Ha)}_applyPMREM(e){const t=this._renderer,n=t.autoClear;t.autoClear=!1;const i=this._lodMeshes.length;for(let r=1;r<i;r++)this._applyGGXFilter(e,r-1,r);t.autoClear=n}_applyGGXFilter(e,t,n){const i=this._renderer,r=this._pingPongRenderTarget,o=this._ggxMaterial,a=this._lodMeshes[n];a.material=o;const c=o.uniforms,l=n/(this._lodMeshes.length-1),u=t/(this._lodMeshes.length-1),f=Math.sqrt(l*l-u*u),h=l*1.25,d=f*h,{_lodMax:m}=this,M=this._sizeLods[n],x=3*M*(n>m-ea?n-m+ea:0),g=4*(this._cubeSize-M);c.envMap.value=e.texture,c.roughness.value=d,c.mipInt.value=m-t,jo(r,x,g,3*M,2*M),i.setRenderTarget(r),i.render(a,Ha),c.envMap.value=r.texture,c.roughness.value=0,c.mipInt.value=m-n,jo(e,x,g,3*M,2*M),i.setRenderTarget(e),i.render(a,Ha)}_blur(e,t,n,i){const r=this._pingPongRenderTarget,o=Math.min(i,Math.PI)/Math.SQRT2;this._blurPass(e,r,t,n,o),this._blurPass(r,e,n,n,o)}_blurPass(e,t,n,i,r){const o=this._renderer,a=this._blurMaterial,c=this._lodMeshes[i];c.material=a;const l=a.uniforms;l.envMap.value=e.texture,l.sigma.value=r,l.mipInt.value=this._lodMax-n;const u=this._sizeLods[i],f=3*u*(i>this._lodMax-ea?i-this._lodMax+ea:0),h=4*(this._cubeSize-u);jo(t,f,h,3*u,2*u),o.setRenderTarget(t),o.render(c,Ha)}}function KM(s){const e=[],t=[];let n=s;const i=s-ea+1+WM;for(let r=0;r<i;r++){const o=Math.pow(2,n);e.push(o);const a=1/(o-2),c=-a,l=1+a,u=[c,c,l,c,l,l,c,c,l,l,c,l],f=6,h=6,d=3,m=new Float32Array(d*h*f),M=new Float32Array(d*h*f);for(let g=0;g<f;g++){const A=g%3*2/3-1,I=g>2?0:-1,_=[A,I,0,A+2/3,I,0,A+2/3,I+1,0,A,I,0,A+2/3,I+1,0,A,I+1,0];m.set(_,d*h*g);for(let w=0;w<h;w++){const R=u[w*2]*2-1,D=u[w*2+1]*2-1;g===0?Zr.set(1,D,R):g===1?Zr.set(-R,1,-D):g===2?Zr.set(-R,D,1):g===3?Zr.set(-1,D,-R):g===4?Zr.set(-R,-1,D):Zr.set(R,D,-1),Zr.toArray(M,(g*h+w)*d)}}const x=new Rn;x.setAttribute("position",new Fn(m,d)),x.setAttribute("outputDirection",new Fn(M,d)),t.push(new Ut(x,null)),n>ea&&n--}return{lodMeshes:t,sizeLods:e}}function Td(s,e,t){const n=new ys(s,e,t);return n.texture.mapping=Ul,n.texture.name="PMREM.cubeUv",n.scissorTest=!0,n}function jo(s,e,t,n,i){s.viewport.set(e,t,n,i),s.scissor.set(e,t,n,i)}function jM(s,e,t){return new ji({name:"PMREMGGXConvolution",defines:{GGX_SAMPLES:qM,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/t,CUBEUV_MAX_MIP:`${s}.0`},uniforms:{envMap:{value:null},roughness:{value:0},mipInt:{value:0}},vertexShader:Vl(),fragmentShader:`

			precision highp float;
			precision highp int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;
			uniform float roughness;
			uniform float mipInt;

			#define ENVMAP_TYPE_CUBE_UV
			#include <cube_uv_reflection_fragment>

			#define PI 3.14159265359

			// Van der Corput radical inverse
			float radicalInverse_VdC(uint bits) {
				bits = (bits << 16u) | (bits >> 16u);
				bits = ((bits & 0x55555555u) << 1u) | ((bits & 0xAAAAAAAAu) >> 1u);
				bits = ((bits & 0x33333333u) << 2u) | ((bits & 0xCCCCCCCCu) >> 2u);
				bits = ((bits & 0x0F0F0F0Fu) << 4u) | ((bits & 0xF0F0F0F0u) >> 4u);
				bits = ((bits & 0x00FF00FFu) << 8u) | ((bits & 0xFF00FF00u) >> 8u);
				return float(bits) * 2.3283064365386963e-10; // / 0x100000000
			}

			// Hammersley sequence
			vec2 hammersley(uint i, uint N) {
				return vec2(float(i) / float(N), radicalInverse_VdC(i));
			}

			// GGX VNDF importance sampling (Eric Heitz 2018)
			// "Sampling the GGX Distribution of Visible Normals"
			// https://jcgt.org/published/0007/04/01/
			vec3 importanceSampleGGX_VNDF(vec2 Xi, vec3 V, float roughness) {
				float alpha = roughness * roughness;

				// Section 4.1: Orthonormal basis
				vec3 T1 = vec3(1.0, 0.0, 0.0);
				vec3 T2 = cross(V, T1);

				// Section 4.2: Parameterization of projected area
				float r = sqrt(Xi.x);
				float phi = 2.0 * PI * Xi.y;
				float t1 = r * cos(phi);
				float t2 = r * sin(phi);
				float s = 0.5 * (1.0 + V.z);
				t2 = (1.0 - s) * sqrt(1.0 - t1 * t1) + s * t2;

				// Section 4.3: Reprojection onto hemisphere
				vec3 Nh = t1 * T1 + t2 * T2 + sqrt(max(0.0, 1.0 - t1 * t1 - t2 * t2)) * V;

				// Section 3.4: Transform back to ellipsoid configuration
				return normalize(vec3(alpha * Nh.x, alpha * Nh.y, max(0.0, Nh.z)));
			}

			void main() {
				vec3 N = normalize(vOutputDirection);
				vec3 V = N; // Assume view direction equals normal for pre-filtering

				vec3 prefilteredColor = vec3(0.0);
				float totalWeight = 0.0;

				// For very low roughness, just sample the environment directly
				if (roughness < 0.001) {
					gl_FragColor = vec4(bilinearCubeUV(envMap, N, mipInt), 1.0);
					return;
				}

				// Tangent space basis for VNDF sampling
				vec3 up = abs(N.z) < 0.999 ? vec3(0.0, 0.0, 1.0) : vec3(1.0, 0.0, 0.0);
				vec3 tangent = normalize(cross(up, N));
				vec3 bitangent = cross(N, tangent);

				for(uint i = 0u; i < uint(GGX_SAMPLES); i++) {
					vec2 Xi = hammersley(i, uint(GGX_SAMPLES));

					// For PMREM, V = N, so in tangent space V is always (0, 0, 1)
					vec3 H_tangent = importanceSampleGGX_VNDF(Xi, vec3(0.0, 0.0, 1.0), roughness);

					// Transform H back to world space
					vec3 H = normalize(tangent * H_tangent.x + bitangent * H_tangent.y + N * H_tangent.z);
					vec3 L = normalize(2.0 * dot(V, H) * H - V);

					float NdotL = max(dot(N, L), 0.0);

					if(NdotL > 0.0) {
						// Sample environment at fixed mip level
						// VNDF importance sampling handles the distribution filtering
						vec3 sampleColor = bilinearCubeUV(envMap, L, mipInt);

						// Weight by NdotL for the split-sum approximation
						// VNDF PDF naturally accounts for the visible microfacet distribution
						prefilteredColor += sampleColor * NdotL;
						totalWeight += NdotL;
					}
				}

				if (totalWeight > 0.0) {
					prefilteredColor = prefilteredColor / totalWeight;
				}

				gl_FragColor = vec4(prefilteredColor, 1.0);
			}
		`,blending:or,depthTest:!1,depthWrite:!1})}function $M(s,e,t){return new ji({name:"SphericalGaussianBlur",defines:{SAMPLES:XM,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/t,CUBEUV_MAX_MIP:`${s}.0`},uniforms:{envMap:{value:null},sigma:{value:0},mipInt:{value:0}},vertexShader:Vl(),fragmentShader:`

			precision highp float;
			precision highp int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;
			uniform float sigma;
			uniform float mipInt;

			#define ENVMAP_TYPE_CUBE_UV
			#include <cube_uv_reflection_fragment>

			#define PI 3.14159265359
			#define GOLDEN_ANGLE 2.39996322973

			void main() {

				if ( sigma == 0.0 ) {

					gl_FragColor = vec4( bilinearCubeUV( envMap, vOutputDirection, mipInt ), 1.0 );
					return;

				}

				vec3 outputDirection = normalize( vOutputDirection );

				vec3 up = abs( outputDirection.z ) < 0.999 ? vec3( 0.0, 0.0, 1.0 ) : vec3( 1.0, 0.0, 0.0 );
				vec3 tangent = normalize( cross( up, outputDirection ) );
				vec3 bitangent = cross( outputDirection, tangent );

				// Truncate the kernel at three standard deviations or at the antipode.
				float thetaMax = min( 3.0 * sigma, PI );
				float truncation = 1.0 - exp( - 0.5 * thetaMax * thetaMax / ( sigma * sigma ) );

				vec3 accumColor = vec3( 0.0 );
				float accumWeight = 0.0;

				for ( int i = 0; i < SAMPLES; i ++ ) {

					// Stratified inverse-CDF sampling of the Gaussian, placed on a golden-angle spiral.
					float stratum = ( float( i ) + 0.5 ) / float( SAMPLES );
					float theta = sigma * sqrt( - 2.0 * log( 1.0 - stratum * truncation ) );
					float phi = float( i ) * GOLDEN_ANGLE;

					vec3 offset = cos( phi ) * tangent + sin( phi ) * bitangent;
					vec3 sampleDirection = cos( theta ) * outputDirection + sin( theta ) * offset;

					// Correct the planar sample density to solid angle.
					float weight = sin( theta ) / theta;

					accumColor += weight * bilinearCubeUV( envMap, sampleDirection, mipInt );
					accumWeight += weight;

				}

				gl_FragColor = vec4( accumColor / accumWeight, 1.0 );

			}
		`,blending:or,depthTest:!1,depthWrite:!1})}function Ed(){return new ji({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:Vl(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;

			#include <common>

			void main() {

				vec3 outputDirection = normalize( vOutputDirection );
				vec2 uv = equirectUv( outputDirection );

				gl_FragColor = vec4( texture2D ( envMap, uv ).rgb, 1.0 );

			}
		`,blending:or,depthTest:!1,depthWrite:!1})}function wd(){return new ji({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:Vl(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:or,depthTest:!1,depthWrite:!1})}function Vl(){return`

		precision mediump float;
		precision mediump int;

		attribute vec3 outputDirection;

		varying vec3 vOutputDirection;

		void main() {

			vOutputDirection = outputDirection;
			gl_Position = vec4( position, 1.0 );

		}
	`}class p0 extends ys{constructor(e=1,t={}){super(e,e,t),this.isWebGLCubeRenderTarget=!0;const n={width:e,height:e,depth:1},i=[n,n,n,n,n,n];this.texture=new Kp(i),this._setTextureOptions(t),this.texture.isRenderTargetTexture=!0}fromEquirectangularTexture(e,t){this.texture.type=t.type,this.texture.colorSpace=t.colorSpace,this.texture.generateMipmaps=t.generateMipmaps,this.texture.minFilter=t.minFilter,this.texture.magFilter=t.magFilter;const n={uniforms:{tEquirect:{value:null}},vertexShader:`

				varying vec3 vWorldDirection;

				vec3 transformDirection( in vec3 dir, in mat4 matrix ) {

					return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );

				}

				void main() {

					vWorldDirection = transformDirection( position, modelMatrix );

					#include <begin_vertex>
					#include <project_vertex>

				}
			`,fragmentShader:`

				uniform sampler2D tEquirect;

				varying vec3 vWorldDirection;

				#include <common>

				void main() {

					vec3 direction = normalize( vWorldDirection );

					vec2 sampleUV = equirectUv( direction );

					gl_FragColor = texture2D( tEquirect, sampleUV );

				}
			`},i=new Ki(5,5,5),r=new ji({name:"CubemapFromEquirect",uniforms:aa(n.uniforms),vertexShader:n.vertexShader,fragmentShader:n.fragmentShader,side:Di,blending:or});r.uniforms.tEquirect.value=t;const o=new Ut(i,r),a=t.minFilter;return t.minFilter===sr&&(t.minFilter=li),new Xx(1,10,this).update(e,o),t.minFilter=a,o.geometry.dispose(),o.material.dispose(),this}clear(e,t=!0,n=!0,i=!0){const r=e.getRenderTarget();for(let o=0;o<6;o++)e.setRenderTarget(this,o),e.clear(t,n,i);e.setRenderTarget(r)}}function ZM(s){let e=new WeakMap,t=new WeakMap,n=null;function i(h,d=!1){return h==null?null:d?o(h):r(h)}function r(h){if(h&&h.isTexture){const d=h.mapping;if(d===Kl||d===jl)if(e.has(h)){const m=e.get(h).texture;return a(m,h.mapping)}else{const m=h.image;if(m&&m.height>0){const M=new p0(m.height);return M.fromEquirectangularTexture(s,h),e.set(h,M),h.addEventListener("dispose",l),a(M.texture,h.mapping)}else return null}}return h}function o(h){if(h&&h.isTexture){const d=h.mapping,m=d===Kl||d===jl,M=d===lo||d===sa;if(m||M){let x=t.get(h);const g=x!==void 0?x.texture.pmremVersion:0;if(h.isRenderTargetTexture&&h.pmremVersion!==g)return n===null&&(n=new Ch(s)),x=m?n.fromEquirectangular(h,x):n.fromCubemap(h,x),x.texture.pmremVersion=h.pmremVersion,t.set(h,x),x.texture;if(x!==void 0)return x.texture;{const A=h.image;return m&&A&&A.height>0||M&&A&&c(A)?(n===null&&(n=new Ch(s)),x=m?n.fromEquirectangular(h):n.fromCubemap(h),x.texture.pmremVersion=h.pmremVersion,t.set(h,x),h.addEventListener("dispose",u),x.texture):null}}}return h}function a(h,d){return d===Kl?h.mapping=lo:d===jl&&(h.mapping=sa),h}function c(h){let d=0;const m=6;for(let M=0;M<m;M++)h[M]!==void 0&&d++;return d===m}function l(h){const d=h.target;d.removeEventListener("dispose",l);const m=e.get(d);m!==void 0&&(e.delete(d),m.dispose())}function u(h){const d=h.target;d.removeEventListener("dispose",u);const m=t.get(d);m!==void 0&&(t.delete(d),m.dispose())}function f(){e=new WeakMap,t=new WeakMap,n!==null&&(n.dispose(),n=null)}return{get:i,dispose:f}}function JM(s){const e={};function t(n){if(e[n]!==void 0)return e[n];const i=s.getExtension(n);return e[n]=i,i}return{has:function(n){return t(n)!==null},init:function(){t("EXT_color_buffer_float"),t("WEBGL_clip_cull_distance"),t("OES_texture_float_linear"),t("EXT_color_buffer_half_float"),t("WEBGL_multisampled_render_to_texture"),t("WEBGL_render_shared_exponent")},get:function(n){const i=t(n);return i===null&&ta("WebGLRenderer: "+n+" extension not supported."),i}}}function QM(s,e,t,n){const i={},r=new WeakMap;function o(f){const h=f.target;h.index!==null&&e.remove(h.index);for(const m in h.attributes)e.remove(h.attributes[m]);h.removeEventListener("dispose",o),delete i[h.id];const d=r.get(h);d&&(e.remove(d),r.delete(h)),n.releaseStatesOfGeometry(h),h.isInstancedBufferGeometry===!0&&delete h._maxInstanceCount,t.memory.geometries--}function a(f,h){return i[h.id]===!0||(h.addEventListener("dispose",o),i[h.id]=!0,t.memory.geometries++),h}function c(f){const h=f.attributes;for(const d in h)e.update(h[d],s.ARRAY_BUFFER)}function l(f){const h=[],d=f.index,m=f.attributes.position;let M=0;if(m===void 0)return;if(d!==null){const A=d.array;M=d.version;for(let I=0,_=A.length;I<_;I+=3){const w=A[I+0],R=A[I+1],D=A[I+2];h.push(w,R,R,D,D,w)}}else{const A=m.array;M=m.version;for(let I=0,_=A.length/3-1;I<_;I+=3){const w=I+0,R=I+1,D=I+2;h.push(w,R,R,D,D,w)}}const x=new(m.count>=65535?Vp:Hp)(h,1);x.version=M;const g=r.get(f);g&&e.remove(g),r.set(f,x)}function u(f){const h=r.get(f);if(h){const d=f.index;d!==null&&h.version<d.version&&l(f)}else l(f);return r.get(f)}return{get:a,update:c,getWireframeAttribute:u}}function ey(s,e,t){let n;function i(f){n=f}let r,o;function a(f){r=f.type,o=f.bytesPerElement}function c(f,h){s.drawElements(n,h,r,f*o),t.update(h,n,1)}function l(f,h,d){d!==0&&(s.drawElementsInstanced(n,h,r,f*o,d),t.update(h,n,d))}function u(f,h,d){if(d===0)return;e.get("WEBGL_multi_draw").multiDrawElementsWEBGL(n,h,0,r,f,0,d);let M=0;for(let x=0;x<d;x++)M+=h[x];t.update(M,n,1)}this.setMode=i,this.setIndex=a,this.render=c,this.renderInstances=l,this.renderMultiDraw=u}function ty(s){const e={geometries:0,textures:0},t={frame:0,calls:0,triangles:0,points:0,lines:0};function n(r,o,a){switch(t.calls++,o){case s.TRIANGLES:t.triangles+=a*(r/3);break;case s.LINES:t.lines+=a*(r/2);break;case s.LINE_STRIP:t.lines+=a*(r-1);break;case s.LINE_LOOP:t.lines+=a*r;break;case s.POINTS:t.points+=a*r;break;default:kt("WebGLInfo: Unknown draw mode:",o);break}}function i(){t.calls=0,t.triangles=0,t.points=0,t.lines=0}return{memory:e,render:t,programs:null,autoReset:!0,reset:i,update:n}}function ny(s,e,t){const n=new WeakMap,i=new Cn;function r(o,a,c){const l=o.morphTargetInfluences,u=a.morphAttributes.position||a.morphAttributes.normal||a.morphAttributes.color,f=u!==void 0?u.length:0;let h=n.get(a);if(h===void 0||h.count!==f){let L=function(){D.dispose(),n.delete(a),a.removeEventListener("dispose",L)};h!==void 0&&h.texture.dispose();const d=a.morphAttributes.position!==void 0,m=a.morphAttributes.normal!==void 0,M=a.morphAttributes.color!==void 0,x=a.morphAttributes.position||[],g=a.morphAttributes.normal||[],A=a.morphAttributes.color||[];let I=0;d===!0&&(I=1),m===!0&&(I=2),M===!0&&(I=3);let _=a.attributes.position.count*I,w=1;_>e.maxTextureSize&&(w=Math.ceil(_/e.maxTextureSize),_=e.maxTextureSize);const R=new Float32Array(_*w*4*f),D=new Bp(R,_,w,f);D.type=is,D.needsUpdate=!0;const v=I*4;for(let O=0;O<f;O++){const z=x[O],K=g[O],ee=A[O],X=_*w*4*O;for(let J=0;J<z.count;J++){const ce=J*v;d===!0&&(i.fromBufferAttribute(z,J),R[X+ce+0]=i.x,R[X+ce+1]=i.y,R[X+ce+2]=i.z,R[X+ce+3]=0),m===!0&&(i.fromBufferAttribute(K,J),R[X+ce+4]=i.x,R[X+ce+5]=i.y,R[X+ce+6]=i.z,R[X+ce+7]=0),M===!0&&(i.fromBufferAttribute(ee,J),R[X+ce+8]=i.x,R[X+ce+9]=i.y,R[X+ce+10]=i.z,R[X+ce+11]=ee.itemSize===4?i.w:1)}}h={count:f,texture:D,size:new Ye(_,w)},n.set(a,h),a.addEventListener("dispose",L)}if(o.isInstancedMesh===!0&&o.morphTexture!==null)c.getUniforms().setValue(s,"morphTexture",o.morphTexture,t);else{let d=0;for(let M=0;M<l.length;M++)d+=l[M];const m=a.morphTargetsRelative?1:1-d;c.getUniforms().setValue(s,"morphTargetBaseInfluence",m),c.getUniforms().setValue(s,"morphTargetInfluences",l)}c.getUniforms().setValue(s,"morphTargetsTexture",h.texture,t),c.getUniforms().setValue(s,"morphTargetsTextureSize",h.size)}return{update:r}}function iy(s,e,t,n,i){let r=new WeakMap;function o(l){const u=i.render.frame,f=l.geometry,h=e.get(l,f);if(r.get(h)!==u&&(e.update(h),r.set(h,u)),l.isInstancedMesh&&(l.hasEventListener("dispose",c)===!1&&l.addEventListener("dispose",c),r.get(l)!==u&&(t.update(l.instanceMatrix,s.ARRAY_BUFFER),l.instanceColor!==null&&t.update(l.instanceColor,s.ARRAY_BUFFER),r.set(l,u))),l.isSkinnedMesh){const d=l.skeleton;r.get(d)!==u&&(d.update(),r.set(d,u))}return h}function a(){r=new WeakMap}function c(l){const u=l.target;u.removeEventListener("dispose",c),n.releaseStatesOfObject(u),t.remove(u.instanceMatrix),u.instanceColor!==null&&t.remove(u.instanceColor)}return{update:o,dispose:a}}const sy={[yp]:"LINEAR_TONE_MAPPING",[Sp]:"REINHARD_TONE_MAPPING",[bp]:"CINEON_TONE_MAPPING",[kh]:"ACES_FILMIC_TONE_MAPPING",[Ep]:"AGX_TONE_MAPPING",[wp]:"NEUTRAL_TONE_MAPPING",[Tp]:"CUSTOM_TONE_MAPPING"};function ry(s,e,t,n,i,r){const o=new ys(e,t,{type:s,depthBuffer:i,stencilBuffer:r,samples:n?4:0,storeMultisampledDepthBuffer:!1,storeMultisampledStencilBuffer:!1,resolveDepthBuffer:!1,resolveStencilBuffer:!1});let a=null,c=null;const l=new Rn;l.setAttribute("position",new on([-1,3,0,-1,-1,0,3,-1,0],3)),l.setAttribute("uv",new on([0,2,0,0,2,0],2));const u=new Mx({uniforms:{tDiffuse:{value:null}},vertexShader:`
			precision highp float;

			uniform mat4 modelViewMatrix;
			uniform mat4 projectionMatrix;

			attribute vec3 position;
			attribute vec2 uv;

			varying vec2 vUv;

			void main() {
				vUv = uv;
				gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
			}`,fragmentShader:`
			precision highp float;

			uniform sampler2D tDiffuse;

			varying vec2 vUv;

			#include <tonemapping_pars_fragment>
			#include <colorspace_pars_fragment>

			void main() {
				gl_FragColor = texture2D( tDiffuse, vUv );

				#ifdef LINEAR_TONE_MAPPING
					gl_FragColor.rgb = LinearToneMapping( gl_FragColor.rgb );
				#elif defined( REINHARD_TONE_MAPPING )
					gl_FragColor.rgb = ReinhardToneMapping( gl_FragColor.rgb );
				#elif defined( CINEON_TONE_MAPPING )
					gl_FragColor.rgb = CineonToneMapping( gl_FragColor.rgb );
				#elif defined( ACES_FILMIC_TONE_MAPPING )
					gl_FragColor.rgb = ACESFilmicToneMapping( gl_FragColor.rgb );
				#elif defined( AGX_TONE_MAPPING )
					gl_FragColor.rgb = AgXToneMapping( gl_FragColor.rgb );
				#elif defined( NEUTRAL_TONE_MAPPING )
					gl_FragColor.rgb = NeutralToneMapping( gl_FragColor.rgb );
				#elif defined( CUSTOM_TONE_MAPPING )
					gl_FragColor.rgb = CustomToneMapping( gl_FragColor.rgb );
				#endif

				#ifdef SRGB_TRANSFER
					gl_FragColor = sRGBTransferOETF( gl_FragColor );
				#endif
			}`,depthTest:!1,depthWrite:!1}),f=new Ut(l,u),h=new Hl(-1,1,1,-1,0,1);let d=null,m=null,M=!1,x,g=null,A=[],I=!1;this.setSize=function(_,w){o.setSize(_,w),a!==null&&a.setSize(_,w),c!==null&&c.setSize(_,w);for(let R=0;R<A.length;R++){const D=A[R];D.setSize&&D.setSize(_,w)}},this.setEffects=function(_){A=_,I=A.length>0&&A[0].isRenderPass===!0;const w=o.width,R=o.height;A.length>0&&a===null&&(a=new ys(w,R,{type:Ws,depthBuffer:!1,stencilBuffer:!1}),c=new ys(w,R,{type:Ws,depthBuffer:!1,stencilBuffer:!1}));for(let D=0;D<A.length;D++){const v=A[D];v.setSize&&v.setSize(w,R)}},this.begin=function(_,w){if(M||_.toneMapping===Hs&&A.length===0)return!1;if(g=w,w!==null){const R=w.width,D=w.height;(o.width!==R||o.height!==D)&&this.setSize(R,D)}return I===!1&&_.setRenderTarget(o),x=_.toneMapping,_.toneMapping=Hs,!0},this.hasRenderPass=function(){return I},this.end=function(_,w){_.toneMapping=x,M=!0;let R=o,D=a;for(let v=0;v<A.length;v++){const L=A[v];L.enabled!==!1&&(L.render(_,D,R,w),L.needsSwap!==!1&&(R=D,D=D===a?c:a))}if(d!==_.outputColorSpace||m!==_.toneMapping){d=_.outputColorSpace,m=_.toneMapping,u.defines={},Qt.getTransfer(d)===Sn&&(u.defines.SRGB_TRANSFER="");const v=sy[m];v&&(u.defines[v]=""),u.needsUpdate=!0}u.uniforms.tDiffuse.value=R.texture,_.setRenderTarget(g),_.render(f,h),g=null,M=!1},this.isCompositing=function(){return M},this.dispose=function(){o.dispose(),a!==null&&a.dispose(),c!==null&&c.dispose(),l.dispose(),u.dispose()}}const m0=new ui,Ph=new uc(1,1),g0=new Bp,x0=new gg,_0=new Kp,Ad=[],Rd=[],Cd=new Float32Array(16),Pd=new Float32Array(9),Id=new Float32Array(4);function ha(s,e,t){const n=s[0];if(n<=0||n>0)return s;const i=e*t;let r=Ad[i];if(r===void 0&&(r=new Float32Array(i),Ad[i]=r),e!==0){n.toArray(r,0);for(let o=1,a=0;o!==e;++o)a+=t,s[o].toArray(r,a)}return r}function hi(s,e){if(s.length!==e.length)return!1;for(let t=0,n=s.length;t<n;t++)if(s[t]!==e[t])return!1;return!0}function fi(s,e){for(let t=0,n=e.length;t<n;t++)s[t]=e[t]}function Gl(s,e){let t=Rd[e];t===void 0&&(t=new Int32Array(e),Rd[e]=t);for(let n=0;n!==e;++n)t[n]=s.allocateTextureUnit();return t}function oy(s,e){const t=this.cache;t[0]!==e&&(s.uniform1f(this.addr,e),t[0]=e)}function ay(s,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(s.uniform2f(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(hi(t,e))return;s.uniform2fv(this.addr,e),fi(t,e)}}function cy(s,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(s.uniform3f(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else if(e.r!==void 0)(t[0]!==e.r||t[1]!==e.g||t[2]!==e.b)&&(s.uniform3f(this.addr,e.r,e.g,e.b),t[0]=e.r,t[1]=e.g,t[2]=e.b);else{if(hi(t,e))return;s.uniform3fv(this.addr,e),fi(t,e)}}function ly(s,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(s.uniform4f(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(hi(t,e))return;s.uniform4fv(this.addr,e),fi(t,e)}}function uy(s,e){const t=this.cache,n=e.elements;if(n===void 0){if(hi(t,e))return;s.uniformMatrix2fv(this.addr,!1,e),fi(t,e)}else{if(hi(t,n))return;Id.set(n),s.uniformMatrix2fv(this.addr,!1,Id),fi(t,n)}}function hy(s,e){const t=this.cache,n=e.elements;if(n===void 0){if(hi(t,e))return;s.uniformMatrix3fv(this.addr,!1,e),fi(t,e)}else{if(hi(t,n))return;Pd.set(n),s.uniformMatrix3fv(this.addr,!1,Pd),fi(t,n)}}function fy(s,e){const t=this.cache,n=e.elements;if(n===void 0){if(hi(t,e))return;s.uniformMatrix4fv(this.addr,!1,e),fi(t,e)}else{if(hi(t,n))return;Cd.set(n),s.uniformMatrix4fv(this.addr,!1,Cd),fi(t,n)}}function dy(s,e){const t=this.cache;t[0]!==e&&(s.uniform1i(this.addr,e),t[0]=e)}function py(s,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(s.uniform2i(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(hi(t,e))return;s.uniform2iv(this.addr,e),fi(t,e)}}function my(s,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(s.uniform3i(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(hi(t,e))return;s.uniform3iv(this.addr,e),fi(t,e)}}function gy(s,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(s.uniform4i(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(hi(t,e))return;s.uniform4iv(this.addr,e),fi(t,e)}}function xy(s,e){const t=this.cache;t[0]!==e&&(s.uniform1ui(this.addr,e),t[0]=e)}function _y(s,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(s.uniform2ui(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(hi(t,e))return;s.uniform2uiv(this.addr,e),fi(t,e)}}function vy(s,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(s.uniform3ui(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(hi(t,e))return;s.uniform3uiv(this.addr,e),fi(t,e)}}function My(s,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(s.uniform4ui(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(hi(t,e))return;s.uniform4uiv(this.addr,e),fi(t,e)}}function yy(s,e,t){const n=this.cache,i=t.allocateTextureUnit();n[0]!==i&&(s.uniform1i(this.addr,i),n[0]=i);let r;this.type===s.SAMPLER_2D_SHADOW?(Ph.compareFunction=t.isReversedDepthBuffer()?Kh:Yh,r=Ph):r=m0,t.setTexture2D(e||r,i)}function Sy(s,e,t){const n=this.cache,i=t.allocateTextureUnit();n[0]!==i&&(s.uniform1i(this.addr,i),n[0]=i),t.setTexture3D(e||x0,i)}function by(s,e,t){const n=this.cache,i=t.allocateTextureUnit();n[0]!==i&&(s.uniform1i(this.addr,i),n[0]=i),t.setTextureCube(e||_0,i)}function Ty(s,e,t){const n=this.cache,i=t.allocateTextureUnit();n[0]!==i&&(s.uniform1i(this.addr,i),n[0]=i),t.setTexture2DArray(e||g0,i)}function Ey(s){switch(s){case 5126:return oy;case 35664:return ay;case 35665:return cy;case 35666:return ly;case 35674:return uy;case 35675:return hy;case 35676:return fy;case 5124:case 35670:return dy;case 35667:case 35671:return py;case 35668:case 35672:return my;case 35669:case 35673:return gy;case 5125:return xy;case 36294:return _y;case 36295:return vy;case 36296:return My;case 35678:case 36198:case 36298:case 36306:case 35682:return yy;case 35679:case 36299:case 36307:return Sy;case 35680:case 36300:case 36308:case 36293:return by;case 36289:case 36303:case 36311:case 36292:return Ty}}function wy(s,e){s.uniform1fv(this.addr,e)}function Ay(s,e){const t=ha(e,this.size,2);s.uniform2fv(this.addr,t)}function Ry(s,e){const t=ha(e,this.size,3);s.uniform3fv(this.addr,t)}function Cy(s,e){const t=ha(e,this.size,4);s.uniform4fv(this.addr,t)}function Py(s,e){const t=ha(e,this.size,4);s.uniformMatrix2fv(this.addr,!1,t)}function Iy(s,e){const t=ha(e,this.size,9);s.uniformMatrix3fv(this.addr,!1,t)}function Ly(s,e){const t=ha(e,this.size,16);s.uniformMatrix4fv(this.addr,!1,t)}function Ny(s,e){s.uniform1iv(this.addr,e)}function Dy(s,e){s.uniform2iv(this.addr,e)}function Uy(s,e){s.uniform3iv(this.addr,e)}function Fy(s,e){s.uniform4iv(this.addr,e)}function Oy(s,e){s.uniform1uiv(this.addr,e)}function By(s,e){s.uniform2uiv(this.addr,e)}function ky(s,e){s.uniform3uiv(this.addr,e)}function zy(s,e){s.uniform4uiv(this.addr,e)}function Hy(s,e,t){const n=this.cache,i=e.length,r=Gl(t,i);hi(n,r)||(s.uniform1iv(this.addr,r),fi(n,r));let o;this.type===s.SAMPLER_2D_SHADOW?o=Ph:o=m0;for(let a=0;a!==i;++a)t.setTexture2D(e[a]||o,r[a])}function Vy(s,e,t){const n=this.cache,i=e.length,r=Gl(t,i);hi(n,r)||(s.uniform1iv(this.addr,r),fi(n,r));for(let o=0;o!==i;++o)t.setTexture3D(e[o]||x0,r[o])}function Gy(s,e,t){const n=this.cache,i=e.length,r=Gl(t,i);hi(n,r)||(s.uniform1iv(this.addr,r),fi(n,r));for(let o=0;o!==i;++o)t.setTextureCube(e[o]||_0,r[o])}function Wy(s,e,t){const n=this.cache,i=e.length,r=Gl(t,i);hi(n,r)||(s.uniform1iv(this.addr,r),fi(n,r));for(let o=0;o!==i;++o)t.setTexture2DArray(e[o]||g0,r[o])}function Xy(s){switch(s){case 5126:return wy;case 35664:return Ay;case 35665:return Ry;case 35666:return Cy;case 35674:return Py;case 35675:return Iy;case 35676:return Ly;case 5124:case 35670:return Ny;case 35667:case 35671:return Dy;case 35668:case 35672:return Uy;case 35669:case 35673:return Fy;case 5125:return Oy;case 36294:return By;case 36295:return ky;case 36296:return zy;case 35678:case 36198:case 36298:case 36306:case 35682:return Hy;case 35679:case 36299:case 36307:return Vy;case 35680:case 36300:case 36308:case 36293:return Gy;case 36289:case 36303:case 36311:case 36292:return Wy}}class qy{constructor(e,t,n){this.id=e,this.addr=n,this.cache=[],this.type=t.type,this.setValue=Ey(t.type)}}class Yy{constructor(e,t,n){this.id=e,this.addr=n,this.cache=[],this.type=t.type,this.size=t.size,this.setValue=Xy(t.type)}}class Ky{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,t,n){const i=this.seq;for(let r=0,o=i.length;r!==o;++r){const a=i[r];a.setValue(e,t[a.id],n)}}}const Pu=/(\w+)(\])?(\[|\.)?/g;function Ld(s,e){s.seq.push(e),s.map[e.id]=e}function jy(s,e,t){const n=s.name,i=n.length;for(Pu.lastIndex=0;;){const r=Pu.exec(n),o=Pu.lastIndex;let a=r[1];const c=r[2]==="]",l=r[3];if(c&&(a=a|0),l===void 0||l==="["&&o+2===i){Ld(t,l===void 0?new qy(a,s,e):new Yy(a,s,e));break}else{let f=t.map[a];f===void 0&&(f=new Ky(a),Ld(t,f)),t=f}}}class Tl{constructor(e,t){this.seq=[],this.map={};const n=e.getProgramParameter(t,e.ACTIVE_UNIFORMS);for(let o=0;o<n;++o){const a=e.getActiveUniform(t,o),c=e.getUniformLocation(t,a.name);jy(a,c,this)}const i=[],r=[];for(const o of this.seq)o.type===e.SAMPLER_2D_SHADOW||o.type===e.SAMPLER_CUBE_SHADOW||o.type===e.SAMPLER_2D_ARRAY_SHADOW?i.push(o):r.push(o);i.length>0&&(this.seq=i.concat(r))}setValue(e,t,n,i){const r=this.map[t];r!==void 0&&r.setValue(e,n,i)}setOptional(e,t,n){const i=t[n];i!==void 0&&this.setValue(e,n,i)}static upload(e,t,n,i){for(let r=0,o=t.length;r!==o;++r){const a=t[r],c=n[a.id];c.needsUpdate!==!1&&a.setValue(e,c.value,i)}}static seqWithValue(e,t){const n=[];for(let i=0,r=e.length;i!==r;++i){const o=e[i];o.id in t&&n.push(o)}return n}}function Nd(s,e,t){const n=s.createShader(e);return s.shaderSource(n,t),s.compileShader(n),n}const $y=37297;let Zy=0;function Jy(s,e){const t=s.split(`
`),n=[],i=Math.max(e-6,0),r=Math.min(e+6,t.length);for(let o=i;o<r;o++){const a=o+1;n.push(`${a===e?">":" "} ${a}: ${t[o]}`)}return n.join(`
`)}const Dd=new Gt;function Qy(s){Qt._getMatrix(Dd,Qt.workingColorSpace,s);const e=`mat3( ${Dd.elements.map(t=>t.toFixed(4))} )`;switch(Qt.getTransfer(s)){case Cl:return[e,"LinearTransferOETF"];case Sn:return[e,"sRGBTransferOETF"];default:return yt("WebGLProgram: Unsupported color space: ",s),[e,"LinearTransferOETF"]}}function Ud(s,e,t){const n=s.getShaderParameter(e,s.COMPILE_STATUS),r=(s.getShaderInfoLog(e)||"").trim();if(n&&r==="")return"";const o=/ERROR: 0:(\d+)/.exec(r);if(o){const a=parseInt(o[1]);return t.toUpperCase()+`

`+r+`

`+Jy(s.getShaderSource(e),a)}else return r}function e1(s,e){const t=Qy(e);return[`vec4 ${s}( vec4 value ) {`,`	return ${t[1]}( vec4( value.rgb * ${t[0]}, value.a ) );`,"}"].join(`
`)}const t1={[yp]:"Linear",[Sp]:"Reinhard",[bp]:"Cineon",[kh]:"ACESFilmic",[Ep]:"AgX",[wp]:"Neutral",[Tp]:"Custom"};function n1(s,e){const t=t1[e];return t===void 0?(yt("WebGLProgram: Unsupported toneMapping:",e),"vec3 "+s+"( vec3 color ) { return LinearToneMapping( color ); }"):"vec3 "+s+"( vec3 color ) { return "+t+"ToneMapping( color ); }"}const ul=new V;function i1(){Qt.getLuminanceCoefficients(ul);const s=ul.x.toFixed(4),e=ul.y.toFixed(4),t=ul.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${s}, ${e}, ${t} );`,"	return dot( weights, rgb );","}"].join(`
`)}function s1(s){return[s.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",s.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter($a).join(`
`)}function r1(s){const e=[];for(const t in s){const n=s[t];n!==!1&&e.push("#define "+t+" "+n)}return e.join(`
`)}function o1(s,e){const t={},n=s.getProgramParameter(e,s.ACTIVE_ATTRIBUTES);for(let i=0;i<n;i++){const r=s.getActiveAttrib(e,i),o=r.name;let a=1;r.type===s.FLOAT_MAT2&&(a=2),r.type===s.FLOAT_MAT3&&(a=3),r.type===s.FLOAT_MAT4&&(a=4),t[o]={type:r.type,location:s.getAttribLocation(e,o),locationSize:a}}return t}function $a(s){return s!==""}function Fd(s,e){const t=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return s.replace(/NUM_SUN_LIGHTS/g,e.numSunLights).replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,t).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_SUN_LIGHT_SHADOWS/g,e.numSunLightShadows).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows)}function Od(s,e){return s.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}const a1=/^[ \t]*#include +<([\w\d./]+)>/gm;function Ih(s){return s.replace(a1,l1)}const c1=new Map;function l1(s,e){let t=jt[e];if(t===void 0){const n=c1.get(e);if(n!==void 0)t=jt[n],yt('WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',e,n);else throw new Error("THREE.WebGLProgram: Can not resolve #include <"+e+">")}return Ih(t)}const u1=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function Bd(s){return s.replace(u1,h1)}function h1(s,e,t,n){let i="";for(let r=parseInt(e);r<parseInt(t);r++)i+=n.replace(/\[\s*i\s*\]/g,"[ "+r+" ]").replace(/UNROLLED_LOOP_INDEX/g,r);return i}function kd(s){let e=`precision ${s.precision} float;
	precision ${s.precision} int;
	precision ${s.precision} sampler2D;
	precision ${s.precision} samplerCube;
	precision ${s.precision} sampler3D;
	precision ${s.precision} sampler2DArray;
	precision ${s.precision} sampler2DShadow;
	precision ${s.precision} samplerCubeShadow;
	precision ${s.precision} sampler2DArrayShadow;
	precision ${s.precision} isampler2D;
	precision ${s.precision} isampler3D;
	precision ${s.precision} isamplerCube;
	precision ${s.precision} isampler2DArray;
	precision ${s.precision} usampler2D;
	precision ${s.precision} usampler3D;
	precision ${s.precision} usamplerCube;
	precision ${s.precision} usampler2DArray;
	`;return s.precision==="highp"?e+=`
#define HIGH_PRECISION`:s.precision==="mediump"?e+=`
#define MEDIUM_PRECISION`:s.precision==="lowp"&&(e+=`
#define LOW_PRECISION`),e}const f1={[gl]:"SHADOWMAP_TYPE_PCF",[Ya]:"SHADOWMAP_TYPE_VSM"};function d1(s){return f1[s.shadowMapType]||"SHADOWMAP_TYPE_BASIC"}const p1={[lo]:"ENVMAP_TYPE_CUBE",[sa]:"ENVMAP_TYPE_CUBE",[Ul]:"ENVMAP_TYPE_CUBE_UV"};function m1(s){return s.envMap===!1?"ENVMAP_TYPE_CUBE":p1[s.envMapMode]||"ENVMAP_TYPE_CUBE"}const g1={[sa]:"ENVMAP_MODE_REFRACTION"};function x1(s){return s.envMap===!1?"ENVMAP_MODE_REFLECTION":g1[s.envMapMode]||"ENVMAP_MODE_REFLECTION"}const _1={[Mp]:"ENVMAP_BLENDING_MULTIPLY",[Cm]:"ENVMAP_BLENDING_MIX",[Pm]:"ENVMAP_BLENDING_ADD"};function v1(s){return s.envMap===!1?"ENVMAP_BLENDING_NONE":_1[s.combine]||"ENVMAP_BLENDING_NONE"}function M1(s){const e=s.envMapCubeUVHeight;if(e===null)return null;const t=Math.log2(e)-2,n=1/e;return{texelWidth:1/(3*Math.max(Math.pow(2,t),112)),texelHeight:n,maxMip:t}}function y1(s,e,t,n){const i=s.getContext(),r=t.defines;let o=t.vertexShader,a=t.fragmentShader;const c=d1(t),l=m1(t),u=x1(t),f=v1(t),h=M1(t),d=s1(t),m=r1(r),M=i.createProgram();let x,g,A=t.glslVersion?"#version "+t.glslVersion+`
`:"";t.isRawShaderMaterial?(x=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,m].filter($a).join(`
`),x.length>0&&(x+=`
`),g=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,m].filter($a).join(`
`),g.length>0&&(g+=`
`)):(x=[kd(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,m,t.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",t.batching?"#define USE_BATCHING":"",t.batchingColor?"#define USE_BATCHING_COLOR":"",t.instancing?"#define USE_INSTANCING":"",t.instancingColor?"#define USE_INSTANCING_COLOR":"",t.instancingMorph?"#define USE_INSTANCING_MORPH":"",t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+u:"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.displacementMap?"#define USE_DISPLACEMENTMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.mapUv?"#define MAP_UV "+t.mapUv:"",t.alphaMapUv?"#define ALPHAMAP_UV "+t.alphaMapUv:"",t.lightMapUv?"#define LIGHTMAP_UV "+t.lightMapUv:"",t.aoMapUv?"#define AOMAP_UV "+t.aoMapUv:"",t.emissiveMapUv?"#define EMISSIVEMAP_UV "+t.emissiveMapUv:"",t.bumpMapUv?"#define BUMPMAP_UV "+t.bumpMapUv:"",t.normalMapUv?"#define NORMALMAP_UV "+t.normalMapUv:"",t.displacementMapUv?"#define DISPLACEMENTMAP_UV "+t.displacementMapUv:"",t.metalnessMapUv?"#define METALNESSMAP_UV "+t.metalnessMapUv:"",t.roughnessMapUv?"#define ROUGHNESSMAP_UV "+t.roughnessMapUv:"",t.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+t.anisotropyMapUv:"",t.clearcoatMapUv?"#define CLEARCOATMAP_UV "+t.clearcoatMapUv:"",t.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+t.clearcoatNormalMapUv:"",t.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+t.clearcoatRoughnessMapUv:"",t.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+t.iridescenceMapUv:"",t.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+t.iridescenceThicknessMapUv:"",t.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+t.sheenColorMapUv:"",t.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+t.sheenRoughnessMapUv:"",t.specularMapUv?"#define SPECULARMAP_UV "+t.specularMapUv:"",t.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+t.specularColorMapUv:"",t.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+t.specularIntensityMapUv:"",t.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+t.transmissionMapUv:"",t.thicknessMapUv?"#define THICKNESSMAP_UV "+t.thicknessMapUv:"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexNormals?"#define HAS_NORMAL":"",t.vertexColors?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.flatShading?"#define FLAT_SHADED":"",t.skinning?"#define USE_SKINNING":"",t.morphTargets?"#define USE_MORPHTARGETS":"",t.morphNormals&&t.flatShading===!1?"#define USE_MORPHNORMALS":"",t.morphColors?"#define USE_MORPHCOLORS":"",t.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+t.morphTextureStride:"",t.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+t.morphTargetsCount:"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+c:"",t.sizeAttenuation?"#define USE_SIZEATTENUATION":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",t.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter($a).join(`
`),g=[kd(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,m,t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",t.map?"#define USE_MAP":"",t.matcap?"#define USE_MATCAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+l:"",t.envMap?"#define "+u:"",t.envMap?"#define "+f:"",h?"#define CUBEUV_TEXEL_WIDTH "+h.texelWidth:"",h?"#define CUBEUV_TEXEL_HEIGHT "+h.texelHeight:"",h?"#define CUBEUV_MAX_MIP "+h.maxMip+".0":"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.packedNormalMap?"#define USE_PACKED_NORMALMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoat?"#define USE_CLEARCOAT":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.dispersion?"#define USE_DISPERSION":"",t.retroreflection?"#define USE_RETROREFLECTION":"",t.iridescence?"#define USE_IRIDESCENCE":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaTest?"#define USE_ALPHATEST":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.sheen?"#define USE_SHEEN":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors||t.instancingColor?"#define USE_COLOR":"",t.vertexAlphas||t.batchingColor?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.gradientMap?"#define USE_GRADIENTMAP":"",t.flatShading?"#define FLAT_SHADED":"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+c:"",t.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.numLightProbeGrids>0?"#define USE_LIGHT_PROBES_GRID":"",t.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",t.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",t.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",t.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",t.toneMapping!==Hs?"#define TONE_MAPPING":"",t.toneMapping!==Hs?jt.tonemapping_pars_fragment:"",t.toneMapping!==Hs?n1("toneMapping",t.toneMapping):"",t.dithering?"#define DITHERING":"",t.opaque?"#define OPAQUE":"",jt.colorspace_pars_fragment,e1("linearToOutputTexel",t.outputColorSpace),i1(),t.useDepthPacking?"#define DEPTH_PACKING "+t.depthPacking:"",`
`].filter($a).join(`
`)),o=Ih(o),o=Fd(o,t),o=Od(o,t),a=Ih(a),a=Fd(a,t),a=Od(a,t),o=Bd(o),a=Bd(a),t.isRawShaderMaterial!==!0&&(A=`#version 300 es
`,x=[d,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+x,g=["#define varying in",t.glslVersion===Pf?"":"layout(location = 0) out highp vec4 pc_fragColor;",t.glslVersion===Pf?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+g);const I=A+x+o,_=A+g+a,w=Nd(i,i.VERTEX_SHADER,I),R=Nd(i,i.FRAGMENT_SHADER,_);i.attachShader(M,w),i.attachShader(M,R),t.index0AttributeName!==void 0?i.bindAttribLocation(M,0,t.index0AttributeName):t.hasPositionAttribute===!0&&i.bindAttribLocation(M,0,"position"),i.linkProgram(M);function D(z){if(s.debug.checkShaderErrors){const K=i.getProgramInfoLog(M)||"",ee=i.getShaderInfoLog(w)||"",X=i.getShaderInfoLog(R)||"",J=K.trim(),ce=ee.trim(),se=X.trim();let Ee=!0,ue=!0;if(i.getProgramParameter(M,i.LINK_STATUS)===!1)if(Ee=!1,typeof s.debug.onShaderError=="function")s.debug.onShaderError(i,M,w,R);else{const ge=Ud(i,w,"vertex"),Se=Ud(i,R,"fragment");kt("WebGLProgram: Shader Error "+i.getError()+" - VALIDATE_STATUS "+i.getProgramParameter(M,i.VALIDATE_STATUS)+`

Material Name: `+z.name+`
Material Type: `+z.type+`

Program Info Log: `+J+`
`+ge+`
`+Se)}else J!==""?yt("WebGLProgram: Program Info Log:",J):(ce===""||se==="")&&(ue=!1);ue&&(z.diagnostics={runnable:Ee,programLog:J,vertexShader:{log:ce,prefix:x},fragmentShader:{log:se,prefix:g}})}i.deleteShader(w),i.deleteShader(R),v=new Tl(i,M),L=o1(i,M)}let v;this.getUniforms=function(){return v===void 0&&D(this),v};let L;this.getAttributes=function(){return L===void 0&&D(this),L};let O=t.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return O===!1&&(O=i.getProgramParameter(M,$y)),O},this.destroy=function(){n.releaseStatesOfProgram(this),i.deleteProgram(M),this.program=void 0},this.type=t.shaderType,this.name=t.shaderName,this.id=Zy++,this.cacheKey=e,this.usedTimes=1,this.program=M,this.vertexShader=w,this.fragmentShader=R,this}let S1=0;class b1{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e,t,n){const i=this._getShaderCacheForMaterial(e);return i.has(t)===!1&&(i.add(t),t.usedTimes++),i.has(n)===!1&&(i.add(n),n.usedTimes++),this}remove(e){const t=this.materialCache.get(e);for(const n of t)n.usedTimes--,n.usedTimes===0&&this.shaderCache.delete(n.code);return this.materialCache.delete(e),this}getVertexShaderStage(e){return this._getShaderStage(e.vertexShader)}getFragmentShaderStage(e){return this._getShaderStage(e.fragmentShader)}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){const t=this.materialCache;let n=t.get(e);return n===void 0&&(n=new Set,t.set(e,n)),n}_getShaderStage(e){const t=this.shaderCache;let n=t.get(e);return n===void 0&&(n=new T1(e),t.set(e,n)),n}}class T1{constructor(e){this.id=S1++,this.code=e,this.usedTimes=0}}function E1(s){return s===uo||s===Al||s===Rl}function w1(s,e,t,n,i,r){const o=new kp,a=new b1,c=new Set,l=[],u=new Map,f=n.logarithmicDepthBuffer;let h=n.precision;const d={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distance",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function m(v){return c.add(v),v===0?"uv":`uv${v}`}function M(v,L,O,z,K,ee){const X=z.fog,J=K.geometry,ce=v.isMeshStandardMaterial||v.isMeshLambertMaterial||v.isMeshPhongMaterial?z.environment:null,se=v.isMeshStandardMaterial||v.isMeshLambertMaterial&&!v.envMap||v.isMeshPhongMaterial&&!v.envMap,Ee=e.get(v.envMap||ce,se),ue=Ee&&Ee.mapping===Ul?Ee.image.height:null,ge=d[v.type];v.precision!==null&&(h=n.getMaxPrecision(v.precision),h!==v.precision&&yt("WebGLProgram.getParameters:",v.precision,"not supported, using",h,"instead."));const Se=J.morphAttributes.position||J.morphAttributes.normal||J.morphAttributes.color,tt=Se!==void 0?Se.length:0;let Ze=0;J.morphAttributes.position!==void 0&&(Ze=1),J.morphAttributes.normal!==void 0&&(Ze=2),J.morphAttributes.color!==void 0&&(Ze=3);let At,bt,Wt,he;if(ge){const hn=Os[ge];At=hn.vertexShader,bt=hn.fragmentShader}else{At=v.vertexShader,bt=v.fragmentShader;const hn=a.getVertexShaderStage(v),Yt=a.getFragmentShaderStage(v);a.update(v,hn,Yt),Wt=hn.id,he=Yt.id}const Me=s.getRenderTarget(),We=s.state.buffers.depth.getReversed(),lt=K.isInstancedMesh===!0,je=K.isBatchedMesh===!0,Tt=!!v.map,tn=!!v.matcap,be=!!Ee,Ae=!!v.aoMap,Re=!!v.lightMap,Pe=!!v.bumpMap&&v.wireframe===!1,Ve=!!v.normalMap,vt=!!v.displacementMap,ut=!!v.emissiveMap,Mt=!!v.metalnessMap,re=!!v.roughnessMap,F=v.anisotropy>0,xt=v.clearcoat>0,Ct=v.dispersion>0,U=v.retroreflectivity>0,y=v.iridescence>0,$=v.sheen>0,ie=v.transmission>0,de=F&&!!v.anisotropyMap,Le=xt&&!!v.clearcoatMap,ke=xt&&!!v.clearcoatNormalMap,pe=xt&&!!v.clearcoatRoughnessMap,xe=y&&!!v.iridescenceMap,Ce=y&&!!v.iridescenceThicknessMap,rt=$&&!!v.sheenColorMap,Xe=$&&!!v.sheenRoughnessMap,ze=!!v.specularMap,ot=!!v.specularColorMap,_t=!!v.specularIntensityMap,It=ie&&!!v.transmissionMap,Y=ie&&!!v.thicknessMap,Ue=!!v.gradientMap,ye=!!v.alphaMap,qe=v.alphaTest>0,Ke=!!v.alphaHash,we=!!v.extensions;let dt=Hs;v.toneMapped&&(Me===null||Me.isXRRenderTarget===!0)&&(dt=s.toneMapping);const ct={shaderID:ge,shaderType:v.type,shaderName:v.name,vertexShader:At,fragmentShader:bt,defines:v.defines,customVertexShaderID:Wt,customFragmentShaderID:he,isRawShaderMaterial:v.isRawShaderMaterial===!0,glslVersion:v.glslVersion,precision:h,batching:je,batchingColor:je&&K._colorsTexture!==null,instancing:lt,instancingColor:lt&&K.instanceColor!==null,instancingMorph:lt&&K.morphTexture!==null,outputColorSpace:Me===null?s.outputColorSpace:Me.isXRRenderTarget===!0?Me.texture.colorSpace:Qt.workingColorSpace,alphaToCoverage:!!v.alphaToCoverage,map:Tt,matcap:tn,envMap:be,envMapMode:be&&Ee.mapping,envMapCubeUVHeight:ue,aoMap:Ae,lightMap:Re,bumpMap:Pe,normalMap:Ve,displacementMap:vt,emissiveMap:ut,normalMapObjectSpace:Ve&&v.normalMapType===Um,normalMapTangentSpace:Ve&&v.normalMapType===Sh,packedNormalMap:Ve&&v.normalMapType===Sh&&E1(v.normalMap.format),metalnessMap:Mt,roughnessMap:re,anisotropy:F,anisotropyMap:de,clearcoat:xt,clearcoatMap:Le,clearcoatNormalMap:ke,clearcoatRoughnessMap:pe,dispersion:Ct,retroreflection:U,iridescence:y,iridescenceMap:xe,iridescenceThicknessMap:Ce,sheen:$,sheenColorMap:rt,sheenRoughnessMap:Xe,specularMap:ze,specularColorMap:ot,specularIntensityMap:_t,transmission:ie,transmissionMap:It,thicknessMap:Y,gradientMap:Ue,opaque:v.transparent===!1&&v.blending===Za&&v.alphaToCoverage===!1,alphaMap:ye,alphaTest:qe,alphaHash:Ke,combine:v.combine,mapUv:Tt&&m(v.map.channel),aoMapUv:Ae&&m(v.aoMap.channel),lightMapUv:Re&&m(v.lightMap.channel),bumpMapUv:Pe&&m(v.bumpMap.channel),normalMapUv:Ve&&m(v.normalMap.channel),displacementMapUv:vt&&m(v.displacementMap.channel),emissiveMapUv:ut&&m(v.emissiveMap.channel),metalnessMapUv:Mt&&m(v.metalnessMap.channel),roughnessMapUv:re&&m(v.roughnessMap.channel),anisotropyMapUv:de&&m(v.anisotropyMap.channel),clearcoatMapUv:Le&&m(v.clearcoatMap.channel),clearcoatNormalMapUv:ke&&m(v.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:pe&&m(v.clearcoatRoughnessMap.channel),iridescenceMapUv:xe&&m(v.iridescenceMap.channel),iridescenceThicknessMapUv:Ce&&m(v.iridescenceThicknessMap.channel),sheenColorMapUv:rt&&m(v.sheenColorMap.channel),sheenRoughnessMapUv:Xe&&m(v.sheenRoughnessMap.channel),specularMapUv:ze&&m(v.specularMap.channel),specularColorMapUv:ot&&m(v.specularColorMap.channel),specularIntensityMapUv:_t&&m(v.specularIntensityMap.channel),transmissionMapUv:It&&m(v.transmissionMap.channel),thicknessMapUv:Y&&m(v.thicknessMap.channel),alphaMapUv:ye&&m(v.alphaMap.channel),vertexTangents:!!J.attributes.tangent&&(Ve||F),vertexNormals:!!J.attributes.normal,vertexColors:v.vertexColors,vertexAlphas:v.vertexColors===!0&&!!J.attributes.color&&J.attributes.color.itemSize===4,pointsUvs:K.isPoints===!0&&!!J.attributes.uv&&(Tt||ye),fog:!!X,useFog:v.fog===!0,fogExp2:!!X&&X.isFogExp2,flatShading:v.wireframe===!1&&(v.flatShading===!0||J.attributes.normal===void 0&&Ve===!1&&(v.isMeshLambertMaterial||v.isMeshPhongMaterial||v.isMeshStandardMaterial||v.isMeshPhysicalMaterial)),sizeAttenuation:v.sizeAttenuation===!0,logarithmicDepthBuffer:f,reversedDepthBuffer:We,skinning:K.isSkinnedMesh===!0,hasPositionAttribute:J.attributes.position!==void 0,morphTargets:J.morphAttributes.position!==void 0,morphNormals:J.morphAttributes.normal!==void 0,morphColors:J.morphAttributes.color!==void 0,morphTargetsCount:tt,morphTextureStride:Ze,numSunLights:L.sun.length,numDirLights:L.directional.length,numPointLights:L.point.length,numSpotLights:L.spot.length,numSpotLightMaps:L.spotLightMap.length,numRectAreaLights:L.rectArea.length,numHemiLights:L.hemi.length,numSunLightShadows:L.sunShadowMap.length,numDirLightShadows:L.directionalShadowMap.length,numPointLightShadows:L.pointShadowMap.length,numSpotLightShadows:L.spotShadowMap.length,numSpotLightShadowsWithMaps:L.numSpotLightShadowsWithMaps,numLightProbes:L.numLightProbes,numLightProbeGrids:ee.length,numClippingPlanes:r.numPlanes,numClipIntersection:r.numIntersection,dithering:v.dithering,shadowMapEnabled:s.shadowMap.enabled&&O.length>0,shadowMapType:s.shadowMap.type,toneMapping:dt,decodeVideoTexture:Tt&&v.map.isVideoTexture===!0&&Qt.getTransfer(v.map.colorSpace)===Sn,decodeVideoTextureEmissive:ut&&v.emissiveMap.isVideoTexture===!0&&Qt.getTransfer(v.emissiveMap.colorSpace)===Sn,premultipliedAlpha:v.premultipliedAlpha,doubleSided:v.side===pi,flipSided:v.side===Di,useDepthPacking:v.depthPacking>=0,depthPacking:v.depthPacking||0,index0AttributeName:v.index0AttributeName,extensionClipCullDistance:we&&v.extensions.clipCullDistance===!0&&t.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(we&&v.extensions.multiDraw===!0||je)&&t.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:t.has("KHR_parallel_shader_compile"),customProgramCacheKey:v.customProgramCacheKey()};return ct.vertexUv1s=c.has(1),ct.vertexUv2s=c.has(2),ct.vertexUv3s=c.has(3),c.clear(),ct}function x(v){const L=[];if(v.shaderID?L.push(v.shaderID):(L.push(v.customVertexShaderID),L.push(v.customFragmentShaderID)),v.defines!==void 0)for(const O in v.defines)L.push(O),L.push(v.defines[O]);return v.isRawShaderMaterial===!1&&(g(L,v),A(L,v),L.push(s.outputColorSpace)),L.push(v.customProgramCacheKey),L.join()}function g(v,L){v.push(L.precision),v.push(L.outputColorSpace),v.push(L.envMapMode),v.push(L.envMapCubeUVHeight),v.push(L.mapUv),v.push(L.alphaMapUv),v.push(L.lightMapUv),v.push(L.aoMapUv),v.push(L.bumpMapUv),v.push(L.normalMapUv),v.push(L.displacementMapUv),v.push(L.emissiveMapUv),v.push(L.metalnessMapUv),v.push(L.roughnessMapUv),v.push(L.anisotropyMapUv),v.push(L.clearcoatMapUv),v.push(L.clearcoatNormalMapUv),v.push(L.clearcoatRoughnessMapUv),v.push(L.iridescenceMapUv),v.push(L.iridescenceThicknessMapUv),v.push(L.sheenColorMapUv),v.push(L.sheenRoughnessMapUv),v.push(L.specularMapUv),v.push(L.specularColorMapUv),v.push(L.specularIntensityMapUv),v.push(L.transmissionMapUv),v.push(L.thicknessMapUv),v.push(L.combine),v.push(L.fogExp2),v.push(L.sizeAttenuation),v.push(L.morphTargetsCount),v.push(L.morphAttributeCount),v.push(L.numSunLights),v.push(L.numDirLights),v.push(L.numPointLights),v.push(L.numSpotLights),v.push(L.numSpotLightMaps),v.push(L.numHemiLights),v.push(L.numRectAreaLights),v.push(L.numSunLightShadows),v.push(L.numDirLightShadows),v.push(L.numPointLightShadows),v.push(L.numSpotLightShadows),v.push(L.numSpotLightShadowsWithMaps),v.push(L.numLightProbes),v.push(L.shadowMapType),v.push(L.toneMapping),v.push(L.numClippingPlanes),v.push(L.numClipIntersection),v.push(L.depthPacking)}function A(v,L){o.disableAll(),L.instancing&&o.enable(0),L.instancingColor&&o.enable(1),L.instancingMorph&&o.enable(2),L.matcap&&o.enable(3),L.envMap&&o.enable(4),L.normalMapObjectSpace&&o.enable(5),L.normalMapTangentSpace&&o.enable(6),L.clearcoat&&o.enable(7),L.iridescence&&o.enable(8),L.alphaTest&&o.enable(9),L.vertexColors&&o.enable(10),L.vertexAlphas&&o.enable(11),L.vertexUv1s&&o.enable(12),L.vertexUv2s&&o.enable(13),L.vertexUv3s&&o.enable(14),L.vertexTangents&&o.enable(15),L.anisotropy&&o.enable(16),L.alphaHash&&o.enable(17),L.batching&&o.enable(18),L.dispersion&&o.enable(19),L.retroreflection&&o.enable(24),L.batchingColor&&o.enable(20),L.gradientMap&&o.enable(21),L.packedNormalMap&&o.enable(22),L.vertexNormals&&o.enable(23),v.push(o.mask),o.disableAll(),L.fog&&o.enable(0),L.useFog&&o.enable(1),L.flatShading&&o.enable(2),L.logarithmicDepthBuffer&&o.enable(3),L.reversedDepthBuffer&&o.enable(4),L.skinning&&o.enable(5),L.morphTargets&&o.enable(6),L.morphNormals&&o.enable(7),L.morphColors&&o.enable(8),L.premultipliedAlpha&&o.enable(9),L.shadowMapEnabled&&o.enable(10),L.doubleSided&&o.enable(11),L.flipSided&&o.enable(12),L.useDepthPacking&&o.enable(13),L.dithering&&o.enable(14),L.transmission&&o.enable(15),L.sheen&&o.enable(16),L.opaque&&o.enable(17),L.pointsUvs&&o.enable(18),L.decodeVideoTexture&&o.enable(19),L.decodeVideoTextureEmissive&&o.enable(20),L.alphaToCoverage&&o.enable(21),L.numLightProbeGrids>0&&o.enable(22),L.hasPositionAttribute&&o.enable(23),v.push(o.mask)}function I(v){const L=d[v.type];let O;if(L){const z=Os[L];O=xx.clone(z.uniforms)}else O=v.uniforms;return O}function _(v,L){let O=u.get(L);return O!==void 0?++O.usedTimes:(O=new y1(s,L,v,i),l.push(O),u.set(L,O)),O}function w(v){if(--v.usedTimes===0){const L=l.indexOf(v);l[L]=l[l.length-1],l.pop(),u.delete(v.cacheKey),v.destroy()}}function R(v){a.remove(v)}function D(){a.dispose()}return{getParameters:M,getProgramCacheKey:x,getUniforms:I,acquireProgram:_,releaseProgram:w,releaseShaderCache:R,programs:l,dispose:D}}function A1(){let s=new WeakMap;function e(o){return s.has(o)}function t(o){let a=s.get(o);return a===void 0&&(a={},s.set(o,a)),a}function n(o){s.delete(o)}function i(o,a,c){s.get(o)[a]=c}function r(){s=new WeakMap}return{has:e,get:t,remove:n,update:i,dispose:r}}function R1(s,e){return s.groupOrder!==e.groupOrder?s.groupOrder-e.groupOrder:s.renderOrder!==e.renderOrder?s.renderOrder-e.renderOrder:s.material.id!==e.material.id?s.material.id-e.material.id:s.materialVariant!==e.materialVariant?s.materialVariant-e.materialVariant:s.z!==e.z?s.z-e.z:s.id-e.id}function zd(s,e){return s.groupOrder!==e.groupOrder?s.groupOrder-e.groupOrder:s.renderOrder!==e.renderOrder?s.renderOrder-e.renderOrder:s.z!==e.z?e.z-s.z:s.id-e.id}function Hd(){const s=[];let e=0;const t=[],n=[],i=[];function r(){e=0,t.length=0,n.length=0,i.length=0}function o(h){let d=0;return h.isInstancedMesh&&(d+=2),h.isSkinnedMesh&&(d+=1),d}function a(h,d,m,M,x,g){let A=s[e];return A===void 0?(A={id:h.id,object:h,geometry:d,material:m,materialVariant:o(h),groupOrder:M,renderOrder:h.renderOrder,z:x,group:g},s[e]=A):(A.id=h.id,A.object=h,A.geometry=d,A.material=m,A.materialVariant=o(h),A.groupOrder=M,A.renderOrder=h.renderOrder,A.z=x,A.group=g),e++,A}function c(h,d,m,M,x,g,A){A.reversedDepth===!0&&(x=-x);const I=a(h,d,m,M,x,g);m.transmission>0?n.push(I):m.transparent===!0?i.push(I):t.push(I)}function l(h,d,m,M,x,g){const A=a(h,d,m,M,x,g);m.transmission>0?n.unshift(A):m.transparent===!0?i.unshift(A):t.unshift(A)}function u(h,d){t.length>1&&t.sort(h||R1),n.length>1&&n.sort(d||zd),i.length>1&&i.sort(d||zd)}function f(){for(let h=e,d=s.length;h<d;h++){const m=s[h];if(m.id===null)break;m.id=null,m.object=null,m.geometry=null,m.material=null,m.group=null}}return{opaque:t,transmissive:n,transparent:i,init:r,push:c,unshift:l,finish:f,sort:u}}function C1(){let s=new WeakMap;function e(n,i){const r=s.get(n);let o;return r===void 0?(o=new Hd,s.set(n,[o])):i>=r.length?(o=new Hd,r.push(o)):o=r[i],o}function t(){s=new WeakMap}return{get:e,dispose:t}}function P1(){const s={};return{get:function(e){if(s[e.id]!==void 0)return s[e.id];let t;switch(e.type){case"SunLight":case"DirectionalLight":t={direction:new V,color:new it};break;case"SpotLight":t={position:new V,direction:new V,color:new it,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":t={position:new V,color:new it,distance:0,decay:0};break;case"HemisphereLight":t={direction:new V,skyColor:new it,groundColor:new it};break;case"RectAreaLight":t={color:new it,position:new V,halfWidth:new V,halfHeight:new V};break}return s[e.id]=t,t}}}function I1(){const s={};return{get:function(e){if(s[e.id]!==void 0)return s[e.id];let t;switch(e.type){case"SunLight":case"DirectionalLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Ye};break;case"SpotLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Ye};break;case"PointLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Ye,shadowCameraNear:1,shadowCameraFar:1e3};break}return s[e.id]=t,t}}}let L1=0;function N1(s,e){return(e.castShadow?2:0)-(s.castShadow?2:0)+(e.map?1:0)-(s.map?1:0)}function D1(s){const e=new P1,t=I1(),n={version:0,hash:{sunLength:-1,directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numSunShadows:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],sun:[],sunShadow:[],sunShadowMap:[],sunShadowMatrix:[],sunShadowCascade:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let l=0;l<9;l++)n.probe.push(new V);const i=new V,r=new zt,o=new zt;function a(l){let u=0,f=0,h=0;for(let K=0;K<9;K++)n.probe[K].set(0,0,0);let d=0,m=0,M=0,x=0,g=0,A=0,I=0,_=0,w=0,R=0,D=0,v=0,L=0,O=0;l.sort(N1);for(let K=0,ee=l.length;K<ee;K++){const X=l[K],J=X.color,ce=X.intensity,se=X.distance;let Ee=null;if(X.shadow&&X.shadow.map&&(X.shadow.map.texture.format===uo?Ee=X.shadow.map.texture:Ee=X.shadow.map.depthTexture||X.shadow.map.texture),X.isAmbientLight)u+=J.r*ce,f+=J.g*ce,h+=J.b*ce;else if(X.isLightProbe){for(let ue=0;ue<9;ue++)n.probe[ue].addScaledVector(X.sh.coefficients[ue],ce);O++}else if(X.isSunLight){const ue=e.get(X);if(ue.color.copy(X.color).multiplyScalar(X.intensity),X.castShadow){const ge=X.shadow,Se=t.get(X);Se.shadowIntensity=ge.intensity,Se.shadowBias=ge.bias,Se.shadowNormalBias=ge.normalBias,Se.shadowRadius=ge.radius,Se.shadowMapSize.copy(ge.mapSize).multiply(ge.getFrameExtents()),n.sunShadow[m]=Se,n.sunShadowMap[m]=Ee;const tt=ge.getViewportCount();for(let Ze=0;Ze<tt;Ze++)n.sunShadowMatrix[M+Ze]=ge.getMatrix(Ze),n.sunShadowCascade[M+Ze]=ge._cascadeData[Ze];M+=tt,m++}n.sun[d]=ue,d++}else if(X.isDirectionalLight){const ue=e.get(X);if(ue.color.copy(X.color).multiplyScalar(X.intensity),X.castShadow){const ge=X.shadow,Se=t.get(X);Se.shadowIntensity=ge.intensity,Se.shadowBias=ge.bias,Se.shadowNormalBias=ge.normalBias,Se.shadowRadius=ge.radius,Se.shadowMapSize=ge.mapSize,n.directionalShadow[x]=Se,n.directionalShadowMap[x]=Ee,n.directionalShadowMatrix[x]=X.shadow.matrix,w++}n.directional[x]=ue,x++}else if(X.isSpotLight){const ue=e.get(X);ue.position.setFromMatrixPosition(X.matrixWorld),ue.color.copy(J).multiplyScalar(ce),ue.distance=se,ue.coneCos=Math.cos(X.angle),ue.penumbraCos=Math.cos(X.angle*(1-X.penumbra)),ue.decay=X.decay,n.spot[A]=ue;const ge=X.shadow;if(X.map&&(n.spotLightMap[v]=X.map,v++,ge.updateMatrices(X),X.castShadow&&L++),n.spotLightMatrix[A]=ge.matrix,X.castShadow){const Se=t.get(X);Se.shadowIntensity=ge.intensity,Se.shadowBias=ge.bias,Se.shadowNormalBias=ge.normalBias,Se.shadowRadius=ge.radius,Se.shadowMapSize=ge.mapSize,n.spotShadow[A]=Se,n.spotShadowMap[A]=Ee,D++}A++}else if(X.isRectAreaLight){const ue=e.get(X);ue.color.copy(J).multiplyScalar(ce),ue.halfWidth.set(X.width*.5,0,0),ue.halfHeight.set(0,X.height*.5,0),n.rectArea[I]=ue,I++}else if(X.isPointLight){const ue=e.get(X);if(ue.color.copy(X.color).multiplyScalar(X.intensity),ue.distance=X.distance,ue.decay=X.decay,X.castShadow){const ge=X.shadow,Se=t.get(X);Se.shadowIntensity=ge.intensity,Se.shadowBias=ge.bias,Se.shadowNormalBias=ge.normalBias,Se.shadowRadius=ge.radius,Se.shadowMapSize=ge.mapSize,Se.shadowCameraNear=ge.camera.near,Se.shadowCameraFar=ge.camera.far,n.pointShadow[g]=Se,n.pointShadowMap[g]=Ee,n.pointShadowMatrix[g]=X.shadow.matrix,R++}n.point[g]=ue,g++}else if(X.isHemisphereLight){const ue=e.get(X);ue.skyColor.copy(X.color).multiplyScalar(ce),ue.groundColor.copy(X.groundColor).multiplyScalar(ce),n.hemi[_]=ue,_++}}I>0&&(s.has("OES_texture_float_linear")===!0?(n.rectAreaLTC1=et.LTC_FLOAT_1,n.rectAreaLTC2=et.LTC_FLOAT_2):(n.rectAreaLTC1=et.LTC_HALF_1,n.rectAreaLTC2=et.LTC_HALF_2)),n.ambient[0]=u,n.ambient[1]=f,n.ambient[2]=h;const z=n.hash;(z.sunLength!==d||z.directionalLength!==x||z.pointLength!==g||z.spotLength!==A||z.rectAreaLength!==I||z.hemiLength!==_||z.numSunShadows!==m||z.numDirectionalShadows!==w||z.numPointShadows!==R||z.numSpotShadows!==D||z.numSpotMaps!==v||z.numLightProbes!==O)&&(n.sun.length=d,n.directional.length=x,n.spot.length=A,n.rectArea.length=I,n.point.length=g,n.hemi.length=_,n.sunShadow.length=m,n.sunShadowMap.length=m,n.sunShadowMatrix.length=M,n.sunShadowCascade.length=M,n.directionalShadow.length=w,n.directionalShadowMap.length=w,n.directionalShadowMatrix.length=w,n.pointShadow.length=R,n.pointShadowMap.length=R,n.pointShadowMatrix.length=R,n.spotShadow.length=D,n.spotShadowMap.length=D,n.spotLightMatrix.length=D+v-L,n.spotLightMap.length=v,n.numSpotLightShadowsWithMaps=L,n.numLightProbes=O,z.sunLength=d,z.directionalLength=x,z.pointLength=g,z.spotLength=A,z.rectAreaLength=I,z.hemiLength=_,z.numSunShadows=m,z.numDirectionalShadows=w,z.numPointShadows=R,z.numSpotShadows=D,z.numSpotMaps=v,z.numLightProbes=O,n.version=L1++)}function c(l,u){let f=0,h=0,d=0,m=0,M=0,x=0;const g=u.matrixWorldInverse;for(let A=0,I=l.length;A<I;A++){const _=l[A];if(_.isSunLight){const w=n.sun[f];w.direction.setFromMatrixPosition(_.matrixWorld),w.direction.transformDirection(g),f++}else if(_.isDirectionalLight){const w=n.directional[h];w.direction.setFromMatrixPosition(_.matrixWorld),i.setFromMatrixPosition(_.target.matrixWorld),w.direction.sub(i),w.direction.transformDirection(g),h++}else if(_.isSpotLight){const w=n.spot[m];w.position.setFromMatrixPosition(_.matrixWorld),w.position.applyMatrix4(g),w.direction.setFromMatrixPosition(_.matrixWorld),i.setFromMatrixPosition(_.target.matrixWorld),w.direction.sub(i),w.direction.transformDirection(g),m++}else if(_.isRectAreaLight){const w=n.rectArea[M];w.position.setFromMatrixPosition(_.matrixWorld),w.position.applyMatrix4(g),o.identity(),r.copy(_.matrixWorld),r.premultiply(g),o.extractRotation(r),w.halfWidth.set(_.width*.5,0,0),w.halfHeight.set(0,_.height*.5,0),w.halfWidth.applyMatrix4(o),w.halfHeight.applyMatrix4(o),M++}else if(_.isPointLight){const w=n.point[d];w.position.setFromMatrixPosition(_.matrixWorld),w.position.applyMatrix4(g),d++}else if(_.isHemisphereLight){const w=n.hemi[x];w.direction.setFromMatrixPosition(_.matrixWorld),w.direction.transformDirection(g),x++}}}return{setup:a,setupView:c,state:n}}function Vd(s){const e=new D1(s),t=[],n=[],i=[];function r(h){f.camera=h,t.length=0,n.length=0,i.length=0}function o(h){t.push(h)}function a(h){n.push(h)}function c(h){i.push(h)}function l(){e.setup(t)}function u(h){e.setupView(t,h)}const f={lightsArray:t,shadowsArray:n,lightProbeGridArray:i,camera:null,lights:e,transmissionRenderTarget:{},textureUnits:0};return{init:r,state:f,setupLights:l,setupLightsView:u,pushLight:o,pushShadow:a,pushLightProbeGrid:c}}function U1(s){let e=new WeakMap;function t(i,r=0){const o=e.get(i);let a;return o===void 0?(a=new Vd(s),e.set(i,[a])):r>=o.length?(a=new Vd(s),o.push(a)):a=o[r],a}function n(){e=new WeakMap}return{get:t,dispose:n}}const F1=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,O1=`uniform sampler2D shadow_pass;
uniform vec2 resolution;
uniform float radius;
void main() {
	const float samples = float( VSM_SAMPLES );
	float mean = 0.0;
	float squared_mean = 0.0;
	float uvStride = samples <= 1.0 ? 0.0 : 2.0 / ( samples - 1.0 );
	float uvStart = samples <= 1.0 ? 0.0 : - 1.0;
	for ( float i = 0.0; i < samples; i ++ ) {
		float uvOffset = uvStart + i * uvStride;
		#ifdef HORIZONTAL_PASS
			vec2 distribution = texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( uvOffset, 0.0 ) * radius ) / resolution ).rg;
			mean += distribution.x;
			squared_mean += distribution.y * distribution.y + distribution.x * distribution.x;
		#else
			float depth = texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( 0.0, uvOffset ) * radius ) / resolution ).r;
			mean += depth;
			squared_mean += depth * depth;
		#endif
	}
	mean = mean / samples;
	squared_mean = squared_mean / samples;
	float std_dev = sqrt( max( 0.0, squared_mean - mean * mean ) );
	gl_FragColor = vec4( mean, std_dev, 0.0, 1.0 );
}`,B1=[new V(1,0,0),new V(-1,0,0),new V(0,1,0),new V(0,-1,0),new V(0,0,1),new V(0,0,-1)],k1=[new V(0,-1,0),new V(0,-1,0),new V(0,0,1),new V(0,0,-1),new V(0,-1,0),new V(0,-1,0)],Gd=new zt,Va=new V,Iu=new V;function z1(s,e,t){let n=new ef;const i=new Ye,r=new Ye,o=new Cn,a=new yx,c=new Sx,l={},u=t.maxTextureSize,f={[Ir]:Di,[Di]:Ir,[pi]:pi},h=new ji({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new Ye},radius:{value:4}},vertexShader:F1,fragmentShader:O1}),d=h.clone();d.defines.HORIZONTAL_PASS=1;const m=new Rn;m.setAttribute("position",new Fn(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const M=new Ut(m,h),x=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=gl;let g=this.type;this.render=function(R,D,v){if(x.enabled===!1||x.autoUpdate===!1&&x.needsUpdate===!1||R.length===0)return;this.type===xp&&(yt("WebGLShadowMap: PCFSoftShadowMap has been removed. Using PCFShadowMap instead."),this.type=gl);const L=s.getRenderTarget(),O=s.getActiveCubeFace(),z=s.getActiveMipmapLevel(),K=s.state;K.setBlending(or),K.buffers.depth.getReversed()===!0?K.buffers.color.setClear(0,0,0,0):K.buffers.color.setClear(1,1,1,1),K.buffers.depth.setTest(!0),K.setScissorTest(!1);const ee=g!==this.type;ee&&D.traverse(function(X){X.material&&(Array.isArray(X.material)?X.material.forEach(J=>J.needsUpdate=!0):X.material.needsUpdate=!0)});for(let X=0,J=R.length;X<J;X++){const ce=R[X],se=ce.shadow;if(se===void 0){yt("WebGLShadowMap:",ce,"has no shadow.");continue}if(se.autoUpdate===!1&&se.needsUpdate===!1)continue;i.copy(se.mapSize);const Ee=se.getFrameExtents();i.multiply(Ee),r.copy(se.mapSize),(i.x>u||i.y>u)&&(i.x>u&&(r.x=Math.floor(u/Ee.x),i.x=r.x*Ee.x,se.mapSize.x=r.x),i.y>u&&(r.y=Math.floor(u/Ee.y),i.y=r.y*Ee.y,se.mapSize.y=r.y));const ue=s.state.buffers.depth.getReversed();if(se.camera._reversedDepth=ue,se.map===null||ee===!0){if(se.map!==null&&(se.map.depthTexture!==null&&(se.map.depthTexture.dispose(),se.map.depthTexture=null),se.map.dispose()),this.type===Ya){if(ce.isPointLight){yt("WebGLShadowMap: VSM shadow maps are not supported for PointLights. Use PCF or BasicShadowMap instead.");continue}se.map=new ys(i.x,i.y,{format:uo,type:Ws,minFilter:li,magFilter:li,generateMipmaps:!1}),se.map.texture.name=ce.name+".shadowMap",se.map.depthTexture=new uc(i.x,i.y,is),se.map.depthTexture.name=ce.name+".shadowMapDepth",se.map.depthTexture.format=cr,se.map.depthTexture.compareFunction=null,se.map.depthTexture.minFilter=ci,se.map.depthTexture.magFilter=ci}else ce.isPointLight?(se.map=new p0(i.x),se.map.depthTexture=new Og(i.x,Gs)):(se.map=new ys(i.x,i.y),se.map.depthTexture=new uc(i.x,i.y,Gs)),se.map.depthTexture.name=ce.name+".shadowMap",se.map.depthTexture.format=cr,this.type===gl?(se.map.depthTexture.compareFunction=ue?Kh:Yh,se.map.depthTexture.minFilter=li,se.map.depthTexture.magFilter=li):(se.map.depthTexture.compareFunction=null,se.map.depthTexture.minFilter=ci,se.map.depthTexture.magFilter=ci);se.camera.updateProjectionMatrix()}se.map.isWebGLCubeRenderTarget!==!0&&(se.map.width!==i.x||se.map.height!==i.y)&&se.map.setSize(i.x,i.y);const ge=se.map.isWebGLCubeRenderTarget?6:se.getViewportCount();ce.isPointLight!==!0&&se.updateMatrices(ce,v);for(let Se=0;Se<ge;Se++){const tt=se.getCamera(Se);if(ce.isPointLight){const Ze=se.camera,At=se.matrix,bt=ce.distance||Ze.far;bt!==Ze.far&&(Ze.far=bt,Ze.updateProjectionMatrix()),Va.setFromMatrixPosition(ce.matrixWorld),Ze.position.copy(Va),Iu.copy(Ze.position),Iu.add(B1[Se]),Ze.up.copy(k1[Se]),Ze.lookAt(Iu),Ze.updateMatrixWorld(),At.makeTranslation(-Va.x,-Va.y,-Va.z),Gd.multiplyMatrices(Ze.projectionMatrix,Ze.matrixWorldInverse),se._frustum.setFromProjectionMatrix(Gd,Ze.coordinateSystem,Ze.reversedDepth)}if(se.map.isWebGLCubeRenderTarget)s.setRenderTarget(se.map,Se),s.clear();else{Se===0&&(s.setRenderTarget(se.map),s.clear());const Ze=se.getViewport(Se);o.set(r.x*Ze.x,r.y*Ze.y,r.x*Ze.z,r.y*Ze.w),K.viewport(o)}n=se.getFrustum(Se),_(D,v,tt,ce,this.type)}se.isPointLightShadow!==!0&&this.type===Ya&&A(se,v),se.needsUpdate=!1}g=this.type,x.needsUpdate=!1,s.setRenderTarget(L,O,z)};function A(R,D){const v=e.update(M);h.defines.VSM_SAMPLES!==R.blurSamples&&(h.defines.VSM_SAMPLES=R.blurSamples,d.defines.VSM_SAMPLES=R.blurSamples,h.needsUpdate=!0,d.needsUpdate=!0),R.mapPass===null?R.mapPass=new ys(i.x,i.y,{format:uo,type:Ws}):(R.mapPass.width!==R.map.width||R.mapPass.height!==R.map.height)&&R.mapPass.setSize(R.map.width,R.map.height),h.uniforms.shadow_pass.value=R.map.depthTexture,h.uniforms.resolution.value.set(R.map.width,R.map.height),h.uniforms.radius.value=R.radius,s.setRenderTarget(R.mapPass),s.clear(),s.renderBufferDirect(D,null,v,h,M,null),d.uniforms.shadow_pass.value=R.mapPass.texture,d.uniforms.resolution.value.set(R.map.width,R.map.height),d.uniforms.radius.value=R.radius,s.setRenderTarget(R.map),s.clear(),s.renderBufferDirect(D,null,v,d,M,null)}function I(R,D,v,L){let O=null;const z=v.isPointLight===!0?R.customDistanceMaterial:R.customDepthMaterial;if(z!==void 0)O=z;else if(O=v.isPointLight===!0?c:a,s.localClippingEnabled&&D.clipShadows===!0&&Array.isArray(D.clippingPlanes)&&D.clippingPlanes.length!==0||D.displacementMap&&D.displacementScale!==0||D.alphaMap&&D.alphaTest>0||D.map&&D.alphaTest>0||D.alphaToCoverage===!0){const K=O.uuid,ee=D.uuid;let X=l[K];X===void 0&&(X={},l[K]=X);let J=X[ee];J===void 0&&(J=O.clone(),X[ee]=J,D.addEventListener("dispose",w)),O=J}if(O.visible=D.visible,O.wireframe=D.wireframe,L===Ya?O.side=D.shadowSide!==null?D.shadowSide:D.side:O.side=D.shadowSide!==null?D.shadowSide:f[D.side],O.alphaMap=D.alphaMap,O.alphaTest=D.alphaToCoverage===!0?.5:D.alphaTest,O.map=D.map,O.clipShadows=D.clipShadows,O.clippingPlanes=D.clippingPlanes,O.clipIntersection=D.clipIntersection,O.displacementMap=D.displacementMap,O.displacementScale=D.displacementScale,O.displacementBias=D.displacementBias,O.wireframeLinewidth=D.wireframeLinewidth,O.linewidth=D.linewidth,v.isPointLight===!0&&O.isMeshDistanceMaterial===!0){const K=s.properties.get(O);K.light=v}return O}function _(R,D,v,L,O){if(R.visible===!1)return;if(R.layers.test(D.layers)&&(R.isMesh||R.isLine||R.isPoints)&&(R.castShadow||R.receiveShadow&&O===Ya)&&(!R.frustumCulled||R.intersectsFrustum(n))){R.modelViewMatrix.multiplyMatrices(v.matrixWorldInverse,R.matrixWorld);const ee=e.update(R),X=R.material;if(Array.isArray(X)){const J=ee.groups;for(let ce=0,se=J.length;ce<se;ce++){const Ee=J[ce],ue=X[Ee.materialIndex];if(ue&&ue.visible){const ge=I(R,ue,L,O);R.onBeforeShadow(s,R,D,v,ee,ge,Ee),s.renderBufferDirect(v,null,ee,ge,R,Ee),R.onAfterShadow(s,R,D,v,ee,ge,Ee)}}}else if(X.visible){const J=I(R,X,L,O);R.onBeforeShadow(s,R,D,v,ee,J,null),s.renderBufferDirect(v,null,ee,J,R,null),R.onAfterShadow(s,R,D,v,ee,J,null)}}const K=R.children;for(let ee=0,X=K.length;ee<X;ee++)_(K[ee],D,v,L,O)}function w(R){R.target.removeEventListener("dispose",w);for(const v in l){const L=l[v],O=R.target.uuid;O in L&&(L[O].dispose(),delete L[O])}}}function H1(s,e){function t(){let Y=!1;const Ue=new Cn;let ye=null;const qe=new Cn(0,0,0,0);return{setMask:function(Ke){ye!==Ke&&!Y&&(s.colorMask(Ke,Ke,Ke,Ke),ye=Ke)},setLocked:function(Ke){Y=Ke},setClear:function(Ke,we,dt,ct,hn){hn===!0&&(Ke*=ct,we*=ct,dt*=ct),Ue.set(Ke,we,dt,ct),qe.equals(Ue)===!1&&(s.clearColor(Ke,we,dt,ct),qe.copy(Ue))},reset:function(){Y=!1,ye=null,qe.set(-1,0,0,0)}}}function n(){let Y=!1,Ue=!1,ye=null,qe=null,Ke=null;return{setReversed:function(we){if(Ue!==we){const dt=e.get("EXT_clip_control");we?dt.clipControlEXT(dt.LOWER_LEFT_EXT,dt.ZERO_TO_ONE_EXT):dt.clipControlEXT(dt.LOWER_LEFT_EXT,dt.NEGATIVE_ONE_TO_ONE_EXT),Ue=we;const ct=Ke;Ke=null,this.setClear(ct)}},getReversed:function(){return Ue},setTest:function(we){we?Me(s.DEPTH_TEST):We(s.DEPTH_TEST)},setMask:function(we){ye!==we&&!Y&&(s.depthMask(we),ye=we)},setFunc:function(we){if(Ue&&(we=Ym[we]),qe!==we){switch(we){case Bu:s.depthFunc(s.NEVER);break;case ku:s.depthFunc(s.ALWAYS);break;case zu:s.depthFunc(s.LESS);break;case nc:s.depthFunc(s.LEQUAL);break;case Hu:s.depthFunc(s.EQUAL);break;case Vu:s.depthFunc(s.GEQUAL);break;case Gu:s.depthFunc(s.GREATER);break;case Wu:s.depthFunc(s.NOTEQUAL);break;default:s.depthFunc(s.LEQUAL)}qe=we}},setLocked:function(we){Y=we},setClear:function(we){Ke!==we&&(Ke=we,Ue&&(we=1-we),s.clearDepth(we))},reset:function(){Y=!1,ye=null,qe=null,Ke=null,Ue=!1}}}function i(){let Y=!1,Ue=null,ye=null,qe=null,Ke=null,we=null,dt=null,ct=null,hn=null;return{setTest:function(Yt){Y||(Yt?Me(s.STENCIL_TEST):We(s.STENCIL_TEST))},setMask:function(Yt){Ue!==Yt&&!Y&&(s.stencilMask(Yt),Ue=Yt)},setFunc:function(Yt,Ai,bi){(ye!==Yt||qe!==Ai||Ke!==bi)&&(s.stencilFunc(Yt,Ai,bi),ye=Yt,qe=Ai,Ke=bi)},setOp:function(Yt,Ai,bi){(we!==Yt||dt!==Ai||ct!==bi)&&(s.stencilOp(Yt,Ai,bi),we=Yt,dt=Ai,ct=bi)},setLocked:function(Yt){Y=Yt},setClear:function(Yt){hn!==Yt&&(s.clearStencil(Yt),hn=Yt)},reset:function(){Y=!1,Ue=null,ye=null,qe=null,Ke=null,we=null,dt=null,ct=null,hn=null}}}const r=new t,o=new n,a=new i,c=new WeakMap,l=new WeakMap;let u={},f={},h={},d=new WeakMap,m=[],M=null,x=!1,g=null,A=null,I=null,_=null,w=null,R=null,D=null,v=new it(0,0,0),L=0,O=!1,z=null,K=null,ee=null,X=null,J=null;const ce=s.getParameter(s.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let se=!1,Ee=0;const ue=s.getParameter(s.VERSION);ue.indexOf("WebGL")!==-1?(Ee=parseFloat(/^WebGL (\d)/.exec(ue)[1]),se=Ee>=1):ue.indexOf("OpenGL ES")!==-1&&(Ee=parseFloat(/^OpenGL ES (\d)/.exec(ue)[1]),se=Ee>=2);let ge=null,Se={};const tt=s.getParameter(s.SCISSOR_BOX),Ze=s.getParameter(s.VIEWPORT),At=new Cn().fromArray(tt),bt=new Cn().fromArray(Ze);function Wt(Y,Ue,ye,qe){const Ke=new Uint8Array(4),we=s.createTexture();s.bindTexture(Y,we),s.texParameteri(Y,s.TEXTURE_MIN_FILTER,s.NEAREST),s.texParameteri(Y,s.TEXTURE_MAG_FILTER,s.NEAREST);for(let dt=0;dt<ye;dt++)Y===s.TEXTURE_3D||Y===s.TEXTURE_2D_ARRAY?s.texImage3D(Ue,0,s.RGBA,1,1,qe,0,s.RGBA,s.UNSIGNED_BYTE,Ke):s.texImage2D(Ue+dt,0,s.RGBA,1,1,0,s.RGBA,s.UNSIGNED_BYTE,Ke);return we}const he={};he[s.TEXTURE_2D]=Wt(s.TEXTURE_2D,s.TEXTURE_2D,1),he[s.TEXTURE_CUBE_MAP]=Wt(s.TEXTURE_CUBE_MAP,s.TEXTURE_CUBE_MAP_POSITIVE_X,6),he[s.TEXTURE_2D_ARRAY]=Wt(s.TEXTURE_2D_ARRAY,s.TEXTURE_2D_ARRAY,1,1),he[s.TEXTURE_3D]=Wt(s.TEXTURE_3D,s.TEXTURE_3D,1,1),r.setClear(0,0,0,1),o.setClear(1),a.setClear(0),Me(s.DEPTH_TEST),o.setFunc(nc),Pe(!1),Ve(yf),Me(s.CULL_FACE),Ae(or);function Me(Y){u[Y]!==!0&&(s.enable(Y),u[Y]=!0)}function We(Y){u[Y]!==!1&&(s.disable(Y),u[Y]=!1)}function lt(Y,Ue){return h[Y]!==Ue?(s.bindFramebuffer(Y,Ue),h[Y]=Ue,Y===s.DRAW_FRAMEBUFFER&&(h[s.FRAMEBUFFER]=Ue),Y===s.FRAMEBUFFER&&(h[s.DRAW_FRAMEBUFFER]=Ue),!0):!1}function je(Y,Ue){let ye=m,qe=!1;if(Y){ye=d.get(Ue),ye===void 0&&(ye=[],d.set(Ue,ye));const Ke=Y.textures;if(ye.length!==Ke.length||ye[0]!==s.COLOR_ATTACHMENT0){for(let we=0,dt=Ke.length;we<dt;we++)ye[we]=s.COLOR_ATTACHMENT0+we;ye.length=Ke.length,qe=!0}}else ye[0]!==s.BACK&&(ye[0]=s.BACK,qe=!0);qe&&s.drawBuffers(ye)}function Tt(Y){return M!==Y?(s.useProgram(Y),M=Y,!0):!1}const tn={[Zo]:s.FUNC_ADD,[fm]:s.FUNC_SUBTRACT,[dm]:s.FUNC_REVERSE_SUBTRACT};tn[pm]=s.MIN,tn[mm]=s.MAX;const be={[gm]:s.ZERO,[xm]:s.ONE,[_m]:s.SRC_COLOR,[_p]:s.SRC_ALPHA,[Tm]:s.SRC_ALPHA_SATURATE,[Sm]:s.DST_COLOR,[Mm]:s.DST_ALPHA,[vm]:s.ONE_MINUS_SRC_COLOR,[vp]:s.ONE_MINUS_SRC_ALPHA,[bm]:s.ONE_MINUS_DST_COLOR,[ym]:s.ONE_MINUS_DST_ALPHA,[Em]:s.CONSTANT_COLOR,[wm]:s.ONE_MINUS_CONSTANT_COLOR,[Am]:s.CONSTANT_ALPHA,[Rm]:s.ONE_MINUS_CONSTANT_ALPHA};function Ae(Y,Ue,ye,qe,Ke,we,dt,ct,hn,Yt){if(Y===or){x===!0&&(We(s.BLEND),x=!1);return}if(x===!1&&(Me(s.BLEND),x=!0),Y!==hm){if(Y!==g||Yt!==O){if((A!==Zo||w!==Zo)&&(s.blendEquation(s.FUNC_ADD),A=Zo,w=Zo),Yt)switch(Y){case Za:s.blendFuncSeparate(s.ONE,s.ONE_MINUS_SRC_ALPHA,s.ONE,s.ONE_MINUS_SRC_ALPHA);break;case Sf:s.blendFunc(s.ONE,s.ONE);break;case bf:s.blendFuncSeparate(s.ZERO,s.ONE_MINUS_SRC_COLOR,s.ZERO,s.ONE);break;case Tf:s.blendFuncSeparate(s.DST_COLOR,s.ONE_MINUS_SRC_ALPHA,s.ZERO,s.ONE);break;default:kt("WebGLState: Invalid blending: ",Y);break}else switch(Y){case Za:s.blendFuncSeparate(s.SRC_ALPHA,s.ONE_MINUS_SRC_ALPHA,s.ONE,s.ONE_MINUS_SRC_ALPHA);break;case Sf:s.blendFuncSeparate(s.SRC_ALPHA,s.ONE,s.ONE,s.ONE);break;case bf:kt("WebGLState: SubtractiveBlending requires material.premultipliedAlpha = true");break;case Tf:kt("WebGLState: MultiplyBlending requires material.premultipliedAlpha = true");break;default:kt("WebGLState: Invalid blending: ",Y);break}I=null,_=null,R=null,D=null,v.set(0,0,0),L=0,g=Y,O=Yt}return}Ke=Ke||Ue,we=we||ye,dt=dt||qe,(Ue!==A||Ke!==w)&&(s.blendEquationSeparate(tn[Ue],tn[Ke]),A=Ue,w=Ke),(ye!==I||qe!==_||we!==R||dt!==D)&&(s.blendFuncSeparate(be[ye],be[qe],be[we],be[dt]),I=ye,_=qe,R=we,D=dt),(ct.equals(v)===!1||hn!==L)&&(s.blendColor(ct.r,ct.g,ct.b,hn),v.copy(ct),L=hn),g=Y,O=!1}function Re(Y,Ue){Y.side===pi?We(s.CULL_FACE):Me(s.CULL_FACE);let ye=Y.side===Di;Ue&&(ye=!ye),Pe(ye),Y.blending===Za&&Y.transparent===!1?Ae(or):Ae(Y.blending,Y.blendEquation,Y.blendSrc,Y.blendDst,Y.blendEquationAlpha,Y.blendSrcAlpha,Y.blendDstAlpha,Y.blendColor,Y.blendAlpha,Y.premultipliedAlpha),o.setFunc(Y.depthFunc),o.setTest(Y.depthTest),o.setMask(Y.depthWrite),r.setMask(Y.colorWrite);const qe=Y.stencilWrite;a.setTest(qe),qe&&(a.setMask(Y.stencilWriteMask),a.setFunc(Y.stencilFunc,Y.stencilRef,Y.stencilFuncMask),a.setOp(Y.stencilFail,Y.stencilZFail,Y.stencilZPass)),ut(Y.polygonOffset,Y.polygonOffsetFactor,Y.polygonOffsetUnits),Y.alphaToCoverage===!0?Me(s.SAMPLE_ALPHA_TO_COVERAGE):We(s.SAMPLE_ALPHA_TO_COVERAGE)}function Pe(Y){z!==Y&&(Y?s.frontFace(s.CW):s.frontFace(s.CCW),z=Y)}function Ve(Y){Y!==lm?(Me(s.CULL_FACE),Y!==K&&(Y===yf?s.cullFace(s.BACK):Y===um?s.cullFace(s.FRONT):s.cullFace(s.FRONT_AND_BACK))):We(s.CULL_FACE),K=Y}function vt(Y){Y!==ee&&(se&&s.lineWidth(Y),ee=Y)}function ut(Y,Ue,ye){Y?(Me(s.POLYGON_OFFSET_FILL),(X!==Ue||J!==ye)&&(X=Ue,J=ye,o.getReversed()&&(Ue=-Ue),s.polygonOffset(Ue,ye))):We(s.POLYGON_OFFSET_FILL)}function Mt(Y){Y?Me(s.SCISSOR_TEST):We(s.SCISSOR_TEST)}function re(Y){Y===void 0&&(Y=s.TEXTURE0+ce-1),ge!==Y&&(s.activeTexture(Y),ge=Y)}function F(Y,Ue,ye){ye===void 0&&(ge===null?ye=s.TEXTURE0+ce-1:ye=ge);let qe=Se[ye];qe===void 0&&(qe={type:void 0,texture:void 0},Se[ye]=qe),(qe.type!==Y||qe.texture!==Ue)&&(ge!==ye&&(s.activeTexture(ye),ge=ye),s.bindTexture(Y,Ue||he[Y]),qe.type=Y,qe.texture=Ue)}function xt(){const Y=Se[ge];Y!==void 0&&Y.type!==void 0&&(s.bindTexture(Y.type,null),Y.type=void 0,Y.texture=void 0)}function Ct(){try{s.compressedTexImage2D(...arguments)}catch(Y){kt("WebGLState:",Y)}}function U(){try{s.compressedTexImage3D(...arguments)}catch(Y){kt("WebGLState:",Y)}}function y(){try{s.texSubImage2D(...arguments)}catch(Y){kt("WebGLState:",Y)}}function $(){try{s.texSubImage3D(...arguments)}catch(Y){kt("WebGLState:",Y)}}function ie(){try{s.compressedTexSubImage2D(...arguments)}catch(Y){kt("WebGLState:",Y)}}function de(){try{s.compressedTexSubImage3D(...arguments)}catch(Y){kt("WebGLState:",Y)}}function Le(){try{s.texStorage2D(...arguments)}catch(Y){kt("WebGLState:",Y)}}function ke(){try{s.texStorage3D(...arguments)}catch(Y){kt("WebGLState:",Y)}}function pe(){try{s.texImage2D(...arguments)}catch(Y){kt("WebGLState:",Y)}}function xe(){try{s.texImage3D(...arguments)}catch(Y){kt("WebGLState:",Y)}}function Ce(Y){return f[Y]!==void 0?f[Y]:s.getParameter(Y)}function rt(Y,Ue){f[Y]!==Ue&&(s.pixelStorei(Y,Ue),f[Y]=Ue)}function Xe(Y){At.equals(Y)===!1&&(s.scissor(Y.x,Y.y,Y.z,Y.w),At.copy(Y))}function ze(Y){bt.equals(Y)===!1&&(s.viewport(Y.x,Y.y,Y.z,Y.w),bt.copy(Y))}function ot(Y,Ue){let ye=l.get(Ue);ye===void 0&&(ye=new WeakMap,l.set(Ue,ye));let qe=ye.get(Y);qe===void 0&&(qe=s.getUniformBlockIndex(Ue,Y.name),ye.set(Y,qe))}function _t(Y,Ue){const qe=l.get(Ue).get(Y);c.get(Ue)!==qe&&(s.uniformBlockBinding(Ue,qe,Y.__bindingPointIndex),c.set(Ue,qe))}function It(){s.disable(s.BLEND),s.disable(s.CULL_FACE),s.disable(s.DEPTH_TEST),s.disable(s.POLYGON_OFFSET_FILL),s.disable(s.SCISSOR_TEST),s.disable(s.STENCIL_TEST),s.disable(s.SAMPLE_ALPHA_TO_COVERAGE),s.blendEquation(s.FUNC_ADD),s.blendFunc(s.ONE,s.ZERO),s.blendFuncSeparate(s.ONE,s.ZERO,s.ONE,s.ZERO),s.blendColor(0,0,0,0),s.colorMask(!0,!0,!0,!0),s.clearColor(0,0,0,0),s.depthMask(!0),s.depthFunc(s.LESS),o.setReversed(!1),s.clearDepth(1),s.stencilMask(4294967295),s.stencilFunc(s.ALWAYS,0,4294967295),s.stencilOp(s.KEEP,s.KEEP,s.KEEP),s.clearStencil(0),s.cullFace(s.BACK),s.frontFace(s.CCW),s.polygonOffset(0,0),s.activeTexture(s.TEXTURE0),s.bindFramebuffer(s.FRAMEBUFFER,null),s.bindFramebuffer(s.DRAW_FRAMEBUFFER,null),s.bindFramebuffer(s.READ_FRAMEBUFFER,null),s.useProgram(null),s.lineWidth(1),s.scissor(0,0,s.canvas.width,s.canvas.height),s.viewport(0,0,s.canvas.width,s.canvas.height),s.pixelStorei(s.PACK_ALIGNMENT,4),s.pixelStorei(s.UNPACK_ALIGNMENT,4),s.pixelStorei(s.UNPACK_FLIP_Y_WEBGL,!1),s.pixelStorei(s.UNPACK_PREMULTIPLY_ALPHA_WEBGL,!1),s.pixelStorei(s.UNPACK_COLORSPACE_CONVERSION_WEBGL,s.BROWSER_DEFAULT_WEBGL),s.pixelStorei(s.PACK_ROW_LENGTH,0),s.pixelStorei(s.PACK_SKIP_PIXELS,0),s.pixelStorei(s.PACK_SKIP_ROWS,0),s.pixelStorei(s.UNPACK_ROW_LENGTH,0),s.pixelStorei(s.UNPACK_IMAGE_HEIGHT,0),s.pixelStorei(s.UNPACK_SKIP_PIXELS,0),s.pixelStorei(s.UNPACK_SKIP_ROWS,0),s.pixelStorei(s.UNPACK_SKIP_IMAGES,0),u={},f={},ge=null,Se={},h={},d=new WeakMap,m=[],M=null,x=!1,g=null,A=null,I=null,_=null,w=null,R=null,D=null,v=new it(0,0,0),L=0,O=!1,z=null,K=null,ee=null,X=null,J=null,At.set(0,0,s.canvas.width,s.canvas.height),bt.set(0,0,s.canvas.width,s.canvas.height),r.reset(),o.reset(),a.reset()}return{buffers:{color:r,depth:o,stencil:a},enable:Me,disable:We,bindFramebuffer:lt,drawBuffers:je,useProgram:Tt,setBlending:Ae,setMaterial:Re,setFlipSided:Pe,setCullFace:Ve,setLineWidth:vt,setPolygonOffset:ut,setScissorTest:Mt,activeTexture:re,bindTexture:F,unbindTexture:xt,compressedTexImage2D:Ct,compressedTexImage3D:U,texImage2D:pe,texImage3D:xe,pixelStorei:rt,getParameter:Ce,updateUBOMapping:ot,uniformBlockBinding:_t,texStorage2D:Le,texStorage3D:ke,texSubImage2D:y,texSubImage3D:$,compressedTexSubImage2D:ie,compressedTexSubImage3D:de,scissor:Xe,viewport:ze,reset:It}}function V1(s,e,t,n,i,r,o){const a=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,c=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),l=new Ye,u=new WeakMap,f=new Set;let h;const d=new WeakMap;let m=!1;try{m=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function M(U,y){return m?new OffscreenCanvas(U,y):cc("canvas")}function x(U,y,$){let ie=1;const de=Ct(U);if((de.width>$||de.height>$)&&(ie=$/Math.max(de.width,de.height)),ie<1)if(typeof HTMLImageElement<"u"&&U instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&U instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&U instanceof ImageBitmap||typeof VideoFrame<"u"&&U instanceof VideoFrame){const Le=Math.floor(ie*de.width),ke=Math.floor(ie*de.height);h===void 0&&(h=M(Le,ke));const pe=y?M(Le,ke):h;return pe.width=Le,pe.height=ke,pe.getContext("2d").drawImage(U,0,0,Le,ke),yt("WebGLRenderer: Texture has been resized from ("+de.width+"x"+de.height+") to ("+Le+"x"+ke+")."),pe}else return"data"in U&&yt("WebGLRenderer: Image in DataTexture is too big ("+de.width+"x"+de.height+")."),U;return U}function g(U){return U.generateMipmaps}function A(U){s.generateMipmap(U)}function I(U){return U.isWebGLCubeRenderTarget?s.TEXTURE_CUBE_MAP:U.isWebGL3DRenderTarget?s.TEXTURE_3D:U.isWebGLArrayRenderTarget||U.isCompressedArrayTexture?s.TEXTURE_2D_ARRAY:s.TEXTURE_2D}function _(U,y,$,ie,de,Le=!1){if(U!==null){if(s[U]!==void 0)return s[U];yt("WebGLRenderer: Attempt to use non-existing WebGL internal format '"+U+"'")}let ke;ie&&(ke=e.get("EXT_texture_norm16"),ke||yt("WebGLRenderer: Unable to use normalized textures without EXT_texture_norm16 extension"));let pe=y;if(y===s.RED&&($===s.FLOAT&&(pe=s.R32F),$===s.HALF_FLOAT&&(pe=s.R16F),$===s.UNSIGNED_BYTE&&(pe=s.R8),$===s.UNSIGNED_SHORT&&ke&&(pe=ke.R16_EXT),$===s.SHORT&&ke&&(pe=ke.R16_SNORM_EXT)),y===s.RED_INTEGER&&($===s.UNSIGNED_BYTE&&(pe=s.R8UI),$===s.UNSIGNED_SHORT&&(pe=s.R16UI),$===s.UNSIGNED_INT&&(pe=s.R32UI),$===s.BYTE&&(pe=s.R8I),$===s.SHORT&&(pe=s.R16I),$===s.INT&&(pe=s.R32I)),y===s.RG&&($===s.FLOAT&&(pe=s.RG32F),$===s.HALF_FLOAT&&(pe=s.RG16F),$===s.UNSIGNED_BYTE&&(pe=s.RG8),$===s.UNSIGNED_SHORT&&ke&&(pe=ke.RG16_EXT),$===s.SHORT&&ke&&(pe=ke.RG16_SNORM_EXT)),y===s.RG_INTEGER&&($===s.UNSIGNED_BYTE&&(pe=s.RG8UI),$===s.UNSIGNED_SHORT&&(pe=s.RG16UI),$===s.UNSIGNED_INT&&(pe=s.RG32UI),$===s.BYTE&&(pe=s.RG8I),$===s.SHORT&&(pe=s.RG16I),$===s.INT&&(pe=s.RG32I)),y===s.RGB_INTEGER&&($===s.UNSIGNED_BYTE&&(pe=s.RGB8UI),$===s.UNSIGNED_SHORT&&(pe=s.RGB16UI),$===s.UNSIGNED_INT&&(pe=s.RGB32UI),$===s.BYTE&&(pe=s.RGB8I),$===s.SHORT&&(pe=s.RGB16I),$===s.INT&&(pe=s.RGB32I)),y===s.RGBA_INTEGER&&($===s.UNSIGNED_BYTE&&(pe=s.RGBA8UI),$===s.UNSIGNED_SHORT&&(pe=s.RGBA16UI),$===s.UNSIGNED_INT&&(pe=s.RGBA32UI),$===s.BYTE&&(pe=s.RGBA8I),$===s.SHORT&&(pe=s.RGBA16I),$===s.INT&&(pe=s.RGBA32I)),y===s.RGB&&($===s.UNSIGNED_SHORT&&ke&&(pe=ke.RGB16_EXT),$===s.SHORT&&ke&&(pe=ke.RGB16_SNORM_EXT),$===s.UNSIGNED_INT_5_9_9_9_REV&&(pe=s.RGB9_E5),$===s.UNSIGNED_INT_10F_11F_11F_REV&&(pe=s.R11F_G11F_B10F)),y===s.RGBA){const xe=Le?Cl:Qt.getTransfer(de);$===s.FLOAT&&(pe=s.RGBA32F),$===s.HALF_FLOAT&&(pe=s.RGBA16F),$===s.UNSIGNED_BYTE&&(pe=xe===Sn?s.SRGB8_ALPHA8:s.RGBA8),$===s.UNSIGNED_SHORT&&ke&&(pe=ke.RGBA16_EXT),$===s.SHORT&&ke&&(pe=ke.RGBA16_SNORM_EXT),$===s.UNSIGNED_SHORT_4_4_4_4&&(pe=s.RGBA4),$===s.UNSIGNED_SHORT_5_5_5_1&&(pe=s.RGB5_A1)}return(pe===s.R16F||pe===s.R32F||pe===s.RG16F||pe===s.RG32F||pe===s.RGBA16F||pe===s.RGBA32F)&&e.get("EXT_color_buffer_float"),pe}function w(U,y){let $;return U?y===null||y===Gs||y===sc?$=s.DEPTH24_STENCIL8:y===is?$=s.DEPTH32F_STENCIL8:y===ic&&($=s.DEPTH24_STENCIL8,yt("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):y===null||y===Gs||y===sc?$=s.DEPTH_COMPONENT24:y===is?$=s.DEPTH_COMPONENT32F:y===ic&&($=s.DEPTH_COMPONENT16),$}function R(U,y){return g(U)===!0||U.isFramebufferTexture&&U.minFilter!==ci&&U.minFilter!==li?Math.log2(Math.max(y.width,y.height))+1:U.mipmaps!==void 0&&U.mipmaps.length>0?U.mipmaps.length:U.isCompressedTexture&&Array.isArray(U.image)?y.mipmaps.length:1}function D(U){const y=U.target;y.removeEventListener("dispose",D),L(y),y.isVideoTexture&&u.delete(y),y.isHTMLTexture&&f.delete(y)}function v(U){const y=U.target;y.removeEventListener("dispose",v),z(y)}function L(U){const y=n.get(U);if(y.__webglInit===void 0)return;const $=U.source,ie=d.get($);if(ie){const de=ie[y.__cacheKey];de.usedTimes--,de.usedTimes===0&&O(U),Object.keys(ie).length===0&&d.delete($)}n.remove(U)}function O(U){const y=n.get(U);s.deleteTexture(y.__webglTexture);const $=U.source,ie=d.get($);delete ie[y.__cacheKey],o.memory.textures--}function z(U){const y=n.get(U);if(U.depthTexture&&(U.depthTexture.dispose(),n.remove(U.depthTexture)),U.isWebGLCubeRenderTarget)for(let ie=0;ie<6;ie++){if(Array.isArray(y.__webglFramebuffer[ie]))for(let de=0;de<y.__webglFramebuffer[ie].length;de++)s.deleteFramebuffer(y.__webglFramebuffer[ie][de]);else s.deleteFramebuffer(y.__webglFramebuffer[ie]);y.__webglDepthbuffer&&s.deleteRenderbuffer(y.__webglDepthbuffer[ie])}else{if(Array.isArray(y.__webglFramebuffer))for(let ie=0;ie<y.__webglFramebuffer.length;ie++)s.deleteFramebuffer(y.__webglFramebuffer[ie]);else s.deleteFramebuffer(y.__webglFramebuffer);if(y.__webglDepthbuffer&&s.deleteRenderbuffer(y.__webglDepthbuffer),y.__webglMultisampledFramebuffer&&s.deleteFramebuffer(y.__webglMultisampledFramebuffer),y.__webglColorRenderbuffer)for(let ie=0;ie<y.__webglColorRenderbuffer.length;ie++)y.__webglColorRenderbuffer[ie]&&s.deleteRenderbuffer(y.__webglColorRenderbuffer[ie]);y.__webglDepthRenderbuffer&&s.deleteRenderbuffer(y.__webglDepthRenderbuffer)}const $=U.textures;for(let ie=0,de=$.length;ie<de;ie++){const Le=n.get($[ie]);Le.__webglTexture&&(s.deleteTexture(Le.__webglTexture),o.memory.textures--),n.remove($[ie])}n.remove(U)}let K=0;function ee(){K=0}function X(){return K}function J(U){K=U}function ce(){const U=K;return U>=i.maxTextures&&yt("WebGLTextures: Trying to use "+(U+1)+" texture units while this GPU supports only "+i.maxTextures),K+=1,U}function se(U){const y=[];return y.push(U.wrapS),y.push(U.wrapT),y.push(U.wrapR||0),y.push(U.magFilter),y.push(U.minFilter),y.push(U.anisotropy),y.push(U.internalFormat),y.push(U.format),y.push(U.type),y.push(U.generateMipmaps),y.push(U.premultiplyAlpha),y.push(U.flipY),y.push(U.unpackAlignment),y.push(U.colorSpace),y.join()}function Ee(U,y){const $=n.get(U);if(U.isVideoTexture&&F(U),U.isRenderTargetTexture===!1&&U.isExternalTexture!==!0&&U.version>0&&$.__version!==U.version){const ie=U.image;if(ie===null)yt("WebGLRenderer: Texture marked for update but no image data found.");else if(ie.complete===!1)yt("WebGLRenderer: Texture marked for update but image is incomplete");else{We($,U,y);return}}else U.isExternalTexture&&($.__webglTexture=U.sourceTexture?U.sourceTexture:null);t.bindTexture(s.TEXTURE_2D,$.__webglTexture,s.TEXTURE0+y)}function ue(U,y){const $=n.get(U);if(U.isRenderTargetTexture===!1&&U.version>0&&$.__version!==U.version){We($,U,y);return}else U.isExternalTexture&&($.__webglTexture=U.sourceTexture?U.sourceTexture:null);t.bindTexture(s.TEXTURE_2D_ARRAY,$.__webglTexture,s.TEXTURE0+y)}function ge(U,y){const $=n.get(U);if(U.isRenderTargetTexture===!1&&U.version>0&&$.__version!==U.version){We($,U,y);return}t.bindTexture(s.TEXTURE_3D,$.__webglTexture,s.TEXTURE0+y)}function Se(U,y){const $=n.get(U);if(U.isCubeDepthTexture!==!0&&U.version>0&&$.__version!==U.version){lt($,U,y);return}t.bindTexture(s.TEXTURE_CUBE_MAP,$.__webglTexture,s.TEXTURE0+y)}const tt={[Lr]:s.REPEAT,[Bs]:s.CLAMP_TO_EDGE,[wl]:s.MIRRORED_REPEAT},Ze={[ci]:s.NEAREST,[Rp]:s.NEAREST_MIPMAP_NEAREST,[Ka]:s.NEAREST_MIPMAP_LINEAR,[li]:s.LINEAR,[xl]:s.LINEAR_MIPMAP_NEAREST,[sr]:s.LINEAR_MIPMAP_LINEAR},At={[Om]:s.NEVER,[Vm]:s.ALWAYS,[Bm]:s.LESS,[Yh]:s.LEQUAL,[km]:s.EQUAL,[Kh]:s.GEQUAL,[zm]:s.GREATER,[Hm]:s.NOTEQUAL};function bt(U,y){if(y.type===is&&e.has("OES_texture_float_linear")===!1&&(y.magFilter===li||y.magFilter===xl||y.magFilter===Ka||y.magFilter===sr||y.minFilter===li||y.minFilter===xl||y.minFilter===Ka||y.minFilter===sr)&&yt("WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),s.texParameteri(U,s.TEXTURE_WRAP_S,tt[y.wrapS]),s.texParameteri(U,s.TEXTURE_WRAP_T,tt[y.wrapT]),(U===s.TEXTURE_3D||U===s.TEXTURE_2D_ARRAY)&&s.texParameteri(U,s.TEXTURE_WRAP_R,tt[y.wrapR]),s.texParameteri(U,s.TEXTURE_MAG_FILTER,Ze[y.magFilter]),s.texParameteri(U,s.TEXTURE_MIN_FILTER,Ze[y.minFilter]),y.compareFunction&&(s.texParameteri(U,s.TEXTURE_COMPARE_MODE,s.COMPARE_REF_TO_TEXTURE),s.texParameteri(U,s.TEXTURE_COMPARE_FUNC,At[y.compareFunction])),e.has("EXT_texture_filter_anisotropic")===!0){if(y.magFilter===ci||y.minFilter!==Ka&&y.minFilter!==sr||y.type===is&&e.has("OES_texture_float_linear")===!1)return;if(y.anisotropy>1||n.get(y).__currentAnisotropy){const $=e.get("EXT_texture_filter_anisotropic");s.texParameterf(U,$.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(y.anisotropy,i.getMaxAnisotropy())),n.get(y).__currentAnisotropy=y.anisotropy}}}function Wt(U,y){let $=!1;U.__webglInit===void 0&&(U.__webglInit=!0,y.addEventListener("dispose",D));const ie=y.source;let de=d.get(ie);de===void 0&&(de={},d.set(ie,de));const Le=se(y);if(Le!==U.__cacheKey){de[Le]===void 0&&(de[Le]={texture:s.createTexture(),usedTimes:0},o.memory.textures++,$=!0),de[Le].usedTimes++;const ke=de[U.__cacheKey];ke!==void 0&&(de[U.__cacheKey].usedTimes--,ke.usedTimes===0&&O(y)),U.__cacheKey=Le,U.__webglTexture=de[Le].texture}return $}function he(U,y,$){return Math.floor(Math.floor(U/$)/y)}function Me(U,y,$,ie){const Le=U.updateRanges;if(Le.length===0)t.texSubImage2D(s.TEXTURE_2D,0,0,0,y.width,y.height,$,ie,y.data);else{Le.sort((rt,Xe)=>rt.start-Xe.start);let ke=0;for(let rt=1;rt<Le.length;rt++){const Xe=Le[ke],ze=Le[rt],ot=Xe.start+Xe.count,_t=he(ze.start,y.width,4),It=he(Xe.start,y.width,4);ze.start<=ot+1&&_t===It&&he(ze.start+ze.count-1,y.width,4)===_t?Xe.count=Math.max(Xe.count,ze.start+ze.count-Xe.start):(++ke,Le[ke]=ze)}Le.length=ke+1;const pe=t.getParameter(s.UNPACK_ROW_LENGTH),xe=t.getParameter(s.UNPACK_SKIP_PIXELS),Ce=t.getParameter(s.UNPACK_SKIP_ROWS);t.pixelStorei(s.UNPACK_ROW_LENGTH,y.width);for(let rt=0,Xe=Le.length;rt<Xe;rt++){const ze=Le[rt],ot=Math.floor(ze.start/4),_t=Math.ceil(ze.count/4),It=ot%y.width,Y=Math.floor(ot/y.width),Ue=_t,ye=1;t.pixelStorei(s.UNPACK_SKIP_PIXELS,It),t.pixelStorei(s.UNPACK_SKIP_ROWS,Y),t.texSubImage2D(s.TEXTURE_2D,0,It,Y,Ue,ye,$,ie,y.data)}U.clearUpdateRanges(),t.pixelStorei(s.UNPACK_ROW_LENGTH,pe),t.pixelStorei(s.UNPACK_SKIP_PIXELS,xe),t.pixelStorei(s.UNPACK_SKIP_ROWS,Ce)}}function We(U,y,$){let ie=s.TEXTURE_2D;(y.isDataArrayTexture||y.isCompressedArrayTexture)&&(ie=s.TEXTURE_2D_ARRAY),y.isData3DTexture&&(ie=s.TEXTURE_3D);const de=Wt(U,y),Le=y.source;t.bindTexture(ie,U.__webglTexture,s.TEXTURE0+$);const ke=n.get(Le);if(Le.version!==ke.__version||de===!0){if(t.activeTexture(s.TEXTURE0+$),(typeof ImageBitmap<"u"&&y.image instanceof ImageBitmap)===!1){const ye=Qt.getPrimaries(Qt.workingColorSpace),qe=y.colorSpace===Rr?null:Qt.getPrimaries(y.colorSpace),Ke=y.colorSpace===Rr||ye===qe?s.NONE:s.BROWSER_DEFAULT_WEBGL;t.pixelStorei(s.UNPACK_FLIP_Y_WEBGL,y.flipY),t.pixelStorei(s.UNPACK_PREMULTIPLY_ALPHA_WEBGL,y.premultiplyAlpha),t.pixelStorei(s.UNPACK_COLORSPACE_CONVERSION_WEBGL,Ke)}t.pixelStorei(s.UNPACK_ALIGNMENT,y.unpackAlignment);let xe=x(y.image,!1,i.maxTextureSize);xe=xt(y,xe);const Ce=r.convert(y.format,y.colorSpace),rt=r.convert(y.type);let Xe=_(y.internalFormat,Ce,rt,y.normalized,y.colorSpace,y.isVideoTexture);bt(ie,y);let ze;const ot=y.mipmaps,_t=y.isVideoTexture!==!0,It=ke.__version===void 0||de===!0,Y=Le.dataReady,Ue=R(y,xe);if(y.isDepthTexture)Xe=w(y.format===io,y.type),It&&(_t?t.texStorage2D(s.TEXTURE_2D,1,Xe,xe.width,xe.height):t.texImage2D(s.TEXTURE_2D,0,Xe,xe.width,xe.height,0,Ce,rt,null));else if(y.isDataTexture)if(ot.length>0){_t&&It&&t.texStorage2D(s.TEXTURE_2D,Ue,Xe,ot[0].width,ot[0].height);for(let ye=0,qe=ot.length;ye<qe;ye++)ze=ot[ye],_t?Y&&t.texSubImage2D(s.TEXTURE_2D,ye,0,0,ze.width,ze.height,Ce,rt,ze.data):t.texImage2D(s.TEXTURE_2D,ye,Xe,ze.width,ze.height,0,Ce,rt,ze.data);y.generateMipmaps=!1}else _t?(It&&t.texStorage2D(s.TEXTURE_2D,Ue,Xe,xe.width,xe.height),Y&&Me(y,xe,Ce,rt)):t.texImage2D(s.TEXTURE_2D,0,Xe,xe.width,xe.height,0,Ce,rt,xe.data);else if(y.isCompressedTexture)if(y.isCompressedArrayTexture){_t&&It&&t.texStorage3D(s.TEXTURE_2D_ARRAY,Ue,Xe,ot[0].width,ot[0].height,xe.depth);for(let ye=0,qe=ot.length;ye<qe;ye++)if(ze=ot[ye],y.format!==ss)if(Ce!==null)if(_t){if(Y)if(y.layerUpdates.size>0){const Ke=Sd(ze.width,ze.height,y.format,y.type);for(const we of y.layerUpdates){const dt=ze.data.subarray(we*Ke/ze.data.BYTES_PER_ELEMENT,(we+1)*Ke/ze.data.BYTES_PER_ELEMENT);t.compressedTexSubImage3D(s.TEXTURE_2D_ARRAY,ye,0,0,we,ze.width,ze.height,1,Ce,dt)}}else t.compressedTexSubImage3D(s.TEXTURE_2D_ARRAY,ye,0,0,0,ze.width,ze.height,xe.depth,Ce,ze.data)}else t.compressedTexImage3D(s.TEXTURE_2D_ARRAY,ye,Xe,ze.width,ze.height,xe.depth,0,ze.data,0,0);else yt("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else _t?Y&&t.texSubImage3D(s.TEXTURE_2D_ARRAY,ye,0,0,0,ze.width,ze.height,xe.depth,Ce,rt,ze.data):t.texImage3D(s.TEXTURE_2D_ARRAY,ye,Xe,ze.width,ze.height,xe.depth,0,Ce,rt,ze.data);y.layerUpdates.size>0&&y.clearLayerUpdates()}else{_t&&It&&t.texStorage2D(s.TEXTURE_2D,Ue,Xe,ot[0].width,ot[0].height);for(let ye=0,qe=ot.length;ye<qe;ye++)ze=ot[ye],y.format!==ss?Ce!==null?_t?Y&&t.compressedTexSubImage2D(s.TEXTURE_2D,ye,0,0,ze.width,ze.height,Ce,ze.data):t.compressedTexImage2D(s.TEXTURE_2D,ye,Xe,ze.width,ze.height,0,ze.data):yt("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):_t?Y&&t.texSubImage2D(s.TEXTURE_2D,ye,0,0,ze.width,ze.height,Ce,rt,ze.data):t.texImage2D(s.TEXTURE_2D,ye,Xe,ze.width,ze.height,0,Ce,rt,ze.data)}else if(y.isDataArrayTexture)if(_t){if(It&&t.texStorage3D(s.TEXTURE_2D_ARRAY,Ue,Xe,xe.width,xe.height,xe.depth),Y)if(y.layerUpdates.size>0){const ye=Sd(xe.width,xe.height,y.format,y.type);for(const qe of y.layerUpdates){const Ke=xe.data.subarray(qe*ye/xe.data.BYTES_PER_ELEMENT,(qe+1)*ye/xe.data.BYTES_PER_ELEMENT);t.texSubImage3D(s.TEXTURE_2D_ARRAY,0,0,0,qe,xe.width,xe.height,1,Ce,rt,Ke)}y.clearLayerUpdates()}else t.texSubImage3D(s.TEXTURE_2D_ARRAY,0,0,0,0,xe.width,xe.height,xe.depth,Ce,rt,xe.data)}else t.texImage3D(s.TEXTURE_2D_ARRAY,0,Xe,xe.width,xe.height,xe.depth,0,Ce,rt,xe.data);else if(y.isData3DTexture)_t?(It&&t.texStorage3D(s.TEXTURE_3D,Ue,Xe,xe.width,xe.height,xe.depth),Y&&t.texSubImage3D(s.TEXTURE_3D,0,0,0,0,xe.width,xe.height,xe.depth,Ce,rt,xe.data)):t.texImage3D(s.TEXTURE_3D,0,Xe,xe.width,xe.height,xe.depth,0,Ce,rt,xe.data);else if(y.isFramebufferTexture){if(It)if(_t)t.texStorage2D(s.TEXTURE_2D,Ue,Xe,xe.width,xe.height);else{let ye=xe.width,qe=xe.height;for(let Ke=0;Ke<Ue;Ke++)t.texImage2D(s.TEXTURE_2D,Ke,Xe,ye,qe,0,Ce,rt,null),ye>>=1,qe>>=1}}else if(y.isHTMLTexture){if("texElementImage2D"in s){const ye=s.canvas;if(ye.hasAttribute("layoutsubtree")||ye.setAttribute("layoutsubtree","true"),xe.parentNode!==ye){ye.appendChild(xe),f.add(y),ye.onpaint=qe=>{const Ke=qe.changedElements;for(const we of f)Ke.includes(we.image)&&(we.needsUpdate=!0)},ye.requestPaint();return}if(s.texElementImage2D.length===3)s.texElementImage2D(s.TEXTURE_2D,s.RGBA8,xe);else{const Ke=s.RGBA,we=s.RGBA,dt=s.UNSIGNED_BYTE;s.texElementImage2D(s.TEXTURE_2D,0,Ke,we,dt,xe)}s.texParameteri(s.TEXTURE_2D,s.TEXTURE_MIN_FILTER,s.LINEAR),s.texParameteri(s.TEXTURE_2D,s.TEXTURE_WRAP_S,s.CLAMP_TO_EDGE),s.texParameteri(s.TEXTURE_2D,s.TEXTURE_WRAP_T,s.CLAMP_TO_EDGE)}}else if(ot.length>0){if(_t&&It){const ye=Ct(ot[0]);t.texStorage2D(s.TEXTURE_2D,Ue,Xe,ye.width,ye.height)}for(let ye=0,qe=ot.length;ye<qe;ye++)ze=ot[ye],_t?Y&&t.texSubImage2D(s.TEXTURE_2D,ye,0,0,Ce,rt,ze):t.texImage2D(s.TEXTURE_2D,ye,Xe,Ce,rt,ze);y.generateMipmaps=!1}else if(_t){if(It){const ye=Ct(xe);t.texStorage2D(s.TEXTURE_2D,Ue,Xe,ye.width,ye.height)}Y&&t.texSubImage2D(s.TEXTURE_2D,0,0,0,Ce,rt,xe)}else t.texImage2D(s.TEXTURE_2D,0,Xe,Ce,rt,xe);g(y)&&A(ie),ke.__version=Le.version,y.onUpdate&&y.onUpdate(y)}U.__version=y.version}function lt(U,y,$){if(y.image.length!==6)return;const ie=Wt(U,y),de=y.source;t.bindTexture(s.TEXTURE_CUBE_MAP,U.__webglTexture,s.TEXTURE0+$);const Le=n.get(de);if(de.version!==Le.__version||ie===!0){t.activeTexture(s.TEXTURE0+$);const ke=Qt.getPrimaries(Qt.workingColorSpace),pe=y.colorSpace===Rr?null:Qt.getPrimaries(y.colorSpace),xe=y.colorSpace===Rr||ke===pe?s.NONE:s.BROWSER_DEFAULT_WEBGL;t.pixelStorei(s.UNPACK_FLIP_Y_WEBGL,y.flipY),t.pixelStorei(s.UNPACK_PREMULTIPLY_ALPHA_WEBGL,y.premultiplyAlpha),t.pixelStorei(s.UNPACK_ALIGNMENT,y.unpackAlignment),t.pixelStorei(s.UNPACK_COLORSPACE_CONVERSION_WEBGL,xe);const Ce=y.isCompressedTexture||y.image[0].isCompressedTexture,rt=y.image[0]&&y.image[0].isDataTexture,Xe=[];for(let we=0;we<6;we++)!Ce&&!rt?Xe[we]=x(y.image[we],!0,i.maxCubemapSize):Xe[we]=rt?y.image[we].image:y.image[we],Xe[we]=xt(y,Xe[we]);const ze=Xe[0],ot=r.convert(y.format,y.colorSpace),_t=r.convert(y.type),It=_(y.internalFormat,ot,_t,y.normalized,y.colorSpace),Y=y.isVideoTexture!==!0,Ue=Le.__version===void 0||ie===!0,ye=de.dataReady;let qe=R(y,ze);bt(s.TEXTURE_CUBE_MAP,y);let Ke;if(Ce){Y&&Ue&&t.texStorage2D(s.TEXTURE_CUBE_MAP,qe,It,ze.width,ze.height);for(let we=0;we<6;we++){Ke=Xe[we].mipmaps;for(let dt=0;dt<Ke.length;dt++){const ct=Ke[dt];y.format!==ss?ot!==null?Y?ye&&t.compressedTexSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+we,dt,0,0,ct.width,ct.height,ot,ct.data):t.compressedTexImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+we,dt,It,ct.width,ct.height,0,ct.data):yt("WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):Y?ye&&t.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+we,dt,0,0,ct.width,ct.height,ot,_t,ct.data):t.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+we,dt,It,ct.width,ct.height,0,ot,_t,ct.data)}}}else{if(Ke=y.mipmaps,Y&&Ue){Ke.length>0&&qe++;const we=Ct(Xe[0]);t.texStorage2D(s.TEXTURE_CUBE_MAP,qe,It,we.width,we.height)}for(let we=0;we<6;we++)if(rt){Y?ye&&t.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+we,0,0,0,Xe[we].width,Xe[we].height,ot,_t,Xe[we].data):t.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+we,0,It,Xe[we].width,Xe[we].height,0,ot,_t,Xe[we].data);for(let dt=0;dt<Ke.length;dt++){const hn=Ke[dt].image[we].image;Y?ye&&t.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+we,dt+1,0,0,hn.width,hn.height,ot,_t,hn.data):t.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+we,dt+1,It,hn.width,hn.height,0,ot,_t,hn.data)}}else{Y?ye&&t.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+we,0,0,0,ot,_t,Xe[we]):t.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+we,0,It,ot,_t,Xe[we]);for(let dt=0;dt<Ke.length;dt++){const ct=Ke[dt];Y?ye&&t.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+we,dt+1,0,0,ot,_t,ct.image[we]):t.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+we,dt+1,It,ot,_t,ct.image[we])}}}g(y)&&A(s.TEXTURE_CUBE_MAP),Le.__version=de.version,y.onUpdate&&y.onUpdate(y)}U.__version=y.version}function je(U,y,$,ie,de,Le){const ke=r.convert($.format,$.colorSpace),pe=r.convert($.type),xe=_($.internalFormat,ke,pe,$.normalized,$.colorSpace),Ce=n.get(y),rt=n.get($);if(rt.__renderTarget=y,!Ce.__hasExternalTextures){const Xe=Math.max(1,y.width>>Le),ze=Math.max(1,y.height>>Le);de===s.TEXTURE_3D||de===s.TEXTURE_2D_ARRAY?t.texImage3D(de,Le,xe,Xe,ze,y.depth,0,ke,pe,null):t.texImage2D(de,Le,xe,Xe,ze,0,ke,pe,null)}t.bindFramebuffer(s.FRAMEBUFFER,U),re(y)?a.framebufferTexture2DMultisampleEXT(s.FRAMEBUFFER,ie,de,rt.__webglTexture,0,Mt(y)):(de===s.TEXTURE_2D||de>=s.TEXTURE_CUBE_MAP_POSITIVE_X&&de<=s.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&s.framebufferTexture2D(s.FRAMEBUFFER,ie,de,rt.__webglTexture,Le),t.bindFramebuffer(s.FRAMEBUFFER,null)}function Tt(U,y,$){if(s.bindRenderbuffer(s.RENDERBUFFER,U),y.depthBuffer){const ie=y.depthTexture,de=ie&&ie.isDepthTexture?ie.type:null,Le=w(y.stencilBuffer,de),ke=y.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT;re(y)?a.renderbufferStorageMultisampleEXT(s.RENDERBUFFER,Mt(y),Le,y.width,y.height):$?s.renderbufferStorageMultisample(s.RENDERBUFFER,Mt(y),Le,y.width,y.height):s.renderbufferStorage(s.RENDERBUFFER,Le,y.width,y.height),s.framebufferRenderbuffer(s.FRAMEBUFFER,ke,s.RENDERBUFFER,U)}else{const ie=y.textures;for(let de=0;de<ie.length;de++){const Le=ie[de],ke=r.convert(Le.format,Le.colorSpace),pe=r.convert(Le.type),xe=_(Le.internalFormat,ke,pe,Le.normalized,Le.colorSpace);re(y)?a.renderbufferStorageMultisampleEXT(s.RENDERBUFFER,Mt(y),xe,y.width,y.height):$?s.renderbufferStorageMultisample(s.RENDERBUFFER,Mt(y),xe,y.width,y.height):s.renderbufferStorage(s.RENDERBUFFER,xe,y.width,y.height)}}s.bindRenderbuffer(s.RENDERBUFFER,null)}function tn(U,y,$){const ie=y.isWebGLCubeRenderTarget===!0;if(t.bindFramebuffer(s.FRAMEBUFFER,U),!(y.depthTexture&&y.depthTexture.isDepthTexture))throw new Error("THREE.WebGLTextures: renderTarget.depthTexture must be an instance of THREE.DepthTexture.");const de=n.get(y.depthTexture);if(de.__renderTarget=y,(!de.__webglTexture||y.depthTexture.image.width!==y.width||y.depthTexture.image.height!==y.height)&&(y.depthTexture.image.width=y.width,y.depthTexture.image.height=y.height,y.depthTexture.needsUpdate=!0),ie){if(de.__webglInit===void 0&&(de.__webglInit=!0,y.depthTexture.addEventListener("dispose",D)),de.__webglTexture===void 0){de.__webglTexture=s.createTexture(),t.bindTexture(s.TEXTURE_CUBE_MAP,de.__webglTexture),bt(s.TEXTURE_CUBE_MAP,y.depthTexture);const Ce=r.convert(y.depthTexture.format),rt=r.convert(y.depthTexture.type);let Xe;y.depthTexture.format===cr?Xe=s.DEPTH_COMPONENT24:y.depthTexture.format===io&&(Xe=s.DEPTH24_STENCIL8);for(let ze=0;ze<6;ze++)s.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+ze,0,Xe,y.width,y.height,0,Ce,rt,null)}}else Ee(y.depthTexture,0);const Le=de.__webglTexture,ke=Mt(y),pe=ie?s.TEXTURE_CUBE_MAP_POSITIVE_X+$:s.TEXTURE_2D,xe=y.depthTexture.format===io?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT;if(y.depthTexture.format===cr)re(y)?a.framebufferTexture2DMultisampleEXT(s.FRAMEBUFFER,xe,pe,Le,0,ke):s.framebufferTexture2D(s.FRAMEBUFFER,xe,pe,Le,0);else if(y.depthTexture.format===io)re(y)?a.framebufferTexture2DMultisampleEXT(s.FRAMEBUFFER,xe,pe,Le,0,ke):s.framebufferTexture2D(s.FRAMEBUFFER,xe,pe,Le,0);else throw new Error("THREE.WebGLTextures: Unknown depthTexture format.")}function be(U){const y=n.get(U),$=U.isWebGLCubeRenderTarget===!0;if(y.__boundDepthTexture!==U.depthTexture){const ie=U.depthTexture;if(y.__depthDisposeCallback&&y.__depthDisposeCallback(),ie){const de=()=>{delete y.__boundDepthTexture,delete y.__depthDisposeCallback,ie.removeEventListener("dispose",de)};ie.addEventListener("dispose",de),y.__depthDisposeCallback=de}y.__boundDepthTexture=ie}if(U.depthTexture&&!y.__autoAllocateDepthBuffer)if($)for(let ie=0;ie<6;ie++)tn(y.__webglFramebuffer[ie],U,ie);else{const ie=U.texture.mipmaps;ie&&ie.length>0?tn(y.__webglFramebuffer[0],U,0):tn(y.__webglFramebuffer,U,0)}else if($){y.__webglDepthbuffer=[];for(let ie=0;ie<6;ie++)if(t.bindFramebuffer(s.FRAMEBUFFER,y.__webglFramebuffer[ie]),y.__webglDepthbuffer[ie]===void 0)y.__webglDepthbuffer[ie]=s.createRenderbuffer(),Tt(y.__webglDepthbuffer[ie],U,!1);else{const de=U.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT,Le=y.__webglDepthbuffer[ie];s.bindRenderbuffer(s.RENDERBUFFER,Le),s.framebufferRenderbuffer(s.FRAMEBUFFER,de,s.RENDERBUFFER,Le)}}else{const ie=U.texture.mipmaps;if(ie&&ie.length>0?t.bindFramebuffer(s.FRAMEBUFFER,y.__webglFramebuffer[0]):t.bindFramebuffer(s.FRAMEBUFFER,y.__webglFramebuffer),y.__webglDepthbuffer===void 0)y.__webglDepthbuffer=s.createRenderbuffer(),Tt(y.__webglDepthbuffer,U,!1);else{const de=U.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT,Le=y.__webglDepthbuffer;s.bindRenderbuffer(s.RENDERBUFFER,Le),s.framebufferRenderbuffer(s.FRAMEBUFFER,de,s.RENDERBUFFER,Le)}}t.bindFramebuffer(s.FRAMEBUFFER,null)}function Ae(U,y,$){const ie=n.get(U);y!==void 0&&je(ie.__webglFramebuffer,U,U.texture,s.COLOR_ATTACHMENT0,s.TEXTURE_2D,0),$!==void 0&&be(U)}function Re(U){const y=U.texture,$=n.get(U),ie=n.get(y);U.addEventListener("dispose",v);const de=U.textures,Le=U.isWebGLCubeRenderTarget===!0,ke=de.length>1;if(ke||(ie.__webglTexture===void 0&&(ie.__webglTexture=s.createTexture()),ie.__version=y.version,o.memory.textures++),Le){$.__webglFramebuffer=[];for(let pe=0;pe<6;pe++)if(y.mipmaps&&y.mipmaps.length>0){$.__webglFramebuffer[pe]=[];for(let xe=0;xe<y.mipmaps.length;xe++)$.__webglFramebuffer[pe][xe]=s.createFramebuffer()}else $.__webglFramebuffer[pe]=s.createFramebuffer()}else{if(y.mipmaps&&y.mipmaps.length>0){$.__webglFramebuffer=[];for(let pe=0;pe<y.mipmaps.length;pe++)$.__webglFramebuffer[pe]=s.createFramebuffer()}else $.__webglFramebuffer=s.createFramebuffer();if(ke)for(let pe=0,xe=de.length;pe<xe;pe++){const Ce=n.get(de[pe]);Ce.__webglTexture===void 0&&(Ce.__webglTexture=s.createTexture(),o.memory.textures++)}if(U.samples>0&&re(U)===!1){$.__webglMultisampledFramebuffer=s.createFramebuffer(),$.__webglColorRenderbuffer=[],t.bindFramebuffer(s.FRAMEBUFFER,$.__webglMultisampledFramebuffer);for(let pe=0;pe<de.length;pe++){const xe=de[pe];$.__webglColorRenderbuffer[pe]=s.createRenderbuffer(),s.bindRenderbuffer(s.RENDERBUFFER,$.__webglColorRenderbuffer[pe]);const Ce=r.convert(xe.format,xe.colorSpace),rt=r.convert(xe.type),Xe=_(xe.internalFormat,Ce,rt,xe.normalized,xe.colorSpace,U.isXRRenderTarget===!0),ze=Mt(U);s.renderbufferStorageMultisample(s.RENDERBUFFER,ze,Xe,U.width,U.height),s.framebufferRenderbuffer(s.FRAMEBUFFER,s.COLOR_ATTACHMENT0+pe,s.RENDERBUFFER,$.__webglColorRenderbuffer[pe])}s.bindRenderbuffer(s.RENDERBUFFER,null),U.depthBuffer&&($.__webglDepthRenderbuffer=s.createRenderbuffer(),Tt($.__webglDepthRenderbuffer,U,!0)),t.bindFramebuffer(s.FRAMEBUFFER,null)}}if(Le){t.bindTexture(s.TEXTURE_CUBE_MAP,ie.__webglTexture),bt(s.TEXTURE_CUBE_MAP,y);for(let pe=0;pe<6;pe++)if(y.mipmaps&&y.mipmaps.length>0)for(let xe=0;xe<y.mipmaps.length;xe++)je($.__webglFramebuffer[pe][xe],U,y,s.COLOR_ATTACHMENT0,s.TEXTURE_CUBE_MAP_POSITIVE_X+pe,xe);else je($.__webglFramebuffer[pe],U,y,s.COLOR_ATTACHMENT0,s.TEXTURE_CUBE_MAP_POSITIVE_X+pe,0);g(y)&&A(s.TEXTURE_CUBE_MAP),t.unbindTexture()}else if(ke){for(let pe=0,xe=de.length;pe<xe;pe++){const Ce=de[pe],rt=n.get(Ce);let Xe=s.TEXTURE_2D;(U.isWebGL3DRenderTarget||U.isWebGLArrayRenderTarget)&&(Xe=U.isWebGL3DRenderTarget?s.TEXTURE_3D:s.TEXTURE_2D_ARRAY),t.bindTexture(Xe,rt.__webglTexture),bt(Xe,Ce),je($.__webglFramebuffer,U,Ce,s.COLOR_ATTACHMENT0+pe,Xe,0),g(Ce)&&A(Xe)}t.unbindTexture()}else{let pe=s.TEXTURE_2D;if((U.isWebGL3DRenderTarget||U.isWebGLArrayRenderTarget)&&(pe=U.isWebGL3DRenderTarget?s.TEXTURE_3D:s.TEXTURE_2D_ARRAY),t.bindTexture(pe,ie.__webglTexture),bt(pe,y),y.mipmaps&&y.mipmaps.length>0)for(let xe=0;xe<y.mipmaps.length;xe++)je($.__webglFramebuffer[xe],U,y,s.COLOR_ATTACHMENT0,pe,xe);else je($.__webglFramebuffer,U,y,s.COLOR_ATTACHMENT0,pe,0);g(y)&&A(pe),t.unbindTexture()}U.depthBuffer&&be(U)}function Pe(U){const y=U.textures;for(let $=0,ie=y.length;$<ie;$++){const de=y[$];if(g(de)){const Le=I(U),ke=n.get(de).__webglTexture;t.bindTexture(Le,ke),A(Le),t.unbindTexture()}}}const Ve=[],vt=[];function ut(U){if(U.samples>0){if(re(U)===!1){const y=U.textures,$=U.width,ie=U.height;let de=s.COLOR_BUFFER_BIT;const Le=U.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT,ke=n.get(U),pe=y.length>1;if(pe)for(let Ce=0;Ce<y.length;Ce++)t.bindFramebuffer(s.FRAMEBUFFER,ke.__webglMultisampledFramebuffer),s.framebufferRenderbuffer(s.FRAMEBUFFER,s.COLOR_ATTACHMENT0+Ce,s.RENDERBUFFER,null),t.bindFramebuffer(s.FRAMEBUFFER,ke.__webglFramebuffer),s.framebufferTexture2D(s.DRAW_FRAMEBUFFER,s.COLOR_ATTACHMENT0+Ce,s.TEXTURE_2D,null,0);t.bindFramebuffer(s.READ_FRAMEBUFFER,ke.__webglMultisampledFramebuffer);const xe=U.texture.mipmaps;xe&&xe.length>0?t.bindFramebuffer(s.DRAW_FRAMEBUFFER,ke.__webglFramebuffer[0]):t.bindFramebuffer(s.DRAW_FRAMEBUFFER,ke.__webglFramebuffer);for(let Ce=0;Ce<y.length;Ce++){if(U.resolveDepthBuffer&&(U.depthBuffer&&(de|=s.DEPTH_BUFFER_BIT),U.stencilBuffer&&U.resolveStencilBuffer&&(de|=s.STENCIL_BUFFER_BIT)),pe){s.framebufferRenderbuffer(s.READ_FRAMEBUFFER,s.COLOR_ATTACHMENT0,s.RENDERBUFFER,ke.__webglColorRenderbuffer[Ce]);const rt=n.get(y[Ce]).__webglTexture;s.framebufferTexture2D(s.DRAW_FRAMEBUFFER,s.COLOR_ATTACHMENT0,s.TEXTURE_2D,rt,0)}s.blitFramebuffer(0,0,$,ie,0,0,$,ie,de,s.NEAREST),c===!0&&(Ve.length=0,vt.length=0,Ve.push(s.COLOR_ATTACHMENT0+Ce),U.depthBuffer&&U.storeMultisampledDepthBuffer===!1&&(Ve.push(Le),vt.push(Le),s.invalidateFramebuffer(s.DRAW_FRAMEBUFFER,vt)),s.invalidateFramebuffer(s.READ_FRAMEBUFFER,Ve))}if(t.bindFramebuffer(s.READ_FRAMEBUFFER,null),t.bindFramebuffer(s.DRAW_FRAMEBUFFER,null),pe)for(let Ce=0;Ce<y.length;Ce++){t.bindFramebuffer(s.FRAMEBUFFER,ke.__webglMultisampledFramebuffer),s.framebufferRenderbuffer(s.FRAMEBUFFER,s.COLOR_ATTACHMENT0+Ce,s.RENDERBUFFER,ke.__webglColorRenderbuffer[Ce]);const rt=n.get(y[Ce]).__webglTexture;t.bindFramebuffer(s.FRAMEBUFFER,ke.__webglFramebuffer),s.framebufferTexture2D(s.DRAW_FRAMEBUFFER,s.COLOR_ATTACHMENT0+Ce,s.TEXTURE_2D,rt,0)}t.bindFramebuffer(s.DRAW_FRAMEBUFFER,ke.__webglMultisampledFramebuffer)}else if(U.depthBuffer&&U.storeMultisampledDepthBuffer===!1&&c){const y=U.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT;s.invalidateFramebuffer(s.DRAW_FRAMEBUFFER,[y])}}}function Mt(U){return Math.min(i.maxSamples,U.samples)}function re(U){const y=n.get(U);return U.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&y.__useRenderToTexture!==!1}function F(U){const y=o.render.frame;u.get(U)!==y&&(u.set(U,y),U.update())}function xt(U,y){const $=U.colorSpace,ie=U.format,de=U.type;return U.isCompressedTexture===!0||U.isVideoTexture===!0||$!==Hi&&$!==Rr&&(Qt.getTransfer($)===Sn?(ie!==ss||de!==Yi)&&yt("WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):kt("WebGLTextures: Unsupported texture color space:",$)),y}function Ct(U){return typeof HTMLImageElement<"u"&&U instanceof HTMLImageElement?(l.width=U.naturalWidth||U.width,l.height=U.naturalHeight||U.height):typeof VideoFrame<"u"&&U instanceof VideoFrame?(l.width=U.displayWidth,l.height=U.displayHeight):(l.width=U.width,l.height=U.height),l}this.allocateTextureUnit=ce,this.resetTextureUnits=ee,this.getTextureUnits=X,this.setTextureUnits=J,this.setTexture2D=Ee,this.setTexture2DArray=ue,this.setTexture3D=ge,this.setTextureCube=Se,this.rebindTextures=Ae,this.setupRenderTarget=Re,this.updateRenderTargetMipmap=Pe,this.updateMultisampleRenderTarget=ut,this.setupDepthRenderbuffer=be,this.setupFrameBufferTexture=je,this.useMultisampledRTT=re,this.isReversedDepthBuffer=function(){return t.buffers.depth.getReversed()}}function G1(s,e){function t(n,i=Rr){let r;const o=Qt.getTransfer(i);if(n===Yi)return s.UNSIGNED_BYTE;if(n===Hh)return s.UNSIGNED_SHORT_4_4_4_4;if(n===Vh)return s.UNSIGNED_SHORT_5_5_5_1;if(n===Ip)return s.UNSIGNED_INT_5_9_9_9_REV;if(n===Lp)return s.UNSIGNED_INT_10F_11F_11F_REV;if(n===Cp)return s.BYTE;if(n===Pp)return s.SHORT;if(n===ic)return s.UNSIGNED_SHORT;if(n===zh)return s.INT;if(n===Gs)return s.UNSIGNED_INT;if(n===is)return s.FLOAT;if(n===Ws)return s.HALF_FLOAT;if(n===Np)return s.ALPHA;if(n===Dp)return s.RGB;if(n===ss)return s.RGBA;if(n===cr)return s.DEPTH_COMPONENT;if(n===io)return s.DEPTH_STENCIL;if(n===Gh)return s.RED;if(n===Wh)return s.RED_INTEGER;if(n===uo)return s.RG;if(n===Xh)return s.RG_INTEGER;if(n===qh)return s.RGBA_INTEGER;if(n===_l||n===vl||n===Ml||n===yl)if(o===Sn)if(r=e.get("WEBGL_compressed_texture_s3tc_srgb"),r!==null){if(n===_l)return r.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(n===vl)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(n===Ml)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(n===yl)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(r=e.get("WEBGL_compressed_texture_s3tc"),r!==null){if(n===_l)return r.COMPRESSED_RGB_S3TC_DXT1_EXT;if(n===vl)return r.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(n===Ml)return r.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(n===yl)return r.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(n===Xu||n===qu||n===Yu||n===Ku)if(r=e.get("WEBGL_compressed_texture_pvrtc"),r!==null){if(n===Xu)return r.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(n===qu)return r.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(n===Yu)return r.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(n===Ku)return r.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(n===ju||n===$u||n===Zu||n===Ju||n===Qu||n===Al||n===eh)if(r=e.get("WEBGL_compressed_texture_etc"),r!==null){if(n===ju||n===$u)return o===Sn?r.COMPRESSED_SRGB8_ETC2:r.COMPRESSED_RGB8_ETC2;if(n===Zu)return o===Sn?r.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:r.COMPRESSED_RGBA8_ETC2_EAC;if(n===Ju)return r.COMPRESSED_R11_EAC;if(n===Qu)return r.COMPRESSED_SIGNED_R11_EAC;if(n===Al)return r.COMPRESSED_RG11_EAC;if(n===eh)return r.COMPRESSED_SIGNED_RG11_EAC}else return null;if(n===th||n===nh||n===ih||n===sh||n===rh||n===oh||n===ah||n===ch||n===lh||n===uh||n===hh||n===fh||n===dh||n===ph)if(r=e.get("WEBGL_compressed_texture_astc"),r!==null){if(n===th)return o===Sn?r.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:r.COMPRESSED_RGBA_ASTC_4x4_KHR;if(n===nh)return o===Sn?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:r.COMPRESSED_RGBA_ASTC_5x4_KHR;if(n===ih)return o===Sn?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:r.COMPRESSED_RGBA_ASTC_5x5_KHR;if(n===sh)return o===Sn?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:r.COMPRESSED_RGBA_ASTC_6x5_KHR;if(n===rh)return o===Sn?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:r.COMPRESSED_RGBA_ASTC_6x6_KHR;if(n===oh)return o===Sn?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:r.COMPRESSED_RGBA_ASTC_8x5_KHR;if(n===ah)return o===Sn?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:r.COMPRESSED_RGBA_ASTC_8x6_KHR;if(n===ch)return o===Sn?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:r.COMPRESSED_RGBA_ASTC_8x8_KHR;if(n===lh)return o===Sn?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:r.COMPRESSED_RGBA_ASTC_10x5_KHR;if(n===uh)return o===Sn?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:r.COMPRESSED_RGBA_ASTC_10x6_KHR;if(n===hh)return o===Sn?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:r.COMPRESSED_RGBA_ASTC_10x8_KHR;if(n===fh)return o===Sn?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:r.COMPRESSED_RGBA_ASTC_10x10_KHR;if(n===dh)return o===Sn?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:r.COMPRESSED_RGBA_ASTC_12x10_KHR;if(n===ph)return o===Sn?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:r.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(n===mh||n===gh||n===xh)if(r=e.get("EXT_texture_compression_bptc"),r!==null){if(n===mh)return o===Sn?r.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:r.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(n===gh)return r.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(n===xh)return r.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(n===_h||n===vh||n===Rl||n===Mh)if(r=e.get("EXT_texture_compression_rgtc"),r!==null){if(n===_h)return r.COMPRESSED_RED_RGTC1_EXT;if(n===vh)return r.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(n===Rl)return r.COMPRESSED_RED_GREEN_RGTC2_EXT;if(n===Mh)return r.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return n===sc?s.UNSIGNED_INT_24_8:s[n]!==void 0?s[n]:null}return{convert:t}}const W1=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,X1=`
uniform sampler2DArray depthColor;
uniform float depthWidth;
uniform float depthHeight;

void main() {

	vec2 coord = vec2( gl_FragCoord.x / depthWidth, gl_FragCoord.y / depthHeight );

	if ( coord.x >= 1.0 ) {

		gl_FragDepth = texture( depthColor, vec3( coord.x - 1.0, coord.y, 1 ) ).r;

	} else {

		gl_FragDepth = texture( depthColor, vec3( coord.x, coord.y, 0 ) ).r;

	}

}`;class q1{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(e,t){if(this.texture===null){const n=new jp(e.texture);(e.depthNear!==t.depthNear||e.depthFar!==t.depthFar)&&(this.depthNear=e.depthNear,this.depthFar=e.depthFar),this.texture=n}}getMesh(e){if(this.texture!==null&&this.mesh===null){const t=e.cameras[0].viewport,n=new ji({vertexShader:W1,fragmentShader:X1,uniforms:{depthColor:{value:this.texture},depthWidth:{value:t.z},depthHeight:{value:t.w}}});this.mesh=new Ut(new ai(20,20),n)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}}class Y1 extends fo{constructor(e,t){super();const n=this;let i=null,r=1,o=null,a="local-floor",c=1,l=null,u=null,f=null,h=null,d=null,m=null;const M=typeof XRWebGLBinding<"u",x=new q1,g={},A=t.getContextAttributes();let I=null,_=null;const w=[],R=[],D=new Ye;let v=null,L=null;const O=new Ni;O.viewport=new Cn;const z=new Ni;z.viewport=new Cn;const K=[O,z],ee=new qx;let X=null,J=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(he){let Me=w[he];return Me===void 0&&(Me=new iu,w[he]=Me),Me.getTargetRaySpace()},this.getControllerGrip=function(he){let Me=w[he];return Me===void 0&&(Me=new iu,w[he]=Me),Me.getGripSpace()},this.getHand=function(he){let Me=w[he];return Me===void 0&&(Me=new iu,w[he]=Me),Me.getHandSpace()};function ce(he){const Me=R.indexOf(he.inputSource);if(Me===-1)return;const We=w[Me];We!==void 0&&(We.update(he.inputSource,he.frame,l||o),We.dispatchEvent({type:he.type,data:he.inputSource}))}function se(){i.removeEventListener("select",ce),i.removeEventListener("selectstart",ce),i.removeEventListener("selectend",ce),i.removeEventListener("squeeze",ce),i.removeEventListener("squeezestart",ce),i.removeEventListener("squeezeend",ce),i.removeEventListener("end",se),i.removeEventListener("inputsourceschange",Ee);for(let he=0;he<w.length;he++){const Me=R[he];Me!==null&&(R[he]=null,w[he].disconnect(Me))}X=null,J=null,x.reset();for(const he in g)delete g[he];if(e.setRenderTarget(I),d=null,h=null,f=null,i=null,_=null,Wt.stop(),n.isPresenting=!1,e.setPixelRatio(v),e.setSize(D.width,D.height,!1),L!==null){const he=L.camera;he.fov=L.fov,he.zoom=L.zoom,he.updateProjectionMatrix(),L=null}n.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(he){r=he,n.isPresenting===!0&&yt("WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(he){a=he,n.isPresenting===!0&&yt("WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return l||o},this.setReferenceSpace=function(he){l=he},this.getBaseLayer=function(){return h!==null?h:d},this.getBinding=function(){return f===null&&M&&(f=new XRWebGLBinding(i,t)),f},this.getFrame=function(){return m},this.getSession=function(){return i},this.setSession=async function(he){if(i=he,i!==null){if(I=e.getRenderTarget(),i.addEventListener("select",ce),i.addEventListener("selectstart",ce),i.addEventListener("selectend",ce),i.addEventListener("squeeze",ce),i.addEventListener("squeezestart",ce),i.addEventListener("squeezeend",ce),i.addEventListener("end",se),i.addEventListener("inputsourceschange",Ee),A.xrCompatible!==!0&&await t.makeXRCompatible(),v=e.getPixelRatio(),e.getSize(D),M&&"createProjectionLayer"in XRWebGLBinding.prototype){let We=null,lt=null,je=null;A.depth&&(je=A.stencil?t.DEPTH24_STENCIL8:t.DEPTH_COMPONENT24,We=A.stencil?io:cr,lt=A.stencil?sc:Gs);const Tt={colorFormat:t.RGBA8,depthFormat:je,scaleFactor:r};f=this.getBinding(),h=f.createProjectionLayer(Tt),i.updateRenderState({layers:[h]}),e.setPixelRatio(1),e.setSize(h.textureWidth,h.textureHeight,!1),_=new ys(h.textureWidth,h.textureHeight,{format:ss,type:Yi,depthTexture:new uc(h.textureWidth,h.textureHeight,lt,void 0,void 0,void 0,void 0,void 0,void 0,We),stencilBuffer:A.stencil,colorSpace:e.outputColorSpace,samples:A.antialias?4:0,resolveDepthBuffer:h.ignoreDepthValues===!1,resolveStencilBuffer:h.ignoreDepthValues===!1,storeMultisampledDepthBuffer:h.ignoreDepthValues===!1,storeMultisampledStencilBuffer:h.ignoreDepthValues===!1})}else{const We={antialias:A.antialias,alpha:!0,depth:A.depth,stencil:A.stencil,framebufferScaleFactor:r};d=new XRWebGLLayer(i,t,We),i.updateRenderState({baseLayer:d}),e.setPixelRatio(1),e.setSize(d.framebufferWidth,d.framebufferHeight,!1),_=new ys(d.framebufferWidth,d.framebufferHeight,{format:ss,type:Yi,colorSpace:e.outputColorSpace,stencilBuffer:A.stencil,resolveDepthBuffer:d.ignoreDepthValues===!1,resolveStencilBuffer:d.ignoreDepthValues===!1,storeMultisampledDepthBuffer:d.ignoreDepthValues===!1,storeMultisampledStencilBuffer:d.ignoreDepthValues===!1})}_.isXRRenderTarget=!0,this.setFoveation(c),l=null,o=await i.requestReferenceSpace(a),Wt.setContext(i),Wt.start(),n.isPresenting=!0,n.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(i!==null)return i.environmentBlendMode},this.getDepthTexture=function(){return x.getDepthTexture()};function Ee(he){for(let Me=0;Me<he.removed.length;Me++){const We=he.removed[Me],lt=R.indexOf(We);lt>=0&&(R[lt]=null,w[lt].disconnect(We))}for(let Me=0;Me<he.added.length;Me++){const We=he.added[Me];let lt=R.indexOf(We);if(lt===-1){for(let Tt=0;Tt<w.length;Tt++)if(Tt>=R.length){R.push(We),lt=Tt;break}else if(R[Tt]===null){R[Tt]=We,lt=Tt;break}if(lt===-1)break}const je=w[lt];je&&je.connect(We)}}const ue=new V,ge=new V;function Se(he,Me,We){ue.setFromMatrixPosition(Me.matrixWorld),ge.setFromMatrixPosition(We.matrixWorld);const lt=ue.distanceTo(ge),je=Me.projectionMatrix.elements,Tt=We.projectionMatrix.elements,tn=je[14]/(je[10]-1),be=je[14]/(je[10]+1),Ae=(je[9]+1)/je[5],Re=(je[9]-1)/je[5],Pe=(je[8]-1)/je[0],Ve=(Tt[8]+1)/Tt[0],vt=tn*Pe,ut=tn*Ve,Mt=lt/(-Pe+Ve),re=Mt*-Pe;if(Me.matrixWorld.decompose(he.position,he.quaternion,he.scale),he.translateX(re),he.translateZ(Mt),he.matrixWorld.compose(he.position,he.quaternion,he.scale),he.matrixWorldInverse.copy(he.matrixWorld).invert(),je[10]===-1)he.projectionMatrix.copy(Me.projectionMatrix),he.projectionMatrixInverse.copy(Me.projectionMatrixInverse);else{const F=tn+Mt,xt=be+Mt,Ct=vt-re,U=ut+(lt-re),y=Ae*be/xt*F,$=Re*be/xt*F;he.projectionMatrix.makePerspective(Ct,U,y,$,F,xt),he.projectionMatrixInverse.copy(he.projectionMatrix).invert()}}function tt(he,Me){Me===null?he.matrixWorld.copy(he.matrix):he.matrixWorld.multiplyMatrices(Me.matrixWorld,he.matrix),he.matrixWorldInverse.copy(he.matrixWorld).invert()}this.updateCamera=function(he){if(i===null)return;let Me=he.near,We=he.far;x.texture!==null&&(x.depthNear>0&&(Me=x.depthNear),x.depthFar>0&&(We=x.depthFar)),ee.near=z.near=O.near=Me,ee.far=z.far=O.far=We,(X!==ee.near||J!==ee.far)&&(i.updateRenderState({depthNear:ee.near,depthFar:ee.far}),X=ee.near,J=ee.far),ee.layers.mask=he.layers.mask|6,O.layers.mask=ee.layers.mask&-5,z.layers.mask=ee.layers.mask&-3;const lt=he.parent,je=ee.cameras;tt(ee,lt);for(let Tt=0;Tt<je.length;Tt++)tt(je[Tt],lt);je.length===2?Se(ee,O,z):ee.projectionMatrix.copy(O.projectionMatrix),L===null&&he.isPerspectiveCamera&&(L={camera:he,fov:he.fov,zoom:he.zoom}),Ze(he,ee,lt)};function Ze(he,Me,We){We===null?he.matrix.copy(Me.matrixWorld):(he.matrix.copy(We.matrixWorld),he.matrix.invert(),he.matrix.multiply(Me.matrixWorld)),he.matrix.decompose(he.position,he.quaternion,he.scale),he.updateMatrixWorld(!0),he.projectionMatrix.copy(Me.projectionMatrix),he.projectionMatrixInverse.copy(Me.projectionMatrixInverse),he.isPerspectiveCamera&&(he.fov=ra*2*Math.atan(1/he.projectionMatrix.elements[5]),he.zoom=1)}this.getCamera=function(){return ee},this.getFoveation=function(){if(!(h===null&&d===null))return c},this.setFoveation=function(he){c=he,h!==null&&(h.fixedFoveation=he),d!==null&&d.fixedFoveation!==void 0&&(d.fixedFoveation=he)},this.hasDepthSensing=function(){return x.texture!==null},this.getDepthSensingMesh=function(){return x.getMesh(ee)},this.getCameraTexture=function(he){return g[he]};let At=null;function bt(he,Me){if(u=Me.getViewerPose(l||o),m=Me,u!==null){const We=u.views;d!==null&&(e.setRenderTargetFramebuffer(_,d.framebuffer),e.setRenderTarget(_));let lt=!1;We.length!==ee.cameras.length&&(ee.cameras.length=0,lt=!0);for(let be=0;be<We.length;be++){const Ae=We[be];let Re=null;if(d!==null)Re=d.getViewport(Ae);else{const Ve=f.getViewSubImage(h,Ae);Re=Ve.viewport,be===0&&(e.setRenderTargetTextures(_,Ve.colorTexture,Ve.depthStencilTexture),e.setRenderTarget(_))}let Pe=K[be];Pe===void 0&&(Pe=new Ni,Pe.layers.enable(be),Pe.viewport=new Cn,K[be]=Pe),Pe.matrix.fromArray(Ae.transform.matrix),Pe.matrix.decompose(Pe.position,Pe.quaternion,Pe.scale),Pe.projectionMatrix.fromArray(Ae.projectionMatrix),Pe.projectionMatrixInverse.copy(Pe.projectionMatrix).invert(),Pe.viewport.set(Re.x,Re.y,Re.width,Re.height),be===0&&(ee.matrix.copy(Pe.matrix),ee.matrix.decompose(ee.position,ee.quaternion,ee.scale)),lt===!0&&ee.cameras.push(Pe)}const je=i.enabledFeatures;if(je&&je.includes("depth-sensing")&&i.depthUsage=="gpu-optimized"&&M){f=n.getBinding();const be=f.getDepthInformation(We[0]);be&&be.isValid&&be.texture&&x.init(be,i.renderState)}if(je&&je.includes("camera-access")&&M){e.state.unbindTexture(),f=n.getBinding();for(let be=0;be<We.length;be++){const Ae=We[be].camera;if(Ae){let Re=g[Ae];Re||(Re=new jp,g[Ae]=Re);const Pe=f.getCameraImage(Ae);Re.sourceTexture=Pe}}}}for(let We=0;We<w.length;We++){const lt=R[We],je=w[We];lt!==null&&je!==void 0&&je.update(lt,Me,l||o)}At&&At(he,Me),Me.detectedPlanes&&n.dispatchEvent({type:"planesdetected",data:Me}),m=null}const Wt=new f0;Wt.setAnimationLoop(bt),this.setAnimationLoop=function(he){At=he},this.dispose=function(){}}}const K1=new zt,v0=new Gt;v0.set(-1,0,0,0,1,0,0,0,1);function j1(s,e){function t(x,g){x.matrixAutoUpdate===!0&&x.updateMatrix(),g.value.copy(x.matrix)}function n(x,g){g.color.getRGB(x.fogColor.value,o0(s)),g.isFog?(x.fogNear.value=g.near,x.fogFar.value=g.far):g.isFogExp2&&(x.fogDensity.value=g.density)}function i(x,g,A,I,_){g.isNodeMaterial?g.uniformsNeedUpdate=!1:g.isMeshBasicMaterial?r(x,g):g.isMeshLambertMaterial?(r(x,g),g.envMap&&(x.envMapIntensity.value=g.envMapIntensity)):g.isMeshToonMaterial?(r(x,g),f(x,g)):g.isMeshPhongMaterial?(r(x,g),u(x,g),g.envMap&&(x.envMapIntensity.value=g.envMapIntensity)):g.isMeshStandardMaterial?(r(x,g),h(x,g),g.isMeshPhysicalMaterial&&d(x,g,_)):g.isMeshMatcapMaterial?(r(x,g),m(x,g)):g.isMeshDepthMaterial?r(x,g):g.isMeshDistanceMaterial?(r(x,g),M(x,g)):g.isMeshNormalMaterial?r(x,g):g.isLineBasicMaterial?(o(x,g),g.isLineDashedMaterial&&a(x,g)):g.isPointsMaterial?c(x,g,A,I):g.isSpriteMaterial?l(x,g):g.isShadowMaterial?(x.color.value.copy(g.color),x.opacity.value=g.opacity):g.isShaderMaterial&&(g.uniformsNeedUpdate=!1)}function r(x,g){x.opacity.value=g.opacity,g.color&&x.diffuse.value.copy(g.color),g.emissive&&x.emissive.value.copy(g.emissive).multiplyScalar(g.emissiveIntensity),g.map&&(x.map.value=g.map,t(g.map,x.mapTransform)),g.alphaMap&&(x.alphaMap.value=g.alphaMap,t(g.alphaMap,x.alphaMapTransform)),g.bumpMap&&(x.bumpMap.value=g.bumpMap,t(g.bumpMap,x.bumpMapTransform),x.bumpScale.value=g.bumpScale,g.side===Di&&(x.bumpScale.value*=-1)),g.normalMap&&(x.normalMap.value=g.normalMap,t(g.normalMap,x.normalMapTransform),x.normalScale.value.copy(g.normalScale),g.side===Di&&x.normalScale.value.negate()),g.displacementMap&&(x.displacementMap.value=g.displacementMap,t(g.displacementMap,x.displacementMapTransform),x.displacementScale.value=g.displacementScale,x.displacementBias.value=g.displacementBias),g.emissiveMap&&(x.emissiveMap.value=g.emissiveMap,t(g.emissiveMap,x.emissiveMapTransform)),g.specularMap&&(x.specularMap.value=g.specularMap,t(g.specularMap,x.specularMapTransform)),g.alphaTest>0&&(x.alphaTest.value=g.alphaTest);const A=e.get(g),I=A.envMap,_=A.envMapRotation;I&&(x.envMap.value=I,x.envMapRotation.value.setFromMatrix4(K1.makeRotationFromEuler(_)).transpose(),I.isCubeTexture&&I.isRenderTargetTexture===!1&&x.envMapRotation.value.premultiply(v0),x.reflectivity.value=g.reflectivity,x.ior.value=g.ior,x.refractionRatio.value=g.refractionRatio),g.lightMap&&(x.lightMap.value=g.lightMap,x.lightMapIntensity.value=g.lightMapIntensity,t(g.lightMap,x.lightMapTransform)),g.aoMap&&(x.aoMap.value=g.aoMap,x.aoMapIntensity.value=g.aoMapIntensity,t(g.aoMap,x.aoMapTransform))}function o(x,g){x.diffuse.value.copy(g.color),x.opacity.value=g.opacity,g.map&&(x.map.value=g.map,t(g.map,x.mapTransform))}function a(x,g){x.dashSize.value=g.dashSize,x.totalSize.value=g.dashSize+g.gapSize,x.scale.value=g.scale}function c(x,g,A,I){x.diffuse.value.copy(g.color),x.opacity.value=g.opacity,x.size.value=g.size*A,x.scale.value=I*.5,g.map&&(x.map.value=g.map,t(g.map,x.uvTransform)),g.alphaMap&&(x.alphaMap.value=g.alphaMap,t(g.alphaMap,x.alphaMapTransform)),g.alphaTest>0&&(x.alphaTest.value=g.alphaTest)}function l(x,g){x.diffuse.value.copy(g.color),x.opacity.value=g.opacity,x.rotation.value=g.rotation,g.map&&(x.map.value=g.map,t(g.map,x.mapTransform)),g.alphaMap&&(x.alphaMap.value=g.alphaMap,t(g.alphaMap,x.alphaMapTransform)),g.alphaTest>0&&(x.alphaTest.value=g.alphaTest)}function u(x,g){x.specular.value.copy(g.specular),x.shininess.value=Math.max(g.shininess,1e-4)}function f(x,g){g.gradientMap&&(x.gradientMap.value=g.gradientMap)}function h(x,g){x.metalness.value=g.metalness,g.metalnessMap&&(x.metalnessMap.value=g.metalnessMap,t(g.metalnessMap,x.metalnessMapTransform)),x.roughness.value=g.roughness,g.roughnessMap&&(x.roughnessMap.value=g.roughnessMap,t(g.roughnessMap,x.roughnessMapTransform)),g.envMap&&(x.envMapIntensity.value=g.envMapIntensity)}function d(x,g,A){x.ior.value=g.ior,g.sheen>0&&(x.sheenColor.value.copy(g.sheenColor).multiplyScalar(g.sheen),x.sheenRoughness.value=g.sheenRoughness,g.sheenColorMap&&(x.sheenColorMap.value=g.sheenColorMap,t(g.sheenColorMap,x.sheenColorMapTransform)),g.sheenRoughnessMap&&(x.sheenRoughnessMap.value=g.sheenRoughnessMap,t(g.sheenRoughnessMap,x.sheenRoughnessMapTransform))),g.clearcoat>0&&(x.clearcoat.value=g.clearcoat,x.clearcoatRoughness.value=g.clearcoatRoughness,g.clearcoatMap&&(x.clearcoatMap.value=g.clearcoatMap,t(g.clearcoatMap,x.clearcoatMapTransform)),g.clearcoatRoughnessMap&&(x.clearcoatRoughnessMap.value=g.clearcoatRoughnessMap,t(g.clearcoatRoughnessMap,x.clearcoatRoughnessMapTransform)),g.clearcoatNormalMap&&(x.clearcoatNormalMap.value=g.clearcoatNormalMap,t(g.clearcoatNormalMap,x.clearcoatNormalMapTransform),x.clearcoatNormalScale.value.copy(g.clearcoatNormalScale),g.side===Di&&x.clearcoatNormalScale.value.negate())),g.dispersion>0&&(x.dispersion.value=g.dispersion),g.retroreflectivity>0&&(x.retroreflectivity.value=g.retroreflectivity),g.iridescence>0&&(x.iridescence.value=g.iridescence,x.iridescenceIOR.value=g.iridescenceIOR,x.iridescenceThicknessMinimum.value=g.iridescenceThicknessRange[0],x.iridescenceThicknessMaximum.value=g.iridescenceThicknessRange[1],g.iridescenceMap&&(x.iridescenceMap.value=g.iridescenceMap,t(g.iridescenceMap,x.iridescenceMapTransform)),g.iridescenceThicknessMap&&(x.iridescenceThicknessMap.value=g.iridescenceThicknessMap,t(g.iridescenceThicknessMap,x.iridescenceThicknessMapTransform))),g.transmission>0&&(x.transmission.value=g.transmission,x.transmissionSamplerMap.value=A.texture,x.transmissionSamplerSize.value.set(A.width,A.height),g.transmissionMap&&(x.transmissionMap.value=g.transmissionMap,t(g.transmissionMap,x.transmissionMapTransform)),x.thickness.value=g.thickness,g.thicknessMap&&(x.thicknessMap.value=g.thicknessMap,t(g.thicknessMap,x.thicknessMapTransform)),x.attenuationDistance.value=g.attenuationDistance,x.attenuationColor.value.copy(g.attenuationColor)),g.anisotropy>0&&(x.anisotropyVector.value.set(g.anisotropy*Math.cos(g.anisotropyRotation),g.anisotropy*Math.sin(g.anisotropyRotation)),g.anisotropyMap&&(x.anisotropyMap.value=g.anisotropyMap,t(g.anisotropyMap,x.anisotropyMapTransform))),x.specularIntensity.value=g.specularIntensity,x.specularColor.value.copy(g.specularColor),g.specularColorMap&&(x.specularColorMap.value=g.specularColorMap,t(g.specularColorMap,x.specularColorMapTransform)),g.specularIntensityMap&&(x.specularIntensityMap.value=g.specularIntensityMap,t(g.specularIntensityMap,x.specularIntensityMapTransform))}function m(x,g){g.matcap&&(x.matcap.value=g.matcap)}function M(x,g){const A=e.get(g).light;x.referencePosition.value.setFromMatrixPosition(A.matrixWorld),x.nearDistance.value=A.shadow.camera.near,x.farDistance.value=A.shadow.camera.far}return{refreshFogUniforms:n,refreshMaterialUniforms:i}}function $1(s,e,t,n){let i={},r={},o=[];const a=s.getParameter(s.MAX_UNIFORM_BUFFER_BINDINGS);function c(_,w){const R=w.program;n.uniformBlockBinding(_,R)}function l(_,w){let R=i[_.id];R===void 0&&(x(_),R=u(_),i[_.id]=R,_.addEventListener("dispose",A));const D=w.program;n.updateUBOMapping(_,D);const v=e.render.frame;r[_.id]!==v&&(h(_),r[_.id]=v)}function u(_){const w=f();_.__bindingPointIndex=w;const R=s.createBuffer(),D=_.__size,v=_.usage;return s.bindBuffer(s.UNIFORM_BUFFER,R),s.bufferData(s.UNIFORM_BUFFER,D,v),s.bindBuffer(s.UNIFORM_BUFFER,null),s.bindBufferBase(s.UNIFORM_BUFFER,w,R),R}function f(){for(let _=0;_<a;_++)if(o.indexOf(_)===-1)return o.push(_),_;return kt("WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function h(_){const w=i[_.id],R=_.uniforms,D=_.__cache;s.bindBuffer(s.UNIFORM_BUFFER,w);for(let v=0,L=R.length;v<L;v++){const O=R[v];if(Array.isArray(O))for(let z=0,K=O.length;z<K;z++)d(O[z],v,z,D);else d(O,v,0,D)}s.bindBuffer(s.UNIFORM_BUFFER,null)}function d(_,w,R,D){if(M(_,w,R,D)===!0){const v=_.__offset,L=_.value;if(Array.isArray(L)){let O=0;for(let z=0;z<L.length;z++){const K=L[z],ee=g(K);m(K,_.__data,O),typeof K!="number"&&typeof K!="boolean"&&!K.isMatrix3&&!ArrayBuffer.isView(K)&&(O+=ee.storage/Float32Array.BYTES_PER_ELEMENT)}}else m(L,_.__data,0);s.bufferSubData(s.UNIFORM_BUFFER,v,_.__data)}}function m(_,w,R){typeof _=="number"||typeof _=="boolean"?w[0]=_:_.isMatrix3?(w[0]=_.elements[0],w[1]=_.elements[1],w[2]=_.elements[2],w[3]=0,w[4]=_.elements[3],w[5]=_.elements[4],w[6]=_.elements[5],w[7]=0,w[8]=_.elements[6],w[9]=_.elements[7],w[10]=_.elements[8],w[11]=0):ArrayBuffer.isView(_)?w.set(new _.constructor(_.buffer,_.byteOffset,w.length)):_.toArray(w,R)}function M(_,w,R,D){const v=_.value,L=w+"_"+R;if(D[L]===void 0)return typeof v=="number"||typeof v=="boolean"?D[L]=v:ArrayBuffer.isView(v)?D[L]=v.slice():D[L]=v.clone(),!0;{const O=D[L];if(typeof v=="number"||typeof v=="boolean"){if(O!==v)return D[L]=v,!0}else{if(ArrayBuffer.isView(v))return!0;if(O.equals(v)===!1)return O.copy(v),!0}}return!1}function x(_){const w=_.uniforms;let R=0;const D=16;for(let L=0,O=w.length;L<O;L++){const z=Array.isArray(w[L])?w[L]:[w[L]];for(let K=0,ee=z.length;K<ee;K++){const X=z[K],J=Array.isArray(X.value)?X.value:[X.value];for(let ce=0,se=J.length;ce<se;ce++){const Ee=J[ce],ue=g(Ee),ge=R%D,Se=ge%ue.boundary,tt=ge+Se;R+=Se,tt!==0&&D-tt<ue.storage&&(R+=D-tt),X.__data=new Float32Array(ue.storage/Float32Array.BYTES_PER_ELEMENT),X.__offset=R,R+=ue.storage}}}const v=R%D;return v>0&&(R+=D-v),_.__size=R,_.__cache={},this}function g(_){const w={boundary:0,storage:0};return typeof _=="number"||typeof _=="boolean"?(w.boundary=4,w.storage=4):_.isVector2?(w.boundary=8,w.storage=8):_.isVector3||_.isColor?(w.boundary=16,w.storage=12):_.isVector4?(w.boundary=16,w.storage=16):_.isMatrix3?(w.boundary=48,w.storage=48):_.isMatrix4?(w.boundary=64,w.storage=64):_.isTexture?yt("WebGLRenderer: Texture samplers can not be part of an uniforms group."):ArrayBuffer.isView(_)?(w.boundary=16,w.storage=_.byteLength):yt("WebGLRenderer: Unsupported uniform value type.",_),w}function A(_){const w=_.target;w.removeEventListener("dispose",A);const R=o.indexOf(w.__bindingPointIndex);o.splice(R,1),s.deleteBuffer(i[w.id]),delete i[w.id],delete r[w.id]}function I(){for(const _ in i)s.deleteBuffer(i[_]);o=[],i={},r={}}return{bind:c,update:l,dispose:I}}const Z1=new Uint16Array([12469,15057,12620,14925,13266,14620,13807,14376,14323,13990,14545,13625,14713,13328,14840,12882,14931,12528,14996,12233,15039,11829,15066,11525,15080,11295,15085,10976,15082,10705,15073,10495,13880,14564,13898,14542,13977,14430,14158,14124,14393,13732,14556,13410,14702,12996,14814,12596,14891,12291,14937,11834,14957,11489,14958,11194,14943,10803,14921,10506,14893,10278,14858,9960,14484,14039,14487,14025,14499,13941,14524,13740,14574,13468,14654,13106,14743,12678,14818,12344,14867,11893,14889,11509,14893,11180,14881,10751,14852,10428,14812,10128,14765,9754,14712,9466,14764,13480,14764,13475,14766,13440,14766,13347,14769,13070,14786,12713,14816,12387,14844,11957,14860,11549,14868,11215,14855,10751,14825,10403,14782,10044,14729,9651,14666,9352,14599,9029,14967,12835,14966,12831,14963,12804,14954,12723,14936,12564,14917,12347,14900,11958,14886,11569,14878,11247,14859,10765,14828,10401,14784,10011,14727,9600,14660,9289,14586,8893,14508,8533,15111,12234,15110,12234,15104,12216,15092,12156,15067,12010,15028,11776,14981,11500,14942,11205,14902,10752,14861,10393,14812,9991,14752,9570,14682,9252,14603,8808,14519,8445,14431,8145,15209,11449,15208,11451,15202,11451,15190,11438,15163,11384,15117,11274,15055,10979,14994,10648,14932,10343,14871,9936,14803,9532,14729,9218,14645,8742,14556,8381,14461,8020,14365,7603,15273,10603,15272,10607,15267,10619,15256,10631,15231,10614,15182,10535,15118,10389,15042,10167,14963,9787,14883,9447,14800,9115,14710,8665,14615,8318,14514,7911,14411,7507,14279,7198,15314,9675,15313,9683,15309,9712,15298,9759,15277,9797,15229,9773,15166,9668,15084,9487,14995,9274,14898,8910,14800,8539,14697,8234,14590,7790,14479,7409,14367,7067,14178,6621,15337,8619,15337,8631,15333,8677,15325,8769,15305,8871,15264,8940,15202,8909,15119,8775,15022,8565,14916,8328,14804,8009,14688,7614,14569,7287,14448,6888,14321,6483,14088,6171,15350,7402,15350,7419,15347,7480,15340,7613,15322,7804,15287,7973,15229,8057,15148,8012,15046,7846,14933,7611,14810,7357,14682,7069,14552,6656,14421,6316,14251,5948,14007,5528,15356,5942,15356,5977,15353,6119,15348,6294,15332,6551,15302,6824,15249,7044,15171,7122,15070,7050,14949,6861,14818,6611,14679,6349,14538,6067,14398,5651,14189,5311,13935,4958,15359,4123,15359,4153,15356,4296,15353,4646,15338,5160,15311,5508,15263,5829,15188,6042,15088,6094,14966,6001,14826,5796,14678,5543,14527,5287,14377,4985,14133,4586,13869,4257,15360,1563,15360,1642,15358,2076,15354,2636,15341,3350,15317,4019,15273,4429,15203,4732,15105,4911,14981,4932,14836,4818,14679,4621,14517,4386,14359,4156,14083,3795,13808,3437,15360,122,15360,137,15358,285,15355,636,15344,1274,15322,2177,15281,2765,15215,3223,15120,3451,14995,3569,14846,3567,14681,3466,14511,3305,14344,3121,14037,2800,13753,2467,15360,0,15360,1,15359,21,15355,89,15346,253,15325,479,15287,796,15225,1148,15133,1492,15008,1749,14856,1882,14685,1886,14506,1783,14324,1608,13996,1398,13702,1183]);let Ls=null;function J1(){return Ls===null&&(Ls=new Jh(Z1,16,16,uo,Ws),Ls.name="DFG_LUT",Ls.minFilter=li,Ls.magFilter=li,Ls.wrapS=Bs,Ls.wrapT=Bs,Ls.generateMipmaps=!1,Ls.needsUpdate=!0),Ls}class Q1{constructor(e={}){const{canvas:t=Xm(),context:n=null,depth:i=!0,stencil:r=!1,alpha:o=!1,antialias:a=!1,premultipliedAlpha:c=!0,preserveDrawingBuffer:l=!1,powerPreference:u="default",failIfMajorPerformanceCaveat:f=!1,reversedDepthBuffer:h=!1,outputBufferType:d=Yi}=e;this.isWebGLRenderer=!0;let m;if(n!==null){if(typeof WebGLRenderingContext<"u"&&n instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");m=n.getContextAttributes().alpha}else m=o;const M=d,x=new Set([qh,Xh,Wh]),g=new Set([Yi,Gs,ic,sc,Hh,Vh]),A=new Uint32Array(4),I=new Int32Array(4),_=new V;let w=null,R=null;const D=[],v=[];let L=null;this.domElement=t,this.debug={checkShaderErrors:!0,diagnostics:{keywords:!1},onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.toneMapping=Hs,this.toneMappingExposure=1,this.transmissionResolutionScale=1;const O=this;let z=!1,K=null,ee=null,X=null,J=null;this._outputColorSpace=Xn;let ce=0,se=0,Ee=null,ue=-1,ge=null;const Se=new Cn,tt=new Cn;let Ze=null;const At=new it(0);let bt=0,Wt=t.width,he=t.height,Me=1,We=null,lt=null;const je=new Cn(0,0,Wt,he),Tt=new Cn(0,0,Wt,he);let tn=!1;const be=new ef;let Ae=!1,Re=!1;const Pe=new zt,Ve=new V,vt=new Cn,ut={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};let Mt=!1;function re(){return Ee===null?Me:1}let F=n;function xt(C,q){return t.getContext(C,q)}let Ct,U,y,$,ie,de,Le,ke,pe,xe,Ce,rt,Xe,ze,ot,_t,It,Y,Ue,ye,qe,Ke,we;try{const C={alpha:!0,depth:i,stencil:r,antialias:a,premultipliedAlpha:c,preserveDrawingBuffer:l,powerPreference:u,failIfMajorPerformanceCaveat:f};if("setAttribute"in t&&t.setAttribute("data-engine",`three.js r${Bh}`),t.addEventListener("webglcontextlost",hn,!1),t.addEventListener("webglcontextrestored",Yt,!1),t.addEventListener("webglcontextcreationerror",Ai,!1),F===null){const q="webgl2";if(F=xt(q,C),F===null)throw xt(q)?new Error("THREE.WebGLRenderer: Error creating WebGL context with your selected attributes."):new Error("THREE.WebGLRenderer: Error creating WebGL context.")}dt()}catch(C){throw t.removeEventListener("webglcontextlost",hn,!1),t.removeEventListener("webglcontextrestored",Yt,!1),t.removeEventListener("webglcontextcreationerror",Ai,!1),kt("WebGLRenderer: "+C.message),C}function dt(){Ct=new JM(F),Ct.init(),qe=new G1(F,Ct),U=new VM(F,Ct,e,qe),y=new H1(F,Ct),U.reversedDepthBuffer&&h&&y.buffers.depth.setReversed(!0),ee=F.createFramebuffer(),X=F.createFramebuffer(),J=F.createFramebuffer(),$=new ty(F),ie=new A1,de=new V1(F,Ct,y,ie,U,qe,$),Le=new ZM(O),ke=new i_(F),Ke=new zM(F,ke),pe=new QM(F,ke,$,Ke),xe=new iy(F,pe,ke,Ke,$),Y=new ny(F,U,de),ot=new GM(ie),Ce=new w1(O,Le,Ct,U,Ke,ot),rt=new j1(O,ie),Xe=new C1,ze=new U1(Ct),It=new kM(O,Le,y,xe,m,c),_t=new z1(O,xe,U),we=new $1(F,$,U,y),Ue=new HM(F,Ct,$),ye=new ey(F,Ct,$),$.programs=Ce.programs,O.capabilities=U,O.extensions=Ct,O.properties=ie,O.renderLists=Xe,O.shadowMap=_t,O.state=y,O.info=$}M!==Yi&&(L=new ry(M,t.width,t.height,a,i,r));const ct=new Y1(O,F);this.xr=ct,this.getContext=function(){return F},this.getContextAttributes=function(){return F.getContextAttributes()},this.forceContextLoss=function(){const C=Ct.get("WEBGL_lose_context");C&&C.loseContext()},this.forceContextRestore=function(){const C=Ct.get("WEBGL_lose_context");C&&C.restoreContext()},this.getPixelRatio=function(){return Me},this.setPixelRatio=function(C){C!==void 0&&(Me=C,this.setSize(Wt,he,!1))},this.getSize=function(C){return C.set(Wt,he)},this.setSize=function(C,q,oe=!0){if(ct.isPresenting){yt("WebGLRenderer: Can't change size while VR device is presenting.");return}Wt=C,he=q,t.width=Math.floor(C*Me),t.height=Math.floor(q*Me),oe===!0&&(t.style.width=C+"px",t.style.height=q+"px"),L!==null&&L.setSize(t.width,t.height),this.setViewport(0,0,C,q)},this.getDrawingBufferSize=function(C){return C.set(Wt*Me,he*Me).floor()},this.setDrawingBufferSize=function(C,q,oe){Wt=C,he=q,Me=oe,t.width=Math.floor(C*oe),t.height=Math.floor(q*oe),this.setViewport(0,0,C,q)},this.setEffects=function(C){if(M===Yi){kt("WebGLRenderer: setEffects() requires outputBufferType set to HalfFloatType or FloatType.");return}if(C){for(let q=0;q<C.length;q++)if(C[q].isOutputPass===!0){yt("WebGLRenderer: OutputPass is not needed in setEffects(). Tone mapping and color space conversion are applied automatically.");break}}L.setEffects(C||[])},this.getCurrentViewport=function(C){return C.copy(Se)},this.getViewport=function(C){return C.copy(je)},this.setViewport=function(C,q,oe,te){C.isVector4?je.set(C.x,C.y,C.z,C.w):je.set(C,q,oe,te),y.viewport(Se.copy(je).multiplyScalar(Me).round())},this.getScissor=function(C){return C.copy(Tt)},this.setScissor=function(C,q,oe,te){C.isVector4?Tt.set(C.x,C.y,C.z,C.w):Tt.set(C,q,oe,te),y.scissor(tt.copy(Tt).multiplyScalar(Me).round())},this.getScissorTest=function(){return tn},this.setScissorTest=function(C){y.setScissorTest(tn=C)},this.setOpaqueSort=function(C){We=C},this.setTransparentSort=function(C){lt=C},this.getClearColor=function(C){return C.copy(It.getClearColor())},this.setClearColor=function(){It.setClearColor(...arguments)},this.getClearAlpha=function(){return It.getClearAlpha()},this.setClearAlpha=function(){It.setClearAlpha(...arguments)},this.clear=function(C=!0,q=!0,oe=!0){let te=0;if(C){let Q=!1;if(Ee!==null){const Ne=Ee.texture.format;Q=x.has(Ne)}if(Q){const Ne=Ee.texture.type,Je=g.has(Ne),Fe=It.getClearColor(),Qe=It.getClearAlpha(),nt=Fe.r,St=Fe.g,Rt=Fe.b;Je?(A[0]=nt,A[1]=St,A[2]=Rt,A[3]=Qe,F.clearBufferuiv(F.COLOR,0,A)):(I[0]=nt,I[1]=St,I[2]=Rt,I[3]=Qe,F.clearBufferiv(F.COLOR,0,I))}else te|=F.COLOR_BUFFER_BIT}q&&(te|=F.DEPTH_BUFFER_BIT,this.state.buffers.depth.setMask(!0)),oe&&(te|=F.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),te!==0&&F.clear(te)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.setNodesHandler=function(C){C.setRenderer(this),K=C},this.dispose=function(){t.removeEventListener("webglcontextlost",hn,!1),t.removeEventListener("webglcontextrestored",Yt,!1),t.removeEventListener("webglcontextcreationerror",Ai,!1),It.dispose(),Xe.dispose(),ze.dispose(),ie.dispose(),Le.dispose(),xe.dispose(),Ke.dispose(),we.dispose(),Ce.dispose(),ct.dispose(),ct.removeEventListener("sessionstart",$i),ct.removeEventListener("sessionend",En),si.stop()};function hn(C){C.preventDefault(),Pl("WebGLRenderer: Context Lost."),z=!0}function Yt(){Pl("WebGLRenderer: Context Restored."),z=!1;const C=$.autoReset,q=_t.enabled,oe=_t.autoUpdate,te=_t.needsUpdate,Q=_t.type;dt(),$.autoReset=C,_t.enabled=q,_t.autoUpdate=oe,_t.needsUpdate=te,_t.type=Q}function Ai(C){kt("WebGLRenderer: A WebGL context could not be created. Reason: ",C.statusMessage)}function bi(C){const q=C.target;q.removeEventListener("dispose",bi),ht(q)}function ht(C){ii(C),ie.remove(C)}function ii(C){const q=ie.get(C).programs;q!==void 0&&(q.forEach(function(oe){Ce.releaseProgram(oe)}),C.isShaderMaterial&&Ce.releaseShaderCache(C))}this.renderBufferDirect=function(C,q,oe,te,Q,Ne){q===null&&(q=ut);const Je=Q.isMesh&&Q.matrixWorld.determinantAffine()<0,Fe=ls(C,q,oe,te,Q);y.setMaterial(te,Je);let Qe=oe.index,nt=1;if(te.wireframe===!0){if(Qe=pe.getWireframeAttribute(oe),Qe===void 0)return;nt=2}const St=oe.drawRange,Rt=oe.attributes.position;let st=St.start*nt,an=(St.start+St.count)*nt;Ne!==null&&(st=Math.max(st,Ne.start*nt),an=Math.min(an,(Ne.start+Ne.count)*nt)),Qe!==null?(st=Math.max(st,0),an=Math.min(an,Qe.count)):Rt!=null&&(st=Math.max(st,0),an=Math.min(an,Rt.count));const yn=an-st;if(yn<0||yn===1/0)return;Ke.setup(Q,te,Fe,oe,Qe);let Ht,nn=Ue;if(Qe!==null&&(Ht=ke.get(Qe),nn=ye,nn.setIndex(Ht)),Q.isMesh)te.wireframe===!0?(y.setLineWidth(te.wireframeLinewidth*re()),nn.setMode(F.LINES)):nn.setMode(F.TRIANGLES);else if(Q.isLine){let Ot=te.linewidth;Ot===void 0&&(Ot=1),y.setLineWidth(Ot*re()),Q.isLineSegments?nn.setMode(F.LINES):Q.isLineLoop?nn.setMode(F.LINE_LOOP):nn.setMode(F.LINE_STRIP)}else Q.isPoints?nn.setMode(F.POINTS):Q.isSprite&&nn.setMode(F.TRIANGLES);if(Q.isBatchedMesh)if(Ct.get("WEBGL_multi_draw"))nn.renderMultiDraw(Q._multiDrawStarts,Q._multiDrawCounts,Q._multiDrawCount);else{const Ot=Q._multiDrawStarts,_e=Q._multiDrawCounts,Kt=Q._multiDrawCount,pt=Qe?ke.get(Qe).bytesPerElement:1,Zn=ie.get(te).currentProgram.getUniforms();for(let Ln=0;Ln<Kt;Ln++)Zn.setValue(F,"_gl_DrawID",Ln),nn.render(Ot[Ln]/pt,_e[Ln])}else if(Q.isInstancedMesh)nn.renderInstances(st,yn,Q.count);else if(oe.isInstancedBufferGeometry){const Ot=oe._maxInstanceCount!==void 0?oe._maxInstanceCount:1/0,_e=Math.min(oe.instanceCount,Ot);nn.renderInstances(st,yn,_e)}else nn.render(st,yn)};function lr(C,q,oe,te){K!==null&&C.isNodeMaterial&&K.setObject(te,C),Ae===!0&&ot.setState(C,oe,!1),C.transparent===!0&&C.side===pi&&C.forceSinglePass===!1?(C.side=Di,C.needsUpdate=!0,$n(C,q,te),C.side=Ir,C.needsUpdate=!0,$n(C,q,te),C.side=pi):$n(C,q,te)}this.compile=function(C,q,oe=null){oe===null&&(oe=C),K!==null&&K.renderStart(C,q,oe),R=ze.get(oe),R.init(q),v.push(R),oe.traverseVisible(function(Q){Q.isLight&&Q.layers.test(q.layers)&&(R.pushLight(Q),Q.castShadow&&R.pushShadow(Q))}),C!==oe&&C.traverseVisible(function(Q){Q.isLight&&Q.layers.test(q.layers)&&(R.pushLight(Q),Q.castShadow&&R.pushShadow(Q))}),R.setupLights(),K!==null&&K.updateLights(R.state.lightsArray),Re=this.localClippingEnabled,Ae=ot.init(this.clippingPlanes,Re),Ae===!0&&ot.setGlobalState(this.clippingPlanes,q),K!==null&&_t.render(R.state.shadowsArray,oe,q);const te=new Set;return C.traverse(function(Q){if(!(Q.isMesh||Q.isPoints||Q.isLine||Q.isSprite))return;const Ne=Q.material;if(Ne)if(Array.isArray(Ne))for(let Je=0;Je<Ne.length;Je++){const Fe=Ne[Je];lr(Fe,oe,q,Q),te.add(Fe)}else lr(Ne,oe,q,Q),te.add(Ne)}),R=v.pop(),K!==null&&K.renderEnd(),te},this.compileAsync=function(C,q,oe=null){const te=this.compile(C,q,oe);return new Promise(Q=>{function Ne(){if(te.forEach(function(Je){const Qe=ie.get(Je).currentProgram;(Qe===void 0||Qe.isReady())&&te.delete(Je)}),te.size===0){Q(C);return}setTimeout(Ne,10)}Ct.get("KHR_parallel_shader_compile")!==null?Ne():setTimeout(Ne,10)})};let cs=null;function bs(C){cs&&cs(C)}function $i(){si.stop()}function En(){si.start()}const si=new f0;si.setAnimationLoop(bs),typeof self<"u"&&si.setContext(self),this.setAnimationLoop=function(C){cs=C,ct.setAnimationLoop(C),C===null?si.stop():si.start()},ct.addEventListener("sessionstart",$i),ct.addEventListener("sessionend",En),this.render=function(C,q){if(q!==void 0&&q.isCamera!==!0){kt("WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(z===!0)return;K!==null&&K.renderStart(C,q);const oe=ct.enabled===!0&&ct.isPresenting===!0,te=L!==null&&(Ee===null||oe)&&L.begin(O,Ee);if(C.matrixWorldAutoUpdate===!0&&C.updateMatrixWorld(),q.parent===null&&q.matrixWorldAutoUpdate===!0&&q.updateMatrixWorld(),ct.enabled===!0&&ct.isPresenting===!0&&(L===null||L.isCompositing()===!1)&&(ct.cameraAutoUpdate===!0&&ct.updateCamera(q),q=ct.getCamera()),C.isScene===!0&&C.onBeforeRender(O,C,q,Ee),R=ze.get(C,v.length),R.init(q),R.state.textureUnits=de.getTextureUnits(),v.push(R),Pe.multiplyMatrices(q.projectionMatrix,q.matrixWorldInverse),be.setFromProjectionMatrix(Pe,ks,q.reversedDepth),Re=this.localClippingEnabled,Ae=ot.init(this.clippingPlanes,Re),w=Xe.get(C,D.length),w.init(),D.push(w),ct.enabled===!0&&ct.isPresenting===!0){const Je=O.xr.getDepthSensingMesh();Je!==null&&Zi(Je,q,-1/0,O.sortObjects)}Zi(C,q,0,O.sortObjects),w.finish(),K!==null&&K.updateLights(R.state.lightsArray),O.sortObjects===!0&&w.sort(We,lt),Mt=ct.enabled===!1||ct.isPresenting===!1||ct.hasDepthSensing()===!1,Mt&&It.addToRenderList(w,C),this.info.render.frame++,this.info.autoReset===!0&&this.info.reset(),Ae===!0&&ot.beginShadows();const Q=R.state.shadowsArray;if(_t.render(Q,C,q),Ae===!0&&ot.endShadows(),(te&&L.hasRenderPass())===!1){const Je=w.opaque,Fe=w.transmissive;if(R.setupLights(),q.isArrayCamera){const Qe=q.cameras;if(Fe.length>0)for(let nt=0,St=Qe.length;nt<St;nt++){const Rt=Qe[nt];ur(Je,Fe,C,Rt)}Mt&&It.render(C);for(let nt=0,St=Qe.length;nt<St;nt++){const Rt=Qe[nt];Ts(w,C,Rt,Rt.viewport)}}else Fe.length>0&&ur(Je,Fe,C,q),Mt&&It.render(C),Ts(w,C,q)}Ee!==null&&se===0&&(de.updateMultisampleRenderTarget(Ee),de.updateRenderTargetMipmap(Ee)),te&&L.end(O),C.isScene===!0&&C.onAfterRender(O,C,q),Ke.resetDefaultState(),ue=-1,ge=null,v.pop(),v.length>0?(R=v[v.length-1],de.setTextureUnits(R.state.textureUnits),Ae===!0&&ot.setGlobalState(O.clippingPlanes,R.state.camera)):R=null,D.pop(),D.length>0?w=D[D.length-1]:w=null,K!==null&&K.renderEnd()};function Zi(C,q,oe,te){if(C.visible===!1)return;if(C.layers.test(q.layers)){if(C.isGroup)oe=C.renderOrder;else if(C.isLOD)C.autoUpdate===!0&&C.update(q);else if(C.isLightProbeGrid)R.pushLightProbeGrid(C);else if(C.isLight)R.pushLight(C),C.castShadow&&R.pushShadow(C);else if(C.isSprite){if(!C.frustumCulled||C.intersectsFrustum(be)){te&&vt.setFromMatrixPosition(C.matrixWorld).applyMatrix4(Pe);const Je=xe.update(C),Fe=C.material;Fe.visible&&w.push(C,Je,Fe,oe,vt.z,null,q)}}else if((C.isMesh||C.isLine||C.isPoints)&&(!C.frustumCulled||C.intersectsFrustum(be))){const Je=xe.update(C),Fe=C.material;if(te&&(C.boundingSphere!==void 0?(C.boundingSphere===null&&C.computeBoundingSphere(),vt.copy(C.boundingSphere.center)):(Je.boundingSphere===null&&Je.computeBoundingSphere(),vt.copy(Je.boundingSphere.center)),vt.applyMatrix4(C.matrixWorld).applyMatrix4(Pe)),Array.isArray(Fe)){const Qe=Je.groups;for(let nt=0,St=Qe.length;nt<St;nt++){const Rt=Qe[nt],st=Fe[Rt.materialIndex];st&&st.visible&&w.push(C,Je,st,oe,vt.z,Rt,q)}}else Fe.visible&&w.push(C,Je,Fe,oe,vt.z,null,q)}}const Ne=C.children;for(let Je=0,Fe=Ne.length;Je<Fe;Je++)Zi(Ne[Je],q,oe,te)}function Ts(C,q,oe,te){const{opaque:Q,transmissive:Ne,transparent:Je}=C;R.setupLightsView(oe),Ae===!0&&ot.setGlobalState(O.clippingPlanes,oe),te&&y.viewport(Se.copy(te)),Q.length>0&&Es(Q,q,oe),Ne.length>0&&Es(Ne,q,oe),Je.length>0&&Es(Je,q,oe),y.buffers.depth.setTest(!0),y.buffers.depth.setMask(!0),y.buffers.color.setMask(!0),y.setPolygonOffset(!1)}function ur(C,q,oe,te){if((oe.isScene===!0?oe.overrideMaterial:null)!==null)return;if(R.state.transmissionRenderTarget[te.id]===void 0){const st=Ct.has("EXT_color_buffer_half_float")||Ct.has("EXT_color_buffer_float");R.state.transmissionRenderTarget[te.id]=new ys(1,1,{generateMipmaps:!0,type:st?Ws:Yi,minFilter:sr,samples:Math.max(4,U.samples),stencilBuffer:r,resolveDepthBuffer:!1,resolveStencilBuffer:!1,storeMultisampledDepthBuffer:!1,storeMultisampledStencilBuffer:!1,colorSpace:Qt.workingColorSpace})}const Ne=R.state.transmissionRenderTarget[te.id],Je=te.viewport||Se;Ne.setSize(Je.z*O.transmissionResolutionScale,Je.w*O.transmissionResolutionScale);const Fe=O.getRenderTarget(),Qe=O.getActiveCubeFace(),nt=O.getActiveMipmapLevel();O.setRenderTarget(Ne),O.getClearColor(At),bt=O.getClearAlpha(),bt<1&&O.setClearColor(16777215,.5),O.clear(),Mt&&It.render(oe);const St=O.toneMapping;O.toneMapping=Hs;const Rt=te.viewport;if(te.viewport!==void 0&&(te.viewport=void 0),R.setupLightsView(te),Ae===!0&&ot.setGlobalState(O.clippingPlanes,te),Es(C,oe,te),de.updateMultisampleRenderTarget(Ne),de.updateRenderTargetMipmap(Ne),Ct.has("WEBGL_multisampled_render_to_texture")===!1){let st=!1;for(let an=0,yn=q.length;an<yn;an++){const Ht=q[an],{object:nn,geometry:Ot,material:_e,group:Kt}=Ht;if(_e.side===pi&&nn.layers.test(te.layers)){const pt=_e.side;_e.side=Di,_e.needsUpdate=!0,hr(nn,oe,te,Ot,_e,Kt),_e.side=pt,_e.needsUpdate=!0,st=!0}}st===!0&&(de.updateMultisampleRenderTarget(Ne),de.updateRenderTargetMipmap(Ne))}O.setRenderTarget(Fe,Qe,nt),O.setClearColor(At,bt),Rt!==void 0&&(te.viewport=Rt),O.toneMapping=St}function Es(C,q,oe){const te=q.isScene===!0?q.overrideMaterial:null;for(let Q=0,Ne=C.length;Q<Ne;Q++){const Je=C[Q],{object:Fe,geometry:Qe,group:nt}=Je;let St=Je.material;St.allowOverride===!0&&te!==null&&(St=te),Fe.layers.test(oe.layers)&&hr(Fe,q,oe,Qe,St,nt)}}function hr(C,q,oe,te,Q,Ne){K!==null&&Q.isNodeMaterial&&K.setObject(C,Q),C.onBeforeRender(O,q,oe,te,Q,Ne),C.modelViewMatrix.multiplyMatrices(oe.matrixWorldInverse,C.matrixWorld),C.normalMatrix.getNormalMatrix(C.modelViewMatrix),Q.onBeforeRender(O,q,oe,te,C,Ne),Q.transparent===!0&&Q.side===pi&&Q.forceSinglePass===!1?(Q.side=Di,Q.needsUpdate=!0,O.renderBufferDirect(oe,q,te,Q,C,Ne),Q.side=Ir,Q.needsUpdate=!0,O.renderBufferDirect(oe,q,te,Q,C,Ne),Q.side=pi):O.renderBufferDirect(oe,q,te,Q,C,Ne),C.onAfterRender(O,q,oe,te,Q,Ne)}function $n(C,q,oe){q.isScene!==!0&&(q=ut);const te=ie.get(C),Q=R.state.lights,Ne=R.state.shadowsArray,Je=Q.state.version,Fe=Ce.getParameters(C,Q.state,Ne,q,oe,R.state.lightProbeGridArray),Qe=Ce.getProgramCacheKey(Fe);let nt=te.programs;te.environment=C.isMeshStandardMaterial||C.isMeshLambertMaterial||C.isMeshPhongMaterial?q.environment:null,te.fog=q.fog;const St=C.isMeshStandardMaterial||C.isMeshLambertMaterial&&!C.envMap||C.isMeshPhongMaterial&&!C.envMap;te.envMap=Le.get(C.envMap||te.environment,St),te.envMapRotation=te.environment!==null&&C.envMap===null?q.environmentRotation:C.envMapRotation,nt===void 0&&(C.addEventListener("dispose",bi),nt=new Map,te.programs=nt);let Rt=nt.get(Qe);if(Rt!==void 0){if(te.currentProgram===Rt&&te.lightsStateVersion===Je)return fr(C,Fe),Rt}else Fe.uniforms=Ce.getUniforms(C),K!==null&&C.isNodeMaterial&&K.build(C,oe,Fe),C.onBeforeCompile(Fe,O),Rt=Ce.acquireProgram(Fe,Qe),nt.set(Qe,Rt),te.uniforms=Fe.uniforms;const st=te.uniforms;return(!C.isShaderMaterial&&!C.isRawShaderMaterial||C.clipping===!0)&&(st.clippingPlanes=ot.uniform),fr(C,Fe),te.needsLights=Ur(C),te.lightsStateVersion=Je,te.needsLights&&(st.ambientLightColor.value=Q.state.ambient,st.lightProbe.value=Q.state.probe,st.sunLights.value=Q.state.sun,st.sunLightShadows.value=Q.state.sunShadow,st.directionalLights.value=Q.state.directional,st.directionalLightShadows.value=Q.state.directionalShadow,st.spotLights.value=Q.state.spot,st.spotLightShadows.value=Q.state.spotShadow,st.rectAreaLights.value=Q.state.rectArea,st.ltc_1.value=Q.state.rectAreaLTC1,st.ltc_2.value=Q.state.rectAreaLTC2,st.pointLights.value=Q.state.point,st.pointLightShadows.value=Q.state.pointShadow,st.hemisphereLights.value=Q.state.hemi,st.sunShadowMatrix.value=Q.state.sunShadowMatrix,st.sunShadowCascade.value=Q.state.sunShadowCascade,st.directionalShadowMatrix.value=Q.state.directionalShadowMatrix,st.spotLightMatrix.value=Q.state.spotLightMatrix,st.spotLightMap.value=Q.state.spotLightMap,st.pointShadowMatrix.value=Q.state.pointShadowMatrix),te.lightProbeGrid=R.state.lightProbeGridArray.length>0,te.currentProgram=Rt,te.uniformsList=null,Rt}function Vi(C){if(C.uniformsList===null){const q=C.currentProgram.getUniforms();C.uniformsList=Tl.seqWithValue(q.seq,C.uniforms)}return C.uniformsList}function fr(C,q){const oe=ie.get(C);oe.outputColorSpace=q.outputColorSpace,oe.batching=q.batching,oe.batchingColor=q.batchingColor,oe.instancing=q.instancing,oe.instancingColor=q.instancingColor,oe.instancingMorph=q.instancingMorph,oe.skinning=q.skinning,oe.morphTargets=q.morphTargets,oe.morphNormals=q.morphNormals,oe.morphColors=q.morphColors,oe.morphTargetsCount=q.morphTargetsCount,oe.numClippingPlanes=q.numClippingPlanes,oe.numIntersection=q.numClipIntersection,oe.vertexAlphas=q.vertexAlphas,oe.vertexTangents=q.vertexTangents,oe.toneMapping=q.toneMapping}function Nr(C,q){if(C.length===0)return null;if(C.length===1)return C[0].texture!==null?C[0]:null;_.setFromMatrixPosition(q.matrixWorld);for(let oe=0,te=C.length;oe<te;oe++){const Q=C[oe];if(Q.texture!==null&&Q.boundingBox.containsPoint(_))return Q}return null}function ls(C,q,oe,te,Q){q.isScene!==!0&&(q=ut),de.resetTextureUnits();const Ne=q.fog,Je=te.isMeshStandardMaterial||te.isMeshLambertMaterial||te.isMeshPhongMaterial?q.environment:null,Fe=Ee===null?O.outputColorSpace:Ee.isXRRenderTarget===!0?Ee.texture.colorSpace:Qt.workingColorSpace,Qe=te.isMeshStandardMaterial||te.isMeshLambertMaterial&&!te.envMap||te.isMeshPhongMaterial&&!te.envMap,nt=Le.get(te.envMap||Je,Qe),St=te.vertexColors===!0&&!!oe.attributes.color&&oe.attributes.color.itemSize===4,Rt=!!oe.attributes.tangent&&(!!te.normalMap||te.anisotropy>0),st=!!oe.morphAttributes.position,an=!!oe.morphAttributes.normal,yn=!!oe.morphAttributes.color;let Ht=Hs;te.toneMapped&&(Ee===null||Ee.isXRRenderTarget===!0)&&(Ht=O.toneMapping);const nn=oe.morphAttributes.position||oe.morphAttributes.normal||oe.morphAttributes.color,Ot=nn!==void 0?nn.length:0,_e=ie.get(te),Kt=R.state.lights;if(Ae===!0&&(Re===!0||C!==ge)){const Vt=C===ge&&te.id===ue;ot.setState(te,C,Vt)}let pt=!1;te.version===_e.__version?(_e.needsLights&&_e.lightsStateVersion!==Kt.state.version||_e.outputColorSpace!==Fe||Q.isBatchedMesh&&_e.batching===!1||!Q.isBatchedMesh&&_e.batching===!0||Q.isBatchedMesh&&_e.batchingColor===!0&&Q._colorsTexture===null||Q.isBatchedMesh&&_e.batchingColor===!1&&Q._colorsTexture!==null||Q.isInstancedMesh&&_e.instancing===!1||!Q.isInstancedMesh&&_e.instancing===!0||Q.isSkinnedMesh&&_e.skinning===!1||!Q.isSkinnedMesh&&_e.skinning===!0||Q.isInstancedMesh&&_e.instancingColor===!0&&Q.instanceColor===null||Q.isInstancedMesh&&_e.instancingColor===!1&&Q.instanceColor!==null||Q.isInstancedMesh&&_e.instancingMorph===!0&&Q.morphTexture===null||Q.isInstancedMesh&&_e.instancingMorph===!1&&Q.morphTexture!==null||_e.envMap!==nt||te.fog===!0&&_e.fog!==Ne||_e.numClippingPlanes!==void 0&&(_e.numClippingPlanes!==ot.numPlanes||_e.numIntersection!==ot.numIntersection)||_e.vertexAlphas!==St||_e.vertexTangents!==Rt||_e.morphTargets!==st||_e.morphNormals!==an||_e.morphColors!==yn||_e.toneMapping!==Ht||_e.morphTargetsCount!==Ot||!!_e.lightProbeGrid!=R.state.lightProbeGridArray.length>0)&&(pt=!0):(pt=!0,_e.__version=te.version);let Zn=_e.currentProgram;pt===!0&&(Zn=$n(te,q,Q),K&&te.isNodeMaterial&&K.onUpdateProgram(te,Zn,_e));let Ln=!1,Nt=!1,Jn=!1;const Bt=Zn.getUniforms(),fn=_e.uniforms;if(y.useProgram(Zn.program)&&(Ln=!0,Nt=!0,Jn=!0),te.id!==ue&&(ue=te.id,Nt=!0),_e.needsLights){const Vt=Nr(R.state.lightProbeGridArray,Q);_e.lightProbeGrid!==Vt&&(_e.lightProbeGrid=Vt,Nt=!0)}if(Ln||ge!==C){y.buffers.depth.getReversed()&&C.reversedDepth!==!0&&(C._reversedDepth=!0,C.updateProjectionMatrix()),Bt.setValue(F,"projectionMatrix",C.projectionMatrix),Bt.setValue(F,"viewMatrix",C.matrixWorldInverse);const Ie=Bt.map.cameraPosition;Ie!==void 0&&Ie.setValue(F,Ve.setFromMatrixPosition(C.matrixWorld)),U.logarithmicDepthBuffer&&Bt.setValue(F,"logDepthBufFC",2/(Math.log(C.far+1)/Math.LN2)),(te.isMeshPhongMaterial||te.isMeshToonMaterial||te.isMeshLambertMaterial||te.isMeshBasicMaterial||te.isMeshStandardMaterial||te.isShaderMaterial)&&Bt.setValue(F,"isOrthographic",C.isOrthographicCamera===!0),ge!==C&&(ge=C,Nt=!0,Jn=!0)}if(_e.needsLights&&(Kt.state.sunShadowMap.length>0&&Bt.setValue(F,"sunShadowMap",Kt.state.sunShadowMap,de),Kt.state.directionalShadowMap.length>0&&Bt.setValue(F,"directionalShadowMap",Kt.state.directionalShadowMap,de),Kt.state.spotShadowMap.length>0&&Bt.setValue(F,"spotShadowMap",Kt.state.spotShadowMap,de),Kt.state.pointShadowMap.length>0&&Bt.setValue(F,"pointShadowMap",Kt.state.pointShadowMap,de)),Q.isSkinnedMesh){Bt.setOptional(F,Q,"bindMatrix"),Bt.setOptional(F,Q,"bindMatrixInverse");const Vt=Q.skeleton;Vt&&(Vt.boneTexture===null&&Vt.computeBoneTexture(),Bt.setValue(F,"boneTexture",Vt.boneTexture,de))}Q.isBatchedMesh&&(Bt.setOptional(F,Q,"batchingTexture"),Bt.setValue(F,"batchingTexture",Q._matricesTexture,de),Bt.setOptional(F,Q,"batchingIdTexture"),Bt.setValue(F,"batchingIdTexture",Q._indirectTexture,de),Bt.setOptional(F,Q,"batchingColorTexture"),Q._colorsTexture!==null&&Bt.setValue(F,"batchingColorTexture",Q._colorsTexture,de));const Ri=oe.morphAttributes;if((Ri.position!==void 0||Ri.normal!==void 0||Ri.color!==void 0)&&Y.update(Q,oe,Zn),(Nt||_e.receiveShadow!==Q.receiveShadow)&&(_e.receiveShadow=Q.receiveShadow,Bt.setValue(F,"receiveShadow",Q.receiveShadow)),(te.isMeshStandardMaterial||te.isMeshLambertMaterial||te.isMeshPhongMaterial)&&te.envMap===null&&q.environment!==null&&(fn.envMapIntensity.value=q.environmentIntensity),fn.dfgLUT!==void 0&&(fn.dfgLUT.value=J1()),Nt){if(Bt.setValue(F,"toneMappingExposure",O.toneMappingExposure),_e.needsLights&&Dr(fn,Jn),Ne&&te.fog===!0&&rt.refreshFogUniforms(fn,Ne),rt.refreshMaterialUniforms(fn,te,Me,he,R.state.transmissionRenderTarget[C.id]),_e.needsLights&&_e.lightProbeGrid){const Vt=_e.lightProbeGrid;fn.probesSH.value=Vt.texture,fn.probesMin.value.copy(Vt.boundingBox.min),fn.probesMax.value.copy(Vt.boundingBox.max),fn.probesResolution.value.copy(Vt.resolution)}Tl.upload(F,Vi(_e),fn,de)}if(te.isShaderMaterial&&te.uniformsNeedUpdate===!0&&(Tl.upload(F,Vi(_e),fn,de),te.uniformsNeedUpdate=!1),te.isSpriteMaterial&&Bt.setValue(F,"center",Q.center),Bt.setValue(F,"modelViewMatrix",Q.modelViewMatrix),Bt.setValue(F,"normalMatrix",Q.normalMatrix),Bt.setValue(F,"modelMatrix",Q.matrixWorld),te.uniformsGroups!==void 0){const Vt=te.uniformsGroups;for(let Ie=0,gn=Vt.length;Ie<gn;Ie++){const Gi=Vt[Ie];we.update(Gi,Zn),we.bind(Gi,Zn)}}return Zn}function Dr(C,q){C.ambientLightColor.needsUpdate=q,C.lightProbe.needsUpdate=q,C.sunLights.needsUpdate=q,C.sunLightShadows.needsUpdate=q,C.directionalLights.needsUpdate=q,C.directionalLightShadows.needsUpdate=q,C.pointLights.needsUpdate=q,C.pointLightShadows.needsUpdate=q,C.spotLights.needsUpdate=q,C.spotLightShadows.needsUpdate=q,C.rectAreaLights.needsUpdate=q,C.hemisphereLights.needsUpdate=q}function Ur(C){return C.isMeshLambertMaterial||C.isMeshToonMaterial||C.isMeshPhongMaterial||C.isMeshStandardMaterial||C.isShadowMaterial||C.isShaderMaterial&&C.lights===!0}this.getActiveCubeFace=function(){return ce},this.getActiveMipmapLevel=function(){return se},this.getRenderTarget=function(){return Ee},this.setRenderTargetTextures=function(C,q,oe){const te=ie.get(C);te.__autoAllocateDepthBuffer=C.resolveDepthBuffer===!1,te.__autoAllocateDepthBuffer===!1&&(te.__useRenderToTexture=!1),ie.get(C.texture).__webglTexture=q,ie.get(C.depthTexture).__webglTexture=te.__autoAllocateDepthBuffer?void 0:oe,te.__hasExternalTextures=!0},this.setRenderTargetFramebuffer=function(C,q){const oe=ie.get(C);oe.__webglFramebuffer=q,oe.__useDefaultFramebuffer=q===void 0},this.setRenderTarget=function(C,q=0,oe=0){Ee=C,ce=q,se=oe;let te=null,Q=!1,Ne=!1;if(C){const Fe=ie.get(C);if(Fe.__useDefaultFramebuffer!==void 0){y.bindFramebuffer(F.FRAMEBUFFER,Fe.__webglFramebuffer),Se.copy(C.viewport),tt.copy(C.scissor),Ze=C.scissorTest,y.viewport(Se),y.scissor(tt),y.setScissorTest(Ze),ue=-1;return}else if(Fe.__webglFramebuffer===void 0)de.setupRenderTarget(C);else if(Fe.__hasExternalTextures)de.rebindTextures(C,ie.get(C.texture).__webglTexture,ie.get(C.depthTexture).__webglTexture);else if(C.depthBuffer){const St=C.depthTexture;if(Fe.__boundDepthTexture!==St){if(St!==null&&ie.has(St)&&(C.width!==St.image.width||C.height!==St.image.height))throw new Error("THREE.WebGLRenderer: Attached DepthTexture is initialized to the incorrect size.");de.setupDepthRenderbuffer(C)}}const Qe=C.texture;(Qe.isData3DTexture||Qe.isDataArrayTexture||Qe.isCompressedArrayTexture)&&(Ne=!0);const nt=ie.get(C).__webglFramebuffer;C.isWebGLCubeRenderTarget?(Array.isArray(nt[q])?te=nt[q][oe]:te=nt[q],Q=!0):C.samples>0&&de.useMultisampledRTT(C)===!1?te=ie.get(C).__webglMultisampledFramebuffer:Array.isArray(nt)?te=nt[oe]:te=nt,Se.copy(C.viewport),tt.copy(C.scissor),Ze=C.scissorTest}else Se.copy(je).multiplyScalar(Me).floor(),tt.copy(Tt).multiplyScalar(Me).floor(),Ze=tn;if(oe!==0&&(te=ee),y.bindFramebuffer(F.FRAMEBUFFER,te)&&y.drawBuffers(C,te),y.viewport(Se),y.scissor(tt),y.setScissorTest(Ze),Q){const Fe=ie.get(C.texture);F.framebufferTexture2D(F.FRAMEBUFFER,F.COLOR_ATTACHMENT0,F.TEXTURE_CUBE_MAP_POSITIVE_X+q,Fe.__webglTexture,oe)}else if(Ne){const Fe=q;for(let Qe=0;Qe<C.textures.length;Qe++){const nt=ie.get(C.textures[Qe]);F.framebufferTextureLayer(F.FRAMEBUFFER,F.COLOR_ATTACHMENT0+Qe,nt.__webglTexture,oe,Fe)}}else if(C!==null&&oe!==0){const Fe=ie.get(C.texture);F.framebufferTexture2D(F.FRAMEBUFFER,F.COLOR_ATTACHMENT0,F.TEXTURE_2D,Fe.__webglTexture,oe)}ue=-1};function Fr(C){const q=ie.get(C);return(q.__readFormat!==C.format||q.__readType!==C.type)&&(q.__readFormat=C.format,q.__readType=C.type,q.__formatReadable=U.textureFormatReadable(C.format),q.__typeReadable=U.textureTypeReadable(C.type)),q}this.readRenderTargetPixels=function(C,q,oe,te,Q,Ne,Je,Fe=0){if(!(C&&C.isWebGLRenderTarget)){kt("WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let Qe=ie.get(C).__webglFramebuffer;if(C.isWebGLCubeRenderTarget&&Je!==void 0&&(Qe=Qe[Je]),Qe){y.bindFramebuffer(F.FRAMEBUFFER,Qe);try{const nt=C.textures[Fe],St=nt.format,Rt=nt.type;C.textures.length>1&&F.readBuffer(F.COLOR_ATTACHMENT0+Fe);const st=Fr(nt);if(st.__formatReadable===!1){kt("WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(st.__typeReadable===!1){kt("WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}q>=0&&q<=C.width-te&&oe>=0&&oe<=C.height-Q&&F.readPixels(q,oe,te,Q,qe.convert(St),qe.convert(Rt),Ne)}finally{const nt=Ee!==null?ie.get(Ee).__webglFramebuffer:null;y.bindFramebuffer(F.FRAMEBUFFER,nt)}}},this.readRenderTargetPixelsAsync=async function(C,q,oe,te,Q,Ne,Je,Fe=0){if(!(C&&C.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let Qe=ie.get(C).__webglFramebuffer;if(C.isWebGLCubeRenderTarget&&Je!==void 0&&(Qe=Qe[Je]),Qe)if(q>=0&&q<=C.width-te&&oe>=0&&oe<=C.height-Q){y.bindFramebuffer(F.FRAMEBUFFER,Qe);const nt=C.textures[Fe],St=nt.format,Rt=nt.type;C.textures.length>1&&F.readBuffer(F.COLOR_ATTACHMENT0+Fe);const st=Fr(nt);if(st.__formatReadable===!1)throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(st.__typeReadable===!1)throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");const an=F.createBuffer();F.bindBuffer(F.PIXEL_PACK_BUFFER,an),F.bufferData(F.PIXEL_PACK_BUFFER,Ne.byteLength,F.STREAM_READ),F.readPixels(q,oe,te,Q,qe.convert(St),qe.convert(Rt),0),F.bindBuffer(F.PIXEL_PACK_BUFFER,null);const yn=Ee!==null?ie.get(Ee).__webglFramebuffer:null;y.bindFramebuffer(F.FRAMEBUFFER,yn);const Ht=F.fenceSync(F.SYNC_GPU_COMMANDS_COMPLETE,0);return F.flush(),await qm(F,Ht,4),F.bindBuffer(F.PIXEL_PACK_BUFFER,an),F.getBufferSubData(F.PIXEL_PACK_BUFFER,0,Ne),F.bindBuffer(F.PIXEL_PACK_BUFFER,null),F.deleteBuffer(an),F.deleteSync(Ht),Ne}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")},this.copyFramebufferToTexture=function(C,q=null,oe=0){const te=Math.pow(2,-oe),Q=Math.floor(C.image.width*te),Ne=Math.floor(C.image.height*te),Je=q!==null?q.x:0,Fe=q!==null?q.y:0;de.setTexture2D(C,0),F.copyTexSubImage2D(F.TEXTURE_2D,oe,0,0,Je,Fe,Q,Ne),y.unbindTexture()},this.copyTextureToTexture=function(C,q,oe=null,te=null,Q=0,Ne=0){let Je,Fe,Qe,nt,St,Rt,st,an,yn;const Ht=C.isCompressedTexture?C.mipmaps[Ne]:C.image;if(oe!==null)Je=oe.max.x-oe.min.x,Fe=oe.max.y-oe.min.y,Qe=oe.isBox3?oe.max.z-oe.min.z:1,nt=oe.min.x,St=oe.min.y,Rt=oe.isBox3?oe.min.z:0;else{const fn=Math.pow(2,-Q);Je=Math.floor(Ht.width*fn),Fe=Math.floor(Ht.height*fn),C.isDataArrayTexture?Qe=Ht.depth:C.isData3DTexture?Qe=Math.floor(Ht.depth*fn):Qe=1,nt=0,St=0,Rt=0}te!==null?(st=te.x,an=te.y,yn=te.z):(st=0,an=0,yn=0);const nn=qe.convert(q.format),Ot=qe.convert(q.type);let _e;q.isData3DTexture?(de.setTexture3D(q,0),_e=F.TEXTURE_3D):q.isDataArrayTexture||q.isCompressedArrayTexture?(de.setTexture2DArray(q,0),_e=F.TEXTURE_2D_ARRAY):(de.setTexture2D(q,0),_e=F.TEXTURE_2D),y.activeTexture(F.TEXTURE0),y.pixelStorei(F.UNPACK_FLIP_Y_WEBGL,q.flipY),y.pixelStorei(F.UNPACK_PREMULTIPLY_ALPHA_WEBGL,q.premultiplyAlpha),y.pixelStorei(F.UNPACK_ALIGNMENT,q.unpackAlignment);const Kt=y.getParameter(F.UNPACK_ROW_LENGTH),pt=y.getParameter(F.UNPACK_IMAGE_HEIGHT),Zn=y.getParameter(F.UNPACK_SKIP_PIXELS),Ln=y.getParameter(F.UNPACK_SKIP_ROWS),Nt=y.getParameter(F.UNPACK_SKIP_IMAGES);y.pixelStorei(F.UNPACK_ROW_LENGTH,Ht.width),y.pixelStorei(F.UNPACK_IMAGE_HEIGHT,Ht.height),y.pixelStorei(F.UNPACK_SKIP_PIXELS,nt),y.pixelStorei(F.UNPACK_SKIP_ROWS,St),y.pixelStorei(F.UNPACK_SKIP_IMAGES,Rt);const Jn=C.isDataArrayTexture||C.isData3DTexture,Bt=q.isDataArrayTexture||q.isData3DTexture;if(C.isDepthTexture){const fn=ie.get(C),Ri=ie.get(q),Vt=ie.get(fn.__renderTarget),Ie=ie.get(Ri.__renderTarget);y.bindFramebuffer(F.READ_FRAMEBUFFER,Vt.__webglFramebuffer),y.bindFramebuffer(F.DRAW_FRAMEBUFFER,Ie.__webglFramebuffer);for(let gn=0;gn<Qe;gn++)Jn&&(F.framebufferTextureLayer(F.READ_FRAMEBUFFER,F.COLOR_ATTACHMENT0,ie.get(C).__webglTexture,Q,Rt+gn),F.framebufferTextureLayer(F.DRAW_FRAMEBUFFER,F.COLOR_ATTACHMENT0,ie.get(q).__webglTexture,Ne,yn+gn)),F.blitFramebuffer(nt,St,Je,Fe,st,an,Je,Fe,F.DEPTH_BUFFER_BIT,F.NEAREST);y.bindFramebuffer(F.READ_FRAMEBUFFER,null),y.bindFramebuffer(F.DRAW_FRAMEBUFFER,null)}else if(Q!==0||C.isRenderTargetTexture||ie.has(C)){const fn=ie.get(C),Ri=ie.get(q);y.bindFramebuffer(F.READ_FRAMEBUFFER,X),y.bindFramebuffer(F.DRAW_FRAMEBUFFER,J);for(let Vt=0;Vt<Qe;Vt++)Jn?F.framebufferTextureLayer(F.READ_FRAMEBUFFER,F.COLOR_ATTACHMENT0,fn.__webglTexture,Q,Rt+Vt):F.framebufferTexture2D(F.READ_FRAMEBUFFER,F.COLOR_ATTACHMENT0,F.TEXTURE_2D,fn.__webglTexture,Q),Bt?F.framebufferTextureLayer(F.DRAW_FRAMEBUFFER,F.COLOR_ATTACHMENT0,Ri.__webglTexture,Ne,yn+Vt):F.framebufferTexture2D(F.DRAW_FRAMEBUFFER,F.COLOR_ATTACHMENT0,F.TEXTURE_2D,Ri.__webglTexture,Ne),Q!==0?F.blitFramebuffer(nt,St,Je,Fe,st,an,Je,Fe,F.COLOR_BUFFER_BIT,F.NEAREST):Bt?F.copyTexSubImage3D(_e,Ne,st,an,yn+Vt,nt,St,Je,Fe):F.copyTexSubImage2D(_e,Ne,st,an,nt,St,Je,Fe);y.bindFramebuffer(F.READ_FRAMEBUFFER,null),y.bindFramebuffer(F.DRAW_FRAMEBUFFER,null)}else Bt?C.isDataTexture||C.isData3DTexture?F.texSubImage3D(_e,Ne,st,an,yn,Je,Fe,Qe,nn,Ot,Ht.data):q.isCompressedArrayTexture?F.compressedTexSubImage3D(_e,Ne,st,an,yn,Je,Fe,Qe,nn,Ht.data):F.texSubImage3D(_e,Ne,st,an,yn,Je,Fe,Qe,nn,Ot,Ht):C.isDataTexture?F.texSubImage2D(F.TEXTURE_2D,Ne,st,an,Je,Fe,nn,Ot,Ht.data):C.isCompressedTexture?F.compressedTexSubImage2D(F.TEXTURE_2D,Ne,st,an,Ht.width,Ht.height,nn,Ht.data):F.texSubImage2D(F.TEXTURE_2D,Ne,st,an,Je,Fe,nn,Ot,Ht);y.pixelStorei(F.UNPACK_ROW_LENGTH,Kt),y.pixelStorei(F.UNPACK_IMAGE_HEIGHT,pt),y.pixelStorei(F.UNPACK_SKIP_PIXELS,Zn),y.pixelStorei(F.UNPACK_SKIP_ROWS,Ln),y.pixelStorei(F.UNPACK_SKIP_IMAGES,Nt),Ne===0&&q.generateMipmaps&&F.generateMipmap(_e),y.unbindTexture()},this.initRenderTarget=function(C){ie.get(C).__webglFramebuffer===void 0&&de.setupRenderTarget(C)},this.initTexture=function(C){C.isCubeTexture?de.setTextureCube(C,0):C.isData3DTexture?de.setTexture3D(C,0):C.isDataArrayTexture||C.isCompressedArrayTexture?de.setTexture2DArray(C,0):de.setTexture2D(C,0),y.unbindTexture()},this.resetState=function(){ce=0,se=0,Ee=null,y.reset(),Ke.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return ks}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;const t=this.getContext();t.drawingBufferColorSpace=Qt._getDrawingBufferColorSpace(e),t.unpackColorSpace=Qt._getUnpackColorSpace()}}function eS(s,e=!1){const t=s[0].index!==null,n=new Set(Object.keys(s[0].attributes)),i=new Set(Object.keys(s[0].morphAttributes)),r={},o={},a=s[0].morphTargetsRelative,c=new Rn;let l=0;for(let u=0;u<s.length;++u){const f=s[u];let h=0;if(t!==(f.index!==null))return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+u+". All geometries must have compatible attributes; make sure index attribute exists among all geometries, or in none of them."),null;for(const d in f.attributes){if(!n.has(d))return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+u+'. All geometries must have compatible attributes; make sure "'+d+'" attribute exists among all geometries, or in none of them.'),null;r[d]===void 0&&(r[d]=[]),r[d].push(f.attributes[d]),h++}if(h!==n.size)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+u+". Make sure all geometries have the same number of attributes."),null;if(a!==f.morphTargetsRelative)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+u+". .morphTargetsRelative must be consistent throughout all geometries."),null;for(const d in f.morphAttributes){if(!i.has(d))return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+u+".  .morphAttributes must be consistent throughout all geometries."),null;o[d]===void 0&&(o[d]=[]),o[d].push(f.morphAttributes[d])}if(e){let d;if(t)d=f.index.count;else if(f.attributes.position!==void 0)d=f.attributes.position.count;else return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+u+". The geometry must have either an index or a position attribute"),null;c.addGroup(l,d,u),l+=d}}if(t){let u=0;const f=[];for(let h=0;h<s.length;++h){const d=s[h].index;for(let m=0;m<d.count;++m)f.push(d.getX(m)+u);u+=s[h].attributes.position.count}c.setIndex(f)}for(const u in r){const f=Wd(r[u]);if(!f)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed while trying to merge the "+u+" attribute."),null;c.setAttribute(u,f)}for(const u in o){const f=o[u][0].length;if(f!==0){c.morphAttributes=c.morphAttributes||{},c.morphAttributes[u]=[];for(let h=0;h<f;++h){const d=[];for(let M=0;M<o[u].length;++M)d.push(o[u][M][h]);const m=Wd(d);if(!m)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed while trying to merge the "+u+" morphAttribute."),null;c.morphAttributes[u].push(m)}}}return c}function Wd(s){let e,t,n,i=-1,r=0;for(let l=0;l<s.length;++l){const u=s[l];if(e===void 0&&(e=u.array.constructor),e!==u.array.constructor)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.array must be of consistent array types across matching attributes."),null;if(t===void 0&&(t=u.itemSize),t!==u.itemSize)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.itemSize must be consistent across matching attributes."),null;if(n===void 0&&(n=u.normalized),n!==u.normalized)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.normalized must be consistent across matching attributes."),null;if(i===-1&&(i=u.gpuType),i!==u.gpuType)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.gpuType must be consistent across matching attributes."),null;r+=u.count*t}const o=new e(r),a=new Fn(o,t,n);let c=0;for(let l=0;l<s.length;++l){const u=s[l];if(u.isInterleavedBufferAttribute){const f=c/t;for(let h=0,d=u.count;h<d;h++)for(let m=0;m<t;m++){const M=u.getComponent(h,m);a.setComponent(h+f,m,M)}}else o.set(u.array,c);c+=u.count*t}return i!==void 0&&(a.gpuType=i),a}function Xd(s,e){if(e===Nm)return console.warn("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Geometry already defined as triangles."),s;if(e===yh||e===Up){let t=s.getIndex();if(t===null){const r=[],o=s.getAttribute("position");if(o!==void 0){for(let a=0;a<o.count;a++)r.push(a);s.setIndex(r),t=s.getIndex()}else return console.error("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Undefined position attribute. Processing not possible."),s}const n=t.count-2,i=[];if(e===yh)for(let r=1;r<=n;r++)i.push(t.getX(0)),i.push(t.getX(r)),i.push(t.getX(r+1));else for(let r=0;r<n;r++)r%2===0?(i.push(t.getX(r)),i.push(t.getX(r+1)),i.push(t.getX(r+2))):(i.push(t.getX(r+2)),i.push(t.getX(r+1)),i.push(t.getX(r)));return i.length/3!==n&&console.error("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Unable to generate correct amount of triangles."),s.setIndex(i),s.clearGroups(),s}else return console.error("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Unknown draw mode:",e),s}function tS(s){const e=new Map,t=new Map,n=s.clone();return M0(s,n,function(i,r){e.set(r,i),t.set(i,r)}),n.traverse(function(i){if(!i.isSkinnedMesh)return;const r=i,o=e.get(i),a=o.skeleton.bones;r.skeleton=o.skeleton.clone(),r.bindMatrix.copy(o.bindMatrix),r.skeleton.bones=a.map(function(c){return t.get(c)}),r.bind(r.skeleton,r.bindMatrix)}),n}function M0(s,e,t){t(s,e);for(let n=0;n<s.children.length;n++)M0(s.children[n],e.children[n],t)}class nS extends po{constructor(e){super(e),this.dracoLoader=null,this.ktx2Loader=null,this.meshoptDecoder=null,this.pluginCallbacks=[],this.register(function(t){return new aS(t)}),this.register(function(t){return new cS(t)}),this.register(function(t){return new xS(t)}),this.register(function(t){return new _S(t)}),this.register(function(t){return new vS(t)}),this.register(function(t){return new uS(t)}),this.register(function(t){return new hS(t)}),this.register(function(t){return new fS(t)}),this.register(function(t){return new dS(t)}),this.register(function(t){return new oS(t)}),this.register(function(t){return new pS(t)}),this.register(function(t){return new lS(t)}),this.register(function(t){return new gS(t)}),this.register(function(t){return new mS(t)}),this.register(function(t){return new sS(t)}),this.register(function(t){return new qd(t,en.EXT_MESHOPT_COMPRESSION)}),this.register(function(t){return new qd(t,en.KHR_MESHOPT_COMPRESSION)}),this.register(function(t){return new MS(t)})}load(e,t,n,i){const r=this;let o;if(this.resourcePath!=="")o=this.resourcePath;else if(this.path!==""){const l=Pr.extractUrlBase(e);o=Pr.resolveURL(l,this.path)}else o=Pr.extractUrlBase(e);this.manager.itemStart(e);const a=function(l){i?i(l):console.error(l),r.manager.itemError(e),r.manager.itemEnd(e)},c=new Dl(this.manager);c.setPath(this.path),c.setResponseType("arraybuffer"),c.setRequestHeader(this.requestHeader),c.setWithCredentials(this.withCredentials),c.load(e,function(l){try{r.parse(l,o,function(u){t(u),r.manager.itemEnd(e)},a)}catch(u){a(u)}},n,a)}setDRACOLoader(e){return this.dracoLoader=e,this}setKTX2Loader(e){return this.ktx2Loader=e,this}setMeshoptDecoder(e){return this.meshoptDecoder=e,this}register(e){return this.pluginCallbacks.indexOf(e)===-1&&this.pluginCallbacks.push(e),this}unregister(e){return this.pluginCallbacks.indexOf(e)!==-1&&this.pluginCallbacks.splice(this.pluginCallbacks.indexOf(e),1),this}parse(e,t,n,i){let r;const o={},a={},c=new TextDecoder;if(typeof e=="string")r=JSON.parse(e);else if(e instanceof ArrayBuffer)if(c.decode(new Uint8Array(e,0,4))===y0){try{o[en.KHR_BINARY_GLTF]=new yS(e)}catch(f){i&&i(f);return}r=JSON.parse(o[en.KHR_BINARY_GLTF].content)}else r=JSON.parse(c.decode(e));else r=e;if(r.asset===void 0||r.asset.version[0]<2){i&&i(new Error("THREE.GLTFLoader: Unsupported asset. glTF versions >=2.0 are supported."));return}const l=new DS(r,{path:t||this.resourcePath||"",crossOrigin:this.crossOrigin,requestHeader:this.requestHeader,manager:this.manager,ktx2Loader:this.ktx2Loader,meshoptDecoder:this.meshoptDecoder});l.fileLoader.setRequestHeader(this.requestHeader);for(let u=0;u<this.pluginCallbacks.length;u++){const f=this.pluginCallbacks[u](l);f.name||console.error("THREE.GLTFLoader: Invalid plugin found: missing name"),a[f.name]=f,o[f.name]=!0}if(r.extensionsUsed)for(let u=0;u<r.extensionsUsed.length;++u){const f=r.extensionsUsed[u],h=r.extensionsRequired||[];switch(f){case en.KHR_MATERIALS_UNLIT:o[f]=new rS;break;case en.KHR_DRACO_MESH_COMPRESSION:o[f]=new SS(r,this.dracoLoader);break;case en.KHR_TEXTURE_TRANSFORM:o[f]=new bS;break;case en.KHR_MESH_QUANTIZATION:o[f]=new TS;break;default:h.indexOf(f)>=0&&a[f]===void 0&&console.warn('THREE.GLTFLoader: Unknown extension "'+f+'".')}}l.setExtensions(o),l.setPlugins(a),l.parse(n,i)}parseAsync(e,t){const n=this;return new Promise(function(i,r){n.parse(e,t,i,r)})}}function iS(){let s={};return{get:function(e){return s[e]},add:function(e,t){s[e]=t},remove:function(e){delete s[e]},removeAll:function(){s={}}}}function jn(s,e,t){const n=s.json.materials[e];return n.extensions&&n.extensions[t]?n.extensions[t]:null}const en={KHR_BINARY_GLTF:"KHR_binary_glTF",KHR_DRACO_MESH_COMPRESSION:"KHR_draco_mesh_compression",KHR_LIGHTS_PUNCTUAL:"KHR_lights_punctual",KHR_MATERIALS_CLEARCOAT:"KHR_materials_clearcoat",KHR_MATERIALS_DISPERSION:"KHR_materials_dispersion",KHR_MATERIALS_IOR:"KHR_materials_ior",KHR_MATERIALS_SHEEN:"KHR_materials_sheen",KHR_MATERIALS_SPECULAR:"KHR_materials_specular",KHR_MATERIALS_TRANSMISSION:"KHR_materials_transmission",KHR_MATERIALS_IRIDESCENCE:"KHR_materials_iridescence",KHR_MATERIALS_ANISOTROPY:"KHR_materials_anisotropy",KHR_MATERIALS_UNLIT:"KHR_materials_unlit",KHR_MATERIALS_VOLUME:"KHR_materials_volume",KHR_TEXTURE_BASISU:"KHR_texture_basisu",KHR_TEXTURE_TRANSFORM:"KHR_texture_transform",KHR_MESH_QUANTIZATION:"KHR_mesh_quantization",KHR_MATERIALS_EMISSIVE_STRENGTH:"KHR_materials_emissive_strength",EXT_MATERIALS_BUMP:"EXT_materials_bump",EXT_TEXTURE_WEBP:"EXT_texture_webp",EXT_TEXTURE_AVIF:"EXT_texture_avif",EXT_MESHOPT_COMPRESSION:"EXT_meshopt_compression",KHR_MESHOPT_COMPRESSION:"KHR_meshopt_compression",EXT_MESH_GPU_INSTANCING:"EXT_mesh_gpu_instancing"};class sS{constructor(e){this.parser=e,this.name=en.KHR_LIGHTS_PUNCTUAL,this.cache={refs:{},uses:{}}}_markDefs(){const e=this.parser,t=this.parser.json.nodes||[];for(let n=0,i=t.length;n<i;n++){const r=t[n];r.extensions&&r.extensions[this.name]&&r.extensions[this.name].light!==void 0&&e._addNodeRef(this.cache,r.extensions[this.name].light)}}_loadLight(e){const t=this.parser,n="light:"+e;let i=t.cache.get(n);if(i)return i;const r=t.json,c=((r.extensions&&r.extensions[this.name]||{}).lights||[])[e];let l;const u=new it(16777215);c.color!==void 0&&u.setRGB(c.color[0],c.color[1],c.color[2],Hi);const f=c.range!==void 0?c.range:0;switch(c.type){case"directional":l=new u0(u),l.target.position.set(0,0,-1),l.add(l.target);break;case"point":l=new bl(u),l.distance=f;break;case"spot":l=new Rh(u),l.distance=f,c.spot=c.spot||{},c.spot.innerConeAngle=c.spot.innerConeAngle!==void 0?c.spot.innerConeAngle:0,c.spot.outerConeAngle=c.spot.outerConeAngle!==void 0?c.spot.outerConeAngle:Math.PI/4,l.angle=c.spot.outerConeAngle,l.penumbra=1-c.spot.innerConeAngle/c.spot.outerConeAngle,l.target.position.set(0,0,-1),l.add(l.target);break;default:throw new Error("THREE.GLTFLoader: Unexpected light type: "+c.type)}return l.position.set(0,0,0),Us(l,c),c.intensity!==void 0&&(l.intensity=c.intensity),l.name=t.createUniqueName(c.name||"light_"+e),i=Promise.resolve(l),t.cache.add(n,i),i}getDependency(e,t){if(e==="light")return this._loadLight(t)}createNodeAttachment(e){const t=this,n=this.parser,r=n.json.nodes[e],a=(r.extensions&&r.extensions[this.name]||{}).light;return a===void 0?null:this._loadLight(a).then(function(c){return n._getNodeRef(t.cache,a,c)})}}class rS{constructor(){this.name=en.KHR_MATERIALS_UNLIT}getMaterialType(){return ki}extendParams(e,t,n){const i=[];e.color=new it(1,1,1),e.opacity=1;const r=t.pbrMetallicRoughness;if(r){if(Array.isArray(r.baseColorFactor)){const o=r.baseColorFactor;e.color.setRGB(o[0],o[1],o[2],Hi),e.opacity=o[3]}r.baseColorTexture!==void 0&&i.push(n.assignTexture(e,"map",r.baseColorTexture,Xn))}return Promise.all(i)}}class oS{constructor(e){this.parser=e,this.name=en.KHR_MATERIALS_EMISSIVE_STRENGTH}extendMaterialParams(e,t){const n=jn(this.parser,e,this.name);return n===null||n.emissiveStrength!==void 0&&(t.emissiveIntensity=n.emissiveStrength),Promise.resolve()}}class aS{constructor(e){this.parser=e,this.name=en.KHR_MATERIALS_CLEARCOAT}getMaterialType(e){return jn(this.parser,e,this.name)!==null?as:null}extendMaterialParams(e,t){const n=jn(this.parser,e,this.name);if(n===null)return Promise.resolve();const i=[];if(n.clearcoatFactor!==void 0&&(t.clearcoat=n.clearcoatFactor),n.clearcoatTexture!==void 0&&i.push(this.parser.assignTexture(t,"clearcoatMap",n.clearcoatTexture)),n.clearcoatRoughnessFactor!==void 0&&(t.clearcoatRoughness=n.clearcoatRoughnessFactor),n.clearcoatRoughnessTexture!==void 0&&i.push(this.parser.assignTexture(t,"clearcoatRoughnessMap",n.clearcoatRoughnessTexture)),n.clearcoatNormalTexture!==void 0&&(i.push(this.parser.assignTexture(t,"clearcoatNormalMap",n.clearcoatNormalTexture)),n.clearcoatNormalTexture.scale!==void 0)){const r=n.clearcoatNormalTexture.scale;t.clearcoatNormalScale=new Ye(r,r)}return Promise.all(i)}}class cS{constructor(e){this.parser=e,this.name=en.KHR_MATERIALS_DISPERSION}getMaterialType(e){return jn(this.parser,e,this.name)!==null?as:null}extendMaterialParams(e,t){const n=jn(this.parser,e,this.name);return n===null||(t.dispersion=n.dispersion!==void 0?n.dispersion:0),Promise.resolve()}}class lS{constructor(e){this.parser=e,this.name=en.KHR_MATERIALS_IRIDESCENCE}getMaterialType(e){return jn(this.parser,e,this.name)!==null?as:null}extendMaterialParams(e,t){const n=jn(this.parser,e,this.name);if(n===null)return Promise.resolve();const i=[];return n.iridescenceFactor!==void 0&&(t.iridescence=n.iridescenceFactor),n.iridescenceTexture!==void 0&&i.push(this.parser.assignTexture(t,"iridescenceMap",n.iridescenceTexture)),n.iridescenceIor!==void 0&&(t.iridescenceIOR=n.iridescenceIor),t.iridescenceThicknessRange===void 0&&(t.iridescenceThicknessRange=[100,400]),n.iridescenceThicknessMinimum!==void 0&&(t.iridescenceThicknessRange[0]=n.iridescenceThicknessMinimum),n.iridescenceThicknessMaximum!==void 0&&(t.iridescenceThicknessRange[1]=n.iridescenceThicknessMaximum),n.iridescenceThicknessTexture!==void 0&&i.push(this.parser.assignTexture(t,"iridescenceThicknessMap",n.iridescenceThicknessTexture)),Promise.all(i)}}class uS{constructor(e){this.parser=e,this.name=en.KHR_MATERIALS_SHEEN}getMaterialType(e){return jn(this.parser,e,this.name)!==null?as:null}extendMaterialParams(e,t){const n=jn(this.parser,e,this.name);if(n===null)return Promise.resolve();const i=[];if(t.sheenColor=new it(0,0,0),t.sheenRoughness=0,t.sheen=1,n.sheenColorFactor!==void 0){const r=n.sheenColorFactor;t.sheenColor.setRGB(r[0],r[1],r[2],Hi)}return n.sheenRoughnessFactor!==void 0&&(t.sheenRoughness=n.sheenRoughnessFactor),n.sheenColorTexture!==void 0&&i.push(this.parser.assignTexture(t,"sheenColorMap",n.sheenColorTexture,Xn)),n.sheenRoughnessTexture!==void 0&&i.push(this.parser.assignTexture(t,"sheenRoughnessMap",n.sheenRoughnessTexture)),Promise.all(i)}}class hS{constructor(e){this.parser=e,this.name=en.KHR_MATERIALS_TRANSMISSION}getMaterialType(e){return jn(this.parser,e,this.name)!==null?as:null}extendMaterialParams(e,t){const n=jn(this.parser,e,this.name);if(n===null)return Promise.resolve();const i=[];return n.transmissionFactor!==void 0&&(t.transmission=n.transmissionFactor),n.transmissionTexture!==void 0&&i.push(this.parser.assignTexture(t,"transmissionMap",n.transmissionTexture)),Promise.all(i)}}class fS{constructor(e){this.parser=e,this.name=en.KHR_MATERIALS_VOLUME}getMaterialType(e){return jn(this.parser,e,this.name)!==null?as:null}extendMaterialParams(e,t){const n=jn(this.parser,e,this.name);if(n===null)return Promise.resolve();const i=[];t.thickness=n.thicknessFactor!==void 0?n.thicknessFactor:0,n.thicknessTexture!==void 0&&i.push(this.parser.assignTexture(t,"thicknessMap",n.thicknessTexture)),t.attenuationDistance=n.attenuationDistance||1/0;const r=n.attenuationColor||[1,1,1];return t.attenuationColor=new it().setRGB(r[0],r[1],r[2],Hi),Promise.all(i)}}class dS{constructor(e){this.parser=e,this.name=en.KHR_MATERIALS_IOR}getMaterialType(e){return jn(this.parser,e,this.name)!==null?as:null}extendMaterialParams(e,t){const n=jn(this.parser,e,this.name);return n===null||(t.ior=n.ior!==void 0?n.ior:1.5,t.ior===0&&(t.ior=1e3)),Promise.resolve()}}class pS{constructor(e){this.parser=e,this.name=en.KHR_MATERIALS_SPECULAR}getMaterialType(e){return jn(this.parser,e,this.name)!==null?as:null}extendMaterialParams(e,t){const n=jn(this.parser,e,this.name);if(n===null)return Promise.resolve();const i=[];t.specularIntensity=n.specularFactor!==void 0?n.specularFactor:1,n.specularTexture!==void 0&&i.push(this.parser.assignTexture(t,"specularIntensityMap",n.specularTexture));const r=n.specularColorFactor||[1,1,1];return t.specularColor=new it().setRGB(r[0],r[1],r[2],Hi),n.specularColorTexture!==void 0&&i.push(this.parser.assignTexture(t,"specularColorMap",n.specularColorTexture,Xn)),Promise.all(i)}}class mS{constructor(e){this.parser=e,this.name=en.EXT_MATERIALS_BUMP}getMaterialType(e){return jn(this.parser,e,this.name)!==null?as:null}extendMaterialParams(e,t){const n=jn(this.parser,e,this.name);if(n===null)return Promise.resolve();const i=[];return t.bumpScale=n.bumpFactor!==void 0?n.bumpFactor:1,n.bumpTexture!==void 0&&i.push(this.parser.assignTexture(t,"bumpMap",n.bumpTexture)),Promise.all(i)}}class gS{constructor(e){this.parser=e,this.name=en.KHR_MATERIALS_ANISOTROPY}getMaterialType(e){return jn(this.parser,e,this.name)!==null?as:null}extendMaterialParams(e,t){const n=jn(this.parser,e,this.name);if(n===null)return Promise.resolve();const i=[];return n.anisotropyStrength!==void 0&&(t.anisotropy=n.anisotropyStrength),n.anisotropyRotation!==void 0&&(t.anisotropyRotation=n.anisotropyRotation),n.anisotropyTexture!==void 0&&i.push(this.parser.assignTexture(t,"anisotropyMap",n.anisotropyTexture)),Promise.all(i)}}class xS{constructor(e){this.parser=e,this.name=en.KHR_TEXTURE_BASISU}loadTexture(e){const t=this.parser,n=t.json,i=n.textures[e];if(!i.extensions||!i.extensions[this.name])return null;const r=i.extensions[this.name],o=t.options.ktx2Loader;if(!o){if(n.extensionsRequired&&n.extensionsRequired.indexOf(this.name)>=0)throw new Error("THREE.GLTFLoader: setKTX2Loader must be called before loading KTX2 textures");return null}return t.loadTextureImage(e,r.source,o)}}class _S{constructor(e){this.parser=e,this.name=en.EXT_TEXTURE_WEBP}loadTexture(e){const t=this.name,n=this.parser,i=n.json,r=i.textures[e];if(!r.extensions||!r.extensions[t])return null;const o=r.extensions[t],a=i.images[o.source];let c=n.textureLoader;if(a.uri){const l=n.options.manager.getHandler(a.uri);l!==null&&(c=l)}return n.loadTextureImage(e,o.source,c)}}class vS{constructor(e){this.parser=e,this.name=en.EXT_TEXTURE_AVIF}loadTexture(e){const t=this.name,n=this.parser,i=n.json,r=i.textures[e];if(!r.extensions||!r.extensions[t])return null;const o=r.extensions[t],a=i.images[o.source];let c=n.textureLoader;if(a.uri){const l=n.options.manager.getHandler(a.uri);l!==null&&(c=l)}return n.loadTextureImage(e,o.source,c)}}class qd{constructor(e,t){this.name=t,this.parser=e}loadBufferView(e){const t=this.parser.json,n=t.bufferViews[e];if(n.extensions&&n.extensions[this.name]){const i=n.extensions[this.name],r=this.parser.getDependency("buffer",i.buffer),o=this.parser.options.meshoptDecoder;if(!o||!o.supported){if(t.extensionsRequired&&t.extensionsRequired.indexOf(this.name)>=0)throw new Error("THREE.GLTFLoader: setMeshoptDecoder must be called before loading compressed files");return null}return r.then(function(a){const c=i.byteOffset||0,l=i.byteLength||0,u=i.count,f=i.byteStride,h=new Uint8Array(a,c,l);return o.decodeGltfBufferAsync?o.decodeGltfBufferAsync(u,f,h,i.mode,i.filter).then(function(d){return d.buffer}):o.ready.then(function(){const d=new ArrayBuffer(u*f);return o.decodeGltfBuffer(new Uint8Array(d),u,f,h,i.mode,i.filter),d})})}else return null}}class MS{constructor(e){this.name=en.EXT_MESH_GPU_INSTANCING,this.parser=e}createNodeMesh(e){const t=this.parser.json,n=t.nodes[e];if(!n.extensions||!n.extensions[this.name]||n.mesh===void 0)return null;const i=t.meshes[n.mesh];for(const l of i.primitives)if(l.mode!==ns.TRIANGLES&&l.mode!==ns.TRIANGLE_STRIP&&l.mode!==ns.TRIANGLE_FAN&&l.mode!==void 0)return null;const o=n.extensions[this.name].attributes,a=[],c={};for(const l in o)a.push(this.parser.getDependency("accessor",o[l]).then(u=>(c[l]=u,c[l])));return a.length<1?null:(a.push(this.parser.createNodeMesh(e)),Promise.all(a).then(l=>{const u=l.pop(),f=u.isGroup?u.children:[u],h=l[0].count,d=[];for(const m of f){const M=new zt,x=new V,g=new ni,A=new V(1,1,1),I=new so(m.geometry,m.material,h);for(let w=0;w<h;w++)c.TRANSLATION&&x.fromBufferAttribute(c.TRANSLATION,w),c.ROTATION&&g.fromBufferAttribute(c.ROTATION,w),c.SCALE&&A.fromBufferAttribute(c.SCALE,w),I.setMatrixAt(w,M.compose(x,g,A));let _=null;for(const w in c)if(w==="_COLOR_0"){const R=c[w];I.instanceColor=new lc(R.array,R.itemSize,R.normalized)}else if(w!=="TRANSLATION"&&w!=="ROTATION"&&w!=="SCALE"){if(_===null){const D=I.geometry;_=new Rn,_.name=D.name;for(const v in D.attributes)_.setAttribute(v,D.attributes[v]);for(const v in D.morphAttributes)_.morphAttributes[v]=D.morphAttributes[v];D.index!==null&&_.setIndex(D.index),_.morphTargetsRelative=D.morphTargetsRelative;for(const v of D.groups)_.addGroup(v.start,v.count,v.materialIndex);D.boundingBox!==null&&(_.boundingBox=D.boundingBox.clone()),D.boundingSphere!==null&&(_.boundingSphere=D.boundingSphere.clone()),_.drawRange.start=D.drawRange.start,_.drawRange.count=D.drawRange.count,_.userData=Object.assign({},D.userData),I.geometry=_}const R=c[w];_.setAttribute(w,new lc(R.array,R.itemSize,R.normalized))}On.prototype.copy.call(I,m),this.parser.assignFinalMaterial(I),d.push(I)}return u.isGroup?(u.clear(),u.add(...d),u):d[0]}))}}const y0="glTF",Ga=12,Yd={JSON:1313821514,BIN:5130562};class yS{constructor(e){this.name=en.KHR_BINARY_GLTF,this.content=null,this.body=null;const t=new DataView(e,0,Ga),n=new TextDecoder;if(this.header={magic:n.decode(new Uint8Array(e.slice(0,4))),version:t.getUint32(4,!0),length:t.getUint32(8,!0)},this.header.magic!==y0)throw new Error("THREE.GLTFLoader: Unsupported glTF-Binary header.");if(this.header.version<2)throw new Error("THREE.GLTFLoader: Legacy binary file detected.");const i=this.header.length-Ga,r=new DataView(e,Ga);let o=0;for(;o<i;){const a=r.getUint32(o,!0);o+=4;const c=r.getUint32(o,!0);if(o+=4,c===Yd.JSON){const l=new Uint8Array(e,Ga+o,a);this.content=n.decode(l)}else if(c===Yd.BIN){const l=Ga+o;this.body=e.slice(l,l+a)}o+=a}if(this.content===null)throw new Error("THREE.GLTFLoader: JSON content not found.")}}class SS{constructor(e,t){if(!t)throw new Error("THREE.GLTFLoader: No DRACOLoader instance provided.");this.name=en.KHR_DRACO_MESH_COMPRESSION,this.json=e,this.dracoLoader=t,this.dracoLoader.preload()}decodePrimitive(e,t){const n=this.json,i=this.dracoLoader,r=e.extensions[this.name].bufferView,o=e.extensions[this.name].attributes,a={},c={},l={};for(const u in o){const f=Lh[u]||u.toLowerCase();a[f]=o[u]}for(const u in e.attributes){const f=Lh[u]||u.toLowerCase();if(o[u]!==void 0){const h=n.accessors[e.attributes[u]],d=ia[h.componentType];l[f]=d.name,c[f]=h.normalized===!0}}return t.getDependency("bufferView",r).then(function(u){return new Promise(function(f,h){i.decodeDracoFile(u,function(d){for(const m in d.attributes){const M=d.attributes[m],x=c[m];x!==void 0&&(M.normalized=x)}f(d)},a,l,Hi,h)})})}}class bS{constructor(){this.name=en.KHR_TEXTURE_TRANSFORM}extendTexture(e,t){if((t.texCoord===void 0||t.texCoord===e.channel)&&t.offset===void 0&&t.rotation===void 0&&t.scale===void 0)return e;if(e=e.clone(),t.texCoord!==void 0&&(e.channel=t.texCoord),t.offset!==void 0&&e.offset.fromArray(t.offset),t.rotation!==void 0&&(e.rotation=t.rotation),t.scale!==void 0&&e.repeat.fromArray(t.scale),t.rotation!==void 0){const n=Math.cos(e.rotation),i=Math.sin(e.rotation);e.matrix.set(e.repeat.x*n,e.repeat.y*i,e.offset.x,-e.repeat.x*i,e.repeat.y*n,e.offset.y,0,0,1),e.matrixAutoUpdate=!1}return e.needsUpdate=!0,e}}class TS{constructor(){this.name=en.KHR_MESH_QUANTIZATION}}class S0 extends ca{constructor(e,t,n,i){super(e,t,n,i)}copySampleValue_(e){const t=this.resultBuffer,n=this.sampleValues,i=this.valueSize,r=e*i*3+i;for(let o=0;o!==i;o++)t[o]=n[r+o];return t}interpolate_(e,t,n,i){const r=this.resultBuffer,o=this.sampleValues,a=this.valueSize,c=a*2,l=a*3,u=i-t,f=(n-t)/u,h=f*f,d=h*f,m=e*l,M=m-l,x=-2*d+3*h,g=d-h,A=1-x,I=g-h+f;for(let _=0;_!==a;_++){const w=o[M+_+a],R=o[M+_+c]*u,D=o[m+_+a],v=o[m+_]*u;r[_]=A*w+I*R+x*D+g*v}return r}}const ES=new ni;class wS extends S0{interpolate_(e,t,n,i){const r=super.interpolate_(e,t,n,i);return ES.fromArray(r).normalize().toArray(r),r}}const ns={POINTS:0,LINES:1,LINE_LOOP:2,LINE_STRIP:3,TRIANGLES:4,TRIANGLE_STRIP:5,TRIANGLE_FAN:6},ia={5120:Int8Array,5121:Uint8Array,5122:Int16Array,5123:Uint16Array,5125:Uint32Array,5126:Float32Array},Kd={9728:ci,9729:li,9984:Rp,9985:xl,9986:Ka,9987:sr},jd={33071:Bs,33648:wl,10497:Lr},Lu={SCALAR:1,VEC2:2,VEC3:3,VEC4:4,MAT2:4,MAT3:9,MAT4:16},Lh={POSITION:"position",NORMAL:"normal",TANGENT:"tangent",TEXCOORD_0:"uv",TEXCOORD_1:"uv1",TEXCOORD_2:"uv2",TEXCOORD_3:"uv3",COLOR_0:"color",WEIGHTS_0:"skinWeight",JOINTS_0:"skinIndex"},Er={scale:"scale",translation:"position",rotation:"quaternion",weights:"morphTargetInfluences"},AS={CUBICSPLINE:void 0,LINEAR:oc,STEP:rc},Nu={OPAQUE:"OPAQUE",MASK:"MASK",BLEND:"BLEND"};function RS(s){return s.DefaultMaterial===void 0&&(s.DefaultMaterial=new $e({color:16777215,emissive:0,metalness:1,roughness:1,transparent:!1,depthTest:!0,side:Ir})),s.DefaultMaterial}function Jr(s,e,t){for(const n in t.extensions)s[n]===void 0&&(e.userData.gltfExtensions=e.userData.gltfExtensions||{},e.userData.gltfExtensions[n]=t.extensions[n])}function Us(s,e){e.extras!==void 0&&(typeof e.extras=="object"?Object.assign(s.userData,e.extras):console.warn("THREE.GLTFLoader: Ignoring primitive type .extras, "+e.extras))}function CS(s,e,t){let n=!1,i=!1,r=!1;for(let l=0,u=e.length;l<u;l++){const f=e[l];if(f.POSITION!==void 0&&(n=!0),f.NORMAL!==void 0&&(i=!0),f.COLOR_0!==void 0&&(r=!0),n&&i&&r)break}if(!n&&!i&&!r)return Promise.resolve(s);const o=[],a=[],c=[];for(let l=0,u=e.length;l<u;l++){const f=e[l];if(n){const h=f.POSITION!==void 0?t.getDependency("accessor",f.POSITION):s.attributes.position;o.push(h)}if(i){const h=f.NORMAL!==void 0?t.getDependency("accessor",f.NORMAL):s.attributes.normal;a.push(h)}if(r){const h=f.COLOR_0!==void 0?t.getDependency("accessor",f.COLOR_0):s.attributes.color;c.push(h)}}return Promise.all([Promise.all(o),Promise.all(a),Promise.all(c)]).then(function(l){const u=l[0],f=l[1],h=l[2];return n&&(s.morphAttributes.position=u),i&&(s.morphAttributes.normal=f),r&&(s.morphAttributes.color=h),s.morphTargetsRelative=!0,s})}function PS(s,e){if(s.updateMorphTargets(),e.weights!==void 0)for(let t=0,n=e.weights.length;t<n;t++)s.morphTargetInfluences[t]=e.weights[t];if(e.extras&&Array.isArray(e.extras.targetNames)){const t=e.extras.targetNames;if(s.morphTargetInfluences.length===t.length){s.morphTargetDictionary={};for(let n=0,i=t.length;n<i;n++)s.morphTargetDictionary[t[n]]=n}else console.warn("THREE.GLTFLoader: Invalid extras.targetNames length. Ignoring names.")}}function IS(s){let e;const t=s.extensions&&s.extensions[en.KHR_DRACO_MESH_COMPRESSION];if(t?e="draco:"+t.bufferView+":"+t.indices+":"+Du(t.attributes):e=s.indices+":"+Du(s.attributes)+":"+s.mode,s.targets!==void 0)for(let n=0,i=s.targets.length;n<i;n++)e+=":"+Du(s.targets[n]);return e}function Du(s){let e="";const t=Object.keys(s).sort();for(let n=0,i=t.length;n<i;n++)e+=t[n]+":"+s[t[n]]+";";return e}function Nh(s){switch(s){case Int8Array:return 1/127;case Uint8Array:return 1/255;case Int16Array:return 1/32767;case Uint16Array:return 1/65535;default:throw new Error("THREE.GLTFLoader: Unsupported normalized accessor component type.")}}function LS(s){return s.search(/\.jpe?g($|\?)/i)>0||s.search(/^data\:image\/jpeg/)===0?"image/jpeg":s.search(/\.webp($|\?)/i)>0||s.search(/^data\:image\/webp/)===0?"image/webp":s.search(/\.ktx2($|\?)/i)>0||s.search(/^data\:image\/ktx2/)===0?"image/ktx2":"image/png"}const NS=new zt;class DS{constructor(e={},t={}){this.json=e,this.extensions={},this.plugins={},this.options=t,this.cache=new iS,this.associations=new Map,this.primitiveCache={},this.nodeCache={},this.meshCache={refs:{},uses:{}},this.cameraCache={refs:{},uses:{}},this.lightCache={refs:{},uses:{}},this.sourceCache={},this.textureCache={},this.nodeNamesUsed={};let n=!1,i=-1,r=!1,o=-1;if(typeof navigator<"u"&&typeof navigator.userAgent<"u"){const a=navigator.userAgent;n=/^((?!chrome|android).)*safari/i.test(a)===!0;const c=a.match(/Version\/(\d+)/);i=n&&c?parseInt(c[1],10):-1,r=a.indexOf("Firefox")>-1,o=r?a.match(/Firefox\/([0-9]+)\./)[1]:-1}typeof createImageBitmap>"u"||n&&i<17||r&&o<98?this.textureLoader=new kx(this.options.manager):this.textureLoader=new Wx(this.options.manager),this.textureLoader.setCrossOrigin(this.options.crossOrigin),this.textureLoader.setRequestHeader(this.options.requestHeader),this.fileLoader=new Dl(this.options.manager),this.fileLoader.setResponseType("arraybuffer"),this.options.crossOrigin==="use-credentials"&&this.fileLoader.setWithCredentials(!0)}setExtensions(e){this.extensions=e}setPlugins(e){this.plugins=e}parse(e,t){const n=this,i=this.json,r=this.extensions;this.cache.removeAll(),this.nodeCache={},this._invokeAll(function(o){return o._markDefs&&o._markDefs()}),Promise.all(this._invokeAll(function(o){return o.beforeRoot&&o.beforeRoot()})).then(function(){return Promise.all([n.getDependencies("scene"),n.getDependencies("animation"),n.getDependencies("camera")])}).then(function(o){const a={scene:o[0][i.scene||0],scenes:o[0],animations:o[1],cameras:o[2],asset:i.asset,parser:n,userData:{}};return Jr(r,a,i),Us(a,i),Promise.all(n._invokeAll(function(c){return c.afterRoot&&c.afterRoot(a)})).then(function(){for(const c of a.scenes)c.updateMatrixWorld();e(a)})}).catch(t)}_markDefs(){const e=this.json.nodes||[],t=this.json.skins||[],n=this.json.meshes||[];for(let i=0,r=t.length;i<r;i++){const o=t[i].joints;for(let a=0,c=o.length;a<c;a++)e[o[a]].isBone=!0}for(let i=0,r=e.length;i<r;i++){const o=e[i];o.mesh!==void 0&&(this._addNodeRef(this.meshCache,o.mesh),o.skin!==void 0&&(n[o.mesh].isSkinnedMesh=!0)),o.camera!==void 0&&this._addNodeRef(this.cameraCache,o.camera)}}_addNodeRef(e,t){t!==void 0&&(e.refs[t]===void 0&&(e.refs[t]=e.uses[t]=0),e.refs[t]++)}_getNodeRef(e,t,n){if(e.refs[t]<=1)return n;const i=n.clone(),r=(o,a)=>{const c=this.associations.get(o);c!=null&&this.associations.set(a,c);for(const[l,u]of o.children.entries())r(u,a.children[l])};return r(n,i),i.name+="_instance_"+e.uses[t]++,i}_invokeOne(e){const t=Object.values(this.plugins);t.push(this);for(let n=0;n<t.length;n++){const i=e(t[n]);if(i)return i}return null}_invokeAll(e){const t=Object.values(this.plugins);t.unshift(this);const n=[];for(let i=0;i<t.length;i++){const r=e(t[i]);r&&n.push(r)}return n}getDependency(e,t){const n=e+":"+t;let i=this.cache.get(n);if(!i){switch(e){case"scene":i=this.loadScene(t);break;case"node":i=this._invokeOne(function(r){return r.loadNode&&r.loadNode(t)});break;case"mesh":i=this._invokeOne(function(r){return r.loadMesh&&r.loadMesh(t)});break;case"accessor":i=this.loadAccessor(t);break;case"bufferView":i=this._invokeOne(function(r){return r.loadBufferView&&r.loadBufferView(t)});break;case"buffer":i=this.loadBuffer(t);break;case"material":i=this._invokeOne(function(r){return r.loadMaterial&&r.loadMaterial(t)});break;case"texture":i=this._invokeOne(function(r){return r.loadTexture&&r.loadTexture(t)});break;case"skin":i=this.loadSkin(t);break;case"animation":i=this._invokeOne(function(r){return r.loadAnimation&&r.loadAnimation(t)});break;case"camera":i=this.loadCamera(t);break;default:if(i=this._invokeOne(function(r){return r!=this&&r.getDependency&&r.getDependency(e,t)}),!i)throw new Error("Unknown type: "+e);break}this.cache.add(n,i)}return i}getDependencies(e){let t=this.cache.get(e);if(!t){const n=this,i=this.json[e+(e==="mesh"?"es":"s")]||[];t=Promise.all(i.map(function(r,o){return n.getDependency(e,o)})),this.cache.add(e,t)}return t}loadBuffer(e){const t=this.json.buffers[e],n=this.fileLoader;if(t.type&&t.type!=="arraybuffer")throw new Error("THREE.GLTFLoader: "+t.type+" buffer type is not supported.");if(t.uri===void 0&&e===0)return Promise.resolve(this.extensions[en.KHR_BINARY_GLTF].body);const i=this.options;return new Promise(function(r,o){n.load(Pr.resolveURL(t.uri,i.path),r,void 0,function(){o(new Error('THREE.GLTFLoader: Failed to load buffer "'+t.uri+'".'))})})}loadBufferView(e){const t=this.json.bufferViews[e];return this.getDependency("buffer",t.buffer).then(function(n){const i=t.byteLength||0,r=t.byteOffset||0;return n.slice(r,r+i)})}loadAccessor(e){const t=this,n=this.json,i=this.json.accessors[e];if(i.bufferView===void 0&&i.sparse===void 0){const o=Lu[i.type],a=ia[i.componentType],c=i.normalized===!0,l=new a(i.count*o);return Promise.resolve(new Fn(l,o,c))}const r=[];return i.bufferView!==void 0?r.push(this.getDependency("bufferView",i.bufferView)):r.push(null),i.sparse!==void 0&&(r.push(this.getDependency("bufferView",i.sparse.indices.bufferView)),r.push(this.getDependency("bufferView",i.sparse.values.bufferView))),Promise.all(r).then(function(o){const a=o[0],c=Lu[i.type],l=ia[i.componentType],u=l.BYTES_PER_ELEMENT,f=u*c,h=i.byteOffset||0,d=i.bufferView!==void 0?n.bufferViews[i.bufferView].byteStride:void 0,m=i.normalized===!0;let M,x;if(d&&d!==f){const g=Math.floor(h/d),A="InterleavedBuffer:"+i.bufferView+":"+i.componentType+":"+g+":"+i.count;let I=t.cache.get(A);I||(M=new l(a,g*d,i.count*d/u),I=new Gp(M,d/u),t.cache.add(A,I)),x=new Fl(I,c,h%d/u,m)}else a===null?M=new l(i.count*c):M=new l(a,h,i.count*c),x=new Fn(M,c,m);if(i.sparse!==void 0){const g=Lu.SCALAR,A=ia[i.sparse.indices.componentType],I=i.sparse.indices.byteOffset||0,_=i.sparse.values.byteOffset||0,w=new A(o[1],I,i.sparse.count*g),R=new l(o[2],_,i.sparse.count*c);a!==null&&(x=new Fn(x.array.slice(),x.itemSize,x.normalized)),x.normalized=!1;for(let D=0,v=w.length;D<v;D++){const L=w[D];if(x.setX(L,R[D*c]),c>=2&&x.setY(L,R[D*c+1]),c>=3&&x.setZ(L,R[D*c+2]),c>=4&&x.setW(L,R[D*c+3]),c>=5)throw new Error("THREE.GLTFLoader: Unsupported itemSize in sparse BufferAttribute.")}x.normalized=m}return x})}loadTexture(e){const t=this.json,n=this.options,r=t.textures[e].source,o=t.images[r];let a=this.textureLoader;if(o.uri){const c=n.manager.getHandler(o.uri);c!==null&&(a=c)}return this.loadTextureImage(e,r,a)}loadTextureImage(e,t,n){const i=this,r=this.json,o=r.textures[e],a=r.images[t],c=(a.uri||a.bufferView)+":"+o.sampler;if(this.textureCache[c])return this.textureCache[c];const l=this.loadImageSource(t,n).then(function(u){u.flipY=!1,u.name=o.name||a.name||"",u.name===""&&typeof a.uri=="string"&&a.uri.startsWith("data:image/")===!1&&(u.name=a.uri);const h=(r.samplers||{})[o.sampler]||{};return u.magFilter=Kd[h.magFilter]||li,u.minFilter=Kd[h.minFilter]||sr,u.wrapS=jd[h.wrapS]||Lr,u.wrapT=jd[h.wrapT]||Lr,u.generateMipmaps=!u.isCompressedTexture&&u.minFilter!==ci&&u.minFilter!==li,i.associations.set(u,{textures:e}),u}).catch(function(){return null});return this.textureCache[c]=l,l}loadImageSource(e,t){const n=this,i=this.json,r=this.options;if(this.sourceCache[e]!==void 0)return this.sourceCache[e].then(f=>f.clone());const o=i.images[e],a=self.URL||self.webkitURL;let c=o.uri||"",l=!1;if(o.bufferView!==void 0)c=n.getDependency("bufferView",o.bufferView).then(function(f){l=!0;const h=new Blob([f],{type:o.mimeType});return c=a.createObjectURL(h),c});else if(o.uri===void 0)throw new Error("THREE.GLTFLoader: Image "+e+" is missing URI and bufferView");const u=Promise.resolve(c).then(function(f){return new Promise(function(h,d){let m=h;t.isImageBitmapLoader===!0&&(m=function(M){const x=new ui(M);x.needsUpdate=!0,h(x)}),t.load(Pr.resolveURL(f,r.path),m,void 0,d)})}).then(function(f){return l===!0&&a.revokeObjectURL(c),Us(f,o),f.userData.mimeType=o.mimeType||LS(o.uri),f}).catch(function(f){throw console.error("THREE.GLTFLoader: Couldn't load texture",c),f});return this.sourceCache[e]=u,u}assignTexture(e,t,n,i){const r=this;return this.getDependency("texture",n.index).then(function(o){if(!o)return null;if(n.texCoord!==void 0&&n.texCoord>0&&(o=o.clone(),o.channel=n.texCoord),r.extensions[en.KHR_TEXTURE_TRANSFORM]){const a=n.extensions!==void 0?n.extensions[en.KHR_TEXTURE_TRANSFORM]:void 0;if(a){const c=r.associations.get(o);o=r.extensions[en.KHR_TEXTURE_TRANSFORM].extendTexture(o,a),r.associations.set(o,c)}}return i!==void 0&&(o.colorSpace=i),e[t]=o,o})}assignFinalMaterial(e){const t=e.geometry;let n=e.material;const i=t.attributes.tangent===void 0,r=t.attributes.color!==void 0,o=t.attributes.normal===void 0;if(e.isPoints){const a="PointsMaterial:"+n.uuid;let c=this.cache.get(a);c||(c=new qp,Vs.prototype.copy.call(c,n),c.color.copy(n.color),c.map=n.map,c.sizeAttenuation=!1,this.cache.add(a,c)),n=c}else if(e.isLine){const a="LineBasicMaterial:"+n.uuid;let c=this.cache.get(a);c||(c=new tf,Vs.prototype.copy.call(c,n),c.color.copy(n.color),c.map=n.map,this.cache.add(a,c)),n=c}if(i||r||o){let a="ClonedMaterial:"+n.uuid+":";i&&(a+="derivative-tangents:"),r&&(a+="vertex-colors:"),o&&(a+="flat-shading:");let c=this.cache.get(a);c||(c=n.clone(),r&&(c.vertexColors=!0),o&&(c.flatShading=!0),i&&(c.normalScale&&(c.normalScale.y*=-1),c.clearcoatNormalScale&&(c.clearcoatNormalScale.y*=-1)),this.cache.add(a,c),this.associations.set(c,this.associations.get(n))),n=c}e.material=n}getMaterialType(){return $e}loadMaterial(e){const t=this,n=this.json,i=this.extensions,r=n.materials[e];let o;const a={},c=r.extensions||{},l=[];if(c[en.KHR_MATERIALS_UNLIT]){const f=i[en.KHR_MATERIALS_UNLIT];o=f.getMaterialType(),l.push(f.extendParams(a,r,t))}else{const f=r.pbrMetallicRoughness||{};if(a.color=new it(1,1,1),a.opacity=1,Array.isArray(f.baseColorFactor)){const h=f.baseColorFactor;a.color.setRGB(h[0],h[1],h[2],Hi),a.opacity=h[3]}f.baseColorTexture!==void 0&&l.push(t.assignTexture(a,"map",f.baseColorTexture,Xn)),a.metalness=f.metallicFactor!==void 0?f.metallicFactor:1,a.roughness=f.roughnessFactor!==void 0?f.roughnessFactor:1,f.metallicRoughnessTexture!==void 0&&(l.push(t.assignTexture(a,"metalnessMap",f.metallicRoughnessTexture)),l.push(t.assignTexture(a,"roughnessMap",f.metallicRoughnessTexture))),o=this._invokeOne(function(h){return h.getMaterialType&&h.getMaterialType(e)}),l.push(Promise.all(this._invokeAll(function(h){return h.extendMaterialParams&&h.extendMaterialParams(e,a)})))}r.doubleSided===!0&&(a.side=pi);const u=r.alphaMode||Nu.OPAQUE;if(u===Nu.BLEND?(a.transparent=!0,a.depthWrite=!1):(a.transparent=!1,u===Nu.MASK&&(a.alphaTest=r.alphaCutoff!==void 0?r.alphaCutoff:.5)),r.normalTexture!==void 0&&o!==ki&&(l.push(t.assignTexture(a,"normalMap",r.normalTexture)),a.normalScale=new Ye(1,1),r.normalTexture.scale!==void 0)){const f=r.normalTexture.scale;a.normalScale.set(f,f)}if(r.occlusionTexture!==void 0&&o!==ki&&(l.push(t.assignTexture(a,"aoMap",r.occlusionTexture)),r.occlusionTexture.strength!==void 0&&(a.aoMapIntensity=r.occlusionTexture.strength)),r.emissiveFactor!==void 0&&o!==ki){const f=r.emissiveFactor;a.emissive=new it().setRGB(f[0],f[1],f[2],Hi)}return r.emissiveTexture!==void 0&&o!==ki&&l.push(t.assignTexture(a,"emissiveMap",r.emissiveTexture,Xn)),Promise.all(l).then(function(){const f=new o(a);return r.name&&(f.name=r.name),Us(f,r),t.associations.set(f,{materials:e}),r.extensions&&Jr(i,f,r),f})}createUniqueName(e){const t=Tn.sanitizeNodeName(e||"");return t in this.nodeNamesUsed?t+"_"+ ++this.nodeNamesUsed[t]:(this.nodeNamesUsed[t]=0,t)}loadGeometries(e){const t=this,n=this.extensions,i=this.primitiveCache;function r(a){return n[en.KHR_DRACO_MESH_COMPRESSION].decodePrimitive(a,t).then(function(c){return $d(c,a,t)})}const o=[];for(let a=0,c=e.length;a<c;a++){const l=e[a],u=IS(l),f=i[u];if(f)o.push(f.promise);else{let h;l.extensions&&l.extensions[en.KHR_DRACO_MESH_COMPRESSION]?h=r(l):h=$d(new Rn,l,t),l.mode===ns.TRIANGLE_STRIP?h=h.then(d=>Xd(d,Up)):l.mode===ns.TRIANGLE_FAN&&(h=h.then(d=>Xd(d,yh))),i[u]={primitive:l,promise:h},o.push(h)}}return Promise.all(o)}loadMesh(e){const t=this,n=this.json,i=this.extensions,r=n.meshes[e],o=r.primitives,a=[];for(let c=0,l=o.length;c<l;c++){const u=o[c].material===void 0?RS(this.cache):this.getDependency("material",o[c].material);a.push(u)}return a.push(t.loadGeometries(o)),Promise.all(a).then(async function(c){const l=c.slice(0,c.length-1),u=c[c.length-1],f=[];for(let d=0,m=u.length;d<m;d++){const M=u[d],x=o[d];let g;const A=l[d];if(x.mode===ns.TRIANGLES||x.mode===ns.TRIANGLE_STRIP||x.mode===ns.TRIANGLE_FAN||x.mode===void 0){const I=r.isSkinnedMesh===!0,_=M.hasAttribute("skinIndex")&&M.hasAttribute("skinWeight");I&&_===!1&&console.warn("THREE.GLTFLoader: Missing skinIndex or skinWeight attributes. Skinning disabled."),g=I&&_?new Lg(M,A):new Ut(M,A),g.isSkinnedMesh===!0&&g.normalizeSkinWeights()}else if(x.mode===ns.LINES)g=new Xp(M,A);else if(x.mode===ns.LINE_STRIP)g=new nf(M,A);else if(x.mode===ns.LINE_LOOP)g=new Fg(M,A);else if(x.mode===ns.POINTS)g=new Yp(M,A);else throw new Error("THREE.GLTFLoader: Primitive mode unsupported: "+x.mode);Object.keys(g.geometry.morphAttributes).length>0&&PS(g,r),g.name=t.createUniqueName(r.name||"mesh_"+e),Us(g,r),x.extensions&&Jr(i,g,x),t.assignFinalMaterial(g),f.push(g)}for(let d=0,m=f.length;d<m;d++)t.associations.set(f[d],{meshes:e,primitives:d});if(f.length===1)return r.extensions&&Jr(i,f[0],r),f[0];const h=new Vn;r.extensions&&Jr(i,h,r),t.associations.set(h,{meshes:e});for(let d=0,m=f.length;d<m;d++)h.add(f[d]);return h})}loadCamera(e){let t;const n=this.json.cameras[e],i=n[n.type];if(!i){console.warn("THREE.GLTFLoader: Missing camera parameters.");return}return n.type==="perspective"?t=new Ni(ug.radToDeg(i.yfov),i.aspectRatio||1,i.znear||1,i.zfar||2e6):n.type==="orthographic"&&(t=new Hl(-i.xmag,i.xmag,i.ymag,-i.ymag,i.znear,i.zfar)),n.name&&(t.name=this.createUniqueName(n.name)),Us(t,n),Promise.resolve(t)}loadSkin(e){const t=this.json.skins[e],n=[];for(let i=0,r=t.joints.length;i<r;i++)n.push(this._loadNodeShallow(t.joints[i]));return t.inverseBindMatrices!==void 0?n.push(this.getDependency("accessor",t.inverseBindMatrices)):n.push(null),Promise.all(n).then(function(i){const r=i.pop(),o=i,a=[],c=[];for(let l=0,u=o.length;l<u;l++){const f=o[l];if(f){a.push(f);const h=new zt;r!==null&&h.fromArray(r.array,l*16),c.push(h)}else console.warn('THREE.GLTFLoader: Joint "%s" could not be found.',t.joints[l])}return new Qh(a,c)})}loadAnimation(e){const t=this.json,n=this,i=t.animations[e],r=i.name?i.name:"animation_"+e,o=[],a=[],c=[],l=[],u=[];for(let f=0,h=i.channels.length;f<h;f++){const d=i.channels[f],m=i.samplers[d.sampler],M=d.target,x=M.node,g=i.parameters!==void 0?i.parameters[m.input]:m.input,A=i.parameters!==void 0?i.parameters[m.output]:m.output;M.node!==void 0&&(o.push(this.getDependency("node",x)),a.push(this.getDependency("accessor",g)),c.push(this.getDependency("accessor",A)),l.push(m),u.push(M))}return Promise.all([Promise.all(o),Promise.all(a),Promise.all(c),Promise.all(l),Promise.all(u)]).then(function(f){const h=f[0],d=f[1],m=f[2],M=f[3],x=f[4],g=[];for(let I=0,_=h.length;I<_;I++){const w=h[I],R=d[I],D=m[I],v=M[I],L=x[I];if(w===void 0)continue;w.updateMatrix&&w.updateMatrix();const O=n._createAnimationTracks(w,R,D,v,L);if(O)for(let z=0;z<O.length;z++)g.push(O[z])}const A=new Lx(r,void 0,g);return Us(A,i),A})}createNodeMesh(e){const t=this.json,n=this,i=t.nodes[e];return i.mesh===void 0?null:n.getDependency("mesh",i.mesh).then(function(r){const o=n._getNodeRef(n.meshCache,i.mesh,r);return i.weights!==void 0&&o.traverse(function(a){if(a.isMesh)for(let c=0,l=i.weights.length;c<l;c++)a.morphTargetInfluences[c]=i.weights[c]}),o})}loadNode(e){const t=this.json,n=this,i=t.nodes[e],r=n._loadNodeShallow(e),o=[],a=i.children||[];for(let l=0,u=a.length;l<u;l++)o.push(n.getDependency("node",a[l]));const c=i.skin===void 0?Promise.resolve(null):n.getDependency("skin",i.skin);return Promise.all([r,Promise.all(o),c]).then(function(l){const u=l[0],f=l[1],h=l[2];h!==null&&u.traverse(function(d){d.isSkinnedMesh&&d.bind(h,NS)});for(let d=0,m=f.length;d<m;d++)u.add(f[d]);if(u.userData.pivot!==void 0&&f.length>0){const d=u.userData.pivot,m=f[0];u.pivot=new V().fromArray(d),u.position.x-=d[0],u.position.y-=d[1],u.position.z-=d[2],m.position.set(0,0,0),delete u.userData.pivot}return u})}_loadNodeShallow(e){const t=this.json,n=this.extensions,i=this;if(this.nodeCache[e]!==void 0)return this.nodeCache[e];const r=t.nodes[e],o=r.name?i.createUniqueName(r.name):"",a=[],c=i._invokeOne(function(l){return l.createNodeMesh&&l.createNodeMesh(e)});return c&&a.push(c),r.camera!==void 0&&a.push(i.getDependency("camera",r.camera).then(function(l){return i._getNodeRef(i.cameraCache,r.camera,l)})),i._invokeAll(function(l){return l.createNodeAttachment&&l.createNodeAttachment(e)}).forEach(function(l){a.push(l)}),this.nodeCache[e]=Promise.all(a).then(function(l){let u;if(r.isBone===!0?u=new Wp:l.length>1?u=new Vn:l.length===1?u=l[0]:u=new On,u!==l[0])for(let f=0,h=l.length;f<h;f++)u.add(l[f]);if(r.name&&(u.userData.name=r.name,u.name=o),Us(u,r),r.extensions&&Jr(n,u,r),r.matrix!==void 0){const f=new zt;f.fromArray(r.matrix),u.applyMatrix4(f)}else r.translation!==void 0&&u.position.fromArray(r.translation),r.rotation!==void 0&&u.quaternion.fromArray(r.rotation),r.scale!==void 0&&u.scale.fromArray(r.scale);if(!i.associations.has(u))i.associations.set(u,{});else if(r.mesh!==void 0&&i.meshCache.refs[r.mesh]>1){const f=i.associations.get(u);i.associations.set(u,{...f})}return i.associations.get(u).nodes=e,u}),this.nodeCache[e]}loadScene(e){const t=this.extensions,n=this.json.scenes[e],i=this,r=new Vn;n.name&&(r.name=i.createUniqueName(n.name)),Us(r,n),n.extensions&&Jr(t,r,n);const o=n.nodes||[],a=[];for(let c=0,l=o.length;c<l;c++)a.push(i.getDependency("node",o[c]));return Promise.all(a).then(function(c){for(let u=0,f=c.length;u<f;u++){const h=c[u];h.parent!==null?r.add(tS(h)):r.add(h)}const l=u=>{const f=new Map;for(const[h,d]of i.associations)(h instanceof Vs||h instanceof ui)&&f.set(h,d);return u.traverse(h=>{const d=i.associations.get(h);d!=null&&f.set(h,d)}),f};return i.associations=l(r),r})}_createAnimationTracks(e,t,n,i,r){const o=[],a=e.name?e.name:e.uuid,c=[];function l(d){d.morphTargetInfluences&&c.push(d.name?d.name:d.uuid)}Er[r.path]===Er.weights?(l(e),e.isGroup&&e.children.forEach(l)):c.push(a);let u;switch(Er[r.path]){case Er.weights:u=mc;break;case Er.rotation:u=gc;break;case Er.translation:case Er.scale:u=Nl;break;default:n.itemSize===1?u=mc:u=Nl;break}const f=i.interpolation!==void 0?AS[i.interpolation]:oc,h=this._getArrayFromAccessor(n);for(let d=0,m=c.length;d<m;d++){const M=new u(c[d]+"."+Er[r.path],t.array,h,f);i.interpolation==="CUBICSPLINE"&&this._createCubicSplineTrackInterpolant(M),o.push(M)}return o}_getArrayFromAccessor(e){let t=e.array;if(e.normalized){const n=Nh(t.constructor),i=new Float32Array(t.length);for(let r=0,o=t.length;r<o;r++)i[r]=t[r]*n;t=i}return t}_createCubicSplineTrackInterpolant(e){e.createInterpolant=function(n){const i=this instanceof gc?wS:S0;return new i(this.times,this.values,this.getValueSize()/3,n)},e.createInterpolant.isInterpolantFactoryMethodGLTFCubicSpline=!0}}function US(s,e,t){const n=e.attributes,i=new os;if(n.POSITION!==void 0){const a=t.json.accessors[n.POSITION],c=a.min,l=a.max;if(c!==void 0&&l!==void 0){if(i.set(new V(c[0],c[1],c[2]),new V(l[0],l[1],l[2])),a.normalized){const u=Nh(ia[a.componentType]);i.min.multiplyScalar(u),i.max.multiplyScalar(u)}}else{console.warn("THREE.GLTFLoader: Missing min/max properties for accessor POSITION.");return}}else return;const r=e.targets;if(r!==void 0){const a=new V,c=new V;for(let l=0,u=r.length;l<u;l++){const f=r[l];if(f.POSITION!==void 0){const h=t.json.accessors[f.POSITION],d=h.min,m=h.max;if(d!==void 0&&m!==void 0){if(c.setX(Math.max(Math.abs(d[0]),Math.abs(m[0]))),c.setY(Math.max(Math.abs(d[1]),Math.abs(m[1]))),c.setZ(Math.max(Math.abs(d[2]),Math.abs(m[2]))),h.normalized){const M=Nh(ia[h.componentType]);c.multiplyScalar(M)}a.max(c)}else console.warn("THREE.GLTFLoader: Missing min/max properties for accessor POSITION.")}}i.expandByVector(a)}s.boundingBox=i;const o=new qs;i.getCenter(o.center),o.radius=i.min.distanceTo(i.max)/2,s.boundingSphere=o}function $d(s,e,t){const n=e.attributes,i=[];function r(o,a){return t.getDependency("accessor",o).then(function(c){s.setAttribute(a,c)})}for(const o in n){const a=Lh[o]||o.toLowerCase();a in s.attributes||i.push(r(n[o],a))}if(e.indices!==void 0&&!s.index){const o=t.getDependency("accessor",e.indices).then(function(a){s.setIndex(a)});i.push(o)}return Qt.workingColorSpace!==Hi&&"COLOR_0"in n&&console.warn(`THREE.GLTFLoader: Converting vertex colors from "srgb-linear" to "${Qt.workingColorSpace}" not supported.`),Us(s,e),US(s,e,t),Promise.all(i).then(function(){return e.targets!==void 0?CS(s,e.targets,t):s})}const Uu=new WeakMap,FS=new URL("/assets/draco_decoder-C32yEggz.wasm",import.meta.url).toString(),OS=new URL("/assets/draco_wasm_wrapper-DxJM36Ib.js",import.meta.url).toString(),BS=new URL("/assets/draco_decoder-fzg4nYZr.js",import.meta.url).toString();new URL("/assets/draco_wasm_wrapper-fZCQGLGb.js",import.meta.url).toString(),new URL("/assets/draco_decoder-Z1_iN-Ht.wasm",import.meta.url).toString();class kS extends po{constructor(e){super(e),this.decoderPaths={js:OS,wasm:FS,dep_js:BS},this.decoderConfig={},this.decoderBinary=null,this.decoderPending=null,this.workerLimit=4,this.workerPool=[],this.workerNextTaskID=1,this.workerSourceURL="",this.defaultAttributeIDs={position:"POSITION",normal:"NORMAL",color:"COLOR",uv:"TEX_COORD"},this.defaultAttributeTypes={position:"Float32Array",normal:"Float32Array",color:"Float32Array",uv:"Float32Array"}}setDecoderPath(e){const{decoderPaths:t}=this;return typeof e=="object"?(t.js=e.js,t.wasm=e.wasm,t.dep_js=null):(t.js=Pr.resolveURL("draco_wasm_wrapper.js",e),t.wasm=Pr.resolveURL("draco_decoder.wasm",e),t.dep_js=Pr.resolveURL("draco_decoder.js",e)),this}setDecoderConfig(e){return console.warn("THREE.DRACOLoader: setDecoderConfig to has been deprecated and will be removed in r194."),this.decoderConfig=e,this}setWorkerLimit(e){return this.workerLimit=e,this}load(e,t,n,i){const r=new Dl(this.manager);r.setPath(this.path),r.setResponseType("arraybuffer"),r.setRequestHeader(this.requestHeader),r.setWithCredentials(this.withCredentials),r.load(e,o=>{this.parse(o,t,i)},n,i)}parse(e,t,n=()=>{}){this.decodeDracoFile(e,t,null,null,Xn,n).catch(n)}decodeDracoFile(e,t,n,i,r=Hi,o=()=>{}){const a={attributeIDs:n||this.defaultAttributeIDs,attributeTypes:i||this.defaultAttributeTypes,useUniqueIDs:!!n,vertexColorSpace:r};return this.decodeGeometry(e,a).then(t).catch(o)}decodeGeometry(e,t){const n=JSON.stringify(t);if(Uu.has(e)){const c=Uu.get(e);if(c.key===n)return c.promise;if(e.byteLength===0)throw new Error("THREE.DRACOLoader: Unable to re-decode a buffer with different settings. Buffer has already been transferred.")}let i;const r=this.workerNextTaskID++,o=e.byteLength,a=this._getWorker(r,o).then(c=>(i=c,new Promise((l,u)=>{i._callbacks[r]={resolve:l,reject:u},i.postMessage({type:"decode",id:r,taskConfig:t,buffer:e},[e])}))).then(c=>this._createGeometry(c.geometry));return a.catch(()=>!0).then(()=>{i&&r&&this._releaseTask(i,r)}),Uu.set(e,{key:n,promise:a}),a}_createGeometry(e){const t=new Rn;e.index&&t.setIndex(new Fn(e.index.array,1));for(let n=0;n<e.attributes.length;n++){const{name:i,array:r,itemSize:o,stride:a,vertexColorSpace:c}=e.attributes[n];let l;if(o===a)l=new Fn(r,o);else{const u=new Gp(r,a);l=new Fl(u,o,0)}i==="color"&&(this._assignVertexColorSpace(l,c),l.normalized=!(r instanceof Float32Array)),t.setAttribute(i,l)}return t}_assignVertexColorSpace(e,t){if(t!==Xn)return;const n=new it;for(let i=0,r=e.count;i<r;i++)n.fromBufferAttribute(e,i),Qt.colorSpaceToWorking(n,Xn),e.setXYZ(i,n.r,n.g,n.b)}_loadLibrary(e,t){const n=new Dl(this.manager);return n.setResponseType(t),n.setWithCredentials(this.withCredentials),new Promise((i,r)=>{n.load(e,i,void 0,r)})}preload(){return this._initDecoder(),this}_initDecoder(){if(this.decoderPending)return this.decoderPending;const e=typeof WebAssembly!="object"||this.decoderConfig.type==="js",t=[],{decoderPaths:n}=this;if(e){if(n.dep_js===null)throw new Error("THREE.DRACOLoader: WebAssembly is required when using a custom decoder paths.");t.push(this._loadLibrary(n.dep_js,"text"))}else t.push(this._loadLibrary(n.js,"text")),t.push(this._loadLibrary(n.wasm,"arraybuffer"));return this.decoderPending=Promise.all(t).then(i=>{const r=i[0];e||(this.decoderConfig.wasmBinary=i[1]);const o=zS.toString(),a=["/* draco decoder */",r,"","/* worker */",o.substring(o.indexOf("{")+1,o.lastIndexOf("}"))].join(`
`);this.workerSourceURL=URL.createObjectURL(new Blob([a]))}),this.decoderPending}_getWorker(e,t){return this._initDecoder().then(()=>{if(this.workerPool.length<this.workerLimit){const i=new Worker(this.workerSourceURL);i._callbacks={},i._taskCosts={},i._taskLoad=0,i.postMessage({type:"init",decoderConfig:this.decoderConfig}),i.onmessage=function(r){const o=r.data;switch(o.type){case"decode":i._callbacks[o.id].resolve(o);break;case"error":i._callbacks[o.id].reject(o);break;default:console.error('THREE.DRACOLoader: Unexpected message, "'+o.type+'"')}},this.workerPool.push(i)}else this.workerPool.sort(function(i,r){return i._taskLoad>r._taskLoad?-1:1});const n=this.workerPool[this.workerPool.length-1];return n._taskCosts[e]=t,n._taskLoad+=t,n})}_releaseTask(e,t){e._taskLoad-=e._taskCosts[t],delete e._callbacks[t],delete e._taskCosts[t]}debug(){console.log("Task load: ",this.workerPool.map(e=>e._taskLoad))}dispose(){for(let e=0;e<this.workerPool.length;++e)this.workerPool[e].terminate();return this.workerPool.length=0,this.workerSourceURL!==""&&URL.revokeObjectURL(this.workerSourceURL),this}}function zS(){let s,e;onmessage=function(o){const a=o.data;switch(a.type){case"init":s=a.decoderConfig,e=new Promise(function(u){s.onModuleLoaded=function(f){u({draco:f})},DracoDecoderModule(s)});break;case"decode":const c=a.buffer,l=a.taskConfig;e.then(u=>{const f=u.draco,h=new f.Decoder;try{const d=t(f,h,new Int8Array(c),l),m=d.attributes.map(M=>M.array.buffer);d.index&&m.push(d.index.array.buffer),self.postMessage({type:"decode",id:a.id,geometry:d},m)}catch(d){console.error(d),self.postMessage({type:"error",id:a.id,error:d.message})}finally{f.destroy(h)}});break}};function t(o,a,c,l){const u=l.attributeIDs,f=l.attributeTypes;let h,d;const m=a.GetEncodedGeometryType(c);if(m===o.TRIANGULAR_MESH)h=new o.Mesh,d=a.DecodeArrayToMesh(c,c.byteLength,h);else if(m===o.POINT_CLOUD)h=new o.PointCloud,d=a.DecodeArrayToPointCloud(c,c.byteLength,h);else throw new Error("THREE.DRACOLoader: Unexpected geometry type.");if(!d.ok()||h.ptr===0)throw new Error("THREE.DRACOLoader: Decoding failed: "+d.error_msg());const M={index:null,attributes:[]};for(const x in u){const g=self[f[x]];let A,I;if(l.useUniqueIDs)I=u[x],A=a.GetAttributeByUniqueId(h,I);else{if(I=a.GetAttributeId(h,o[u[x]]),I===-1)continue;A=a.GetAttribute(h,I)}const _=i(o,a,h,x,g,A);x==="color"&&(_.vertexColorSpace=l.vertexColorSpace),M.attributes.push(_)}return m===o.TRIANGULAR_MESH&&(M.index=n(o,a,h)),o.destroy(h),M}function n(o,a,c){const u=c.num_faces()*3,f=u*4,h=o._malloc(f);a.GetTrianglesUInt32Array(c,f,h);const d=new Uint32Array(o.HEAPF32.buffer,h,u).slice();return o._free(h),{array:d,itemSize:1}}function i(o,a,c,l,u,f){const h=c.num_points(),d=f.num_components(),m=r(o,u),M=d*u.BYTES_PER_ELEMENT,x=Math.ceil(M/4)*4,g=x/u.BYTES_PER_ELEMENT,A=h*M,I=h*x,_=o._malloc(A);a.GetAttributeDataArrayForAllPoints(c,f,m,A,_);const w=new u(o.HEAPF32.buffer,_,A/u.BYTES_PER_ELEMENT);let R;if(M===x)R=w.slice();else{R=new u(I/u.BYTES_PER_ELEMENT);let D=0;for(let v=0,L=w.length;v<L;v++){for(let O=0;O<d;O++)R[D+O]=w[v*d+O];D+=g}}return o._free(_),{name:l,count:h,itemSize:d,array:R,stride:g}}function r(o,a){switch(a){case Float32Array:return o.DT_FLOAT32;case Int8Array:return o.DT_INT8;case Int16Array:return o.DT_INT16;case Int32Array:return o.DT_INT32;case Uint8Array:return o.DT_UINT8;case Uint16Array:return o.DT_UINT16;case Uint32Array:return o.DT_UINT32}}}function ts(s,e){return s.userData.role=e,s}function HS(s,e=.72,t=.04){return ts(new $e({color:s,roughness:e,metalness:t,envMapIntensity:.45}),"plastic")}function Zd(s,e=.22,t=.9){return ts(new $e({color:s,roughness:e,metalness:t,envMapIntensity:1.1}),"metal")}function b0(s,e){const t=e?new as({color:s,metalness:.62,roughness:.29,clearcoat:1,clearcoatRoughness:.08,envMapIntensity:1.15}):new $e({color:s,metalness:.55,roughness:.34,envMapIntensity:1});return{paint:ts(t,"paint"),glass:ts(new as({color:659220,metalness:.55,roughness:.07,envMapIntensity:1.35,clearcoat:1,clearcoatRoughness:.05}),"metal"),trim:HS(1645342,.78),chrome:Zd(14080477,.16,.96),tyre:ts(new $e({color:1184534,roughness:.95,envMapIntensity:.12}),"plastic"),rim:Zd(12172996,.24,.92),caliper:ts(new $e({color:12730639,roughness:.45,metalness:.3,envMapIntensity:.6}),"plastic"),head:ts(new $e({color:14542058,emissive:16773844,emissiveIntensity:.12,roughness:.15,metalness:.4}),"head"),tail:ts(new $e({color:3410442,emissive:16720392,emissiveIntensity:.5,roughness:.22,metalness:.3}),"tail"),brake:ts(new $e({color:3999752,emissive:16718342,emissiveIntensity:.55,roughness:.25,metalness:.3}),"tail"),reverse:ts(new $e({color:3816768,emissive:15265007,emissiveIntensity:0,roughness:.3}),"reverse"),plate:ts(new $e({color:15329247,roughness:.6}),"plastic"),cabin:ts(new $e({color:1316378,roughness:.85,envMapIntensity:.25}),"plastic")}}const _s={gt:{body:[[-2.27,.14],[-2.38,.42],[-2.3,.74],[-1.15,.8],[1.1,.82],[2.05,.7],[2.3,.42],[2.24,.14]],cabin:[[-1.72,.78],[-1.02,1.16],[-.05,1.2],[.62,.92],[.98,.8]],cabinWidth:1.52,roof:{z:[-1.35,.05],y:1.19},exhaust:{z:-2.34,y:.32,n:2},spoiler:{z:-2.14,y:.9,w:1.5,wing:!0},head:{z:2.26,y:.62,half:.6},tail:{z:-2.34,y:.64,half:.58},wheelStyle:"sport",skirt:.2},muscle:{body:[[-2.42,.16],[-2.54,.46],[-2.46,.86],[-1.6,.92],[1.25,.94],[2.22,.84],[2.5,.48],[2.4,.16]],cabin:[[-1.86,.9],[-1.28,1.36],[.05,1.39],[.62,.96],[.85,.9]],cabinWidth:1.54,roof:{z:[-1.2,-.2],y:1.375},exhaust:{z:-2.5,y:.34,n:2},spoiler:{z:-2.32,y:.96,w:1.55,wing:!0},scoop:{z:1.35,y:.98},head:{z:2.44,y:.66,half:.62},tail:{z:-2.5,y:.72,half:.6},wheelStyle:"mesh",skirt:.22},sedan:{body:[[-2.34,.14],[-2.46,.44],[-2.38,.88],[-1.5,.94],[1,.94],[2.12,.86],[2.38,.46],[2.3,.14]],cabin:[[-1.62,.92],[-1.3,1.44],[-.42,1.47],[.55,1.02],[1.05,.92]],cabinWidth:1.46,roof:{z:[-1.25,-.35],y:1.455},exhaust:{z:-2.44,y:.3,n:1},head:{z:2.36,y:.68,half:.58},tail:{z:-2.42,y:.72,half:.56},wheelStyle:"mesh",skirt:.2},hatch:{body:[[-1.92,.14],[-2.02,.44],[-1.95,.82],[-1.1,.88],[.9,.88],[1.72,.8],[1.92,.46],[1.86,.14]],cabin:[[-1.8,.86],[-1.72,1.4],[-.35,1.44],[.55,.98],[.95,.88]],cabinWidth:1.4,roof:{z:[-1.6,-.1],y:1.425},exhaust:{z:-1.98,y:.28,n:1},spoiler:{z:-1.9,y:1.14,w:1.3,wing:!0},head:{z:1.92,y:.62,half:.54},tail:{z:-2,y:.76,half:.5},wheelStyle:"sport",skirt:.2},suv:{body:[[-2.36,.24],[-2.48,.6],[-2.4,1.1],[-1.4,1.16],[1.45,1.16],[2.28,1.06],[2.48,.62],[2.38,.24]],cabin:[[-1.72,1.14],[-1.5,1.72],[-.3,1.75],[.72,1.22],[1.1,1.14]],cabinWidth:1.62,roof:{z:[-1.45,-.42],y:1.735},rails:{z:[-1.35,-.35],y:1.79},exhaust:{z:-2.44,y:.4,n:1},head:{z:2.44,y:.9,half:.6},tail:{z:-2.44,y:.96,half:.6},wheelStyle:"mesh",skirt:.3},pickup:{body:[[-2.55,.32],[-2.62,.58],[-2.56,1.14],[-1.42,1.5],[.75,1.5],[2.28,1.24],[2.62,.62],[2.52,.32]],cabin:[[-1.4,1.48],[-1.28,1.92],[.3,1.94],[.62,1.55],[.75,1.48]],cabinWidth:1.72,roof:{z:[-1.2,-.05],y:1.93},bed:{z:[-2.58,-1.45],y:1.12,h:.42},exhaust:{z:-2.6,y:.42,n:1},head:{z:2.56,y:1,half:.62},tail:{z:-2.6,y:1,half:.58},wheelStyle:"steel",skirt:.34},van:{body:[[-2.66,.28],[-2.76,.66],[-2.72,2.18],[-1.6,2.26],[1.5,2.16],[2.42,1.86],[2.58,.66],[2.48,.28]],windshield:{z:2.42,y:1.5,h:.62,lean:.5},windows:{z:[1,2],y:[1.42,1.98]},exhaust:{z:-2.7,y:.38,n:1},head:{z:2.5,y:.82,half:.6},tail:{z:-2.72,y:1,half:.55},wheelStyle:"steel",skirt:.28},bus:{body:[[-5.7,.42],[-5.8,.9],[-5.78,3.1],[-3,3.26],[2.6,3.26],[5.55,3.06],[5.7,1.5],[5.62,.42]],windshield:{z:5.52,y:1.6,h:1.35,lean:.22},windows:{z:[-5.4,4.6],y:[1.72,2.78]},sign:{z:5.62,y:3.05,w:2,h:.42},door:{z:4,y:1.5},head:{z:5.66,y:.9,half:.9},tail:{z:-5.78,y:1.15,half:.85},wheelStyle:"steel",skirt:.5}};function Jd(s,e,t,n){const i=new t0;i.moveTo(s[0][0],s[0][1]);for(let a=1;a<s.length;a++)i.lineTo(s[a][0],s[a][1]);i.autoClose=!0;const r=new af(i,{depth:e,bevelEnabled:!0,bevelThickness:t,bevelSize:t,bevelSegments:2,steps:1,curveSegments:4});r.rotateY(-Math.PI/2),r.translate(e/2,0,0);const o=new Ut(r,n);return o.castShadow=!0,o}function Mn(s,e,t,n,i,r,o,a){const c=new Ut(new Ki(s,e,t),o);return c.position.set(n,i,r),c.castShadow=!0,a.add(c),c}function VS(s,e,t,n,i,r,o,a,c,l="z"){const u=new Ut(new Li(s,e,t,n),a);return l==="x"?u.rotation.z=Math.PI/2:l==="z"&&(u.rotation.x=Math.PI/2),u.position.set(i,r,o),u.castShadow=!0,c.add(u),u}function GS(s,e,t,n,i){const r=new Vn;r.userData.wheelSpin=!0;const o=i==="high"?36:18,a=Math.min(i==="high"?.095:.085,e*.34),c=new Ut(new co(s-a,a,i==="high"?14:8,o),n.tyre);c.rotation.y=Math.PI/2,c.castShadow=!0,r.add(c);const l=new Ut(new Li(s,s,e-a*.7,o,1,!0),n.tyre);if(l.rotation.z=Math.PI/2,l.castShadow=!0,r.add(l),t==="steel"){const g=new Ut(new Li(s-a-.015,s-a-.015,e*.72,o),n.rim);g.rotation.z=Math.PI/2,r.add(g);const A=new Ut(new Li(.07,.07,e*.8,12),new $e({color:2829874,roughness:.5,metalness:.6}));return A.rotation.z=Math.PI/2,r.add(A),r}const u=s-a-.012,f=new Ut(new Li(u-.012,u-.012,.028,o),new $e({color:9409947,roughness:.35,metalness:.95,envMapIntensity:1}));f.rotation.z=Math.PI/2,r.add(f);const h=t==="mesh"?10:5,d=new Ki(Math.max(.035,e*.5),u*1.86,t==="mesh"?.022:.032);for(let g=0;g<h;g++){const A=new Vn,I=new Ut(d,n.rim);I.position.x=e*.24,A.add(I),A.rotation.x=g*Math.PI*2/h,r.add(A)}const m=new Ut(new Li(u,u,Math.max(.03,e-.1),o,1,!0),n.rim);m.rotation.z=Math.PI/2,r.add(m);const M=new Ut(new Li(.055,.062,Math.max(.05,e-.06),12),n.chrome);M.rotation.z=Math.PI/2,r.add(M);const x=new Ut(new Ki(Math.max(.045,e*.4),.16,.06),n.caliper);return x.position.set(0,s*.34,-.05),r.add(x),r}function T0(s,e){const t=zs[s],n=_s[s],i=e.materials,r=new Vn;r.name="vehicle:"+s,t.width/2;const o=t.width*.96;if(r.add(Jd(n.body,o,.055,i.paint)),n.cabin){const _=n.cabinWidth??t.width*.8,w=Jd(n.cabin,_,.035,i.glass);if(r.add(w),n.roof){const[R,D]=n.roof.z;Mn(_*.94,.06,Math.abs(D-R),0,n.roof.y,(R+D)/2,i.paint,r)}}if(n.windows){const[_,w]=n.windows.z,[R,D]=n.windows.y,v=Math.abs(w-_),L=(_+w)/2,O=(R+D)/2;for(const z of[1,-1])Mn(.04,D-R,v,z*(o/2-.02),O,L,i.glass,r);Mn(o*.94,D-R,.04,0,O,w,i.glass,r)}if(n.windshield){const _=n.windshield,w=Mn(o*.9,_.h,.05,0,_.y,_.z,i.glass,r);w.rotation.x=-_.lean}if(n.bed){const[_,w]=n.bed.z,R=Math.abs(w-_),D=(_+w)/2;Mn(o*.96,.08,R,0,n.bed.y,D,i.trim,r);for(const v of[1,-1])Mn(.08,n.bed.h,R,v*(o/2-.04),n.bed.y+n.bed.h/2,D,i.paint,r);Mn(o*.96,n.bed.h,.08,0,n.bed.y+n.bed.h/2,_,i.paint,r)}const a=n.body.reduce((_,w)=>Math.max(_,w[0]),-99),c=n.body.reduce((_,w)=>Math.min(_,w[0]),99),l=n.skirt??.2;if(Mn(o*.9,.14,.24,0,l,a-.06,i.trim,r),Mn(o*.9,.14,.22,0,l,c+.06,i.trim,r),n.skirt!==void 0)for(const _ of[1,-1])Mn(.07,.1,t.length*.42,_*(o/2-.02),l+.02,0,i.trim,r);Mn(o*.62,.16,.06,0,n.head.y-.1,a-.02,i.trim,r),Mn(o*.7,.2,.05,0,n.tail.y-.06,c+.02,i.trim,r);const u=n.head.half;for(const _ of[1,-1]){const w=Mn(.34,.09,.1,_*u,n.head.y,n.head.z,i.head,r);w.rotation.x=.08,Mn(.3,.14,.09,_*(n.tail.half+.06),n.tail.y,n.tail.z,i.tail,r)}Mn(u*.9,.035,.06,0,n.tail.y,n.tail.z,i.brake,r);for(const _ of[1,-1])Mn(.14,.05,.05,_*u*.45,n.tail.y-.16,n.tail.z,i.reverse,r);Mn(.42,.12,.03,0,l-.04,a-.02,i.plate,r),Mn(.42,.12,.03,0,l+.02,c+.02,i.plate,r);const f=n.cabin?n.cabin[3][0]+.1:t.length*.12,h=n.cabin?n.cabin[3][1]+.02:n.windows?n.windows.y[1]-.06:1.2;for(const _ of[1,-1])Mn(.05,.045,.16,_*(o/2+.11),h,f,i.trim,r),Mn(.09,.055,.06,_*(o/2+.02),h-.01,f,i.trim,r);if(n.exhaust){const _=n.exhaust.n;for(let w=0;w<_;w++)VS(.055,.055,.22,10,_===1?.55:w===0?.42:-.42,n.exhaust.y,n.exhaust.z,i.chrome,r,"z")}if(n.spoiler){const _=n.spoiler;if(_.wing){Mn(_.w,.05,.3,0,_.y,_.z,i.paint,r);for(const w of[1,-1])Mn(.05,.24,.16,w*_.w*.4,_.y-.12,_.z+.02,i.trim,r)}else Mn(_.w,.06,.16,0,_.y,_.z,i.paint,r)}if(n.scoop&&Mn(o*.4,.08,.5,0,n.scoop.y,n.scoop.z,i.trim,r),n.rails)for(const _ of[1,-1])Mn(.05,.05,Math.abs(n.rails.z[1]-n.rails.z[0]),_*(o/2-.16),n.rails.y,(n.rails.z[0]+n.rails.z[1])/2,i.chrome,r);n.sign&&Mn(n.sign.w,n.sign.h,.08,0,n.sign.y,n.sign.z,i.head,r),n.door&&Mn(.04,1.95,.5,o/2+.01,n.door.y,n.door.z,i.trim,r);let d=null;if(e.interior){const _=n.cabin?n.cabin[3][1]+.02:1.05,w=n.cabin?n.cabin[3][0]+.25:.8;Mn(o*.92,.16,.5,0,_,w,i.cabin,r),Mn(o*.9,.1,.28,0,_+.12,w-.06,i.cabin,r);const R=new Vn;R.position.set(.38,_-.02,w-.24),R.rotation.x=-.35;const D=new Ut(new co(.17,.022,8,20),i.cabin);R.add(D);for(let L=0;L<3;L++){const O=new Ut(new Ki(.03,.3,.02),i.chrome);O.rotation.z=L*Math.PI/3,R.add(O)}const v=new Ut(new Li(.05,.05,.04,10),i.cabin);v.rotation.x=Math.PI/2,R.add(v),r.add(R),d=R;for(const[L,O]of[[.34,-.35],[-.34,-.35],[.34,.55],[-.34,.55]])Mn(.44,.55,.45,L,_-.42,O,i.cabin,r)}const m=[],M=t.wheelbase/2,x=-t.wheelbase/2,g=t.track/2*.985,A=t.track/2*1.01,I=[[g,M,!0],[-g,M,!0],[A,x,!1],[-A,x,!1]];for(const[_,w,R]of I){const D=new Vn;D.position.set(_,t.wheelR,w),D.userData.wheelRig=!0;const v=GS(t.wheelR,t.wheelW,n.wheelStyle,i,e.detail);D.add(v),r.add(D),m.push({pivot:D,spin:v,front:R,x:_,z:w,radius:t.wheelR,width:t.wheelW})}return{root:r,rigs:m,steering:d,materials:i}}function WS(s,e,t=!0){const n=zs[s],i=b0(e,!0),r=T0(s,{detail:"high",interior:t,materials:i}),o=_s[s].head.z,a=_s[s].tail.z;return{root:r.root,rigs:r.rigs,steering:r.steering,materials:i,spec:n,gy:qa+n.wheelR,headAnchors:[new V(_s[s].head.half,_s[s].head.y,o),new V(-_s[s].head.half,_s[s].head.y,o)],tailAnchors:[new V(_s[s].tail.half+.06,_s[s].tail.y,a),new V(-(_s[s].tail.half+.06),_s[s].tail.y,a)]}}const XS=["paint","plastic","metal","head","tail","reverse"],Dh={paint:new $e({color:16777215,metalness:.6,roughness:.3,envMapIntensity:1.05,vertexColors:!0}),plastic:new $e({color:16777215,metalness:.1,roughness:.72,envMapIntensity:.5,vertexColors:!0}),metal:new $e({color:16777215,metalness:.85,roughness:.16,envMapIntensity:1.2,vertexColors:!0}),head:new $e({color:14542058,emissive:16773844,emissiveIntensity:.12,roughness:.2}),tail:new $e({color:3410442,emissive:16720392,emissiveIntensity:.5,roughness:.25}),reverse:new $e({color:3816768,emissive:15265007,emissiveIntensity:.05,roughness:.3})},qS=new $e({color:16777215,metalness:.5,roughness:.45,envMapIntensity:.7,vertexColors:!0});function YS(s){return(Array.isArray(s)?s[0]:s)?.userData?.role??"plastic"}function KS(s,e,t){let n=s.geometry.clone();n.index&&(n=n.toNonIndexed());for(const o of Object.keys(n.attributes))o!=="position"&&o!=="normal"&&o!=="uv"&&n.deleteAttribute(o);n.attributes.normal||n.computeVertexNormals(),n.attributes.uv||n.setAttribute("uv",new Fn(new Float32Array(n.attributes.position.count*2),2));const i=n.attributes.position.count,r=new Float32Array(i*3);for(let o=0;o<i;o++)r[o*3]=e.r,r[o*3+1]=e.g,r[o*3+2]=e.b;return n.setAttribute("color",new Fn(r,3)),n.applyMatrix4(t.clone().multiply(s.matrixWorld)),n}function E0(s,e,t){if(!s.length)return null;t.updateMatrixWorld(!0);const n=t.matrixWorld.clone().invert(),i=[];for(const o of s){o.updateMatrixWorld(!0);const a=KS(o,e(o),n);a&&i.push(a)}if(!i.length)return null;if(i.length===1)return i[0];const r=eS(i,!1);return r||i[0]}function jS(s){s.updateMatrixWorld(!0);const e=[];s.traverse(i=>{i.isMesh&&e.push(i)});const t=E0(e,i=>{const r=i.material;return new it(r.color)},s);if(!t)return;for(const i of e)i.parent?.remove(i),i.geometry.dispose();const n=new Ut(t,qS);n.castShadow=!0,s.add(n)}function $S(s,e){const t=zs[s],n=b0(e,!1),i=T0(s,{detail:"low",interior:!1,materials:n}),r=new Vn;r.name="fleet:"+s,r.updateMatrixWorld(!0);const o={paint:[],plastic:[],metal:[],head:[],tail:[],reverse:[]},a=[];i.root.traverse(l=>{const u=l;if(!u.isMesh)return;let f=u;for(;f&&f!==i.root&&!f.userData.wheelRig;)f=f.parent;f===i.root&&o[YS(u.material)].push(u)});for(const l of i.rigs){jS(l.spin),l.pivot.updateMatrixWorld(!0);const u=new Vn;u.userData.wheelRig=!0,u.position.copy(l.pivot.position);const f=l.spin;f.parent?.remove(f),u.add(f),r.add(u),a.push({...l,pivot:u})}let c=null;for(const l of XS){const u=E0(o[l],h=>{const d=h.material;return l==="paint"?new it(16777215):new it(d.color)},r);if(!u)continue;const f=new Ut(u,Dh[l]);f.castShadow=l!=="head"&&l!=="tail"&&l!=="reverse",f.receiveShadow=!1,r.add(f),l==="paint"&&(c=f)}return{root:r,rigs:a,spec:t,paintMesh:c}}function Qd(s,e){const t=s.root.clone(!0);if(s.paintMesh){const n=Dh.paint.clone();n.color.setHex(e),t.traverse(i=>{const r=i;r.isMesh&&r.material===Dh.paint&&(r.material=n)})}return t}const ep=["fl","fr","rl","rr"];function ZS(s){return s.replace(/([a-z0-9])([A-Z])/g,"$1 $2").replace(/([A-Z]+)([A-Z][a-z])/g,"$1 $2").replace(/[^A-Za-z0-9]+/g," ").trim().toLowerCase().split(/\s+/).map(e=>e.replace(/\d+$/,"")).filter(Boolean)}const JS=["wheel","whl","tyre","tire","roue","wiel","pneu","reifen","koleso"],QS=["rim","rad"],tp=s=>QS.includes(s)||JS.some(e=>s.startsWith(e)),eb=/(steer|interior|dash|pedal|seat|mirror|wiper|door|handle|suspens|spring|shock|exhaust|grill|headlight|taillight|brakelight|caliper|hubcap|nut|bolt|logo|badge|trim|body|glass)/,tb=[[["front","fwd","fore","avant","vorne","delan","anter"],"f"],[["rear","back","arri","hint","post","tras"],"b"]],nb=[["f","f"],["vf","f"],["av","f"],["b","b"],["hr","b"],["ar","b"]],ib=[[["left","lhs","izq","links","gauche"],"l"],[["right","rhs","rechts","droite"],"r"]],sb=[["l","l"],["g","l"],["r","r"],["d","r"]],hl=s=>s==="f"?"f":s==="r"||s==="b"?"b":null,fl=s=>s==="l"?"l":s==="r"?"r":null;function Uh(s){const e=ZS(s);if(!e.length||!e.some(tp)||eb.test(e.join("")))return null;let t=null,n=null;const i=[];for(const r of e){if(tp(r))continue;const o=tb.find(([c])=>c.some(l=>r.startsWith(l)))?.[1]??nb.find(([c])=>c===r)?.[1];if(!t&&o){t=o;continue}const a=ib.find(([c])=>c.some(l=>r.startsWith(l)))?.[1]??sb.find(([c])=>c===r)?.[1];if(!n&&a){n=a;continue}i.push(r)}if(!t||!n)for(const r of i){if(r.length<2)continue;const[o,a]=[r[0],r[1]],c=[hl(o),fl(a)],l=[fl(o),hl(a)];if(c[0]&&c[1]?(t=t??c[0],n=n??c[1]):l[0]&&l[1]&&(n=n??l[0],t=t??l[1]),t&&n)break}if(!t||!n){for(const r of i)if(r.length===1&&(!t&&hl(r)?t=hl(r):!n&&fl(r)&&(n=fl(r)),t&&n))break}return!t&&!n?null:{side:n,axle:t}}const Fh=s=>s.length?s.reduce((e,t)=>e+t,0)/s.length:0,oi=(s,e)=>Fh(s.map(t=>t[e]));function rb(s){if(!s.length)return null;const e=oi(s,"x"),t=oi(s,"z");let n=s[0],i=1/0;for(const r of s){const o=(r.x-e)**2+(r.z-t)**2;o<i&&(i=o,n=r)}return n}const ob=(s,e,t)=>s*Math.cos(t)+e*Math.sin(t);function ab(s,e){const t=Math.hypot(e.max[0]-e.min[0],e.max[1]-e.min[1],e.max[2]-e.min[2]);if(s.length<4||t<=0)return null;const n=Math.max(...s.map(v=>v.radius));if(s.length>4&&n>0){const v=s.filter(L=>L.radius>=n*.45);v.length>=4&&(s=v)}const i=v=>Uh(v.name),r=s.filter(v=>{const L=i(v);return!!L&&!!L.side&&!!L.axle});if(r.length>=4){const v=r.filter(K=>i(K)?.axle==="f"),L=r.filter(K=>i(K)?.axle==="b"),O=r.filter(K=>i(K)?.side==="l"),z=r.filter(K=>i(K)?.side==="r");if(v.length&&L.length&&O.length&&z.length){const K=oi(v,"x")-oi(L,"x"),ee=oi(v,"z")-oi(L,"z"),X=oi(z,"x")-oi(O,"x"),J=oi(z,"z")-oi(O,"z"),ce=Math.hypot(K,ee),se=Math.hypot(X,J);if(ce>t*.18&&se>t*.04){const Ee=-Math.atan2(K,ee);return{slot:ep.map(ge=>{const Se=r.filter(tt=>{const Ze=i(tt);return Ze?.axle===(ge[0]==="f"?"f":"b")&&Ze?.side===(ge[1]==="l"?"l":"r")});return rb(Se)?.id??null}),yaw:Ee,wheelbase:ce,track:se,wheelR:Fh([...v,...L].map(ge=>ge.radius)),certain:!0}}}}const o=v=>Math.max(...s.map(L=>L[v]))-Math.min(...s.map(L=>L[v])),a=o("z")>=o("x")?"z":"x",c=a==="z"?"x":"z",l=[...s].sort((v,L)=>v[a]-L[a]),u=Math.max(2,Math.round(l.length/2)),f=l.slice(0,u),h=l.slice(l.length-u),d=Math.abs(oi(h,a)-oi(f,a)),m=oi(s,c),M=Math.abs(oi(s.filter(v=>v[c]<=m),c)-oi(s.filter(v=>v[c]>m),c));if(d<=t*.18||M<=t*.04)return null;const x=oi(f,a)-e.min[a==="x"?0:2],g=e.max[a==="x"?0:2]-oi(h,a),A=x<g,I=A?f:h,_=A?h:f,w=oi(I,a)-oi(_,a),R=-Math.atan2(a==="x"?w:0,a==="z"?w:0);return{slot:ep.map(v=>{const z=[...(v[0]==="f"?I:_).map(ee=>({s:ee,x:ob(ee.x,ee.z,R)}))].sort((ee,X)=>X.x-ee.x),K=v[1]==="l"?z.slice(0,Math.ceil(z.length/2)):z.slice(Math.ceil(z.length/2));return(K.length?K:z)[0]?.s.id??null}),yaw:R,wheelbase:d,track:M,wheelR:Fh(s.map(v=>v.radius)),certain:!1}}const $o=(s,e,t)=>s<e?e:s>t?t:s;function cb(s){return{length:$o(s.length,2.2,13),width:$o(s.width,1.1,3.4),height:$o(s.height,.7,4.6),wheelbase:$o(s.wheelbase,1.3,9),track:$o(s.track,.8,3.2),wheelR:$o(s.wheelR,.16,.78)}}const pn=[-550,-440,-330,-220,-110,110,220,330,440,550],np=7,Wn=610,Be=.15,dl=64,zi=2.5,ro=[];for(let s=0;s<pn.length-1;s++)ro.push([pn[s]+9.5,pn[s+1]-9.5]);const Jo=[],El=[],Un=(s=>()=>{s|=0,s=s+1831565813|0;let e=Math.imul(s^s>>>15,1|s);return e=e+Math.imul(e^e>>>7,61|e)^e,((e^e>>>14)>>>0)/4294967296})(20260901),at=(s,e)=>s+Un()*(e-s),Wa=s=>s[Un()*s.length|0];for(let s=0;s<ro.length;s++){El.push([]);for(let e=0;e<ro.length;e++){const t=ro[s],n=ro[e];if(t[0]<dl&&t[1]>-dl&&n[0]<dl&&n[1]>-dl){El[s].push(null);continue}const i=(t[0]+t[1])/2,r=(n[0]+n[1])/2,o=Math.max(Math.abs(i),Math.abs(r)),a=o<250?"downtown":o<430?"midtown":"outer",c={x0:t[0],x1:t[1],z0:n[0],z1:n[1],cx:i,cz:r,w:t[1]-t[0],d:n[1]-n[0],type:a,i:s,j:e,blds:[]};El[s].push(c),Jo.push(c)}}function ip(s){for(let e=0;e<ro.length;e++){const t=ro[e];if(s>=t[0]&&s<=t[1])return e}return-1}function mi(s,e){const t=ip(s);if(t<0)return null;const n=ip(e);return n<0?null:El[t][n]}function lb(s,e){if(Math.abs(s)<8&&Math.abs(e)>44&&Math.abs(e)<850)return!0;for(const t of pn)if(Math.abs(s-t)<np&&Math.abs(e)<Wn||Math.abs(e-t)<np&&Math.abs(s)<Wn)return!0;return!1}function Fu(s,e){const t=Wn+zi;return s<-t||s>t||e<-t||e>t?0:mi(s,e)||mi(s-zi,e)||mi(s+zi,e)||mi(s,e-zi)||mi(s,e+zi)?Be:0}function sp(s){let e=0,t=1/0;return pn.forEach((n,i)=>{const r=Math.abs(n-s);r<t&&(t=r,e=i)}),e}const ub=(s,e)=>(s*3+e*5)%7*.9;function rp(s,e,t){let n=(t+ub(s,e))%11;return n<0&&(n+=11),n<5?{ns:"g",ew:"r"}:n<6?{ns:"a",ew:"r"}:n<10?{ns:"r",ew:"g"}:{ns:"r",ew:"a"}}function Fs(s,e,t,n=1,i=!0){const r=document.createElement("canvas");r.width=s,r.height=e,t(r.getContext("2d"),s,e);const o=new Th(r);return o.wrapS=o.wrapT=Lr,o.anisotropy=n,i&&(o.colorSpace=Xn),o}const no=(s,e,t,n,i,r=!0)=>{for(let o=0;o<n;o++){const a=r?150+Math.random()*90:20+Math.random()*50;s.fillStyle=`rgba(${a},${a},${a},${i})`,s.fillRect(Math.random()*e,Math.random()*t,1+Math.random()*3,1+Math.random()*3)}},w0={tile:{base:"#b9b0a2",frame:"#8f877b",sill:"#d6cec1",glass:"#2b3540"},concrete:{base:"#9d9a94",frame:"#84817c",sill:"#b5b2ac",glass:"#28313a"},brick:{base:"#8b5340",frame:"#e6e0d6",sill:"#efe9de",glass:"#232a30",mortar:"#9d6a54"},glass:{base:"#4b5a66",frame:"#2c343c",sill:"#5d6d7a",glass:"#4d6a80",accent:"#2f3a44"},panel:{base:"#a8aeb2",frame:"#7d8489",sill:"#bcc2c6",glass:"#313b45"},corrugated:{base:"#8d9296",frame:"#6f7478",sill:"#9aa0a4",glass:"#2f3841"}};function hb(s,e,t){const n=w0[s],i=2,r=2,o=128,a=128,c=o*i,l=a*r,u=Fs(c,l,(h,d,m)=>{if(h.fillStyle=n.base,h.fillRect(0,0,d,m),s==="brick")for(let M=0;M<m;M+=8){h.fillStyle="rgba(0,0,0,.14)",h.fillRect(0,M,d,1);const x=M/8%2?8:0;for(let g=-8;g<d;g+=16)h.fillStyle="rgba(0,0,0,.10)",h.fillRect(g+x,M,1,8),h.fillStyle="rgba(255,255,255,.05)",h.fillRect(g+x+1,M,1,8)}else if(s==="panel"||s==="corrugated")for(let M=0;M<d;M+=8)h.fillStyle=s==="corrugated"?"rgba(0,0,0,.16)":"rgba(0,0,0,.09)",h.fillRect(M,0,1,m),h.fillStyle="rgba(255,255,255,.07)",h.fillRect(M+1,0,1,m);else if(s==="tile"||s==="concrete"){no(h,d,m,4200,.05);for(let M=0;M<m;M+=a)h.fillStyle="rgba(0,0,0,.10)",h.fillRect(0,M,d,1)}no(h,d,m,2600,.03,!1);for(let M=0;M<r;M++)for(let x=0;x<i;x++){const g=x*o,A=M*a;if(s==="glass"){h.fillStyle=n.glass,h.fillRect(g+4,A+10,o-8,a-46),h.fillStyle="rgba(255,255,255,.16)",h.fillRect(g+4,A+10,o-8,10),h.fillStyle=n.accent??n.frame,h.fillRect(g+4,A+a-40,o-8,34),h.fillStyle="rgba(0,0,0,.28)",h.fillRect(g+4,A+a-8,o-8,4),h.fillStyle=n.frame,h.fillRect(g+o/2-1,A+10,2,a-46);continue}const I=s==="brick"?52:66,_=s==="concrete"||s==="tile"?66:58,w=g+(o-I)/2,R=A+34;h.fillStyle=n.frame,h.fillRect(w-5,R-5,I+10,_+10);const D=h.createLinearGradient(w,R,w+I,R+_);D.addColorStop(0,n.glass),D.addColorStop(.55,"#54626d"),D.addColorStop(1,n.glass),h.fillStyle=D,h.fillRect(w,R,I,_),h.fillStyle="rgba(255,255,255,.20)",h.fillRect(w,R,I,7),h.fillStyle="rgba(0,0,0,.35)",h.fillRect(w,R+_-6,I,6),h.fillStyle=n.frame,h.fillRect(w+I/2-1,R,2,_),h.fillStyle=n.sill,h.fillRect(w-7,R+_+4,I+14,7),s==="brick"&&(h.fillStyle="rgba(0,0,0,.18)",h.fillRect(w-6,R-8,I+12,4))}},2),f=Fs(c,l,(h,d,m)=>{h.fillStyle="#000000",h.fillRect(0,0,d,m);for(let M=0;M<r;M++)for(let x=0;x<i;x++){if(Math.random()>(e?t:0))continue;const g=x*o,A=M*a,_=(e?Math.random()<.7:!1)?"rgba(255,214,150,":"rgba(206,228,255,",w=h.createRadialGradient(g+o/2,A+60,4,g+o/2,A+60,70);w.addColorStop(0,_+"0.95)"),w.addColorStop(1,"rgba(0,0,0,0)"),h.fillStyle=w,s==="glass"?h.fillRect(g+4,A+10,o-8,a-46):h.fillRect(g+26,A+30,o-52,a-66)}},1);return{map:u,emissive:f}}const op=new zt,ap=new ni,cp=new Xs,lp=new V,up=new V;function Et(s,e,t){return{geo:s,mat:e,list:[],shadow:t}}function fb(s){const e=new Map;return(t,n,i=!1)=>{const r=`${t.uuid}:${n.uuid}:${i?1:0}`;let o=e.get(r);return o||(o=Et(t,n,i),e.set(r,o),s.push(o)),o}}function De(s,e,t,n,i,r,o,a=0,c=0){lp.set(e,t,n),cp.set(c,a,0),ap.setFromEuler(cp),up.set(i,r,o),op.compose(lp,ap,up),s.list.push(op.clone())}function db(s,e){for(const t of e){if(!t.list.length)continue;const n=new so(t.geo,t.mat,t.list.length);t.list.forEach((i,r)=>n.setMatrixAt(r,i)),n.instanceMatrix.needsUpdate=!0,n.castShadow=t.shadow,n.receiveShadow=!0,n.frustumCulled=!1,s.add(n)}}function pb(s){const e=s.aniso,t=new Vn;t.name="apex-city";const n=[],i=[],r=[],o=[],a=[],c=new Ki(1,1,1);c.translate(0,.5,0);const l=new ai(1,1);l.rotateX(-Math.PI/2);const u=new Li(.5,.5,1,8);u.translate(0,.5,0);const f=new Bl(.5,14);f.rotateX(-Math.PI/2);const h=new co(.5,.09,6,14,Math.PI/2);h.rotateX(-Math.PI/2);const d=new hc(.5,1,8);d.translate(0,.5,0);const m=new kl(.5,1),M=new ao(.5,8,6),x=new ao(.5,10,5,0,Math.PI*2,0,Math.PI/2),g=new Li(.4,.5,1,8);g.translate(0,.5,0);const A=new co(.5,.045,4,10,Math.PI),I=new co(.5,.055,5,12),_=new $e({color:3356219,roughness:.98,polygonOffset:!0,polygonOffsetFactor:-3,polygonOffsetUnits:-3}),w=new ki({color:1776928,polygonOffset:!0,polygonOffsetFactor:-3,polygonOffsetUnits:-3}),R=new $e({color:14276300,roughness:.85,polygonOffset:!0,polygonOffsetFactor:-4,polygonOffsetUnits:-4}),D=new $e({color:13214010,roughness:.85,polygonOffset:!0,polygonOffsetFactor:-4,polygonOffsetUnits:-4}),v=new $e({color:3104670,roughness:.85,polygonOffset:!0,polygonOffsetFactor:-4,polygonOffsetUnits:-4}),L=new $e({color:3816769,roughness:.6,metalness:.5,polygonOffset:!0,polygonOffsetFactor:-4,polygonOffsetUnits:-4}),O=new $e({color:14201407,roughness:.9,polygonOffset:!0,polygonOffsetFactor:-4,polygonOffsetUnits:-4}),z=new $e({color:16777215,roughness:.95,envMapIntensity:.3});z.map=Fs(256,256,(p,b,T)=>{p.fillStyle="#9c988e",p.fillRect(0,0,b,T),no(p,b,T,5200,.06),no(p,b,T,2600,.04,!1);for(let P=0;P<4;P++)p.fillStyle="rgba(0,0,0,.22)",p.fillRect(P*64,0,2,T),p.fillRect(0,P*64,b,2);p.fillStyle="rgba(0,0,0,.10)",p.fillRect(0,0,b,3)},e),z.map.repeat.set(.25,.25);const K=new $e({color:11776168,roughness:.9,envMapIntensity:.35}),ee=new $e({color:9341828,roughness:.95,envMapIntensity:.3}),X=new $e({color:4869199,roughness:.97,envMapIntensity:.25});X.map=Fs(128,128,(p,b,T)=>{p.fillStyle="#4c4e51",p.fillRect(0,0,b,T),no(p,b,T,2600,.09),no(p,b,T,900,.06,!1)},e),X.map.repeat.set(.12,.12);const J=new $e({color:5921886,roughness:1,envMapIntensity:.2}),ce=new $e({color:9344153,roughness:.45,metalness:.7,envMapIntensity:.8}),se=new $e({color:3356218,roughness:.55,metalness:.6,envMapIntensity:.6}),Ee=new $e({color:10855067,roughness:.92,envMapIntensity:.35}),ue=new $e({color:1844268,roughness:.12,metalness:.55,envMapIntensity:1.2,emissive:16764554,emissiveIntensity:.03}),ge=new $e({color:1053206,roughness:.5,emissive:16777215,emissiveIntensity:.02}),Se=[],tt=new $e({color:7296567,roughness:.9,envMapIntensity:.25}),Ze=new $e({color:4020780,roughness:1,envMapIntensity:.25}),At=new $e({color:6056762,roughness:1,envMapIntensity:.25}),bt=new $e({color:1316893,roughness:.06,metalness:.75,envMapIntensity:1.6,transparent:!0,opacity:.85,polygonOffset:!0,polygonOffsetFactor:-5,polygonOffsetUnits:-5}),Wt=new $e({color:6975875,roughness:1,envMapIntensity:.4,fog:!0}),he=new $e({color:2964019,roughness:.52,metalness:.45,envMapIntensity:.7}),Me=new $e({color:10199719,roughness:.32,metalness:.82,envMapIntensity:1.05}),We=new $e({color:2829874,roughness:.68,metalness:.08,envMapIntensity:.45}),lt=new $e({color:10234914,roughness:.48,metalness:.28,envMapIntensity:.7}),je=new $e({color:11242309,roughness:.34,metalness:.88,envMapIntensity:1.1}),Tt=new $e({color:1382170,roughness:.92,envMapIntensity:.2}),tn=new $e({color:11124429,roughness:.07,metalness:.3,transparent:!0,opacity:.34,envMapIntensity:1.5,side:pi}),be=new $e({color:13621448,roughness:.9,transparent:!0,opacity:.24,side:pi,depthWrite:!1}),Ae=new $e({color:11841702,roughness:.94,envMapIntensity:.4}),Re=new $e({color:3813156,roughness:1}),Pe=new $e({color:11023178,roughness:.85,envMapIntensity:.3}),Ve=new $e({color:2244938,roughness:.04,metalness:.65,envMapIntensity:1.7,transparent:!0,opacity:.86}),vt=new $e({color:1985331,roughness:.58,metalness:.2,envMapIntensity:.5}),ut=new $e({map:Fs(128,128,(p,b,T)=>{for(let k=0;k<8;k++)p.fillStyle=k%2?"#e9e3d4":"#b4452f",p.fillRect(0,k*T/8,b,T/8+1);no(p,b,T,1800,.05)},e),roughness:.88,side:pi,envMapIntensity:.25}),Mt={},re={tile:.5,concrete:.42,brick:.55,glass:.62,panel:.38,corrugated:.18},F={tile:6.4,concrete:6.6,brick:6.2,glass:6.8,panel:6,corrugated:4},xt={tile:7,concrete:7.2,brick:6.8,glass:7.4,panel:7,corrugated:6};for(const p of Object.keys(w0))for(let b=0;b<2;b++){const T=hb(p,b===0,re[p]),P=new $e({map:T.map,emissiveMap:T.emissive,emissive:new it(16767400),emissiveIntensity:.02,roughness:p==="glass"?.22:.82,metalness:p==="glass"?.62:.03,envMapIntensity:p==="glass"?1.1:.4}),k=F[p],j=xt[p];P.onBeforeCompile=ae=>{ae.uniforms.uBayW={value:k},ae.uniforms.uFloorH={value:j},ae.vertexShader=`uniform float uBayW;
uniform float uFloorH;
`+ae.vertexShader.replace("#include <uv_vertex>",`#include <uv_vertex>
          #ifdef USE_INSTANCING
            vec3 iScale = vec3(
              length(instanceMatrix[0]), length(instanceMatrix[1]), length(instanceMatrix[2]));
            vec3 an = abs(normal);
            float uw = an.z * iScale.x + an.x * iScale.z;
            vec2 cityTile = vec2(
              (an.z * position.x + an.x * position.z) * uw, position.y * iScale.y
            ) / vec2(uBayW, uFloorH);
            #ifdef USE_MAP
              vMapUv = cityTile;
            #endif
            #ifdef USE_EMISSIVEMAP
              vEmissiveMapUv = cityTile;
            #endif
          #endif`)},Mt[`${p}${b}`]={mat:P,style:p}}const Ct=Object.values(Mt).map(p=>p.mat),U={},y=Et(c,X,!0),$=Et(l,J,!1),ie=Et(c,Ee,!0),de=Et(c,Ee,!0),Le=Et(c,ue,!1),ke=Et(c,new $e({color:16777215,roughness:.8}),!1),pe=Et(c,ge,!1),xe=Et(c,Ee,!1),Ce=Et(c,ce,!1),rt=Et(u,tt,!1),Xe=Et(c,se,!1),ze=Et(u,se,!1),ot=[],_t=Et(c,se,!1),It=Et(u,tt,!0),Y=Et(m,Ze,!0),Ue=Et(l,new $e({color:3879462,roughness:1}),!1),ye=Et(c,tt,!1),qe=Et(c,se,!1),Ke=Et(u,se,!1),we=Et(u,new $e({color:11023658,roughness:.6}),!1),dt=Et(u,se,!1),ct=Et(c,Ee,!1),hn=Et(m,Ze,!1),Yt=Et(u,se,!1),Ai=Et(c,ce,!1),bi=Et(u,ce,!1),ht=[],ii=Et(c,se,!0),lr=Et(c,ue,!1),cs=Et(u,se,!1),bs=Et(c,se,!1),$i=Et(c,se,!0),En=Et(l,R,!1),si=Et(l,D,!1),Zi=Et(l,v,!1),Ts=Et(l,O,!1),ur=Et(l,_,!1),Es=Et(l,w,!1),hr=Et(f,L,!1),$n=Et(f,bt,!1),Vi=Et(c,K,!1),fr=Et(h,ee,!1),Nr=Et(c,z,!1),ls=Et(l,R,!1),Dr=new ki({color:16777215,toneMapped:!1}),Ur=new ki({color:16777215,toneMapped:!1}),Fr=new ki({color:16777215,toneMapped:!1}),C=new Li(.14,.14,.06,10);C.rotateX(Math.PI/2);const q=[],oe=[],te=[],Q={r:new it(1,.18,.12),a:new it(1,.62,.1),g:new it(.22,1,.35)},Ne={r:new it(.07,.015,.012),a:new it(.07,.045,.01),g:new it(.015,.07,.03)},Je=[],Fe=new $e({color:14275778,emissive:16773320,emissiveIntensity:.05,roughness:.6}),Qe=Et(c,Fe,!1),nt=Et(m,new ki({color:16767392,transparent:!0,opacity:0,depthWrite:!1,toneMapped:!1}),!1);function St(p,b,T,P){return Fs(256,128,(k,j,ae)=>{k.fillStyle=b,k.fillRect(0,0,j,ae),P&&(k.fillStyle=P,k.fillRect(0,ae-14,j,14)),k.strokeStyle=T,k.lineWidth=4,k.strokeRect(6,6,j-12,ae-12),k.fillStyle=T,k.textAlign="center",k.textBaseline="middle";const Te=p.length>1?40:52;k.font=`700 ${Te}px Rajdhani, system-ui, sans-serif`,p.forEach((mt,Zt)=>{k.fillText(mt,j/2,ae/2+(Zt-(p.length-1)/2)*(Te+2))})},e)}const Rt=[{tex:St(["APEX TYRES"],"#14161a","#ff6a2a","#ff6a2a"),w:12,h:5},{tex:St(["PIT LANE","CAFFE"],"#101418","#ece9e2","#7dc95e"),w:10,h:5.5},{tex:St(["240 HZ","DYNAMICS"],"#0f1216","#8fb8cc","#8fb8cc"),w:11,h:5},{tex:St(["GRID","MOTORS"],"#161413","#e8e2d6","#c9a13a"),w:12,h:4.5}];for(const p of Rt){const b=new $e({map:p.tex,roughness:.6,emissiveMap:p.tex,emissive:16777215,emissiveIntensity:.02});Se.push(b),ot.push(Et(new ai(p.w,p.h),b,!1))}const st=new $e({map:Fs(128,128,(p,b,T)=>{p.fillStyle="#f2efe6",p.fillRect(0,0,b,T),p.fillStyle="#c02a1e",p.beginPath(),p.arc(b/2,T/2,b/2-4,0,Math.PI*2),p.fill(),p.fillStyle="#f2efe6",p.beginPath(),p.arc(b/2,T/2,b/2-12,0,Math.PI*2),p.fill(),p.fillStyle="#14161a",p.font="700 56px Rajdhani, system-ui, sans-serif",p.textAlign="center",p.textBaseline="middle",p.fillText("50",b/2,T/2+2)},e),roughness:.7});ht.push(Et(new ai(.7,.7),st,!1));const an=new $e({map:Fs(256,64,(p,b,T)=>{p.fillStyle="#14161a",p.fillRect(0,0,b,T),p.fillStyle="#ece9e2",p.fillRect(8,8,b-16,T-16),p.fillStyle="#14161a",p.font="700 34px Rajdhani, system-ui, sans-serif",p.textAlign="center",p.textBaseline="middle",p.fillText("ONE WAY →",b/2,T/2+2)},e),roughness:.7,side:pi});ht.push(Et(new ai(1.6,.4),an,!1));const yn=["CAFE","DELI","GARAGE","MOTORS","BOOKS","PIZZA","TYRES","BAR","PHARMACY","STUDIO","MARKET","DINER"];for(const p of yn){const b=St([p],"#0d0f12",p.length>6?"#ffd08a":"#bfe6ff"),T=new $e({map:b,emissiveMap:b,emissive:16777215,emissiveIntensity:.02,roughness:.5,side:pi});hp.push({text:p,mat:T})}const Ht=.9;function nn(p,b,T,P,k,j,ae,Te){const mt=`${j}${Un()<.5?0:1}`;let Zt=U[mt];if(!Zt){const ei=Mt[mt];Zt=Et(c,ei.mat,!0),U[mt]=Zt,n.push(Zt)}De(Zt,p,Be,b,T,k,P),ae.blds.push({x:p,z:b,hx:T/2+.35,hz:P/2+.35,top:Be+k}),De(y,p,Be+k,b,T+.25,.28,P+.25),De(ie,p,Be+k+.1,b,T+.5,.5,P+.5),De($,p,Be+k+.3,b,T*.92,1,P*.92);const wn=Math.max(1,Math.round(T*P/240));for(let ei=0;ei<wn;ei++){const Bn=at(-T/2+2,T/2-2),_n=at(-P/2+2,P/2-2);if(Un()<.55)De(Ce,p+Bn,Be+k+.3,b+_n,at(1.6,3),at(1,1.8),at(1.4,2.4));else if(k>15&&Un()<.5){const kn=at(2.4,4);De(rt,p+Bn,Be+k+1.4,b+_n,2.6,kn,2.6);for(const Lt of[-.8,.8])for(const Pn of[-.8,.8])De(Xe,p+Bn+Lt,Be+k+.3,b+_n+Pn,.16,1.2,.16)}else De(ze,p+Bn,Be+k+.3,b+_n,.16,at(3,8),.16)}if(Te){De(de,p,Be,b,T+.7,4.3,P+.7);for(const[_n,kn,Lt]of[[0,P/2+.36,0],[0,-P/2-.36,0]])De(Le,p+_n,Be+.5,b+kn,T*.94,2.7,.1,Lt),De(pe,p+_n,Be+3.6,b+kn+(kn>0?.06:-.06),T*.5,.62,.12,Lt);for(const[_n,kn,Lt]of[[T/2+.36,0,Math.PI/2],[-T/2-.36,0,Math.PI/2]])De(Le,p+_n,Be+.5,b+kn,P*.94,2.7,.1,Lt),De(pe,p+_n+(_n>0?.06:-.06),Be+3.6,b+kn,P*.5,.62,.12,Lt);const Bn=Math.max(1,Math.floor(T/7));for(let _n=0;_n<Bn;_n++){if(Un()<.35)continue;const kn=-T/2+T/Bn*(_n+.5),Lt=Math.min(5.4,T/Bn*.86),Pn=P/2+1;for(const Nn of[1,-1])De(ke,p+kn,Be+3.2,b+Nn*Pn,Lt,.14,2,0,-.22*Nn)}}if(j==="brick"&&k>9){const ei=Math.floor(k/3.6)-1;for(let Bn=1;Bn<=ei;Bn++){const _n=Be+Bn*3.6;if(_n>Be+k-1.5)break;for(const kn of[1,-1])De(xe,p+kn*(T/2+.5),_n,b+at(-P/2+1,P/2-1),1.1,.2,2.2)}}}const Ot=[],_e=[];for(const p of Jo){const b=Math.max(Math.abs(p.cx),Math.abs(p.cz));b>300&&Ot.length<4&&Un()<.14?(p.type="park",p.park=!0,Ot.push(p)):b>300&&_e.length<4&&Un()<.12&&(p.type="lot",_e.push(p));const T=zi;De(Nr,p.cx,0,p.cz,p.w+2*T,Be,p.d+2*T);const P=.35,k=T+P/2;De(Vi,p.cx,0,p.z0-k,p.w+2*T+P,Be+.03,P),De(Vi,p.cx,0,p.z1+k,p.w+2*T+P,Be+.03,P),De(Vi,p.x0-k,0,p.cz,P,Be+.03,p.d+2*T+P),De(Vi,p.x1+k,0,p.cz,P,Be+.03,p.d+2*T+P);for(const[Lt,Pn]of[[-1,-1],[1,-1],[-1,1],[1,1]])De(fr,p.cx+Lt*(p.w/2+T),0,p.cz+Pn*(p.d/2+T),P*2,Be+.03,P*2);if(p.type==="park"){De($,p.cx,Be+.02,p.cz,p.w-6,1,p.d-6);const Lt=Et(l,At,!1);De(Lt,p.cx,Be+.03,p.cz,p.w-8,1,p.d-8),n.push(Lt);for(let Nn=0;Nn<16;Nn++)r.push([p.cx+at(-p.w/2+6,p.w/2-6),p.cz+at(-p.d/2+6,p.d/2-6)]);const Pn=Et(l,z,!1);De(Pn,p.cx,Be+.04,p.cz,p.w-16,1,4),De(Pn,p.cx,Be+.04,p.cz,4,1,p.d-16),n.push(Pn);for(let Nn=0;Nn<5;Nn++){const vn=p.cx+at(-p.w/2+8,p.w/2-8),An=p.cz+at(-p.d/2+8,p.d/2-8);De(ye,vn,Be+.45,An,1.8,.12,.5,at(0,3.14)),De(qe,vn-.7,Be+.2,An,.12,.4,.45),De(qe,vn+.7,Be+.2,An,.12,.4,.45),De(Ke,vn+1.6,Be+.42,An,.6,.8,.6)}continue}if(p.type==="lot"){const Lt=Et(l,_,!1);De(Lt,p.cx,Be+.02,p.cz,p.w-8,1,p.d-8),n.push(Lt);const Pn=Et(l,R,!1);let Nn=0;for(const vn of[-13,13]){for(let An=-5;An<=5;An++)De(Pn,p.cx+An*3,Be+.05,p.cz+vn,.1,1,5),An<5&&De(Pn,p.cx+An*3+1.5,Be+.05,p.cz+vn+1.8,3,1,.1),Nn<22&&Math.abs(An)<5&&Un()<.72&&(o.push([p.cx+An*3,p.cz+vn+(vn<0?-2.6:2.6),0]),Nn++);De(Pn,p.cx,Be+.05,p.cz+vn+3.6,33,1,.12)}n.push(Pn),nn(p.cx,p.cz,Math.min(26,p.w-30),Math.min(18,p.d-40),at(7,11),"corrugated",p,!1);continue}const j=p.type==="outer"?at(10,14):at(14,20),ae=j,Te=j,mt=[],Zt=()=>p.type==="downtown"?Un()<.55?"glass":"panel":p.type==="midtown"?Wa(["tile","concrete","panel","glass"]):Wa(["brick","brick","concrete","corrugated","panel"]),wn=()=>p.type==="downtown"?Un()<.25?at(72,118):at(34,62):p.type==="midtown"?at(15,34):at(7,16);for(const Lt of[1,-1]){const Nn=(Lt>0?p.z1-Ht:p.z0+Ht)-Lt*ae/2;let vn=p.x0+Ht;for(;vn<p.x1-Ht-6;){const An=Math.min(at(9,20),p.x1-Ht-vn);if(An<6)break;const ps=wn();mt.push({cx:vn+An/2,cz:Nn,w:An-.6,d:ae-.9,h:ps,style:Zt(),podium:!0}),vn+=An+at(.4,2.4)}}for(const Lt of[1,-1]){const Nn=(Lt>0?p.x1-Ht:p.x0+Ht)-Lt*Te/2;let vn=p.z0+Ht+1;for(;vn<p.z1-Ht-ae-4;){const An=Math.min(at(9,18),p.z1-Ht-vn);if(An<6)break;const ps=wn();mt.push({cx:Nn,cz:vn+An/2,w:Te-.9,d:An-.6,h:ps,style:Zt(),podium:!0}),vn+=An+at(.4,2.4)}}const ei=p.x0+Ht+Te,Bn=p.x1-Ht-Te,_n=p.z0+Ht+ae,kn=p.z1-Ht-ae;if(Bn-ei>16&&kn-_n>16){const Lt=Bn-ei,Pn=kn-_n;if(p.type==="downtown"){const Nn=Lt>40?2:1,vn=Pn>40?2:1;for(let An=0;An<Nn;An++)for(let ps=0;ps<vn;ps++){const xi=Lt/Nn-at(2,6),Wr=Pn/vn-at(2,6),Ra=ei+Lt/Nn*(An+.5),Ic=_n+Pn/vn*(ps+.5);let Io=at(60,128);nn(Ra,Ic,xi,Wr,Io,Un()<.6?"glass":"panel",p,!1),Io>80&&(Io=at(14,30),nn(Ra,Ic,xi*.62,Wr*.62,Io,"glass",p,!1))}}else{const Nn=(ei+Bn)/2,vn=(_n+kn)/2;nn(Nn,vn,Lt-at(2,6),Pn-at(2,6),wn()*1.15,Zt(),p,p.type==="midtown")}}for(const Lt of mt)nn(Lt.cx,Lt.cz,Lt.w,Lt.d,Lt.h,Lt.style,p,Lt.podium)}const Kt=p=>pn.some(b=>Math.abs(p-b)<18);for(const p of pn)for(let b=-Wn+40;b<=Wn-40;b+=15){if(Kt(b)||Un()<.45)continue;const T=Un()<.5?1:-1;o.push([p+T*5.2,b,T>0?Math.PI:0]),o.push([b,p+T*5.2,T>0?-Math.PI/2:Math.PI/2])}const pt=pn.length,Zn=p=>pn.some(b=>Math.abs(p-b)<11);for(let p=0;p<pt;p++){const b=pn[p];for(let T=0;T<pt+1;T++){const P=T===0?-Wn:pn[T-1]+12,k=T===pt?Wn:pn[T]-12;if(k-P<6)continue;const j=k-P,ae=(P+k)/2;for(const Te of[1,-1])De(si,b+Te*.22,.05,ae,.14,1,j),De(En,b+Te*4.7,.05,ae,.12,1,j),De(En,b+Te*6.5,.05,ae,.12,1,j);for(const Te of[1,-1])De(En,ae,.05,b+Te*.22,j,1,.14),De(En,ae,.05,b+Te*4.7,j,1,.12),De(En,ae,.05,b+Te*6.5,j,1,.12)}for(let T=-Wn;T<Wn;T+=8)Zn(T)||(De(si,b,.05,T+2,.12,1,3.2),De(si,b,.05,T+2,.12,1,3.2),De(En,T+2,.05,b,3.2,1,.12))}for(let p=0;p<pt;p++)for(let b=0;b<pt;b++){const T=pn[p],P=pn[b];Je.push({ix:p,iz:b});for(const k of[1,-1]){for(let j=-3;j<=3;j++)De(En,T+j*1.7,.052,P+k*9.2,.6,1,2.8),De(En,T+k*9.2,.052,P+j*1.7,2.8,1,.6);De(En,T-3.5,.053,P-k*11.6,6.4,1,.55),De(En,T+3.5,.053,P+k*11.6,6.4,1,.55),De(En,T+k*11.6,.053,P+3.5,.55,1,6.4),De(En,T-k*11.6,.053,P-3.5,.55,1,6.4);for(const j of[1,-1])De(Ts,T+k*10.2,Be+.06,P+j*10.2,1.6,1,1.6),De(Ts,T+k*10.2,Be+.06,P+j*11.4,1.6,1,.5),De(Ts,T+k*11.4,Be+.06,P+j*10.2,.5,1,1.6);De(si,T+k*2.4,.051,P,.3,1,17,0),De(si,T,.051,P+k*2.4,17,1,.3,0)}}for(const p of[110,-110])De(Zi,p-5.6,.05,0,1.6,1,2*Wn-40,0),De(Zi,p+5.6,.05,0,1.6,1,2*Wn-40,0),De(Zi,0,.05,p-5.6,2*Wn-40,1,1.6,0),De(Zi,0,.05,p+5.6,2*Wn-40,1,1.6,0);for(const[p,b,T]of[[0,46,Math.PI],[0,-46,0],[46,0,Math.PI/2],[-46,0,-Math.PI/2]])for(const P of[[-3.5,0],[3.5,0]])De(ls,p+P[0],.06,b+P[1],.5,1,2.4,T),De(ls,p+P[0],.06,b+P[1]+1.6,3.2,1,.5,T);for(let p=0;p<260;p++){const b=Un()<.5,T=Wa(pn),P=at(-Wn+20,Wn-20),k=b?T+at(-6,6):P,j=b?P:T+at(-6,6);Un()<.55?De(ur,k,.035,j,at(1.5,5),1,at(1.5,6),at(0,3.14)):De(Es,k,.036,j,at(.2,.35),1,at(4,14),at(0,3.14))}for(let p=0;p<170;p++){const b=Un()<.5,T=Wa(pn),P=at(-Wn+10,Wn-10),k=b?T+at(-5,5):P,j=b?P:T+at(-5,5);De(hr,k,.055,j,1.1,1,1.1)}for(let p=0;p<150;p++){const b=Un()<.5,T=Wa(pn),P=at(-Wn+30,Wn-30),k=b?T+at(-6,0):P,j=b?P:T+at(-6,0);De($n,k,.042,j,at(1.6,5),1,at(1.6,4.5),at(0,3.14))}const Ln=0;for(let p=0;p<Je.length;p++){const{ix:b,iz:T}=Je[p],P=pn[b],k=pn[T],j=[{px:P-10.6,pz:k-10.6,armAxis:"x",armSign:1,armLen:7,faceYaw:Math.PI},{px:P+10.6,pz:k+10.6,armAxis:"x",armSign:-1,armLen:7,faceYaw:0},{px:P-10.6,pz:k+10.6,armAxis:"z",armSign:-1,armLen:7,faceYaw:Math.PI/2},{px:P+10.6,pz:k-10.6,armAxis:"z",armSign:1,armLen:7,faceYaw:-Math.PI/2}];for(let ae=0;ae<4;ae++){const Te=j[ae],mt=6.2;De(cs,Te.px,Ln,Te.pz,.24,mt,.24),Te.armAxis==="x"?De(bs,Te.px+Te.armSign*Te.armLen/2,Ln+mt-.15,Te.pz,Te.armLen,.16,.16):De(bs,Te.px,Ln+mt-.15,Te.pz+Te.armSign*Te.armLen/2,.16,.16,Te.armLen);const Zt=Te.armAxis==="x"?Te.px+Te.armSign*(Te.armLen-.6):Te.px,wn=Te.armAxis==="z"?Te.pz+Te.armSign*(Te.armLen-.6):Te.pz;De($i,Zt,Ln+mt-1.5,wn,.42,1.35,.36,Te.faceYaw);const ei=[Ln+mt-.95,Ln+mt-1.5,Ln+mt-2.05],Bn=Zt+Math.sin(Te.faceYaw)*.22,_n=wn+Math.cos(Te.faceYaw)*.22;for(let kn=0;kn<3;kn++){const Lt=new zt,Pn=new V(Bn,ei[kn],_n),Nn=new ni().setFromEuler(new Xs(0,Te.faceYaw,0));Lt.compose(Pn,Nn,new V(1,1,1)),(kn===0?q:kn===1?oe:te).push(Lt)}(p+ae)%5===0?(De(bi,Te.px,Ln,Te.pz+.5,.1,3.2,.1),De(ht[0],Te.px,Ln+3.4,Te.pz+.5,1,1,1,Te.faceYaw+Math.PI)):(p+ae)%7===0&&(De(bi,Te.px,Ln,Te.pz+.5,.1,3,.1),De(ht[1],Te.px,Ln+3.2,Te.pz+.5,1,1,1,Te.faceYaw+Math.PI))}}for(let p=0;p<pt;p++){const b=pn[p];for(let T=-520;T<=520;T+=80){if(pn.some(j=>Math.abs(T-j)<16))continue;for(const j of[1,-1]){const ae=b+j*8.2;De(cs,ae,Be,T,.22,7,.22),De(bs,ae-j*.9,Be+6.9,T,1.8,.12,.12),De(Qe,ae-j*1.7,Be+6.82,T,.7,.14,.36),De(nt,ae-j*1.7,Be+6.7,T,2.6,1.1,2.6),i.push(new V(ae-j*1.7,Be+6.8,T))}const P=b,k=T;for(const j of[1,-1])De(cs,k,Be,P+j*8.2,.22,7,.22),De(bs,k,Be+6.9,P+j*8.2-j*.9,.12,.12,1.8),De(Qe,k,Be+6.82,P+j*8.2-j*1.7,.36,.14,.7),De(nt,k,Be+6.7,P+j*8.2-j*1.7,2.6,1.1,2.6),i.push(new V(k,Be+6.8,P+j*8.2-j*1.7))}}const Nt=fb(n),Jn=Nt(c,tt),Bt=Nt(c,he),fn=Nt(u,he),Ri=Nt(g,he),Vt=Nt(M,he),Ie=Nt(A,he),gn=Nt(c,Me),Gi=Nt(u,Me),us=Nt(c,tn),_c=Nt(c,be),vc=Nt(c,We),mo=Nt(u,We),ws=Nt(g,We),hs=Nt(x,We),Ui=Nt(m,We),go=Nt(I,Tt),As=Nt(c,lt),xo=Nt(u,lt),Ks=Nt(x,lt),Ti=Nt(c,je),Gn=Nt(c,se),$t=Nt(u,se),Or=Nt(c,ut),Ci=Nt(d,ut),fs=Nt(c,Ae),dr=Nt(u,Ae),_o=Nt(g,Ae),ds=Nt(M,Ae),vo=Nt(f,Ve),Mc=Nt(c,Re),Mo=Nt(m,Pe),yc=Nt(m,Ze),fa=Nt(u,R),Ji=Nt(c,Ee),js=Nt(c,vt),da=Nt(c,Fe,!0),pa=Nt(new ai(.62,1.9),new $e({map:Fs(96,288,(p,b,T)=>{p.fillStyle="#14161a",p.fillRect(0,0,b,T),p.fillStyle="#ff6a2a",p.fillRect(0,0,b,14),p.fillRect(0,T-14,b,14),p.save(),p.translate(b/2,T/2-30),p.rotate(-Math.PI/2),p.fillStyle="#ece9e2",p.font="700 34px Rajdhani, system-ui, sans-serif",p.textAlign="center",p.textBaseline="middle",p.fillText("APEX CITY",0,0),p.fillStyle="#ff6a2a",p.font="500 15px 'IBM Plex Mono', monospace",p.fillText("OPEN CITY DRIVING",0,26),p.restore()},e),roughness:.72,side:pi,envMapIntensity:.3}),!1),Wl=Nt(new ai(.55,.55),new $e({map:Fs(128,128,(p,b,T)=>{p.fillStyle="#f2efe6",p.fillRect(0,0,b,T),p.fillStyle="#1d3f78",p.fillRect(6,6,b-12,T-12),p.fillStyle="#f2efe6",p.fillRect(26,34,76,50),p.fillStyle="#1d3f78",p.fillRect(32,42,28,18),p.fillRect(68,42,28,18),p.fillStyle="#f2efe6",p.beginPath(),p.arc(44,90,9,0,Math.PI*2),p.arc(84,90,9,0,Math.PI*2),p.fill()},e),roughness:.55,side:pi}),!1);function ne(p,b,T,P,k,j,ae,Te,mt,Zt,wn=Be){const ei=Math.cos(P),Bn=Math.sin(P);De(p,b+k*ei+j*Bn,wn+ae,T-k*Bn+j*ei,Te,mt,Zt,P)}function pr(p,b,T,P,k,j,ae,Te=1,mt=Be){const Zt=Math.cos(P),wn=Math.sin(P);De(p,b+k*Zt+j*wn,mt+ae,T-k*wn+j*Zt,Te,Te,Te,P)}const Fi=(p,b)=>mi(p,b)??mi(p-zi,b)??mi(p+zi,b)??mi(p,b-zi)??mi(p,b+zi);function Wi(p,b,T,P,k){const j=Fi(p,b);j&&j.blds.push({x:p,z:b,hx:T,hz:P,top:k})}function gi(p,b,T,P,k,j){const ae=Math.abs(Math.cos(k)),Te=Math.abs(Math.sin(k)),mt=Fi(p,b);mt&&mt.blds.push({x:p,z:b,hx:T*ae+P*Te,hz:T*Te+P*ae,top:j})}function Br(p,b,T,P=1.9,k=Be){for(let j=0;j<4;j++)ne(Jn,p,b,T,0,-.185+j*.117,.42,P,.05,.105,k);for(let j=0;j<3;j++)ne(Jn,p,b,T,0,-.45+j*.025,.6+j*.19,P,.085,.045,k);for(const j of[-P/2+.07,P/2-.07])ne(Bt,p,b,T,j,.14,0,.055,.42,.05,k),ne(Bt,p,b,T,j,-.45,0,.055,1.06,.05,k),ne(Bt,p,b,T,j,-.17,.37,.055,.05,.58,k),ne(Bt,p,b,T,j,-.3,.61,.05,.05,.32,k);gi(p,b,P/2+.06,.5,T,k+1.1)}function Qi(p,b,T=Be){ne(fn,p,b,0,0,0,0,.5,.06,.5,T),ne(ws,p,b,0,0,0,.06,.52,.76,.52,T),ne(fn,p,b,0,0,0,.82,.56,.08,.56,T),ne(hs,p,b,0,0,0,.9,.54,.22,.54,T),ne(vc,p,b,0,0,.2,.94,.28,.1,.2,T),Wi(p,b,.32,.32,T+1.1)}function yo(p,b,T,P=Be){ne(xo,p,b,T,0,0,0,.32,.07,.32,P),ne(xo,p,b,T,0,0,.07,.24,.5,.24,P),ne(xo,p,b,T,0,0,.57,.34,.1,.34,P),ne(Ks,p,b,T,0,0,.67,.3,.2,.3,P),ne(Ti,p,b,T,0,0,.87,.1,.07,.1,P);for(const k of[-.17,.17])ne(Ti,p,b,T,k,0,.38,.09,.15,.15,P);Wi(p,b,.22,.22,P+.9)}function mr(p,b,T=Be){ne(fn,p,b,0,0,0,0,.24,.05,.24,T),ne(Ri,p,b,0,0,0,.05,.27,.8,.27,T),ne(fa,p,b,0,0,0,.7,.24,.08,.24,T),ne(fn,p,b,0,0,0,.85,.31,.06,.31,T),ne(Vt,p,b,0,0,0,.91,.25,.25,.25,T),Wi(p,b,.17,.17,T+1.05)}function Oi(p,b,T,P=1.5,k=Be){const j=P*.62;ne(Ji,p,b,T,0,0,0,P,.5,j,k),ne(Ji,p,b,T,0,0,.5,P+.12,.09,j+.12,k),ne(Mc,p,b,T,0,0,.56,P-.16,.04,j-.16,k);for(let ae=0;ae<3;ae++)ne(yc,p,b,T,(ae-1)*P*.26,0,.6,.72,.58,.5,k);ne(yc,p,b,T,0,0,.78,P*.86,.46,j*.8,k);for(let ae=0;ae<3;ae++)ne(Mo,p,b,T,(ae-1)*.34,.08,.86,.17,.13,.17,k);gi(p,b,P/2+.06,j/2+.06,T,k+.62)}function $s(p,b,T,P=Be){ne(fn,p,b,T,0,0,0,.2,.09,.2,P),ne(fn,p,b,T,0,0,.09,.1,1.02,.1,P),ne(gn,p,b,T,0,0,1.11,.26,.42,.18,P),ne(Gn,p,b,T,0,.1,1.24,.16,.13,.02,P),ne(Ti,p,b,T,.07,.1,1.42,.04,.07,.02,P),ne(gn,p,b,T,0,0,1.53,.3,.06,.22,P),Wi(p,b,.17,.17,P+1.45)}function Sc(p,b,T,P,k=Be){ne(Gi,p,b,T,0,0,0,.09,2.95,.09,k),ne(Gn,p,b,T,0,.06,2.62,.15,.06,.06,k),pr(ht[P],p,b,T,0,.1,2.82,1,k),Wi(p,b,.14,.14,k+2.95)}function ma(p,b,T,P=Be){ne(Ji,p,b,T,0,0,0,1.05,.1,.6,P),ne(js,p,b,T,0,0,.1,.95,1.35,.5,P),ne(Gn,p,b,T,0,.26,.24,.78,1.05,.02,P),ne(Gn,p,b,T,0,.26,.1,.9,.05,.03,P),ne(Ti,p,b,T,.38,.28,.72,.06,.1,.03,P),gi(p,b,.5,.32,T,P+1.45)}function Xl(p,b,T,P=Be){ne(Ji,p,b,T,0,0,0,.6,.08,.5,P),ne(As,p,b,T,0,0,.08,.52,.95,.42,P),ne(Ks,p,b,T,0,0,1.03,.52,.26,.42,P),ne(Gn,p,b,T,0,.22,.82,.3,.05,.02,P),ne(Ti,p,b,T,0,.22,.42,.34,.14,.02,P),gi(p,b,.3,.26,T,P+1.3)}function Xt(p,b,T,P=Be){ne(Ji,p,b,T,0,0,0,.5,.1,.4,P),ne(gn,p,b,T,0,0,.1,.4,1.45,.3,P),ne(Gn,p,b,T,0,.16,1.05,.24,.3,.03,P),ne(Ti,p,b,T,-.1,.16,.86,.12,.04,.03,P),ne(gn,p,b,T,0,0,1.55,.46,.08,.38,P),gi(p,b,.24,.2,T,P+1.6)}function Qn(p,b,T,P=Be){ne(Ji,p,b,T,0,0,0,1.1,.12,1.1,P);for(const k of[-.45,.45])for(const j of[-.45,.45])ne(As,p,b,T,k,j,.12,.13,2.2,.13,P);for(const k of[-.45,.45])ne(As,p,b,T,0,k,2.32,1.04,.1,.13,P);ne(As,p,b,T,-.45,0,2.32,.13,.1,.9,P),ne(us,p,b,T,0,.45,.32,.82,1.9,.04,P),ne(us,p,b,T,0,-.45,.32,.82,1.9,.04,P),ne(us,p,b,T,-.45,0,.32,.04,1.9,.82,P),ne(As,p,b,T,0,.45,2.22,.94,.12,.1,P),ne(Ks,p,b,T,0,0,2.42,1,.3,1,P),ne(Ti,p,b,T,0,0,2.72,.24,.1,.24,P),ne(js,p,b,T,0,-.38,.3,.5,.5,.06,P),Wi(p,b,.62,.62,P+2.7)}function gr(p,b,T,P=Be){ne(Ji,p,b,T,0,0,0,2.5,.14,2.1,P),ne(js,p,b,T,0,0,.14,2.4,1.05,2,P),ne(us,p,b,T,0,1,1.19,2.2,1.15,.06,P),ne(us,p,b,T,1.2,0,1.19,.06,1.15,1.7,P),ne(js,p,b,T,0,1.05,.95,2.44,.28,.24,P),ne(Or,p,b,T,0,1.22,2.34,2.9,.07,.7,P),ne(Gn,p,b,T,0,1.16,2.46,2.6,.14,.1,P),ne(Ti,p,b,T,0,1.08,1.05,.5,.14,.03,P),gi(p,b,1.25,1.05,T,P+2.5)}function kr(p,b,T,P=Be){for(const k of[-2.1,2.1]){for(const j of[-.85,.85])ne(Bt,p,b,T,k,j,0,.12,2.42,.1,P);ne(Bt,p,b,T,k,0,2.38,.12,.1,1.8,P)}ne(Gn,p,b,T,0,0,2.46,4.5,.12,1.95,P),ne(gn,p,b,T,0,.88,2.3,4.4,.22,.08,P),ne(gn,p,b,T,0,-.88,2.3,4.4,.22,.08,P),ne(us,p,b,T,0,.86,.3,4.1,1.95,.05,P);for(const k of[-1.4,0,1.4])ne(Bt,p,b,T,k,.86,.3,.07,1.95,.07,P);ne(us,p,b,T,-2.1,0,.3,.05,1.95,1.6,P);for(let k=0;k<3;k++)ne(Jn,p,b,T,0,.36+k*.13,.5,3.3,.05,.11,P);for(const k of[-1.5,0,1.5])ne(Bt,p,b,T,k,.4,0,.05,.5,.1,P);ne(js,p,b,T,-2,0,1.45,.06,.5,.42,P),ne(ws,p,b,T,2.75,.7,0,.42,.6,.42,P),ne(Gi,p,b,T,-2.9,.95,0,.09,3.2,.09,P),pr(Wl,p,b,T,-2.9,.95,2.55,1,P),gi(p,b,2.3,1,T,P+2.5)}function Rs(p,b,T,P,k=Be){const j=Math.max(2,Math.round(P/1.8));for(let Te=0;Te<=j;Te++)ne(Gi,p,b,T,-P/2+P*Te/j,0,0,.07,.95,.07,k);ne(gn,p,b,T,0,0,.87,P,.06,.06,k);for(let Te=1;Te<=2;Te++)ne(gn,p,b,T,0,0,.25+Te*.21,P,.03,.03,k);const ae=Math.max(3,Math.round(P/.6));for(let Te=0;Te<ae;Te++)ne(gn,p,b,T,-P/2+P*(Te+.5)/ae,0,.1,.025,.72,.025,k);gi(p,b,P/2,.14,T,k+.95)}function xr(p,b,T,P=Be){ne(go,p,b,T,.55,0,.34,.68,.68,.68,P),ne(go,p,b,T,-.55,0,.34,.68,.68,.68,P),ne(Gi,p,b,T,.55,0,.33,.06,.05,.06,P),ne(Gi,p,b,T,-.55,0,.33,.06,.05,.06,P),ne(gn,p,b,T,.02,0,.62,.8,.035,.035,P),ne(gn,p,b,T,-.28,0,.6,.035,.44,.035,P),ne(gn,p,b,T,.24,0,.45,.035,.56,.035,P),ne(gn,p,b,T,.55,0,.5,.035,.62,.035,P),ne(gn,p,b,T,-.28,0,.4,.035,.4,.035,P),ne(gn,p,b,T,.62,0,.9,.035,.16,.035,P),ne(gn,p,b,T,.55,0,.95,.04,.04,.5,P),ne(Gn,p,b,T,-.3,0,.94,.3,.05,.13,P),ne(gn,p,b,T,.3,0,1.08,.04,.28,.04,P)}function ga(p,b,T,P=3,k=Be){for(let j=0;j<P;j++){const ae=(j-(P-1)/2)*.75;ne(Ie,p,b,T,ae,0,0,.9,1.5,.9,k),ne(Gn,p,b,T,ae,0,0,.16,.03,.16,k)}gi(p,b,(P-1)*.75/2+.45,.3,T,k+.8)}function bc(p,b,T,P=Be){ne(fn,p,b,T,0,0,0,.5,.05,.5,P),ne(fn,p,b,T,0,0,.05,.09,.68,.09,P),ne(Jn,p,b,T,0,0,.73,.78,.05,.78,P),Wi(p,b,.42,.42,P+.8)}function Tc(p,b,T,P=Be){ne(Bt,p,b,T,0,0,.42,.42,.05,.42,P);for(const k of[-.17,.17])for(const j of[-.17,.17])ne(Bt,p,b,T,k,j,0,.04,.42,.04,P);for(const k of[-.19,.19])ne(Bt,p,b,T,k,.2,.42,.04,.52,.04,P);ne(Jn,p,b,T,0,.2,.7,.42,.11,.04,P)}function ql(p,b,T,P=Be){ne(fn,p,b,T,0,0,0,.52,.06,.52,P),ne(Gi,p,b,T,0,0,.06,.07,2.3,.07,P),ne(Ci,p,b,T,0,0,2.14,2.7,.5,2.7,P),ne(Ti,p,b,T,0,0,2.6,.07,.15,.07,P)}function zr(p,b,T,P,k=Be){const j=Math.cos(T),ae=Math.sin(T);for(let Te=0;Te<P;Te++){const mt=(Te-(P-1)/2)*1.7,Zt=p+mt*j,wn=b-mt*ae;bc(Zt,wn,T,k),Tc(Zt+.66*ae,wn+.66*j,T+Math.PI,k),Tc(Zt-.66*ae,wn-.66*j,T,k),Te%2===0&&ql(Zt,wn,T,k)}}function Ec(p,b,T,P=Be){ne(Gn,p,b,T,0,0,0,3.5,.16,1.6,P),ne(Gn,p,b,T,0,0,.16,3.4,1.05,1.5,P),ne(As,p,b,T,0,.76,.4,1.4,.34,.03,P),gi(p,b,1.75,.8,T,P+1.25)}function So(p,b,T,P=Be){ne(Gn,p,b,T,0,0,.1,2,1.1,1.35,P),ne(js,p,b,T,0,-.15,1.2,2.05,.12,1.4,P),ne(js,p,b,T,0,.35,1.2,2.05,.12,.6,P);for(const k of[-.7,.7])ne(go,p,b,T+Math.PI/2,k,.5,.1,.26,.26,.26,P);gi(p,b,1.05,.72,T,P+1.4)}function bo(p,b,T=Be){for(let P=0;P<5;P++)ne(Ui,p,b,at(0,3),at(-.6,.6),at(-.35,.35),P<3?.03:.42,at(.5,.75),at(.45,.6),at(.5,.75),T)}function Hr(p,b,T,P=Be){for(const k of[-1.4,1.4])for(const j of[-.9,.9])ne($t,p,b,T,k,j,0,.09,2.2,.09,P);ne(Gn,p,b,T,0,0,2.15,3.1,.08,2.1,P),ne(Or,p,b,T,0,0,2.23,3.5,.06,2.6,P),ne(Or,p,b,T,0,1.3,2,3.5,.05,.4,P),ne(Gn,p,b,T,0,0,0,3,.9,1.5,P),ne(Jn,p,b,T,0,.15,.9,3.1,.12,1.5,P);for(let k=0;k<4;k++)ne(mo,p,b,T,-1+k*.66,-.4,1.02,.5,.3,.5,P),ne(Mo,p,b,T,-1+k*.66,-.4,1.3,.42,.24,.42,P);gi(p,b,1.7,1.2,T,P+2.2)}function To(p,b,T){ne(dr,p,b,0,0,0,0,5.6,.5,5.6,T),ne(dr,p,b,0,0,0,.5,4.9,.08,4.9,T),ne(vo,p,b,0,0,0,.42,5,1,5,T),ne(_o,p,b,0,0,0,.4,1.5,2.4,1.5,T),ne(dr,p,b,0,0,0,2.8,2.8,.28,2.8,T),ne(ds,p,b,0,0,0,3.2,1,1.3,1,T);for(let P=0;P<4;P++){const k=P/4*Math.PI*2;ne(dr,p+Math.cos(k)*2.7,b+Math.sin(k)*2.7,0,0,0,0,.45,.85,.45,T)}}function xa(p,b,T){ne(fs,p,b,0,0,0,0,3.2,.36,3.2,T),ne(fs,p,b,0,0,0,.36,2.3,2.8,2.3,T),ne(fs,p,b,0,0,0,3.16,2.7,.26,2.7,T),ne(ds,p,b,0,0,0,3.42,1,1.5,.9,T),ne(fs,p,b,0,0,0,4.5,.5,.7,.4,T),ne(ds,p,b,0,0,0,5.1,.42,.5,.42,T)}function Eo(p,b){const T=p.len*1.85,P=Math.max(2,Math.round(T/2.4)),k=Math.max(2,Math.round(b/2.6)),j=k*2.6;for(let ae=0;ae<=P;ae++){const Te=-T/2+T*ae/P;for(const mt of[.35,1.55])ne(Gi,p.x,p.z,p.yaw,Te,mt,0,.09,j+1.1,.09);ne(gn,p.x,p.z,p.yaw,Te,.95,0,.06,.06,1.3)}for(let ae=0;ae<=k;ae++){const Te=ae*2.6;for(const mt of[.35,1.55])ne(gn,p.x,p.z,p.yaw,0,mt,Te,T,.06,.06);ae<k&&(ne(Jn,p.x,p.z,p.yaw,0,.95,Te+.1,T,.06,1.2),ne(Jn,p.x,p.z,p.yaw,0,1.62,Te+.16,T,.22,.05))}ne(_c,p.x,p.z,p.yaw,0,1.68,.15,T,j,.03)}function wo(p,b,T,P){const k=mi(p,b);if(!k)return null;const j=Math.min(p-T-k.x0,k.x1-(p+T)),ae=Math.min(b-P-k.z0,k.z1-(b+P));return j<=ae&&j<1.4?p-T-k.x0<=k.x1-(p+T)?{x:p-T,z:b,yaw:-Math.PI/2,len:P}:{x:p+T,z:b,yaw:Math.PI/2,len:P}:ae<1.4?b-P-k.z0<=k.z1-(b+P)?{x:p,z:b-P,yaw:Math.PI,len:T}:{x:p,z:b+P,yaw:0,len:T}:null}function _a(p,b){ne(Bt,p.x,p.z,p.yaw,b,.2,4.15,.06,.06,.4),ne(Gn,p.x,p.z,p.yaw,b,.4,4.06,.28,.16,.3),ne(da,p.x,p.z,p.yaw,b,.4,3.98,.22,.06,.22)}function wc(p,b){ne(gn,p.x,p.z,p.yaw,b,.16,.1,1,1,.32),ne(Gn,p.x,p.z,p.yaw,b,.34,.85,.52,.34,.04),ne(Ti,p.x,p.z,p.yaw,b,.34,.5,.4,.12,.04),ne(da,p.x,p.z,p.yaw,b,.3,1.14,1.08,.07,.4)}function va(p,b){ne(gn,p.x,p.z,p.yaw,b,.2,0,.95,1.9,.4),ne(us,p.x,p.z,p.yaw,b,.42,.35,.7,1.3,.04),ne(Gn,p.x,p.z,p.yaw,b,.42,1.75,.8,.16,.04),ne(Ti,p.x,p.z,p.yaw,b,.42,.9,.3,.12,.04)}const Ma=13,Ac=p=>{const b=(p%80+80)%80;return Math.min(b,80-b)<3.4},Ao=(p,b)=>p?b>0?-Math.PI/2:Math.PI/2:b>0?Math.PI:0,ya=["tree","bin","tree","bench","rack","tree","planter","bin","hydrant","tree","bench","cabinet","tree","sign","meter","tree","bollards","bench"];let Ro=0;for(let p=0;p<pn.length;p++){const b=pn[p];for(const T of[!0,!1])for(const P of[1,-1]){const k=Ao(T,P);for(let j=-Wn+26;j<=Wn-26;j+=Ma){if(Zn(j)||Zn(j+Ma)||Ac(j)){Ro++;continue}const ae=ya[(Ro+++p*5+(P>0?0:9))%ya.length],Te=(Zt,wn=0)=>T?b+P*Zt:j+wn,mt=(Zt,wn=0)=>T?j+wn:b+P*Zt;if(ae==="tree")a.push({x:Te(8),z:mt(8),sc:at(.85,1.15)});else if(ae==="bin")Qi(Te(8.9),mt(8.9));else if(ae==="bench")Br(Te(9.15),mt(9.15),k,at(1.6,2.05));else if(ae==="rack")ga(Te(8.85),mt(8.85),k,2+Ro%2),Un()<.55&&xr(Te(8.85,-.8),mt(8.85,-.8),k);else if(ae==="planter")Oi(Te(9.2),mt(9.2),k,at(1.1,1.55));else if(ae==="hydrant")yo(Te(8.35),mt(8.35),k);else if(ae==="cabinet")ma(Te(9.2),mt(9.2),k);else if(ae==="sign")Sc(Te(8.4),mt(8.4),T?0:Math.PI/2,Un()<.7?0:1);else if(ae==="meter")$s(Te(8.5),mt(8.5),k);else for(let Zt=-1;Zt<=1;Zt++)mr(Te(7.75,Zt*1.6),mt(7.75,Zt*1.6))}}}for(const p of a){const b=2.6*p.sc;De(It,p.x,Be,p.z,.34,b,.34),De(Y,p.x,Be+b*.92,p.z,3.1*p.sc,2.5*p.sc,3.1*p.sc),De(Y,p.x+.5*p.sc,Be+b*1.2,p.z-.4*p.sc,2.1*p.sc,1.9*p.sc,2.1*p.sc),De(Ue,p.x,Be+.03,p.z,1.5,1,1.5)}for(const p of Je){const b=pn[p.ix],T=pn[p.iz],P=(j,ae,Te,mt)=>({dx:j,dz:ae,x:Te,z:mt}),k=[P(1,1,b+8.6,T+8.6),P(-1,1,b-8.6,T+8.6),P(1,-1,b+8.6,T-8.6),P(-1,-1,b-8.6,T-8.6)];Qi(k[0].x,k[0].z),yo(k[1].x,k[1].z,0),Qi(k[2].x,k[2].z),Rs(b+7.8,T+18,Math.PI/2,9),Rs(b-7.8,T+18,Math.PI/2,9),Rs(b+18,T-7.8,0,9),Rs(b+18,T+7.8,0,9);for(let j=0;j<4;j++)mr(b+8.7+j*1.5,T+8.7);for(let j=0;j<4;j++)mr(b-8.7-j*1.5,T-8.7);for(let j=0;j<4;j++)mr(b+8.7+j*1.5,T-8.7);(p.ix+p.iz)%3===0&&(pr(ht[1],k[3].x,k[3].z,Math.PI,0,0,3.1,1,Be),ne(Gi,k[3].x,k[3].z,Math.PI,0,0,0,.09,3.3,.09))}for(const p of[-220,-110,110,220])for(const b of[-350,-130,130,350])for(const T of[!0,!1])for(const P of[1,-1]){const k=T?p+P*9.1:b,j=T?b:p+P*9.1;kr(k,j,Ao(T,P));const ae=T?p+P*8.4:b+6.4,Te=T?b+6.4:p+P*8.4;Qi(ae,Te),Un()<.5&&Xt(T?p+P*8.6:b-6.4,T?b-6.4:p+P*8.6,Ao(T,P))}for(const p of Jo){const b=[];for(const j of p.blds){if(j.top<Be+4||j.hx>14&&j.hz>14)continue;const ae=wo(j.x,j.z,j.hx-.35,j.hz-.35);ae&&b.push({face:ae,top:j.top})}let T=0;for(const j of b){const ae=(T%2-.5)*Math.min(j.face.len*.9,2.6);j.top<34&&_a(j.face,ae);const Te=Un();Te<.05&&j.face.len>6?wc(j.face,ae):Te<.09&&j.face.len>6&&va(j.face,ae+1.2),T++}const P=Math.max(Math.abs(p.cx),Math.abs(p.cz)),k=(p.i*7919+p.j*104729)%100;if(P<320&&k%6===0&&zr(p.cx+k%3*9-9,p.z0-.8,0,3+k%2),k%11===3&&Qn(p.x0+10.5,p.z1+1.2,Math.PI),k%13===5&&gr(p.x1+1.2,p.z0+14,Math.PI/2),k%7===4&&Xl(p.x1-9,p.z1+1.2,Math.PI),k%9===2&&(Ec(p.x0-1.2,p.z0+12,Math.PI/2),bo(p.x0-1.8,p.z0+16.5)),k%19===9&&So(p.x1-12,p.z0-1.2,0),k%17===7){let j=null;for(const ae of p.blds)(!j||ae.top>j.top)&&(j=ae);if(j&&j.top>14){const ae=wo(j.x,j.z,j.hx-.35,j.hz-.35);ae&&ae.len>6&&Eo(ae,Math.min(26,j.top-Be-2.4))}}}for(const[p,b]of[[1,1],[-1,1],[1,-1],[-1,-1]]){const T=p*42,P=b*42;Oi(T,P,0,3.4,.02);for(let k=0;k<4;k++){const j=k/4*Math.PI*2+Math.PI/4,ae=T+Math.cos(j)*3.4,Te=P+Math.sin(j)*3.4;Br(ae,Te,j+Math.PI,1.8,.02),Qi(T+Math.cos(j)*4.6,P+Math.sin(j)*4.6,.02)}}xa(24,24,.02),To(-24,24,.02),To(24,-24,.02),xa(-24,-24,.02);for(let p=0;p<4;p++)Hr(-30+p*4.2,66,0,.02),Hr(66,-30+p*4.2,Math.PI/2,.02);for(let p=0;p<16;p++){const b=p/16*Math.PI*2,T=Math.cos(b)*31,P=Math.sin(b)*31;Math.abs(T)<13||Math.abs(P)<13||(Br(T,P,b+Math.PI,1.9,.02),p%2===0&&Qi(T*1.1,P*1.1,.02))}for(let p=0;p<pn.length;p+=2){const b=pn[p];for(let T=-480;T<=480;T+=80)if(!pn.some(P=>Math.abs(T-P)<20)&&(T/80+p)%3===0)for(const P of[!0,!1])for(const k of[1,-1]){const j=P?b+k*8.2:T,ae=P?T:b+k*8.2,Te=P?0:Math.PI/2;De(Bt,j,Be+5.5,ae,P?1.6:.05,.05,P?.05:1.6),De(pa,j-(P?k*.45:0),Be+4.4,ae-(P?0:k*.45),1,1,1,Te),De(pa,j+(P?k*.45:0),Be+4.4,ae+(P?0:k*.45),1,1,1,Te)}}const Sa=Jo.flatMap(p=>p.blds).filter(p=>p.top>30).sort((p,b)=>b.top-p.top);let Co=0;for(let p=0;p<Math.min(14,Sa.length);p+=2){const b=Sa[p],T=Rt[Co++%Rt.length],P=ot[Co===0?0:(Co-1)%ot.length],k=Un()<.5?0:Math.PI/2;k===0&&Math.min(b.hx*2,14);const j=Math.min(1.4,b.hx*2/12);De(P,b.x,b.top-1.5,b.z,j,j,1,k),De(_t,b.x,b.top-1.5-T.h*j/2-.2,b.z,.25*j,.4,.25*j,k)}const ba=Et(c,Wt,!1);for(let p=0;p<90;p++){const b=p/90*Math.PI*2+at(-.02,.02),T=at(760,1500),P=Math.cos(b)*T,k=Math.sin(b)*T,j=T<1e3?at(30,90):at(60,200);De(ba,P,0,k,at(20,60),j,at(20,60),at(0,3.14))}n.push(ba),n.push(y,$,ie,de,Le,ke,pe,xe,Ce,rt,Xe,ze,_t,It,Y,Ue,ye,qe,Ke,we,dt,ct,hn,Yt,Ai,bi,ii,lr,cs,bs,$i,En,si,Zi,Ts,ur,Es,hr,$n,Vi,fr,Nr,ls);for(const p of ot)n.push(p);for(const p of ht)n.push(p);for(const p of Object.values(hp)){const b=Et(new ai(3.4,.6),p.mat,!1);n.push(b),fp.push(b)}for(const p of fp)for(let b=0;b<24;b++){const T=Jo[Un()*Jo.length|0];if(T.type==="park")continue;const P=Un()<.5?0:Math.PI/2,k=P===0?T.d/2+.5:T.w/2+.5;De(p,T.cx+(P===0?at(-T.w/2+6,T.w/2-6):k),Be+3.6,T.cz+(P===0?k:at(-T.d/2+6,T.d/2-6)),1,1,1,P)}function Vr(p,b,T,P){const k=new so(C,b,p.length);p.forEach((ae,Te)=>k.setMatrixAt(Te,ae)),k.instanceMatrix.needsUpdate=!0,k.frustumCulled=!1;const j=new Float32Array(p.length*3);for(let ae=0;ae<p.length;ae++)j[ae*3]=P.r,j[ae*3+1]=P.g,j[ae*3+2]=P.b;return k.instanceColor=new lc(j,3),k.instanceColor.needsUpdate=!0,t.add(k),k}const Ta=Vr(q,Dr,Q.r,Ne.r),_r=Vr(oe,Ur,Q.a,Ne.a),Rc=Vr(te,Fr,Q.g,Ne.g);db(t,n);let Ea=Un()*20,wa=0;const Cc=Je.map(()=>"");let Gr=-1,Aa=-1;function Po(p,b,T){const{ix:P,iz:k}=Je[p],j=p*4;for(let ae=0;ae<4;ae++){const Te=ae<2?b:T,mt=j+ae;Zs(Ta,mt,Te==="r"),Zs(_r,mt,Te==="a"),Zs(Rc,mt,Te==="g")}}function Zs(p,b,T){const P=p.instanceColor;if(!P)return;const k=p===Ta,j=p===_r,ae=T?k?Q.r:j?Q.a:Q.g:k?Ne.r:j?Ne.a:Ne.g;P.setXYZ(b,ae.r,ae.g,ae.b),P.needsUpdate=!0}return{root:t,lampPoints:i,parkSpots:r,parkedCarSpots:o,lampMaterial:Fe,update(p,b,T){if(Ea+=p,wa+=p,wa>.15){wa=0;for(let P=0;P<Je.length;P++){const{ix:k,iz:j}=Je[P],ae=rp(k,j,Ea),Te=ae.ns+ae.ew;Te!==Cc[P]&&(Cc[P]=Te,Po(P,ae.ns,ae.ew))}}if(Math.abs(b-Gr)>.05){Gr=b;for(const k of Ct)k.emissiveIntensity=.02+1.15*b;ue.emissiveIntensity=.03+1.5*b,ge.emissiveIntensity=.02+2.4*b;for(const k of Se)k.emissiveIntensity=.02+.5*b;Fe.emissiveIntensity=.05+1.9*b;const P=nt.mat;P.opacity=.22*b,P.visible=b>.05}Math.abs(T-Aa)>.015&&(Aa=T,_.roughness=.98-.62*T,_.metalness=.04+.55*T,_.envMapIntensity=.3+1.1*T,z.roughness=.95-.35*T,z.metalness=.5*T,z.envMapIntensity=.3+.7*T,K.roughness=.9-.3*T,bt.opacity=.15+.75*T,bt.visible=T>.02)},lightBlocks(p,b,T,P,k){const j=T==="z"?b:p;let ae=null;for(const Lt of pn)P>0&&Lt>j+3&&(ae===null||Lt<ae)&&(ae=Lt),P<0&&Lt<j-3&&(ae===null||Lt>ae)&&(ae=Lt);if(ae===null)return!1;const Te=Math.abs(ae-j),mt=6+k*k/(2*3.4);if(Te>Math.max(11,mt*1.35))return!1;const Zt=sp(T==="z"?p:ae),wn=sp(T==="z"?ae:b),_n=rp(T==="z"?Zt:wn,T==="z"?wn:Zt,Ea);return(T==="z"?_n.ns:_n.ew)!=="g"}}}const hp=[],fp=[];function mb(s){const{canvas:e,cluster:t,gmeter:n}=s,i=s.onToast??(()=>{}),r=s.onTelemetry??(()=>{}),o=(S=0,E=0,B=0)=>new V(S,E,B),a=(S,E,B)=>S<E?E:S>B?B:S,c=(S,E,B)=>{const N=a((B-S)/(E-S),0,1);return N*N*(3-2*N)},l=(S,E)=>S+Math.random()*(E-S),u=Math.PI*2,f=new Q1({canvas:e,antialias:!0,powerPreference:"high-performance"});let h=Math.min(window.devicePixelRatio||1,2);f.setPixelRatio(h),f.setSize(e.clientWidth||window.innerWidth,e.clientHeight||window.innerHeight,!1),f.shadowMap.enabled=!0,f.shadowMap.type=xp,f.toneMapping=kh,f.toneMappingExposure=1;const d=new Gf,m=new Ni(62,16/9,.15,3200),M={time:s.initialTimeOfDay??15.2,weather:s.initialWeather??"clear",day:1,night:0,wet:0},x=o(.5,.7,-.4).normalize(),g={value:0},A={sunDir:{value:x.clone()},uDay:{value:1},uDusk:{value:0},uNight:{value:0},uOvercast:{value:0},uTime:g},I=new ji({side:Di,depthWrite:!1,fog:!1,uniforms:A,vertexShader:"varying vec3 vP; void main(){ vP = position; gl_Position = projectionMatrix * modelViewMatrix * vec4(position,1.0); }",fragmentShader:`
      varying vec3 vP;
      uniform vec3 sunDir; uniform float uDay; uniform float uDusk; uniform float uNight;
      uniform float uOvercast; uniform float uTime;
      float hash(vec2 p){ return fract(sin(dot(p, vec2(127.1,311.7))) * 43758.5453); }
      float noise(vec2 p){ vec2 i = floor(p), f = fract(p); f = f*f*(3.0-2.0*f);
        return mix(mix(hash(i), hash(i+vec2(1.0,0.0)), f.x), mix(hash(i+vec2(0.0,1.0)), hash(i+vec2(1.0,1.0)), f.x), f.y); }
      float fbm(vec2 p){ float v = 0.0, a = 0.5; for(int i=0;i<5;i++){ v += a*noise(p); p = p*2.02 + 13.7; a *= 0.5; } return v; }
      void main(){
        vec3 d = normalize(vP);
        float h = max(d.y, 0.0);
        vec3 zen = mix(vec3(0.012,0.022,0.045), vec3(0.20,0.40,0.68), uDay);
        vec3 mid = mix(vec3(0.030,0.045,0.080), vec3(0.62,0.72,0.84), uDay);
        vec3 hor = mix(vec3(0.055,0.065,0.095), vec3(0.90,0.87,0.78), uDay);
        vec3 c = mix(hor, mix(mid, zen, pow(h, 0.5)), smoothstep(0.0, 0.42, h));
        /* warm band at golden hour */
        c = mix(c, vec3(0.98, 0.50, 0.26), uDusk * pow(1.0 - h, 3.0) * 0.75);
        float s = max(dot(d, sunDir), 0.0);
        c += vec3(1.0, 0.80, 0.52) * (pow(s, 1200.0) * 4.0 + pow(s, 90.0) * 0.45 * uDay + pow(s, 8.0) * 0.18 * uDay);
        float mo = max(dot(d, -sunDir), 0.0);
        c += vec3(0.72, 0.78, 0.98) * pow(mo, 3000.0) * 4.5 * uNight;
        /* stars */
        if (uNight > 0.02 && d.y > 0.0) {
          vec3 sp = floor(normalize(vP) * 320.0);
          float hs = hash(sp.xy + sp.z * 21.7);
          float star = smoothstep(0.9972, 0.9995, hs);
          c += vec3(0.85, 0.90, 1.0) * star * uNight * smoothstep(0.0, 0.25, d.y) * 1.7;
        }
        /* clouds */
        if (d.y > 0.012) {
          vec2 cuv = d.xz / (d.y + 0.18);
          float t = uTime * 0.0055;
          float den = fbm(cuv * 0.5 + vec2(t, -t * 0.35));
          float cov = smoothstep(0.55 - uOvercast * 0.35, 0.80 - uOvercast * 0.25, den) * smoothstep(0.02, 0.18, d.y);
          vec3 cb = mix(vec3(0.96, 0.93, 0.90), vec3(0.42, 0.45, 0.52), smoothstep(0.5, 0.96, den));
          cb = mix(cb, vec3(0.55, 0.57, 0.62), uOvercast);
          cb *= mix(0.20, 1.0, uDay);
          cb = mix(cb, vec3(1.05, 0.90, 0.72), pow(s, 3.0) * 0.45 * uDay);
          c = mix(c, cb, cov * (0.85 - 0.25 * uOvercast));
        }
        /* distant ridge line */
        float ang = atan(d.z, d.x);
        vec2 md = vec2(cos(ang), sin(ang));
        float ridge = 0.028 + 0.075 * fbm(md * 2.6 + vec2(4.7, 1.3)) + 0.03 * fbm(md * 6.1);
        float mt = (1.0 - smoothstep(ridge - 0.012, ridge, d.y)) * smoothstep(-0.035, -0.006, d.y);
        if (mt > 0.001) {
          float t2 = clamp((ridge - d.y) / 0.09, 0.0, 1.0);
          vec3 rock = mix(vec3(0.42, 0.40, 0.39), hor, 0.42 + 0.45 * t2);
          c = mix(c, rock, mt * 0.9);
        }
        if (d.y < -0.035) c = hor;
        gl_FragColor = vec4(c, 1.0);
      }`}),_=new Ut(new ao(2e3,32,20),I);_.frustumCulled=!1,d.add(_);const w=new Zh(15128494,340,1500);d.fog=w;const R=new zx(12373990,7828812,.45);d.add(R);const D=new u0(16769198,2.1);D.castShadow=!0,D.shadow.mapSize.set(2048,2048),D.shadow.camera.left=-60,D.shadow.camera.right=60,D.shadow.camera.top=60,D.shadow.camera.bottom=-60,D.shadow.camera.near=20,D.shadow.camera.far=460,D.shadow.bias=-6e-4,D.shadow.normalBias=.03,d.add(D),d.add(D.target);let v=null;const L=new Ch(f);function O(){const S=new Gf;S.add(new Ut(new ao(60,24,12),I));const E=new Ut(new ao(4,12,12),new ki({color:new it().setHSL(.09,.5,.35+.55*M.day)}));E.position.copy(x).multiplyScalar(45),S.add(E);const B=new Ut(new Bl(55,32),new ki({color:new it().setHSL(.11,.18,.05+.16*M.day)}));B.rotation.x=-Math.PI/2,B.position.y=-3,S.add(B),v&&v.dispose(),v=L.fromScene(S,.04,.1,120).texture,d.environment=v}const z=f.capabilities.getMaxAnisotropy();function K(S,E,B,N=1,Z=1){const W=document.createElement("canvas");W.width=S,W.height=E,B(W.getContext("2d"),S,E);const G=new Th(W);return G.wrapS=G.wrapT=Lr,G.repeat.set(N,Z),G.colorSpace=Xn,G.anisotropy=z,G}const ee=K(256,256,(S,E,B)=>{S.fillStyle="#8f9164",S.fillRect(0,0,E,B);for(let N=0;N<26;N++){const Z=S.createRadialGradient(Math.random()*E,Math.random()*B,4,Math.random()*E,Math.random()*B,l(30,80)),W=Math.random()<.5;Z.addColorStop(0,W?"rgba(168,158,96,.35)":"rgba(110,134,74,.30)"),Z.addColorStop(1,"rgba(0,0,0,0)"),S.fillStyle=Z,S.fillRect(0,0,E,B)}for(let N=0;N<4200;N++){const Z=Math.random()*E,W=Math.random()*B,G=125+Math.random()*80|0;S.strokeStyle=`rgba(${G-10},${G},${G-45},${.5+Math.random()*.5})`,S.lineWidth=1,S.beginPath(),S.moveTo(Z,W),S.lineTo(Z+l(-1.5,1.5),W-l(2,5)),S.stroke()}},190,190),X=K(256,256,(S,E,B)=>{S.fillStyle="#41444a",S.fillRect(0,0,E,B);for(let N=0;N<3600;N++){const Z=52+Math.random()*34|0;S.fillStyle=`rgb(${Z},${Z+2},${Z+5})`,S.fillRect(Math.random()*E,Math.random()*B,1.4,1.4)}for(let N=0;N<10;N++){S.strokeStyle="rgba(25,27,30,.35)",S.beginPath();let Z=Math.random()*E,W=Math.random()*B;S.moveTo(Z,W);for(let G=0;G<5;G++)Z+=l(-30,30),W+=l(-30,30),S.lineTo(Z,W);S.stroke()}}),J=[];function ce(S,E){const B=X.clone();B.repeat.set(S,E),B.needsUpdate=!0;const N=new $e({map:B,roughness:.96,metalness:0,envMapIntensity:.35});return J.push(N),N}const se=new $e({color:14473420,roughness:.9,envMapIntensity:.3,polygonOffset:!0,polygonOffsetFactor:-2,polygonOffsetUnits:-2});function Ee(S,E){const B=Math.floor(S),N=Math.floor(E),Z=S-B,W=E-N,G=(ve,me)=>{const Oe=Math.sin(ve*127.1+me*311.7)*43758.5453;return Oe-Math.floor(Oe)},fe=Z*Z*(3-2*Z),le=W*W*(3-2*W);return G(B,N)*(1-fe)*(1-le)+G(B+1,N)*fe*(1-le)+G(B,N+1)*(1-fe)*le+G(B+1,N+1)*fe*le}function ue(S,E){let B=0,N=.5;for(let Z=0;Z<4;Z++)B+=N*Ee(S,E),S=S*2.13+7.31,E=E*2.11+3.77,N*=.5;return B}function ge(S,E){const B=Math.sqrt(S*S+E*E),N=c(860,1150,B);return N<=0?0:N*(7+ue(S*.004+3.7,E*.004+1.9)*15+Math.sin(S*.012)*Math.cos(E*.014)*4+Math.sin(S*.033+E*.021)*1.6)}const Se=[{x:-60,z:-8,yaw:-Math.PI/2,w:9,l:16,h1:2.3},{x:165,z:-110,yaw:Math.atan2(.6,.8),w:10,l:20,h1:4.6}].map(S=>{const E=Math.cos(S.yaw),B=Math.sin(S.yaw),N=Math.hypot(S.l,S.h1);return{...S,c:E,s:B,nx:S.l/N*B,ny:S.l/N,nz:S.l/N*E,px:S.x,py:S.h1/2,pz:S.z}});let tt=null;function Ze(S,E){return null}function At(S,E){const B=Ze();if(B!==null){const N=tt,Z=Math.min(Math.min(S-N.x0,N.x1-S),Math.min(E-N.z0,N.z1-E));if(Z>=20)return B;const W=ge(S,E)+Fu(S,E);return W+(B-W)*(Z/20)}return ge(S,E)+Fu(S,E)}const bt={h:0,n:o()};function Wt(S,E){let B=-1,N=null;for(const Z of Se){const W=S-Z.x,G=E-Z.z,fe=W*Z.c-G*Z.s,le=W*Z.s+G*Z.c;if(Math.abs(fe)<=Z.w/2&&Math.abs(le)<=Z.l/2){const ve=Z.h1*(le+Z.l/2)/Z.l;ve>B&&(B=ve,N=Z)}}return N?(bt.h=B,bt.n.set(N.nx,N.ny,N.nz),!0):!1}function he(S,E){return(Ee(S*.5,E*.5)-.5)*.05}function Me(S,E){if(Ze()!==null||Math.abs(S)<104&&Math.abs(E)<104||lb(S,E))return"TARMAC";const B=mi(S,E);return B?B.type==="park"?"GRASS":"TARMAC":Fu(S,E)>0||Ae(S,E)?"TARMAC":"GRASS"}function We(S,E){const B=At(S,E);return Wt(S,E)&&bt.h>B||(bt.n.set(At(S-1.2,E)-At(S+1.2,E),2*1.2,At(S,E-1.2)-At(S,E+1.2)).normalize(),bt.h=B+(Me(S,E)==="GRASS"?he(S,E):0)),bt}function lt(S,E){let B=At(S,E);return Wt(S,E)&&bt.h>B?B=bt.h:Me(S,E)==="GRASS"&&(B+=he(S,E)),B}{const S=new ai(1900,1900,150,150);S.rotateX(-Math.PI/2);const E=S.attributes.position,B=[];for(let Z=0;Z<E.count;Z++){const W=E.getX(Z),G=E.getZ(Z);E.setY(Z,ge(W,G));const fe=ue(W*.012,G*.012),le=ue(W*.06+7.7,G*.06+2.3);let ve=.7+.45*fe+.15*le,me=.68+.48*fe+.18*le,Oe=.58+.3*fe+.08*le;const ft=8,Ge=(Math.abs(ge(W+ft,G)-ge(W-ft,G))+Math.abs(ge(W,G+ft)-ge(W,G-ft)))/(2*ft),Dt=a((Ge-.3)*1.5,0,1);ve+=Dt*.45,me+=Dt*.4,Oe+=Dt*.42;const wt=.88+.2*le;B.push(ve*wt,me*wt,Oe*wt)}S.setAttribute("color",new on(B,3)),S.computeVertexNormals();const N=new Ut(S,new $e({color:9210462,map:ee,roughness:1,vertexColors:!0,envMapIntensity:.3}));N.receiveShadow=!0,d.add(N)}let je=[];function Tt(S,E,B,N,Z,W){const G=new Ut(new ai(S,E),W);return G.rotation.x=-Math.PI/2,G.position.set(B,Z,N),G.receiveShadow=!0,d.add(G),G}Tt(206,206,0,0,.02,ce(48,48)),Tt(16,806,0,447,.045,ce(2,100)),Tt(16,806,0,-447,.043,ce(2,100));{const S=[[560,36],[450,450],[110,690],[-335,650],[-690,335],[-725,-150],[-520,-560],[-110,-745],[355,-800],[670,-335]].map(Pt=>o(Pt[0],0,Pt[1])),E=new $p(S,!0),B=460,N=[],Z=[],W=[];for(let Pt=0;Pt<=B;Pt++){const dn=Pt/B,cn=E.getPointAt(dn),xn=E.getTangentAt(dn),Ft=-xn.z,Dn=xn.x,sn=Math.hypot(Ft,Dn);if(N.push(cn.x-Ft/sn*5,.04,cn.z-Dn/sn*5,cn.x+Ft/sn*5,.04,cn.z+Dn/sn*5),Z.push(0,dn*44,10,dn*44),Pt<B){const ln=Pt*2;W.push(ln,ln+1,ln+2,ln+1,ln+3,ln+2)}}for(let Pt=0;Pt<=190;Pt++){const dn=E.getPointAt(Pt/190);je.push(dn.x,dn.z)}const G=new Rn;G.setAttribute("position",new on(N,3)),G.setAttribute("uv",new on(Z,2)),G.setIndex(W),G.computeVertexNormals();const fe=new Ut(G,ce(1,1));fe.receiveShadow=!0,d.add(fe);const le=(Pt,dn,cn)=>{const xn=[],Ft=[];for(let sn=0;sn<=B;sn++){const ln=sn/B,_i=E.getPointAt(ln),zn=E.getTangentAt(ln),In=-zn.z,vi=zn.x,Mi=Math.hypot(In,vi);if(xn.push(_i.x+In/Mi*Pt-dn/2*(In/Mi),cn,_i.z+vi/Mi*Pt-dn/2*(vi/Mi),_i.x+In/Mi*Pt+dn/2*(In/Mi),cn,_i.z+vi/Mi*Pt+dn/2*(vi/Mi)),sn<B){const ri=sn*2;Ft.push(ri,ri+1,ri+2,ri+1,ri+3,ri+2)}}const Dn=new Rn;Dn.setAttribute("position",new on(xn,3)),Dn.setIndex(Ft),Dn.computeVertexNormals(),d.add(new Ut(Dn,se))};le(4.55,.14,.07),le(-4.55,.14,.07);const ve=170,me=new so(new ai(.16,1.8),se,ve),Oe=new zt,ft=new ni,Ge=o(1,1,1),Dt=o(),wt=o(0,1,0);for(let Pt=0;Pt<ve;Pt++){const dn=Pt/ve,cn=E.getPointAt(dn),xn=E.getTangentAt(dn);ft.setFromAxisAngle(wt,Math.atan2(xn.x,xn.z)),Dt.set(cn.x,.07,cn.z),Oe.compose(Dt,ft,Ge),me.setMatrixAt(Pt,Oe)}me.instanceMatrix.needsUpdate=!0,d.add(me)}const tn=new Map,be=24;for(let S=0;S<je.length;S+=2){const E=`${Math.floor(je[S]/be)},${Math.floor(je[S+1]/be)}`,B=tn.get(E);B?B.push(S):tn.set(E,[S])}function Ae(S,E){const B=Math.floor(S/be),N=Math.floor(E/be);for(let Z=-1;Z<=1;Z++)for(let W=-1;W<=1;W++){const G=tn.get(`${B+Z},${N+W}`);if(G)for(const fe of G){const le=S-je[fe],ve=E-je[fe+1];if(le*le+ve*ve<5.4*5.4)return!0}}return!1}const Re=pb({aniso:z}),Pe=Re.root,Ve=Re.parkSpots,vt=Re.parkedCarSpots,ut=Re.lampPoints;d.add(Pe);{const S=ce(2,72);for(const E of pn){const B=new Ut(new ai(14,2*Wn),S);B.rotation.x=-Math.PI/2,B.position.set(E,.03,0),B.receiveShadow=!0,Pe.add(B);const N=new Ut(new ai(2*Wn,14),S);N.rotation.x=-Math.PI/2,N.position.set(0,.032,E),N.receiveShadow=!0,Pe.add(N)}}{const S=new Ut(new cf(29.55,30.45,96),se);S.rotation.x=-Math.PI/2,S.position.y=.06,d.add(S);const E=new Ut(new ai(.16,56),se);E.rotation.x=-Math.PI/2,E.position.y=.06,d.add(E);const B=E.clone();B.rotation.z=Math.PI/2,d.add(B)}function Mt(S,E,B){const N=document.createElement("canvas");N.width=S,N.height=E,B(N.getContext("2d"),S,E);const Z=new Th(N);return Z.colorSpace=Xn,Z}document.fonts?.ready?.then(()=>{const S=new $e({color:2763823,roughness:.7,metalness:.3,envMapIntensity:.4});for(let W=1;W<=6;W++){const G=Mt(256,128,(ve,me,Oe)=>{ve.fillStyle="#17181a",ve.fillRect(0,0,me,Oe),ve.strokeStyle="#ff6a2a",ve.lineWidth=8,ve.strokeRect(4,4,me-8,Oe-8),ve.fillStyle="#ece9e2",ve.font="700 62px Rajdhani, system-ui, sans-serif",ve.textAlign="center",ve.fillText(`${W*100} m`,me/2,Oe/2+22)}),fe=new Vn,le=new Ut(new ai(3.4,1.7),new $e({map:G,roughness:.8,envMapIntensity:.35}));le.rotation.y=-Math.PI/2,le.position.y=2.42,fe.add(le);for(const ve of[-.7,.7]){const me=new Ut(new Ki(.12,2.4,.12),S);me.position.set(0,1.2,ve),fe.add(me)}fe.position.set(11.2,Be,90+W*100),Pe.add(fe)}const E=Mt(1024,96,(W,G,fe)=>{W.fillStyle="#17181a",W.fillRect(0,0,G,fe),W.fillStyle="#ff6a2a",W.fillRect(0,fe-10,G,10),W.fillStyle="#ece9e2",W.font="600 46px Rajdhani, system-ui, sans-serif",W.textAlign="center",W.fillText("APEX CITY  ·  DRAG AVENUE",G/2,58)}),B=new Vn;B.position.set(0,0,90);for(const W of[-10.5,10.5]){const G=new Ut(new Ki(.55,6.4,.55),S);G.position.set(W,3.2,0),G.castShadow=!0,B.add(G)}const N=new Ut(new Ki(21.6,1.2,.7),S);N.position.y=6.2,N.castShadow=!0,B.add(N);const Z=new Ut(new ai(20,1.05),new $e({map:E,roughness:.8,envMapIntensity:.35}));Z.rotation.y=Math.PI,Z.position.set(0,6.2,-.37),B.add(Z),Pe.add(B)});{const S=new $e({color:10197651,roughness:.95,envMapIntensity:.3});for(const E of Se){const B=E.w/2,N=E.l/2,Z=E.h1,W=[-B,0,-N],G=[B,0,-N],fe=[B,0,N],le=[-B,0,N],ve=[B,Z,N],me=[-B,Z,N],Oe=[W,me,ve,W,ve,G,le,fe,ve,le,ve,me,G,ve,fe,W,le,me].flat(),ft=new Rn;ft.setAttribute("position",new on(Oe,3)),ft.computeVertexNormals();const Ge=new Ut(ft,S);Ge.castShadow=!0,Ge.receiveShadow=!0,Ge.position.set(E.x,0,E.z),Ge.rotation.y=E.yaw,d.add(Ge)}}{const E=o(0,1,0),B=new Li(.12,.24,1,7).translate(0,.5,0),N=new hc(1,1,8).translate(0,.5,0),Z=new kl(1,1),W=new $e({color:6967608,roughness:1,envMapIntensity:.2}),G=new $e({color:16777215,roughness:1,envMapIntensity:.25});G.onBeforeCompile=Ft=>{Ft.uniforms.uT=g,Ft.vertexShader=`uniform float uT;
`+Ft.vertexShader.replace("#include <begin_vertex>",`#include <begin_vertex>
        #ifdef USE_INSTANCING
          vec4 wpo = instanceMatrix * vec4(0.0,0.0,0.0,1.0);
          float sw = sin(uT * 1.1 + wpo.x * 0.21 + wpo.z * 0.17);
          transformed.x += sw * 0.05 * max(position.y, 0.0);
          transformed.z += cos(uT * 0.9 + wpo.x * 0.13) * 0.04 * max(position.y, 0.0);
        #endif`)};const fe=new so(B,W,190),le=[0,1,2].map(()=>new so(N,G,190)),ve=new so(Z,G,380),me=new zt,Oe=new ni,ft=o(),Ge=o(),Dt=new it,wt=[];for(const Ft of Ve)wt.push([Ft[0],Ft[1],.8]);let Pt=0;for(;wt.length<190&&Pt++<5e3;){const Ft=Math.random()*u,Dn=l(730,900),sn=Math.cos(Ft)*Dn,ln=Math.sin(Ft)*Dn;if(Ae(sn,ln)||Me(sn,ln)!=="GRASS")continue;let _i=!1;for(const zn of Se)Math.hypot(sn-zn.x,ln-zn.z)<30&&(_i=!0);_i||wt.push([sn,ln,1])}let dn=0,cn=0,xn=0;for(const[Ft,Dn,sn]of wt){const ln=ge(Ft,Dn);Oe.setFromAxisAngle(E,Math.random()*u);const _i=l(1.6,2.6)*sn;if(Ge.set(Ft,ln-.1,Dn),ft.set(l(.8,1.2),_i,l(.8,1.2)),me.compose(Ge,Oe,ft),fe.setMatrixAt(dn++,me),Math.random()<.68){const zn=l(4.5,7.5)*sn,In=l(1.7,2.6),vi=ln+_i*.35,Mi=[[0,.55,1],[.3,.42,.75],[.6,.34,.48]];for(let ri=0;ri<3;ri++){const[Cs,mn,rn]=Mi[ri];Ge.set(Ft,vi+zn*Cs,Dn),ft.set(In*rn,zn*mn,In*rn),me.compose(Ge,Oe,ft),le[ri].setMatrixAt(cn,me)}Dt.setHSL(.26+Math.random()*.05,.28+Math.random()*.12,.17+Math.random()*.07),le.forEach((ri,Cs)=>ri.setColorAt(cn,Dt.clone().offsetHSL(0,0,Cs*.015))),cn++}else{const zn=l(1.6,2.6)*sn,In=l(2.4,3.6);Ge.set(Ft,ln+_i+In*.45,Dn),ft.set(zn,In*.62,zn),me.compose(Ge,Oe,ft),ve.setMatrixAt(xn*2,me),Ge.set(Ft+l(-.9,.9),ln+_i+In*.85,Dn+l(-.9,.9)),ft.set(zn*.62,In*.45,zn*.62),me.compose(Ge,Oe,ft),ve.setMatrixAt(xn*2+1,me),Dt.setHSL(.21+Math.random()*.06,.35,.26+Math.random()*.08),ve.setColorAt(xn*2,Dt),ve.setColorAt(xn*2+1,Dt.clone().offsetHSL(0,0,.03)),xn++}}fe.count=dn,le.forEach(Ft=>Ft.count=cn),ve.count=xn*2,[fe,...le,ve].forEach(Ft=>{Ft.castShadow=!0,Ft.receiveShadow=!0,d.add(Ft)})}const re=[];{const S=new hc(.22,.55,10);S.translate(0,.275,0);const E=new $e({color:14701087,roughness:.6,envMapIntensity:.35}),B=(N,Z)=>{const W=new Ut(S,E);W.castShadow=!0,d.add(W),re.push({mesh:W,home:o(N,lt(N,Z),Z),p:o(N,lt(N,Z),Z),v:o(),q:new ni,cw:o(),cool:0})};for(let N=0;N<14;N++){const Z=N/14*u;B(Math.cos(Z)*30,Math.sin(Z)*30)}for(let N=0;N<8;N++)B(N%2?2.4:-2.4,120+N*18)}function F(){for(const S of re)S.p.copy(S.home),S.v.set(0,0,0),S.q.identity(),S.cw.set(0,0,0),S.cool=0,S.mesh.position.copy(S.p),S.mesh.quaternion.copy(S.q)}const xt=new Map;function Ct(S){let E=xt.get(S);return E||(E=$S(S,16777215),xt.set(S,E)),E}const U=14,y=26,$=[],ie=[];function de(S){const E=[];return S.traverse(B=>{B.userData?.wheelSpin&&E.push(B)}),E}function Le(){const S=xf(),E=Ct(S),B=Qd(E,Cr[Math.random()*Cr.length|0]),N=Math.random()<.5?"z":"x",Z=pn[Math.random()*pn.length|0],W=Math.random()<.5?1:-1,G=N==="z"?-3.5*W:3.5*W,fe=l(-520,520),le={grp:B,axis:N,street:Z,dir:W,lane:G,speed:l(4,8),vmax:l(9,14),stopT:0,lastS:null,yaw:N==="z"?W>0?0:Math.PI:W>0?Math.PI/2:-Math.PI/2,x:N==="z"?Z+G:fe,z:N==="z"?fe:Z+G,spins:de(B)};B.position.set(le.x,.03,le.z),B.rotation.y=le.yaw,d.add(B),$.push(le)}let ke=!1;function pe(){if(!ke){ke=!0;let S=0;const E=vt.slice();for(let B=E.length-1;B>0;B--){const N=Math.random()*(B+1)|0,Z=E[B];E[B]=E[N],E[N]=Z}for(const B of E){if(S>=y)break;if(Math.random()<.35)continue;const N=xf(),Z=Ct(N),W=Qd(Z,Cr[Math.random()*Cr.length|0]);W.position.set(B[0],Be*.2+.03,B[1]),W.rotation.y=B[2],W.traverse(G=>{G.castShadow=!1,G.receiveShadow=!0}),Pe.add(W),ie.push({x:B[0],z:B[1],yaw:B[2]}),S++}}for(;$.length<U;)Le()}const xe=new Vn;d.add(xe);let Ce=null,rt=s.initialPaint??14240282;const Xe=new Rh(16772811,0,110,.44,.55,1.6),ze=new Rh(16772811,0,110,.44,.55,1.6),ot=new On,_t=new On;Xe.target=ot,ze.target=_t,xe.add(Xe,ze,ot,_t);const It=new bl(16722448,0,8,2),Y=new bl(16722448,0,8,2);xe.add(It,Y);let Ue=!1,ye=!0;const qe=[{name:"NORMAL",muT:1.25,muG:.55,pkF:.115,pkR:.115,paF:.15,paR:.15,assist:!0,steerMax:.5,steerFade:26,coup:.9,upLo:2800,upHi:6400,shift:.22,suspK:1,suspD:1,dfd:.55,tcCap:.4},{name:"DRIFT",muT:1.22,muG:.6,pkF:.1,pkR:.128,paF:.18,paR:.11,assist:!1,steerMax:.68,steerFade:33,coup:1.15,upLo:3800,upHi:7300,shift:.1,suspK:1.06,suspD:1.1,dfd:.42,tcCap:0},{name:"RALLY",muT:1.02,muG:1,pkF:.105,pkR:.12,paF:.165,paR:.125,assist:!1,steerMax:.62,steerFade:30,coup:1.05,upLo:3400,upHi:6900,shift:.14,suspK:.72,suspD:.8,dfd:.45,tcCap:0},{name:"ARCADE",muT:1.6,muG:1.2,pkF:.13,pkR:.13,paF:.19,paR:.19,assist:!0,steerMax:.55,steerFade:29,coup:1.35,upLo:4200,upHi:7600,shift:.09,suspK:1.15,suspD:1.15,dfd:1.05,tcCap:.25}];let Ke=0;const we=.3,dt=-.02,ct=[[.88,-.3,2.3],[-.88,-.3,2.3],[.9,-.3,-2.28],[-.9,-.3,-2.28],[.62,.64,.9],[-.62,.64,.9],[.62,.64,-1],[-.62,.64,-1]];let hn=ct.map(S=>o(S[0],S[1],S[2]));const Yt=[[900,360],[2e3,480],[3200,545],[4500,570],[6200,570],[6800,545],[7400,515],[7900,470]];function Ai(S){if(S<=Yt[0][0])return Yt[0][1];for(let E=1;E<Yt.length;E++)if(S<=Yt[E][0]){const B=Yt[E-1],N=Yt[E];return B[1]+(N[1]-B[1])*(S-B[0])/(N[0]-B[0])}return Yt[Yt.length-1][1]}const bi=S=>Math.sin(1.65*Math.atan(1.7*S));let ht=zs[s.initialVehicle??"gt"],ii=ht.mass,lr=62e3,cs=5600,bs=7400,$i=1.15,En=ht.wheelR,si=qa+En;const Zi=o(2600,3050,560);let Ts=1,ur=.4,Es=1,hr=1,$n=[],Vi=2.68,fr=1.34,Nr=-1.34,ls=-.2666,Dr=.98,Ur=2.26,Fr=1.5;function C(){const S=ht.wheelbase/2,E=-S,B=ht.track/2*.985,N=ht.track/2*1.01,Z=ii/1350,W=1360*Z,G=620*Z,fe=2e4*Z,le=14500*Z,ve=ht.drivetrain,me=ve==="fwd"?[.5,.5,0,0]:ve==="awd"?[.27,.27,.23,.23]:[0,0,.5,.5],Oe=(ft,Ge,Dt,wt,Pt,dn)=>({x:ft,z:Ge,steer:Dt,driveW:wt,brake:Pt,arb:dn,driven:wt>0});return[Oe(B,S,1,me[0],W,fe),Oe(-B,S,1,me[1],W,fe),Oe(N,E,0,me[2],G,le),Oe(-N,E,0,me[3],G,le)]}function q(S){oe(zs[S])}function oe(S){ht=S,ii=ht.mass;const E=ii/1350;lr=62e3*E,cs=5600*E,bs=7400*E,$i=1.15*Math.pow(ht.wheelR/.33,2)*Math.pow(E,.35),En=ht.wheelR,si=qa+En,Zi.set(ii*(ht.width*ht.width+ht.height*ht.height)/12,ii*(ht.length*ht.length+ht.width*ht.width)/12,ii*(ht.length*ht.length+ht.height*ht.height)/12);const B=Math.max(1,ht.wheelbase/2.68);hn=ct.map(N=>o(N[0]*(ht.width/1.9),N[1]*Math.min(1.1,ht.height/1.25),N[2]*B)),Dr=ht.width/2+.06,Ur=ht.length/2+.06,Fr=ht.height*1.15,Ts=ht.torqueNm/570,ur=ht.drag,Es=ht.downforce,hr=ht.grip,$n=C(),Vi=ht.wheelbase,fr=ht.wheelbase/2,Nr=-ht.wheelbase/2,ls=dt-we+te()}const te=()=>ii*9.81/4/lr,Q=o(),Ne={t:0,surf:"GRASS"};function Je(S,E,B){Ne.t=1/0,Ne.surf="GRASS";let N=!1;const Z=At(S.x,S.z)+(Me(S.x,S.z)==="GRASS"?he(S.x,S.z):0);if(S.y<Z-.001)return Q.set(0,1,0),Ne.t=.001,Ne.surf=Me(S.x,S.z),!0;if(E.y<-1e-4){let W=a(S.y/-E.y,0,B);for(let me=0;me<3;me++){const Oe=At(S.x+E.x*W,S.z+E.z*W);W=a((S.y-Oe)/-E.y,0,B)}const G=S.x+E.x*W,fe=S.z+E.z*W;let le=At(G,fe);const ve=Me(G,fe);ve==="GRASS"&&(le+=he(G,fe)),S.y+E.y*W<=le+.001&&(Q.set(At(G-1.2,fe)-At(G+1.2,fe),2*1.2,At(G,fe-1.2)-At(G,fe+1.2)).normalize(),Ne.t=a((S.y-le)/-E.y,0,B),Ne.surf=ve,N=!0)}for(const W of Se){const G=E.x*W.nx+E.y*W.ny+E.z*W.nz;if(G>=-1e-4)continue;const fe=((W.px-S.x)*W.nx+(W.py-S.y)*W.ny+(W.pz-S.z)*W.nz)/G;if(fe>0&&fe<B&&fe<Ne.t){const le=S.x+E.x*fe,ve=S.z+E.z*fe,me=le-W.x,Oe=ve-W.z,ft=me*W.c-Oe*W.s,Ge=me*W.s+Oe*W.c;Math.abs(ft)<=W.w/2+.05&&Math.abs(Ge)<=W.l/2&&(Q.set(W.nx,W.ny,W.nz),Ne.t=fe,Ne.surf="TARMAC",N=!0)}}return N}const Fe=o(),Qe=o(),nt=o(),St=o(),Rt=o(),st=o(),an=o(),yn=o(),Ht=o(),nn=o(),Ot=o(),_e=o(),Kt=o(),pt=o(),Zn=o(),Ln=o(),Nt=o(),Jn=o(),Bt=new ni,fn=o(0,1,0);function Ri(){return{comp:0,compV:0,contact:!1,cp:o(),hard:o(),n:o(),wR:o(),Fs:0,Fx:0,Fy:0,s:0,kappa:0,kF:0,aF:0,surf:"TARMAC"}}const Vt={},Ie={pos:o(0,si,-12),quat:new ni,vel:o(),w:o(),wSpin:[0,0,0,0],wAngle:[0,0,0,0],heat:[0,0,0,0],wc:[Ri(),Ri(),Ri(),Ri()],prevContact:[!1,!1,!1,!1],abs:[1,1,1,1],tcS:0,kickT:0,rpm:900,cutT:0,gear:1,mode:"D",shiftT:0,revT:0,steerVal:0,steerAngle:0,ack:[0,0],throttle:0,brakeIn:0,hand:!1,spd:0,reset(){const S=o(0,0,1).applyQuaternion(this.quat),E=Math.atan2(S.x,S.z);this.quat.setFromAxisAngle(fn,E),this.pos.y=lt(this.pos.x,this.pos.z)+si,this.vel.set(0,0,0),this.w.set(0,0,0),this.wSpin=[0,0,0,0],this.gear=1,this.mode="D",this.shiftT=0,this.cutT=0,this.rpm=900,this.tcS=0,this.kickT=0,this.heat=[0,0,0,0];for(const B of this.wc)B.kF=0,B.aF=0;this.abs=[1,1,1,1]},carOBB(S,E,B,N){let Z=!1;const W=Math.cos(B),G=Math.sin(B);for(const fe of hn){if(_e.copy(fe).applyQuaternion(this.quat).add(this.pos),_e.y>Fr)continue;const le=_e.x-S,ve=_e.z-E,me=le*W-ve*G,Oe=le*G+ve*W,ft=Dr-Math.abs(me),Ge=Ur-Math.abs(Oe);if(ft<=0||Ge<=0)continue;let Dt=0,wt=0;ft<Ge?Dt=Math.sign(me)||1:wt=Math.sign(Oe)||1;const Pt=Dt*W+wt*G,dn=-Dt*G+wt*W;Kt.copy(_e).sub(this.pos),pt.copy(this.vel).add(Zn.crossVectors(this.w,Kt));const cn=pt.x*Pt+pt.z*dn;let xn=Math.min(ft,Ge)*26e4+(cn<0?-cn*1e4:0);xn=Math.min(xn,28e4),Ot.set(Pt*xn,0,dn*xn);const Ft=pt.x-cn*Pt,Dn=pt.z-cn*dn,sn=Math.hypot(Ft,Dn);if(sn>.01){const ln=-Math.min(xn*.55,sn*2400);Ot.x+=Ft/sn*ln,Ot.z+=Dn/sn*ln}St.add(Ot),Rt.add(Ln.crossVectors(Kt,Ot)),cn<-3&&(Z=!0)}return Z&&N&&Mo(a(this.spd*.035,.15,.6)),Z},step(S){const E=qe[Ke],B=this.quat;Fe.set(0,1,0).applyQuaternion(B),Qe.set(0,0,1).applyQuaternion(B),nt.set(1,0,0).applyQuaternion(B);const N=this.vel.length(),Z=this.vel.dot(Qe),W=Vt.KeyW||Vt.ArrowUp?1:0,G=Vt.KeyS||Vt.ArrowDown?1:0;let fe=0,le=0;this.mode==="D"?(fe=W,le=G,Z<.8&&G>.5&&W<.1?(this.revT+=S,this.revT>.3&&(this.mode="R",this.revT=0,i("Gearbox · reverse"))):this.revT=0):W>.5?(fe=0,le=1,Z>-.8&&(this.mode="D",i("Gearbox · drive"))):(fe=G,le=0),this.mode==="R"&&Z<-3.2&&(fe=0),this.throttle+=a(fe-this.throttle,-S*8,S*5),this.brakeIn+=a(le-this.brakeIn,-S*10,S*7),this.hand=!!Vt.Space;const ve=(Vt.KeyA||Vt.ArrowLeft?1:0)-(Vt.KeyD||Vt.ArrowRight?1:0),me=ve!==0?3.2:4.6;this.steerVal+=a(ve-this.steerVal,-me*S,me*S);const Oe=E.steerMax*ht.steerFactor/(1+Math.pow(N/E.steerFade,1.5));this.steerAngle=this.steerVal*Oe;const ft=2*Math.abs($n[0].x);let Ge=this.steerAngle,Dt=this.steerAngle;if(Math.abs(this.steerAngle)>.004){const He=Vi/Math.tan(Math.abs(this.steerAngle)),un=Math.atan(Vi/Math.max(.5,He-ft/2)),gt=Math.atan(Vi/(He+ft/2));this.steerAngle>0?(Ge=un,Dt=gt):(Ge=-gt,Dt=-un)}this.ack[0]=Ge,this.ack[1]=Dt;const wt=this.mode==="R"?-3.3:[3.55,2.24,1.55,1.21,1,.83][this.gear-1]*3.7,Pt=$n.map((He,un)=>He.driven?un:-1).filter(He=>He>=0);let dn=0;for(const He of Pt)dn+=this.wSpin[He];const cn=dn/Math.max(1,Pt.length),xn=Math.abs(cn)*Math.abs(wt)*9.5493,Ft=900+this.throttle*2300,Dn=N<6?Math.max(0,Ft-xn):0,sn=a(Math.max(xn,900+Dn*(.4+.6*this.throttle)),900,7900);if(this.rpm+=(sn-this.rpm)*Math.min(1,S*8),this.kickT>0&&(this.kickT-=S),this.shiftT>0)this.shiftT-=S;else if(this.mode==="D"){const He=E.upLo+(E.upHi-E.upLo)*this.throttle;this.rpm>He&&this.gear<6?(this.gear++,this.shiftT=E.shift):this.rpm>7400&&this.gear<6?(this.gear++,this.shiftT=E.shift*.8):this.throttle>.85&&this.gear>1&&this.kickT<=0&&N>5?cn*9.5493*[3.55,2.24,1.55,1.21,1,.83][this.gear-2]*3.7<6600&&(this.gear--,this.shiftT=E.shift*1.1,this.kickT=.8):this.rpm<1500&&this.gear>1&&(this.gear--,this.shiftT=E.shift*.9)}this.cutT>0&&(this.cutT-=S);let ln=Ai(this.rpm)*this.throttle*E.coup*Ts-(this.throttle<.05?30+this.rpm*.018:0);if(this.rpm>7700&&(this.cutT=.08),this.cutT>0&&(ln=0),Ke===1&&this.throttle>.3&&N>8&&Math.max(this.wc[2].kappa,this.wc[3].kappa)>.115*1.4&&(ln+=a((4600-this.rpm)*.12,-260,520)),this.brakeIn<.1&&N<1.8&&(ln+=26*(1-c(.5,1.8,Math.abs(Z)))),this.shiftT>0&&(ln*=.15+.85*(1-this.shiftT/Math.max(E.shift,.01))),E.assist&&E.tcCap>0&&this.mode==="D"){const He=Math.max(this.wc[2].kappa,this.wc[3].kappa),un=a((He-E.pkR*1.5)/(E.pkR*2),0,1);this.tcS+=(un-this.tcS)*Math.min(1,S*14),ln*=1-E.tcCap*this.tcS}else this.tcS*=Math.max(0,1-S*6);const _i=ln*wt*.9,zn=Math.min(420*(Ke===1?1.25:1),60+Math.abs(_i)*.14),In=$n.map(He=>_i*He.driveW);if(ht.drivetrain!=="fwd"){const He=a(26*(this.wSpin[2]-this.wSpin[3]),-zn,zn);In[2]-=He,In[3]+=He}if(ht.drivetrain!=="rwd"){const He=zn*.6,un=a(16*(this.wSpin[0]-this.wSpin[1]),-He,He);In[0]-=un,In[1]+=un}st.copy(Fe).negate();const vi=we+En;for(let He=0;He<4;He++){const un=$n[He],gt=this.wc[He];if(gt.hard.copy(this.pos).addScaledVector(nt,un.x).addScaledVector(Fe,dt).addScaledVector(Qe,un.z),Je(gt.hard,st,vi)){const yi=vi-Ne.t;yi>0?(gt.contact=!0,gt.comp=Math.min(yi,we),gt.cp.copy(gt.hard).addScaledVector(st,Ne.t),gt.n.copy(Q),gt.surf=Ne.surf,_e.copy(gt.hard).sub(this.pos),an.copy(this.vel).add(Kt.crossVectors(this.w,_e)),gt.compV=an.dot(st)):(gt.contact=!1,gt.comp=0,gt.compV=0)}else gt.contact=!1,gt.comp=0,gt.compV=0}St.set(0,-9.81*ii,0),Rt.set(0,0,0);const Mi=E.suspK,ri=E.suspD;for(const[He,un]of[[0,1],[2,3]]){const gt=this.wc[He],yi=this.wc[un],Bi=gt.comp-yi.comp,Si=[[gt,Bi*$n[He].arb],[yi,-Bi*$n[un].arb]];for(const[Yn]of Si){let Kn=Yn.comp*(lr*Mi+Yn.comp*48e3*Math.min(2,ii/1350));Kn+=a((Yn.compV>0?cs:bs)*ri*Yn.compV,-5600*ri*(ii/1350),6800*ri*(ii/1350)),Yn.comp>.245&&(Kn+=(Yn.comp-.245)*17e4),Kn=a(Kn,0,32e3*Math.max(1,ii/1350)),Yn.Fs=Kn,Yn.contact&&(Ot.copy(Fe).multiplyScalar(Kn),St.add(Ot),_e.copy(Yn.hard).sub(this.pos),Rt.add(Kt.crossVectors(_e,Ot)))}}const Cs=this.brakeIn,mn=this.hand,rn=1-.32*M.wet;for(let He=0;He<4;He++){const un=$n[He],gt=this.wc[He],yi=un.driven?E.pkR:E.pkF,Bi=un.driven?E.paR:E.paF;E.assist&&gt.contact&&Cs>.3&&N>4&&Math.abs(this.wSpin[He])<.8?this.abs[He]+=(.22-this.abs[He])*Math.min(1,S*40):this.abs[He]+=(1-this.abs[He])*Math.min(1,S*10);const Si=un.brake*Cs*this.abs[He]+(mn&&un.driven?2900*(ii/1350):0);if(!gt.contact){this.wSpin[He]+=In[He]/$i*S;const La=Si*S/$i;Math.abs(this.wSpin[He])<La?this.wSpin[He]=0:this.wSpin[He]-=Math.sign(this.wSpin[He])*La,gt.Fx=0,gt.Fy=0,gt.s=0,this.heat[He]=Math.max(0,this.heat[He]-S*.05);continue}const Yn=un.steer?this.ack[He]:0;yn.copy(Qe).multiplyScalar(Math.cos(Yn)).addScaledVector(nt,Math.sin(Yn)),yn.addScaledVector(gt.n,-yn.dot(gt.n)).normalize(),Ht.crossVectors(yn,gt.n).normalize(),gt.wR.copy(Ht),_e.copy(gt.cp).sub(this.pos),nn.copy(this.vel).add(Kt.crossVectors(this.w,_e));const Kn=nn.dot(yn),Lo=nn.dot(Ht),Xr=Math.max(Math.abs(Kn),2),vr=(this.wSpin[He]*En-Kn)/Xr,Nc=Math.atan2(-Lo,Math.abs(Kn)+.5),Ca=Math.max(Math.abs(Kn),2.2);gt.kF+=(vr-gt.kF)*a(Ca*S/.12,0,1),gt.aF+=(Nc-gt.aF)*a(Ca*S/.26,0,1);const qr=gt.kF/yi,Pa=gt.aF/Bi,No=Math.hypot(qr,Pa);gt.s=No,gt.kappa=vr,this.heat[He]=a(this.heat[He]+Math.abs(No)*N*S*.012-S*.045,0,1);const Dc=gt.Fs,df=(gt.surf==="GRASS"?E.muG:E.muT)*hr*rn*(.9+.1*this.heat[He])*a(1-12e-6*(Dc-3200),.78,1.05);let Uc=0,Yl=0;if(No>1e-4){const La=Dc*df*bi(No);Uc=La*qr/No,Yl=La*Pa/No}gt.Fx=Uc,gt.Fy=Yl,Uc+=(gt.surf==="GRASS"?-.055:-.011)*Dc*a(Kn/3,-1,1),Ot.copy(yn).multiplyScalar(Uc).addScaledVector(Ht,Yl),St.add(Ot),Rt.add(Kt.crossVectors(_e,Ot));const L0=Math.min(df*Dc*2.4*En/Xr/yi,25e3),pf=S*En*En*L0/$i;let Ia=(this.wSpin[He]*(1+pf)+S*(In[He]-gt.Fx*En)/$i)/(1+pf);const mf=Si*S/$i;Math.abs(Ia)<mf?Ia=0:Ia-=Math.sign(Ia)*mf,this.wSpin[He]=Ia,!this.prevContact[He]&&gt.compV>3.5&&Mo(a((gt.compV-3)/9,.12,1)*.7),this.prevContact[He]=!0}for(const He of hn){_e.copy(He).applyQuaternion(B).add(this.pos);const un=We(_e.x,_e.z),gt=un.h-_e.y;if(gt>0){Kt.copy(_e).sub(this.pos),pt.copy(this.vel).add(Zn.crossVectors(this.w,Kt));const yi=pt.dot(un.n);let Bi=gt*48e3+(yi<0?-yi*3800:0);Bi=Math.min(Bi,32e3*Math.max(1,ii/1350)),Ot.copy(un.n).multiplyScalar(Bi),pt.addScaledVector(un.n,-yi);const Si=pt.length();Si>.01&&(pt.multiplyScalar(1/Si),Ot.addScaledVector(pt,-Math.min(Bi*.55,Si*2200))),St.add(Ot),Rt.add(Ln.crossVectors(Kt,Ot))}}for(const He of hn){_e.copy(He).applyQuaternion(B).add(this.pos);const un=mi(_e.x,_e.z)??mi(_e.x-zi,_e.z)??mi(_e.x+zi,_e.z)??mi(_e.x,_e.z-zi)??mi(_e.x,_e.z+zi);if(!(!un||!un.blds.length))for(const gt of un.blds){if(_e.y>gt.top)continue;const yi=_e.x-gt.x,Bi=_e.z-gt.z,Si=gt.hx-Math.abs(yi),Yn=gt.hz-Math.abs(Bi);if(Si<=0||Yn<=0)continue;Kt.copy(_e).sub(this.pos),pt.copy(this.vel).add(Zn.crossVectors(this.w,Kt));let Kn=0,Lo=0;Si<Yn?Kn=Math.sign(yi)||1:Lo=Math.sign(Bi)||1;const Xr=pt.x*Kn+pt.z*Lo;let vr=Math.min(Si,Yn)*25e4+(Xr<0?-Xr*9e3:0);vr=Math.min(vr,3e5),Ot.set(Kn*vr,0,Lo*vr);const Nc=pt.x-Xr*Kn,Ca=pt.z-Xr*Lo,qr=Math.hypot(Nc,Ca);if(qr>.01){const Pa=-Math.min(vr*.6,qr*2500);Ot.x+=Nc/qr*Pa,Ot.z+=Ca/qr*Pa}St.add(Ot),Rt.add(Ln.crossVectors(Kt,Ot))}}if(N>.4){for(const He of $)Math.abs(He.x-this.pos.x)>12||Math.abs(He.z-this.pos.z)>12||this.carOBB(He.x,He.z,He.yaw,He)&&(He.stopT=1.6);for(const He of ie)Math.abs(He.x-this.pos.x)>12||Math.abs(He.z-this.pos.z)>12||this.carOBB(He.x,He.z,He.yaw,null)}Ot.copy(this.vel).multiplyScalar(-ur*N),St.add(Ot);const Hn=E.dfd*Es*N*N;if(_e.copy(this.pos).addScaledVector(Qe,fr),Ot.copy(Fe).multiplyScalar(-Hn*.42),St.add(Ot),Rt.add(Kt.crossVectors(pt.copy(_e).sub(this.pos),Ot)),_e.copy(this.pos).addScaledVector(Qe,Nr),Ot.copy(Fe).multiplyScalar(-Hn*.58),St.add(Ot),Rt.add(Kt.crossVectors(pt.copy(_e).sub(this.pos),Ot)),this.vel.addScaledVector(St,S/ii),N<.5&&this.throttle<.05&&this.brakeIn<.05&&!this.hand&&this.vel.multiplyScalar(Math.max(0,1-5*S)),Nt.set(Rt.dot(nt),Rt.dot(Fe),Rt.dot(Qe)),Jn.copy(Nt).divide(Zi),_e.set(0,0,0).addScaledVector(nt,Jn.x).addScaledVector(Fe,Jn.y).addScaledVector(Qe,Jn.z),this.w.addScaledVector(_e,S).multiplyScalar(Math.max(0,1-.05*S)),this.pos.addScaledVector(this.vel,S),this.pos.y<-50){this.reset();return}const Ps=.5*S;Bt.set(this.w.x*Ps,this.w.y*Ps,this.w.z*Ps,0).multiply(B),B.x+=Bt.x,B.y+=Bt.y,B.z+=Bt.z,B.w+=Bt.w,B.normalize();for(let He=0;He<4;He++)this.wAngle[He]+=this.wSpin[He]*S;this.spd=this.vel.length(),isFinite(this.pos.x)||this.reset()}},gn=(()=>{const E=new Float32Array(50400),B=new Float32Array(4200*4),N=new Uint32Array(4200*6);for(let fe=0;fe<4200;fe++){const le=fe*4;N.set([le,le+1,le+2,le,le+2,le+3],fe*6)}const Z=new Rn;Z.setAttribute("position",new Fn(E,3)),Z.setAttribute("aA",new Fn(B,1)),Z.setIndex(new Fn(N,1));const W=new Ut(Z,new ji({transparent:!0,depthWrite:!1,side:pi,vertexShader:"attribute float aA; varying float vA; void main(){ vA = aA; gl_Position = projectionMatrix * modelViewMatrix * vec4(position,1.0); }",fragmentShader:"varying float vA; void main(){ gl_FragColor = vec4(0.045,0.045,0.05, vA * 0.72); }"}));W.frustumCulled=!1,W.renderOrder=3,d.add(W);let G=0;return{st:[0,1,2,3].map(()=>({on:!1,lastL:o(),lastR:o()})),add(fe,le,ve,me,Oe){const ft=G*12,Ge=G*4;E.set([fe.x,fe.y,fe.z,le.x,le.y,le.z,me.x,me.y,me.z,ve.x,ve.y,ve.z],ft),B[Ge]=B[Ge+1]=B[Ge+2]=B[Ge+3]=Oe,Z.attributes.position.needsUpdate=!0,Z.attributes.aA.needsUpdate=!0,G=(G+1)%4200}}})(),Gi=K(64,64,S=>{const E=S.createRadialGradient(32,32,2,32,32,30);E.addColorStop(0,"rgba(255,255,255,.9)"),E.addColorStop(1,"rgba(255,255,255,0)"),S.fillStyle=E,S.fillRect(0,0,64,64)});function us(S,E,B){const N=new Float32Array(S*3).fill(-9999),Z=new Float32Array(S),W=new Float32Array(S),G=new Float32Array(S*3),fe=new Float32Array(S),le=new Float32Array(S),ve=new Rn;ve.setAttribute("position",new Fn(N,3)),ve.setAttribute("aSize",new Fn(Z,1)),ve.setAttribute("aA",new Fn(W,1));const me=new ji({transparent:!0,depthWrite:!1,uniforms:{uTex:{value:Gi},uColor:{value:new it(E)},uAlpha:{value:B}},vertexShader:`attribute float aSize; attribute float aA; varying float vA;
        void main(){ vA = aA; vec4 mv = modelViewMatrix * vec4(position,1.0);
        gl_PointSize = aSize * (200.0 / max(1.0, -mv.z)); gl_Position = projectionMatrix * mv; }`,fragmentShader:`uniform sampler2D uTex; uniform vec3 uColor; uniform float uAlpha; varying float vA;
        void main(){ vec4 t = texture2D(uTex, gl_PointCoord); gl_FragColor = vec4(uColor, t.a * vA * uAlpha); }`}),Oe=new Yp(ve,me);Oe.frustumCulled=!1,Oe.renderOrder=4,d.add(Oe);let ft=0;return{spawn(Ge,Dt,wt){const Pt=ft;ft=(ft+1)%S,N[Pt*3]=Ge.x+l(-.2,.2),N[Pt*3+1]=Ge.y+.1,N[Pt*3+2]=Ge.z+l(-.2,.2),G[Pt*3]=Dt.x*.4+l(-1,1),G[Pt*3+1]=Dt.y*.3+l(.8,2),G[Pt*3+2]=Dt.z*.4+l(-1,1),fe[Pt]=0,le[Pt]=l(.9,1.7),Z[Pt]=.8*wt+.5},update(Ge){let Dt=!1;for(let wt=0;wt<S;wt++){if(fe[wt]>=le[wt])continue;if(Dt=!0,fe[wt]+=Ge,fe[wt]>=le[wt]){W[wt]=0,N[wt*3+1]=-9999;continue}N[wt*3]+=G[wt*3]*Ge,N[wt*3+1]+=G[wt*3+1]*Ge,N[wt*3+2]+=G[wt*3+2]*Ge;const Pt=Math.max(0,1-1.4*Ge);G[wt*3]*=Pt,G[wt*3+2]*=Pt,G[wt*3+1]=G[wt*3+1]*Pt+Ge;const dn=fe[wt]/le[wt];W[wt]=(1-dn)*.38,Z[wt]+=Ge*2.6}Dt&&(ve.attributes.position.needsUpdate=!0,ve.attributes.aSize.needsUpdate=!0,ve.attributes.aA.needsUpdate=!0)}}}const _c=us(320,14210253,1),vc=us(260,14674418,.8),mo=1300,ws=new Float32Array(mo*2*3),hs=new Float32Array(mo*3),Ui=26,go=16;for(let S=0;S<mo;S++)hs[S*3]=l(-Ui,Ui),hs[S*3+1]=l(0,go),hs[S*3+2]=l(-Ui,Ui);const As=new Rn;As.setAttribute("position",new Fn(ws,3));const xo=new tf({color:12374240,transparent:!0,opacity:.32,depthWrite:!1}),Ks=new Xp(As,xo);Ks.frustumCulled=!1,Ks.visible=!1,d.add(Ks);const Ti=[];for(let S=0;S<4;S++){const E=new bl(16766874,0,34,1.8);E.visible=!1,d.add(E),Ti.push(E)}const Gn=[];let $t=null,Or=null,Ci=null,fs=null,dr=null,_o=null,ds=!1,vo=0;function Mc(){if(!$t)try{$t=new AudioContext,Ci=$t.createGain(),Ci.gain.value=.5;const S=$t.createDynamicsCompressor();Ci.connect(S),S.connect($t.destination);const E=$t.createBuffer(1,$t.sampleRate*2,$t.sampleRate),B=E.getChannelData(0);for(let Ge=0;Ge<B.length;Ge++)B[Ge]=Math.random()*2-1;Or=E;const N=$t.createOscillator();N.type="sawtooth";const Z=$t.createOscillator();Z.type="square";const W=$t.createGain();W.gain.value=0;const G=$t.createBiquadFilter();G.type="lowpass",G.frequency.value=600,G.Q.value=1.5,N.connect(G),Z.connect(G),G.connect(W),W.connect(Ci),N.start(),Z.start(),fs={o1:N,o2:Z,og:W,of:G};const fe=$t.createBufferSource();fe.buffer=E,fe.loop=!0;const le=$t.createBiquadFilter();le.type="bandpass",le.frequency.value=480,le.Q.value=.5;const ve=$t.createGain();ve.gain.value=0,fe.connect(le),le.connect(ve),ve.connect(Ci),fe.start(),dr={wg:ve,wf:le};const me=$t.createBufferSource();me.buffer=E,me.loop=!0;const Oe=$t.createBiquadFilter();Oe.type="bandpass",Oe.frequency.value=1100,Oe.Q.value=1.4;const ft=$t.createGain();ft.gain.value=0,me.connect(Oe),Oe.connect(ft),ft.connect(Ci),me.start(),_o={sg:ft,sf:Oe}}catch{$t=null}}function Mo(S){if(!$t||ds||!Ci)return;const E=$t.currentTime,B=$t.createOscillator();B.type="triangle",B.frequency.setValueAtTime(140,E),B.frequency.exponentialRampToValueAtTime(40,E+.14);const N=$t.createGain();if(N.gain.setValueAtTime(Math.min(.9,S),E),N.gain.exponentialRampToValueAtTime(.001,E+.22),B.connect(N),N.connect(Ci),B.start(E),B.stop(E+.25),!Or)return;const Z=$t.createBufferSource();Z.buffer=Or;const W=$t.createBiquadFilter();W.type="lowpass",W.frequency.value=900;const G=$t.createGain();G.gain.setValueAtTime(Math.min(.7,S*.8),E),G.gain.exponentialRampToValueAtTime(.001,E+.18),Z.connect(W),W.connect(G),G.connect(Ci),Z.start(E)}function yc(){if(!$t||!fs||!dr||!_o||!Ci)return;const S=$t.currentTime,E=ds||zr,B=Ie.rpm/8e3;fs.o1.frequency.setTargetAtTime(38+B*205,S,.04),fs.o2.frequency.setTargetAtTime(19+B*102,S,.04),fs.of.frequency.setTargetAtTime(240+B*2500,S,.06),fs.og.gain.setTargetAtTime(E?0:.04+Ie.throttle*.07+B*.045,S,.09),dr.wg.gain.setTargetAtTime(E?0:Math.min(.16,Ie.spd*.0032),S,.15),_o.sg.gain.setTargetAtTime(E?0:vo*.16,S,.06),_o.sf.frequency.setTargetAtTime(800+Ie.spd*14,S,.1),Ci.gain.setTargetAtTime(ds?0:.5,S,.1)}function fa(S){const E=(M.time-6)/12*Math.PI,B=1.15;x.set(Math.cos(B)*Math.cos(E),Math.sin(E),Math.sin(B)*Math.cos(E)).normalize();const N=c(-.04,.22,x.y),Z=1-N,W=Math.exp(-Math.pow((x.y-.03)/.11,2)),G=M.weather==="overcast"?1:M.weather==="rain"?.85:0;M.day=N,M.night=Z,M.wet=M.weather==="rain"?1:M.weather==="overcast"?.22:0,A.sunDir.value.copy(x),A.uDay.value=N,A.uDusk.value=W*(1-G*.7),A.uNight.value=Z,A.uOvercast.value=G,D.position.copy(Ie.pos).addScaledVector(x,210),D.target.position.copy(Ie.pos),D.intensity=2.15*N*(1-.6*G)+.16*Z;const fe=new it;x.y>.18?fe.setHex(16773855):fe.setHex(16757361),fe.lerp(new it(10466520),Z),D.color.copy(fe),R.intensity=.16+.42*N,R.color.setHex(12373990).lerp(new it(2240586),Z),R.groundColor.setHex(7828812).lerp(new it(1316380),Z);const le=new it;le.setHex(15128494).lerp(new it(724502),Z),W>.2&&le.lerp(new it(14715466),W*.6*(1-G)),G>0&&le.lerp(new it(10133670).multiplyScalar(.25+.75*N),G*.75),w.color.copy(le);const ve=M.weather==="rain"?110:M.weather==="overcast"?170:340,me=M.weather==="rain"?720:M.weather==="overcast"?1e3:1600;w.near=ve*(.55+.45*N),w.far=me*(.6+.4*N),f.toneMappingExposure=.95+.35*Z;for(const Oe of J)Oe.roughness=.96-.5*M.wet,Oe.metalness=.14*M.wet,Oe.envMapIntensity=.35+.85*M.wet;Ks.visible=M.weather==="rain",xo.opacity=.3,ye&&(Ue=x.y<.06||M.weather!=="clear"),da(),js()}let Ji=0;function js(){Ji&&window.clearTimeout(Ji),Ji=window.setTimeout(()=>{Ji=0,O()},160)}function da(){const S=M.night*90;if(S<1){for(const E of Ti)E.visible=!1;return}Gn.length=0;for(const E of ut){const B=(E.x-Ie.pos.x)**2+(E.z-Ie.pos.z)**2;B<3600&&Gn.push({p:E,d:B})}Gn.sort((E,B)=>E.d-B.d);for(let E=0;E<Ti.length;E++){const B=Ti[E],N=Gn[E];if(!N){B.visible=!1;continue}B.visible=!0,B.position.set(N.p.x,N.p.y,N.p.z),B.intensity=S}}function pa(S){if(Po=null,Zs=[],Ce){xe.remove(Ce.root);for(const G of Ce.rigs)xe.remove(G.pivot);Ce.root.traverse(G=>{const fe=G;fe.isMesh&&fe.geometry.dispose()})}const E=WS(S,rt,!0);Ce=E,xe.add(E.root),E.root.position.y=-E.gy,E.rigs.forEach(G=>{G.pivot.parent?.remove(G.pivot),G.pivot.position.set(G.x,ls,G.z),xe.add(G.pivot)});const[B,N]=E.headAnchors;Xe.position.set(B.x,B.y-E.gy,B.z-.1),ze.position.set(N.x,N.y-E.gy,N.z-.1),ot.position.set(B.x,B.y-E.gy,B.z+34),_t.position.set(N.x,N.y-E.gy,N.z+34);const[Z,W]=E.tailAnchors;It.position.set(Z.x,Z.y-E.gy,Z.z),Y.position.set(W.x,W.y-E.gy,W.z)}function Wl(S){q(S),pa(S),Ie.reset(),s.onReady?.(ht)}function ne(S){rt=S,Ce&&Ce.materials.paint.color.setHex(S);for(const E of Zs)E.color.setHex(S)}const pr=["Chase","Cockpit","Hood","Bumper","Cinema","Orbit"];let Fi=0,Wi=.6,gi=.35,Br=9,Qi=!1,yo=0,mr=0;const Oi=o(0,2.6,-8),$s=o(0,.8,0),Sc=o(),ma=o();function Xl(S){const E=Fe.set(0,1,0).applyQuaternion(Ie.quat),B=Qe.set(0,0,1).applyQuaternion(Ie.quat),N=Ie.spd,Z=a((N-26)/60,0,1)*.05,W=Ce?Ce.gy:qa+En;if(Fi===0){_e.copy(B).multiplyScalar(-(6.6+N*.06)),Kt.copy(E).multiplyScalar(2.5+N*.012),pt.copy(Ie.pos).add(_e).add(Kt),Oi.lerp(pt,1-Math.exp(-S*5));const G=lt(Oi.x,Oi.z)+.6;Oi.y<G&&(Oi.y=G),m.position.copy(Oi),Z>0&&(m.position.x+=(Math.random()-.5)*Z,m.position.y+=(Math.random()-.5)*Z*.5,m.position.z+=(Math.random()-.5)*Z),_e.copy(Ie.pos).addScaledVector(E,1).addScaledVector(B,2.4),$s.lerp(_e,1-Math.exp(-S*10)),m.lookAt($s),m.fov=62+a(N-18,0,50)*.22,m.updateProjectionMatrix()}else if(Fi===1){const G=ht.height*.78-W;m.position.copy(Ie.pos).addScaledVector(E,G).addScaledVector(nt.set(1,0,0).applyQuaternion(Ie.quat),.36*(ht.width/1.9)),m.position.addScaledVector(B,.12),_e.copy(Ie.pos).addScaledVector(B,22).addScaledVector(E,G+.1),m.lookAt(_e),m.fov=74,m.updateProjectionMatrix(),Oi.copy(m.position),$s.copy(_e)}else if(Fi===2)m.position.copy(Ie.pos).addScaledVector(E,ht.height*.52-W).addScaledVector(B,ht.length*.18),Z>0&&(m.position.y+=(Math.random()-.5)*Z*.6,m.position.x+=(Math.random()-.5)*Z*.4),_e.copy(Ie.pos).addScaledVector(B,14).addScaledVector(E,ht.height*.5-W),m.lookAt(_e),m.fov=70,m.updateProjectionMatrix(),Oi.copy(m.position),$s.copy(_e);else if(Fi===3)m.position.copy(Ie.pos).addScaledVector(E,.42-W).addScaledVector(B,ht.length/2-.05),_e.copy(Ie.pos).addScaledVector(B,16).addScaledVector(E,.42-W),m.lookAt(_e),m.fov=68,m.updateProjectionMatrix(),Oi.copy(m.position),$s.copy(_e);else if(Fi===4){const G=Wi+g.value*.22,fe=Math.max(8,ht.length*1.7),le=Math.cos(.32);_e.set(Math.sin(G)*le,.32,Math.cos(G)*le).multiplyScalar(fe),m.position.copy(Ie.pos).add(_e).addScaledVector(E,.5);const ve=lt(m.position.x,m.position.z)+.45;m.position.y<ve&&(m.position.y=ve),m.lookAt(Kt.copy(Ie.pos).addScaledVector(E,.5)),m.fov=50,m.updateProjectionMatrix(),Oi.copy(m.position),$s.copy(Ie.pos)}else{Qi||(Wi+=S*.08);const G=Math.cos(gi),fe=Math.sin(gi);_e.set(Math.sin(Wi)*G,fe,Math.cos(Wi)*G).multiplyScalar(Br),m.position.copy(Ie.pos).add(_e).addScaledVector(E,.4);const le=lt(m.position.x,m.position.z)+.4;m.position.y<le&&(m.position.y=le),m.lookAt(Kt.copy(Ie.pos).addScaledVector(E,.6)),m.fov=55,m.updateProjectionMatrix(),Oi.copy(m.position),$s.copy(Ie.pos)}}const Xt=t.getContext("2d");t.width=232,t.height=132;const Qn=n.getContext("2d");n.width=118,n.height=118;const gr=[];let kr=0,Rs=0,xr=0,ga=0,bc="TARMAC";function Tc(){Xt.clearRect(0,0,232,132);const W=Math.PI*.78,G=Math.PI*2.22,fe=Oe=>W+(G-W)*a(Oe/8e3,0,1);Xt.lineWidth=7,Xt.strokeStyle="rgba(255,255,255,.10)",Xt.beginPath(),Xt.arc(116,126,104,W,G),Xt.stroke(),Xt.strokeStyle="#ff6a2a",Xt.beginPath(),Xt.arc(116,126,104,fe(7200),G),Xt.stroke(),Xt.font="600 9px 'IBM Plex Mono', ui-monospace, monospace",Xt.textAlign="center",Xt.textBaseline="middle";for(let Oe=0;Oe<=8;Oe++){const ft=fe(Oe*1e3),Ge=Math.cos(ft),Dt=Math.sin(ft);Xt.strokeStyle=Oe>=7?"#ff6a2a":"rgba(236,233,226,.75)",Xt.lineWidth=Oe%2?1:2,Xt.beginPath(),Xt.moveTo(116+Ge*99,126+Dt*99),Xt.lineTo(116+Ge*90,126+Dt*90),Xt.stroke(),Xt.fillStyle=Oe>=7?"#ff6a2a":"#96928a",Xt.fillText(String(Oe),116+Ge*79,126+Dt*79)}const le=fe(Ie.rpm),ve=Math.cos(le),me=Math.sin(le);Xt.strokeStyle="#ece9e2",Xt.lineWidth=2.6,Xt.beginPath(),Xt.moveTo(116-ve*10,126-me*10),Xt.lineTo(116+ve*86,126+me*86),Xt.stroke(),Xt.fillStyle="#ff6a2a",Xt.beginPath(),Xt.arc(116,126,4,0,u),Xt.fill(),Xt.fillStyle="#ece9e2",Xt.font="700 32px Rajdhani, system-ui, sans-serif",Xt.fillText(String(Math.round(Ie.spd*3.6)),116,92),Xt.fillStyle="#96928a",Xt.font="500 9px 'IBM Plex Mono', ui-monospace, monospace",Xt.fillText("KM/H",116,111),Xt.fillStyle="#ff6a2a",Xt.font="700 16px Rajdhani, system-ui, sans-serif",Xt.fillText(Ie.mode==="R"?"R":`D${Ie.gear}`,116,128)}function ql(){Qn.clearRect(0,0,118,118),Qn.strokeStyle="rgba(255,255,255,.12)",Qn.lineWidth=1;for(const Z of[.5,1,1.5])Qn.beginPath(),Qn.arc(59,59,Z*40,0,u),Qn.stroke();Qn.beginPath(),Qn.moveTo(55,59),Qn.lineTo(63,59),Qn.moveTo(59,55),Qn.lineTo(59,63),Qn.stroke(),gr.push([kr,Rs]),gr.length>45&&gr.shift();for(let Z=0;Z<gr.length;Z++){const[W,G]=gr[Z];Qn.fillStyle=`rgba(143,184,204,${Z/gr.length*.5})`,Qn.fillRect(59+W*40-1,59-G*40-1,2,2)}Qn.fillStyle="#ff6a2a",Qn.beginPath(),Qn.arc(59+a(kr,-1.6,1.6)*40,59-a(Rs,-1.6,1.6)*40,3.4,0,u),Qn.fill()}let zr=!1,Ec=!1,So=60,bo=0,Hr=null,To=0,xa=0,Eo=0,wo=0,_a=0,wc=rt,va=.5;function Ma(){const S=document.activeElement;if(!S)return!1;const E=S.tagName;return E==="INPUT"||E==="TEXTAREA"||E==="SELECT"||S.isContentEditable}function Ac(S){if(Mc(),$t&&$t.state==="suspended"&&$t.resume(),!Ma()){if(S.code==="Digit1")return _r(0);if(S.code==="Digit2")return _r(1);if(S.code==="Digit3")return _r(2);if(S.code==="Digit4")return _r(3);if(S.code==="KeyN"){ye=!1,Ue=!Ue,i(Ue?"Headlights on":"Headlights off");return}["ArrowUp","ArrowDown","ArrowLeft","ArrowRight","Space"].includes(S.code)&&S.preventDefault(),Vt[S.code]=!0,S.code==="KeyC"&&(Fi=(Fi+1)%pr.length,i(`Camera · ${pr[Fi]}`)),S.code==="KeyR"&&(Ie.reset(),F(),i("Reset to start line")),S.code==="KeyM"&&(ds=!ds,i(ds?"Sound off":"Sound on")),S.code==="KeyP"&&Rc(!zr)}}function Ao(S){Vt[S.code]=!1}function ya(){for(const S of Object.keys(Vt))Vt[S]=!1;Qi=!1}function Ro(S){Mc(),$t&&$t.state==="suspended"&&$t.resume(),!Ma()&&(Qi=!0,yo=S.clientX,mr=S.clientY)}function Sa(S){Qi&&(Wi-=(S.clientX-yo)*.006,gi=a(gi+(S.clientY-mr)*.005,-.15,1.25),yo=S.clientX,mr=S.clientY)}function Co(){Qi=!1}function ba(S){Br=a(Br+S.deltaY*.008,4.5,26)}function Vr(){const S=e.clientWidth||window.innerWidth,E=e.clientHeight||window.innerHeight;m.aspect=S/E,m.updateProjectionMatrix(),f.setSize(S,E,!1)}function Ta(S){S.preventDefault()}window.addEventListener("keydown",Ac,{capture:!0}),window.addEventListener("keyup",Ao),window.addEventListener("blur",ya),window.addEventListener("pointerdown",Ro,{capture:!0}),window.addEventListener("pointermove",Sa),window.addEventListener("pointerup",Co),window.addEventListener("wheel",ba,{passive:!0}),window.addEventListener("resize",Vr),e.addEventListener("webglcontextlost",Ta,{passive:!1});function _r(S){Ke=a(S|0,0,3);const E=qe[Ke];E.assist,i(`Mode · ${E.name} · grip ${(E.muT*ht.grip).toFixed(2)}`)}function Rc(S){zr=S;for(const E of Object.keys(Vt))Vt[E]=!1;i(S?"Paused":"Back on the road")}function Ea(S){M.weather=S,fa(),i(S==="rain"?"Rain · grip reduced":S==="overcast"?"Overcast sky":"Clear sky")}function wa(S){M.time=(S%24+24)%24,fa()}const Cc=o(0,1,0);let Gr=null;function Aa(){if(!Gr){const S=new kS;S.setDecoderPath(new URL("draco/gltf/",document.baseURI).href),Gr=new nS,Gr.setDRACOLoader(S)}return Gr}let Po=null,Zs=[],Pc=0;const p=/paint|body_?colou?r|shell|exterior|koerper|carroceria/i,b=/glass|window|chrome|trim|light|lamp|brake|tire|tyre|rim|interior|leather|seat|mirror|plate|panel|badge|logo|grill|wiper|exhaust|carpet|fabric|rubber|metal/i,T=/headlight|head_?lamp|projector|front_?light|lights?_front/i,P=/tail_?light|tail_?lamp|rear_?light|lights?_rear/i,k=/brake_?light|stop_?lamp/i,j=/reverse|backup/i,ae=(S,E=0,B=0)=>new $e({color:S,emissive:E,emissiveIntensity:B});function Te(S){const E=new Map;return S.traverse(B=>{const N=B;if(!N.isMesh)return;const Z=Array.isArray(N.material)?N.material:[N.material];for(const W of Z){const G=W;if(!G||!G.name)continue;const fe=G.name.toLowerCase();E.has(fe)||E.set(fe,G)}}),E}const mt=(S,E)=>{for(const[B,N]of S)if(E.test(B))return N;return null};function Zt(S){const E=["map","normalMap","roughnessMap","metalnessMap","emissiveMap","aoMap","alphaMap","clearcoatMap","clearcoatNormalMap","clearcoatRoughnessMap","sheenColorMap","sheenRoughnessMap","specularMap","specularColorMap","iridescenceMap","transmissionMap","thicknessMap","lightMap"];S.traverse(B=>{const N=B;if(!N.isMesh)return;N.geometry?.dispose();const Z=Array.isArray(N.material)?N.material:[N.material];for(const W of Z){const G=W;if(G){for(const fe of E){const le=G[fe];le&&le.isTexture&&le.dispose()}G.dispose?.()}}})}function wn(){const S=Po;if(!S)return;const E=S.scale,B=S.yaw+Pc,N=Math.cos(B),Z=Math.sin(B),W=(me,Oe)=>me*N+Oe*Z,G=(me,Oe)=>-me*Z+Oe*N;S.holder.rotation.y=B,S.holder.scale.setScalar(E);const fe=S.centre.x*E,le=S.centre.z*E;S.holder.position.set(-W(fe,le),ls-S.yRef*E,-G(fe,le));const ve=new ni().setFromAxisAngle(Cc,B);S.joints.forEach((me,Oe)=>{const ft=me.x*E,Ge=me.z*E;me.pivot.position.set(W(ft,Ge),ls,G(ft,Ge)),me.orient.quaternion.copy(ve).multiply(me.quat),me.orient.scale.copy(me.scale).multiplyScalar(E);const Dt=Ce?.rigs[Oe];Dt&&(Dt.x=me.pivot.position.x,Dt.z=me.pivot.position.z)})}function ei(){const S=Po,E=Ce;if(!S||!E||S.joints.length<4)return;Pc+=Math.PI;const B=[2,3,0,1],N=B.map(W=>E.rigs[W]).filter(Boolean),Z=B.map(W=>S.joints[W]).filter(Boolean);N.length===4&&(N.forEach((W,G)=>{W.front=G<2}),E.rigs=N,S.joints=Z,wn(),i("Model turned around"))}function Bn(S,E,B){const N=new Vn;N.add(S);const Z=new Vn;Z.add(N),Z.updateMatrixWorld(!0);const W=new os().setFromObject(N);if(W.isEmpty()||!isFinite(W.min.x))throw new Error("Model has no geometry");const G=W.getSize(o()),fe=[];N.traverse(mn=>{if(!(!mn.name||!Uh(mn.name))){for(let rn=mn.parent;rn&&rn!==N;rn=rn.parent)if(rn.name&&Uh(rn.name))return;fe.push(mn)}});const le=[],ve=[];for(const mn of fe){const rn=new os().setFromObject(mn),Hn=rn.getCenter(o());le.push({id:le.length,name:mn.name,x:Hn.x,y:Hn.y,z:Hn.z,radius:Math.max(.002,(rn.max.y-rn.min.y)/2)}),ve.push(rn)}const me=le.length>=4?ab(le,{min:[W.min.x,W.min.y,W.min.z],max:[W.max.x,W.max.y,W.max.z]}):null,Oe=zs[B],ft=Math.max(G.x,G.z);let Ge=me&&me.wheelbase>.01?Oe.wheelbase/me.wheelbase:Oe.length/Math.max(.001,ft);(!isFinite(Ge)||Ge<=0)&&(Ge=Oe.length/Math.max(.001,ft)),Ge=a(Ge,.001,400);const Dt=me?me.yaw:0,wt=new Vn;wt.rotation.y=Dt,wt.scale.setScalar(Ge),wt.add(N),wt.updateMatrixWorld(!0);const dn=new os().setFromObject(N).getSize(o()),cn=[],xn=[];for(let mn=0;mn<4;mn++){const rn=me?me.slot[mn]:null;if(rn===null||!fe[rn])continue;const Hn=fe[rn],Ps=le[rn],He=ve[rn],un=new ni,gt=o(),yi=o();Hn.updateWorldMatrix(!0,!1),Hn.matrixWorld.decompose(yi,un,gt);const Bi=He.getCenter(o()).applyMatrix4(Hn.matrixWorld.clone().invert()).negate(),Si=new Vn;Si.userData.wheelRig=!0;const Yn=new Vn;Yn.userData.wheelSpin=!0;const Kn=new Vn;Si.add(Yn),Yn.add(Kn),Kn.add(Hn),Hn.position.copy(Bi),Hn.quaternion.identity(),Hn.scale.set(1,1,1),cn.push({pivot:Si,orient:Kn,x:Ps.x,y:Ps.y,z:Ps.z,quat:un,scale:gt.clone()}),xn.push({pivot:Si,spin:Yn,front:mn<2,x:Ps.x*Ge,z:Ps.z*Ge,radius:Ps.radius*Ge,width:Math.max(.05,Math.min(He.max.x-He.min.x,He.max.z-He.min.z)*.5*Ge)})}const Ft=cb({length:dn.z,width:dn.x,height:dn.y,wheelbase:me?me.wheelbase*Ge:Oe.wheelbase,track:me?me.track*Ge:Oe.track,wheelR:me?me.wheelR*Ge:Oe.wheelR}),Dn={...Oe,name:E,length:Ft.length,width:Ft.width,height:Ft.height,wheelbase:Ft.wheelbase,track:Ft.track,wheelR:Ft.wheelR};oe(Dn);const sn=Te(S);Zs=[];for(const[mn,rn]of sn)if(!(!p.test(mn)||b.test(mn))&&(Zs.push(rn),rn.color.setHex(rt),"clearcoat"in rn)){const Hn=rn;Hn.clearcoat=Math.max(.55,Hn.clearcoat??0),Hn.clearcoatRoughness=Math.min(.14,Hn.clearcoatRoughness??.1)}const ln=(mn,rn)=>{const Hn=mt(sn,mn);return Hn?(Hn.emissive.setHex(rn),Hn.emissiveIntensity=.12,Hn):ae(1447964,rn,0)},_i={paint:Zs[0]??ae(rt),glass:mt(sn,/glass|window/i)??ae(2240572),trim:mt(sn,/trim|plastic|rubber|rubberised/i)??ae(2763824),chrome:mt(sn,/chrome|metal/i)??ae(12173510),tyre:mt(sn,/tire|tyre/i)??ae(1316378),rim:mt(sn,/rim|alloy/i)??ae(10134184),caliper:mt(sn,/caliper|disc|brake/i)??ae(11023658),head:ln(T,16774368),tail:ln(P,16722448),brake:ln(k,16722448),reverse:ln(j,16775408),plate:mt(sn,/plate|licen/i)??ae(15262936),cabin:mt(sn,/interior|leather|carpet|dash|seat/i)??ae(1908516)};if(Ce){xe.remove(Ce.root),Zt(Ce.root);for(const mn of Ce.rigs)xe.remove(mn.pivot),Zt(mn.pivot)}xe.add(N);for(const mn of xn)xe.add(mn.pivot);const zn=Ft.length/2-.12,In=Ft.track*.36,vi=ls+Ft.wheelR*.8;Xe.position.set(In,vi,zn-.05),ze.position.set(-In,vi,zn-.05),ot.position.set(In,vi,zn+32),_t.position.set(-In,vi,zn+32),It.position.set(In,vi,-zn),Y.position.set(-In,vi,-zn),Pc=0;const Mi=o();me&&cn.length?Mi.set(cn.reduce((mn,rn)=>mn+rn.x,0)/cn.length,0,cn.reduce((mn,rn)=>mn+rn.z,0)/cn.length):(W.getCenter(Mi),Mi.y=0);const ri=me&&cn.length?cn.reduce((mn,rn)=>mn+rn.y,0)/cn.length:W.min.y+Ft.wheelR/Ge;Ce={root:N,rigs:xn,steering:null,materials:_i,spec:Dn,gy:qa+Ft.wheelR,headAnchors:[Xe.position.clone(),ze.position.clone()],tailAnchors:[It.position.clone(),Y.position.clone()]},Po={holder:N,label:E,base:B,yaw:Dt,scale:Ge,centre:Mi,yRef:ri,joints:cn,measured:Ft},wn(),Ie.reset(),s.onReady?.(Dn);const Cs=`${Ft.length.toFixed(2)} × ${Ft.width.toFixed(2)} m`;return xn.length===4?`Rigged 4 wheels · ${Ft.wheelbase.toFixed(2)} m wheelbase · ${Cs}`:xn.length?`Rigged ${xn.length} wheels · ${Cs}`:`Loaded rigid · no wheel nodes found · ${Cs}`}async function _n(S,E,B){if(!S)throw new Error("No model URL");i(`Downloading ${E}…`);let N;try{const G=await fetch(S,{mode:"cors",credentials:"omit"});if(!G.ok)throw new Error(`HTTP ${G.status}`);const fe=Number(G.headers.get("content-length")??0);if(G.body&&fe>15e5){const le=G.body.getReader(),ve=[];let me=0,Oe=-1;for(;;){const{done:Dt,value:wt}=await le.read();if(Dt)break;if(wt){ve.push(wt),me+=wt.length;const Pt=Math.round(me/fe*100);Pt!==Oe&&(Oe=Pt,i(`${E} · ${Pt}%`))}}const ft=new Uint8Array(me);let Ge=0;for(const Dt of ve)ft.set(Dt,Ge),Ge+=Dt.length;N=ft.buffer}else N=await G.arrayBuffer()}catch(G){throw new Error(`Download failed: ${G instanceof Error?G.message:String(G)}`)}const Z=await new Promise((G,fe)=>{Aa().parse(N,"",le=>G(le.scene),fe)}),W=Bn(Z,E,B);return i(W),W}async function kn(S){if(!S)return"No file";const E=(S.name.split(".").pop()||"").toLowerCase();if(E!=="glb"&&E!=="gltf")throw new Error(`Unsupported format .${E} (use .glb)`);if(S.size>180*1024*1024)throw new Error("File larger than 180 MB");const B=E==="glb"?await S.arrayBuffer():await S.text(),N=await new Promise((G,fe)=>{Aa().parse(B,"",le=>G(le.scene),fe)}),Z=S.name.replace(/\.[^.]+$/,"").slice(0,28),W=Bn(N,Z,ht.kind);return i(W),W}const Lt=1/240;let Pn=0,Nn=performance.now(),vn=0;function An(S){if(!$.length)return;const E=Ie.pos.x,B=Ie.pos.z;for(const N of $){let Z=!1;Re.lightBlocks(N.x,N.z,N.axis,N.dir,N.speed)&&(Z=!0);{const ve=E-N.x,me=B-N.z,Oe=N.axis==="z"?me*N.dir:ve*N.dir,ft=N.axis==="z"?ve:me;Oe>0&&Oe<16&&Math.abs(ft)<3.4&&(Z=!0)}if(!Z)for(const ve of $){if(ve===N||ve.axis!==N.axis||ve.street!==N.street||ve.dir!==N.dir)continue;const me=N.axis==="z"?(ve.z-N.z)*N.dir:(ve.x-N.x)*N.dir,Oe=N.axis==="z"?ve.x-N.x:ve.z-N.z;if(me>0&&me<9&&Math.abs(Oe)<2.6){Z=!0;break}}N.stopT>0?(N.stopT-=S,N.speed=Math.max(0,N.speed-9*S)):N.speed+=a((Z?0:N.vmax)-N.speed,-7*S,3*S),N.axis==="z"?(N.z+=N.dir*N.speed*S,N.x=N.street+N.lane):(N.x+=N.dir*N.speed*S,N.z=N.street+N.lane);const W=N.axis==="z"?N.z:N.x;if(Math.abs(W)>584&&(N.dir*=-1,N.lane=-N.lane),N.speed>1){const ve=N.axis==="z"?N.z:N.x;for(const me of pn)if(Math.abs(ve-me)<.9&&N.lastS!==me){N.lastS=me,Math.random()<.3&&(N.axis=N.axis==="z"?"x":"z",N.street=me,N.dir=Math.random()<.5?1:-1,N.lane=N.axis==="z"?-3.5*N.dir:3.5*N.dir,N.axis==="z"?(N.x=me+N.lane,N.z=me):(N.z=me+N.lane,N.x=me));break}else Math.abs(ve-me)>6&&N.lastS===me&&(N.lastS=null)}let fe=(N.axis==="z"?N.dir>0?0:Math.PI:N.dir>0?Math.PI/2:-Math.PI/2)-N.yaw;for(;fe>Math.PI;)fe-=u;for(;fe<-Math.PI;)fe+=u;N.yaw+=fe*Math.min(1,S*4),N.grp.position.set(N.x,.03,N.z),N.grp.rotation.y=N.yaw;const le=N.speed/En*S;for(const ve of N.spins)ve.rotation.x+=le}}const ps=new ni,xi=o(),Wr=o(),Ra=o(),Ic=new ni;function Io(S){for(const E of re){if(E.cool-=S,E.v.y-=9.81*S,Ra.copy(E.v).multiplyScalar(S),E.p.add(Ra),E.cw.lengthSq()>1e-4){const W=E.cw.length()*S;Wr.copy(E.cw).multiplyScalar(1/E.cw.length()),ps.setFromAxisAngle(Wr,W),E.q.premultiply(ps).normalize(),E.cw.multiplyScalar(Math.max(0,1-.8*S))}xi.copy(E.p).sub(Ie.pos),xi.applyQuaternion(ps.copy(Ie.quat).conjugate());const B=Dr,N=Ur;if(xi.y>-.6&&xi.y<.9&&Math.abs(xi.x)<B&&Math.abs(xi.z)<N){const W=B-Math.abs(xi.x),G=N-Math.abs(xi.z);let fe=0,le=0;W<G?(fe=Math.sign(xi.x)||1,xi.x=fe*B):(le=Math.sign(xi.z)||1,xi.z=le*N),Wr.set(fe,0,le).applyQuaternion(Ie.quat),xi.applyQuaternion(Ie.quat).add(Ie.pos),E.p.copy(xi);const ve=Ie.vel.length();ve>1&&E.cool<=0&&(E.v.copy(Ie.vel).multiplyScalar(.75).addScaledVector(Wr,1.5+ve*.15),E.v.y+=l(1.5,3.5),E.cw.set(l(-1,1),l(-1,1),l(-1,1)).multiplyScalar(Math.min(ve*1.2,9)),E.cool=.35,Mo(a(ve*.03,.08,.35)))}const Z=lt(E.p.x,E.p.z);if(E.p.y<Z){E.p.y=Z,E.v.y<0&&(E.v.y*=-.3);const W=Math.max(0,1-4*S);E.v.x*=W,E.v.z*=W,E.cw.multiplyScalar(Math.max(0,1-4*S)),E.v.lengthSq()<.3&&E.q.slerp(Ic,Math.min(1,S*2.5))}{const W=mi(E.p.x,E.p.z);if(W)for(const G of W.blds){const fe=E.p.x-G.x,le=E.p.z-G.z,ve=G.hx-Math.abs(fe),me=G.hz-Math.abs(le);ve>0&&me>0&&E.p.y<G.top&&(ve<me?(E.p.x=G.x+(Math.sign(fe)||1)*G.hx,E.v.x*=-.25):(E.p.z=G.z+(Math.sign(le)||1)*G.hz,E.v.z*=-.25))}}E.mesh.position.copy(E.p),E.mesh.quaternion.copy(E.q)}}const Lc=[0,0,0,0];function C0(S){if(xe.position.copy(Ie.pos),xe.quaternion.copy(Ie.quat),Ce){for(let me=0;me<Math.min(4,Ce.rigs.length);me++){const Oe=Ce.rigs[me],ft=Ie.wc[me],Ge=dt-(we-(ft.contact?Math.min(ft.comp,we):we));Oe.pivot.position.y=Ge,Oe.pivot.rotation.y=$n[me].steer?Ie.ack[me]:0,Oe.spin.rotation.x=Ie.wAngle[me]}Ce.steering&&(Ce.steering.rotation.z=-Ie.steerAngle*3.1);const le=Ce.materials,ve=Ie.brakeIn>.1||Ie.hand;le.brake.emissiveIntensity=ve?3.2:.55,le.tail.emissiveIntensity=M.night>.4||ve?.9:.5,le.head.emissiveIntensity=Ue?2.6:.12,le.reverse.emissiveIntensity=Ie.mode==="R"?1.7:0,Xe.intensity=ze.intensity=Ue?110:0,It.intensity=Y.intensity=ve?6*(.4+.6*M.night):0}D.position.copy(Ie.pos).addScaledVector(x,210),D.target.position.copy(Ie.pos),_.position.copy(m.position),vo=0;const E=Ie.spd;for(let le=0;le<4;le++){const ve=Ie.wc[le],me=gn.st[le];if(ve.contact&&E>3){if((ve.s>.95||Ie.hand&&$n[le].driven&&E>3)&&ve.surf==="TARMAC"){const Dt=$n[le].driven?.15:.12;_e.copy(ve.cp).addScaledVector(ve.wR,-Dt),Kt.copy(ve.cp).addScaledVector(ve.wR,Dt),me.on?me.lastL.distanceToSquared(_e)>.07&&(gn.add(me.lastL,me.lastR,_e,Kt,a(.12+(ve.s-.95)*.22,.12,.55)),me.lastL.copy(_e),me.lastR.copy(Kt)):(me.on=!0,me.lastL.copy(_e),me.lastR.copy(Kt))}else me.on=!1;const ft=a((ve.s-1)/1.5,0,1);ft>vo&&(vo=ft);let Ge=0;for(ve.s>1.05&&E>4&&(Ge=Math.min(22,(ve.s-1)*9)),Ie.hand&&$n[le].driven&&E>4&&(Ge=Math.max(Ge,10)),ve.surf==="GRASS"&&E>6&&(Ge=Math.max(Ge,E*.18)),Lc[le]+=S*Ge;Lc[le]>=1;)Lc[le]-=1,_c.spawn(ve.cp,Ie.vel,E*.055);if(M.wet>.5&&E>12){const Dt=Math.min(30,E*.35);Math.random()<S*Dt&&vc.spawn(ve.cp,Ie.vel,.06+E*.004)}}else me.on=!1,Lc[le]=0}ma.copy(Ie.vel).sub(Sc).divideScalar(Math.max(S,.001));const B=nt.set(1,0,0).applyQuaternion(Ie.quat),N=Qe.set(0,0,1).applyQuaternion(Ie.quat),Z=ma.dot(B)/9.81,W=ma.dot(N)/9.81;kr+=(Z-kr)*.25,Rs+=(W-Rs)*.25;const G=Ie.vel.dot(B),fe=Ie.vel.dot(N);xr=E>4?Math.abs(Math.atan2(G,Math.abs(fe)))*57.3:0;for(let le=0;le<4;le++)Ie.wc[le].contact&&(bc=Ie.wc[le].surf);xr>12&&E>6&&(ga+=xr*S*8*(1+xr/40))}function P0(S){if(!Ks.visible)return;const E=Ie.pos.x,B=Ie.pos.z,N=Ie.pos.y;for(let Z=0;Z<mo;Z++){let W=hs[Z*3],G=hs[Z*3+1],fe=hs[Z*3+2];G-=S*24,W+=S*3.2,G<N-8&&(G+=go),W>E+Ui&&(W-=Ui*2),W<E-Ui&&(W+=Ui*2),fe>B+Ui&&(fe-=Ui*2),fe<B-Ui&&(fe+=Ui*2),hs[Z*3]=W,hs[Z*3+1]=G,hs[Z*3+2]=fe;const le=Z*6;ws[le]=W,ws[le+1]=G,ws[le+2]=fe,ws[le+3]=W+.06,ws[le+4]=G-.9,ws[le+5]=fe}As.attributes.position.needsUpdate=!0}function I0(){const S=Ie.wc.map(N=>N.s),E=Ie.wc.map(N=>N.Fs),B={speedKph:Ie.spd*3.6,rpm:Ie.rpm,gear:Ie.mode==="R"?"R":`D${Ie.gear}`,modeIndex:Ke,surface:bc,driftDeg:xr,driftPoints:ga,combo:1+xr/40,gLat:kr,gLon:Rs,heat:Ie.heat.slice(),slip:S,load:E,fps:So,headlights:Ue,camera:Fi,weather:M.weather,timeOfDay:M.time,wet:M.wet,kind:ht.kind,paint:wc,traffic:$.length,topSpeedKph:bo*3.6,best0to100:Hr,distanceKm:To/1e3,physicsHz:240};r(B)}function ff(S){if(Ec)return;vn=requestAnimationFrame(ff);const E=Math.min(.05,(S-Nn)/1e3);if(Nn=S,E>0&&(So+=(1/E-So)*.02),g.value=S*.001,Sc.copy(Ie.vel),!zr){Re.update(E,M.night,M.wet),An(E),Pn+=E;let B=0;for(;Pn>=Lt&&B++<12;)Ie.step(Lt),Io(Lt),Pn-=Lt;xa+=E,To+=Ie.spd*E,Ie.spd>bo&&(bo=Ie.spd);const N=Ie.spd*3.6;if(N<2?(wo+=E,wo>.6&&(Eo=0)):(wo=0,Eo+=E,Hr===null&&N>=100&&Eo<20&&(Hr=Eo)),So<25&&$.length>6&&S%15e3<20){const Z=Math.ceil($.length/3);for(let W=0;W<Z;W++){const G=$.pop();G&&d.remove(G.grp)}i("Performance mode · traffic reduced")}}C0(E),Xl(E),P0(E),_c.update(E),vc.update(E),!zr&&M.night>.05&&Math.random()<.06&&da(),Tc(),ql(),yc(),_a+=E,_a>.1&&(_a=0,wc=rt,I0()),f.render(d,m)}return q(ht.kind),pa(ht.kind),Ie.pos.set(0,si,-12),Ie.reset(),fa(),O(),pe(),Vr(),vn=requestAnimationFrame(ff),s.onReady?.(ht),{destroy(){Ec=!0,cancelAnimationFrame(vn),window.removeEventListener("keydown",Ac,{capture:!0}),window.removeEventListener("keyup",Ao),window.removeEventListener("blur",ya),window.removeEventListener("pointerdown",Ro,{capture:!0}),window.removeEventListener("pointermove",Sa),window.removeEventListener("pointerup",Co),window.removeEventListener("wheel",ba),window.removeEventListener("resize",Vr),e.removeEventListener("webglcontextlost",Ta);try{$t?.close()}catch{}L.dispose(),f.dispose()},setVehicle:Wl,setMode:_r,setCamera(S){Fi=a(S|0,0,pr.length-1),i(`Camera · ${pr[Fi]}`)},setTimeOfDay:wa,setWeather:Ea,setPaint:ne,setHeadlights(S){ye=!1,Ue=S},setPaused:Rc,reset(){Ie.reset(),F()},importCar:kn,loadCarModel:_n,flipImportedModel:ei,setVolume(S){va=a(S,0,1),ds=va<=.01,Ci&&$t&&Ci.gain.setTargetAtTime(va,$t.currentTime,.1)},sessionStats(){return{topSpeedKph:bo*3.6,best0to100:Hr,distanceKm:To/1e3,driftPoints:ga,kind:ht.kind,seconds:xa}}}}const Oh={clear:"Clear",overcast:"Overcast",rain:"Rain"},gb=["Chase","Cockpit","Hood","Bumper","Cinema","Orbit"],xb=["NORMAL","DRIFT","RALLY","ARCADE"],A0=[{label:"Dawn",hour:6.4,icon:ml},{label:"Noon",hour:12.5,icon:ml},{label:"Dusk",hour:18.6,icon:ml},{label:"Night",hour:22.5,icon:X0}],R0=[{key:"clear",icon:ml},{key:"overcast",icon:tm},{key:"rain",icon:q0}];function Ns(s,e){window.dispatchEvent(new KeyboardEvent(e?"keydown":"keyup",{code:s,bubbles:!0}))}function Ab(){const s=qt.useRef(null),e=qt.useRef(null),t=qt.useRef(null),n=qt.useRef(null),[i,r]=qt.useState(null),[o,a]=qt.useState(!1),[c,l]=qt.useState(!1),[u,f]=qt.useState("none"),[h,d]=qt.useState(!1),[m,M]=qt.useState(null),[x,g]=qt.useState(null),[A,I]=qt.useState("gt"),[_,w]=qt.useState(null),[R,D]=qt.useState(null),[v,L]=qt.useState(null),[O,z]=qt.useState(Cr[4]),[K,ee]=qt.useState("clear"),[X,J]=qt.useState(16.2),[ce,se]=qt.useState(0),[Ee,ue]=qt.useState(.5),[ge,Se]=qt.useState(!1),{isAuthenticated:tt}=D0(),Ze=U0(gf.driverStats.submitRun),At=F0(gf.driverStats.myStats,tt?{}:"skip"),bt=zs[A],Wt=qt.useCallback(re=>{g(re),window.clearTimeout(Wt.t),Wt.t=window.setTimeout(()=>g(null),2400)},[]);qt.useEffect(()=>{const re=s.current;if(!re||!e.current||!t.current)return;const F=document.createElement("canvas");F.className="absolute inset-0 h-full w-full block",re.appendChild(F);let xt=null;try{xt=mb({canvas:F,cluster:e.current,gmeter:t.current,onTelemetry:r,onToast:Wt,onError:Ct=>M(Ct),initialVehicle:"gt",initialWeather:"clear",initialTimeOfDay:16.2,initialPaint:Cr[4]}),n.current=xt,xt.setPaused(!0),d(!0)}catch(Ct){M(Ct instanceof Error?Ct.message:String(Ct))}return()=>{xt?.destroy(),n.current=null,F.remove()}},[Wt]),qt.useEffect(()=>{if(h)return;const re=window.setTimeout(()=>{n.current||M(F=>F??"The renderer took too long to start.")},12e3);return()=>window.clearTimeout(re)},[h]);const he=qt.useCallback(()=>{a(!0),l(!1),n.current?.setPaused(!1)},[]),Me=qt.useRef(!1),We=qt.useRef(null);qt.useEffect(()=>{const re=F=>{const xt=document.activeElement;if(!(xt&&(xt.tagName==="INPUT"||xt.tagName==="TEXTAREA"))){if(!Me.current){["Enter","Space","KeyW","ArrowUp"].includes(F.code)&&(F.preventDefault(),We.current?.());return}F.key==="Escape"&&f(Ct=>Ct==="none"?"settings":"none")}};return window.addEventListener("keydown",re),()=>window.removeEventListener("keydown",re)},[]);const lt=qt.useCallback(()=>{l(re=>(n.current?.setPaused(!re),!re))},[]),je=qt.useCallback(re=>{I(re),w(null),D(null),n.current?.setVehicle(re)},[]),Tt=qt.useCallback(async re=>{const F=n.current;if(!(!F||v)){L(re.id);try{const xt=await F.loadCarModel(re.url,re.name,re.base);w(re),D(null),Do.success(xt,{description:`${re.author} · ${re.license}`})}catch(xt){Do.error("Could not load "+re.name,{description:xt instanceof Error?xt.message:String(xt)})}finally{L(null)}}},[v]),tn=qt.useCallback(()=>{n.current?.flipImportedModel()},[]),be=qt.useCallback(re=>{z(re),n.current?.setPaint(re)},[]),Ae=qt.useCallback(re=>{ee(re),n.current?.setWeather(re)},[]),Re=qt.useCallback(re=>{J(re),n.current?.setTimeOfDay(re)},[]),Pe=qt.useCallback(re=>{se(re),n.current?.setCamera(re)},[]),Ve=qt.useCallback(async re=>{if(!(!re||!n.current))try{const F=await n.current.importCar(re);w(null),D(re.name),Do.success(F,{description:re.name})}catch(F){Do.error("Import failed",{description:F instanceof Error?F.message:String(F)})}},[]),vt=qt.useCallback(async()=>{const re=n.current?.sessionStats();if(re)try{await Ze({topSpeedKph:Number(re.topSpeedKph.toFixed(1)),best0to100:re.best0to100===null?void 0:Number(re.best0to100.toFixed(2)),distanceKm:Number(re.distanceKm.toFixed(2)),driftPoints:Math.round(re.driftPoints),car:zs[re.kind].name,seconds:Math.round(re.seconds)}),Do.success("Run saved to your garage",{description:`${Math.round(re.driftPoints)} drift pts · ${re.topSpeedKph.toFixed(0)} km/h top`})}catch(F){Do.error("Could not save run",{description:F instanceof Error?F.message:String(F)})}},[Ze]);qt.useEffect(()=>{Me.current=o},[o]),qt.useEffect(()=>{We.current=he},[he]);const ut=i?i.heat.reduce((re,F)=>re+F,0)/4:0,Mt=qt.useMemo(()=>ut<.25?{label:"COLD",className:"text-muted-foreground"}:ut<.65?{label:"WARM",className:"text-emerald-400"}:{label:"HOT",className:"text-signal"},[ut]);return H.jsxs("div",{className:"relative h-[100dvh] w-full overflow-hidden bg-carbon text-chalk select-none",children:[H.jsx("div",{ref:s,className:"absolute inset-0"}),H.jsx("div",{className:"pointer-events-none absolute inset-0 z-[2]",style:{background:"radial-gradient(ellipse at center, transparent 52%, rgba(4,5,8,.55) 100%)"}}),H.jsxs("div",{className:`pointer-events-none absolute inset-0 z-[3] transition-opacity duration-500 ${o?"opacity-100":"opacity-0"}`,children:[H.jsxs("div",{className:"absolute left-4 top-4 sm:left-6 sm:top-5",children:[H.jsx("div",{className:"font-mono text-[10px] tracking-[0.34em] text-signal",children:"APEX CITY · DRIVE"}),H.jsx("div",{className:"font-display text-xl leading-tight font-bold tracking-tight sm:text-2xl",children:bt.name}),H.jsxs("div",{className:"font-mono text-[10px] tracking-[0.14em] text-muted-foreground",children:[bt.klass," · ",bt.drivetrain.toUpperCase()," · ",bt.mass," KG"]})]}),H.jsx("div",{className:"pointer-events-auto absolute left-4 top-24 flex flex-wrap gap-1.5 sm:left-6 sm:top-28",children:xb.map((re,F)=>H.jsxs("button",{type:"button",onClick:()=>n.current?.setMode(F),className:`cursor-pointer border px-2.5 py-1 font-mono text-[10px] tracking-[0.14em] transition-colors ${i?.modeIndex===F?"border-signal bg-signal text-carbon font-semibold":"border-white/15 bg-black/45 text-muted-foreground hover:border-signal/60 hover:text-chalk"}`,children:[F+1,"·",re]},re))}),H.jsxs("div",{className:"absolute bottom-4 right-4 w-[212px] border border-white/12 bg-black/60 p-3 backdrop-blur-sm sm:bottom-6 sm:right-6",children:[H.jsx("div",{className:"mb-2 font-mono text-[9px] tracking-[0.3em] text-muted-foreground",children:"TELEMETRY"}),H.jsx("canvas",{ref:t,className:"mx-auto block",width:118,height:118}),H.jsx(Qr,{label:"SPEED",value:i?`${Math.round(i.speedKph)} km/h`:"—"}),H.jsx(Qr,{label:"RPM",value:i?Math.round(i.rpm).toString():"—"}),H.jsx(Qr,{label:"SURFACE",value:i?.surface??"TARMAC"}),H.jsx(Qr,{label:"DRIFT",value:i?`${Math.round(Math.min(i.driftDeg,120))}°`:"0°"}),H.jsx(Qr,{label:"DRIFT PTS",value:i?Math.round(i.driftPoints).toLocaleString():"0",hot:(i?.driftDeg??0)>12}),H.jsx(Qr,{label:"LOAD",value:i?`${Math.hypot(i.gLat,i.gLon).toFixed(2)} g`:"0.00 g"}),H.jsx(Qr,{label:"TYRES",value:Mt.label,valueClass:Mt.className}),H.jsx("div",{className:"mt-2 flex items-end justify-between gap-2",children:["FL","FR","RL","RR"].map((re,F)=>{const xt=i?i.slip[F]??0:0,Ct=Math.min(xt,1.5)/1.5;return H.jsxs("div",{className:"flex flex-1 flex-col items-center gap-1",children:[H.jsx("div",{className:"relative h-11 w-full overflow-hidden bg-white/8",children:H.jsx("div",{className:`absolute bottom-0 left-0 right-0 transition-[height] duration-100 ${xt>.9?"bg-signal":"bg-emerald-400/80"}`,style:{height:`${Ct*100}%`}})}),H.jsx("span",{className:"font-mono text-[8px] tracking-[0.1em] text-muted-foreground",children:re})]},re)})}),H.jsxs("div",{className:"mt-2 flex justify-between font-mono text-[9px] text-muted-foreground",children:[H.jsx("span",{children:i?.fps?`${Math.round(i.fps)} FPS`:"—"}),H.jsxs("span",{children:[i?.physicsHz??240," HZ PHYSICS"]}),H.jsxs("span",{children:[i?.traffic??0," CARS"]})]})]}),H.jsxs("div",{className:"absolute bottom-4 left-4 border border-white/12 bg-black/60 p-2 backdrop-blur-sm sm:bottom-6 sm:left-6",children:[H.jsx("canvas",{ref:e,className:"block",width:232,height:132}),H.jsxs("div",{className:"px-1 pb-0.5 font-mono text-[8px] tracking-[0.2em] text-muted-foreground",children:[i?.gear??"D1"," · ",Oh[K].toUpperCase()," · ",i?Math.floor(i.timeOfDay).toString().padStart(2,"0"):"16",":",i?Math.floor(i.timeOfDay%1*60).toString().padStart(2,"0"):"12",ge?" · LIGHTS":""]})]}),H.jsxs("div",{className:"absolute right-4 top-4 hidden border border-white/12 bg-black/60 p-3 font-mono text-[10px] leading-relaxed text-muted-foreground backdrop-blur-sm lg:block",children:[H.jsx("div",{className:"mb-1 tracking-[0.2em] text-chalk",children:"CONTROLS"}),H.jsxs("div",{children:[H.jsx("kbd",{className:"text-signal",children:"W"}),"/",H.jsx("kbd",{className:"text-signal",children:"S"})," throttle · brake"]}),H.jsxs("div",{children:[H.jsx("kbd",{className:"text-signal",children:"A"}),"/",H.jsx("kbd",{className:"text-signal",children:"D"})," steer · ",H.jsx("kbd",{className:"text-signal",children:"SPACE"})," handbrake"]}),H.jsxs("div",{children:[H.jsx("kbd",{className:"text-signal",children:"1-4"})," drive modes · ",H.jsx("kbd",{className:"text-signal",children:"C"})," camera"]}),H.jsxs("div",{children:[H.jsx("kbd",{className:"text-signal",children:"N"})," lights · ",H.jsx("kbd",{className:"text-signal",children:"R"})," reset · ",H.jsx("kbd",{className:"text-signal",children:"M"})," mute"]}),H.jsxs("div",{children:[H.jsx("kbd",{className:"text-signal",children:"P"})," pause · ",H.jsx("kbd",{className:"text-signal",children:"ESC"})," settings"]})]})]}),H.jsxs("div",{className:`absolute right-4 top-4 z-[5] flex gap-2 transition-opacity duration-500 lg:top-auto lg:bottom-[268px] ${o?"opacity-100":"opacity-0"}`,children:[H.jsx(Ou,{label:"Garage",onClick:()=>f(u==="car"?"none":"car"),children:H.jsx(Z0,{className:"size-4"})}),H.jsx(Ou,{label:"Settings",onClick:()=>f(u==="settings"?"none":"settings"),children:H.jsx(rm,{className:"size-4"})}),H.jsx(Ou,{label:c?"Resume":"Pause",onClick:lt,children:c?H.jsx(gp,{className:"size-4"}):H.jsx(pp,{className:"size-4"})})]}),o&&H.jsxs("div",{className:"absolute inset-x-0 bottom-3 z-[5] flex items-end justify-between px-3 lg:hidden",children:[H.jsxs("div",{className:"flex gap-2",children:[H.jsx(Xa,{code:"KeyA",onPointerDown:()=>Ns("KeyA",!0),onPointerUp:()=>Ns("KeyA",!1),children:"◀"}),H.jsx(Xa,{code:"KeyD",onPointerDown:()=>Ns("KeyD",!0),onPointerUp:()=>Ns("KeyD",!1),children:"▶"})]}),H.jsxs("div",{className:"flex gap-2",children:[H.jsx(Xa,{code:"Space",onPointerDown:()=>Ns("Space",!0),onPointerUp:()=>Ns("Space",!1),children:"HB"}),H.jsx(Xa,{code:"KeyS",onPointerDown:()=>Ns("KeyS",!0),onPointerUp:()=>Ns("KeyS",!1),children:"BRK"}),H.jsx(Xa,{code:"KeyW",onPointerDown:()=>Ns("KeyW",!0),onPointerUp:()=>Ns("KeyW",!1),children:"GAS"})]})]}),H.jsx("div",{className:`pointer-events-none absolute left-1/2 z-[6] -translate-x-1/2 border border-white/12 bg-black/70 px-4 py-1.5 font-mono text-[11px] tracking-[0.18em] backdrop-blur-sm transition-all duration-300 ${x?"bottom-28 opacity-100":"bottom-24 opacity-0"}`,children:x}),!h&&!m&&H.jsx("div",{className:"absolute inset-0 z-[8] flex items-center justify-center bg-carbon",children:H.jsxs("div",{className:"text-center",children:[H.jsx("div",{className:"mx-auto mb-3 size-8 animate-spin rounded-full border-2 border-signal border-t-transparent"}),H.jsx("div",{className:"font-mono text-[11px] tracking-[0.24em] text-muted-foreground",children:"BUILDING APEX CITY…"})]})}),m&&H.jsx("div",{className:"absolute inset-0 z-[8] flex items-center justify-center bg-carbon/95 p-6",children:H.jsxs("div",{className:"max-w-md border border-destructive/50 bg-black/60 p-6 text-center",children:[H.jsx("div",{className:"font-display text-xl font-bold tracking-tight",children:"WebGL could not start"}),H.jsx("p",{className:"mt-2 text-sm text-muted-foreground",children:m}),H.jsx(Ds,{asChild:!0,className:"mt-4 cursor-pointer",variant:"outline",children:H.jsx(to,{to:"/",children:"Back to home"})})]})}),h&&!o&&H.jsx(_b,{car:A,spec:bt,onChooseCar:je,onStart:he,paint:O,onPaint:be,weather:K,onWeather:Ae,hour:X,onHour:Re,isAuthenticated:tt}),o&&c&&H.jsx("div",{className:"absolute inset-0 z-[7] flex items-center justify-center bg-black/70 backdrop-blur-sm",children:H.jsxs("div",{className:"w-[min(92vw,420px)] border border-white/12 bg-carbon p-6 text-center",children:[H.jsx("div",{className:"font-mono text-[10px] tracking-[0.3em] text-signal",children:"PAUSED"}),H.jsx("div",{className:"mt-1 font-display text-2xl font-bold tracking-tight",children:"Engine idling"}),H.jsxs("div",{className:"mt-4 grid gap-2",children:[H.jsx(Ds,{className:"cursor-pointer",onClick:lt,children:"Resume driving"}),H.jsx(Ds,{variant:"outline",className:"cursor-pointer",onClick:()=>f("car"),children:"Open garage"}),tt?H.jsx(Ds,{variant:"outline",className:"cursor-pointer",onClick:vt,children:"Save run to garage"}):H.jsx(Ds,{variant:"outline",asChild:!0,className:"cursor-pointer",children:H.jsx(to,{to:"/auth?returnTo=%2Fdrive",children:"Sign in to save runs"})}),H.jsx(Ds,{variant:"ghost",asChild:!0,className:"cursor-pointer",children:H.jsx(to,{to:"/",children:"Leave the city"})})]})]})}),o&&u==="settings"&&H.jsxs(dp,{title:"Settings",onClose:()=>f("none"),children:[H.jsxs(eo,{label:"Time of day",children:[H.jsx("div",{className:"grid grid-cols-4 gap-1.5",children:A0.map(re=>H.jsxs("button",{type:"button",onClick:()=>Re(re.hour),className:`cursor-pointer border px-2 py-2 font-mono text-[10px] tracking-[0.1em] transition-colors ${Math.abs(X-re.hour)<.2?"border-signal bg-signal/15 text-signal":"border-white/12 text-muted-foreground hover:border-signal/50 hover:text-chalk"}`,children:[H.jsx(re.icon,{className:"mx-auto mb-1 size-3.5"}),re.label]},re.label))}),H.jsxs("div",{className:"mt-3 flex items-center gap-3",children:[H.jsx("span",{className:"font-mono text-[10px] text-muted-foreground",children:"00"}),H.jsx(_f,{value:[X],min:0,max:24,step:.25,onValueChange:re=>Re(re[0]??12),className:"cursor-pointer"}),H.jsx("span",{className:"w-10 text-right font-mono text-[10px] text-chalk",children:X.toFixed(1).padStart(4,"0")})]})]}),H.jsxs(eo,{label:"Weather",children:[H.jsx("div",{className:"grid grid-cols-3 gap-1.5",children:R0.map(re=>{const F=re.icon;return H.jsxs("button",{type:"button",onClick:()=>Ae(re.key),className:`cursor-pointer border px-2 py-2 font-mono text-[10px] tracking-[0.1em] transition-colors ${K===re.key?"border-signal bg-signal/15 text-signal":"border-white/12 text-muted-foreground hover:border-signal/50 hover:text-chalk"}`,children:[H.jsx(F,{className:"mx-auto mb-1 size-3.5"}),Oh[re.key].toUpperCase()]},re.key)})}),H.jsx("p",{className:"mt-2 text-[11px] leading-relaxed text-muted-foreground",children:"Rain and overcast skies cut tyre grip and switch the headlights on automatically."})]}),H.jsx(eo,{label:"Camera",children:H.jsx("div",{className:"flex flex-wrap gap-1.5",children:gb.map((re,F)=>H.jsx("button",{type:"button",onClick:()=>Pe(F),className:`cursor-pointer border px-2.5 py-1.5 font-mono text-[10px] tracking-[0.12em] transition-colors ${ce===F?"border-signal bg-signal text-carbon font-semibold":"border-white/12 text-muted-foreground hover:border-signal/50 hover:text-chalk"}`,children:re.toUpperCase()},re))})}),H.jsxs(eo,{label:"Assists",children:[H.jsxs("div",{className:"flex items-center justify-between",children:[H.jsxs("div",{children:[H.jsx(vf,{className:"text-xs",children:"Headlights"}),H.jsx("p",{className:"text-[11px] text-muted-foreground",children:"Override the automatic dusk switch."})]}),H.jsx(am,{checked:ge,className:"cursor-pointer",onCheckedChange:re=>{Se(re),n.current?.setHeadlights(re)}})]}),H.jsxs("div",{className:"mt-4 flex items-center gap-3",children:[H.jsx(vf,{className:"text-xs",children:"Volume"}),H.jsx(_f,{value:[Ee*100],min:0,max:100,step:5,className:"cursor-pointer",onValueChange:re=>{const F=(re[0]??50)/100;ue(F),n.current?.setVolume(F)}})]})]}),H.jsxs("div",{className:"grid gap-2",children:[H.jsx(Ds,{variant:"outline",className:"cursor-pointer",onClick:()=>n.current?.reset(),children:"Reset to the start line"}),H.jsxs("label",{className:"cursor-pointer",children:[H.jsx("input",{type:"file",accept:".glb,.gltf",className:"hidden",onChange:re=>{Ve(re.target.files?.[0]),re.target.value=""}}),H.jsxs("span",{className:"flex items-center justify-center gap-2 border border-white/12 px-3 py-2 font-mono text-[11px] tracking-[0.14em] text-muted-foreground transition-colors hover:border-signal/60 hover:text-chalk",children:[H.jsx(Y0,{className:"size-3.5"})," IMPORT .GLB CAR"]})]})]})]}),u==="car"&&H.jsxs(dp,{title:"Garage",onClose:()=>f("none"),children:[H.jsx("div",{className:"space-y-2",children:mp.map(re=>{const F=zs[re],xt=A===re;return H.jsxs("button",{type:"button",onClick:()=>je(re),className:`w-full cursor-pointer border p-3 text-left transition-colors ${xt?"border-signal bg-signal/10":"border-white/12 hover:border-signal/50"}`,children:[H.jsxs("div",{className:"flex items-baseline justify-between gap-2",children:[H.jsx("span",{className:"font-display text-sm font-bold tracking-tight",children:F.name}),H.jsx("span",{className:"font-mono text-[10px] text-muted-foreground",children:F.klass})]}),H.jsxs("div",{className:"mt-1 flex flex-wrap gap-x-3 gap-y-0.5 font-mono text-[10px] text-muted-foreground",children:[H.jsxs("span",{children:[F.powerKw," kW"]}),H.jsxs("span",{children:[F.torqueNm," Nm"]}),H.jsxs("span",{children:[F.mass," kg"]}),H.jsx("span",{className:"uppercase",children:F.drivetrain}),H.jsxs("span",{children:["0-100 ",F.zeroTo100,"s"]})]})]},re)})}),H.jsxs(eo,{label:"Model library",children:[H.jsx("p",{className:"mb-2 font-mono text-[10px] leading-relaxed text-muted-foreground",children:"Real car models fetched straight from public CDNs — no account, no API key. The wheels, size and driving spec are read off the model itself."}),H.jsx("div",{className:"space-y-2",children:K0.map(re=>{const F=_?.id===re.id,xt=v===re.id;return H.jsxs("button",{type:"button",disabled:xt,onClick:()=>{Tt(re)},className:`w-full border p-3 text-left transition-colors ${F?"border-signal bg-signal/10":"border-white/12 hover:border-signal/50"} ${xt?"cursor-wait opacity-70":"cursor-pointer"}`,children:[H.jsxs("div",{className:"flex items-baseline justify-between gap-2",children:[H.jsx("span",{className:"font-display text-sm font-bold tracking-tight",children:re.name}),H.jsxs("span",{className:"flex items-center gap-1 font-mono text-[10px] text-muted-foreground",children:[xt?"DOWNLOADING…":j0(re.bytes),xt?null:H.jsx($0,{className:"size-3"})]})]}),H.jsxs("div",{className:"mt-1 font-mono text-[10px] leading-relaxed text-muted-foreground",children:[re.detail,H.jsx("br",{}),re.license," · ",re.author]})]},re.id)})}),_||R?H.jsxs("div",{className:"mt-2 flex items-center justify-between gap-2 border border-white/12 p-2",children:[H.jsx("span",{className:"truncate font-mono text-[10px] text-muted-foreground",children:_?.name??R}),H.jsxs("button",{type:"button",onClick:tn,className:"flex shrink-0 cursor-pointer items-center gap-1 font-mono text-[10px] tracking-[0.14em] text-muted-foreground transition-colors hover:text-chalk",children:[H.jsx(im,{className:"size-3"})," TURN AROUND"]})]}):null]}),H.jsx(eo,{label:"Paint",children:H.jsx("div",{className:"flex flex-wrap gap-2",children:Cr.map(re=>H.jsx("button",{type:"button","aria-label":"paint",onClick:()=>be(re),className:`size-7 cursor-pointer border transition-transform hover:scale-110 ${O===re?"border-signal":"border-white/20"}`,style:{backgroundColor:`#${re.toString(16).padStart(6,"0")}`}},re))})}),H.jsxs(eo,{label:"This run",children:[H.jsxs("div",{className:"grid grid-cols-2 gap-2 font-mono text-[11px]",children:[H.jsx(pl,{label:"TOP SPEED",value:i?`${i.topSpeedKph.toFixed(0)} km/h`:"—"}),H.jsx(pl,{label:"0-100 KM/H",value:i?.best0to100?`${i.best0to100.toFixed(2)} s`:"—"}),H.jsx(pl,{label:"DISTANCE",value:i?`${i.distanceKm.toFixed(2)} km`:"—"}),H.jsx(pl,{label:"DRIFT PTS",value:i?Math.round(i.driftPoints).toLocaleString():"0"})]}),tt?H.jsx(Ds,{className:"mt-3 w-full cursor-pointer",onClick:vt,children:"Save run to garage"}):H.jsx(Ds,{variant:"outline",asChild:!0,className:"mt-3 w-full cursor-pointer",children:H.jsx(to,{to:"/auth?returnTo=%2Fdrive",children:"Sign in to save runs"})}),At?H.jsxs("p",{className:"mt-3 font-mono text-[10px] leading-relaxed text-muted-foreground",children:["GARAGE RECORD · ",At.topSpeedKph.toFixed(0)," km/h · ",Math.round(At.bestDriftScore).toLocaleString()," drift pts",At.best0to100?` · 0-100 ${At.best0to100.toFixed(2)} s`:""]}):null]})]}),H.jsxs(to,{to:"/",className:`absolute left-4 top-4 z-[6] hidden items-center gap-1.5 font-mono text-[10px] tracking-[0.2em] text-muted-foreground transition-opacity hover:text-chalk ${o?"":"pointer-events-none opacity-0"}`,children:[H.jsx(Q0,{className:"size-3"})," EXIT"]})]})}function Qr({label:s,value:e,hot:t,valueClass:n}){return H.jsxs("div",{className:"mt-1 flex items-baseline justify-between gap-2",children:[H.jsx("span",{className:"font-mono text-[10px] tracking-[0.1em] text-muted-foreground",children:s}),H.jsx("span",{className:`font-mono text-[11px] font-medium ${t?"text-signal":n??"text-chalk"}`,children:e})]})}function pl({label:s,value:e}){return H.jsxs("div",{className:"border border-white/10 bg-white/4 p-2",children:[H.jsx("div",{className:"text-[9px] tracking-[0.16em] text-muted-foreground",children:s}),H.jsx("div",{className:"mt-0.5 text-xs text-chalk",children:e})]})}function eo({label:s,children:e}){return H.jsxs("div",{className:"border-t border-white/10 pt-4",children:[H.jsx("div",{className:"mb-2 font-mono text-[9px] tracking-[0.28em] text-muted-foreground",children:s.toUpperCase()}),e]})}function Ou({label:s,onClick:e,children:t}){return H.jsx("button",{type:"button",title:s,onClick:e,className:"pointer-events-auto flex size-9 cursor-pointer items-center justify-center border border-white/12 bg-black/60 text-muted-foreground backdrop-blur-sm transition-colors hover:border-signal/60 hover:text-chalk",children:t})}function Xa({code:s,onPointerDown:e,onPointerUp:t,children:n}){return H.jsx("button",{type:"button","data-code":s,onPointerDown:i=>{i.preventDefault(),e()},onPointerUp:t,onPointerLeave:t,onTouchStart:i=>{i.preventDefault(),e()},onTouchEnd:t,className:"size-14 cursor-pointer touch-none border border-white/15 bg-black/55 font-mono text-[11px] tracking-[0.1em] text-chalk/80 backdrop-blur-sm active:border-signal active:bg-signal/25",children:n})}function dp({title:s,onClose:e,children:t}){return H.jsxs("div",{className:"absolute right-0 top-0 z-[8] flex h-full w-[min(92vw,360px)] flex-col border-l border-white/12 bg-carbon/95 backdrop-blur-md",children:[H.jsxs("div",{className:"flex items-center justify-between border-b border-white/10 px-4 py-3",children:[H.jsx("span",{className:"font-mono text-[11px] tracking-[0.28em] text-chalk",children:s.toUpperCase()}),H.jsx("button",{type:"button",onClick:e,className:"cursor-pointer text-muted-foreground hover:text-chalk",children:H.jsx(pp,{className:"size-4"})})]}),H.jsx("div",{className:"flex-1 space-y-5 overflow-y-auto px-4 py-4",children:t})]})}function _b({car:s,spec:e,onChooseCar:t,onStart:n,paint:i,onPaint:r,weather:o,onWeather:a,hour:c,onHour:l,isAuthenticated:u}){return H.jsx("div",{className:"absolute inset-0 z-[8] flex items-center justify-center bg-gradient-to-b from-carbon/95 via-carbon/85 to-carbon/95 p-4 backdrop-blur-[3px]",children:H.jsxs("div",{className:"max-h-full w-[min(94vw,760px)] overflow-y-auto border border-white/12 bg-black/55 p-5 sm:p-7",children:[H.jsx("div",{className:"font-mono text-[10px] tracking-[0.34em] text-signal",children:"OPEN CITY · LIVE TRAFFIC · 240 HZ VEHICLE DYNAMICS"}),H.jsx("h1",{className:"mt-1 font-display text-4xl leading-none font-bold tracking-tight sm:text-5xl",children:"APEX CITY"}),H.jsxs("p",{className:"mt-3 max-w-xl text-sm leading-relaxed text-muted-foreground",children:["Eight driveable vehicles on one 240 Hz physics core — Pacejka tyre slip, live suspension load, tyre thermics, weather grip and a city that wakes up at dusk. Pick your car, set the sky, then hold"," ",H.jsx("span",{className:"text-chalk",children:"W"}),"."]}),H.jsxs("div",{className:"mt-5 grid gap-3 sm:grid-cols-[1.4fr_1fr]",children:[H.jsxs("div",{children:[H.jsx("div",{className:"mb-2 font-mono text-[9px] tracking-[0.28em] text-muted-foreground",children:"CHOOSE YOUR CAR"}),H.jsx("div",{className:"grid max-h-[240px] gap-1.5 overflow-y-auto pr-1",children:mp.map(f=>{const h=zs[f],d=s===f;return H.jsxs("button",{type:"button",onClick:()=>t(f),className:`flex cursor-pointer items-center justify-between gap-3 border px-3 py-2 text-left transition-colors ${d?"border-signal bg-signal/10":"border-white/12 hover:border-signal/50"}`,children:[H.jsxs("span",{className:"min-w-0",children:[H.jsx("span",{className:"block font-display text-sm font-bold tracking-tight",children:h.name}),H.jsx("span",{className:"block truncate font-mono text-[10px] text-muted-foreground",children:h.klass})]}),H.jsxs("span",{className:"shrink-0 font-mono text-[10px] text-muted-foreground",children:[h.powerKw," kW · ",h.mass," kg"]})]},f)})})]}),H.jsxs("div",{className:"space-y-4",children:[H.jsxs("div",{children:[H.jsx("div",{className:"mb-2 font-mono text-[9px] tracking-[0.28em] text-muted-foreground",children:"PAINT"}),H.jsx("div",{className:"flex flex-wrap gap-1.5",children:Cr.slice(0,9).map(f=>H.jsx("button",{type:"button","aria-label":"paint",onClick:()=>r(f),className:`size-6 cursor-pointer border transition-transform hover:scale-110 ${i===f?"border-signal":"border-white/20"}`,style:{backgroundColor:`#${f.toString(16).padStart(6,"0")}`}},f))})]}),H.jsxs("div",{children:[H.jsx("div",{className:"mb-2 font-mono text-[9px] tracking-[0.28em] text-muted-foreground",children:"SKY"}),H.jsx("div",{className:"grid grid-cols-4 gap-1",children:A0.map(f=>H.jsx("button",{type:"button",onClick:()=>l(f.hour),className:`cursor-pointer border py-2 font-mono text-[9px] tracking-[0.08em] ${Math.abs(c-f.hour)<.2?"border-signal text-signal":"border-white/12 text-muted-foreground"}`,children:f.label.toUpperCase()},f.label))}),H.jsx("div",{className:"mt-1.5 grid grid-cols-3 gap-1",children:R0.map(f=>H.jsx("button",{type:"button",onClick:()=>a(f.key),className:`cursor-pointer border py-2 font-mono text-[9px] tracking-[0.08em] ${o===f.key?"border-signal text-signal":"border-white/12 text-muted-foreground"}`,children:Oh[f.key].toUpperCase()},f.key))})]}),H.jsxs("div",{className:"border border-white/10 bg-white/4 p-2 font-mono text-[10px] leading-relaxed text-muted-foreground",children:[e.length.toFixed(2)," m · ",e.mass," kg · ",e.torqueNm," Nm · ",e.drivetrain.toUpperCase(),H.jsx("br",{}),"grip ",e.grip.toFixed(2)," · drag ",e.drag.toFixed(2)," · ",e.zeroTo100,"s 0-100"]})]})]}),H.jsxs("div",{className:"mt-6 flex flex-wrap items-center gap-3",children:[H.jsxs(Ds,{className:"cursor-pointer gap-2 font-mono text-[11px] tracking-[0.2em]",size:"lg",onClick:n,children:[H.jsx(gp,{className:"size-4"})," START ENGINE"]}),H.jsx("span",{className:"font-mono text-[10px] tracking-[0.16em] text-muted-foreground",children:"W · A · S · D to drive — SPACE handbrake"}),H.jsxs("span",{className:"ml-auto flex items-center gap-2",children:[H.jsx(Mf,{variant:"outline",className:"font-mono text-[9px] tracking-[0.16em] text-muted-foreground",children:"240 HZ"}),H.jsx(Mf,{variant:"outline",className:"font-mono text-[9px] tracking-[0.16em] text-muted-foreground",children:"PACEJKA"}),u?H.jsx(to,{to:"/dashboard",className:"font-mono text-[10px] tracking-[0.16em] text-signal hover:underline",children:"MY GARAGE"}):H.jsx(to,{to:"/auth?returnTo=%2Fdashboard",className:"font-mono text-[10px] tracking-[0.16em] text-signal hover:underline",children:"SIGN IN"})]})]})]})})}export{Ab as default};
