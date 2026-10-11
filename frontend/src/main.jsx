import {useEffect,useRef,useState} from 'react';
import {createRoot} from 'react-dom/client';
import {motion} from 'framer-motion';
import Lenis from 'lenis';
import './styles.css';
import label from './assets/kairos-label.png';

const NAV=[['ABOUT KAIRÓS','philosophy'],['COLLECTION','wash-cycle'],['ALKALINE WATER','alkalinity'],['FOR HOSPITALITY','rooms'],['QUALITY & STANDARDS','source'],['CONTACT','contact']];
const moments=[['FINE DINING TABLE SERVICE','Curated Course Pairings','https://images.unsplash.com/photo-1414235077428-338989a2e8c0?auto=format&fit=crop&w=1600&q=85'],['WELCOME RECEPTIONS & EVENTS','Signature Banqueting','https://images.unsplash.com/photo-1515003197210-e0cd71810b5f?auto=format&fit=crop&w=1200&q=85'],['RESORT & TERRACE SERVICE','Alfresco Dining','https://images.unsplash.com/photo-1504674900247-0877df9cc836?auto=format&fit=crop&w=1200&q=85'],['HOTEL SUITE AMENITIES','Considered Guest Stays','https://images.unsplash.com/photo-1505693416388-ac5ce068fe85?auto=format&fit=crop&w=1200&q=85']];
function useReveal(){return {initial:{opacity:0,y:35},whileInView:{opacity:1,y:0},viewport:{once:true,amount:.2},transition:{duration:.8,ease:[.22,1,.36,1]}}}
function ContourField(){const ref=useRef(null);useEffect(()=>{const svg=ref.current,NS='http://www.w3.org/2000/svg',cx=800,cy=455,TAU=Math.PI*2;const rings=[];const path=(r,s,n=150)=>{let d='';for(let i=0;i<=n;i++){let a=i/n*TAU;let q=1+.055*Math.sin(a*3+s)+.03*Math.sin(a*7-s*.7)+.018*Math.cos(a*11+s);let x=cx+Math.cos(a)*r*q*1.18,y=cy+Math.sin(a)*r*q*.63;d+=(i?'L':'M')+x.toFixed(2)+' '+y.toFixed(2)}return d+'Z'};for(let i=0;i<7;i++){let p=document.createElementNS(NS,'path');p.setAttribute('d',path(80+i*120,i*.77));p.setAttribute('class','contour');svg.appendChild(p);rings.push({p,i,phase:i/7,dir:i%2?1:-1})}let t=0,last=performance.now(),raf;const tick=now=>{let dt=Math.min(40,now-last);last=now;t+=dt*.0005;rings.forEach(r=>{let p=(t*(.72+(r.i%7)*.035)+r.phase*2)%2,u=p<1?p:2-p;let e=u*u*(3-2*u),scale=.34+e*(.9),angle=r.dir*(p<1?p*170:170+(p-1)*170);r.p.setAttribute('transform',`translate(${cx} ${cy}) rotate(${angle}) scale(${scale}) translate(${-cx} ${-cy})`);r.p.style.opacity=(.035+Math.sin(Math.PI*u)*(.12+(r.i%6)*.018)).toFixed(3)});raf=requestAnimationFrame(tick)};raf=requestAnimationFrame(tick);return()=>cancelAnimationFrame(raf)},[]);return <svg ref={ref} className="contours" viewBox="0 0 1600 900" preserveAspectRatio="none"/>}
function Bottle({spin=0}){return <div className="bottle" style={{transform:`translateX(-50%) rotateY(${spin}deg)`}}><div className="cap"/><div className="neck"/><div className="glass"><img src={label}/><span className="shine"/></div></div>}
function Nav(){return <nav><a className="brand" href="#top"><img src="/logo.png" alt="KAIROS Logo" className="brand-logo"/><span>KAIROS</span></a><div className="navlinks">{NAV.map(([t,id])=><a key={id} href={'#'+id}>{t}</a>)}</div><a className="navmeta" href="#contact">REQUEST A QUOTE</a></nav>}
function Chapter({num,title,children,id,dark=false}){const r=useReveal();return <section id={id} className={'chapter '+(dark?'dark':'')}><div className="chapter-grid"><motion.div {...r} className="chapter-num">{num}</motion.div><motion.div {...r} transition={{...r.transition,delay:.08}}><h2 dangerouslySetInnerHTML={{__html:title}}/>{children}</motion.div></div></section>}
function Hero(){return <section className="hero" id="top"><ContourField/><div className="hero-large-text">KAIROS</div><div className="hero-copy"><motion.span initial={{opacity:0}} animate={{opacity:1}} transition={{duration:.8,delay:1.2}} className="hero-tagline">PREMIUM ALKALINE WATER · HOSPITALITY SPECIFICATION · EST. MMXXVI</motion.span><motion.h1 initial={{opacity:0}} animate={{opacity:1}} transition={{duration:.8,delay:1.4}}>The Opportune<br/><i>Moment.</i></motion.h1><motion.p initial={{opacity:0}} animate={{opacity:1}} transition={{duration:.8,delay:1.5}} className="hero-sub">Premium alkaline water for hotels, restaurants, and considered hospitality experiences.</motion.p><motion.div initial={{opacity:0}} animate={{opacity:1}} transition={{duration:.8,delay:1.6}} className="hero-actions"><a href="#wash-cycle" className="hero-btn">Explore the Collection</a><a href="#contact" className="hero-btn hero-btn-alt">Partner with Kairós</a></motion.div></div><div className="source"/><motion.div initial={{y:200,opacity:0}} animate={{y:0,opacity:1}} transition={{duration:1,ease:[.22,1,.36,1]}}><Bottle/></motion.div><motion.div className="hero-foot" initial={{opacity:0}} animate={{opacity:1}} transition={{duration:.8,delay:1.6}}><span>PURITY — REFINEMENT — PRECISION — PRESENCE</span><span>LUXURY B2B HOSPITALITY SUPPLY</span></motion.div><motion.div className="scroll" initial={{opacity:0}} animate={{opacity:1}} transition={{duration:.8,delay:1.8}}>SCROLL</motion.div></section>}

