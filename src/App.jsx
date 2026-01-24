import { useState, useEffect, useRef } from 'react'
import './App.css'

// Icon components for better maintainability
const CodeIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" width="24" height="24">
    <path strokeLinecap="round" strokeLinejoin="round" d="M17.25 6.75 22.5 12l-5.25 5.25m-10.5 0L1.5 12l5.25-5.25m7.5-3-4.5 16.5" />
  </svg>
)

const ServerIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" width="24" height="24">
    <path strokeLinecap="round" strokeLinejoin="round" d="M5.25 14.25h13.5m-13.5 0a3 3 0 0 1-3-3m3 3a3 3 0 1 0 0 6h13.5a3 3 0 1 0 0-6m-16.5-3a3 3 0 0 1 3-3h13.5a3 3 0 0 1 3 3m-19.5 0a4.5 4.5 0 0 1 .9-2.7L5.737 5.1a3.375 3.375 0 0 1 2.7-1.35h7.126c1.062 0 2.062.5 2.7 1.35l2.587 3.45a4.5 4.5 0 0 1 .9 2.7m0 0a3 3 0 0 1-3 3m0 3h.008v.008h-.008v-.008Zm0-6h.008v.008h-.008v-.008Zm-3 6h.008v.008h-.008v-.008Zm0-6h.008v.008h-.008v-.008Z" />
  </svg>
)

const DatabaseIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" width="24" height="24">
    <path strokeLinecap="round" strokeLinejoin="round" d="M20.25 6.375c0 2.278-3.694 4.125-8.25 4.125S3.75 8.653 3.75 6.375m16.5 0c0-2.278-3.694-4.125-8.25-4.125S3.75 4.097 3.75 6.375m16.5 0v11.25c0 2.278-3.694 4.125-8.25 4.125s-8.25-1.847-8.25-4.125V6.375m0 3.75c0 2.278 3.694 4.125 8.25 4.125s8.25-1.847 8.25-4.125" />
  </svg>
)

const ShieldIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" width="24" height="24">
    <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75 11.25 15 15 9.75m-3-7.036A11.959 11.959 0 0 1 3.598 6 11.99 11.99 0 0 0 3 9.749c0 5.592 3.824 10.29 9 11.623 5.176-1.332 9-6.03 9-11.622 0-1.31-.21-2.57-.598-3.75h-.152c-3.196 0-6.1-1.248-8.25-3.285Z" />
  </svg>
)

const CloudIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" width="24" height="24">
    <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 15a4.5 4.5 0 0 0 4.5 4.5H18a3.75 3.75 0 0 0 1.332-7.257 3 3 0 0 0-3.758-3.848 5.25 5.25 0 0 0-10.233 2.33A4.502 4.502 0 0 0 2.25 15Z" />
  </svg>
)

const ToolsIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" width="24" height="24">
    <path strokeLinecap="round" strokeLinejoin="round" d="M11.42 15.17 17.25 21A2.652 2.652 0 0 0 21 17.25l-5.877-5.877M11.42 15.17l2.496-3.03c.317-.384.74-.626 1.208-.766M11.42 15.17l-4.655 5.653a2.548 2.548 0 1 1-3.586-3.586l6.837-5.63m5.108-.233c.55-.164 1.163-.188 1.743-.14a4.5 4.5 0 0 0 4.486-6.336l-3.276 3.277a3.004 3.004 0 0 1-2.25-2.25l3.276-3.276a4.5 4.5 0 0 0-6.336 4.486c.091 1.076-.071 2.264-.904 2.95l-.102.085m-1.745 1.437L5.909 7.5H4.5L2.25 3.75l1.5-1.5L7.5 4.5v1.409l4.26 4.26m-1.745 1.437 1.745-1.437m6.615 8.206L15.75 15.75M4.867 19.125h.008v.008h-.008v-.008Z" />
  </svg>
)

const CheckIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2.5} stroke="currentColor" width="16" height="16">
    <path strokeLinecap="round" strokeLinejoin="round" d="m4.5 12.75 6 6 9-13.5" />
  </svg>
)

const GitHubIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 24 24" width="24" height="24">
    <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
  </svg>
)

const LinkedInIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 24 24" width="24" height="24">
    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
  </svg>
)

const EmailIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" width="24" height="24">
    <path strokeLinecap="round" strokeLinejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 0 1-2.25 2.25h-15a2.25 2.25 0 0 1-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0 0 19.5 4.5h-15a2.25 2.25 0 0 0-2.25 2.25m19.5 0v.243a2.25 2.25 0 0 1-1.07 1.916l-7.5 4.615a2.25 2.25 0 0 1-2.36 0L3.32 8.91a2.25 2.25 0 0 1-1.07-1.916V6.75" />
  </svg>
)

const PhoneIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" width="24" height="24">
    <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 0 0 2.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 0 1-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 0 0-1.091-.852H4.5A2.25 2.25 0 0 0 2.25 4.5v2.25Z" />
  </svg>
)

const BriefcaseIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" width="24" height="24">
    <path strokeLinecap="round" strokeLinejoin="round" d="M20.25 14.15v4.25c0 1.094-.787 2.036-1.872 2.18-2.087.277-4.216.42-6.378.42s-4.291-.143-6.378-.42c-1.085-.144-1.872-1.086-1.872-2.18v-4.25m16.5 0a2.18 2.18 0 0 0 .75-1.661V8.706c0-1.081-.768-2.015-1.837-2.175a48.114 48.114 0 0 0-3.413-.387m4.5 8.006c-.194.165-.42.295-.673.38A23.978 23.978 0 0 1 12 15.75c-2.648 0-5.195-.429-7.577-1.22a2.016 2.016 0 0 1-.673-.38m0 0A2.18 2.18 0 0 1 3 12.489V8.706c0-1.081.768-2.015 1.837-2.175a48.111 48.111 0 0 1 3.413-.387m7.5 0V5.25A2.25 2.25 0 0 0 13.5 3h-3a2.25 2.25 0 0 0-2.25 2.25v.894m7.5 0a48.667 48.667 0 0 0-7.5 0M12 12.75h.008v.008H12v-.008Z" />
  </svg>
)

const AcademicIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" width="24" height="24">
    <path strokeLinecap="round" strokeLinejoin="round" d="M4.26 10.147a60.438 60.438 0 0 0-.491 6.347A48.62 48.62 0 0 1 12 20.904a48.62 48.62 0 0 1 8.232-4.41 60.46 60.46 0 0 0-.491-6.347m-15.482 0a50.636 50.636 0 0 0-2.658-.813A59.906 59.906 0 0 1 12 3.493a59.903 59.903 0 0 1 10.399 5.84c-.896.248-1.783.52-2.658.814m-15.482 0A50.717 50.717 0 0 1 12 13.489a50.702 50.702 0 0 1 7.74-3.342M6.75 15a.75.75 0 1 0 0-1.5.75.75 0 0 0 0 1.5Zm0 0v-3.675A55.378 55.378 0 0 1 12 8.443m-7.007 11.55A5.981 5.981 0 0 0 6.75 15.75v-1.5" />
  </svg>
)

const DocumentIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" width="24" height="24">
    <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 14.25v-2.625a3.375 3.375 0 0 0-3.375-3.375h-1.5A1.125 1.125 0 0 1 13.5 7.125v-1.5a3.375 3.375 0 0 0-3.375-3.375H8.25m0 12.75h7.5m-7.5 3H12M10.5 2.25H5.625c-.621 0-1.125.504-1.125 1.125v17.25c0 .621.504 1.125 1.125 1.125h12.75c.621 0 1.125-.504 1.125-1.125V11.25a9 9 0 0 0-9-9Z" />
  </svg>
)

const SunIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" width="24" height="24">
    <path strokeLinecap="round" strokeLinejoin="round" d="M12 3v2.25m6.364.386-1.591 1.591M21 12h-2.25m-.386 6.364-1.591-1.591M12 18.75V21m-4.773-4.227-1.591 1.591M5.25 12H3m4.227-4.773L5.636 5.636M15.75 12a3.75 3.75 0 1 1-7.5 0 3.75 3.75 0 0 1 7.5 0Z" />
  </svg>
)

const MoonIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" width="24" height="24">
    <path strokeLinecap="round" strokeLinejoin="round" d="M21.752 15.002A9.72 9.72 0 0 1 18 15.75c-5.385 0-9.75-4.365-9.75-9.75 0-1.33.266-2.597.748-3.752A9.753 9.753 0 0 0 3 11.25C3 16.635 7.365 21 12.75 21a9.753 9.753 0 0 0 9.002-5.998Z" />
  </svg>
)

const ChartIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" width="24" height="24">
    <path strokeLinecap="round" strokeLinejoin="round" d="M3 13.125C3 12.504 3.504 12 4.125 12h2.25c.621 0 1.125.504 1.125 1.125v6.75C7.5 20.496 6.996 21 6.375 21h-2.25A1.125 1.125 0 0 1 3 19.875v-6.75ZM9.75 8.625c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125v11.25c0 .621-.504 1.125-1.125 1.125h-2.25a1.125 1.125 0 0 1-1.125-1.125V8.625ZM16.5 4.125c0-.621.504-1.125 1.125-1.125h2.25C20.496 3 21 3.504 21 4.125v15.75c0 .621-.504 1.125-1.125 1.125h-2.25a1.125 1.125 0 0 1-1.125-1.125V4.125Z" />
  </svg>
)

const RocketIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" width="24" height="24">
    <path strokeLinecap="round" strokeLinejoin="round" d="M15.59 14.37a6 6 0 0 1-5.84 7.38v-4.8m5.84-2.58a14.98 14.98 0 0 0 6.16-12.12A14.98 14.98 0 0 0 9.631 8.41m5.96 5.96a14.926 14.926 0 0 1-5.841 2.58m-.119-8.54a6 6 0 0 0-7.381 5.84h4.8m2.581-5.84a14.927 14.927 0 0 0-2.58 5.84m2.699 2.7c-.103.021-.207.041-.311.06a15.09 15.09 0 0 1-2.448-2.448 14.9 14.9 0 0 1 .06-.312m-2.24 2.39a4.493 4.493 0 0 0-1.757 4.306 4.493 4.493 0 0 0 4.306-1.758M16.5 9a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0Z" />
  </svg>
)

const StarIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 24 24" width="20" height="20">
    <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
  </svg>
)

const ExternalLinkIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" width="20" height="20">
    <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 6H5.25A2.25 2.25 0 0 0 3 8.25v10.5A2.25 2.25 0 0 0 5.25 21h10.5A2.25 2.25 0 0 0 18 18.75V10.5m-10.5 6L21 3m0 0h-5.25M21 3v5.25" />
  </svg>
)

// Skills data - updated to match resume
const skills = [
  {
    icon: <CodeIcon />,
    title: 'Java Development',
    description: 'Expert in Java 8-21 with solid understanding of OOP, Multithreading, Collections, Lambda expressions, Streams API, and functional interfaces.'
  },
  {
    icon: <ServerIcon />,
    title: 'Spring Ecosystem',
    description: 'Extensive experience with Spring Boot, Spring MVC, Spring Security, Spring Data JPA, Spring AOP, Spring REST, and Spring Batch.'
  },
  {
    icon: <DatabaseIcon />,
    title: 'Database & ORM',
    description: 'Proficient with Oracle, MySQL, PostgreSQL, MongoDB, Cassandra. Expert in Hibernate ORM, HQL, and database performance tuning.'
  },
  {
    icon: <ShieldIcon />,
    title: 'Microservices',
    description: 'Building resilient microservices using Docker, Kubernetes, Kafka, RabbitMQ with proper CI/CD pipelines using Jenkins and CircleCI.'
  },
  {
    icon: <CloudIcon />,
    title: 'Cloud & DevOps',
    description: 'AWS services (EC2, S3, RDS, Lambda, API Gateway), Pivotal Cloud Foundry, OpenShift/Kubernetes architecture and deployment.'
  },
  {
    icon: <ToolsIcon />,
    title: 'Full-Stack & Testing',
    description: 'Frontend with React, Angular, HTML5, CSS3. Testing with JUnit, Mockito, Selenium. Version control with Git, SVN.'
  }
]

// Professional Summary points
const summaryPoints = [
  'Around 8 years of diverse experience in IT Industry with proven expertise in Analysis, Design, Development and Testing of web-based and client-server multi-tier applications using Java/J2EE technologies.',
  'Core Java expertise with solid understanding of OOP concepts, Multithreading, Exception Handling, and Collections framework.',
  'Proficient with Java 8+ features including lambda expressions, functional interfaces, and Stream API.',
  'Experience in developing applications using Java Servlets, JSP, EJB, JMS, JNDI, JDBC, JAX-RS, JPA, RESTful Web Services, Spring, Hibernate, and Microservices.',
  'Good understanding of Spring Boot for building cloud Microservices. Extensively used Spring IOC, Spring REST, Spring MVC, Spring Security.',
  'Extensive Full-Stack development experience with HTML5, CSS3, JavaScript, TypeScript, jQuery, Bootstrap, AngularJS, NodeJS, ReactJS.',
  'Experienced with message queuing tools such as Kafka, RabbitMQ, JMS, and SQS.',
  'Expertise in AWS services: EC2, VPC, S3, RDS, DynamoDB, API Gateway, and Lambda.'
]

