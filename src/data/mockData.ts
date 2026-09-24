export interface NoticeItem {
  id: string;
  category: 'Examination' | 'Academic' | 'Results' | 'Administration' | 'General';
  title: string;
  date: string;
  urgent?: boolean;
  description: string;
  refNo: string;
  content: string[];
  attachments?: { name: string; size: string }[];
}

export interface SemesterResult {
  semester: string;
  title: string;
  programme: string;
  scheme: string;
  status: 'Published' | 'Available' | 'Revaluation Open' | 'Pending';
  examMonth: string;
  publishDate: string;
  revaluationLastDate?: string;
  sampleSummary?: {
    registered: number;
    passed: number;
    passPercentage: string;
  };
}

export interface CourseGrade {
  code: string;
  name: string;
  credits: number;
  grade: 'S' | 'A+' | 'A' | 'B+' | 'B' | 'C' | 'P' | 'F';
  gradePoints: number;
  status: 'Pass' | 'Fail';
}

export interface TimetableEntry {
  date: string;
  day: string;
  time: string;
  slot: string;
  courseCode: string;
  courseName: string;
  semester: string;
  branch: string;
  scheme: string;
}

export interface College {
  code: string;
  name: string;
  district: string;
  type: 'Government' | 'Govt. Aided' | 'Self-Financing';
  website: string;
}

