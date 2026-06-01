/* ═══════════════════════════════════════════════════════
   AI READINESS FRICTION DIAGNOSTIC — CONTENT DATA
   Edit this file to update all diagnostic content.

   Each friction object contains:
     id       — internal identifier (do not change)
     name     — display name
     desc     — short description shown in results hero
     qs       — 2 diagnostic questions shown to the user
     insight  — "Why this matters" paragraph
     reframe  — "What the evidence shows" pull quote
     recs         — array of 3 recommended actions (education organisation path)
     employerRecs — array of 3 recommended actions (employer organisation path)
═══════════════════════════════════════════════════════ */

const FRICTIONS = [
  {
    id: 'pace',
    name: 'Pace',
    desc: 'The widening gap between the speed of AI-driven workplace change and the slower cadence of curriculum and institutional decision-making.',
    qs: [
      'To what extent are you monitoring the gap between AI developments in the workplace and what is currently reflected in your curricula?',
      'To what extent are you building sufficient agility into your curriculum review process to respond to labour market shifts as they emerge?'
    ],
    insight: 'AI is reshaping work faster than universities can adapt. When curriculum cycles lag behind workplace change, graduates enter the workforce with knowledge that is already obsolete relative to the tools industry deploys.',
    reframe: 'Collectively, 66% of respondents (HE leaders, students, and employers) describe AI-driven workplace change as fast or very fast, with 70% of HE leaders expecting it to accelerate. Only 24% of respondents believe universities are keeping pace.',
    recs: [
      'Accelerate curriculum review cycles through modular design and stackable, fast-iterating credentials.',
      'Establish industry advisory boards that surface workforce shifts between formal review cycles.',
      'Build agile review mechanisms that can update course content within months, not years.'
    ],
    employerRecs: [
      'Establish a standing AI advisory channel with two or three priority universities to share real-time skill shifts before hiring gaps appear.',
      'Embed industry practitioners into curriculum advisory boards with authority to influence content cycles.',
      'Track the lag between new AI capability emerging in your workflows and when graduates arrive ready, then share back with partners.'
    ]
  },
  {
    id: 'connection',
    name: 'Connection',
    desc: 'Weak feedback loops between education and employers, reducing alignment between workforce needs and learning design.',
    qs: [
      'To what extent are you monitoring shifting workforce requirements from employers and ensuring that intelligence informs curriculum decisions rapidly?',
      'To what extent are your academic leaders actively collaborating with industry partners to shape graduate outcomes?'
    ],
    insight: 'When employers and institutions are not in structured dialogue, curriculum decisions are made with incomplete or outdated workforce signals. The result is misalignment between what is taught and what work requires.',
    reframe: 'Only 39% of institutions include industry partnerships among their AI investment focus areas, ranking last of six priorities. Yet 53% of employers say finding graduates with the right skills is their primary challenge.',
    recs: [
      'Build structural, ongoing employer feedback loops that directly inform learning design and assessment.',
      'Embed industry advisory boards into curriculum review and graduate outcome processes.',
      'Co-design degree pathways and assessments with employer partners rather than for them.'
    ],
    employerRecs: [
      'Sponsor structured industry projects within degree programs where your teams pose real business problems and assess student outputs against workplace standards.',
      'Contribute to employer skills surveys and labor-market analyses universities conduct, ensuring institutions design curriculum with current data.',
      'Co-author skills frameworks with two or three partner universities, translating your hiring criteria into language curriculum designers can directly use.'
    ]
  },
  {
    id: 'capability',
    name: 'Capability',
    desc: 'Uneven faculty and instructor AI capability, limiting consistent integration of AI into learning experiences.',
    qs: [
      'To what extent are you developing faculty AI capability across the institution as a whole, rather than relying on individual initiatives?',
      'To what extent are you sustaining faculty AI development as a continuous institutional commitment rather than a one-time intervention?'
    ],
    insight: 'Faculty are the primary vehicle for graduate AI readiness. When their capability is uneven, student outcomes depend on individual instructor initiative rather than consistent institutional design.',
    reframe: 'Faculty AI expertise is the #1 barrier cited by 40% of HE leaders. Only 13% rate their facultys AI capability as very strong, and just 16% offer comprehensive ongoing AI training.',
    recs: [
      'Treat faculty AI capability as core institutional infrastructure with sustained, ongoing professional development.',
      'Create cross-disciplinary peer learning networks where faculty share applied AI teaching practices.',
      'Embed AI capability development into hiring, promotion, and tenure criteria across departments.'
    ],
    employerRecs: [
      'Share anonymized case materials, tools, or use cases with partner universities so faculty teach AI application credibly, grounded in real practice.',
      'Sponsor faculty AI fellowships that fund educators to spend structured time inside your AI teams, treating their development as a pipeline investment.',
      'Invite faculty to internal AI training sessions your organization runs, giving them access to the same upskilling your own employees receive.'
    ]
  },
  {
    id: 'governance',
    name: 'Governance',
    desc: 'The absence of clear, practical guidance translating AI access into responsible, governed practice.',
    qs: [
      'To what extent are you communicating institutional AI policy in a way that is experienced as enabling and supportive rather than punitive or restrictive?',
      'To what extent are you embedding ethics and responsible AI use as a core requirement across all disciplines, rather than as a niche or elective provision?'
    ],
    insight: 'When institutional AI guidance is absent, unclear, or perceived as punitive, students develop independent habits with no oversight. Those ungoverned habits can travel directly into the workplace as compliance and/or quality risks.',
    reframe: '49% of students use independently sourced AI tools versus 19% using university tools. 62% cannot say with certainty whether their institution has AI policies in place.',
    recs: [
      'Replace prohibition-based policies with clear, enabling guidance integrated into everyday learning and assessment.',
      'Communicate AI rules as supportive frameworks for ethical practice, not punitive boundaries to avoid.',
      'Ensure consistent AI guidance across institutional, departmental, and individual course levels.'
    ],
    employerRecs: [
      'Publish a clear statement of how your organization expects AI to be used by graduates from day one, including disclosure and accountability norms.',
      'Co-develop AI use guidelines with universities that mirror professional standards, so students learn workplace-appropriate habits during education rather than after hiring.',
      'Model transparent AI use in communications with universities — show how disclosure, attribution, and verification work in practice, not just in policy.'
    ]
  },
  {
    id: 'experience',
    name: 'Experience',
    desc: 'A disconnect between access to AI tools and structured opportunities to practise, apply, and demonstrate real-world capability.',
    qs: [
      'To what extent are you structuring student AI engagement to include both task-level efficiencies as well as authentic workplace applications?',
      'To what extent are you identifying and addressing the competency gaps that represent the most significant barriers to graduate employability?'
    ],
    insight: 'Tool access without structured application does not produce applied capability. Students learn about AI but rarely have opportunities to work with it in authentic, assessed, workplace-relevant contexts.',
    reframe: '68% of students are satisfied with access to AI tools, but only 18% are very satisfied with the depth of AI learning. Working alongside AI is the least-covered curriculum topic.',
    recs: [
      'Embed structured, credit-bearing applied AI experiences into core curriculum across every degree program.',
      'Partner with employers to host authentic, project-based AI work for students before graduation.',
      'Design assessments around real workplace scenarios rather than theoretical or test-based AI knowledge.'
    ],
    employerRecs: [
      'Co-design credit-bearing applied projects with universities where students work on authentic business problems with real stakeholders, real constraints, and real deliverables.',
      'Host AI sandboxes or innovation labs where students from partner universities apply tools in authentic settings under the supervision of practicing professionals.',
      'Publish case studies of AI workflows in your organization that universities can use to design realistic assignments, simulations, and assessment scenarios.'
    ]
  },
  {
    id: 'skills',
    name: 'Skills',
    desc: 'Misalignment between the capabilities graduates demonstrate and the applied judgment, adaptability, and collaboration employers require.',
    qs: [
      'To what extent are you balancing the development of functional AI proficiency with the cultivation of strategic intelligence, ethical stewardship, and critical human skills?',
      'To what extent are you building sufficient agility into your curriculum review process to respond to labour market shifts as they emerge?'
    ],
    insight: 'Skills friction is the downstream result of every upstream failure. It surfaces when graduates arrive at work without the applied judgment, adaptability, and human capabilities employers depend on.',
    reframe: 'Employers rate critical evaluation of AI outputs as graduates\' single weakest competency. HE leaders prioritize AI tool use (40%) while employers prioritize communication (50%) and adaptability (45%)',
    recs: [
      'Balance development of functional proficiency, strategic intelligence, ethical stewardship, and critical human skills equally.',
      'Track graduate readiness against employer-defined competency frameworks, not internal academic benchmarks.',
      'Translate employer feedback on day-one performance into tangible curriculum and assessment changes.'
    ],
    employerRecs: [
      'Co-design a Graduate AI Skills Framework with institutions, articulating what a day-one-ready AI graduate looks like in observable, assessable behaviors.',
      'Share post-hire feedback on graduate readiness systematically with partner universities, turning hiring outcomes into structured signals for curriculum design.',
      'Differentiate the human skills you most value alongside AI proficiency (e.g., judgment, communication, ethical reasoning) so institutions don\'t optimize for tools alone.'
    ]
  }
];

