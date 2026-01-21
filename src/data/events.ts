import {
  Code,
  Lightbulb,
  Brain,
  MessageSquare,
  Video,
  Terminal,
  KeyRound,
  Bot,
  Flame,
  Star,
  Gamepad2,
  Palette,
  LucideIcon
} from "lucide-react";

export interface EventCoordinator {
  name: string;
  phone: string;
  role: string;
}

export interface EventData {
  id: string;
  name: string;
  icon: LucideIcon;
  category: "featured" | "other";
  theme: "standard" | "circuit" | "fire";
  eventType: "main" | "online";
  tagline: string;
  description: string;
  rules: string[];
  timing: string;
  venue: string;
  teamSize: string;
  prize: string;
  registrationFee: string;
  registrationLink?: string;
  coordinators: EventCoordinator[];
}

export const events: EventData[] = [
  {
    id: "hackathon",
    name: "Hackathon",
    icon: Code,
    category: "featured",
    theme: "circuit",
    eventType: "main",
    tagline: "Code. Create. Conquer.",
    description: "'Build for Kozhikode' challenges participants to identify and develop innovative solutions to real-world problems faced by the residents, enterprises, and communities in and around Kozhikode. The event aims to promote sustainability, enhance public services, and drive meaningful change, empowering local communities through technological innovation.",
    rules: [
      "Each team can have a maximum of 4 members",
      "Students from different Universities/Colleges can form a team",
      "Entry fee: Rs.250/- per participant (Top 10 MuLearners with over 5000 Karma points can register for free!)",
      "Each team member must have a valid identity card from their respective university/college",
      "Reporting Time: 1:30 PM on 15th January 2024",
      "Theme Announcement: 09:00 AM on 15th January 2024",
      "Hackathon Duration: 09:00 AM (15th Jan) to 09:00 AM (16th Jan 2024)",
      "Presentation Time: 09:00 AM to 3:30 PM on 16th January 2024",
      "Judging based on quality of idea, prototype completion, and presentation",
      "Participants must bring any required hardware tools",
      "Uninterrupted Wi-Fi network will be provided",
      "Unethical behavior may result in disqualification",
      "Student Coordinators reserve the right to make final decisions",
      "The judge's decision will be considered final",
      "Facilities: Evening Snacks, Dinner, Breakfast, Lunch, 24-hour coffee and light snacks"
    ],
    timing: "February 09, 2026 | 9:00 AM - 5:00 PM",
    venue: "To be announced",
    teamSize: "2-4 Members",
    prize: "1st: ₹20,000 | 2nd: ₹10,000",
    registrationFee: "₹250 per head",
    coordinators: [
      { name: "Coordinator", phone: "+91 XXXXX XXXXX", role: "Lead Coordinator" },
      { name: "Coordinator", phone: "+91 XXXXX XXXXX", role: "Technical Head" }
    ]
  },
  {
    id: "ideathon",
    name: "Ideathon",
    icon: Lightbulb,
    category: "featured",
    theme: "standard",
    eventType: "main",
    tagline: "Think Beyond Limits",
    description: "ENVI Ideathon 2026 is a student-focused innovation and idea-pitching event that encourages problem-solving, creativity, and practical thinking. Teams submit their ideas in advance, and shortlisted teams get the opportunity to pitch their solutions on stage before an industry expert.",
    rules: [
      "Team size can range from 1 to 4 students. Cross-college teams are allowed",
      "The event is open to students from all colleges",
      "Online registration is mandatory, and idea submission is part of the registration process",
      "Based on pre-event evaluation, the Top 12 teams will be shortlisted for stage pitching",
      "Each shortlisted team will get 10 minutes (pitch + Q&A) for their presentation",
      "Presentations must be limited to a maximum of 6 slides",
      "Winners are selected based on innovation, feasibility, impact, and presentation quality",
      "Plagiarized ideas or misconduct will lead to disqualification",
      "The decisions of the judge and organizing committee are final and binding"
    ],
    timing: "February 09, 2026 | 9:00 AM - 5:00 PM",
    venue: "To be announced",
    teamSize: "1-4 Members",
    prize: "1st: ₹3,000 | 2nd: ₹2,000",
    registrationFee: "₹200",
    coordinators: [
      { name: "Ayush VP", phone: "+91 9911366704", role: "Student Coordinator" },
      { name: "Ms. Drishya Narayanan", phone: "+91 7034057003", role: "Staff Coordinator" }
    ]
  },
  {
    id: "techquiz",
    name: "QuizBit",
    icon: Brain,
    category: "featured",
    theme: "standard",
    eventType: "main",
    tagline: "Knowledge is Power",
    description: "The Tech Quiz for School Students is an exciting and interactive competition designed to test students' knowledge of technology, science, and innovation. It fosters curiosity and learning while encouraging teamwork and problem-solving skills in a fun and engaging way.",
    rules: [
      "All participants must carry a valid school ID card",
      "The quiz will be conducted in English",
      "Two stages: Prelims (MCQ Based) and Finals (4 rounds)",
      "Finals rounds: Round Robin, Visual, Rapid Fire, and Buzzer Round",
      "Questions based on Computer Science, GK & Math related to Computer Science",
      "Mobile phones, smart devices, notes, or any external assistance are strictly prohibited",
      "Participants must maintain discipline, fairness, and sportsmanship",
      "Any form of malpractice or unfair means will lead to immediate disqualification",
      "In case of a tie, a tie-breaker round will be conducted",
      "The Quiz Master's / Judges' decision shall be final and binding",
      "Any violation of the rules may result in immediate disqualification"
    ],
    timing: "February 09, 2026 | 9:00 AM - 5:00 PM",
    venue: "Quiz Hall, Block C",
    teamSize: "2 Members",
    prize: "1st: ₹3,000 | 2nd: ₹2,000 | 3rd: ₹1,000",
    registrationFee: "₹20/team",
    registrationLink: "https://airtable.com/app46TuuqN1ySWWrN/pagrt453Lb3u4qZpT/form",
    coordinators: [
      { name: "Asher Vargheese K", phone: "+91 9497265177", role: "Student Coordinator" },
      { name: "Ms. Anjana T K", phone: "+91 8248962887", role: "Staff Coordinator" }
    ]
  },
  {
    id: "debate",
    name: "CrossFire",
    icon: MessageSquare,
    category: "other",
    theme: "standard",
    eventType: "main",
    tagline: "Words Are Weapons",
    description: "Clash of perspectives in the arena of ideas. Articulate your stance, counter your opponents, and emerge as the champion of rhetoric.",
    rules: [
      "All participants must carry a valid school ID card",
      "The debate will be conducted in English / Malayalam",
      "The debate will be conducted in two stages: Prelims and Finals",
      "Prelims consists of 4 rounds, each of 45 minutes Final round duration: 20 minutes",
      "Topics will be allotted on the spot",
      "All the team members must voice their opinions and respect opposing views at all times",
      "Participants are expected to maintain discipline, fairness, and sportsmanship throughout the event",
      "Mobile phones, smart devices, notes, or any external assistance are strictly prohibited during the competition",
      "The judges' decision shall be final and binding",
      "Any violation of the rules may result in immediate disqualification"
    ],
    timing: "February 09, 2026 | 9:00 AM - 5:00 PM",
    venue: "PTA hall",
    teamSize: "2 Members",
    prize: "1st: ₹4,000 | 2nd: ₹2,000",
    registrationFee: "₹20/team",
    registrationLink: "https://airtable.com/appcM1QasQkCsgMkO/pagle4VXD1g1HoNKp/form",
    coordinators: [
      { name: "Bhadra", phone: "+91 8921543780", role: "Student Coordinator" },
      { name: "Ms. Anjana T K", phone: "+91 8248962887", role: "Staff Coordinator" }
    ]
  },
  {
    id: "ad-making",
    name: "ADBYTE",
    icon: Video,
    category: "other",
    theme: "standard",
    eventType: "main",
    tagline: "Create. Captivate. Convert.",
    description: "This is an advertisement video making competition where participants showcase their creative genius by crafting compelling advertisements.",
    rules: [
      "Event Mode: Offline",
      "Participation: Team of two members",
      "Eligibility: Open to all UG & PG college students",
      "The topic will be revealed on the spot before the event begins",
      "The video duration should be between 20 seconds and 90 seconds",
      "Participants are allowed to shoot the video using mobile phones",
      "All ideas and content must be original",
      "The video may be in English or Malayalam",
      "Judging Criteria: Creativity & Originality, Clarity of Message, Relevance to the Given Topic, Presentation & Visual Appeal, Overall Impact",
      "The judge's decision will be final and binding"
    ],
    timing: "February 09, 2026 | 9:00 AM - 5:00 PM",
    venue: "To be announced",
    teamSize: "2 Members",
    prize: "1st: ₹3,000 | 2nd: ₹2,000 | 3rd: ₹1,000",
    registrationFee: "₹150",
    registrationLink: "https://airtable.com/appRCCsgg329Gzk2r/pagrt453Lb3u4qZpT/form",
    coordinators: [
      { name: "Nehal Noby", phone: "+91 8547691686", role: "Student Coordinator" },
      { name: "Ms. Drishya Narayanan", phone: "+91 7034057003", role: "Staff Coordinator" }
    ]
  },
  {
    id: "vibe-coding",
    name: "Vibe Coding",
    icon: Terminal,
    category: "other",
    theme: "circuit",
    eventType: "main",
    tagline: "Code to the Beat",
    description: "A unique coding competition where you solve problems while vibing to music. Speed, accuracy, and rhythm combine in this one-of-a-kind challenge.",
    rules: [
      "Individual participation",
      "Multiple coding rounds",
      "Languages: C, C++, Java, Python",
      "Time-based scoring",
      "Headphones mandatory"
    ],
    timing: "February 09, 2026 | 9:00 AM - 5:00 PM",
    venue: "To be announced",
    teamSize: "Individual",
    prize: "1st: ₹2,000 | 2nd: ₹1,000",
    registrationFee: "₹100",
    coordinators: [
      { name: "Athul Raj", phone: "+91 8590983075", role: "Student Coordinator" },
      { name: "Ms. Drishya Narayanan", phone: "+91 7034057003", role: "Staff Coordinator" }
    ]
  },
  {
    id: "escape-system",
    name: "Escape the System",
    icon: KeyRound,
    category: "other",
    theme: "circuit",
    eventType: "main",
    tagline: "Hack Your Way Out",
    description: "Escape the System is an intercollegiate, story-based digital escape challenge where teams must solve a sequence of logical, visual, and reasoning-based questions to break a simulated system lockdown within a limited time. The event emphasizes critical thinking, calm decision-making, and teamwork.",
    rules: [
      "Each team must consist of exactly 2 students",
      "The total event duration is 3 hours",
      "Teams must use only the allotted lab PC",
      "Internet is not provided. Use of electronic devices inside the lab is strictly prohibited",
      "No collaboration or answer sharing between teams is allowed",
      "The challenge consists of 15 locked questions solved sequentially",
      "Clues are provided only for selected high-difficulty questions",
      "Any attempt to manipulate, bypass, or tamper with the system will result in immediate disqualification",
      "Winners are decided based on the fastest completion time",
      "In case of a tie, a tie-breaker round will be conducted",
      "The decisions of the judges and organizing committee are final and binding"
    ],
    timing: "February 09, 2026 | 9:00 AM - 5:00 PM",
    venue: "To be announced",
    teamSize: "2 Members",
    prize: "1st: ₹3,000 | 2nd: ₹2,000 | 3rd: ₹1,000",
    registrationFee: "₹150",
    registrationLink: "https://airtable.com/app2MRa0YoaGP5PqN/pagrt453Lb3u4qZpT/form",
    coordinators: [
      { name: "Abin Tomy", phone: "+91 7907693769", role: "Student Coordinator" },
      { name: "Ms. Drishya Narayanan", phone: "+91 7034057003", role: "Staff Coordinator" }
    ]
  },
  {
    id: "robo-race",
    name: "Robo Race",
    icon: Bot,
    category: "other",
    theme: "circuit",
    eventType: "main",
    tagline: "Build. Program. Race.",
    description: "Build and race your robot through challenging obstacle courses. Speed and precision will determine the champion.",
    rules: [
      "Participants must bring an already designed and built autonomous line follower robot strictly as per the given specifications",
      "The robot must be Arduino-based, use IR sensors, and follow a black line made using black insulation tape",
      "No remote control or external power supply is allowed",
      "The robot must complete the given track accurately and in the least possible time",
      "The robot must be fully autonomous during the run",
      "Participation is open to Schools and Colleges",
      "Individual participation and team participation (up to 3 members) are allowed",
      "The track layout will be revealed only on the event day",
      "Touching the robot or complete deviation from the line will terminate the run",
      "Judging will be based on time and precision"
    ],
    timing: "February 09, 2026 | 9:00 AM - 5:00 PM",
    venue: "To be announced",
    teamSize: "1-3 Members",
    prize: "To be announced",
    registrationFee: "₹100",
    registrationLink: "https://airtable.com/appqGgTlMVGAJ584n/pagrt453Lb3u4qZpT/form",
    coordinators: [
      { name: "Gautham", phone: "+91 9995817077", role: "Student Coordinator" },
      { name: "Ms. Drishya Narayanan", phone: "+91 7034057003", role: "Staff Coordinator" }
    ]
  },
  {
    id: "burn-witch",
    name: "Burn the Witch",
    icon: Flame,
    category: "other",
    theme: "fire",
    eventType: "main",
    tagline: "Debug or Perish",
    description: "Groups attempt to find clues and solve a series of puzzles to escape before time runs out!",
    rules: [
      "The event will take place from 9:00 AM to 1:00 PM",
      "Teams should consist of two members",
      "Registration is open for all college students (UG and PG)",
      "College ID cards/ID proof are compulsory",
      "Specific number of teams get a pass for the next level",
      "Four teams will be qualified to the finals",
      "Each room contains specific tasks or puzzles",
      "There will be time constraint for each room and round",
      "The decision of judges will be final",
      "Any kind of malpractice would be considered as disqualified",
      "Participants must report to the venue at least 20 minutes before the starting time",
      "Any more details will be provided before the event"
    ],
    timing: "February 09, 2026 | 9:00 AM - 5:00 PM",
    venue: "To be announced",
    teamSize: "2 Members",
    prize: "1st: ₹3,000 | 2nd: ₹1,000",
    registrationFee: "₹300",
    registrationLink: "https://airtable.com/app4mJjvZgKAqcgo2/pagrt453Lb3u4qZpT/form",
    coordinators: [
      { name: "Adith Jai", phone: "+91 9207009201", role: "Student Coordinator" },
      { name: "Ms. Drishya Narayanan", phone: "+91 7034057003", role: "Staff Coordinator" }
    ]
  },
  {
    id: "star-envi",
    name: "Star of ENVI",
    icon: Star,
    category: "other",
    theme: "standard",
    eventType: "main",
    tagline: "Shine Brightest",
    description: "The Star of ENVI is an individual multi-round competition where participants are evaluated on aptitude, coding, communication, logic, and personality to win the ultimate title.",
    rules: [
      "Individual participation only",
      "Registration is open for all college students (UG and PG)",
      "The event consists of multiple elimination rounds",
      "Points are awarded in each qualifying round",
      "The number of rounds may vary based on total registrations",
      "Use of unfair means or AI tools (where prohibited) will result in disqualification",
      "Decisions of the judges and event coordinators are final",
      "Round 1 – Aptitude Test: Online test, 20 questions in 20 minutes, no negative marking, cutoff: 12 (may increase to 13), qualifiers earn 10 points + bonus",
      "Round 2 – Written Coding Exam: Offline written coding, 2 questions in 45 minutes, solve at least one to qualify, 10 points + 10 bonus for both correct, any programming language allowed",
      "Round 3 – Switch: Speaking round with technical & non-technical topic, 5 min prep + 5 min presentation, switch meanings on judges' command, qualifiers earn 10 points",
      "Round 4 – Logical Test: Technical coding round, 1 problem in 2 hours, no internet or AI tools, any programming language allowed, qualifiers earn 10 points",
      "Round 5 – Final Panel Interview: Top 3–5 candidates qualify, technical + HR interview, panel decision is final, winner is crowned The Star of ENVI"
    ],
    timing: "February 09, 2026 | 9:00 AM - 5:00 PM",
    venue: "To be announced",
    teamSize: "Individual",
    prize: "1st: ₹10,000",
    registrationFee: "₹250",
    registrationLink: "https://airtable.com/appPf7sTJjJDeDIJ8/pagiKgDtzZFfaGJoZ/form",
    coordinators: [
      { name: "Sian Juilian", phone: "+91 9778473889", role: "Student Coordinator" },
      { name: "Ms. Drishya Narayanan", phone: "+91 7034057003", role: "Staff Coordinator" }
    ]
  },
  {
    id: "poster-designing",
    name: "Poster Designing",
    icon: Palette,
    category: "other",
    theme: "standard",
    eventType: "online",
    tagline: "Design Your Vision",
    description: "Poster Designing (Online) is a creative competition where participants showcase their artistic and conceptual skills by designing digital posters on a given theme. It encourages innovation, visual storytelling, and effective communication, all from the comfort of their own space.",
    rules: [
      "Only individual participants are allowed",
      "Registration is open for all college students (UG and PG)",
      "The topic will be revealed before the event",
      "Any tools or software can be used",
      "Posters must be original, relevant to the topic, and visually appealing",
      "Submit in JPEG, PNG, or PDF format within the given time frame",
      "Plagiarism, offensive content, or late submissions will lead to disqualification",
      "The judge's decision will be final"
    ],
    timing: "February 09, 2026 | 9:00 AM - 5:00 PM",
    venue: "Online Submission",
    teamSize: "Individual",
    prize: "₹7,000",
    registrationFee: "Free",
    coordinators: [
      { name: "Ms. Drishya Narayanan", phone: "+91 7034057003", role: "Staff Coordinator" }
    ]
  },
  {
    id: "e-football",
    name: "E-Football",
    icon: Gamepad2,
    category: "other",
    theme: "standard",
    eventType: "online",
    tagline: "Virtual Glory Awaits",
    description: "A high-energy virtual tournament where players compete in knockout rounds.",
    rules: [
      "The event will take place from 8:00 PM onwards",
      "You will be added to a WhatsApp group where further details about the event will be shared",
      "Knockout match rules",
      "5-substitutions allowed",
      "Card types: All allowed",
      "Squad strength limitations: None",
      "Proceed to penalties if the match ends in a draw",
      "If a player is found cheating during the game, provide video proof for an auto-win to the opposition",
      "If a player disconnects during the match, the opposition will be deemed victorious",
      "Every player must play the game on their own device",
      "Players can decide who will create the match room",
      "Participants must report at the match venue within the specified timeline"
    ],
    timing: "February 09, 2026 | 9:00 AM - 5:00 PM",
    venue: "Gaming Zone, Block J",
    teamSize: "Individual",
    prize: "1st: ₹2,000 | 2nd: ₹1,000",
    registrationFee: "₹50",
    registrationLink: "https://airtable.com/appQmJg90WUHqJ3K2/paggg242glNhVS8dN/form",
    coordinators: [
      { name: "Ms. Drishya Narayanan", phone: "+91 7034057003", role: "Staff Coordinator" }
    ]
  }
];

export const getFeaturedEvents = () => events.filter(e => e.category === "featured");
export const getOtherEvents = () => events.filter(e => e.category === "other");
export const getMainEvents = () => events.filter(e => e.eventType === "main");
export const getOnlineEvents = () => events.filter(e => e.eventType === "online");
export const getEventById = (id: string) => events.find(e => e.id === id);