export const NOTICES_DATA: NoticeItem[] = [
  {
    id: 'not-01',
    category: 'Results',
    title: 'Publication of Results: B.Tech S4 (R,S) Examination May/June 2026',
    date: 'Sep 21, 2026',
    urgent: true,
    refNo: 'KTU/EX-I#1/2026/RESULT-BTECH-S4',
    description: 'Results of B.Tech S4 (Regular and Supplementary) Examination May/June 2026 have been published on the student portal.',
    content: [
      'It is hereby notified that the results of B.Tech S4 (Regular and Supplementary) Examinations May/June 2026 are published on the university portal.',
      'Candidates who desire to apply for revaluation of answer scripts or copy of answer scripts are requested to submit applications through the respective colleges on or before October 05, 2026.',
      'Late applications will strictly not be entertained under any circumstance. The fee for revaluation is ₹600/- per paper and scrutiny fee is ₹500/- per paper.'
    ],
    attachments: [
      { name: 'Result_Notification_BTech_S4_2026.pdf', size: '245 KB' },
      { name: 'College_Wise_Pass_Statistics_S4.pdf', size: '412 KB' }
    ]
  },
  {
    id: 'not-02',
    category: 'Examination',
    title: 'Revised Timetable for B.Tech S5 & S7 Regular Examinations November/December 2026',
    date: 'Sep 19, 2026',
    urgent: true,
    refNo: 'KTU/EX-II#4/2026/TT-REVISED-ODD',
    description: 'Detailed time table for the upcoming Odd Semester (S5 & S7) B.Tech Regular & Supplementary Examinations 2019 & 2024 schemes.',
    content: [
      'The revised timetable for B.Tech S5 and S7 Regular and Supplementary Examinations scheduled for November/December 2026 has been published.',
      'Colleges and students are requested to take note of the rescheduled examination slots for Slot C and Slot D due to administrative reasons.',
      'Detailed hall tickets will be enabled for download 7 days prior to the first examination date.'
    ],
    attachments: [
      { name: 'Revised_Timetable_BTech_S5_S7_2026.pdf', size: '520 KB' }
    ]
  },
  {
    id: 'not-03',
    category: 'Academic',
    title: 'Academic Calendar for B.Tech & B.Arch Odd Semester (2026-2027) - Commencement of Classes',
    date: 'Sep 15, 2026',
    refNo: 'KTU/ACAD-I/2026/CAL-ODD-01',
    description: 'Approved academic schedule including instructional days, internal evaluation milestones, and end-semester examination windows.',
    content: [
      'The Syndicate of the University has approved the Academic Calendar for B.Tech and B.Arch Odd Semesters (S3, S5, S7) for the academic year 2026-27.',
      'Total instructional days: 75 days. First Internal Assessment will be conducted between October 12 and October 18, 2026.',
      'Last date for uploading attendance and internal marks to the portal is November 20, 2026.'
    ],
    attachments: [
      { name: 'KTU_Academic_Calendar_Odd_2026_27.pdf', size: '610 KB' }
    ]
  },
  {
    id: 'not-04',
    category: 'Examination',
    title: 'Exam Registration Window Open: M.Tech & MCA S2 Supplementary Examinations',
    date: 'Sep 12, 2026',
    refNo: 'KTU/EX-III/2026/REG-MTECH-MCA',
    description: 'Students appearing for M.Tech/MCA S2 supplementary papers can register through the portal before the deadline.',
    content: [
      'Examination registration for M.Tech and MCA S2 Supplementary Examinations (2020 & 2022 regulations) is now open on the student portal.',
      'Last date for student submission: September 28, 2026.',
      'Last date for college approval and fee remittance: September 30, 2026.'
    ],
    attachments: [
      { name: 'Exam_Registration_Guidelines_PG.pdf', size: '180 KB' }
    ]
  },
  {
    id: 'not-05',
    category: 'Academic',
    title: 'Curriculum 2024 Scheme: Guidelines on Open Electives and Interdisciplinary Minors',
    date: 'Sep 08, 2026',
    refNo: 'KTU/ACAD-II/2026/CURR2024-MINORS',
    description: 'Clarifications on registration criteria for B.Tech Minor and Honors programs under the revised 2024 autonomous and affiliated syllabus.',
    content: [
      'This notification details the minimum CGPA and credit prerequisites for students intending to pursue B.Tech Honors and B.Tech Minor under the 2024 Scheme.',
      'Students with CGPA 8.0 and above with zero backlogs up to Semester 2 are eligible for Honors streams.',
      'List of approved basket courses for interdisciplinary minors is appended.'
    ],
    attachments: [
      { name: 'Curriculum_2024_Minor_Honors_Rules.pdf', size: '890 KB' }
    ]
  },
  {
    id: 'not-06',
    category: 'Administration',
    title: 'KTU Inter-Collegiate Tech Conclave & Industry Innovation Summit 2026: Call for Projects',
    date: 'Sep 02, 2026',
    refNo: 'KTU/INNOV/2026/SUMMIT-CALL',
    description: 'Student engineering teams across all affiliated colleges are invited to submit prototype entries for university seed grants.',
    content: [
      'The Industry-Academia Innovation Cell of KTU announces the Annual Tech Conclave 2026 to be hosted at Thiruvananthapuram.',
      'Selected engineering student projects in AI, Green Energy, Marine Tech, and Robotics will be awarded innovation grants up to ₹2,00,000/-.',
      'Preliminary project abstracts must be endorsed by the college principal and submitted by October 15, 2026.'
    ],
    attachments: [
      { name: 'Tech_Conclave_Brochure_2026.pdf', size: '1.2 MB' }
    ]
  },
  {
    id: 'not-07',
    category: 'Results',
    title: 'B.Arch S6 & S8 Thesis & Viva-Voce Examination Results Published',
    date: 'Aug 28, 2026',
    refNo: 'KTU/EX-I/2026/BARCH-S8',
    description: 'Outcomes of B.Arch S8 Architectural Design Thesis and Viva-Voce evaluations have been communicated to institutional centers.',
    content: [
      'The comprehensive evaluation scores for B.Arch Semester 8 final thesis and Semester 6 studio projects have been consolidated and published.',
      'Provisional degree certificates for qualifying final year candidates will be dispatched to affiliated architecture colleges by September 30, 2026.'
    ]
  },
  {
    id: 'not-08',
    category: 'General',
    title: 'Student Grievance Redressal Portal 2.0 Maintenance & Enhancement Schedule',
    date: 'Aug 22, 2026',
    refNo: 'KTU/EGOV/2026/PORTAL-UPDATE',
    description: 'Scheduled maintenance for the university portal server infrastructure on Saturday night.',
    content: [
      'The electronic services portal will undergo routine cloud maintenance on Saturday from 11:00 PM to Sunday 04:00 AM.',
      'Online fee transactions, revaluation tracking, and grade certificate generation will be momentarily unavailable during this period.'
    ]
  }
];