/* Questions for the "Non-HiEd Employers" path — same 6 dimensions / scoring as FRICTIONS,
   interleaved order: all first questions per dimension, then all second questions. */
const EMPLOYER_QS = [
  [
    'To what extent has your organization diagnosed its current and emerging AI capability needs with enough specificity to communicate them to education partners?',
    'To what extent are you sharing workforce signals with university partners on a regular, structured basis rather than waiting for annual hiring cycles?'
  ],
  [
    'To what extent does your organization maintain systematic, ongoing relationships with university partners that go beyond graduate recruitment or career fairs?',
    'To what extent are you providing clear, continuous feedback to education partners about role-level expectations and day-one graduate performance?'
  ],
  [
    'To what extent is your organization actively supporting universities in understanding the practical implications of AI for your sector?',
    'To what extent are you embedding practitioners, sharing case materials, or opening workplace environments to help faculty build relevant AI capabilities?'
  ],
  [
    'To what extent have you communicated what responsible AI governance looks like inside your organization and what will be expected of graduates from day one?',
    'To what extent are you contributing to or referencing external accreditation frameworks and professional standards for AI use in your sector?'
  ],
  [
    'To what extent is your organization co-designing authentic, workplace-aligned AI learning experiences with university partners?',
    'To what extent are you sponsoring or hosting structured opportunities for students to practice applied AI in real work environments before graduation?'
  ],
  [
    'To what extent are you communicating the specific AI-ready competencies your sector requires directly to universities using common skills frameworks?',
    'To what extent are you translating your hiring and performance data into actionable feedback that helps institutions close specific graduate capability gaps?'
  ]
];

const RESPONSES = [
  { label: 'Not yet started',   val: 1 },
  { label: 'Early exploration', val: 2 },
  { label: 'Developing',        val: 3 },
  { label: 'Well established',  val: 4 },
  { label: 'Leading practice',  val: 5 }
];
