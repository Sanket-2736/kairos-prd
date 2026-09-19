import {useEffect,useRef,useState} from 'react';
import {createRoot} from 'react-dom/client';
import {motion} from 'framer-motion';
import Lenis from 'lenis';
import './styles.css';
import label from './assets/kairos-label.png';

const NAV=[['PHILOSOPHY','philosophy'],['THE NAME','name'],['TOPOGRAPHY','topography'],['SOURCE','source'],['DESIGN','wash-cycle'],['COMPOSITION','alkalinity'],['BOTTLE','bottle'],['MOMENTS','moments']];
const moments=[['LONG TABLE','Copenhagen','https://images.unsplash.com/photo-1414235077428-338989a2e8c0?auto=format&fit=crop&w=1600&q=85'],['FIRST TOAST','London','https://images.unsplash.com/photo-1515003197210-e0cd71810b5f?auto=format&fit=crop&w=1200&q=85'],['TERRACE','Amalfi','https://images.unsplash.com/photo-1504674900247-0877df9cc836?auto=format&fit=crop&w=1200&q=85'],['QUIET HOUR','Lake Como','https://images.unsplash.com/photo-1505693416388-ac5ce068fe85?auto=format&fit=crop&w=1200&q=85']];
function useReveal(){return {initial:{opacity:0,y:35},whileInView:{opacity:1,y:0},viewport:{once:true,amount:.2},transition:{duration:.8,ease:[.22,1,.36,1]}}}
function ContourField(){const ref=useRef(null);useEffect(()=>{const svg=ref.current,NS='http://www.w3.org/2000/svg',cx=800,cy=455,TAU=Math.PI*2;const rings=[];const path=(r,s,n=150)=>{let d='';for(let i=0;i<=n;i++){let a=i/n*TAU;let q=1+.055*Math.sin(a*3+s)+.03*Math.sin(a*7-s*.7)+.018*Math.cos(a*11+s);let x=cx+Math.cos(a)*r*q*1.18,y=cy+Math.sin(a)*r*q*.63;d+=(i?'L':'M')+x.toFixed(2)+' '+y.toFixed(2)}return d+'Z'};for(let i=0;i<7;i++){let p=document.createElementNS(NS,'path');p.setAttribute('d',path(80+i*120,i*.77));p.setAttribute('class','contour');svg.appendChild(p);rings.push({p,i,phase:i/7,dir:i%2?1:-1})}let t=0,last=performance.now(),raf;const tick=now=>{let dt=Math.min(40,now-last);last=now;t+=dt*.0005;rings.forEach(r=>{let p=(t*(.72+(r.i%7)*.035)+r.phase*2)%2,u=p<1?p:2-p;let e=u*u*(3-2*u),scale=.34+e*(.9),angle=r.dir*(p<1?p*170:170+(p-1)*170);r.p.setAttribute('transform',`translate(${cx} ${cy}) rotate(${angle}) scale(${scale}) translate(${-cx} ${-cy})`);r.p.style.opacity=(.035+Math.sin(Math.PI*u)*(.12+(r.i%6)*.018)).toFixed(3)});raf=requestAnimationFrame(tick)};raf=requestAnimationFrame(tick);return()=>cancelAnimationFrame(raf)},[]);return <svg ref={ref} className="contours" viewBox="0 0 1600 900" preserveAspectRatio="none"/>}
function Bottle({spin=0}){return <div className="bottle" style={{transform:`translateX(-50%) rotateY(${spin}deg)`}}><div className="cap"/><div className="neck"/><div className="glass"><img src={label}/><span className="shine"/></div></div>}
function Nav(){return <nav><a className="brand" href="#top"><img src="/logo.png" alt="KAIROS Logo" className="brand-logo"/><span>KAIROS</span></a><div className="navlinks">{NAV.map(([t,id])=><a key={id} href={'#'+id}>{t}</a>)}</div><a className="navmeta" href="#contact">ENQUIRE</a></nav>}
function Chapter({num,title,children,id,dark=false}){const r=useReveal();return <section id={id} className={'chapter '+(dark?'dark':'')}><div className="chapter-grid"><motion.div {...r} className="chapter-num">{num}</motion.div><motion.div {...r} transition={{...r.transition,delay:.08}}><h2 dangerouslySetInnerHTML={{__html:title}}/>{children}</motion.div></div></section>}
function Hero(){return <section className="hero" id="top"><ContourField/><div className="hero-large-text">KAIROS</div><div className="hero-copy"><motion.span initial={{opacity:0}} animate={{opacity:1}} transition={{duration:.8,delay:1.2}} className="hero-tagline">NATURAL SPRING WATER · KAIROS · EST. MMXXVI</motion.span><motion.h1 initial={{opacity:0}} animate={{opacity:1}} transition={{duration:.8,delay:1.4}}>The Opportune<br/><i>Moment.</i></motion.h1></div><div className="source"/><motion.div initial={{y:200,opacity:0}} animate={{y:0,opacity:1}} transition={{duration:1,ease:[.22,1,.36,1]}}><Bottle/></motion.div><motion.div className="hero-foot" initial={{opacity:0}} animate={{opacity:1}} transition={{duration:.8,delay:1.6}}><span>PURITY — REFINEMENT — PRECISION — PRESENCE</span></motion.div><motion.div className="scroll" initial={{opacity:0}} animate={{opacity:1}} transition={{duration:.8,delay:1.8}}>SCROLL</motion.div></section>}

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
          <span className="section-tag">— WHERE IT'S FROM</span>
          <h2>Hills, river, and a<br/>bottling line built<br/>around both.</h2>
          <p>
            The label carries the landscape Kairós is built for — a mountain silhouette, a river run, and the sundial mark that gives the brand its name. Sourced and mineral-balanced, then bottled in returnable glass close to where it's served, so the trip from source to table stays short.
          </p>
          <div className="where-stats">
            <div className="stat-item">
              <span className="stat-val">8.5+</span>
              <span className="stat-lbl">PH, ALKALINE</span>
            </div>
            <div className="stat-item">
              <span className="stat-val">100%</span>
              <span className="stat-lbl">GLASS, RETURNABLE</span>
            </div>
            <div className="stat-item">
              <span className="stat-val">Pune</span>
              <span className="stat-lbl">BOTTLED & SERVED</span>
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
          <h2>One bottle, built for the wash<br/>cycle, not the bin.</h2>
          <div className="wash-tags">
            <span className="wash-tag">
              <svg width="12" height="14" viewBox="0 0 12 14" fill="none"><path d="M6 0C6 0 0 7 0 10C0 12.2091 1.79086 14 4 14C5.07 14 6 13.5 6 13.5C6 13.5 6.93 14 8 14C10.2091 14 12 12.2091 12 10C12 7 6 0 6 0Z" fill="var(--gold-dark)" opacity="0.8"/></svg>
              Alkaline, pH 8.5+
            </span>
            <span className="wash-tag">
              <svg width="14" height="12" viewBox="0 0 14 12" fill="none"><path d="M7 0L0 12H14L7 0Z" stroke="var(--gold-dark)" strokeWidth="1.4" fill="none"/></svg>
              From Source
            </span>
            <span className="wash-tag">
              <svg width="13" height="14" viewBox="0 0 13 14" fill="none"><path d="M6.5 0C6.5 0 0 3.5 0 9.5C0 12 3 14 6.5 14C10 14 13 12 13 9.5C13 3.5 6.5 0 6.5 0Z" stroke="var(--gold-dark)" strokeWidth="1.4" fill="none"/></svg>
              Returnable Glass
            </span>
          </div>
        </motion.div>

        <div className="wash-grid">
          <motion.div {...r} transition={{ ...r.transition, delay: 0.1 }} className="wash-card-wrapper">
            <div className="wash-bottle-card">
              <div className="wash-bottle-stage">
                <Bottle spin={0} />
              </div>
              <span className="wash-card-label">KAIROS · ALKALINE WATER</span>
            </div>
          </motion.div>

          <motion.div {...r} transition={{ ...r.transition, delay: 0.2 }} className="wash-features">
            <div className="wash-feature-row">
              <span className="feature-num">01</span>
              <div className="feature-text">
                <h3>Clear glass</h3>
                <p>A cylindrical glass bottle with a lug-cap neck, chosen so nothing stands between the guest and the water.</p>
              </div>
            </div>

            <div className="wash-feature-row">
              <span className="feature-num">02</span>
              <div className="feature-text">
                <h3>One label, low light or bright</h3>
                <p>Gold linework on navy — a mountain silhouette, sundial mark and river run, readable across a dim table or a showroom floor.</p>
              </div>
            </div>

            <div className="wash-feature-row">
              <span className="feature-num">03</span>
              <div className="feature-text">
                <h3>Tamper-evident</h3>
                <p>A destructible seal at the neck, visible from across the table — trust, at a glance.</p>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

