"use strict";(self.webpackChunkspoticlone=self.webpackChunkspoticlone||[]).push([[389],{553:(pe,U,d)=>{d.d(U,{N:()=>s});const s={api:"https://api-node-spoticl.onrender.com/api/1.0"}},95:(pe,U,d)=>{d.d(U,{Fj:()=>w,NI:()=>K,u:()=>ot,cw:()=>B,sg:()=>H,u5:()=>Vn,JJ:()=>It,JL:()=>kt,On:()=>tt,UX:()=>An,kI:()=>Se,_Y:()=>Jt});var s=d(4946),ut=d(6814),ge=d(7715),me=d(5592),_e=d(7453),ye=d(4829),ve=d(4564),Ce=d(8251),Ve=d(7400),Ae=d(2714),be=d(7398);let ct=(()=>{var e;class t{constructor(n,o){this._renderer=n,this._elementRef=o,this.onChange=i=>{},this.onTouched=()=>{}}setProperty(n,o){this._renderer.setProperty(this._elementRef.nativeElement,n,o)}registerOnTouched(n){this.onTouched=n}registerOnChange(n){this.onChange=n}setDisabledState(n){this.setProperty("disabled",n)}}return(e=t).\u0275fac=function(n){return new(n||e)(s.Y36(s.Qsj),s.Y36(s.SBq))},e.\u0275dir=s.lG2({type:e}),t})(),y=(()=>{var e;class t extends ct{}return(e=t).\u0275fac=function(){let r;return function(o){return(r||(r=s.n5z(e)))(o||e)}}(),e.\u0275dir=s.lG2({type:e,features:[s.qOj]}),t})();const f=new s.OlP("NgValueAccessor"),Ee={provide:f,useExisting:(0,s.Gpc)(()=>w),multi:!0},we=new s.OlP("CompositionEventMode");let w=(()=>{var e;class t extends ct{constructor(n,o,i){super(n,o),this._compositionMode=i,this._composing=!1,null==this._compositionMode&&(this._compositionMode=!function Oe(){const e=(0,ut.q)()?(0,ut.q)().getUserAgent():"";return/android (\d+)/.test(e.toLowerCase())}())}writeValue(n){this.setProperty("value",n??"")}_handleInput(n){(!this._compositionMode||this._compositionMode&&!this._composing)&&this.onChange(n)}_compositionStart(){this._composing=!0}_compositionEnd(n){this._composing=!1,this._compositionMode&&this.onChange(n)}}return(e=t).\u0275fac=function(n){return new(n||e)(s.Y36(s.Qsj),s.Y36(s.SBq),s.Y36(we,8))},e.\u0275dir=s.lG2({type:e,selectors:[["input","formControlName","",3,"type","checkbox"],["textarea","formControlName",""],["input","formControl","",3,"type","checkbox"],["textarea","formControl",""],["input","ngModel","",3,"type","checkbox"],["textarea","ngModel",""],["","ngDefaultControl",""]],hostBindings:function(n,o){1&n&&s.NdJ("input",function(a){return o._handleInput(a.target.value)})("blur",function(){return o.onTouched()})("compositionstart",function(){return o._compositionStart()})("compositionend",function(a){return o._compositionEnd(a.target.value)})},features:[s._Bn([Ee]),s.qOj]}),t})();function p(e){return null==e||("string"==typeof e||Array.isArray(e))&&0===e.length}function ht(e){return null!=e&&"number"==typeof e.length}const u=new s.OlP("NgValidators"),g=new s.OlP("NgAsyncValidators"),Fe=/^(?=.{1,254}$)(?=.{1,64}@)[a-zA-Z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-zA-Z0-9!#$%&'*+/=?^_`{|}~-]+)*@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$/;class Se{static min(t){return function ft(e){return t=>{if(p(t.value)||p(e))return null;const r=parseFloat(t.value);return!isNaN(r)&&r<e?{min:{min:e,actual:t.value}}:null}}(t)}static max(t){return function pt(e){return t=>{if(p(t.value)||p(e))return null;const r=parseFloat(t.value);return!isNaN(r)&&r>e?{max:{max:e,actual:t.value}}:null}}(t)}static required(t){return function gt(e){return p(e.value)?{required:!0}:null}(t)}static requiredTrue(t){return function mt(e){return!0===e.value?null:{required:!0}}(t)}static email(t){return function _t(e){return p(e.value)||Fe.test(e.value)?null:{email:!0}}(t)}static minLength(t){return function yt(e){return t=>p(t.value)||!ht(t.value)?null:t.value.length<e?{minlength:{requiredLength:e,actualLength:t.value.length}}:null}(t)}static maxLength(t){return function vt(e){return t=>ht(t.value)&&t.value.length>e?{maxlength:{requiredLength:e,actualLength:t.value.length}}:null}(t)}static pattern(t){return function Ct(e){if(!e)return F;let t,r;return"string"==typeof e?(r="","^"!==e.charAt(0)&&(r+="^"),r+=e,"$"!==e.charAt(e.length-1)&&(r+="$"),t=new RegExp(r)):(r=e.toString(),t=e),n=>{if(p(n.value))return null;const o=n.value;return t.test(o)?null:{pattern:{requiredPattern:r,actualValue:o}}}}(t)}static nullValidator(t){return null}static compose(t){return Et(t)}static composeAsync(t){return Ot(t)}}function F(e){return null}function Vt(e){return null!=e}function At(e){return(0,s.QGY)(e)?(0,ge.D)(e):e}function Dt(e){let t={};return e.forEach(r=>{t=null!=r?{...t,...r}:t}),0===Object.keys(t).length?null:t}function bt(e,t){return t.map(r=>r(e))}function Mt(e){return e.map(t=>function Ne(e){return!e.validate}(t)?t:r=>t.validate(r))}function Et(e){if(!e)return null;const t=e.filter(Vt);return 0==t.length?null:function(r){return Dt(bt(r,t))}}function j(e){return null!=e?Et(Mt(e)):null}function Ot(e){if(!e)return null;const t=e.filter(Vt);return 0==t.length?null:function(r){return function De(...e){const t=(0,ve.jO)(e),{args:r,keys:n}=(0,_e.D)(e),o=new me.y(i=>{const{length:a}=r;if(!a)return void i.complete();const l=new Array(a);let h=a,V=a;for(let _=0;_<a;_++){let lt=!1;(0,ye.Xf)(r[_]).subscribe((0,Ce.x)(i,Dn=>{lt||(lt=!0,V--),l[_]=Dn},()=>h--,void 0,()=>{(!h||!lt)&&(V||i.next(n?(0,Ae.n)(n,l):l),i.complete())}))}});return t?o.pipe((0,Ve.Z)(t)):o}(bt(r,t).map(At)).pipe((0,be.U)(Dt))}}function R(e){return null!=e?Ot(Mt(e)):null}function wt(e,t){return null===e?[t]:Array.isArray(e)?[...e,t]:[e,t]}function Ft(e){return e._rawValidators}function St(e){return e._rawAsyncValidators}function L(e){return e?Array.isArray(e)?e:[e]:[]}function S(e,t){return Array.isArray(e)?e.includes(t):e===t}function Nt(e,t){const r=L(t);return L(e).forEach(o=>{S(r,o)||r.push(o)}),r}function Gt(e,t){return L(t).filter(r=>!S(e,r))}class xt{constructor(){this._rawValidators=[],this._rawAsyncValidators=[],this._onDestroyCallbacks=[]}get value(){return this.control?this.control.value:null}get valid(){return this.control?this.control.valid:null}get invalid(){return this.control?this.control.invalid:null}get pending(){return this.control?this.control.pending:null}get disabled(){return this.control?this.control.disabled:null}get enabled(){return this.control?this.control.enabled:null}get errors(){return this.control?this.control.errors:null}get pristine(){return this.control?this.control.pristine:null}get dirty(){return this.control?this.control.dirty:null}get touched(){return this.control?this.control.touched:null}get status(){return this.control?this.control.status:null}get untouched(){return this.control?this.control.untouched:null}get statusChanges(){return this.control?this.control.statusChanges:null}get valueChanges(){return this.control?this.control.valueChanges:null}get path(){return null}_setValidators(t){this._rawValidators=t||[],this._composedValidatorFn=j(this._rawValidators)}_setAsyncValidators(t){this._rawAsyncValidators=t||[],this._composedAsyncValidatorFn=R(this._rawAsyncValidators)}get validator(){return this._composedValidatorFn||null}get asyncValidator(){return this._composedAsyncValidatorFn||null}_registerOnDestroy(t){this._onDestroyCallbacks.push(t)}_invokeOnDestroyCallbacks(){this._onDestroyCallbacks.forEach(t=>t()),this._onDestroyCallbacks=[]}reset(t=void 0){this.control&&this.control.reset(t)}hasError(t,r){return!!this.control&&this.control.hasError(t,r)}getError(t,r){return this.control?this.control.getError(t,r):null}}class c extends xt{get formDirective(){return null}get path(){return null}}class m extends xt{constructor(){super(...arguments),this._parent=null,this.name=null,this.valueAccessor=null}}class Bt{constructor(t){this._cd=t}get isTouched(){return!!this._cd?.control?.touched}get isUntouched(){return!!this._cd?.control?.untouched}get isPristine(){return!!this._cd?.control?.pristine}get isDirty(){return!!this._cd?.control?.dirty}get isValid(){return!!this._cd?.control?.valid}get isInvalid(){return!!this._cd?.control?.invalid}get isPending(){return!!this._cd?.control?.pending}get isSubmitted(){return!!this._cd?.submitted}}let It=(()=>{var e;class t extends Bt{constructor(n){super(n)}}return(e=t).\u0275fac=function(n){return new(n||e)(s.Y36(m,2))},e.\u0275dir=s.lG2({type:e,selectors:[["","formControlName",""],["","ngModel",""],["","formControl",""]],hostVars:14,hostBindings:function(n,o){2&n&&s.ekj("ng-untouched",o.isUntouched)("ng-touched",o.isTouched)("ng-pristine",o.isPristine)("ng-dirty",o.isDirty)("ng-valid",o.isValid)("ng-invalid",o.isInvalid)("ng-pending",o.isPending)},features:[s.qOj]}),t})(),kt=(()=>{var e;class t extends Bt{constructor(n){super(n)}}return(e=t).\u0275fac=function(n){return new(n||e)(s.Y36(c,10))},e.\u0275dir=s.lG2({type:e,selectors:[["","formGroupName",""],["","formArrayName",""],["","ngModelGroup",""],["","formGroup",""],["form",3,"ngNoForm",""],["","ngForm",""]],hostVars:16,hostBindings:function(n,o){2&n&&s.ekj("ng-untouched",o.isUntouched)("ng-touched",o.isTouched)("ng-pristine",o.isPristine)("ng-dirty",o.isDirty)("ng-valid",o.isValid)("ng-invalid",o.isInvalid)("ng-pending",o.isPending)("ng-submitted",o.isSubmitted)},features:[s.qOj]}),t})();const D="VALID",G="INVALID",A="PENDING",b="DISABLED";function W(e){return(x(e)?e.validators:e)||null}function $(e,t){return(x(t)?t.asyncValidators:e)||null}function x(e){return null!=e&&!Array.isArray(e)&&"object"==typeof e}class Ut{constructor(t,r){this._pendingDirty=!1,this._hasOwnPendingAsyncValidator=!1,this._pendingTouched=!1,this._onCollectionChange=()=>{},this._parent=null,this.pristine=!0,this.touched=!1,this._onDisabledChange=[],this._assignValidators(t),this._assignAsyncValidators(r)}get validator(){return this._composedValidatorFn}set validator(t){this._rawValidators=this._composedValidatorFn=t}get asyncValidator(){return this._composedAsyncValidatorFn}set asyncValidator(t){this._rawAsyncValidators=this._composedAsyncValidatorFn=t}get parent(){return this._parent}get valid(){return this.status===D}get invalid(){return this.status===G}get pending(){return this.status==A}get disabled(){return this.status===b}get enabled(){return this.status!==b}get dirty(){return!this.pristine}get untouched(){return!this.touched}get updateOn(){return this._updateOn?this._updateOn:this.parent?this.parent.updateOn:"change"}setValidators(t){this._assignValidators(t)}setAsyncValidators(t){this._assignAsyncValidators(t)}addValidators(t){this.setValidators(Nt(t,this._rawValidators))}addAsyncValidators(t){this.setAsyncValidators(Nt(t,this._rawAsyncValidators))}removeValidators(t){this.setValidators(Gt(t,this._rawValidators))}removeAsyncValidators(t){this.setAsyncValidators(Gt(t,this._rawAsyncValidators))}hasValidator(t){return S(this._rawValidators,t)}hasAsyncValidator(t){return S(this._rawAsyncValidators,t)}clearValidators(){this.validator=null}clearAsyncValidators(){this.asyncValidator=null}markAsTouched(t={}){this.touched=!0,this._parent&&!t.onlySelf&&this._parent.markAsTouched(t)}markAllAsTouched(){this.markAsTouched({onlySelf:!0}),this._forEachChild(t=>t.markAllAsTouched())}markAsUntouched(t={}){this.touched=!1,this._pendingTouched=!1,this._forEachChild(r=>{r.markAsUntouched({onlySelf:!0})}),this._parent&&!t.onlySelf&&this._parent._updateTouched(t)}markAsDirty(t={}){this.pristine=!1,this._parent&&!t.onlySelf&&this._parent.markAsDirty(t)}markAsPristine(t={}){this.pristine=!0,this._pendingDirty=!1,this._forEachChild(r=>{r.markAsPristine({onlySelf:!0})}),this._parent&&!t.onlySelf&&this._parent._updatePristine(t)}markAsPending(t={}){this.status=A,!1!==t.emitEvent&&this.statusChanges.emit(this.status),this._parent&&!t.onlySelf&&this._parent.markAsPending(t)}disable(t={}){const r=this._parentMarkedDirty(t.onlySelf);this.status=b,this.errors=null,this._forEachChild(n=>{n.disable({...t,onlySelf:!0})}),this._updateValue(),!1!==t.emitEvent&&(this.valueChanges.emit(this.value),this.statusChanges.emit(this.status)),this._updateAncestors({...t,skipPristineCheck:r}),this._onDisabledChange.forEach(n=>n(!0))}enable(t={}){const r=this._parentMarkedDirty(t.onlySelf);this.status=D,this._forEachChild(n=>{n.enable({...t,onlySelf:!0})}),this.updateValueAndValidity({onlySelf:!0,emitEvent:t.emitEvent}),this._updateAncestors({...t,skipPristineCheck:r}),this._onDisabledChange.forEach(n=>n(!1))}_updateAncestors(t){this._parent&&!t.onlySelf&&(this._parent.updateValueAndValidity(t),t.skipPristineCheck||this._parent._updatePristine(),this._parent._updateTouched())}setParent(t){this._parent=t}getRawValue(){return this.value}updateValueAndValidity(t={}){this._setInitialStatus(),this._updateValue(),this.enabled&&(this._cancelExistingSubscription(),this.errors=this._runValidator(),this.status=this._calculateStatus(),(this.status===D||this.status===A)&&this._runAsyncValidator(t.emitEvent)),!1!==t.emitEvent&&(this.valueChanges.emit(this.value),this.statusChanges.emit(this.status)),this._parent&&!t.onlySelf&&this._parent.updateValueAndValidity(t)}_updateTreeValidity(t={emitEvent:!0}){this._forEachChild(r=>r._updateTreeValidity(t)),this.updateValueAndValidity({onlySelf:!0,emitEvent:t.emitEvent})}_setInitialStatus(){this.status=this._allControlsDisabled()?b:D}_runValidator(){return this.validator?this.validator(this):null}_runAsyncValidator(t){if(this.asyncValidator){this.status=A,this._hasOwnPendingAsyncValidator=!0;const r=At(this.asyncValidator(this));this._asyncValidationSubscription=r.subscribe(n=>{this._hasOwnPendingAsyncValidator=!1,this.setErrors(n,{emitEvent:t})})}}_cancelExistingSubscription(){this._asyncValidationSubscription&&(this._asyncValidationSubscription.unsubscribe(),this._hasOwnPendingAsyncValidator=!1)}setErrors(t,r={}){this.errors=t,this._updateControlsErrors(!1!==r.emitEvent)}get(t){let r=t;return null==r||(Array.isArray(r)||(r=r.split(".")),0===r.length)?null:r.reduce((n,o)=>n&&n._find(o),this)}getError(t,r){const n=r?this.get(r):this;return n&&n.errors?n.errors[t]:null}hasError(t,r){return!!this.getError(t,r)}get root(){let t=this;for(;t._parent;)t=t._parent;return t}_updateControlsErrors(t){this.status=this._calculateStatus(),t&&this.statusChanges.emit(this.status),this._parent&&this._parent._updateControlsErrors(t)}_initObservables(){this.valueChanges=new s.vpe,this.statusChanges=new s.vpe}_calculateStatus(){return this._allControlsDisabled()?b:this.errors?G:this._hasOwnPendingAsyncValidator||this._anyControlsHaveStatus(A)?A:this._anyControlsHaveStatus(G)?G:D}_anyControlsHaveStatus(t){return this._anyControls(r=>r.status===t)}_anyControlsDirty(){return this._anyControls(t=>t.dirty)}_anyControlsTouched(){return this._anyControls(t=>t.touched)}_updatePristine(t={}){this.pristine=!this._anyControlsDirty(),this._parent&&!t.onlySelf&&this._parent._updatePristine(t)}_updateTouched(t={}){this.touched=this._anyControlsTouched(),this._parent&&!t.onlySelf&&this._parent._updateTouched(t)}_registerOnCollectionChange(t){this._onCollectionChange=t}_setUpdateStrategy(t){x(t)&&null!=t.updateOn&&(this._updateOn=t.updateOn)}_parentMarkedDirty(t){return!t&&!(!this._parent||!this._parent.dirty)&&!this._parent._anyControlsDirty()}_find(t){return null}_assignValidators(t){this._rawValidators=Array.isArray(t)?t.slice():t,this._composedValidatorFn=function Ie(e){return Array.isArray(e)?j(e):e||null}(this._rawValidators)}_assignAsyncValidators(t){this._rawAsyncValidators=Array.isArray(t)?t.slice():t,this._composedAsyncValidatorFn=function ke(e){return Array.isArray(e)?R(e):e||null}(this._rawAsyncValidators)}}class B extends Ut{constructor(t,r,n){super(W(r),$(n,r)),this.controls=t,this._initObservables(),this._setUpdateStrategy(r),this._setUpControls(),this.updateValueAndValidity({onlySelf:!0,emitEvent:!!this.asyncValidator})}registerControl(t,r){return this.controls[t]?this.controls[t]:(this.controls[t]=r,r.setParent(this),r._registerOnCollectionChange(this._onCollectionChange),r)}addControl(t,r,n={}){this.registerControl(t,r),this.updateValueAndValidity({emitEvent:n.emitEvent}),this._onCollectionChange()}removeControl(t,r={}){this.controls[t]&&this.controls[t]._registerOnCollectionChange(()=>{}),delete this.controls[t],this.updateValueAndValidity({emitEvent:r.emitEvent}),this._onCollectionChange()}setControl(t,r,n={}){this.controls[t]&&this.controls[t]._registerOnCollectionChange(()=>{}),delete this.controls[t],r&&this.registerControl(t,r),this.updateValueAndValidity({emitEvent:n.emitEvent}),this._onCollectionChange()}contains(t){return this.controls.hasOwnProperty(t)&&this.controls[t].enabled}setValue(t,r={}){(function Ht(e,t,r){e._forEachChild((n,o)=>{if(void 0===r[o])throw new s.vHH(1002,"")})})(this,0,t),Object.keys(t).forEach(n=>{(function Tt(e,t,r){const n=e.controls;if(!(t?Object.keys(n):n).length)throw new s.vHH(1e3,"");if(!n[r])throw new s.vHH(1001,"")})(this,!0,n),this.controls[n].setValue(t[n],{onlySelf:!0,emitEvent:r.emitEvent})}),this.updateValueAndValidity(r)}patchValue(t,r={}){null!=t&&(Object.keys(t).forEach(n=>{const o=this.controls[n];o&&o.patchValue(t[n],{onlySelf:!0,emitEvent:r.emitEvent})}),this.updateValueAndValidity(r))}reset(t={},r={}){this._forEachChild((n,o)=>{n.reset(t[o],{onlySelf:!0,emitEvent:r.emitEvent})}),this._updatePristine(r),this._updateTouched(r),this.updateValueAndValidity(r)}getRawValue(){return this._reduceChildren({},(t,r,n)=>(t[n]=r.getRawValue(),t))}_syncPendingControls(){let t=this._reduceChildren(!1,(r,n)=>!!n._syncPendingControls()||r);return t&&this.updateValueAndValidity({onlySelf:!0}),t}_forEachChild(t){Object.keys(this.controls).forEach(r=>{const n=this.controls[r];n&&t(n,r)})}_setUpControls(){this._forEachChild(t=>{t.setParent(this),t._registerOnCollectionChange(this._onCollectionChange)})}_updateValue(){this.value=this._reduceValue()}_anyControls(t){for(const[r,n]of Object.entries(this.controls))if(this.contains(r)&&t(n))return!0;return!1}_reduceValue(){return this._reduceChildren({},(r,n,o)=>((n.enabled||this.disabled)&&(r[o]=n.value),r))}_reduceChildren(t,r){let n=t;return this._forEachChild((o,i)=>{n=r(n,o,i)}),n}_allControlsDisabled(){for(const t of Object.keys(this.controls))if(this.controls[t].enabled)return!1;return Object.keys(this.controls).length>0||this.disabled}_find(t){return this.controls.hasOwnProperty(t)?this.controls[t]:null}}const v=new s.OlP("CallSetDisabledState",{providedIn:"root",factory:()=>M}),M="always";function I(e,t){return[...t.path,e]}function E(e,t,r=M){z(e,t),t.valueAccessor.writeValue(e.value),(e.disabled||"always"===r)&&t.valueAccessor.setDisabledState?.(e.disabled),function He(e,t){t.valueAccessor.registerOnChange(r=>{e._pendingValue=r,e._pendingChange=!0,e._pendingDirty=!0,"change"===e.updateOn&&jt(e,t)})}(e,t),function je(e,t){const r=(n,o)=>{t.valueAccessor.writeValue(n),o&&t.viewToModelUpdate(n)};e.registerOnChange(r),t._registerOnDestroy(()=>{e._unregisterOnChange(r)})}(e,t),function Ue(e,t){t.valueAccessor.registerOnTouched(()=>{e._pendingTouched=!0,"blur"===e.updateOn&&e._pendingChange&&jt(e,t),"submit"!==e.updateOn&&e.markAsTouched()})}(e,t),function Te(e,t){if(t.valueAccessor.setDisabledState){const r=n=>{t.valueAccessor.setDisabledState(n)};e.registerOnDisabledChange(r),t._registerOnDestroy(()=>{e._unregisterOnDisabledChange(r)})}}(e,t)}function k(e,t,r=!0){const n=()=>{};t.valueAccessor&&(t.valueAccessor.registerOnChange(n),t.valueAccessor.registerOnTouched(n)),T(e,t),e&&(t._invokeOnDestroyCallbacks(),e._registerOnCollectionChange(()=>{}))}function P(e,t){e.forEach(r=>{r.registerOnValidatorChange&&r.registerOnValidatorChange(t)})}function z(e,t){const r=Ft(e);null!==t.validator?e.setValidators(wt(r,t.validator)):"function"==typeof r&&e.setValidators([r]);const n=St(e);null!==t.asyncValidator?e.setAsyncValidators(wt(n,t.asyncValidator)):"function"==typeof n&&e.setAsyncValidators([n]);const o=()=>e.updateValueAndValidity();P(t._rawValidators,o),P(t._rawAsyncValidators,o)}function T(e,t){let r=!1;if(null!==e){if(null!==t.validator){const o=Ft(e);if(Array.isArray(o)&&o.length>0){const i=o.filter(a=>a!==t.validator);i.length!==o.length&&(r=!0,e.setValidators(i))}}if(null!==t.asyncValidator){const o=St(e);if(Array.isArray(o)&&o.length>0){const i=o.filter(a=>a!==t.asyncValidator);i.length!==o.length&&(r=!0,e.setAsyncValidators(i))}}}const n=()=>{};return P(t._rawValidators,n),P(t._rawAsyncValidators,n),r}function jt(e,t){e._pendingDirty&&e.markAsDirty(),e.setValue(e._pendingValue,{emitModelToViewChange:!1}),t.viewToModelUpdate(e._pendingValue),e._pendingChange=!1}function Z(e,t){if(!e.hasOwnProperty("model"))return!1;const r=e.model;return!!r.isFirstChange()||!Object.is(t,r.currentValue)}function Q(e,t){if(!t)return null;let r,n,o;return Array.isArray(t),t.forEach(i=>{i.constructor===w?r=i:function Ye(e){return Object.getPrototypeOf(e.constructor)===y}(i)?n=i:o=i}),o||n||r||null}function Yt(e,t){const r=e.indexOf(t);r>-1&&e.splice(r,1)}function qt(e){return"object"==typeof e&&null!==e&&2===Object.keys(e).length&&"value"in e&&"disabled"in e}const K=class extends Ut{constructor(t=null,r,n){super(W(r),$(n,r)),this.defaultValue=null,this._onChange=[],this._pendingChange=!1,this._applyFormState(t),this._setUpdateStrategy(r),this._initObservables(),this.updateValueAndValidity({onlySelf:!0,emitEvent:!!this.asyncValidator}),x(r)&&(r.nonNullable||r.initialValueIsDefault)&&(this.defaultValue=qt(t)?t.value:t)}setValue(t,r={}){this.value=this._pendingValue=t,this._onChange.length&&!1!==r.emitModelToViewChange&&this._onChange.forEach(n=>n(this.value,!1!==r.emitViewToModelChange)),this.updateValueAndValidity(r)}patchValue(t,r={}){this.setValue(t,r)}reset(t=this.defaultValue,r={}){this._applyFormState(t),this.markAsPristine(r),this.markAsUntouched(r),this.setValue(this.value,r),this._pendingChange=!1}_updateValue(){}_anyControls(t){return!1}_allControlsDisabled(){return this.disabled}registerOnChange(t){this._onChange.push(t)}_unregisterOnChange(t){Yt(this._onChange,t)}registerOnDisabledChange(t){this._onDisabledChange.push(t)}_unregisterOnDisabledChange(t){Yt(this._onDisabledChange,t)}_forEachChild(t){}_syncPendingControls(){return!("submit"!==this.updateOn||(this._pendingDirty&&this.markAsDirty(),this._pendingTouched&&this.markAsTouched(),!this._pendingChange)||(this.setValue(this._pendingValue,{onlySelf:!0,emitModelToViewChange:!1}),0))}_applyFormState(t){qt(t)?(this.value=this._pendingValue=t.value,t.disabled?this.disable({onlySelf:!0,emitEvent:!1}):this.enable({onlySelf:!0,emitEvent:!1})):this.value=this._pendingValue=t}},Je={provide:m,useExisting:(0,s.Gpc)(()=>tt)},zt=(()=>Promise.resolve())();let tt=(()=>{var e;class t extends m{constructor(n,o,i,a,l,h){super(),this._changeDetectorRef=l,this.callSetDisabledState=h,this.control=new K,this._registered=!1,this.name="",this.update=new s.vpe,this._parent=n,this._setValidators(o),this._setAsyncValidators(i),this.valueAccessor=Q(0,a)}ngOnChanges(n){if(this._checkForErrors(),!this._registered||"name"in n){if(this._registered&&(this._checkName(),this.formDirective)){const o=n.name.previousValue;this.formDirective.removeControl({name:o,path:this._getPath(o)})}this._setUpControl()}"isDisabled"in n&&this._updateDisabled(n),Z(n,this.viewModel)&&(this._updateValue(this.model),this.viewModel=this.model)}ngOnDestroy(){this.formDirective&&this.formDirective.removeControl(this)}get path(){return this._getPath(this.name)}get formDirective(){return this._parent?this._parent.formDirective:null}viewToModelUpdate(n){this.viewModel=n,this.update.emit(n)}_setUpControl(){this._setUpdateStrategy(),this._isStandalone()?this._setUpStandalone():this.formDirective.addControl(this),this._registered=!0}_setUpdateStrategy(){this.options&&null!=this.options.updateOn&&(this.control._updateOn=this.options.updateOn)}_isStandalone(){return!this._parent||!(!this.options||!this.options.standalone)}_setUpStandalone(){E(this.control,this,this.callSetDisabledState),this.control.updateValueAndValidity({emitEvent:!1})}_checkForErrors(){this._isStandalone()||this._checkParentType(),this._checkName()}_checkParentType(){}_checkName(){this.options&&this.options.name&&(this.name=this.options.name),this._isStandalone()}_updateValue(n){zt.then(()=>{this.control.setValue(n,{emitViewToModelChange:!1}),this._changeDetectorRef?.markForCheck()})}_updateDisabled(n){const o=n.isDisabled.currentValue,i=0!==o&&(0,s.VuI)(o);zt.then(()=>{i&&!this.control.disabled?this.control.disable():!i&&this.control.disabled&&this.control.enable(),this._changeDetectorRef?.markForCheck()})}_getPath(n){return this._parent?I(n,this._parent):[n]}}return(e=t).\u0275fac=function(n){return new(n||e)(s.Y36(c,9),s.Y36(u,10),s.Y36(g,10),s.Y36(f,10),s.Y36(s.sBO,8),s.Y36(v,8))},e.\u0275dir=s.lG2({type:e,selectors:[["","ngModel","",3,"formControlName","",3,"formControl",""]],inputs:{name:"name",isDisabled:["disabled","isDisabled"],model:["ngModel","model"],options:["ngModelOptions","options"]},outputs:{update:"ngModelChange"},exportAs:["ngModel"],features:[s._Bn([Je]),s.qOj,s.TTD]}),t})(),Jt=(()=>{var e;class t{}return(e=t).\u0275fac=function(n){return new(n||e)},e.\u0275dir=s.lG2({type:e,selectors:[["form",3,"ngNoForm","",3,"ngNativeValidate",""]],hostAttrs:["novalidate",""]}),t})(),Qt=(()=>{var e;class t{}return(e=t).\u0275fac=function(n){return new(n||e)},e.\u0275mod=s.oAB({type:e}),e.\u0275inj=s.cJS({}),t})();const et=new s.OlP("NgModelWithFormControlWarning"),en={provide:c,useExisting:(0,s.Gpc)(()=>H)};let H=(()=>{var e;class t extends c{constructor(n,o,i){super(),this.callSetDisabledState=i,this.submitted=!1,this._onCollectionChange=()=>this._updateDomValue(),this.directives=[],this.form=null,this.ngSubmit=new s.vpe,this._setValidators(n),this._setAsyncValidators(o)}ngOnChanges(n){this._checkFormPresent(),n.hasOwnProperty("form")&&(this._updateValidators(),this._updateDomValue(),this._updateRegistrations(),this._oldForm=this.form)}ngOnDestroy(){this.form&&(T(this.form,this),this.form._onCollectionChange===this._onCollectionChange&&this.form._registerOnCollectionChange(()=>{}))}get formDirective(){return this}get control(){return this.form}get path(){return[]}addControl(n){const o=this.form.get(n.path);return E(o,n,this.callSetDisabledState),o.updateValueAndValidity({emitEvent:!1}),this.directives.push(n),o}getControl(n){return this.form.get(n.path)}removeControl(n){k(n.control||null,n,!1),function qe(e,t){const r=e.indexOf(t);r>-1&&e.splice(r,1)}(this.directives,n)}addFormGroup(n){this._setUpFormContainer(n)}removeFormGroup(n){this._cleanUpFormContainer(n)}getFormGroup(n){return this.form.get(n.path)}addFormArray(n){this._setUpFormContainer(n)}removeFormArray(n){this._cleanUpFormContainer(n)}getFormArray(n){return this.form.get(n.path)}updateModel(n,o){this.form.get(n.path).setValue(o)}onSubmit(n){return this.submitted=!0,function Lt(e,t){e._syncPendingControls(),t.forEach(r=>{const n=r.control;"submit"===n.updateOn&&n._pendingChange&&(r.viewToModelUpdate(n._pendingValue),n._pendingChange=!1)})}(this.form,this.directives),this.ngSubmit.emit(n),"dialog"===n?.target?.method}onReset(){this.resetForm()}resetForm(n=void 0){this.form.reset(n),this.submitted=!1}_updateDomValue(){this.directives.forEach(n=>{const o=n.control,i=this.form.get(n.path);o!==i&&(k(o||null,n),(e=>e instanceof K)(i)&&(E(i,n,this.callSetDisabledState),n.control=i))}),this.form._updateTreeValidity({emitEvent:!1})}_setUpFormContainer(n){const o=this.form.get(n.path);(function Rt(e,t){z(e,t)})(o,n),o.updateValueAndValidity({emitEvent:!1})}_cleanUpFormContainer(n){if(this.form){const o=this.form.get(n.path);o&&function Re(e,t){return T(e,t)}(o,n)&&o.updateValueAndValidity({emitEvent:!1})}}_updateRegistrations(){this.form._registerOnCollectionChange(this._onCollectionChange),this._oldForm&&this._oldForm._registerOnCollectionChange(()=>{})}_updateValidators(){z(this.form,this),this._oldForm&&T(this._oldForm,this)}_checkFormPresent(){}}return(e=t).\u0275fac=function(n){return new(n||e)(s.Y36(u,10),s.Y36(g,10),s.Y36(v,8))},e.\u0275dir=s.lG2({type:e,selectors:[["","formGroup",""]],hostBindings:function(n,o){1&n&&s.NdJ("submit",function(a){return o.onSubmit(a)})("reset",function(){return o.onReset()})},inputs:{form:["formGroup","form"]},outputs:{ngSubmit:"ngSubmit"},exportAs:["ngForm"],features:[s._Bn([en]),s.qOj,s.TTD]}),t})();const on={provide:m,useExisting:(0,s.Gpc)(()=>ot)};let ot=(()=>{var e;class t extends m{set isDisabled(n){}constructor(n,o,i,a,l){super(),this._ngModelWarningConfig=l,this._added=!1,this.name=null,this.update=new s.vpe,this._ngModelWarningSent=!1,this._parent=n,this._setValidators(o),this._setAsyncValidators(i),this.valueAccessor=Q(0,a)}ngOnChanges(n){this._added||this._setUpControl(),Z(n,this.viewModel)&&(this.viewModel=this.model,this.formDirective.updateModel(this,this.model))}ngOnDestroy(){this.formDirective&&this.formDirective.removeControl(this)}viewToModelUpdate(n){this.viewModel=n,this.update.emit(n)}get path(){return I(null==this.name?this.name:this.name.toString(),this._parent)}get formDirective(){return this._parent?this._parent.formDirective:null}_checkParentType(){}_setUpControl(){this._checkParentType(),this.control=this.formDirective.addControl(this),this._added=!0}}return(e=t)._ngModelWarningSentOnce=!1,e.\u0275fac=function(n){return new(n||e)(s.Y36(c,13),s.Y36(u,10),s.Y36(g,10),s.Y36(f,10),s.Y36(et,8))},e.\u0275dir=s.lG2({type:e,selectors:[["","formControlName",""]],inputs:{name:["formControlName","name"],isDisabled:["disabled","isDisabled"],model:["ngModel","model"]},outputs:{update:"ngModelChange"},features:[s._Bn([on]),s.qOj,s.TTD]}),t})(),fe=(()=>{var e;class t{}return(e=t).\u0275fac=function(n){return new(n||e)},e.\u0275mod=s.oAB({type:e}),e.\u0275inj=s.cJS({imports:[Qt]}),t})(),Vn=(()=>{var e;class t{static withConfig(n){return{ngModule:t,providers:[{provide:v,useValue:n.callSetDisabledState??M}]}}}return(e=t).\u0275fac=function(n){return new(n||e)},e.\u0275mod=s.oAB({type:e}),e.\u0275inj=s.cJS({imports:[fe]}),t})(),An=(()=>{var e;class t{static withConfig(n){return{ngModule:t,providers:[{provide:et,useValue:n.warnOnNgModelWithFormControl??"always"},{provide:v,useValue:n.callSetDisabledState??M}]}}}return(e=t).\u0275fac=function(n){return new(n||e)},e.\u0275mod=s.oAB({type:e}),e.\u0275inj=s.cJS({imports:[fe]}),t})()}}]);