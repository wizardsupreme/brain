---
title: Documentation Setup
---

# Documentation Setup Guide

This guide explains how to set up and run this documentation using MkDocs with Material theme.

## Prerequisites

1. **Python Installation**
   ```bash
   # Ubuntu/Debian
   sudo apt update
   sudo apt install python3 python3-pip

   # Add pip user bin to PATH (add to ~/.bashrc)
   echo 'export PATH="$HOME/.local/bin:$PATH"' >> ~/.bashrc
   source ~/.bashrc
   ```

## Setup

1. **Install MkDocs and Material Theme**
   ```bash
   # Install MkDocs Material theme (includes MkDocs)
   pip install mkdocs-material

   # Install additional extensions
   pip install mkdocs-material-extensions pymdown-extensions
   ```

2. **Repository Setup**
   ```bash
   # Clone the repository
   git clone https://github.com/wizardsupreme/brain.git
   cd brain
   ```

## Configuration

The documentation is configured through `mkdocs.yml`:

```yaml
# Project information
site_name: Wizard Supreme Second Brain
site_description: A curated collection of AI tools, frameworks, and resources
site_url: https://wizardsupreme.github.io/brain/

# Repository
repo_name: wizardsupreme/brain
repo_url: https://github.com/wizardsupreme/brain
edit_uri: edit/main/docs/

# Theme configuration
theme:
  name: material
  palette:
    # Dark mode
    - scheme: slate
      primary: indigo
      accent: indigo
      toggle:
        icon: material/brightness-4
        name: Switch to light mode
    # Light mode
    - scheme: default
      primary: indigo
      accent: indigo
      toggle:
        icon: material/brightness-7
        name: Switch to dark mode
  features:
    - navigation.instant
    - navigation.tracking
    - navigation.sections
    - navigation.expand
    - navigation.top
    - search.suggest
    - search.highlight
    - content.code.copy
```

## Directory Structure

```
brain/
├── docs/
│   ├── index.md              # Home page
│   ├── ai-research/          # AI Research section
│   │   ├── index.md         # Section overview
│   │   ├── ai-agents.md     # AI Agents documentation
│   │   ├── ai-models.md     # AI Models documentation
│   │   └── ai-ides.md       # AI IDEs documentation
│   └── development/         # Development section
│       ├── index.md         # Section overview
│       └── documentation-setup.md  # This guide
└── mkdocs.yml              # MkDocs configuration
```

## Running Locally

1. **Start Development Server**
   ```bash
   mkdocs serve
   ```

2. **Access the Site**
   - Open browser to [http://localhost:8000](http://localhost:8000)
   - Changes will auto-reload

## Building and Deployment

1. **Build the Site**
   ```bash
   mkdocs build
   ```

2. **GitHub Pages Deployment**
   ```bash
   mkdocs gh-deploy
   ```

## Common Issues

1. **Command Not Found**
   ```bash
   # If mkdocs command not found after installation
   export PATH="$HOME/.local/bin:$PATH"
   source ~/.bashrc
   ```

2. **Missing Dependencies**
   ```bash
   # Install any missing extensions
   pip install mkdocs-material-extensions pymdown-extensions
   ```

3. **Port Already in Use**
   ```bash
   # Use a different port
   mkdocs serve -a localhost:8001
   ```

## Writing Documentation

1. **Front Matter**
   ```yaml
   ---
   title: Page Title
   description: Optional description
   ---
   ```

2. **Code Blocks**
   ````markdown
   ```python
   def hello_world():
       print("Hello, World!")
   ```
   ````

3. **Admonitions**
   ```markdown
   !!! note
       This is a note admonition
   ```

4. **Links**
   ```markdown
   [Link Text](relative/path/to/file.md)
   ```

## Additional Resources

- [MkDocs Documentation](https://www.mkdocs.org/)
- [Material for MkDocs](https://squidfunk.github.io/mkdocs-material/)
- [Markdown Guide](https://www.markdownguide.org/)