const MINERALS = [
  { name: 'pH, alkaline', value: '8.5 pH', percent: 85 },
  { name: 'Total Dissolved Solids', value: '160 mg/l', percent: 60 },
  { name: 'Calcium (Ca²⁺)', value: '32 mg/l', percent: 40 },
  { name: 'Magnesium (Mg²⁺)', value: '14 mg/l', percent: 25 },
  { name: 'Bicarbonate (HCO₃⁻)', value: '120 mg/l', percent: 50 },
  { name: 'Sodium (Na⁺)', value: '7 mg/l', percent: 15 },
];

const ALK_CARDS = [
  {
    tag: 'pH 8.5+',
    title: 'Smoother on the palate',
    desc: 'Higher pH softens the sharp, flat edge some guests notice in still water — reads cleaner alongside food.'
  },
  {
    tag: 'Ca²⁺ Mg²⁺',
    title: 'Mineral-forward hydration',
    desc: 'Calcium and magnesium are balanced back in after purification, rather than stripped out and left flat.'
  },
  {
    tag: 'HCO₃⁻',
    title: 'Gentler on sensitive stomachs',
    desc: 'Bicarbonate content is tuned for guests who find highly acidic bottled waters harsh after meals.'
  },
  {
    tag: 'Glass',
    title: 'Returnable, not disposable',
    desc: 'Every bottle is rated for repeated wash-fill-cap cycles through your existing service flow.'
  }
];

