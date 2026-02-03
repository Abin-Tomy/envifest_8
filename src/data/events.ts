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
  poster?: string;
  isRegistrationClosed?: boolean;
}

export const events: EventData[] = [
  {
    id: "hackathon",
    name: "Build for Kozhikode 2.0",
    icon: Code,
    category: "featured",
    theme: "circuit",
    eventType: "main",
    tagline: "Code. Create. Conquer.",
    description: "'Build for Kozhikode 2.0' challenges participants to identify and develop innovative solutions to real-world problems faced by the residents, enterprises, and communities in and around Kozhikode. The event aims to promote sustainability, enhance public services, and drive meaningful change, empowering local communities through technological innovation.",
    rules: [
      "Each team can have a maximum of 4 members",
      "Students from different Universities/Colleges can form a team",
      "Entry fee: Rs.250/- per participant",
      "Each team member must have a valid identity card from their respective university/college",
      "Reporting Time: 12:00 PM on 7th February 2026",
      "Theme Announcement: 09:00 AM on 7th February 2026",
      "Hackathon Start: 09:00 AM on 7th February 2026",
      "Hackathon End: 09:00 AM on 8th February 2026",
      "Presentation Time: 09:00 AM to 3:30 PM on 8th February 2026",
      "Judging based on quality of idea, prototype completion, and presentation",
      "Participants must bring any required hardware tools",
      "Uninterrupted Wi-Fi network will be provided",
      "Unethical behavior may result in disqualification",
      "Student Coordinators reserve the right to make final decisions",
      "The judge's decision will be considered final"
    ],
    timing: "7th - 8th February 2026 | 9:00 AM - 9:00 AM",
    venue: "Abdul Kalam Hall",
    teamSize: "1-4 Members",
    prize: "1st: ₹20,000 | 2nd: ₹10,000",
    registrationFee: "₹250/participant",
    registrationLink: "https://airtable.com/appwQh8I3EOu4GYXV/pagAI5h7ghFO4kp0i/form",
    poster: "/hackathon.webp",
    coordinators: [
      { name: "Nandakiran R", phone: "+91 7594824490", role: "Student Coordinator" },
      { name: "Mr. Kanuprasad M.K", phone: "+91 9995077258", role: "Staff Coordinator" }
    ]
  },
  {
    id: "star-envi",
    name: "Star of ENVI",
    icon: Star,
    category: "featured",
    theme: "standard",
    eventType: "main",
    tagline: "Shine Brightest",
    description: "The Star of ENVI is the ultimate individual challenge designed to test versatility across aptitude, coding, logic, and communication. In this multi-round elimination competition, participants accumulate points as they advance through several rigorous stages: an Aptitude Test, a Written Coding Exam, speaking challenge, and a deep-dive Logical Test. The journey culminates in a Final Panel Interview, where the top contenders face off to be crowned \"The Star of ENVI.\"",
    rules: [
      "Individual participation only",
      "Registration is open for all college students (UG and PG)",
      "The event consists of multiple elimination rounds",
      "Points are awarded in each qualifying round",
      "The number of rounds may vary based on total registrations",
      "Use of unfair means or AI tools (where prohibited) will result in disqualification",
      "Decisions of the judges and event coordinators are final"
    ],
    timing: "February 09, 2026 | 9:00 AM - 2:30 PM",
    venue: "Lab 4",
    teamSize: "Individual",
    prize: "1st: ₹10,000",
    registrationFee: "₹250/participant",
    registrationLink: "https://airtable.com/appPf7sTJjJDeDIJ8/pagpLJqcX3X624BRr/form",
    poster: "/star-of-envi-poster.webp",
    coordinators: [
      { name: "Fausteena Joshy", phone: "+91 7907399049", role: "Student Coordinator" },
      { name: "Ms. Drishya Narayanan", phone: "+91 7034057003", role: "Staff Coordinator" }
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
    description: "ENVI Ideathon 2026 is a student-focused innovation and idea-pitching event designed to encourage problem-solving, creativity, and practical thinking. The event provides a platform for selected teams to pitch their ideas to an industry expert and compete for cash prizes. Open to all colleges and individuals.",
    rules: [
      "Team size: 1 to 4 members. Cross-college teams are allowed",
      "All team members must be students",
      "Online registration is mandatory and includes idea submission",
      "Registration fee: ₹300 per team (includes shortlisting opportunity and certificates)",
      "Reporting Time: 9:00 AM on February 9, 2026",
      "Stage Pitching Starts: 10:00 AM",
      "All teams submit ideas during registration for offline evaluation",
      "Top 12 teams will be shortlisted for stage pitching based on predefined criteria",
      "Each shortlisted team gets 10 minutes (Pitch + Q&A) for presentation",
      "Presentations must be limited to a maximum of 6 slides",
      "Recommended slides: Problem Statement, Solution, Innovation, Feasibility, Impact, Conclusion",
      "Evaluation based on: Innovation, Problem Relevance, Technical Feasibility, Practical Impact, Presentation & Clarity",
      "Plagiarized ideas will be disqualified",
      "Teams must report on time. Misconduct may lead to disqualification",
      "Decision of the judge is final and binding"
    ],
    timing: "February 09, 2026 | 9:00 AM - 2:30 PM",
    venue: "Jubilee Hall",
    teamSize: "1-4 Members",
    prize: "1st: ₹3,000 | 2nd: ₹2,000",
    registrationFee: "₹300/team",
    registrationLink: "https://airtable.com/apprqTh8yWjJlXxvb/pagbD0HI1WmwtZ8I3/form",
    poster: "/IDEATHON-poster.webp",
    coordinators: [
      { name: "Ayush VP", phone: "+91 9911366704", role: "Student Coordinator" },
      { name: "Mr. Kanuprasad M.K", phone: "+91 9995077258", role: "Staff Coordinator" }
    ]
  },
  {
    id: "techquiz",
    name: "QuizBit",
    icon: Brain,
    category: "other",
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
    timing: "February 09, 2026 | 9:00 AM - 2:30 PM",
    venue: "Abdul Kalam Hall",
    teamSize: "2 Members",
    prize: "1st: ₹3,000 | 2nd: ₹2,000 | 3rd: ₹1,000",
    registrationFee: "₹20/team",
    registrationLink: "https://airtable.com/app46TuuqN1ySWWrN/pagqno28NDLoBfyft/form",
    poster: "/QUIZbit-poster.webp",
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
    timing: "February 09, 2026 | 9:00 AM - 2:30 PM",
    venue: "PTA Hall",
    teamSize: "2 Members",
    prize: "1st: ₹4,000 | 2nd: ₹2,000",
    registrationFee: "₹20/team",
    registrationLink: "https://airtable.com/appcM1QasQkCsgMkO/pagle4VXD1g1HoNKp/form",
    poster: "/crossfire-poster.webp",
    coordinators: [
      { name: "Bhadra", phone: "+91 8921543780", role: "Student Coordinator" },
      { name: "Ms. Anjana T K", phone: "+91 8248962887", role: "Staff Coordinator" }
    ]
  },
  {
    id: "ad-making",
    name: "AdVENGERS",
    icon: Video,
    category: "other",
    theme: "standard",
    eventType: "main",
    tagline: "Create. Captivate. Convert.",
    description: "An AI-powered advertisement video making competition where participants create compelling advertisements using artificial intelligence tools. Showcase your creativity by generating visuals, voiceovers, music, and scripts with AI, then edit them into a polished final product.",
    rules: [
      "Open to UG and PG students of any year",
      "Participation is allowed in teams of 2 members only",
      "Duration: Minimum 20 seconds, Maximum 25 seconds",
      "The advertisement must be fully AI-generated",
      "AI tools can be used for visuals, voiceovers, music, scripts, etc.",
      "Editing software is allowed to mix and match AI-generated clips, add transitions, cuts, text, and effects",
      "The final output must still qualify as an AI-generated advertisement",
      "Participants are allowed to bring their own laptops",
      "Internet connection will be provided during the competition",
      "Total time allotted: 3 hours (includes ideation, generation, editing, and final submission)",
      "Judges' decision will be final"
    ],
    timing: "February 09, 2026 | 12:00 PM - 3:00 PM",
    venue: "Room 2506",
    teamSize: "2 Members",
    prize: "1st: ₹3,000 + Internship | 2nd: ₹2,000 | 3rd: ₹1,000",
    registrationFee: "₹150/team",
    registrationLink: "https://airtable.com/appRCCsgg329Gzk2r/pagbeLJXK1Zyl6lmD/form",
    poster: "/advengers-poster.webp",
    coordinators: [
      { name: "Nehal Noby", phone: "+91 8547691686", role: "Student Coordinator" },
      { name: "Mr. Kanuprasad M.K", phone: "+91 9995077258", role: "Staff Coordinator" }
    ]
  },
  {
    id: "vibe-coding",
    name: "JARVIS",
    icon: Terminal,
    category: "other",
    theme: "circuit",
    eventType: "main",
    tagline: "Vibe Coding",
    description: "A creative coding challenge focused on ideas, speed, and execution. Build and experiment within a limited time.",
    rules: [
      "Participants may compete individually or in teams of 2",
      "Registration open for all University/College students (UG and PG)",
      "College ID cards/ID proof are compulsory",
      "Event runs from 9:00 AM to 12:00 PM (3-hour session)",
      "Only laptops allowed - Mobile phones, smartwatches & external devices strictly prohibited",
      "Allowed AI tools: GPT, Gemini, DeepSeek",
      "No code sharing between teams - Plagiarism leads to immediate disqualification",
      "All code must be created during the event - Pre-written templates not allowed"
    ],
    timing: "February 09, 2026 | 9:00 AM - 12:00 PM",
    venue: "MCA Lab",
    teamSize: "Individual or 2 Members",
    prize: "1st: ₹3,000 | 2nd: ₹2,000",
    registrationFee: "₹100/participant",
    registrationLink: "https://airtable.com/appQFQdu9WO2Edn4w/pagbD0HI1WmwtZ8I3/form",
    poster: "/jarvis-poster.webp",
    coordinators: [
      { name: "Athul Raj", phone: "+91 8590983075", role: "Student Coordinator" },
      { name: "Mr. Kanuprasad M.K", phone: "+91 9995077258", role: "Staff Coordinator" }
    ]
  },
  {
    id: "escape-system",
    name: "Latveria Protocol",
    icon: KeyRound,
    category: "other",
    theme: "circuit",
    eventType: "main",
    tagline: "Escape the System",
    description: "Escape the System is an intercollegiate, story-based digital escape challenge where teams must solve 15 locked questions sequentially, using logical, visual, and reasoning skills to break a simulated system lockdown within a limited time. Clues will be provided only for selected high-difficulty questions. The event emphasizes critical thinking, calm decision-making, and teamwork, and does not require prior technical knowledge.",
    rules: [
      "Each team must consist of exactly 2 students",
      "The total event duration is 3 hours",
      "Teams must use only the allotted lab PC",
      "Internet is not provided. Use of electronic devices inside the lab is strictly prohibited",
      "No collaboration or answer sharing between teams is allowed",
      "Any attempt to manipulate, bypass, or tamper with the system will result in immediate disqualification",
      "Winners are decided based on the fastest completion time",
      "In case of a tie, a tie-breaker round will be conducted",
      "The decisions of the judges and organizing committee are final and binding"
    ],
    timing: "February 09, 2026 | 9:00 AM - 2:30 PM",
    venue: "Lab 2",
    teamSize: "2 Members",
    prize: "1st: ₹3,000 | 2nd: ₹2,000 | 3rd: ₹1,000",
    registrationFee: "₹150/team",
    registrationLink: "https://airtable.com/appfdi22NpkDWQ0uC/pagbD0HI1WmwtZ8I3/form",
    poster: "/latveria-protocol-poster.webp",
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
    timing: "February 09, 2026 | 9:00 AM - 2:30 PM",
    venue: "Room 2507",
    teamSize: "1-3 Members",
    prize: "1st: ₹3,000 | 2nd: ₹2,000",
    registrationFee: "₹100/participant",
    registrationLink: "https://airtable.com/apphjUk2Fe4wL1v6X/pagfBFgMcO6usAhCo/form",
    poster: "/ROBORACE-poster.webp",
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
    tagline: "Escape the Room",
    description: "Groups attempt to find clues and solve a series of puzzles to escape before time runs out!",
    rules: [
      "Each team must consist of exactly three members",
      "Registration is open to all college students (UG & PG)",
      "College ID card or valid ID proof is mandatory for participation",
      "The event follows an elimination format. Only a specific number of teams will qualify to the next level",
      "Four teams will qualify for the final round",
      "Any form of malpractice or unfair means will lead to immediate disqualification",
      "Participants must report to the venue at least 20 minutes before the start time",
      "Event start time: 9:30 AM",
      "Additional instructions and details will be announced just before the event begins",
      "The decisions of the judges and organizing committee are final and binding"
    ],
    timing: "February 09, 2026 | 9:00 AM - 2:30 PM",
    venue: "Yoga Hall (Room 2608, 2609)",
    teamSize: "3 Members",
    prize: "1st: ₹6,000 | 2nd: ₹3,000",
    registrationFee: "₹300/team",
    registrationLink: "https://airtable.com/app4mJjvZgKAqcgo2/pag9bIqpIaFPlMVwO/form",
    poster: "/burn-the-witch-poster.webp",
    coordinators: [
      { name: "Adith Jai", phone: "+91 9207009201", role: "Student Coordinator" },
      { name: "Ms. Drishya Narayanan", phone: "+91 7034057003", role: "Staff Coordinator" }
    ]
  },

  {
    id: "reel-editing",
    name: "Reel Rush",
    icon: Video,
    category: "other",
    theme: "standard",
    eventType: "online",
    tagline: "Doomsday in Devagiri",
    description: "A reel editing competition where participants create short, impactful videos using provided raw footage. Use of AI is encouraged, and you can draw inspiration from previous Avengers movies. Raw footage will be provided once registration is completed.",
    rules: [
      "Video should be in 9:16 ratio",
      "Resolution: 1080p 30fps",
      "Video length: 20-40 seconds",
      "Use of AI is encouraged",
      "Can use reference from previous Avengers Movies",
      "Raw footage will be provided once registration is completed",
      "You will be added to a group for further instructions",
      "Deadline for submission: February 07, 2026"
    ],
    timing: "Registration closes: February 06, 2026 | Submission deadline: February 07, 2026",
    venue: "Online Submission",
    teamSize: "Individual",
    prize: "1st: ₹2,000 | 2nd: ₹1,000",
    registrationFee: "₹50/participant",
    registrationLink: "https://airtable.com/appVN0z3xadC3yZPl/pagHfS1qxJOfyYUbs/form",
    coordinators: [
      { name: "Ebanse Jose", phone: "+91 9446404229", role: "Student Coordinator" }
    ],
    poster: "/reelmaking-poster.webp"
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
      "Event Mode: Online",
      "Game Mode: Random",
      "Only individual participation is allowed",
      "Registration is open for all students",
      "8 minute knockout",
      "If a player is found cheating in games, send a video proof will give an auto win",
      "WhatsApp group will be created after registration process where further details will be provided",
      "After every match the player who won should send a screenshot to the group with the caption 'won vs @mention(opposite player)'"
    ],
    timing: "February 03 - February 05, 2026 | Online",
    venue: "Online",
    teamSize: "Individual",
    prize: "1st: ₹2,000 | 2nd: ₹1,000",
    registrationFee: "₹30/participant",
    registrationLink: "https://airtable.com/appQmJg90WUHqJ3K2/pagx7t4uvJRe3uiVA/form",
    poster: "/EFOOTBALL-poster.webp",
    isRegistrationClosed: true,
    coordinators: [
      { name: "Fadil", phone: "+91 8129520528", role: "Student Coordinator" },
      { name: "Ms. Drishya Narayanan", phone: "+91 7034057003", role: "Staff Coordinator" }
    ]
  }
];

export const getFeaturedEvents = () => events.filter(e => e.category === "featured");
export const getOtherEvents = () => events.filter(e => e.category === "other");
export const getMainEvents = () => events.filter(e => e.eventType === "main");
export const getOnlineEvents = () => events.filter(e => e.eventType === "online");
export const getEventById = (id: string) => events.find(e => e.id === id);
