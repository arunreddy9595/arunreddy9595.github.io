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
    <path strokeLinecap="round" strokeLinejoin="round" d="M20.25 6.375c0 2.278-3.694 4.125-8.25 4.125S3.75 8.653 3.75 6.375m16.5 0c0-2.278-3.694-4.125-8.25-4.125S3.75 4.097 3.75 6.375m16.5 0v11.25c0 2.278-3.694 4.125-8.25 4.125s-8.25-1.847-8.25-4.125V6.375m16.5 0v3.75m-16.5-3.75v3.75m16.5 0v3.75C20.25 16.153 16.556 18 12 18s-8.25-1.847-8.25-4.125v-3.75m16.5 0c0 2.278-3.694 4.125-8.25 4.125s-8.25-1.847-8.25-4.125" />
  </svg>
)

const ShieldIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" width="24" height="24">
    <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75 11.25 15 15 9.75m-3-7.036A11.959 11.959 0 0 1 3.598 6 11.99 11.99 0 0 0 3 9.749c0 5.592 3.824 10.29 9 11.623 5.176-1.332 9-6.03 9-11.622 0-1.31-.21-2.571-.598-3.751h-.152c-3.196 0-6.1-1.248-8.25-3.285Z" />
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

// Skills data
const skills = [
  {
    icon: <CodeIcon />,
    title: 'Java Development',
    description: 'Expert in modern Java features, clean code practices, and object-oriented design patterns.'
  },
  {
    icon: <ServerIcon />,
    title: 'Spring Boot',
    description: 'Building production-ready applications with Spring Boot, Spring Data, and Spring Security.'
  },
  {
    icon: <DatabaseIcon />,
    title: 'REST APIs',
    description: 'Designing and implementing scalable RESTful APIs with proper documentation and versioning.'
  },
  {
    icon: <ShieldIcon />,
    title: 'Microservices',
    description: 'Architecting resilient microservices with proper monitoring, logging, and fault tolerance.'
  }
]

// Values data
const values = [
  'Writing clear, well-tested code',
  'Designing resilient microservices',
  'Using Spring Boot to accelerate development while maintaining best practices',
  'Continuous delivery and automation'
]

// Tech stack
const techStack = ['Java', 'Spring Boot', 'Spring Data', 'REST', 'SQL', 'NoSQL', 'Docker', 'Git']

function App() {
  return (
    <>
      {/* Header Section */}
      <header className="header">
        <div className="container header-content">
          <div className="header-avatar">AR</div>
          <h1 className="header-title animate-fade-in-up">Hi — I&apos;m Arun (ultracoder)</h1>
          <p className="header-subtitle animate-fade-in-up animate-delay-1">
            I build clean, maintainable backend systems and APIs. 
            I&apos;m passionate about Java and Spring Boot.
          </p>
        </div>
      </header>

      {/* Main Content */}
      <main className="main">
        <div className="container">
          {/* About Section */}
          <section className="section">
            <h2 className="section-title">About Me</h2>
            <div className="about-card">
              <p className="section-content">
                I enjoy designing and building robust server-side applications using modern Java 
                and the Spring ecosystem. I focus on creating services that are easy to test, 
                monitor, and scale. My experience includes REST APIs, data persistence, 
                dependency injection, and integrating Spring projects like Spring Boot, 
                Spring Data, and Spring Security.
              </p>
              
              {/* Tech Stack Tags */}
              <div className="tech-stack">
                {techStack.map((tech) => (
                  <span key={tech} className="tech-tag">{tech}</span>
                ))}
              </div>
            </div>
          </section>

          {/* Skills Section */}
          <section className="section">
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

          {/* Values Section */}
          <section className="section">
            <h2 className="section-title">What I Care About</h2>
            <ul className="values-list">
              {values.map((value) => (
                <li key={value} className="value-item">
                  <span className="value-icon">
                    <CheckIcon />
                  </span>
                  <span className="value-text">{value}</span>
                </li>
              ))}
            </ul>
          </section>
        </div>
      </main>

      {/* Footer */}
      <footer className="footer">
        <div className="container footer-content">
          <div className="social-links">
            <a 
              href="https://github.com/arunreddy9595" 
              target="_blank" 
              rel="noopener noreferrer"
              className="social-link"
              aria-label="GitHub Profile"
            >
              <GitHubIcon />
            </a>
          </div>
          <p className="footer-text">
            Want to connect? Visit my{' '}
            <a 
              href="https://github.com/arunreddy9595" 
              target="_blank" 
              rel="noopener noreferrer"
            >
              GitHub profile
            </a>
          </p>
        </div>
      </footer>
    </>
  )
}

export default App
