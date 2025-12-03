# REFORMS Checklist Web App

An interactive web application for navigating and completing the REFORMS (Reporting Standards for ML-based Science) checklist with integrated guidelines.

## About REFORMS

The REFORMS checklist provides comprehensive reporting standards for machine learning-based scientific research, covering 32 items across 8 modules:

1. **Study goals** - Population, motivation, and ML justification
2. **Computational reproducibility** - Dataset, code, infrastructure, README, and scripts
3. **Data quality** - Data sources, sampling, justification, and descriptive statistics
4. **Data preprocessing** - Sample exclusion, data cleaning, and transformations
5. **Modeling** - Model descriptions, justification, evaluation, and hyperparameter tuning
6. **Data leakage** - Train-test separation, dependencies, and feature legitimacy
7. **Metrics and uncertainty** - Performance metrics, uncertainty estimates, and statistical tests
8. **Generalizability and limitations** - External validity and applicability boundaries

Learn more at [reforms.cs.princeton.edu](https://reforms.cs.princeton.edu)

## Features

- ✅ **Interactive Checklist**: Check off items as you complete them
- 📖 **Integrated Guidelines**: Click any item to view detailed guidance
- 📊 **Progress Tracking**: Visual progress bars for overall and per-module completion
- 💾 **Auto-save**: Your progress is saved automatically to local storage
- 🎯 **Expandable Modules**: Collapse/expand modules to focus your workflow
- 📱 **Responsive Design**: Works seamlessly on desktop, tablet, and mobile
- 🎨 **Professional UI**: Clean, intuitive interface with visual hierarchy

## Getting Started

### Prerequisites

- Node.js 16+ and npm

### Installation

```bash
cd reforms-app
npm install
```

### Development

```bash
npm run dev
```

This starts a local development server at `http://localhost:5173` with hot module reloading.

### Build

```bash
npm run build
```

Produces an optimized production build in the `dist/` directory.

### Preview

```bash
npm run preview
```

Preview the production build locally before deployment.

## Project Structure

```
reforms-app/
├── src/
│   ├── App.tsx              # Main application component
│   ├── App.css              # Global styles
│   ├── ModuleComponent.tsx  # Module container component
│   ├── ModuleComponent.css  # Module styles
│   ├── ChecklistItemComponent.tsx  # Individual checklist item
│   ├── ChecklistItemComponent.css  # Item styles
│   ├── types.ts             # TypeScript interfaces
│   ├── main.tsx             # React entry point
│   └── index.css            # Base styles
├── data.json                # Checklist data with guidelines
├── index.html               # HTML template
├── vite.config.ts           # Vite configuration
├── tsconfig.json            # TypeScript configuration
└── package.json             # Dependencies and scripts
```

## Data Structure

The `data.json` file contains all checklist modules and items with their corresponding guidelines:

```json
{
  "modules": [
    {
      "id": 1,
      "title": "Study goals",
      "description": "...",
      "items": [
        {
          "id": "1a",
          "title": "Population or distribution...",
          "guideline": "..."
        }
      ]
    }
  ]
}
```

## Technologies

- **React 18**: UI framework
- **TypeScript**: Type safety
- **Vite**: Build tool and dev server
- **CSS 3**: Styling with modern features
- **Local Storage API**: Progress persistence

## Usage Tips

1. **Expand Modules**: Click module headers to expand and view checklist items
2. **View Guidelines**: Click the 📖 button next to each item to view detailed guidance
3. **Track Progress**: Check items as you complete them (auto-saves to local storage)
4. **Batch Actions**: Use "Expand All" or "Collapse All" buttons for quick navigation
5. **Reset Progress**: Start over with the "Reset Progress" button (with confirmation)

## Customization

To modify the checklist content, edit `data.json`. The structure is:

```json
{
  "modules": [
    {
      "id": number,
      "title": "Module Title",
      "description": "Module description text",
      "items": [
        {
          "id": "moduleNum.letter",
          "title": "Item title",
          "guideline": "Detailed guideline text"
        }
      ]
    }
  ]
}
```

## Browser Support

- Chrome/Edge: Latest 2 versions
- Firefox: Latest 2 versions
- Safari: Latest 2 versions
- Mobile browsers: Current versions

## Performance

- Lightweight: ~50KB gzipped
- Fast startup: <1s load time
- Smooth interactions: 60fps animations
- Optimized for offline use

## Contributing

This app is built to accompany the REFORMS paper. For suggestions or improvements:

1. Report issues or suggest enhancements
2. Submit pull requests with improvements
3. Share feedback at [reforms.cs.princeton.edu](https://reforms.cs.princeton.edu)

## License

The REFORMS project is published under CC BY. See the official REFORMS repository for licensing details.

## References

Kapoor et al. "Reporting standards for ML-based science." In preparation. [reforms.cs.princeton.edu](https://reforms.cs.princeton.edu)

Obermeyer et al. "Dissecting racial bias in an algorithm used to manage the health of populations." *Science*, 2019.

---

Built with ❤️ to support rigorous ML-based scientific research
