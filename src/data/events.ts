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
    description: "24 hours of intense coding. Build solutions that could change the world. Push your limits and create something extraordinary in this ultimate test of skill and endurance.",
    rules: [
      "Team of 2-4 members required",
      "All code must be written during the event",
      "Use of open-source libraries is permitted",
      "Projects will be judged on innovation, functionality, and presentation",
      "Plagiarism will result in immediate disqualification"
    ],
    timing: "March 15-16, 2026 | 24 Hours",
    venue: "Main Auditorium, Block A",
    teamSize: "2-4 Members",
    prize: "1st: ₹20,000 | 2nd: ₹10,000",
    registrationFee: "₹250 per head",
    coordinators: [
      { name: "Rahul Sharma", phone: "+91 98765 43210", role: "Lead Coordinator" },
      { name: "Priya Patel", phone: "+91 98765 43211", role: "Technical Head" }
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
      { name: "Amit Kumar", phone: "+91 98765 43212", role: "Lead Coordinator" },
      { name: "Sneha Reddy", phone: "+91 98765 43213", role: "Event Manager" }
    ]
  },
  {
    id: "techquiz",
    name: "Tech Quiz",
    icon: Brain,
    category: "featured",
    theme: "standard",
    eventType: "main",
    tagline: "Knowledge is Power",
    description: "Test your technical knowledge against the brightest minds. From algorithms to pop culture tech, only the worthy shall prevail in this battle of intellect.",
    rules: [
      "Team of 2 members required",
      "Multiple rounds: Written, Buzzer, and Rapid Fire",
      "No electronic devices allowed",
      "Judge's decision is final",
      "Time limits strictly enforced"
    ],
    timing: "March 15, 2026 | 2:00 PM - 5:00 PM",
    venue: "Quiz Hall, Block C",
    teamSize: "2 Members",
    prize: "1st: ₹3,000 | 2nd: ₹2,000 | 3rd: ₹1,000",
    registrationFee: "₹20",
    coordinators: [
      { name: "Vikram Singh", phone: "+91 98765 43214", role: "Quiz Master" },
      { name: "Anjali Gupta", phone: "+91 98765 43215", role: "Coordinator" }
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
      { name: "Kavitha Nair", phone: "+91 98765 43216", role: "Lead Coordinator" }
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
      { name: "Arjun Menon", phone: "+91 98765 43217", role: "Creative Director" }
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
      { name: "Rohan Das", phone: "+91 98765 43218", role: "Technical Coordinator" }
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
      { name: "Karthik Iyer", phone: "+91 98765 43219", role: "Game Master" }
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
      { name: "Sanjay Verma", phone: "+91 98765 43220", role: "Technical Head" },
      { name: "Meera Joshi", phone: "+91 98765 43221", role: "Arena Manager" }
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
    description: "Find and fix bugs in cursed code before the timer burns out. The witch's code is riddled with errors—can you save the day?",
    rules: [
      "Individual participation",
      "Time limit: 45 minutes",
      "Multiple code snippets with hidden bugs",
      "Points for each bug fixed",
      "Negative marking for incorrect fixes"
    ],
    timing: "March 15, 2026 | 3:00 PM - 5:00 PM",
    venue: "Computer Lab 2, Block F",
    teamSize: "Individual",
    prize: "1st: ₹3,000 | 2nd: ₹1,000",
    registrationFee: "₹300",
    coordinators: [
      { name: "Divya Sharma", phone: "+91 98765 43222", role: "Coordinator" }
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
    description: "The ultimate talent showcase. Display your skills and creativity across multiple rounds to be crowned the Star of ENVI 8.",
    rules: [
      "Individual participation",
      "Multiple rounds: Talent, Q&A, Task",
      "Performance time: 3-5 minutes",
      "Props allowed",
      "Audience appeal matters"
    ],
    timing: "March 16, 2026 | 2:00 PM - 6:00 PM",
    venue: "Main Stage, Central Plaza",
    teamSize: "Individual",
    prize: "1st: ₹10,000",
    registrationFee: "₹250",
    coordinators: [
      { name: "Riya Kapoor", phone: "+91 98765 43224", role: "Event Head" }
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
    description: "Unleash your creativity in this digital design competition. Create stunning posters that capture attention and convey powerful messages.",
    rules: [
      "Individual participation",
      "Theme will be announced online",
      "Submission deadline: 48 hours from announcement",
      "Digital format only (PNG/JPG)",
      "Original designs only, no plagiarism"
    ],
    timing: "Online | Feb 1-3, 2026",
    venue: "Online Submission",
    teamSize: "Individual",
    prize: "₹7,000",
    registrationFee: "Free",
    coordinators: [
      { name: "Priya Menon", phone: "+91 98765 43226", role: "Design Head" }
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
    description: "Compete in EA FC (FIFA) and prove you're the best virtual footballer. Knockout format leads to the ultimate championship.",
    rules: [
      "Individual participation",
      "Game: EA FC 24",
      "Match duration: 6 minutes",
      "Knockout format",
      "Controllers provided"
    ],
    timing: "March 15-16, 2026 | 10:00 AM - 8:00 PM",
    venue: "Gaming Zone, Block J",
    teamSize: "Individual",
    prize: "1st: ₹2,000 | 2nd: ₹1,000",
    registrationFee: "₹50",
    coordinators: [
      { name: "Aakash Mehta", phone: "+91 98765 43225", role: "Tournament Manager" }
    ]
  }
];

export const getFeaturedEvents = () => events.filter(e => e.category === "featured");
export const getOtherEvents = () => events.filter(e => e.category === "other");
export const getMainEvents = () => events.filter(e => e.eventType === "main");
export const getOnlineEvents = () => events.filter(e => e.eventType === "online");
export const getEventById = (id: string) => events.find(e => e.id === id);