// Technical Skills data
const technicalSkills = {
  'Programming Languages': ['Java (1.5-21)', 'C', 'C++', 'PL/SQL', 'JavaScript', 'TypeScript'],
  'J2EE Technologies': ['Servlets', 'JSP', 'JDBC', 'EJB', 'JMS', 'JNDI', 'JAX-RS', 'JAX-WS'],
  'Frameworks': ['Spring Boot', 'Spring MVC', 'Spring Security', 'Hibernate', 'Struts', 'JSF'],
  'Web Technologies': ['HTML5', 'CSS3', 'JavaScript', 'React', 'Angular', 'Node.js', 'jQuery', 'Bootstrap'],
  'Databases': ['Oracle', 'MySQL', 'PostgreSQL', 'MongoDB', 'Cassandra', 'SQL Server'],
  'Cloud & DevOps': ['AWS (EC2, S3, RDS, Lambda)', 'Docker', 'Kubernetes', 'Jenkins', 'CircleCI'],
  'Message Queues': ['Apache Kafka', 'RabbitMQ', 'JMS', 'Amazon SQS'],
  'Testing Tools': ['JUnit', 'Mockito', 'Selenium', 'Postman', 'SoapUI'],
  'Version Control': ['Git', 'SVN', 'Bitbucket', 'GitHub'],
  'IDEs & Tools': ['IntelliJ', 'Eclipse', 'VS Code', 'JIRA', 'Maven', 'Gradle']
}

// Education data
const education = [
  {
    degree: "Master's in Computer and Information Systems",
    institution: 'New England College',
    year: '2023'
  },
  {
    degree: 'Bachelor of Technology',
    institution: 'GITAM University, Visakhapatnam, India',
    year: '2016'
  }
]

// Work Experience data
const experiences = [
  {
    title: 'Full Stack Java Developer',
    company: 'MagTech Consulting, NJ',
    client: 'BOK Financial',
    period: 'Oct 2022 - Present',
    highlights: [
      'Developed Spring Boot applications with Microservices utilizing RESTful API for large-scale daily data processing.',
      'Implemented Authentication and Authorization with Spring Security, including CSRF protection and HTTP Basic authentication.',
      'Built interactive webpages using React JS, HTML5, CSS3-SASS, and Bootstrap for responsive design.',
      'Worked extensively with Kubernetes and Docker for faster and consistent deployments across environments.',
      'Used Kafka and RabbitMQ for building Service Oriented Architecture (SOA) platform.',
      'Developed comprehensive JUnit test cases using Mockito and integration tests using Postman.',
      'Worked with NoSQL databases (Cassandra, MongoDB) for database performance tuning and data modeling.'
    ],
    technologies: ['Java 1.8', 'Spring Boot 2.0', 'React', 'Angular 7/8', 'MongoDB', 'AWS', 'Docker', 'Kubernetes', 'Kafka', 'Microservices']
  },
  {
    title: 'Senior Software Engineer',
    company: 'BA Continuum India Pvt Ltd, Hyderabad, India',
    client: 'Bank of America',
    period: 'August 2019 - December 2021',
    highlights: [
      'Developed Spring Boot microservices with RESTful and Apache Kafka architecture.',
      'Utilized Java 8 features including lambdas, Streams, functional interfaces, and Time API.',
      'Built Web APIs using Node.js hosted on load balanced API instances.',
      'Configured Hibernate with MongoDB and used Swagger for API documentation.',
      'Performed System Testing, Integration Testing, and Production Testing on WebLogic Server.',
      'Used Kibana and Elasticsearch to identify Kafka message failure scenarios.'
    ],
    technologies: ['Java 1.8', 'Spring Boot 2.0', 'Angular 7/8', 'Node.js', 'MongoDB', 'Kafka', 'Jenkins', 'Docker', 'Kubernetes']
  },
  {
    title: 'Java Developer',
    company: 'Dell International Services, Hyderabad, India',
    client: 'Dell',
    period: 'June 2016 - June 2019',
    highlights: [
      'Designed and developed user interactive screens using HTML5, CSS3, JavaScript, jQuery.',
      'Created Spring MVC components with Dispatcher Servlet, Request Mapping, and View Resolver.',
      'Integrated Spring with Hibernate using configurations and implemented DAO layer.',
      'Worked with RESTful Web Services using JAX-RS for external system integration.',
      'Maintained code in GitHub and used Jenkins for Maven builds and production rollouts.'
    ],
    technologies: ['Java', 'Spring MVC', 'Hibernate', 'JSP', 'JavaScript', 'Oracle', 'JBoss', 'Jenkins', 'Git']
  }
]

