"use strict";(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[708],{1018:function(n,r,e){e.r(r),e.d(r,{default:function(){return N}});var o,a,t,i,s,d,l,h,p=e(168),x=e(9256),c=e.p+"static/media/registration_desktop@1x.b4f9afaba45efef6d8d0.jpg",u=x.ZP.div(o||(o=(0,p.Z)(["\n  width: 100%;\n  height: 100vh;\n  background-image: url(",");\n  //background-color: rgba(255, 255, 255, 0.3);\n  background-size: cover;\n  background-position: center;\n  background-repeat: no-repeat;\n  border-radius: 0px;\n"])),c),m=x.ZP.div(a||(a=(0,p.Z)(["\n  margin: 0 auto;\n  width: 100%;\n  max-width: 533px;\n  height: 613px;\n  /* padding: 80px 62px; */  \n  border-radius: 14px;\n  position: absolute;\n  top: 50%;\n  left: 50%;\n  transform: translate(-50%, -50%);  \n  background-color: var( --form-color);\n  \n\n  h3 {\n    margin: 0 auto;\n    color: var(--white);\n    font-size: 28px;\n    font-weight: 400;\n    line-height: 40px;\n  }\n  @media (max-width: 780px) {\n    padding: 23px 20px;\n    max-width: 280px;\n    //width: 533px;\n  }\n  \n"]))),w=x.ZP.div(t||(t=(0,p.Z)(["\n  width: 100%;\n  margin: 32px auto 32px;\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n"]))),g=e(9439),v=e(9434),f=e(1087),b=e(4855),Z=e(5705),j=e(8007),P=e(9407),y=e(9009),k=e(835),C=e(501),B=e(4281),_=e(5242),A=e(7455),I=e(3710),z=e(9569),S=e(2791),T=x.ZP.div(i||(i=(0,p.Z)(["\nwidth: 100%;\nmax-width: 410px;\nmargin: 0 auto;\n"]))),W=x.ZP.div(s||(s=(0,p.Z)(["\ndisplay: flex;\nflex-direction: column;\nmargin-bottom: 52px;\ngap: 40px;\n\ndiv{\n    height: 38px;\n}\n"]))),q=x.ZP.div(d||(d=(0,p.Z)(["\n  margin: 0 auto;\n  width: 100%;\n  max-width: 300px;\n  display: flex;\n  flex-direction: column;\n  gap: 20px;\n\n  button {\n    width: 100%;\n    max-width: 300px;\n    height: 50px;\n    border-radius: 20px;\n    font-size: 18px;\n    text-transform: uppercase;\n    box-shadow: var(--button-shadow);\n    transition: transform 300ms ease-in;\n    border: transparent;\n\n    &:hover {\n      border: 1px solid rgba(74, 86, 226, 1);\n      transform: scale(1.02);\n    }\n  }\n  @media (max-width: 780px) {\n    button {\n      max-width: 280px;\n    }\n  }\n"]))),M=x.ZP.button(l||(l=(0,p.Z)(["\n  color: var(--white);\n  background-image: var(--button-gradient);\n"]))),R=x.ZP.button(h||(h=(0,p.Z)(["\n  color: var(--white-button-text);\n  background-color: var(--white-button-bg);\n"]))),D=e(184),E=function(){var n=(0,S.useState)(!1),r=(0,g.Z)(n,2),e=r[0],o=r[1],a=function(){return o((function(n){return!n}))},t=function(n){n.preventDefault()},i=(0,v.I0)(),s=j.Ry({email:j.Z_().email("Invalid email address").required("Required"),password:j.Z_().min(6).max(12).required("Required")});return(0,D.jsx)(Z.J9,{initialValues:{email:"",password:""},onSubmit:function(n){return function(n){if(n.password===n.confirmPassword){var r={username:n.username,email:n.email,password:n.password};i((0,b.registerUserThunk)(r))}else(0,A.eB)()}(n)},validationSchema:s,children:function(n){return(0,D.jsx)(Z.l0,{onSubmit:n.handleSubmit,children:(0,D.jsxs)(T,{children:[(0,D.jsxs)(W,{children:[(0,D.jsx)(P.Z,{InputProps:{startAdornment:(0,D.jsx)(y.Z,{position:"start",children:(0,D.jsx)(C.Z,{sx:{color:"var(--white-40)"}})})},sx:{input:{color:"var(--white)"}},autoFocus:Boolean("true"),color:"secondary",fullWidth:Boolean("true"),placeholder:"Name",variant:"standard",label:"Name",name:"username",type:"text",onChange:n.handleChange,error:Boolean(n.errors.username),helperText:n.errors.username&&"Please enter your name"}),(0,D.jsx)(P.Z,{InputProps:{startAdornment:(0,D.jsx)(y.Z,{position:"start",children:(0,D.jsx)(B.Z,{sx:{color:"var(--white-40)"}})})},sx:{input:{color:"var(--white)"}},color:"secondary",fullWidth:Boolean("true"),placeholder:"Email",variant:"standard",label:"Email",name:"email",type:"email",onChange:n.handleChange,error:Boolean(n.errors.email),helperText:n.errors.email&&"Please enter a valid email address"}),(0,D.jsx)(P.Z,{InputProps:{startAdornment:(0,D.jsx)(y.Z,{position:"start",children:(0,D.jsx)(_.Z,{sx:{color:"var(--white-40)"}})}),endAdornment:(0,D.jsx)(y.Z,{position:"end",children:(0,D.jsx)(k.Z,{sx:{color:"var(--white-40)"},"aria-label":"toggle password visibility",onClick:a,onMouseDown:t,children:e?(0,D.jsx)(I.Z,{}):(0,D.jsx)(z.Z,{})})})},sx:{input:{color:"var(--white)"}},color:"secondary",fullWidth:Boolean("true"),placeholder:"Password",variant:"standard",label:"Password",name:"password",type:e?"text":"password",onChange:n.handleChange,error:Boolean(n.errors.password),helperText:n.errors.password&&"Please enter your valid password (from 6 to 12 symbols)"}),(0,D.jsx)(P.Z,{InputProps:{startAdornment:(0,D.jsx)(y.Z,{position:"start",children:(0,D.jsx)(_.Z,{sx:{color:"var(--white-40)"}})}),endAdornment:(0,D.jsx)(y.Z,{position:"end",children:(0,D.jsx)(k.Z,{sx:{color:"var(--white-40)"},"aria-label":"toggle password visibility",onClick:a,onMouseDown:t,children:e?(0,D.jsx)(I.Z,{}):(0,D.jsx)(z.Z,{})})})},sx:{input:{color:"var(--white)"}},color:"secondary",fullWidth:Boolean("true"),placeholder:"Confirm password",variant:"standard",label:"Confirm password",name:"confirmPassword",type:e?"text":"password",onChange:n.handleChange,error:Boolean(n.errors.confirmPassword),helperText:n.errors.confirmPassword&&"Please enter your valid password"})]}),(0,D.jsxs)(q,{children:[(0,D.jsx)(M,{type:"submit",children:"Register"}),(0,D.jsx)(f.rU,{to:"/login",children:(0,D.jsx)(R,{type:"submit",children:"Log in"})})]})]})})}})},L=e(7430);var N=function(){return(0,D.jsx)(u,{children:(0,D.jsxs)(m,{children:[(0,D.jsx)("div",{children:(0,D.jsxs)(w,{children:[(0,D.jsx)("img",{src:L.Z,alt:"Logo Wallet",width:"36px",height:"36px"}),(0,D.jsx)("h3",{children:"MoneyGuard"})]})}),(0,D.jsx)(E,{})]})})}},501:function(n,r,e){var o=e(4836);r.Z=void 0;var a=o(e(5649)),t=e(184),i=(0,a.default)((0,t.jsx)("path",{d:"M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0 2c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z"}),"Person");r.Z=i}}]);
//# sourceMappingURL=708.42d3922c.chunk.js.map