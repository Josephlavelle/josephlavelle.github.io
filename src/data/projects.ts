export interface Project {
  id: string;
  title: string;
  period: string;
  description: string;
  icon: string;
}

export const projects: Project[] = [
  {
    id: 'task-management',
    title: 'TASK MANAGEMENT SYSTEM',
    period: 'September 2020 - August 2021',
    description: 'I worked on a team of 3 to design a complex task management system allowing supervisors to assign tasks to different groups, and for those tasks to be received, commented and completed by operations. As the project progressed, more systems were tied in to automatically generate tasks yielding a mostly autonomous system that streamlined field operations and is projected to save up to $3M a year annually in reduced operation expenses.',
    icon: 'noun-clipboard-5339570.png',
  },
  {
    id: 'well-analysis',
    title: 'AUTOMATED WELL ANALYSIS',
    period: 'September 2020 - August 2021',
    description: 'While at Cenovus, I developed a system to pull in and analyze data from a thousands of well sites across western Canada. The system then processes this data, and if concerning criteria are detected, the engineer in charge of that well is notified. This increased production and decreased downtime leading to an estimated $1-2M in additional yearly production.',
    icon: 'noun-graph-2621603.png',
  },
  {
    id: 'robot',
    title: 'ELEMENTARY SCHOOL ROBOT',
    period: 'September 2021 - Current',
    description: 'Working under Dr. Alice Wang, myself and 3 other students are working to design and prototype a programmable educational robot for both the Chinese and North American market. This will be used by elementary schools to teach students basic programming concepts alongside literary, mathematical, and emotional skills. The design has been completed and the team is now working to complete a functional prototype.',
    icon: 'noun-rocket-655699.png',
  },
];