// Blog data
const blogPosts = [
  {
    title: 'How GitHub Copilot Helped Me Build This Portfolio',
    date: 'January 24, 2026',
    excerpt: 'Discover how AI-powered coding assistance transformed my portfolio development experience, from debugging deployment issues to implementing new features.',
    content: [
      "Building a portfolio website from scratch can be challenging, especially when you encounter unexpected issues. When I decided to create this portfolio using React and Vite, I had no idea I'd run into a frustrating deployment problem that would showcase the power of GitHub Copilot.",
      "The first major hurdle I faced was a blank white page after removing Jekyll from my GitHub Pages setup. Despite having a perfectly working local development environment, my deployed site showed nothing but emptiness. This is where GitHub Copilot became invaluable.",
      "**The Problem:**",
      "My GitHub Pages was trying to serve raw source files instead of the compiled React application. The browser attempted to load JSX files directly, which it obviously couldn't execute, leaving the page completely blank.",
      "**How Copilot Helped:**",
      "Instead of spending hours searching through documentation and Stack Overflow, I simply described my problem to GitHub Copilot. Within seconds, it identified the issue: I needed to switch from branch deployment to GitHub Actions deployment, and configure my Vite build properly.",
      "Copilot not only explained the problem but also:",
      "• Reviewed my existing GitHub Actions workflow configuration",
      "• Suggested the correct Vite base path configuration",
      "• Provided step-by-step instructions to switch to Actions deployment",
      "• Even helped me understand why the issue was occurring",
      "**Adding Features Made Easy:**",
      "When I wanted to add this blog section to share my experience, Copilot was right there to help again. It analyzed my existing component structure, maintained my design system's consistency, and generated the necessary code while following my established patterns.",
      "**Key Takeaways:**",
      "1. **Faster Debugging**: What could have taken hours was resolved in minutes",
      "2. **Learning While Building**: Copilot explains the 'why' behind solutions",
      "3. **Consistent Code Quality**: Suggestions match my existing code style",
      "4. **Confidence Boost**: Having an AI pair programmer reduces anxiety around complex problems",
      "**The Future of Development:**",
      "GitHub Copilot isn't just about writing code faster—it's about removing blockers, learning continuously, and building with confidence. Whether you're a seasoned developer or just starting out, having an AI assistant that understands context and provides intelligent suggestions is a game-changer.",
      "This portfolio stands as proof that with the right tools and persistence, technical challenges become opportunities for growth. GitHub Copilot didn't just help me fix bugs; it helped me build something I'm proud to share with the world.",
      "**Ready to try it yourself?**",
      "If you're facing similar challenges or want to level up your development workflow, I highly recommend giving GitHub Copilot a try. It's transformed how I approach problem-solving in my projects."
    ],
    tags: ['GitHub Copilot', 'React', 'Vite', 'GitHub Pages', 'AI', 'Developer Tools']
  }
]

// Projects data
const projects = [
  {
    id: 1,
    title: 'E-Commerce Microservices Platform',
    description: 'Built a scalable microservices-based e-commerce platform handling 10K+ transactions per day with Spring Boot, Kafka, and MongoDB.',
    technologies: ['Spring Boot', 'Kafka', 'MongoDB', 'Docker', 'Kubernetes', 'AWS'],
    highlights: ['99.9% uptime', 'Real-time inventory', 'Payment gateway integration'],
    github: 'https://github.com/arunreddy9595',
    live: null,
    image: '🛒'
  },
  {
    id: 2,
    title: 'Banking API Gateway',
    description: 'Developed RESTful API gateway for banking operations with OAuth2 security, rate limiting, and comprehensive audit logging.',
    technologies: ['Java 11', 'Spring Security', 'PostgreSQL', 'Redis', 'AWS Lambda'],
    highlights: ['OAuth2 + JWT', 'Rate limiting', 'Audit compliance'],
    github: 'https://github.com/arunreddy9595',
    live: null,
    image: '🏦'
  },
  {
    id: 3,
    title: 'Real-Time Analytics Dashboard',
    description: 'Created a real-time data processing pipeline and visualization dashboard using Kafka Streams and React for business intelligence.',
    technologies: ['Kafka Streams', 'React', 'Spring Boot', 'WebSocket', 'D3.js'],
    highlights: ['Real-time processing', 'Interactive charts', 'Custom alerts'],
    github: 'https://github.com/arunreddy9595',
    live: null,
    image: '📊'
  },
  {
    id: 4,
    title: 'Cloud Migration Framework',
    description: 'Architected and executed migration of legacy monolith to cloud-native microservices on AWS, reducing costs by 40%.',
    technologies: ['AWS', 'Docker', 'Jenkins', 'Terraform', 'Spring Cloud'],
    highlights: ['40% cost reduction', 'Zero downtime', 'Auto-scaling'],
    github: 'https://github.com/arunreddy9595',
    live: null,
    image: '☁️'
  }
]

