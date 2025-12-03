import React, { useState } from 'react';
import { Module } from './types';
import { ChecklistItemComponent } from './ChecklistItemComponent';
import './ModuleComponent.css';

interface Props {
  module: Module;
  completedItems: Set<string>;
  onStatusChange: (id: string, completed: boolean) => void;
  isExpanded: boolean;
  onToggleExpand: () => void;
}

export const ModuleComponent: React.FC<Props> = ({
  module,
  completedItems,
  onStatusChange,
  isExpanded,
  onToggleExpand,
}) => {
  const completedCount = module.items.filter((item) =>
    completedItems.has(item.id)
  ).length;
  const progressPercentage = Math.round(
    (completedCount / module.items.length) * 100
  );

  return (
    <div className="module-container">
      <button
        className={`module-header ${isExpanded ? 'expanded' : ''}`}
        onClick={onToggleExpand}
        aria-expanded={isExpanded}
      >
        <div className="module-header-content">
          <div className="module-number">Module {module.id}</div>
          <div className="module-info">
            <h2 className="module-title">{module.title}</h2>
            <p className="module-description">{module.description}</p>
          </div>
        </div>
        <div className="module-progress">
          <div className="progress-bar">
            <div
              className="progress-fill"
              style={{ width: `${progressPercentage}%` }}
            ></div>
          </div>
          <span className="progress-text">
            {completedCount}/{module.items.length}
          </span>
        </div>
        <div className={`expand-icon ${isExpanded ? 'open' : ''}`}>▼</div>
      </button>

      {isExpanded && (
        <div className="module-content">
          <div className="items-list">
            {module.items.map((item) => (
              <ChecklistItemComponent
                key={item.id}
                item={item}
                itemNumber={module.id}
                onStatusChange={onStatusChange}
                isCompleted={completedItems.has(item.id)}
              />
            ))}
          </div>
        </div>
      )}
    </div>
  );
};
