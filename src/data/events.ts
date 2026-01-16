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
  DoorOpen, 
  Star, 
  Gamepad2,
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
  tagline: string;
  description: string;
  rules: string[];
  timing: string;
  venue: string;
  teamSize: string;
  prize: string;
  coordinators: EventCoordinator[];
}

export const events: EventData[] = [
  {
    id: "hackathon",
    name: "Hackathon",
    icon: Code,
    category: "featured",
    theme: "circuit",
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
    prize: "₹50,000",
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
    prize: "₹30,000",
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
    prize: "₹20,000",
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
    prize: "₹10,000",
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
    prize: "₹15,000",
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
    prize: "₹12,000",
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
    prize: "₹15,000",
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
    tagline: "Build. Program. Race.",
    description: "Build and race your robot through challenging obstacle courses. Speed and precision will determine the champion.",
    rules: [
      "Team of 3-4 members",
      "Robot must be self-built",
      "Maximum dimensions: 30x30x30 cm",
      "Wired or wireless control allowed",
      "Multiple rounds with increasing difficulty"
    ],
    timing: "March 16, 2026 | 10:00 AM - 4:00 PM",
    venue: "Robotics Arena, Block H",
    teamSize: "3-4 Members",
    prize: "₹25,000",
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
    prize: "₹10,000",
    coordinators: [
      { name: "Divya Sharma", phone: "+91 98765 43222", role: "Coordinator" }
    ]
  },
  {
    id: "escape-room",
    name: "Escape the Room",
    icon: DoorOpen,
    category: "other",
    theme: "standard",
    tagline: "Think Fast. Escape Faster.",
    description: "Classic escape room experience with tech-themed puzzles. Work together to find clues and escape before time expires.",
    rules: [
      "Team of 3-4 members",
      "Time limit: 45 minutes",
      "Hints cost time",
      "No phones or smart devices",
      "Teamwork is essential"
    ],
    timing: "March 15-16, 2026 | Continuous slots",
    venue: "Room 101, Block I",
    teamSize: "3-4 Members",
    prize: "₹12,000",
    coordinators: [
      { name: "Nikhil Agarwal", phone: "+91 98765 43223", role: "Game Master" }
    ]
  },
  {
    id: "star-envi",
    name: "Star Envi",
    icon: Star,
    category: "other",
    theme: "standard",
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
    prize: "₹20,000",
    coordinators: [
      { name: "Riya Kapoor", phone: "+91 98765 43224", role: "Event Head" }
    ]
  },
  {
    id: "e-football",
    name: "E-Football",
    icon: Gamepad2,
    category: "other",
    theme: "standard",
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
    prize: "₹8,000",
    coordinators: [
      { name: "Aakash Mehta", phone: "+91 98765 43225", role: "Tournament Manager" }
    ]
  }
];

export const getFeaturedEvents = () => events.filter(e => e.category === "featured");
export const getOtherEvents = () => events.filter(e => e.category === "other");
export const getEventById = (id: string) => events.find(e => e.id === id);