export const SEMESTER_RESULTS: SemesterResult[] = [
  {
    semester: 'S8',
    title: 'B.Tech S8 Regular & Supplementary (2019 Scheme)',
    programme: 'B.Tech',
    scheme: '2019',
    status: 'Published',
    examMonth: 'May 2026',
    publishDate: 'July 14, 2026',
    sampleSummary: { registered: 28450, passed: 23140, passPercentage: '81.33%' }
  },
  {
    semester: 'S7',
    title: 'B.Tech S7 Supplementary Examination (2019 Scheme)',
    programme: 'B.Tech',
    scheme: '2019',
    status: 'Published',
    examMonth: 'June 2026',
    publishDate: 'August 04, 2026',
    sampleSummary: { registered: 7600, passed: 4890, passPercentage: '64.34%' }
  },
  {
    semester: 'S6',
    title: 'B.Tech S6 Regular & Supplementary (2019 Scheme)',
    programme: 'B.Tech',
    scheme: '2019',
    status: 'Published',
    examMonth: 'May 2026',
    publishDate: 'July 28, 2026',
    sampleSummary: { registered: 29800, passed: 21750, passPercentage: '72.98%' }
  },
  {
    semester: 'S5',
    title: 'B.Tech S5 Supplementary Examination',
    programme: 'B.Tech',
    scheme: '2019',
    status: 'Published',
    examMonth: 'June 2026',
    publishDate: 'August 18, 2026',
    sampleSummary: { registered: 8400, passed: 5620, passPercentage: '66.90%' }
  },
  {
    semester: 'S4',
    title: 'B.Tech S4 Regular & Supplementary (2019 & 2024 Scheme)',
    programme: 'B.Tech',
    scheme: '2019/2024',
    status: 'Revaluation Open',
    examMonth: 'June 2026',
    publishDate: 'September 21, 2026',
    revaluationLastDate: 'October 05, 2026',
    sampleSummary: { registered: 31200, passed: 23400, passPercentage: '75.00%' }
  },
  {
    semester: 'S3',
    title: 'B.Tech S3 Supplementary Examination',
    programme: 'B.Tech',
    scheme: '2019',
    status: 'Available',
    examMonth: 'April 2026',
    publishDate: 'June 10, 2026',
    sampleSummary: { registered: 9100, passed: 6320, passPercentage: '69.45%' }
  },
  {
    semester: 'S2',
    title: 'B.Tech S2 Regular Examination (2024 Scheme)',
    programme: 'B.Tech',
    scheme: '2024',
    status: 'Available',
    examMonth: 'July 2026',
    publishDate: 'August 30, 2026',
    sampleSummary: { registered: 33500, passed: 26130, passPercentage: '78.00%' }
  },
  {
    semester: 'S1',
    title: 'B.Tech S1 Supplementary Examination',
    programme: 'B.Tech',
    scheme: '2024',
    status: 'Available',
    examMonth: 'July 2026',
    publishDate: 'August 30, 2026',
    sampleSummary: { registered: 6200, passed: 4460, passPercentage: '71.93%' }
  }
];

export const DEMO_STUDENT = {
  name: 'Arjun Menon',
  registerNumber: 'TVE22CS045',
  programme: 'B.Tech in Computer Science and Engineering',
  college: 'College of Engineering Trivandrum (CET)',
  collegeCode: 'TVE',
  currentSemester: 'S5 (Semester 5)',
  scheme: '2019 Scheme',
  cgpa: '8.46',
  latestSgpa: '8.54',
  creditsEarned: 88,
  totalCredits: 160,
  activityPoints: 65,
  activityPointsRequired: 100,
  attendancePercentage: 88.5,
  registeredExamsUpcoming: 6,
  unreadNoticesCount: 3,
  nextMilestone: {
    title: 'Series Test 1 (Internal Assessment)',
    date: 'Oct 14, 2026',
    daysLeft: 21
  }
};

