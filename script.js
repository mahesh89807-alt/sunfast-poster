/* ==========================
   PORTFOLIO
========================== */

.portfolio{
display:grid;
grid-template-columns:repeat(auto-fit,minmax(320px,1fr));
gap:30px;
}

.project-card{
background:#fff;
border-radius:20px;
overflow:hidden;
box-shadow:var(--shadow);
transition:var(--transition);
}

.project-card:hover{
transform:translateY(-10px);
}

.project-image{
height:230px;
background:linear-gradient(135deg,#0f172a,#334155);
display:flex;
align-items:center;
justify-content:center;
font-size:60px;
color:#fff;
}

.project-content{
padding:25px;
}

.project-content h3{
font-size:24px;
margin-bottom:10px;
}

.project-content p{
color:var(--gray);
margin-bottom:20px;
}

/* ==========================
   PRICING
========================== */

.pricing{
display:grid;
grid-template-columns:repeat(auto-fit,minmax(280px,1fr));
gap:30px;
}

.price-card{
background:#fff;
padding:40px;
border-radius:20px;
text-align:center;
box-shadow:var(--shadow);
transition:.35s;
}

.price-card:hover{
transform:scale(1.04);
}

.price-card.active{
background:linear-gradient(135deg,#ff7a00,#ffb347);
color:#fff;
}

.price{
font-size:50px;
font-weight:bold;
margin:20px 0;
}

.price-card ul li{
padding:12px 0;
border-bottom:1px solid rgba(0,0,0,.08);
}

/* ==========================
   TESTIMONIALS
========================== */

.testimonials{
display:grid;
grid-template-columns:repeat(auto-fit,minmax(320px,1fr));
gap:30px;
}

.testimonial{
background:#fff;
padding:35px;
border-radius:20px;
box-shadow:var(--shadow);
}

.testimonial p{
font-style:italic;
color:var(--gray);
margin-bottom:20px;
}

.client{
display:flex;
align-items:center;
gap:15px;
}

.client img{
width:60px;
height:60px;
border-radius:50%;
object-fit:cover;
}

.client h4{
font-size:18px;
}

/* ==========================
   CONTACT
========================== */

.contact{
display:grid;
grid-template-columns:1fr 1fr;
gap:50px;
}

.contact-info h2{
margin-bottom:20px;
}

.contact-info p{
margin-bottom:15px;
color:var(--gray);
}

.contact-form{
background:#fff;
padding:35px;
border-radius:20px;
box-shadow:var(--shadow);
}

.contact-form input,
.contact-form textarea{
width:100%;
padding:16px;
margin-bottom:20px;
border:1px solid #ddd;
border-radius:12px;
outline:none;
}

.contact-form textarea{
height:160px;
resize:none;
}

.contact-form button{
width:100%;
padding:16px;
background:var(--primary);
color:#fff;
border:none;
border-radius:12px;
cursor:pointer;
font-size:17px;
transition:.3s;
}

.contact-form button:hover{
opacity:.9;
}

/* ==========================
   FOOTER
========================== */

footer{
background:#0f172a;
color:#fff;
padding:70px 0 30px;
margin-top:80px;
}

.footer-grid{
display:grid;
grid-template-columns:repeat(auto-fit,minmax(220px,1fr));
gap:40px;
}

.footer-grid h3{
margin-bottom:20px;
}

.footer-grid a{
display:block;
margin-bottom:12px;
color:#cbd5e1;
}

.footer-grid a:hover{
color:#fff;
}

.copyright{
margin-top:40px;
padding-top:20px;
border-top:1px solid rgba(255,255,255,.1);
text-align:center;
font-size:14px;
}

/* ==========================
   FLOATING WHATSAPP
========================== */

.whatsapp{
position:fixed;
bottom:25px;
right:25px;
width:60px;
height:60px;
border-radius:50%;
background:#25D366;
display:flex;
align-items:center;
justify-content:center;
font-size:28px;
color:#fff;
box-shadow:0 10px 25px rgba(0,0,0,.2);
z-index:999;
transition:.3s;
}

.whatsapp:hover{
transform:scale(1.1);
}

/* ==========================
   BACK TO TOP
========================== */

.top-btn{
position:fixed;
bottom:100px;
right:25px;
width:50px;
height:50px;
background:var(--primary);
color:#fff;
display:flex;
align-items:center;
justify-content:center;
border-radius:50%;
cursor:pointer;
box-shadow:var(--shadow);
}

/* ==========================
   DARK MODE
========================== */

body.dark{
background:#111827;
color:#fff;
}

body.dark .service-card,
body.dark .project-card,
body.dark .price-card,
body.dark .testimonial,
body.dark .contact-form{
background:#1f2937;
color:#fff;
}

body.dark p{
color:#d1d5db;
}

/* ==========================
   RESPONSIVE
========================== */

@media(max-width:992px){

.hero h1{
font-size:48px;
}

.about,
.contact{
grid-template-columns:1fr;
}

}

@media(max-width:768px){

.navbar{
flex-direction:column;
gap:15px;
}

.menu{
flex-wrap:wrap;
justify-content:center;
}

.hero{
text-align:center;
}

.hero-buttons{
justify-content:center;
}

.section-title h2{
font-size:34px;
}

.price{
font-size:42px;
}

}

@media(max-width:480px){

.hero h1{
font-size:38px;
}

.section-title h2{
font-size:28px;
}

.btn{
width:100%;
text-align:center;
}

.project-image{
height:180px;
}

.whatsapp{
width:55px;
height:55px;
font-size:24px;
}

}