// Testimonials data
const testimonials = [
  {
    id: 1,
    name: 'Sarah Johnson',
    role: 'Tech Lead at BOK Financial',
    content: 'Arun is an exceptional Java developer with deep expertise in Spring Boot and microservices. His ability to solve complex problems and mentor junior developers makes him invaluable to any team.',
    rating: 5,
    avatar: 'SJ'
  },
  {
    id: 2,
    name: 'Michael Chen',
    role: 'Engineering Manager at Bank of America',
    content: 'Working with Arun was a pleasure. He consistently delivered high-quality code, took ownership of critical features, and his knowledge of AWS and cloud architecture significantly improved our deployment pipeline.',
    rating: 5,
    avatar: 'MC'
  },
  {
    id: 3,
    name: 'Priya Sharma',
    role: 'Senior Developer at Dell',
    content: 'Arun has excellent problem-solving skills and a strong grasp of Java fundamentals. He was instrumental in our transition to microservices architecture and always willing to share his knowledge.',
    rating: 5,
    avatar: 'PS'
  }
]

// Stats Counter Component
const StatsCounter = ({ end, duration = 2000, suffix = '' }) => {
  const [count, setCount] = useState(0)
  const countRef = useRef(null)
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !isVisible) {
          setIsVisible(true)
        }
      },
      { threshold: 0.1 }
    )

    if (countRef.current) {
      observer.observe(countRef.current)
    }

    return () => observer.disconnect()
  }, [isVisible])

  useEffect(() => {
    if (!isVisible) return

    let startTime
    let animationFrame

    const animate = (currentTime) => {
      if (!startTime) startTime = currentTime
      const progress = Math.min((currentTime - startTime) / duration, 1)
      
      setCount(Math.floor(progress * end))

      if (progress < 1) {
        animationFrame = requestAnimationFrame(animate)
      }
    }

    animationFrame = requestAnimationFrame(animate)
    return () => cancelAnimationFrame(animationFrame)
  }, [isVisible, end, duration])

  return <span ref={countRef}>{count}{suffix}</span>
}