const ROOMS_DATA = [
  {
    key: 'A',
    title: 'Five-Star Hotels',
    desc: 'In-room and restaurant service, aligned to your existing amenity standards.'
  },
  {
    key: 'B',
    title: 'Fine-Dining Restaurants',
    desc: 'A water programme that holds its own on a curated wine and water list.'
  },
  {
    key: 'C',
    title: 'Luxury Auto Showrooms',
    desc: 'Guest hospitality for test-drive lounges and delivery experiences.'
  },
  {
    key: 'D',
    title: 'Corporate & Premium Events',
    desc: 'Boardrooms, offsites and private functions where the details are the point.'
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
          <h2>Built for rooms where the<br/>water is already being<br/>noticed.</h2>
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
          <h2>The alkalinity is the<br/>product.</h2>
          <div className="alk-meta">
            <div>Alkaline Water, pH 8.5+</div>
            <div>Printed on every label — <span className="highlight">no hidden composition</span></div>
            <div>Batch-tested, glass-bottled</div>
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
          Illustrative composition for presentation purposes. Final certified values are fixed at plant qualification and printed on the production label.
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
          Alkaline water is not a medical treatment and these are general product characteristics, not health claims.
        </div>
      </div>
    </section>
  );
}

function Bottle360(){const [deg,setDeg]=useState(0),drag=useRef(false),x=useRef(0);const normalizedDeg=Math.round(((deg%360)+360)%360);const handleInputChange=(e)=>{const val=parseFloat(e.target.value);if(!isNaN(val))setDeg(val);};return <section className="spin-section" id="360"><div className="spin-copy"><span>07 · IN THE ROUND</span><h2>A bottle that<br/><i>reveals itself.</i></h2><p>Drag across the bottle or adjust the rotation input below to view all angles.</p><div className="spin-controls"><label className="spin-label" htmlFor="deg-input">ROTATION ANGLE</label><div className="spin-input-wrapper"><input id="deg-input" type="number" min="0" max="360" value={normalizedDeg} onChange={handleInputChange} className="spin-number-input"/><span className="unit">°</span></div><input type="range" min="0" max="360" value={normalizedDeg} onChange={handleInputChange} className="spin-slider"/></div></div><div className="spin-stage" onPointerDown={e=>{drag.current=true;x.current=e.clientX;e.currentTarget.setPointerCapture(e.pointerId)}} onPointerMove={e=>{if(!drag.current)return;setDeg(d=>d+(e.clientX-x.current)*.65);x.current=e.clientX}} onPointerUp={()=>drag.current=false} onPointerCancel={()=>drag.current=false}><Bottle spin={deg}/><div className="spin-ring"/></div></section>}