export const SAMPLE_GRADES_S4: CourseGrade[] = [
  { code: 'CST 202', name: 'Computer Organisation and Architecture', credits: 4, grade: 'A+', gradePoints: 9.0, status: 'Pass' },
  { code: 'CST 204', name: 'Database Management Systems', credits: 4, grade: 'S', gradePoints: 10.0, status: 'Pass' },
  { code: 'CST 206', name: 'Operating Systems', credits: 4, grade: 'A', gradePoints: 8.5, status: 'Pass' },
  { code: 'MAT 206', name: 'Graph Theory', credits: 4, grade: 'B+', gradePoints: 8.0, status: 'Pass' },
  { code: 'EST 200', name: 'Design and Engineering', credits: 2, grade: 'A', gradePoints: 8.5, status: 'Pass' },
  { code: 'CSL 202', name: 'Digital Lab', credits: 2, grade: 'S', gradePoints: 10.0, status: 'Pass' },
  { code: 'CSL 204', name: 'Operating Systems Lab', credits: 2, grade: 'A+', gradePoints: 9.0, status: 'Pass' }
];

export const SAMPLE_TIMETABLE: TimetableEntry[] = [
  { date: 'Nov 24, 2026', day: 'Tuesday', time: '09:30 AM - 12:30 PM', slot: 'Slot A', courseCode: 'CST 301', courseName: 'Formal Languages and Automata Theory', semester: 'S5', branch: 'Computer Science', scheme: '2019' },
  { date: 'Nov 27, 2026', day: 'Friday', time: '09:30 AM - 12:30 PM', slot: 'Slot B', courseCode: 'CST 303', courseName: 'Computer Networks', semester: 'S5', branch: 'Computer Science', scheme: '2019' },
  { date: 'Dec 01, 2026', day: 'Tuesday', time: '09:30 AM - 12:30 PM', slot: 'Slot C', courseCode: 'CST 305', courseName: 'System Software', semester: 'S5', branch: 'Computer Science', scheme: '2019' },
  { date: 'Dec 04, 2026', day: 'Friday', time: '09:30 AM - 12:30 PM', slot: 'Slot D', courseCode: 'CST 307', courseName: 'Microprocessors and Microcontrollers', semester: 'S5', branch: 'Computer Science', scheme: '2019' },
  { date: 'Dec 08, 2026', day: 'Tuesday', time: '09:30 AM - 12:30 PM', slot: 'Slot E', courseCode: 'CST 309', courseName: 'Management of Software Systems', semester: 'S5', branch: 'Computer Science', scheme: '2019' },
  { date: 'Dec 11, 2026', day: 'Friday', time: '09:30 AM - 12:30 PM', slot: 'Slot F', courseCode: 'MCN 301', courseName: 'Disaster Management', semester: 'S5', branch: 'Common Elective', scheme: '2019' }
];

export const ACADEMIC_CALENDAR_EVENTS = [
  { date: 'Sep 01, 2026', event: 'Commencement of Odd Semester Classes (S3, S5, S7)', type: 'Academic' },
  { date: 'Sep 25, 2026', event: 'Last date for Course Add/Drop & Elective Finalisation', type: 'Administrative' },
  { date: 'Oct 12 - 17, 2026', event: 'First Series Test (Internal Assessment 1)', type: 'Examination' },
  { date: 'Oct 26, 2026', event: 'Publishing of Attendance Status & First Internal Marks', type: 'Academic' },
  { date: 'Nov 09 - 14, 2026', event: 'Second Series Test (Internal Assessment 2)', type: 'Examination' },
  { date: 'Nov 20, 2026', event: 'Class Work Ends & Final Internal Evaluation Upload', type: 'Academic' },
  { date: 'Nov 24, 2026', event: 'Commencement of End Semester Theory Examinations', type: 'Examination' },
  { date: 'Dec 18, 2026', event: 'Commencement of Practical & Project Evaluations', type: 'Examination' },
  { date: 'Jan 04, 2027', event: 'Commencement of Even Semester Classes (S4, S6, S8)', type: 'Academic' }
];