function App() {
  const [darkMode, setDarkMode] = useState(() => {
    const saved = localStorage.getItem('darkMode')
    return saved ? JSON.parse(saved) : window.matchMedia('(prefers-color-scheme: dark)').matches
  })
  const [activeSection, setActiveSection] = useState('home')

  useEffect(() => {
    document.documentElement.classList.remove('dark-mode', 'light-mode')
    if (darkMode) {
      document.documentElement.classList.add('dark-mode')
    } else {
      document.documentElement.classList.add('light-mode')
    }
    localStorage.setItem('darkMode', JSON.stringify(darkMode))
  }, [darkMode])

  useEffect(() => {
    const handleScroll = () => {
      const sections = ['home', 'about', 'skills', 'experience', 'projects', 'testimonials', 'education', 'blog']
      const scrollPosition = window.scrollY + 100

      for (const section of sections) {
        const element = document.getElementById(section)
        if (element) {
          const { offsetTop, offsetHeight } = element
          if (scrollPosition >= offsetTop && scrollPosition < offsetTop + offsetHeight) {
            setActiveSection(section)
            break
          }
        }
      }
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId)
    if (element) {
      const offset = 80
      const elementPosition = element.offsetTop - offset
      window.scrollTo({ top: elementPosition, behavior: 'smooth' })
    }
  }

  return (
    <>
      {/* Dark Mode Toggle */}
      <button 
        className="theme-toggle" 
        onClick={() => setDarkMode(!darkMode)}
        aria-label="Toggle dark mode"
      >
        {darkMode ? <SunIcon /> : <MoonIcon />}
      </button>

      {/* Sticky Navigation */}
      <nav className="navbar">
        <div className="container">
          <div className="navbar-content">
            <div className="navbar-brand">ARS</div>
            <div className="navbar-links">
              {['home', 'about', 'skills', 'experience', 'projects', 'testimonials', 'education', 'blog'].map((section) => (
                <button
                  key={section}
                  className={`navbar-link ${activeSection === section ? 'active' : ''}`}
                  onClick={() => scrollToSection(section)}
                >
                  {section.charAt(0).toUpperCase() + section.slice(1)}
                </button>
              ))}
            </div>
          </div>
        </div>
      </nav>

      {/* Header Section */}
      <header className="header" id="home">
        <div className="container header-content">
          <div className="header-avatar">ARS</div>
          <h1 className="header-title animate-fade-in-up">Arun Singireddy</h1>
          <p className="header-subtitle animate-fade-in-up animate-delay-1">
            Full Stack Java Developer | 9+ Years of Experience
          </p>
          
          {/* Contact Info */}
          <div className="contact-bar animate-fade-in-up animate-delay-2">
            <a href="mailto:asingireddy25@gmail.com" className="contact-item">
              <EmailIcon />
              <span>arunsingireddy95@gmail.com</span>
            </a>
            <a href="tel:+17326307465" className="contact-item">
              <PhoneIcon />
              <span>(732) 630-7465</span>
            </a>
            <a href="https://www.linkedin.com/in/arun-singireddy-39560a253/" target="_blank" rel="noopener noreferrer" className="contact-item">
              <LinkedInIcon />
              <span>LinkedIn</span>
            </a>
            <a href="https://github.com/arunreddy9595" target="_blank" rel="noopener noreferrer" className="contact-item">
              <GitHubIcon />
              <span>GitHub</span>
            </a>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="main">
        <div className="container">
          
          {/* Professional Summary Section */}
          <section className="section" id="about">
            <h2 className="section-title">Professional Summary</h2>
            <div className="about-card">
              <ul className="summary-list">  
                {summaryPoints.map((point, index) => (
                  <li key={index} className="summary-item">
                    <span className="summary-bullet"><CheckIcon /></span>
                    <span>{point}</span>
                  </li>
                ))}
              </ul>
            </div>
          </section>

          {/* Stats Section */}
          <section className="section stats-section">
            <div className="stats-grid">
              <div className="stat-card">
                <div className="stat-icon">
                  <ChartIcon />
                </div>
                <div className="stat-number">
                  <StatsCounter end={9} suffix="+" />
                </div>
                <div className="stat-label">Years Experience</div>
              </div>
              <div className="stat-card">
                <div className="stat-icon">
                  <RocketIcon />
                </div>
                <div className="stat-number">
                  <StatsCounter end={50} suffix="+" />
                </div>
                <div className="stat-label">Projects Completed</div>
              </div>
              <div className="stat-card">
                <div className="stat-icon">
                  <CodeIcon />
                </div>
                <div className="stat-number">
                  <StatsCounter end={25} suffix="+" />
                </div>
                <div className="stat-label">Technologies Mastered</div>
              </div>
              <div className="stat-card">
                <div className="stat-icon">
                  <CloudIcon />
                </div>
                <div className="stat-number">
                  <StatsCounter end={15} suffix="+" />
                </div>
                <div className="stat-label">Cloud Deployments</div>
              </div>
            </div>
          </section>

          {/* Skills Section */}
          <section className="section" id="skills">
            <h2 className="section-title">Skills & Expertise</h2>
            <div className="skills-grid">
              {skills.map((skill) => (
                <div key={skill.title} className="skill-card">
                  <div className="skill-icon">
                    {skill.icon}
                  </div>
                  <h3 className="skill-title">{skill.title}</h3>
                  <p className="skill-description">{skill.description}</p>
                </div>
              ))}
            </div>
          </section>

          {/* Technical Skills Section */}
          <section className="section">
            <h2 className="section-title">Technical Skills</h2>
            <div className="tech-skills-grid">
              {Object.entries(technicalSkills).map(([category, items]) => (
                <div key={category} className="tech-category">
                  <h4 className="tech-category-title">{category}</h4>
                  <div className="tech-stack">
                    {items.map((tech) => (
                      <span key={tech} className="tech-tag">{tech}</span>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </section>

          {/* Work Experience Section */}
          <section className="section" id="experience">
            <h2 className="section-title">
              <BriefcaseIcon />
              <span className="section-title-text">Work Experience</span>
            </h2>
            <div className="experience-list">
              {experiences.map((exp, index) => (
                <div key={index} className="experience-card">
                  <div className="experience-header">
                    <div className="experience-title-group">
                      <h3 className="experience-title">{exp.title}</h3>
                      <p className="experience-company">{exp.company}</p>
                      {exp.client && <p className="experience-client">Client: {exp.client}</p>}
                    </div>
                    <span className="experience-period">{exp.period}</span>
                  </div>
                  <ul className="experience-highlights">
                    {exp.highlights.map((highlight, idx) => (
                      <li key={idx} className="experience-highlight">
                        <span className="highlight-bullet"><CheckIcon /></span>
                        <span>{highlight}</span>
                      </li>
                    ))}
                  </ul>
                  <div className="experience-tech">
                    <strong>Technologies:</strong>
                    <div className="tech-stack tech-stack-spaced">
                      {exp.technologies.map((tech) => (
                        <span key={tech} className="tech-tag tech-tag-small">{tech}</span>
                      ))}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </section>

          {/* Projects Section */}
          <section className="section" id="projects">
            <h2 className="section-title">
              <RocketIcon />
              <span className="section-title-text">Featured Projects</span>
            </h2>
            <div className="projects-grid">
              {projects.map((project) => (
                <div key={project.id} className="project-card">
                  <div className="project-emoji">{project.image}</div>
                  <h3 className="project-title">{project.title}</h3>
                  <p className="project-description">{project.description}</p>
                  
                  <div className="project-highlights">
                    {project.highlights.map((highlight, idx) => (
                      <span key={idx} className="project-highlight-badge">
                        ✓ {highlight}
                      </span>
                    ))}
                  </div>

                  <div className="project-tech">
                    {project.technologies.map((tech) => (
                      <span key={tech} className="tech-tag tech-tag-small">{tech}</span>
                    ))}
                  </div>

                  <div className="project-links">
                    <a 
                      href={project.github} 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="project-link"
                    >
                      <GitHubIcon />
                      <span>View Code</span>
                    </a>
                    {project.live && (
                      <a 
                        href={project.live} 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="project-link project-link-primary"
                      >
                        <ExternalLinkIcon />
                        <span>Live Demo</span>
                      </a>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </section>

          {/* Testimonials Section */}
          <section className="section" id="testimonials">
            <h2 className="section-title">
              <StarIcon />
              <span className="section-title-text">Testimonials</span>
            </h2>
            <div className="testimonials-grid">
              {testimonials.map((testimonial) => (
                <div key={testimonial.id} className="testimonial-card">
                  <div className="testimonial-rating">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <StarIcon key={i} />
                    ))}
                  </div>
                  <p className="testimonial-content">"{testimonial.content}"</p>
                  <div className="testimonial-author">
                    <div className="testimonial-avatar">{testimonial.avatar}</div>
                    <div className="testimonial-info">
                      <div className="testimonial-name">{testimonial.name}</div>
                      <div className="testimonial-role">{testimonial.role}</div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </section>

          {/* Education Section */}
          <section className="section" id="education">
            <h2 className="section-title">
              <AcademicIcon />
              <span className="section-title-text">Education</span>
            </h2>
            <div className="education-grid">
              {education.map((edu, index) => (
                <div key={index} className="education-card">
                  <h3 className="education-degree">{edu.degree}</h3>
                  <p className="education-institution">{edu.institution}</p>
                  <span className="education-year">{edu.year}</span>
                </div>
              ))}
            </div>
          </section>

          {/* Blog Section */}
          <section className="section" id="blog">
            <h2 className="section-title">
              <DocumentIcon />
              <span className="section-title-text">Blog</span>
            </h2>
            <div className="blog-list">
              {blogPosts.map((post, index) => (
                <article key={index} className="blog-card">
                  <div className="blog-header">
                    <h3 className="blog-title">{post.title}</h3>
                    <time className="blog-date">{post.date}</time>
                  </div>
                  <p className="blog-excerpt">{post.excerpt}</p>
                  <div className="blog-content">
                    {post.content.map((paragraph, idx) => (
                      <p key={idx} className="blog-paragraph">{paragraph}</p>
                    ))}
                  </div>
                  <div className="blog-tags">
                    {post.tags.map((tag) => (
                      <span key={tag} className="blog-tag">{tag}</span>
                    ))}
                  </div>
                </article>
              ))}
            </div>
          </section>
        </div>
      </main>

      {/* Footer */}
      <footer className="footer">
        <div className="container footer-content">
          <div className="social-links">
            <a 
              href="https://www.linkedin.com/in/arun-singireddy-39560a253/" 
              target="_blank" 
              rel="noopener noreferrer"
              className="social-link"
              aria-label="LinkedIn Profile"
            >
              <LinkedInIcon />
            </a>
            <a 
              href="https://github.com/arunreddy9595" 
              target="_blank" 
              rel="noopener noreferrer"
              className="social-link"
              aria-label="GitHub Profile"
            >
              <GitHubIcon />
            </a>
            <a 
              href="mailto:asingireddy25@gmail.com"
              className="social-link"
              aria-label="Email"
            >
              <EmailIcon />
            </a>
          </div>
          <p className="footer-text">
            &copy; {new Date().getFullYear()} Arun Singireddy. Open to new opportunities.
          </p>
        </div>
      </footer>
    </>
  )
}

export default App