function NatureMountainArt() {
  return (
    <div className="nature-art-container">
      <svg viewBox="0 0 740 500" className="nature-svg" fill="none" xmlns="http://www.w3.org/2000/svg">
        {/* Sun Circle & Ray on Peak */}
        <circle cx="460" cy="115" r="45" stroke="#c8a35a" strokeWidth="1.5" fill="none" />
        <line x1="460" y1="55" x2="460" y2="185" stroke="#c8a35a" strokeWidth="1.5" />

        {/* Outer Navy Mountain Outline */}
        <polyline
          points="50,270 170,130 250,220 460,70 540,210 630,130 710,270"
          stroke="#2b3a4a"
          strokeWidth="1.6"
          strokeLinejoin="round"
          strokeLinecap="round"
        />

        {/* Inner Parallel Gold Mountain Line */}
        <polyline
          points="70,270 170,160 250,235 460,105 540,225 630,160 690,270"
          stroke="#c8a35a"
          strokeWidth="1.5"
          strokeLinejoin="round"
          strokeLinecap="round"
        />

        {/* Baseline */}
        <line x1="40" y1="270" x2="720" y2="270" stroke="#2b3a4a" strokeWidth="1.6" />

        {/* Minimalist Linear Trees */}
        {/* Left Tree */}
        <g transform="translate(190, 240)">
          <line x1="0" y1="-20" x2="0" y2="55" stroke="#c8a35a" strokeWidth="1.5" />
          <polyline points="-14,-5 0,-20 14,-5" stroke="#c8a35a" strokeWidth="1.5" fill="none" />
          <polyline points="-18,12 0,-3 18,12" stroke="#c8a35a" strokeWidth="1.5" fill="none" />
          <line x1="-12" y1="35" x2="12" y2="35" stroke="#c8a35a" strokeWidth="1.2" />
        </g>
        
        {/* Right Tree */}
        <g transform="translate(560, 240)">
          <line x1="0" y1="-20" x2="0" y2="55" stroke="#c8a35a" strokeWidth="1.5" />
          <polyline points="-14,-5 0,-20 14,-5" stroke="#c8a35a" strokeWidth="1.5" fill="none" />
          <polyline points="-18,12 0,-3 18,12" stroke="#c8a35a" strokeWidth="1.5" fill="none" />
          <line x1="-12" y1="35" x2="12" y2="35" stroke="#c8a35a" strokeWidth="1.2" />
        </g>

        {/* Gentle River Waves */}
        <path
          d="M 30 330 Q 180 315, 370 335 T 710 330"
          stroke="#2b3a4a"
          strokeWidth="1.4"
          fill="none"
        />
        <path
          d="M 30 365 Q 180 350, 370 370 T 710 365"
          stroke="#c8a35a"
          strokeWidth="1.4"
          fill="none"
        />
        <path
          d="M 30 400 Q 180 385, 370 405 T 710 400"
          stroke="#2b3a4a"
          strokeWidth="1.4"
          fill="none"
        />
        <path
          d="M 30 435 Q 180 420, 370 440 T 710 435"
          stroke="#c8a35a"
          strokeWidth="1.4"
          fill="none"
        />
      </svg>
    </div>
  );
}