export const REGULATIONS_LIST = [
  {
    title: 'B.Tech Curriculum & Academic Regulations 2024 Scheme',
    subtitle: 'Autonomous & Affiliated Framework',
    category: 'B.Tech',
    code: 'REG-2024-UG',
    pages: '64 pages',
    size: '1.8 MB',
    highlights: ['Multi-entry multi-exit options', 'Experiential credits system', 'AI & Digital literacy core']
  },
  {
    title: 'B.Tech Academic Regulations 2019 Scheme (Amended 2023)',
    subtitle: 'Standard 4-Year Undergraduate Program',
    category: 'B.Tech',
    code: 'REG-2019-UG-R3',
    pages: '52 pages',
    size: '1.4 MB',
    highlights: ['Credit requirements: 160 credits', 'Honors & Minor pathway criteria', 'Break of study norms']
  },
  {
    title: 'M.Tech Degree Regulations & Credit Framework 2022',
    subtitle: 'Postgraduate Engineering Guidelines',
    category: 'M.Tech',
    code: 'REG-2022-PG',
    pages: '38 pages',
    size: '950 KB',
    highlights: ['Research methodology requirement', 'Thesis evaluation guidelines', '68 total credits']
  },
  {
    title: 'Rules & Guidelines for Student Activity Points (SAP)',
    subtitle: 'Mandatory Non-Academic Points System',
    category: 'General',
    code: 'SAP-GUIDELINES-V2',
    pages: '16 pages',
    size: '420 KB',
    highlights: ['NSS, NCC, Tech Fests, Sports points conversion', 'Minimum 100 points for regular degree']
  },
  {
    title: 'University Examination Ordinances & Code of Conduct',
    subtitle: 'Anti-Malpractice Code & Hall Ticket Rules',
    category: 'Examinations',
    code: 'EXAM-ORD-2025',
    pages: '28 pages',
    size: '620 KB',
    highlights: ['Invigilation rules', 'Revaluation & Scrutiny appeal procedure', 'Disciplinary actions']
  }
];

export const SYLLABUS_BRANCHES = [
  {
    id: 'cs',
    name: 'Computer Science and Engineering',
    code: 'CSE',
    semesters: ['Semester 1 & 2', 'Semester 3', 'Semester 4', 'Semester 5', 'Semester 6', 'Semester 7', 'Semester 8'],
    description: 'Covers Data Structures, Algorithms, OS, DBMS, Networks, AI, Cloud Computing, and Cyber Security.'
  },
  {
    id: 'ec',
    name: 'Electronics and Communication Engineering',
    code: 'ECE',
    semesters: ['Semester 1 & 2', 'Semester 3', 'Semester 4', 'Semester 5', 'Semester 6', 'Semester 7', 'Semester 8'],
    description: 'Covers Analog & Digital Electronics, Signals & Systems, Microcontrollers, VLSI, and Wireless Comm.'
  },
  {
    id: 'me',
    name: 'Mechanical Engineering',
    code: 'ME',
    semesters: ['Semester 1 & 2', 'Semester 3', 'Semester 4', 'Semester 5', 'Semester 6', 'Semester 7', 'Semester 8'],
    description: 'Covers Thermodynamics, Fluid Mechanics, Kinematics, Manufacturing Processes, CAD/CAM, and Robotics.'
  },
  {
    id: 'ce',
    name: 'Civil Engineering',
    code: 'CE',
    semesters: ['Semester 1 & 2', 'Semester 3', 'Semester 4', 'Semester 5', 'Semester 6', 'Semester 7', 'Semester 8'],
    description: 'Covers Structural Analysis, Geotechnical Engg, Transportation, Environmental Systems, and Surveying.'
  },
  {
    id: 'ee',
    name: 'Electrical and Electronics Engineering',
    code: 'EEE',
    semesters: ['Semester 1 & 2', 'Semester 3', 'Semester 4', 'Semester 5', 'Semester 6', 'Semester 7', 'Semester 8'],
    description: 'Covers Circuit Theory, Electrical Machines, Power Systems, Control Systems, and Renewable Energy.'
  },
  {
    id: 'ad',
    name: 'Artificial Intelligence and Data Science',
    code: 'AI&DS',
    semesters: ['Semester 1 & 2', 'Semester 3', 'Semester 4', 'Semester 5', 'Semester 6', 'Semester 7', 'Semester 8'],
    description: 'Covers Statistical Foundations, Machine Learning, Deep Learning, Big Data Analytics, and NLP.'
  }
];

