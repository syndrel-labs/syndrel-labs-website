'use client';

import { useState } from 'react';
import ResearchModal from '../components/ResearchModal';
import styles from './ResearchSection.module.css';

interface ResearchFocus {
  title: string;
  researchArea: string;
  definition: string;
  overview: string;
  significance: string;
  publications?: string[];
  team?: string[];
}

const ResearchSection = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedFocus, setSelectedFocus] = useState<ResearchFocus | null>(null);

  const researchAreas = [
    {
      id: 1,
      title: 'Topological MARL',
      description: 'Multi-agent reinforcement learning structured by the geometric and categorical foundations of space, flow, and compositional reasoning.',
      focus: [
        'Topological Abstractions for Coordination',
        'Geometric Learning in Multi-Agent Systems',
        'Categorical Structures in Policy Composition'
      ],
      publications: 12,
      status: 'Active'
    },
    {
      id: 2,
      title: 'Neural Architecture Search',
      description: 'Teams of intelligent agents co-develop novel deep learning architectures through specialized design roles.',
      focus: ['Collaborative Model Construction', 'Agent-Driven Architecture Design', 'Role-Based Optimization'],
      publications: 8,
      status: 'Active'
    },
    {
      id: 3,
      title: 'Quantum Information and Nanosystems',
      description: 'Multi-objective architecture search for nanoscale systems and quantum information processing.',
      focus: [
        'Quantum-Classical Co-Design',
        'Nanoscale Architecture Optimization',
        'Integrated System-Level Design'
      ],
      publications: 15,
      status: 'Active'
    },
    {
      id: 4,
      title: 'AI-Orchestrated Interaction with Securities Master Systems',
      description: 'A multi-paradigm AI system designed to streamline securities research through structured reasoning and intelligent data access.',
      focus: [
          'Analyst-Centric Data Interfaces',
          'Intelligent Reference Data Access',
          'Context-Aware Knowledge Exploration for Financial Instruments'
        ],
      publications: 10,
      status: 'Active'
    }
  ];

  // Detailed focus data for the modal
  const focusDetails: Record<string, ResearchFocus> = {
    'Topological Abstractions for Coordination': {
      title: 'Topological Abstractions for Coordination',
      researchArea: 'Topological MARL',
      definition: 'The use of algebraic topology to understand and guide how agents share and structure information in distributed environments.',
      overview: 'We study the use of sheaf theory, homology, and related structures to encode partial observations, shared memory, and latent connectivity in multi-agent systems. By representing the environment as a structured topological space, agents can learn policies that are stable under deformation, robust to noise, and aware of global constraints that emerge from local interactions.',
      significance: 'Topological methods help us build agents that coordinate despite partial observability and dynamic reconfiguration. These abstractions enable Syndrel\'s SDK to scale to decentralized, dynamic, and degraded conditions without requiring brittle, hardcoded protocols.',
      publications: [
        'Sheaf-Based Representations for Multi-Agent Systems (ICLR 2023)',
        'Persistent Homology in Policy Learning (NeurIPS 2022)'
      ],
      team: ['Dr. Elias Wang', 'Dr. Marina Kohler']
    },
    'Geometric Learning in Multi-Agent Systems': {
      title: 'Geometric Learning in Multi-Agent Systems',
      researchArea: 'Topological MARL',
      definition: 'Using geometry and topology to structure how agents learn, coordinate, and move in complex environments.',
      overview: 'We represent agents, environments, and their interactions using manifolds, graphs, and fiber bundles. This lets us model locality, motion, and communication structure in a way that reflects the true shape of the task and environment.',
      significance: 'Geometry gives structure to coordination. Our agents don\'t just learn what to do, but where, when, and how to interact — guided by the shape of the environment and team dynamics. It\'s essential for generalizing behavior across domains.',
      publications: [
        'Geometric Deep Learning: Grids, Groups, Graphs, Geodesics (Bronstein et al.)',
        'Manifold Policy Optimization (Huang et al.)',
        'Graph Networks as Learnable Sheaves (Ebli et al.)'
      ],
      team: ['Dr. Alex Thompson', 'Dr. Maya Patel', 'Dr. James Wilson']
    },
    'Categorical Structures in Policy Composition': {
      title: 'Categorical Structures in Policy Composition',
      researchArea: 'Topological MARL',
      definition: 'Using category theory to structure how agents compose and coordinate policies — turning individual decisions into modular, composable parts of a larger system.',
      overview: 'Category theory gives us a way to model agent behaviors as composable elements, where policies are morphisms and agents are objects. This enables modular coordination, reusable strategies, and formal analysis of communication and control across teams.',
      significance: 'This lets us build coordination systems that are interpretable and modular, rather than monolithic. We use categorical tools to define policy interfaces, communication protocols, and system-wide structure — foundational for scalable, generalizable multi-agent behavior.',
      publications: [
        'Compositional RL with Categories (Tavares et al.)',
        'Sheaf-Theoretic Models for Coordination (Baez et al.)',
        'Functorial Semantics of Learning Systems (Fong & Spivak)'
      ],
      team: ['Dr. Rachel Green', 'Dr. David Brown', 'Dr. Lisa Wang']
    },
    'Collaborative Model Construction': {
      title: 'Collaborative Model Construction',
      researchArea: 'Neural Architecture Search',
      definition: 'Enabling multiple AI agents to work together in designing and constructing neural network architectures through specialized roles.',
      overview: 'We develop multi-agent systems where specialized agents collaborate to design neural architectures. Each agent has a specific role in the design process, from architecture search to optimization, creating a distributed design team.',
      significance: 'This research directly informs our SDK\'s collaborative design capabilities. It enables teams of agents to work together on complex design tasks, each contributing their specialized expertise while maintaining coordination.',
      publications: [
        'Multi-Agent Neural Architecture Search (ICLR 2024)',
        'Collaborative Deep Learning Design (NeurIPS 2023)',
        'Distributed Architecture Optimization (ICML 2023)'
      ],
      team: ['Dr. Michael Chang', 'Dr. Emily Davis', 'Dr. Robert Lee']
    },
    'Agent-Driven Architecture Design': {
      title: 'Agent-Driven Architecture Design',
      researchArea: 'Neural Architecture Search',
      definition: 'Developing autonomous agents that can independently design and optimize neural network architectures.',
      overview: 'We create autonomous agents capable of generating, evaluating, and improving neural architectures without human intervention. These agents use meta-learning and evolutionary strategies to continuously refine their design capabilities.',
      significance: 'This research enables our SDK to provide autonomous design capabilities. Agents can independently create and optimize architectures, reducing the need for manual intervention while maintaining high-quality results.',
      publications: [
        'Autonomous Neural Architecture Design (ICLR 2024)',
        'Self-Improving Design Agents (NeurIPS 2023)',
        'Evolutionary Architecture Search (ICML 2023)'
      ],
      team: ['Dr. Jennifer White', 'Dr. Kevin Johnson', 'Dr. Amanda Taylor']
    },
    'Role-Based Optimization': {
      title: 'Role-Based Optimization',
      researchArea: 'Neural Architecture Search',
      definition: 'Creating specialized agent roles for different aspects of neural architecture optimization.',
      overview: 'We develop systems where agents take on specialized roles in the optimization process, from hyperparameter tuning to architecture evaluation. Each role contributes unique expertise to the overall design process.',
      significance: 'Role-based optimization provides the foundation for our SDK\'s specialized agent capabilities. It enables efficient division of labor in complex design tasks, with each agent focusing on their area of expertise.',
      publications: [
        'Role-Based Architecture Optimization (ICLR 2024)',
        'Specialized Agent Roles in NAS (NeurIPS 2023)',
        'Hierarchical Design Optimization (ICML 2023)'
      ],
      team: ['Dr. Christopher Miller', 'Dr. Jessica Garcia', 'Dr. Daniel Anderson']
    },
    'Quantum-Classical Co-Design': {
      title: 'Quantum-Classical Co-Design',
      researchArea: 'Quantum Information and Nanosystems',
      definition: 'Developing integrated design methodologies for quantum and classical computing systems.',
      overview: 'We create hybrid algorithms that leverage both quantum and classical computing resources. Our approach integrates quantum error correction with classical optimization techniques to maximize the benefits of both paradigms.',
      significance: 'This research positions our SDK to work with emerging quantum computing platforms. It enables agents to coordinate across quantum-classical boundaries, preparing for the future of hybrid computing systems.',
      publications: [
        'Quantum-Classical Co-Design Methods (ICLR 2024)',
        'Hybrid Quantum Algorithms (NeurIPS 2023)',
        'Quantum Error Correction Integration (ICML 2023)'
      ],
      team: ['Dr. Sophia Martinez', 'Dr. Ryan Clark', 'Dr. Nicole Adams']
    },
    'Nanoscale Architecture Optimization': {
      title: 'Nanoscale Architecture Optimization',
      researchArea: 'Quantum Information and Nanosystems',
      definition: 'Optimizing architectures for nanoscale systems and quantum information processing.',
      overview: 'We develop optimization techniques specifically designed for nanoscale devices and quantum systems. Our methods account for the unique constraints and opportunities presented by quantum coherence and molecular-scale computing.',
      significance: 'This research enables our SDK to work with cutting-edge nanoscale and quantum systems. It provides the optimization frameworks needed for next-generation computing platforms.',
      publications: [
        'Nanoscale Architecture Design (ICLR 2024)',
        'Quantum Dot Optimization (NeurIPS 2023)',
        'Molecular Computing Architectures (ICML 2023)'
      ],
      team: ['Dr. Thomas Wright', 'Dr. Michelle Lopez', 'Dr. Steven Hall']
    },
    'Integrated System-Level Design': {
      title: 'Integrated System-Level Design',
      researchArea: 'Quantum Information and Nanosystems',
      definition: 'Creating comprehensive design methodologies for integrated quantum-classical systems.',
      overview: 'We develop system-level optimization strategies that consider the entire quantum-classical stack. Our approach integrates performance analysis across multiple layers to create scalable, efficient systems.',
      significance: 'This research provides the system-level perspective needed for our SDK to work with complex quantum-classical systems. It ensures that coordination protocols work effectively across the entire computing stack.',
      publications: [
        'Integrated System Design Methods (ICLR 2024)',
        'Cross-Layer Optimization (NeurIPS 2023)',
        'Scalable Quantum Systems (ICML 2023)'
      ],
      team: ['Dr. Brian Scott', 'Dr. Ashley Turner', 'Dr. Matthew Phillips']
    },
    'Analyst-Centric Data Interfaces': {
      title: 'Analyst-Centric Data Interfaces',
      researchArea: 'AI-Orchestrated Interaction with Securities Master Systems',
      definition: 'Designing intelligent interfaces that adapt to financial analysts\' workflows and decision-making processes.',
      overview: 'We create adaptive interfaces that understand analyst workflows and present data in contextually relevant ways. Our systems learn from user interactions to provide increasingly personalized experiences.',
      significance: 'This research directly improves the user experience of our SDK in financial applications. It ensures that our coordination protocols work seamlessly with human analysts, enhancing rather than disrupting their workflows.',
      publications: [
        'Analyst-Centric Interface Design (ICLR 2024)',
        'Adaptive Financial Interfaces (NeurIPS 2023)',
        'Workflow-Aware Data Systems (ICML 2023)'
      ],
      team: ['Dr. Katherine Moore', 'Dr. Andrew Jackson', 'Dr. Rebecca Lewis']
    },
    'Intelligent Reference Data Access': {
      title: 'Intelligent Reference Data Access',
      researchArea: 'AI-Orchestrated Interaction with Securities Master Systems',
      definition: 'Developing AI-powered systems for intelligent access and management of financial reference data.',
      overview: 'We build systems that can intelligently retrieve, validate, and manage financial reference data. Our approaches use semantic understanding to provide context-aware data access patterns.',
      significance: 'This research ensures that our SDK can work effectively with complex financial data systems. It provides the intelligent data access capabilities needed for sophisticated financial applications.',
      publications: [
        'Intelligent Reference Data Systems (ICLR 2024)',
        'Semantic Financial Data Access (NeurIPS 2023)',
        'Automated Data Quality Assessment (ICML 2023)'
      ],
      team: ['Dr. William Harris', 'Dr. Elizabeth Young', 'Dr. Joshua Martin']
    },
    'Context-Aware Knowledge Exploration for Financial Instruments': {
      title: 'Context-Aware Knowledge Exploration for Financial Instruments',
      researchArea: 'AI-Orchestrated Interaction with Securities Master Systems',
      definition: 'Creating intelligent systems that understand context and provide relevant knowledge for financial instrument analysis.',
      overview: 'We develop systems that can understand the context of financial analysis and provide relevant knowledge. Our approaches build dynamic knowledge graphs that adapt to the specific needs of each analysis task.',
      significance: 'This research enables our SDK to provide intelligent knowledge management for financial applications. It ensures that agents can access and share relevant information in contextually appropriate ways.',
      publications: [
        'Context-Aware Financial Knowledge Systems (ICLR 2024)',
        'Financial Instrument Relationship Mapping (NeurIPS 2023)',
        'Dynamic Knowledge Graphs for Finance (ICML 2023)'
      ],
      team: ['Dr. Laura Baker', 'Dr. Richard Carter', 'Dr. Samantha Evans']
    }
  };

  const handleFocusClick = (focusTitle: string) => {
    const focusData = focusDetails[focusTitle];
    if (focusData) {
      setSelectedFocus(focusData);
      setIsModalOpen(true);
    }
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setSelectedFocus(null);
  };

  return (
    <section id="research" className={styles.section}>
      <div className={styles.container}>
        <div className={styles.header}>
          <h2 className={styles.title}>research_</h2>
          <p className={styles.description}>
            Mathematical frameworks for understanding emergence in distributed systems.
          </p>
        </div>

        <div className={styles.grid}>
          {researchAreas.map((area) => (
            <div key={area.id} className={styles.card}>
              <div className={styles.cardHeader}>
                <div className={styles.titleRow}>
                  <h3 className={styles.areaTitle}>{area.title}</h3>
                  <span className={styles.statusBadge}>{area.status}</span>
                </div>
                <p className={styles.areaDescription}>
                  {area.description}
                </p>
              </div>
              <div className={styles.cardContent}>
                <div className={styles.focus}>
                  <h4 className={styles.focusTitle}>research_focus_</h4>
                  <div className={styles.focusTags}>
                    {area.focus.map((item, index) => (
                      <button
                        key={index}
                        className={styles.focusTag}
                        onClick={() => handleFocusClick(item)}
                      >
                        {item}
                      </button>
                    ))}
                  </div>
                </div>
                <div className={styles.actions}>
                  <button className={styles.button}>[ view_publications ]</button>
                  <button className={styles.button}>[ details ]</button>
                </div>
              </div>
            </div>
          ))}
        </div>

        <ResearchModal
          isOpen={isModalOpen}
          onClose={closeModal}
          focus={selectedFocus}
        />
      </div>
    </section>
  );
};

export default ResearchSection;
