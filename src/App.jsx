import { useState } from "react";
import "./App.css";

function App() {
  const [status, setStatus] = useState("Ready");
  const [deployments, setDeployments] = useState(3);

  const handleDeploy = () => {
    setStatus("Deploying...");

    setTimeout(() => {
      setStatus("Deployed");
      setDeployments((prev) => prev + 1);
    }, 1500);
  };

  return (
    <div className="app">
      <nav className="navbar">
        <div className="logo">
          <span className="logo-icon">⚡</span>
          DevFlow
        </div>

        <div className="nav-links">
          <a href="#dashboard">Dashboard</a>
          <a href="#pipeline">Pipeline</a>
          <a href="#deployments">Deployments</a>
        </div>

        <div className="status-badge">
          <span className="status-dot"></span>
          System Online
        </div>
      </nav>

      <main>
        <section className="hero" id="dashboard">
          <div className="hero-content">
            <span className="eyebrow">CI/CD DASHBOARD</span>

            <h1>
              Build.
              <br />
              Test.
              <br />
              <span>Deploy.</span>
            </h1>

            <p>
              A modern React frontend for demonstrating automated builds,
              testing, and continuous deployment. form maruti 
            </p>

            <div className="hero-buttons">
              <button className="primary-btn" onClick={handleDeploy}>
                🚀 Deploy Now
              </button>

              <a href="#pipeline" className="secondary-btn">
                View Pipeline →
              </a>
            </div>
          </div>

          <div className="hero-card">
            <div className="terminal-header">
              <div className="terminal-dots">
                <span className="red"></span>
                <span className="yellow"></span>
                <span className="green"></span>
              </div>

              <span>deployment.log</span>
            </div>

            <div className="terminal-body">
              <p>
                <span className="green-text">$</span> npm run build
              </p>

              <p className="success">
                ✓ Build completed successfully
              </p>

              <p>
                <span className="green-text">$</span> npm run test
              </p>

              <p className="success">
                ✓ All tests passed
              </p>

              <p>
                <span className="green-text">$</span> deploy production
              </p>

              <p className="success">
                ✓ Deployment successful
              </p>

              <p className="cursor">
                <span className="green-text">$</span> _
              </p>
            </div>
          </div>
        </section>

        <section className="stats">
          <div className="stat-card">
            <div className="stat-icon blue">◉</div>
            <div>
              <span>Build Status</span>
              <strong>Passing</strong>
            </div>
          </div>

          <div className="stat-card">
            <div className="stat-icon green">✓</div>
            <div>
              <span>Tests</span>
              <strong>24 / 24</strong>
            </div>
          </div>

          <div className="stat-card">
            <div className="stat-icon purple">↗</div>
            <div>
              <span>Deployments</span>
              <strong>{deployments}</strong>
            </div>
          </div>

          <div className="stat-card">
            <div className="stat-icon orange">◷</div>
            <div>
              <span>Last Deploy</span>
              <strong>2 min ago</strong>
            </div>
          </div>
        </section>

        <section className="pipeline-section" id="pipeline">
          <div className="section-heading">
            <div>
              <span className="eyebrow">AUTOMATION</span>
              <h2>CI/CD Pipeline</h2>
            </div>

            <span className="pipeline-status">
              <span></span>
              {status}
            </span>
          </div>

          <div className="pipeline">
            <PipelineStep
              number="01"
              icon="⌘"
              title="Code"
              description="Push changes to Git"
              completed
            />

            <div className="pipeline-line completed"></div>

            <PipelineStep
              number="02"
              icon="⚙"
              title="Build"
              description="Install & compile"
              completed
            />

            <div className="pipeline-line completed"></div>

            <PipelineStep
              number="03"
              icon="✓"
              title="Test"
              description="Run automated tests"
              completed
            />

            <div className="pipeline-line"></div>

            <PipelineStep
              number="04"
              icon="🚀"
              title="Deploy"
              description="Release to production"
            />
          </div>
        </section>

        <section className="deployment-section" id="deployments">
          <div className="section-heading">
            <div>
              <span className="eyebrow">HISTORY</span>
              <h2>Recent Deployments</h2>
            </div>
          </div>

          <div className="deployment-table">
            <div className="table-header">
              <span>VERSION</span>
              <span>BRANCH</span>
              <span>COMMIT</span>
              <span>STATUS</span>
            </div>

            <Deployment
              version="v1.0.3"
              branch="main"
              commit="a82f91c"
              status="Success"
            />

            <Deployment
              version="v1.0.2"
              branch="main"
              commit="72bc841"
              status="Success"
            />

            <Deployment
              version="v1.0.1"
              branch="develop"
              commit="41de923"
              status="Success"
            />
          </div>
        </section>
      </main>

      <footer>
        <div className="logo">
          <span className="logo-icon">⚡</span>
          DevFlow
        </div>

        <p>React CI/CD Demo Project</p>

        <span>Built for automation 🚀</span>
      </footer>
    </div>
  );
}

function PipelineStep({
  number,
  icon,
  title,
  description,
  completed = false,
}) {
  return (
    <div className={`pipeline-step ${completed ? "completed" : ""}`}>
      <div className="step-number">{number}</div>

      <div className="step-icon">{icon}</div>

      <h3>{title}</h3>

      <p>{description}</p>

      <div className="step-status">
        {completed ? "✓ Completed" : "○ Pending"}
      </div>
    </div>
  );
}

function Deployment({ version, branch, commit, status }) {
  return (
    <div className="deployment-row">
      <strong>{version}</strong>

      <span className="branch">⑂ {branch}</span>

      <code>{commit}</code>

      <span className="success-badge">✓ {status}</span>
    </div>
  );
}

export default App;