export const AFFILIATED_COLLEGES: College[] = [
  { code: 'TVE', name: 'College of Engineering Trivandrum', district: 'Thiruvananthapuram', type: 'Government', website: 'https://cet.ac.in' },
  { code: 'TCR', name: 'Government Engineering College, Thrissur', district: 'Thrissur', type: 'Government', website: 'https://gectcr.ac.in' },
  { code: 'TKM', name: 'TKM College of Engineering', district: 'Kollam', type: 'Govt. Aided', website: 'https://tkmce.ac.in' },
  { code: 'MEC', name: 'Model Engineering College, Thrikkakara', district: 'Ernakulam', type: 'Government', website: 'https://mec.ac.in' },
  { code: 'TRV', name: 'Government Engineering College, Barton Hill', district: 'Thiruvananthapuram', type: 'Government', website: 'https://gecbh.ac.in' },
  { code: 'KTE', name: 'Rajiv Gandhi Institute of Technology (RIT)', district: 'Kottayam', type: 'Government', website: 'https://rit.ac.in' },
  { code: 'KKE', name: 'Government Engineering College, Kozhikode', district: 'Kozhikode', type: 'Government', website: 'https://geckkd.ac.in' },
  { code: 'MACE', name: 'Mar Athanasius College of Engineering', district: 'Ernakulam', type: 'Govt. Aided', website: 'https://mace.ac.in' },
  { code: 'NSS', name: 'NSS College of Engineering', district: 'Palakkad', type: 'Govt. Aided', website: 'https://nssce.ac.in' },
  { code: 'RET', name: 'Rajagiri School of Engineering & Technology', district: 'Ernakulam', type: 'Self-Financing', website: 'https://rajagiritech.ac.in' },
  { code: 'SCM', name: 'SCMS School of Engineering and Technology', district: 'Ernakulam', type: 'Self-Financing', website: 'https://scmsgroup.org' },
  { code: 'MUT', name: 'Muthoot Institute of Technology and Science', district: 'Ernakulam', type: 'Self-Financing', website: 'https://mgmits.ac.in' }
];

export const FREQUENT_DOWNLOADS = [
  { title: 'Application for Name/DOB Correction in Grade Card', format: 'PDF', size: '140 KB', category: 'Examination' },
  { title: 'Provisional Degree Certificate Application Form', format: 'PDF', size: '185 KB', category: 'Academic' },
  { title: 'Consolidated Grade Card (CGC) Request Form', format: 'PDF', size: '160 KB', category: 'Results' },
  { title: 'Revaluation & Answer Script Scrutiny Form', format: 'PDF', size: '120 KB', category: 'Examination' },
  { title: 'Student Activity Points (SAP) Endorsement Format', format: 'PDF', size: '210 KB', category: 'Academic' },
  { title: 'Transcript Application Form for Higher Studies (WES format)', format: 'PDF', size: '195 KB', category: 'Administration' },
  { title: 'Inter-College Transfer Application & NOC Template', format: 'PDF', size: '175 KB', category: 'General' },
  { title: 'Duplicate Degree Certificate & Police FIR Undertaking', format: 'PDF', size: '150 KB', category: 'Administration' }
];
