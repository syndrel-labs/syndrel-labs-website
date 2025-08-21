'use client';

import { useState } from 'react';
import ResearchModal from '../components/ResearchModal';
import SectionDetailsModal from '../components/SectionDetailsModal';
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

interface SectionDetails {
  title: string;
  subtitle: string;
  overview: {
    goals: string[];
    scope: string[];
  };
  researchFocuses: string[];
  deliverables: string[];
  strategicImportance: {
    darpaRelevance: string[];
    dualUse: string[];
  };
  publications?: string[];
}

const ResearchSection = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedFocus, setSelectedFocus] = useState<ResearchFocus | null>(null);
  const [isSectionModalOpen, setIsSectionModalOpen] = useState(false);
  const [selectedSection, setSelectedSection] = useState<SectionDetails | null>(null);

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

  // Section details data for the section details modal
  const sectionDetails: Record<string, SectionDetails> = {
    'Topological MARL': {
      title: 'Topological MARL',
      subtitle: 'Multi-agent reinforcement learning structured by the geometric and categorical foundations of space, flow, and compositional reasoning.',
      overview: {
        goals: [
          'Develop geometric frameworks for multi-agent coordination',
          'Create categorical structures for policy composition',
          'Build robust coordination protocols under partial observability'
        ],
        scope: [
          'We explore sheaf theory, homology, and related structures to encode partial observations and shared memory',
          'This includes manifold policy optimization and graph networks as learnable sheaves',
          'Focus on decentralized, dynamic, and degraded conditions without hardcoded protocols'
        ]
      },
      researchFocuses: [
        'Topological Abstractions for Coordination',
        'Geometric Learning in Multi-Agent Systems',
        'Categorical Structures in Policy Composition'
      ],
      deliverables: [
        'Prototype framework for geometric coordination protocols',
        'Simulated multi-agent systems with topological structure',
        'Agent-based policy composition tools'
      ],
      strategicImportance: {
        darpaRelevance: [
          'Enables robust coordination in contested environments',
          'Supports autonomous systems that adapt to dynamic conditions'
        ],
        dualUse: [
          'Applicable to distributed robotics and autonomous vehicles',
          'Useful for network optimization and resource allocation'
        ]
      },
      publications: [
        'Sheaf-Based Representations for Multi-Agent Systems (ICLR 2023)',
        'Persistent Homology in Policy Learning (NeurIPS 2022)',
        'Geometric Deep Learning: Grids, Groups, Graphs, Geodesics (Bronstein et al.)'
      ]
    },
    'Neural Architecture Search': {
      title: 'Neural Architecture Search',
      subtitle: 'Teams of intelligent agents co-develop novel deep learning architectures through specialized design roles.',
      overview: {
        goals: [
          'Enable agents to collaboratively construct and refine shared models',
          'Develop self-modifying computational architectures',
          'Create emergent specialization in topology and capacity allocation'
        ],
        scope: [
          'We focus on collaborative model construction where agents build shared representations',
          'This includes agent-driven architecture design and role-based optimization',
          'Explores distributed optimization and local feedback for architecture decisions'
        ]
      },
      researchFocuses: [
        'Collaborative Model Construction',
        'Agent-Driven Architecture Design',
        'Role-Based Optimization'
      ],
      deliverables: [
        'Framework for collaborative model construction',
        'Self-organizing architecture search algorithms',
        'Role-based optimization tools for agent teams'
      ],
      strategicImportance: {
        darpaRelevance: [
          'Advances automated design of neural systems',
          'Enables adaptive computational architectures'
        ],
        dualUse: [
          'Applicable to automated machine learning and AI system design',
          'Useful for distributed computing and edge AI optimization'
        ]
      },
      publications: [
        'Joint Model Learning in Distributed Systems (2022)',
        'Self-Organizing Architectures for Agent Systems (2024)',
        'Multi-Agent NAS via Local Evaluation (2023)'
      ]
    },
    'Quantum Information and Nanosystems': {
      title: 'Quantum Information and Nanosystems',
      subtitle: 'Multi-objective architecture search for nanoscale systems and quantum information processing.',
      overview: {
        goals: [
          'Explore algorithm-hardware co-design strategies for emergent nanoscale devices',
          'Develop quantum-classical hybrid computational workflows',
          'Optimize architectures at nanometer scale for energy efficiency'
        ],
        scope: [
          'We explore algorithm-hardware co-design strategies for emergent nanoscale devices',
          'This includes quantum circuits, photonic interconnects, and neuromorphic layouts',
          'Focus on physical constraints that dominate system behavior at nanoscale'
        ]
      },
      researchFocuses: [
        'Quantum-Classical Co-Design',
        'Nanoscale Architecture Optimization',
        'Integrated System-Level Design'
      ],
      deliverables: [
        'Prototype framework for architecture evolution under physical constraints',
        'Simulated hardware layout optimization for entangled systems',
        'Agent-based topological design exploration'
      ],
      strategicImportance: {
        darpaRelevance: [
          'Enhances U.S. leadership in quantum tech and resilient low-power computing',
          'Advances secure communications and quantum sensing capabilities'
        ],
        dualUse: [
          'Enables dual-use capabilities across defense, energy, and communications',
          'Applicable to quantum computing, cryptography, and sensor networks'
        ]
      },
      publications: [
        'Quantum-Classical Co-Design Methods (2024)',
        'Learning-Aided Chip Layout Optimization (2023)',
        'Cross-Layer Optimization for Adaptive Systems (2024)'
      ]
    },
    'AI-Orchestrated Interaction with Securities Master Systems': {
      title: 'AI-Orchestrated Interaction with Securities Master Systems',
      subtitle: 'A multi-paradigm AI system designed to streamline securities research through structured reasoning and intelligent data access.',
      overview: {
        goals: [
          'Create interfaces that align with analyst mental models and workflows',
          'Build automated systems for trustworthy reference data management',
          'Develop context-aware exploration tools for financial instruments'
        ],
        scope: [
          'We focus on human-in-the-loop principles to reduce cognitive overhead',
          'This includes ML-based entity resolution with domain-specific ontologies',
          'Explores graph traversal, vector-based search, and symbolic reasoning for financial data'
        ]
      },
      researchFocuses: [
        'Analyst-Centric Data Interfaces',
        'Intelligent Reference Data Access',
        'Context-Aware Knowledge Exploration for Financial Instruments'
      ],
      deliverables: [
        'Adaptive interfaces for financial analysis workflows',
        'Intelligent pipelines for entity resolution and data cleaning',
        'Context-aware exploration tools for complex financial products'
      ],
      strategicImportance: {
        darpaRelevance: [
          'Enables rapid analysis of complex financial systems and market dynamics',
          'Supports decision-making in high-stakes financial environments'
        ],
        dualUse: [
          'Applicable to financial services, risk management, and regulatory compliance',
          'Useful for intelligence analysis and economic security'
        ]
      },
      publications: [
        'Designing Interfaces for Data-Driven Reasoning (2024)',
        'ML for Entity Resolution and Reference Integrity (2022)',
        'Contextual Reasoning in Financial Knowledge Graphs (2023)'
      ]
    }
  };

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
      definition: 'The process by which multiple agents jointly construct, refine, or assemble a shared model or hypothesis about the environment, task structure, or coordination protocol.',
      overview: 'Instead of assuming a fixed model of the environment or behavior, agents collaborate to discover the structure of their joint task. This includes shared representations of goals, dynamics, and reward decomposition. It enables more flexible adaptation to new tasks and allows specialization to emerge through collective inference and mutual correction. Agents build a scaffold for learning, together.',
      significance: 'In Syndrel\'s systems, agents don\'t just act — they help build the system they\'re acting in. By collaborating on the construction of their shared model, they reduce misalignment, accelerate learning, and adapt more readily to novel settings. This is foundational for building communication topologies that evolve with task demands.',
      publications: [
        'Joint Model Learning in Distributed Systems (2022)',
        'Collective Perception in Cooperative Agents (2023)'
      ],
      team: ['Dr. Michael Chang', 'Dr. Emily Davis', 'Dr. Robert Lee']
    },
    'Agent-Driven Architecture Design': {
      title: 'Agent-Driven Architecture Design',
      researchArea: 'Neural Architecture Search',
      definition: 'A framework in which agents participate in the design and optimization of their own computational architectures — including their policy networks, communication channels, or internal modules.',
      overview: 'Traditional architecture search treats the system as static. Here, we invert the paradigm: agents co-design the architecture they inhabit. Through distributed optimization and local feedback, agents determine how to structure their own decision-making and communication mechanisms. This blends neural architecture search with self-modifying systems.',
      significance: 'At Syndrel, the agents aren\'t just learning policies — they\'re learning how to build the systems that enable those policies. This allows emergent specialization in topology, capacity allocation, and internal memory structure. It\'s key to enabling adaptive coordination at scale.',
      publications: [
        'Self-Organizing Architectures for Agent Systems (2024)',
        'Multi-Agent NAS via Local Evaluation (2023)'
      ],
      team: ['Dr. Jennifer White', 'Dr. Kevin Johnson', 'Dr. Amanda Taylor']
    },
    'Role-Based Optimization': {
      title: 'Role-Based Optimization',
      researchArea: 'Neural Architecture Search',
      definition: 'An approach where agents are assigned or discover roles — such as scout, relay, or executor — and optimize behavior not only individually but with respect to their function in the team.',
      overview: 'In complex systems, agents may benefit from functional differentiation. Rather than treating all agents identically, role-based optimization allows them to specialize in subfunctions that collectively maximize global reward. These roles may be fixed, dynamic, or learned, and they shape everything from exploration patterns to communication bandwidth.',
      significance: 'Syndrel\'s framework encourages emergent organization. By embedding role differentiation into the optimization process, we enable more efficient division of labor and reduce redundant computation. It also stabilizes coordination in larger teams, as agents converge on complementary strategies.',
      publications: [
        'Emergent Roles in Cooperative MARL (2022)',
        'Functional Specialization in Distributed Policies (2023)'
      ],
      team: ['Dr. Christopher Miller', 'Dr. Jessica Garcia', 'Dr. Daniel Anderson']
    },
    'Quantum-Classical Co-Design': {
      title: 'Quantum-Classical Co-Design',
      researchArea: 'Quantum Information and Nanosystems',
      definition: 'A methodology for designing hybrid systems that tightly integrate quantum and classical components in a single computational workflow.',
      overview: 'Rather than treating quantum systems as black-box accelerators, co-design aligns classical algorithms with quantum resources to unlock synergies in speed, efficiency, and robustness. It explores joint algorithmic structures, classical error mitigation strategies, and hybrid training loops that span classical and quantum layers.',
      significance: 'Syndrel explores quantum-inspired approaches for control and coordination. Co-design ensures that our architectures remain forward-compatible with emerging quantum hardware while improving optimization efficiency in classical simulation. It\'s a bridge between today\'s infrastructure and tomorrow\'s potential.',
      publications: [
        'Quantum-Classical Co-Design Methods (2024)',
        'Hybrid Quantum Algorithms (2023)',
        'Quantum Error Correction Integration (2023)'
      ],
      team: ['Dr. Sophia Martinez', 'Dr. Ryan Clark', 'Dr. Nicole Adams']
    },
    'Nanoscale Architecture Optimization': {
      title: 'Nanoscale Architecture Optimization',
      researchArea: 'Quantum Information and Nanosystems',
      definition: 'The process of optimizing computational architectures at the scale of nanometers, including for chip design, energy efficiency, and interconnect structures.',
      overview: 'At the nanoscale, physical constraints dominate system behavior. This field explores how learning algorithms can guide architectural decisions — from layout to logic — to improve performance, minimize energy, or enhance fault tolerance. It includes gradient-based search over physical primitives and reinforcement-guided circuit adaptation.',
      significance: 'Syndrel\'s agent-based optimization tools can be applied to chip design workflows, treating hardware itself as a coordination problem. This brings MARL and communication learning into nanoscale design environments where components must act together under constraint.',
      publications: [
        'Learning-Aided Chip Layout Optimization (2023)',
        'Reinforcement Learning for Hardware Design (2022)'
      ],
      team: ['Dr. Thomas Wright', 'Dr. Michelle Lopez', 'Dr. Steven Hall']
    },
    'Integrated System-Level Design': {
      title: 'Integrated System-Level Design',
      researchArea: 'Quantum Information and Nanosystems',
      definition: 'A holistic design approach that optimizes the interaction between subsystems — computation, communication, control — as part of a unified architecture.',
      overview: 'Rather than optimizing subsystems in isolation, system-level design considers cross-layer feedback, resource tradeoffs, and shared constraints. This includes co-optimizing software with hardware, aligning control policies with communication protocols, and tuning architectures to balance performance and adaptability.',
      significance: 'Syndrel\'s SDK spans learning, communication, and coordination. System-level design allows us to embed these layers into a single adaptive loop, ensuring agents don\'t just act — they adapt across the stack. It\'s the glue that binds modular intelligence into coherent systems.',
      publications: [
        'Cross-Layer Optimization for Adaptive Systems (2024)',
        'System-Level Learning in Autonomous Architectures (2023)'
      ],
      team: ['Dr. Brian Scott', 'Dr. Ashley Turner', 'Dr. Matthew Phillips']
    },
    'Analyst-Centric Data Interfaces': {
      title: 'Analyst-Centric Data Interfaces',
      researchArea: 'AI-Orchestrated Interaction with Securities Master Systems',
      definition: 'Interfaces designed to surface insights, patterns, and actions in ways that align with the mental models and workflows of human analysts.',
      overview: 'Analysts don\'t just need data — they need relevance. This research explores how to build interfaces that adapt to intent, query structure, and investigation history. It draws on interactive ML, semantic search, and UI/UX design grounded in human-in-the-loop principles to reduce cognitive overhead and accelerate understanding.',
      significance: 'Syndrel\'s intelligence tools aren\'t just for agents — they serve humans, too. We focus on making complex coordination and system outputs explainable and usable by analysts and operators, especially in high-stakes domains like finance, defense, and research.',
      publications: [
        'Designing Interfaces for Data-Driven Reasoning (2024)',
        'Interactive ML Systems for Analysts (2023)'
      ],
      team: ['Dr. Katherine Moore', 'Dr. Andrew Jackson', 'Dr. Rebecca Lewis']
    },
    'Intelligent Reference Data Access': {
      title: 'Intelligent Reference Data Access',
      researchArea: 'AI-Orchestrated Interaction with Securities Master Systems',
      definition: 'Automated systems that surface, clean, and link entity-level data across sources to create trustworthy reference datasets.',
      overview: 'Reference data is often scattered, inconsistent, and outdated. This work focuses on intelligent pipelines that unify identifiers, detect anomalies, and maintain provenance. It blends ML-based entity resolution with domain-specific ontologies and auditability tools to ensure trust and traceability.',
      significance: 'Coordinated agents require clean, consistent grounding in the world they operate in. Whether linking drones to geofences or firms to securities, Syndrel needs reliable reference layers to anchor higher-order decisions and planning.',
      publications: [
        'ML for Entity Resolution and Reference Integrity (2022)',
        'Auditable Data Infrastructure in Financial Systems (2023)'
      ],
      team: ['Dr. William Harris', 'Dr. Elizabeth Young', 'Dr. Joshua Martin']
    },
    'Context-Aware Knowledge Exploration for Financial Instruments': {
      title: 'Context-Aware Knowledge Exploration for Financial Instruments',
      researchArea: 'AI-Orchestrated Interaction with Securities Master Systems',
      definition: 'Systems that dynamically adjust retrieval and reasoning behavior based on the structure, lifecycle, and domain of financial instruments.',
      overview: 'Exploration here means more than search — it\'s navigation across interconnected data, regulations, market events, and instrument types. This research combines graph traversal, vector-based search, and symbolic reasoning to deliver rich, contextualized answers about complex financial products.',
      significance: 'Syndrel builds tools for understanding emergent behaviors and latent patterns. In finance, this translates to tools that surface risks, dependencies, or opportunities across products — empowering analysts and autonomous systems alike to reason through uncertainty.',
      publications: [
        'Contextual Reasoning in Financial Knowledge Graphs (2023)',
        'Exploratory Tools for Structured Finance (2024)'
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

  const handleSectionClick = (sectionTitle: string) => {
    const sectionData = sectionDetails[sectionTitle];
    if (sectionData) {
      setSelectedSection(sectionData);
      setIsSectionModalOpen(true);
    }
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setSelectedFocus(null);
  };

  const closeSectionModal = () => {
    setIsSectionModalOpen(false);
    setSelectedSection(null);
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
                  <button
                    className={styles.button}
                    onClick={() => handleSectionClick(area.title)}
                  >
                    [ details ]
                  </button>
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

        <SectionDetailsModal
          isOpen={isSectionModalOpen}
          onClose={closeSectionModal}
          sectionDetails={selectedSection}
        />
      </div>
    </section>
  );
};

export default ResearchSection;
