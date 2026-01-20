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
    timing: "March 15-16, 2026 | 24 Hours",
    venue: "Main Auditorium, Block A",
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
    description: "Your idea could be the next big thing. Present your innovative solutions to real-world problems and get a chance to turn your vision into reality.",
    rules: [
      "Team of 2-3 members required",
      "Ideas must be original and innovative",
      "Presentation time: 10 minutes + 5 minutes Q&A",
      "Use of visual aids encouraged",
      "Business viability will be considered"
    ],
    timing: "March 15, 2026 | 10:00 AM - 4:00 PM",
    venue: "Seminar Hall, Block B",
    teamSize: "2-3 Members",
    prize: "1st: ₹3,000 | 2nd: ₹2,000",
    registrationFee: "₹200",
    coordinators: [
      { name: "Coordinator", phone: "+91 XXXXX XXXXX", role: "Lead Coordinator" },
      { name: "Coordinator", phone: "+91 XXXXX XXXXX", role: "Event Manager" }
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
    timing: "March 15, 2026 | 2:00 PM - 5:00 PM",
    venue: "Quiz Hall, Block C",
    teamSize: "2 Members",
    prize: "1st: ₹3,000 | 2nd: ₹2,000 | 3rd: ₹1,000",
    registrationFee: "₹20",
    coordinators: [
      { name: "Coordinator", phone: "+91 XXXXX XXXXX", role: "Quiz Master" },
      { name: "Coordinator", phone: "+91 XXXXX XXXXX", role: "Coordinator" }
    ]
  },
  {
    id: "debate",
    name: "Debate",
    icon: MessageSquare,
    category: "other",
    theme: "standard",
    eventType: "main",
    tagline: "Words Are Weapons",
    description: "Clash of perspectives in the arena of ideas. Articulate your stance, counter your opponents, and emerge as the champion of rhetoric.",
    rules: [
      "Individual participation",
      "Topics revealed 30 minutes before",
      "Speaking time: 5 minutes per speaker",
      "Rebuttals: 2 minutes each",
      "Judged on content, delivery, and rebuttal"
    ],
    timing: "March 15, 2026 | 11:00 AM - 2:00 PM",
    venue: "Debate Hall, Block D",
    teamSize: "Individual",
    prize: "1st: ₹4,000 | 2nd: ₹2,000",
    registrationFee: "₹20",
    coordinators: [
      { name: "Coordinator", phone: "+91 XXXXX XXXXX", role: "Lead Coordinator" }
    ]
  },
  {
    id: "ad-making",
    name: "Ad Making",
    icon: Video,
    category: "other",
    theme: "standard",
    eventType: "main",
    tagline: "Create. Captivate. Convert.",
    description: "Showcase your creative genius by crafting compelling advertisements. From concept to execution, let your imagination run wild.",
    rules: [
      "Team of 2-3 members",
      "Video duration: 60-90 seconds",
      "Theme announced on spot",
      "Must be created during event hours",
      "Original content only"
    ],
    timing: "March 15, 2026 | 9:00 AM - 3:00 PM",
    venue: "Media Lab, Block E",
    teamSize: "2-3 Members",
    prize: "1st: ₹3,000 | 2nd: ₹2,000 | 3rd: ₹1,000",
    registrationFee: "₹150",
    coordinators: [
      { name: "Coordinator", phone: "+91 XXXXX XXXXX", role: "Creative Director" }
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
    timing: "March 15, 2026 | 10:00 AM - 1:00 PM",
    venue: "Computer Lab 1, Block F",
    teamSize: "Individual",
    prize: "1st: ₹2,000 | 2nd: ₹1,000",
    registrationFee: "₹100",
    coordinators: [
      { name: "Coordinator", phone: "+91 XXXXX XXXXX", role: "Technical Coordinator" }
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
    description: "A cybersecurity-themed escape challenge. Decode, decrypt, and defeat the system before time runs out.",
    rules: [
      "Team of 2-3 members",
      "Time limit: 60 minutes",
      "Hints available with time penalty",
      "No external devices",
      "All puzzles must be solved in sequence"
    ],
    timing: "March 15, 2026 | Continuous slots",
    venue: "Escape Room, Block G",
    teamSize: "2-3 Members",
    prize: "1st: ₹3,000 | 2nd: ₹2,000 | 3rd: ₹1,000",
    registrationFee: "₹150",
    coordinators: [
      { name: "Coordinator", phone: "+91 XXXXX XXXXX", role: "Game Master" }
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
    timing: "March 16, 2026 | 10:00 AM - 4:00 PM",
    venue: "Robotics Arena, Block H",
    teamSize: "3-4 Members",
    prize: "To be announced",
    registrationFee: "₹100",
    coordinators: [
      { name: "Coordinator", phone: "+91 XXXXX XXXXX", role: "Technical Head" },
      { name: "Coordinator", phone: "+91 XXXXX XXXXX", role: "Arena Manager" }
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
    timing: "March 15, 2026 | 3:00 PM - 5:00 PM",
    venue: "Computer Lab 2, Block F",
    teamSize: "2 Members",
    prize: "1st: ₹3,000 | 2nd: ₹1,000",
    registrationFee: "₹300",
    coordinators: [
      { name: "Coordinator", phone: "+91 XXXXX XXXXX", role: "Coordinator" }
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
    description: "The 'Star of Envi' is a solo competition where participants showcase their creativity and skills across three challenging rounds. The goal is to outperform others and win the title of the ultimate star.",
    rules: [
      "The event will take place from 9:00 AM to 1:00 PM",
      "Only individual participation is allowed",
      "Registration is open for all college students (UG and PG)",
      "College ID cards/ID proof are compulsory",
      "Individuals will be asked to perform a specific task in each round",
      "The contest will include three rounds, with specific tasks assigned in each round",
      "Eliminations will take place at the end of each round",
      "Each round will have a strict time limit for task completion",
      "The decision of judges will be final",
      "Personal laptop is not necessary",
      "Participants must report to the venue at least 30 minutes before the starting time",
      "Any more details will be provided before the event",
      "Any kind of malpractice would be considered as disqualified"
    ],
    timing: "March 16, 2026 | 2:00 PM - 6:00 PM",
    venue: "Main Stage, Central Plaza",
    teamSize: "Individual",
    prize: "1st: ₹10,000",
    registrationFee: "₹250",
    coordinators: [
      { name: "Coordinator", phone: "+91 XXXXX XXXXX", role: "Event Head" }
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
    timing: "Online | Feb 1-3, 2026",
    venue: "Online Submission",
    teamSize: "Individual",
    prize: "₹7,000",
    registrationFee: "Free",
    coordinators: [
      { name: "Coordinator", phone: "+91 XXXXX XXXXX", role: "Design Head" }
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
    timing: "March 15-16, 2026 | 10:00 AM - 8:00 PM",
    venue: "Gaming Zone, Block J",
    teamSize: "Individual",
    prize: "1st: ₹2,000 | 2nd: ₹1,000",
    registrationFee: "₹50",
    coordinators: [
      { name: "Coordinator", phone: "+91 XXXXX XXXXX", role: "Tournament Manager" }
    ]
  }
];

export const getFeaturedEvents = () => events.filter(e => e.category === "featured");
export const getOtherEvents = () => events.filter(e => e.category === "other");
export const getMainEvents = () => events.filter(e => e.eventType === "main");
export const getOnlineEvents = () => events.filter(e => e.eventType === "online");
export const getEventById = (id: string) => events.find(e => e.id === id);