function App(){
  useEffect(()=>{const l=new Lenis({duration:1.15,smoothWheel:true});let raf;const f=t=>{l.raf(t);raf=requestAnimationFrame(f)};raf=requestAnimationFrame(f);return()=>{cancelAnimationFrame(raf);l.destroy()}},[]);
  const [form,setForm]=useState({name:'',email:'',company:'',message:''});
  const [result,setResult]=useState("");
  const onSubmit=async(e)=>{
    e.preventDefault();
    setResult("Sending....");
    const formData=new FormData();
    formData.append("access_key","8b470a41-4fe6-4aed-85fb-b6219d4679c3");
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
        <Chapter num="01" title="Water is never<br/>simply water." id="philosophy">
          <p>It is the pause before the toast, the stillness between courses, the quiet signature of a table set with intention.</p>
          <p>Kairos was composed the way a fragrance is composed — with restraint, provenance, and the conviction that the most essential element on the table should also be the most considered.</p>
        </Chapter>
        <Chapter num="02" title="Time that<br/><i>matters.</i>" id="name" dark>
          <p>The Greeks held two words for time. Chronos is the time that passes. Kairos is the time that matters — the fleeting, opportune instant when everything aligns.</p>
        </Chapter>
        <Chapter num="03" title="A landscape,<br/><i>drawn in a single breath.</i>" id="topography">
          <p>The label carries a topographic language inspired by the landscape of a source valley. Each contour becomes a visual measure of place.</p>
          <div className="specs">
            <span>LINE WEIGHT 0.5 PT</span>
            <span>CONTOUR INTERVAL 40 M</span>
            <span>DEEP NAVY</span>
            <span>CHAMPAGNE GOLD</span>
          </div>
        </Chapter>
        <WhereItsFrom/>
        <WashCycleSection/>
        <AlkalinitySection/>
        <RoomsNoticeSection/>
        <Chapter num="06" title="Made to<br/><i>be considered.</i>" id="bottle">
          <p>Brushed champagne gold. Fine contour detailing. Flint glass. A bottle designed to belong at the table.</p>
        </Chapter>
        <Bottle360/>
        <section className="moments" id="moments">
          <div className="moment-head">
            <span>08 · MOMENTS</span>
            <h2>For the moments<br/><i>that matter.</i></h2>
          </div>
          <div className="moment-grid">
            {moments.map((m,i)=>(
              <motion.figure key={m[0]} {...useReveal()} transition={{duration:.8,delay:i*.08}}>
                <img src={m[2]}/>
                <figcaption><span>{m[0]}</span><em>{m[1]}</em></figcaption>
              </motion.figure>
            ))}
          </div>
        </section>
        <section className="contact" id="contact">
          <span>09 · ENQUIRE</span>
          <h2>Make the moment<br/><i>yours.</i></h2>
          <p>Hospitality partnerships, private events and distribution.</p>
          {result?<div className="success">{result}</div>:<form onSubmit={onSubmit}><input required placeholder="NAME" value={form.name} onChange={e=>setForm({...form,name:e.target.value})}/><input required type="email" placeholder="EMAIL" value={form.email} onChange={e=>setForm({...form,email:e.target.value})}/><input placeholder="COMPANY" value={form.company} onChange={e=>setForm({...form,company:e.target.value})}/><textarea required placeholder="TELL US ABOUT YOUR ENQUIRY" value={form.message} onChange={e=>setForm({...form,message:e.target.value})}/><button>SUBMIT ENQUIRY</button></form>}
          <a className="mail" href="mailto:enquiries@kairosbeverages.com">ENQUIRIES@KAIROSBEVERAGES.COM</a>
        </section>
      </main>
      <footer>
        <div className="footer-brand">
          <img src="/logo.png" alt="KAIROS" className="footer-logo"/>
          <span>KAIROS BEVERAGES</span>
        </div>
        <span>THE OPPORTUNE MOMENT</span>
        <span>© MMXXVI</span>
      </footer>
    </>
  );
}

createRoot(document.getElementById('root')).render(<App/>);