function WhereItsFrom() {
  const r = useReveal();
  return (
    <section id="source" className="where-its-from">
      <div className="where-container">
        <motion.div {...r} className="where-content">
          <span className="section-tag">— QUALITY & STANDARDS</span>
          <h2>Defined by<br/>the Details.</h2>
          <p>
            Every element of Kairós is considered, from the product presentation to the details that shape the experience. The visual language honours the quiet contours of the natural world, paired with a disciplined standard for hospitality presentation.
          </p>
          <div className="where-stats">
            <div className="stat-item">
              <span className="stat-val">8.5+</span>
              <span className="stat-lbl">PH, ALKALINE TARGET</span>
            </div>
            <div className="stat-item">
              <span className="stat-val">Flint</span>
              <span className="stat-lbl">GLASS BOTTLE</span>
            </div>
            <div className="stat-item">
              <span className="stat-val">B2B</span>
              <span className="stat-lbl">HOSPITALITY SUPPLY</span>
            </div>
          </div>
        </motion.div>
        <motion.div {...r} transition={{ ...r.transition, delay: 0.15 }} className="where-art">
          <NatureMountainArt />
        </motion.div>
      </div>
    </section>
  );
}

function WashCycleSection() {
  const r = useReveal();
  return (
    <section id="wash-cycle" className="wash-cycle-section">
      <svg className="wash-bg-lines" viewBox="0 0 1200 500" preserveAspectRatio="none">
        <polyline points="0,350 300,180 600,320 900,150 1200,350" stroke="rgba(200, 163, 90, 0.08)" strokeWidth="1.2" fill="none" />
        <polyline points="100,380 400,220 700,360 1000,200 1200,380" stroke="rgba(7, 21, 45, 0.06)" strokeWidth="1.2" fill="none" />
        <g transform="translate(150, 280)" opacity="0.12">
          <line x1="0" y1="0" x2="0" y2="40" stroke="#c8a35a" strokeWidth="1.2" />
          <polyline points="-12,15 0,0 12,15" stroke="#c8a35a" strokeWidth="1.2" fill="none" />
        </g>
        <g transform="translate(1050, 250)" opacity="0.12">
          <line x1="0" y1="0" x2="0" y2="40" stroke="#c8a35a" strokeWidth="1.2" />
          <polyline points="-12,15 0,0 12,15" stroke="#c8a35a" strokeWidth="1.2" fill="none" />
        </g>
      </svg>

      <div className="wash-container">
        <motion.div {...r} className="wash-header">
          <h2>Designed with Intention.<br/>Presented with Care.</h2>
          <p>
            Thoughtful packaging and a distinctive bottle design bring a refined presence to the hospitality experience.
          </p>
          <div className="wash-tags">
            <span className="wash-tag">
              <svg width="12" height="14" viewBox="0 0 12 14" fill="none"><path d="M6 0C6 0 0 7 0 10C0 12.2091 1.79086 14 4 14C5.07 14 6 13.5 6 13.5C6 13.5 6.93 14 8 14C10.2091 14 12 12.2091 12 10C12 7 6 0 6 0Z" fill="var(--gold-dark)" opacity="0.8"/></svg>
              Alkaline, pH 8.5+
            </span>
            <span className="wash-tag">
              <svg width="14" height="12" viewBox="0 0 14 12" fill="none"><path d="M7 0L0 12H14L7 0Z" stroke="var(--gold-dark)" strokeWidth="1.4" fill="none"/></svg>
              Flint Glass Packaging
            </span>
            <span className="wash-tag">
              <svg width="13" height="14" viewBox="0 0 13 14" fill="none"><path d="M6.5 0C6.5 0 0 3.5 0 9.5C0 12 3 14 6.5 14C10 14 13 12 13 9.5C13 3.5 6.5 0 6.5 0Z" stroke="var(--gold-dark)" strokeWidth="1.4" fill="none"/></svg>
              750ml &amp; 330ml Formats
            </span>
          </div>
        </motion.div>

        <div className="wash-grid">
          <motion.div {...r} transition={{ ...r.transition, delay: 0.1 }} className="wash-card-wrapper">
            <div className="wash-bottle-card">
              <div className="wash-bottle-stage">
                <Bottle spin={0} />
              </div>
              <span className="wash-card-label">KAIRÓS · HOSPITALITY COLLECTION</span>
            </div>
          </motion.div>

          <motion.div {...r} transition={{ ...r.transition, delay: 0.2 }} className="wash-features">
            <div className="wash-feature-row">
              <span className="feature-num">01</span>
              <div className="feature-text">
                <h3>Curated Bottle Formats</h3>
                <p>Available in 750ml for table service and 330ml for in-room guest amenities, crafted in cylindrical flint glass for pristine clarity.</p>
              </div>
            </div>

            <div className="wash-feature-row">
              <span className="feature-num">02</span>
              <div className="feature-text">
                <h3>Refined Presentation</h3>
                <p>Champagne-gold detailing on deep navy — a restrained design language engineered to complement fine dining tables and boutique lounges.</p>
              </div>
            </div>

            <div className="wash-feature-row">
              <span className="feature-num">03</span>
              <div className="feature-text">
                <h3>Tamper-Evident Closure</h3>
                <p>A precision seal at the neck provides immediate visual assurance of purity, safety, and brand integrity.</p>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

const MINERALS = [
  { name: 'Target Alkalinity (pH)', value: '8.5 pH', percent: 85 },
  { name: 'Total Dissolved Solids (TDS)', value: '160 mg/L', percent: 60 },
  { name: 'Calcium (Ca²⁺)', value: '32 mg/L', percent: 40 },
  { name: 'Magnesium (Mg²⁺)', value: '14 mg/L', percent: 25 },
  { name: 'Bicarbonate (HCO₃⁻)', value: '120 mg/L', percent: 50 },
  { name: 'Sodium (Na⁺)', value: '7 mg/L', percent: 15 },
];

const ALK_CARDS = [
  {
    tag: 'pH 8.5 Target',
    title: 'Balanced Palate Character',
    desc: 'Target alkalinity designed to deliver a smooth, neutral mouthfeel that pairs cleanly with culinary tasting courses.'
  },
  {
    tag: 'Ca²⁺ & Mg²⁺',
    title: 'Harmonious Mineral Profile',
    desc: 'Carefully calibrated calcium and magnesium proportions contributing to clean taste and table hydration.'
  },
  {
    tag: 'HCO₃⁻',
    title: 'Clean, Structured Finish',
    desc: 'Bicarbonate balance provides a refreshing, crisp finish suited to fine dining and beverage service.'
  },
  {
    tag: 'Glass Presentation',
    title: 'Flint Glass Preservation',
    desc: 'Bottled in inert glass to protect mineral integrity, flavour neutrality, and visual sophistication.'
  }
];

const ROOMS_DATA = [
  {
    key: '01',
    title: 'Hotels & Resorts',
    desc: 'In-room guest amenities, presidential suites, and turndown presentation aligned to high-end hospitality standards.'
  },
  {
    key: '02',
    title: 'Restaurants & Fine Dining',
    desc: 'Dedicated table service designed to complement culinary tasting menus, pairing programs, and sommelier curation.'
  },
  {
    key: '03',
    title: 'Cafés & Lounges',
    desc: 'Refined beverage service for boutique lounges, hotel lobbies, and private members’ clubs.'
  },
  {
    key: '04',
    title: 'Events & Corporate Hospitality',
    desc: 'Distinguished boardroom supply, private banquets, and executive occasions where presentation matters.'
  }
];

function RoomsNoticeSection() {
  const r = useReveal();
  return (
    <section id="rooms" className="rooms-section">
      <svg className="rooms-bg-lines" viewBox="0 0 1200 400" preserveAspectRatio="none">
        <path d="M 0 280 L 350 140 L 700 290 L 1050 120 L 1200 240" stroke="rgba(200, 163, 90, 0.07)" strokeWidth="1.2" fill="none" />
        <path d="M 50 320 L 400 180 L 750 330 L 1100 160 L 1200 270" stroke="rgba(7, 21, 45, 0.05)" strokeWidth="1.2" fill="none" />
      </svg>

      <div className="rooms-container">
        <motion.div {...r} className="rooms-header">
          <span className="section-tag">— HOSPITALITY APPLICATIONS</span>
          <h2>Designed for the<br/>Hospitality Experience.</h2>
          <p className="rooms-sub">
            From guest rooms and fine-dining tables to lounges and special occasions, Kairós is designed to complement considered hospitality environments.
          </p>
        </motion.div>

        <motion.div {...r} transition={{ ...r.transition, delay: 0.15 }} className="rooms-grid">
          {ROOMS_DATA.map((item) => (
            <div key={item.key} className="room-card">
              <span className="room-key">{item.key}</span>
              <h3>{item.title}</h3>
              <p>{item.desc}</p>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}

function AlkalinitySection() {
  const r = useReveal();
  return (
    <section id="alkalinity" className="alkalinity-section">
      <svg className="alk-bg-lines" viewBox="0 0 1200 600" preserveAspectRatio="none">
        <path d="M -100 600 L 400 350 L 900 600" stroke="rgba(200, 163, 90, 0.08)" strokeWidth="1" fill="none" />
        <path d="M 200 600 L 700 300 L 1300 600" stroke="rgba(200, 163, 90, 0.06)" strokeWidth="1" fill="none" />
      </svg>

      <div className="alk-container">
        <motion.div {...r} className="alk-header">
          <div>
            <h2>Defined by Its<br/>Specifications.</h2>
            <p style={{ marginTop: '16px', color: 'rgba(255, 255, 255, 0.72)', fontSize: '15px', fontFamily: 'var(--sans)', fontWeight: '400', maxWidth: '620px', lineHeight: '1.7' }}>
              Explore the characteristics of Kairós alkaline water through verified product information and quality specifications.
            </p>
          </div>
          <div className="alk-meta">
            <div>Alkaline Water · pH 8.5 Target Specification</div>
            <div>Clear Product Composition — <span className="highlight">Verified Quality Standards</span></div>
            <div>Batch-Tested Quality Assurance · Glass Bottled</div>
          </div>
        </motion.div>

        <motion.div {...r} transition={{ ...r.transition, delay: 0.1 }} className="alk-table">
          {MINERALS.map((m, i) => (
            <div key={i} className="alk-row">
              <div className="alk-col-name">{m.name}</div>
              <div className="alk-col-val">{m.value}</div>
              <div className="alk-col-bar">
                <div className="alk-bar-fill" style={{ width: `${m.percent}%` }} />
              </div>
            </div>
          ))}
        </motion.div>
        
        <p className="alk-footnote">
          Standard specification targets shown above. Analytical values are confirmed per production batch and stated on certified commercial labels.
        </p>

        <motion.div {...r} transition={{ ...r.transition, delay: 0.2 }} className="alk-cards-grid">
          {ALK_CARDS.map((card, idx) => (
            <div key={idx} className="alk-card">
              <span className="card-tag">{card.tag}</span>
              <h3>{card.title}</h3>
              <p>{card.desc}</p>
            </div>
          ))}
        </motion.div>

        <div className="alk-disclaimer">
          Kairós alkaline water is a premium drinking water formulated for quality and taste. It is not intended for medical treatment, detoxification, or therapeutic use.
        </div>
      </div>
    </section>
  );
}

function Bottle360(){const [deg,setDeg]=useState(0),drag=useRef(false),x=useRef(0);const normalizedDeg=Math.round(((deg%360)+360)%360);const handleInputChange=(e)=>{const val=parseFloat(e.target.value);if(!isNaN(val))setDeg(val);};return <section className="spin-section" id="360"><div className="spin-copy"><span>07 · PRODUCT SHOWCASE</span><h2>Discover the<br/><i>Kairós Bottle.</i></h2><p>Explore the form, finish and details behind the Kairós water experience.</p><div className="spin-controls"><label className="spin-label" htmlFor="deg-input">ROTATION ANGLE</label><div className="spin-input-wrapper"><input id="deg-input" type="number" min="0" max="360" value={normalizedDeg} onChange={handleInputChange} className="spin-number-input"/><span className="unit">°</span></div><input type="range" min="0" max="360" value={normalizedDeg} onChange={handleInputChange} className="spin-slider"/></div></div><div className="spin-stage" onPointerDown={e=>{drag.current=true;x.current=e.clientX;e.currentTarget.setPointerCapture(e.pointerId)}} onPointerMove={e=>{if(!drag.current)return;setDeg(d=>d+(e.clientX-x.current)*.65);x.current=e.clientX}} onPointerUp={()=>drag.current=false} onPointerCancel={()=>drag.current=false}><Bottle spin={deg}/><div className="spin-ring"/></div></section>}

function App(){
  useEffect(()=>{const l=new Lenis({duration:1.15,smoothWheel:true});let raf;const f=t=>{l.raf(t);raf=requestAnimationFrame(f)};raf=requestAnimationFrame(f);return()=>{cancelAnimationFrame(raf);l.destroy()}},[]);
  const [form,setForm]=useState({name:'',email:'',company:'',message:''});
  const [result,setResult]=useState("");
  const onSubmit=async(e)=>{
    e.preventDefault();
    setResult("Sending....");
    const formData=new FormData();
    formData.append("access_key","7cc50c87-a726-41ce-bfe6-cf9f9e7965d4");
    formData.append("name",form.name);
    formData.append("email",form.email);
    formData.append("company",form.company);
    formData.append("message",form.message);
    try{
      const response=await fetch("https://api.web3forms.com/submit",{method:"POST",body:formData});
      const data=await response.json();
      if(data.success){
        setResult("ENQUIRY RECEIVED — WE'LL BE IN TOUCH.");
        setForm({name:'',email:'',company:'',message:''});
      }else{
        setResult("Error submitting form");
      }
    }catch(err){
      setResult("Error submitting form");
    }
  };

  return (
    <>
      <Nav/>
      <main>
        <Hero/>
        <Chapter num="01" title="Water is Never<br/>Simply Water." id="philosophy">
          <p>Every detail matters. From the character of the water to the form of the bottle, Kairós brings a considered approach to an everyday essential.</p>
          <p>It is the stillness between courses, the quiet signature of a table set with intention, and a dependable standard for premium dining and hospitality.</p>
        </Chapter>
        <Chapter num="02" title="Made for the Moments<br/><i>That Matter.</i>" id="name" dark>
          <p>From a carefully prepared table to a considered guest experience, Kairós brings refinement to the details that make hospitality memorable.</p>
          <p>In classical thought, <em>Kairós</em> represents the opportune instant when time aligns with purpose. We craft our bottled water to honour that standard in every guest encounter.</p>
          <a href="#rooms" className="chapter-cta">Discover Hospitality Solutions →</a>
        </Chapter>
        <Chapter num="03" title="A Considered Form.<br/><i>A Distinctive Presence.</i>" id="topography">
          <p>A restrained design language, inspired by the quiet contours of the natural world.</p>
          <div className="specs">
            <span>CONTOUR LINEWORK 0.5 PT</span>
            <span>EDITORIAL PROPORTIONS</span>
            <span>DEEP NAVY PALETTE</span>
            <span>CHAMPAGNE GOLD ACCENT</span>
          </div>
        </Chapter>
        <WhereItsFrom/>
        <WashCycleSection/>
        <AlkalinitySection/>
        <RoomsNoticeSection/>
        <Chapter num="06" title="Thoughtful in<br/><i>Every Detail.</i>" id="bottle">
          <p>A considered approach to product design, verified specifications, and the details that define a premium experience.</p>
          <p>Crafted in flint glass with champagne-gold accents, Kairós brings understated poise to hotel suites, restaurants, and executive tables.</p>
        </Chapter>
        <Bottle360/>
        <section className="moments" id="moments">
          <div className="moment-head">
            <span>08 · WHERE KAIRÓS BELONGS</span>
            <h2>Where Kairós<br/><i>Belongs.</i></h2>
            <p className="moment-sub">
              From exceptional dining experiences to considered guest stays, discover the settings in which Kairós comes to life.
            </p>
          </div>
          <div className="moment-grid">
            {moments.map((m,i)=>(
              <motion.figure key={m[0]} {...useReveal()} transition={{duration:.8,delay:i*.08}}>
                <img src={m[2]} alt={m[0]}/>
                <figcaption><span>{m[0]}</span><em>{m[1]}</em></figcaption>
              </motion.figure>
            ))}
          </div>
        </section>
        <section className="contact" id="contact">
          <span>09 · B2B PARTNERSHIP</span>
          <h2>Let's Build a<br/><i>Partnership.</i></h2>
          <p>Tell us about your venue, preferred bottle format and expected order volume. Our team will help you explore the right supply arrangement.</p>
          {result?<div className="success">{result}</div>:<form onSubmit={onSubmit}><input required placeholder="NAME / CONTACT PERSON" value={form.name} onChange={e=>setForm({...form,name:e.target.value})}/><input required type="email" placeholder="BUSINESS EMAIL" value={form.email} onChange={e=>setForm({...form,email:e.target.value})}/><input placeholder="BUSINESS / ORGANISATION" value={form.company} onChange={e=>setForm({...form,company:e.target.value})}/><textarea required placeholder="VENUE TYPE, PREFERRED BOTTLE FORMATS (750ML / 330ML) & ESTIMATED MONTHLY VOLUME" value={form.message} onChange={e=>setForm({...form,message:e.target.value})}/><button>REQUEST A B2B QUOTE</button></form>}
          <a className="mail" href="mailto:enquiries@kairosbeverages.com">ENQUIRIES@KAIROSBEVERAGES.COM</a>
        </section>
      </main>
      <footer>
        <div className="footer-brand">
          <img src="/logo.png" alt="KAIROS" className="footer-logo"/>
          <span>KAIROS BEVERAGES</span>
        </div>
        <span>PREMIUM ALKALINE WATER · HOSPITALITY SUPPLY</span>
        <span>© MMXXVI</span>
      </footer>
    </>
  );
}

createRoot(document.getElementById('root')).render(<App/>);


