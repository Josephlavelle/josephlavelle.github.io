export interface Experience {
  id: string;
  company: string;
  role: string;
  period: string;
  description: string;
  icon: string;
}

export const experiences: Experience[] = [
  {
    id: 'quantexa',
    company: 'Quantexa',
    role: 'DATA ENGINEER',
    period: 'September 2022 - Current',
    description: 'Quantexa leverages client data alongside public data sources to generate a social graph of real world entities and detect financial crime. As a data engineer on the delivery team, I developed ETL pipelines client data, developed document models, tuned entity parsing, and developed new UI elements in the Quantexa Platform to ensure that criminal activity is quickly detected and investigated. Additionally I have written and deployed generic Scala scoring frameworks to reduce deployment time of Quantexa\'s scoring platform.',
    icon: 'quantexa.jpeg',
  },
  {
    id: 'cenovus',
    company: 'Cenovus Energy',
    role: 'DATA ANALYTICS INTERN',
    period: 'July 2020 - August 2021',
    description: 'At Cenovus I worked in an intrapreneurial group called "Efficiency and Technology" where we were enlisted by other Cenovus business units to help them solve data related problems and innovate data driven solutions. For me personally, this ranged from projects as simple as automating the collection of data and generating a report, to complex machine learning and analytical projects advising the field team based off live data streams.',
    icon: 'noun-graph-5315316.png',
  },
  {
    id: 'tearoom',
    company: 'The Tea Room',
    role: 'BUSINESS MANAGER',
    period: 'March 2021 - Current',
    description: 'I oversaw all of the financial planning and operations month to month, trained and led staff, and kept a close eye on operations to try and identify how we could be more efficient! It was an incredibly rewarding experience for me. I got to work with great people everyday while doing something I can feel great about!',
    icon: 'noun-mug-1176399.png',
  },
  {
    id: 'ellisdon',
    company: 'Ellis Don',
    role: 'STUDENT COORDINATOR',
    period: 'May 2019/18 - August 2019/18',
    description: 'As a summer student I worked under project managers to assist with day to day duties, and coordinate multiple sub-contractors on multidisciplinary jobs. I was able to coordinate nearly a dozen projects over my term, with typically a minimum of 3 separate contractors who had to be scheduled in sequential orders',
    icon: 'noun-construction-worker-1200448.png',
  },
];
