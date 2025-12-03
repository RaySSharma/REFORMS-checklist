import React, { useState } from 'react';
import { ChecklistItem } from './types';
import './ChecklistItemComponent.css';

interface Props {
  item: ChecklistItem;
  itemNumber: number;
  onStatusChange: (id: string, completed: boolean) => void;
  isCompleted: boolean;
}

export const ChecklistItemComponent: React.FC<Props> = ({
  item,
  itemNumber,
  onStatusChange,
  isCompleted,
}) => {
  const [showGuideline, setShowGuideline] = useState(false);

  return (
    <div className={`checklist-item ${isCompleted ? 'completed' : ''}`}>
      <div className="item-header">
        <div className="item-checkbox-title">
          <input
            type="checkbox"
            className="item-checkbox"
            checked={isCompleted}
            onChange={(e) => onStatusChange(item.id, e.target.checked)}
            aria-label={`Mark item ${item.id} as ${
              isCompleted ? 'incomplete' : 'complete'
            }`}
          />
          <span className="item-number">{item.id}</span>
          <h4 className="item-title">{item.title}</h4>
        </div>
        <button
          className={`guideline-toggle ${showGuideline ? 'open' : ''}`}
          onClick={() => setShowGuideline(!showGuideline)}
          aria-expanded={showGuideline}
          title={showGuideline ? 'Hide guideline' : 'Show guideline'}
        >
          📖
        </button>
      </div>

      {showGuideline && (
        <div className="guideline-content">
          <div className="guideline-header">
            <strong>📋 Guideline for {item.id}</strong>
          </div>
          <div className="guideline-text">
            {item.guideline.split('\n\n').map((paragraph, idx) => (
              <p key={idx}>{paragraph}</p>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};
