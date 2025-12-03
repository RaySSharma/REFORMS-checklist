import React, { useState, useEffect } from 'react';
import data from '../data.json';
import { ChecklistData } from './types';
import { ModuleComponent } from './ModuleComponent';
import './App.css';

export const App: React.FC = () => {
  const [completedItems, setCompletedItems] = useState<Set<string>>(new Set());
  const [expandedModules, setExpandedModules] = useState<Set<number>>(new Set([1]));

  const checklistData = data as ChecklistData;

  // Load from localStorage on mount
  useEffect(() => {
    const savedCompleted = localStorage.getItem('reformsCompleted');
    const savedExpanded = localStorage.getItem('reformsExpanded');

    if (savedCompleted) {
      setCompletedItems(new Set(JSON.parse(savedCompleted)));
    }
    if (savedExpanded) {
      setExpandedModules(new Set(JSON.parse(savedExpanded)));
    }
  }, []);

  // Save to localStorage whenever state changes
  useEffect(() => {
    localStorage.setItem('reformsCompleted', JSON.stringify(Array.from(completedItems)));
  }, [completedItems]);

  useEffect(() => {
    localStorage.setItem('reformsExpanded', JSON.stringify(Array.from(expandedModules)));
  }, [expandedModules]);

  const handleStatusChange = (id: string, completed: boolean) => {
    const newCompleted = new Set(completedItems);
    if (completed) {
      newCompleted.add(id);
    } else {
      newCompleted.delete(id);
    }
    setCompletedItems(newCompleted);
  };

  const toggleModule = (moduleId: number) => {
    const newExpanded = new Set(expandedModules);
    if (newExpanded.has(moduleId)) {
      newExpanded.delete(moduleId);
    } else {
      newExpanded.add(moduleId);
    }
    setExpandedModules(newExpanded);
  };

  const allItems = checklistData.modules.flatMap((m) => m.items);
  const totalCompleted = Array.from(completedItems).filter((id) =>
    allItems.some((item) => item.id === id)
  ).length;
  const overallProgress = Math.round((totalCompleted / allItems.length) * 100);

  const expandAll = () => {
    setExpandedModules(new Set(checklistData.modules.map((m) => m.id)));
  };

  const collapseAll = () => {
    setExpandedModules(new Set());
  };

  const resetProgress = () => {
    if (window.confirm('Are you sure you want to reset all progress?')) {
      setCompletedItems(new Set());
      localStorage.removeItem('reformsCompleted');
    }
  };

  return (
    <div className="app-container">
      <header className="app-header">
        <div className="header-content">
          <h1>🔬 REFORMS Checklist</h1>
          <p className="subtitle">
            Reporting standards for ML-based science — Interactive Guide
          </p>
        </div>
        <div className="header-info">
          <a
            href="https://reforms.cs.princeton.edu"
            target="_blank"
            rel="noopener noreferrer"
            className="header-link"
          >
            Official REFORMS Site →
          </a>
        </div>
      </header>

      <div className="app-content">
        <aside className="sidebar">
          <div className="sidebar-card">
            <div className="progress-section">
              <h3>Overall Progress</h3>
              <div className="large-progress-bar">
                <div
                  className="progress-fill"
                  style={{ width: `${overallProgress}%` }}
                ></div>
              </div>
              <p className="progress-number">
                {totalCompleted} / {allItems.length} items completed
              </p>
              <p className="progress-percentage">{overallProgress}%</p>
            </div>

            <div className="actions-section">
              <h4>Actions</h4>
              <button className="action-button expand-btn" onClick={expandAll}>
                ▼ Expand All
              </button>
              <button className="action-button collapse-btn" onClick={collapseAll}>
                ▲ Collapse All
              </button>
              <button className="action-button reset-btn" onClick={resetProgress}>
                🔄 Reset Progress
              </button>
            </div>

            <div className="tips-section">
              <h4>💡 Tips</h4>
              <ul>
                <li>Click module headers to expand/collapse</li>
                <li>Click 📖 to view detailed guidelines</li>
                <li>Check items as you complete them</li>
                <li>Progress is saved automatically</li>
              </ul>
            </div>
          </div>
        </aside>

        <main className="main-content">
          <div className="modules-grid">
            {checklistData.modules.map((module) => (
              <ModuleComponent
                key={module.id}
                module={module}
                completedItems={completedItems}
                onStatusChange={handleStatusChange}
                isExpanded={expandedModules.has(module.id)}
                onToggleExpand={() => toggleModule(module.id)}
              />
            ))}
          </div>
        </main>
      </div>

      <footer className="app-footer">
        <p>
          REFORMS Checklist by Kapoor et al. • Built with React + TypeScript •{' '}
          <a
            href="https://reforms.cs.princeton.edu/"
            target="_blank"
            rel="noopener noreferrer"
          >
            Website
          </a>
        </p>
      </footer>
    </div>
  );
};
