
import { Project, HistoryItem } from './types';

export const PROJECTS: Project[] = [
  {
    id: 'EB-9002',
    title: 'SMART E-BIKE OPTIMIZATION',
    category: 'AUTOMOTIVE',
    status: 'TESTING',
    date: 'FEB 2024',
    description: 'Comprehensive analysis of the previous model was conducted to identify structural and functional limitations. A redesigned system was developed in SOLIDWORKS to address these drawbacks, focusing on improved rigidity and performance. Structural validation was performed using ANSYS, with critical bending and stiffness parameters evaluated. Manufactured components were assembled and integrated with a Raspberry Pi–based control unit to enable system-level monitoring and control.',
    tag: 'PROTOTYPE',
    imageUrl: 'https://lh3.googleusercontent.com/aida-public/AB6AXuDJbWPjCBRdsZgX3uPvNMxFTqV63nx8azIJP-DBfMIA9l-1onTuDojbC7rbGY0eF2OJsM4niLco_BBUyfej0Q6QduieRLKETociJ5qERBWn38_Dh839imVBvxF2O3wG891gT74D1O2JO_qnaAKUCKJKD_AlWHFzqXpEUzdKbt8Nb4oVWeNB3a5GnBTX_BmBYvqR8_Sgumtj2h9M6hy5wOatV-6hMcb9mW3fDiQ8it98HrEzWrGKgen75sCW0AcOk-LOQ4eg4qtDuz8',
    figLabel: 'FIG 1.2A',
    link: 'https://rb.gy/z8nojt'
  },
  {
    id: 'AERO-X7',
    title: 'TOROIDAL PROPELLER R&D',
    category: 'AEROSPACE',
    status: 'ANALYSIS',
    date: 'APR 2024',
    description: 'Toroidal propellers were designed using Fusion 360, with six design iterations developed and analyzed in ANSYS. Configurations demonstrating optimal aerodynamic performance were further refined through multiple optimization cycles. Finalized designs were fabricated via 3D printing and experimentally tested, yielding successful performance outcomes.',
    tag: 'CLASSIFIED',
    imageUrl: 'https://lh3.googleusercontent.com/aida-public/AB6AXuCeNfZ1oOB4x_EQXb6jqg7BARvFZRaM4lf4VuRI5Ie_DAQnk5FqvpfNJ9mdNoc9YIHtcXYsLIlQjK1Xr0bONG1I8GupxSZD8dB3gZxLONY8v8Wah0eadil6R-iKYy5PK7auMzXsSbvjUAV7GrzORtJ1lesD6N1eaSulrbvWmxMt8UcGqB9aoJTA-xq9yVy0hxfaNGbmz0soIztPx8XYyaNyxTzAOFz9IfdD7jzcdUA2JYbJTxzkN25DQnbn_Vs3mYa6a2-paycXu8I',
    figLabel: 'SIM-X7',
    link: 'https://rb.gy/q7cn33'
  },
  {
    id: 'ROB-221',
    title: '2-DOF ROBOTIC MECHANISM',
    category: 'ROBOTICS',
    status: 'COMPLETE',
    date: 'APR 2025',
    description: 'Designed a horizontal spraying mechanism with a 2-DOF robotic arm, including conceptual layout development for stable, targeted spraying. Selected motors, gears, and linkages optimized for torque, speed, and weight constraints. Integrated real-time camera feedback for precise spray direction control and validated performance through field testing on coconut farms, refining arm geometry for optimal coverage.',
    tag: 'PATENT PENDING',
    imageUrl: 'https://lh3.googleusercontent.com/aida-public/AB6AXuCM7NTBjq-a1mC6dWgNu7kdRUXx7zfVA04Asd0zxu6xEX3RC6-9ca_Qu31Mgnx5Y0ylRS_Ph2jgih83k4mka7GUVyD_mtmg1QVPAd4Lq6MupeVexZXeFfoBYhuiM9qOncRdeIjuq2HY0PjXxGdBY_2QNOq7DrNi7cv7KH9Se7uzDv3CvG0KSPiE6ksDt4LGJjX7m4ocOEvxRbMhzSEAolX6dt9zbjNfgZKkF_qiBpSOarHG1q9arOcuIms6yLRfTQiaBMl79XJj1VU',
    figLabel: 'MK-IV'
  }
];

export const HISTORY: HistoryItem[] = [
  {
    id: 'h1',
    title: 'AERO360 - DRONIX TECHNOLOGY PVT LTD',
    role: 'DESIGN & R&D ENGINEER - Team Lead',
    period: '02/2025 - PRESENT',
    description: '• Responsibilities : Led a project team by planning and delegating tasks, managing timelines to ensure on-time delivery, and serving as the primary point of contact for client coordination and issue resolution.\n• Robotic Actuation: Engineered a 2-DOF horizontal spraying mechanism, optimizing motor torque-to-weight ratios for precision deployment.\n• Systems Integration: Integrated real-time optical feedback systems to achieve millimetric accuracy in dynamic environments.\n• Structural Optimization: Redesigned arm mounts and battery housings, reducing manufacturing costs while maintaining structural integrity.\n• Field Validation: Led iterative R&D testing cycles on 5L and 10L platforms to validate aerodynamic reach and spray geometry.\n• End-to-End Prototyping: Managed the full development lifecycle from conceptual sketching to final hardware assembly and flight-ready integration.',
    isActive: true
  },
  {
    id: 'h2',
    title: 'SKYX AEROSPACE',
    role: 'INTERN',
    period: '01/2024 - 05/2024',
    description: '• Propeller Aerodynamics: Designed and developed toroidal propellers using Fusion 360, focusing on noise reduction, thrust efficiency, and aerodynamic performance.\n Simulation & Optimization: Conducted multiple design iterations validated through ANSYS simulations, refining geometry based on thrust, efficiency, and flow behavior analysis. \n Rapid Prototyping & Testing: 3D printing and experimental testing of optimized propeller designs, correlating simulation results with real-world performance. \n Tethered Drone Systems: Contributed to the design and integration of tethered drone platforms, addressing continuous power delivery, payload stability, and operational endurance. \n Systems Integration: Assisted in integrating propulsion and tether subsystems with flight control architecture, ensuring stable flight characteristics under tethered conditions.'
  },
  {
    id: 'h3',
    title: 'PSG COLLEGE OF TECHNOLOGY',
    role: 'EDUCATION - CGPA 8.4/10',
    period: '2022 - 2024',
    description: 'Master of Engineering in Automotive Engineering.'
  },
  {
    id: 'h4',
    title: 'SRM Institute of Science And Technology',
    role: 'EDUCATION',
    period: '2017 - 2021',
    description: 'Bachelor of Technology - Automobile Engineering Specialized in Automotive Electronics'
  }
  
];
