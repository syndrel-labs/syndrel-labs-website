import BaseModal from './BaseModal';
import styles from './PublicationsModal.module.css';

interface ResearchArea {
  id: number;
  title: string;
  description: string;
  focus: string[];
  publications: number;
  status: string;
}

interface ResearchFocus {
  title: string;
  researchArea: string;
  publications?: string[];
}

interface PublicationsModalProps {
  isOpen: boolean;
  onClose: () => void;
  researchArea: ResearchArea | null;
  focusDetails: Record<string, ResearchFocus>;
}

const PublicationsModal = ({ isOpen, onClose, researchArea, focusDetails }: PublicationsModalProps) => {
  if (!isOpen || !researchArea) return null;

  // For Topological MARL, organize by the specific categories provided
  const getTopologicalMARLCategories = () => {
    return {
      'Multi-Agent RL — communication & topology': [
        {
          title: 'HyperComm: Hypergraph-based communication in multi-agent reinforcement learning — Tianyu Zhu et al.',
          url: 'https://pubmed.ncbi.nlm.nih.gov/38901092/'
        },
        {
          title: 'VAIN: Attentional Multi-agent Predictive Modeling — Yedid Hoshen',
          url: 'https://proceedings.neurips.cc/paper_files/paper/2017/file/748ba69d3e8d1af87f84fee909eef339-Paper.pdf'
        },
        {
          title: 'TarMAC: Targeted Multi-Agent Communication — Abhishek Das et al.',
          url: 'https://proceedings.mlr.press/v97/das19a/das19a.pdf'
        },
        {
          title: 'Learning Attentional Communication for Multi-Agent Cooperation (ATOC) — Jiechuan Jiang & Zongqing Lu',
          url: 'https://arxiv.org/pdf/1805.07733'
        },
        {
          title: 'Learning when to communicate at scale in multiagent cooperative and competitive tasks (IC3Net) — Amanpreet Singh et al.',
          url: 'https://arxiv.org/pdf/1812.09755'
        },
        {
          title: 'Learning to Schedule Communication in Multi-Agent Reinforcement Learning (SchedNet) — Soo-Hwan Kim et al.',
          url: 'https://openreview.net/pdf?id=SJxu5iR9KQ'
        },
        {
          title: 'Learning Structured Communication for Multi-Agent Reinforcement Learning — Junjie Sheng et al.',
          url: 'https://www.ifaamas.org/Proceedings/aamas2023/pdfs/p436.pdf'
        }
      ],
      'Multi-Agent RL — hierarchy, symmetry & quantum': [
        {
          title: 'Self-Clustering Hierarchical Multi-Agent Reinforcement Learning with Extensible Cooperation Graph — Qingxu Fu et al.',
          url: 'https://arxiv.org/pdf/2403.18056'
        },
        {
          title: 'Symmetries-enhanced Multi-Agent Reinforcement Learning — Nikolaos Bousias et al.',
          url: 'https://arxiv.org/pdf/2501.01136'
        },
        {
          title: 'Multi-Agent Quantum Reinforcement Learning using Evolutionary Optimization — Michael Kölle et al.',
          url: 'https://arxiv.org/pdf/2311.05546'
        }
      ],
      'Sheaf theory & cellular-sheaf coordination': [
        {
          title: 'SIGMA: Sheaf-Informed Geometric Multi-Agent Pathfinding — Shuhua Liao et al.',
          url: 'https://arxiv.org/pdf/2502.06440'
        },
        {
          title: 'Distributed Multi-agent Coordination over Cellular Sheaves — Tyler Hanks et al.',
          url: 'https://arxiv.org/pdf/2504.02049'
        },
        {
          title: 'Sheaf theory: from deep geometry to deep learning — Anton Ayzenberg et al.',
          url: 'https://arxiv.org/pdf/2502.15476'
        },
        {
          title: 'Applied Sheaf Theory for Multi-agent Artificial Intelligence (Reinforcement Learning) Systems: A Prospectus — Eric Schmid',
          url: 'https://people.cs.uchicago.edu/~ericschmid/schmid-applied-sheaf-theory.pdf'
        }
      ],
      'Category-theoretic RL': [
        {
          title: 'Reinforcement Learning in Categorical Cybernetics — Jules Hedges & Riu Rodríguez Sakamoto',
          url: 'https://arxiv.org/pdf/2404.02688'
        }
      ],
      'Lie groups, symplectic geometry & flows': [
        {
          title: 'Flow Matching on Lie Groups — Finn M. Sherry & Bart M. N. Smets',
          url: 'https://arxiv.org/pdf/2504.00494'
        },
        {
          title: 'Introduction to Lie Groups and Lie Algebras — Alexander Kirillov Jr.',
          url: 'https://www.math.stonybrook.edu/~kirillov/mat552/liegroups.pdf'
        },
        {
          title: 'Symplectic geometric flows — Teng Fei & Duong H. Phong',
          url: 'https://arxiv.org/pdf/2111.14048'
        },
        {
          title: 'nLab: symplectic gradient — nLab contributors',
          url: 'https://ncatlab.org/nlab/show/symplectic+gradient'
        }
      ],
      'Sets, order, and attention — core ML building blocks': [
        {
          title: 'Deep Sets — Manzil Zaheer et al.',
          url: 'https://proceedings.neurips.cc/paper_files/paper/2017/file/f22e4747da1aa27e363d86d40ff442fe-Paper.pdf'
        },
        {
          title: 'Math 127: Posets — Mary Radcliffe',
          url: 'https://www.math.cmu.edu/~mradclif/teaching/127S19/Notes/Posets.pdf'
        },
        {
          title: 'Symmetric Dot-Product Attention for Efficient Training of BERT Language Models — Martin Courtois et al.',
          url: 'https://arxiv.org/pdf/2406.06366'
        }
      ]
    };
  };

  // For Neural Architecture Search, organize by the specific categories provided
  const getNeuralArchitectureSearchCategories = () => {
    return {
      'Neural Architecture Search (NAS) — Multi‑Agent & Collaboration': [
        {
          title: 'MANAS: Multi‑Agent Neural Architecture Search — Vasco Lopes et al.',
          url: 'https://arxiv.org/pdf/1909.01051'
        },
        {
          title: 'NADER: Neural Architecture Design via Multi‑Agent Collaboration — Zekang Yang et al.',
          url: 'https://openaccess.thecvf.com/content/CVPR2025/papers/Yang_NADER_Neural_Architecture_Design_via_Multi-Agent_Collaboration_CVPR_2025_paper.pdf'
        },
        {
          title: 'MARCO: Hardware‑Aware Neural Architecture Search for Edge Devices with Multi‑Agent Reinforcement Learning and Conformal Prediction Filtering — Arya Fayyazi, Mehdi Kamal, Massoud Pedram',
          url: 'https://arxiv.org/pdf/2506.13755'
        }
      ],
      'NAS — Benchmarks, Libraries & Methods': [
        {
          title: 'NAS‑Bench‑101: Towards Reproducible Neural Architecture Search — Chris Ying et al.',
          url: 'https://paperswithcode.com/paper/nas-bench-101-towards-reproducible-neural'
        },
        {
          title: 'NASLib (Neural Architecture Search library) — AutoML.org / NASLib contributors',
          url: 'https://github.com/automl/NASLib'
        },
        {
          title: 'Graph Embedding for Neural Architecture Search with Input‑Output Information — Gabriela Suchopárová & Roman Neruda',
          url: 'https://2022.automl.cc/wp-content/uploads/2022/07/graph_embedding_for_neural_arc.pdf'
        }
      ],
      'AutoML & Hyperparameter Optimization (HPO)': [
        {
          title: 'AutoML‑Zero: Evolving Machine Learning Algorithms From Scratch — Esteban Real et al.',
          url: 'https://arxiv.org/pdf/2003.03384'
        },
        {
          title: 'AutoML | Home — AutoML.org Team',
          url: 'https://www.automl.org/'
        },
        {
          title: 'Ray Tune: Hyperparameter Tuning — Ray Team',
          url: 'https://docs.ray.io/en/latest/tune/index.html'
        },
        {
          title: 'Hyperparameter tuning with Ray Tune (PyTorch Tutorials) — PyTorch Tutorials Team',
          url: 'https://docs.pytorch.org/tutorials/beginner/hyperparameter_tuning_tutorial.html'
        }
      ],
      'Reinforcement Learning (RL) & Multi‑Agent RL (MARL)': [
        {
          title: 'RLlib: Industry‑Grade, Scalable Reinforcement Learning — Ray Team',
          url: 'https://docs.ray.io/en/latest/rllib/index.html'
        },
        {
          title: 'ray‑project/ray — RLlib (repository) — Ray contributors',
          url: 'https://github.com/ray-project/ray/tree/master/rllib'
        },
        {
          title: 'Stable‑Baselines3 Docs — Reliable Reinforcement Learning Implementations — Stable‑Baselines3 contributors',
          url: 'https://stable-baselines3.readthedocs.io/en/master/'
        },
        {
          title: 'stable‑baselines3 (repository) — DLR‑RM & contributors',
          url: 'https://github.com/DLR-RM/stable-baselines3'
        },
        {
          title: 'MARLlib (repository) — Replicable‑MARL contributors',
          url: 'https://github.com/Replicable-MARL/MARLlib'
        },
        {
          title: 'Microsoft MARO: Multi‑Agent Resource Optimization (repository) — Microsoft',
          url: 'https://github.com/microsoft/maro'
        },
        {
          title: 'Learning Ray, Ch. 4: Reinforcement Learning with Ray RLlib (book chapter) — Max Pumperla, Edward Oakes, Richard Liaw',
          url: 'https://www.oreilly.com/library/view/learning-ray/9781098117214/ch04.html'
        }
      ],
      'Meta‑Learning & Few‑Shot Learning': [
        {
          title: 'Meta‑Dataset: A Dataset of Datasets for Learning to Learn from Few Examples — Eleni Triantafillou et al.',
          url: 'https://arxiv.org/pdf/1903.03096'
        },
        {
          title: 'Meta‑Dataset (dataset page) — Papers with Code',
          url: 'https://paperswithcode.com/dataset/meta-dataset'
        }
      ],
      'Topological Data Analysis & Computational Neuroscience': [
        {
          title: 'Two\'s company, three (or more) is a simplex: Algebraic‑topological tools for understanding higher‑order structure in neural data — Chad Giusti, Robert Ghrist, Danielle S. Bassett',
          url: 'https://link.springer.com/article/10.1007/s10827-016-0608-6'
        },
        {
          title: 'Barcodes: The persistent topology of data — Robert Ghrist',
          url: 'https://www2.math.upenn.edu/~ghrist/preprints/barcodes.pdf'
        }
      ],
      'Industry & Programs': [
        {
          title: 'Symbotic | Warehouse Automation for High Efficiency & Agility — Symbotic',
          url: 'https://www.symbotic.com/'
        },
        {
          title: 'Expedited Research Implementation Series (ERIS) — EverGlade Consulting',
          url: 'https://everglade.com/expedited-research-implementation-series-eris/'
        }
      ]
    };
  };

  const renderTopologicalMARLContent = () => {
    const categories = getTopologicalMARLCategories();
    return Object.entries(categories).map(([categoryName, publications]) => (
      <section key={categoryName} className={styles.section}>
        <h3 className={styles.sectionTitle}>{categoryName}</h3>
        <div className={styles.publicationsList}>
          {publications.map((pub, index) => (
            <div key={index} className={styles.publicationItem}>
              <span className={styles.pubNumber}>[{index + 1}]</span>
              <a
                href={pub.url}
                target="_blank"
                rel="noopener noreferrer"
                className={styles.pubLink}
              >
                {pub.title}
              </a>
            </div>
          ))}
        </div>
      </section>
    ));
  };

  const renderNeuralArchitectureSearchContent = () => {
    const categories = getNeuralArchitectureSearchCategories();
    return Object.entries(categories).map(([categoryName, publications]) => (
      <section key={categoryName} className={styles.section}>
        <h3 className={styles.sectionTitle}>{categoryName}</h3>
        <div className={styles.publicationsList}>
          {publications.map((pub, index) => (
            <div key={index} className={styles.publicationItem}>
              <span className={styles.pubNumber}>[{index + 1}]</span>
              <a
                href={pub.url}
                target="_blank"
                rel="noopener noreferrer"
                className={styles.pubLink}
              >
                {pub.title}
              </a>
            </div>
          ))}
        </div>
      </section>
    ));
  };

  const renderDefaultContent = () => {
    return (
      <section className={styles.section}>
        <h3 className={styles.sectionTitle}>Research Focus</h3>
        <div className={styles.focusList}>
          {researchArea.focus.map((focusTitle, index) => {
            const focus = focusDetails[focusTitle];
            return (
              <div key={index} className={styles.focusItem}>
                <h4 className={styles.focusTitle}>{focusTitle}</h4>
                {focus && focus.publications && focus.publications.length > 0 && (
                  <div className={styles.focusPublications}>
                    {focus.publications.map((pub, pubIndex) => (
                      <div key={pubIndex} className={styles.publicationItem}>
                        <span className={styles.pubNumber}>[{pubIndex + 1}]</span>
                        <span className={styles.pubText}>{pub}</span>
                      </div>
                    ))}
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </section>
    );
  };

  return (
    <BaseModal
      isOpen={isOpen}
      onClose={onClose}
      labelledById="publications-modal-title"
      describedById="publications-modal-description"
      contentClassName={styles.modal}
    >
      {/* Header */}
      <div className={styles.header}>
        <div className={styles.headerContent}>
          <div className={styles.titleBlock}>
            <h2 id="publications-modal-title" className={styles.title}>
              {researchArea.title}
            </h2>
            <p className={styles.subtitle}>{researchArea.description}</p>
          </div>
          <div className={styles.headerControls}>
            <span className={styles.escHint}>[ESC]</span>
            <button
              className={styles.closeButton}
              onClick={onClose}
              aria-label="Close modal"
            >
              <span className={styles.closeIcon}>×</span>
            </button>
          </div>
        </div>
      </div>

      {/* Modal Content */}
      <div id="publications-modal-description" className={styles.modalContent}>
        {researchArea.title === 'Topological MARL'
          ? renderTopologicalMARLContent()
          : researchArea.title === 'Neural Architecture Search'
          ? renderNeuralArchitectureSearchContent()
          : renderDefaultContent()
        }
      </div>

      {/* Footer */}
      <div className={styles.footer}>
        <button className={styles.closeButton} onClick={onClose}>
          [ close_modal ]
        </button>
      </div>
    </BaseModal>
  );
};

export default PublicationsModal;
