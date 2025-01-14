# Publishing Documentation with GitHub Pages

A guide to hosting documentation and personal sites using GitHub Pages.

## Quick Start

1. **Repository Setup**
   ```bash
   # Create a new repository or use existing one
   git clone <your-repo-url>
   cd <your-repo>
   ```

2. **Enable GitHub Pages**
   - Go to repository Settings → Pages
   - Source: Deploy from a branch
   - Branch: main (or gh-pages) → /(root) or /docs
   - Save

## Hosting Options

### Option 1: Basic GitHub Pages
- **Best for**: Simple documentation sites
- **Setup**:
  - Place markdown files in root or /docs directory
  - Use README.md as index page
  - Enable in repository settings

### Option 2: Jekyll (Built-in Support)
- **Best for**: Blog-like documentation
- **Setup**:
  ```bash
  # Install Jekyll
  gem install bundler jekyll

  # Create new site
  jekyll new docs
  cd docs

  # Test locally
  bundle exec jekyll serve
  ```
- **Key Files**:
  - `_config.yml`: Site configuration
  - `_posts/`: Blog posts
  - `_pages/`: Static pages

### Option 3: Modern Documentation Frameworks
- **MkDocs**
  ```bash
  # Install
  pip install mkdocs
  
  # Create project
  mkdocs new .
  
  # Build
  mkdocs build
  
  # Deploy
  mkdocs gh-deploy
  ```

- **Docusaurus**
  ```bash
  # Create project
  npx create-docusaurus@latest my-docs classic
  
  # Deploy
  GIT_USER=<username> yarn deploy
  ```

## Custom Domain Setup

1. **Add Domain**
   - Create `CNAME` file in repository:
     ```
     yourdomain.com
     ```

2. **DNS Configuration**
   - Add these records to your domain provider:
     ```
     Type  | Name  | Value
     A     | @     | 185.199.108.153
     A     | @     | 185.199.109.153
     A     | @     | 185.199.110.153
     A     | @     | 185.199.111.153
     CNAME | www   | <username>.github.io
     ```

## Best Practices

1. **Organization**
   - Use clear directory structure
   - Keep related documents together
   - Include README.md in each folder

2. **Navigation**
   - Create table of contents
   - Use consistent linking
   - Implement search if possible

3. **Maintenance**
   - Regular updates
   - Version control
   - Link checking

## Common Issues & Solutions

1. **404 Errors**
   - Check repository settings
   - Verify branch name
   - Ensure files are in correct location

2. **Build Failures**
   - Check build logs in Actions tab
   - Verify dependencies
   - Test locally before pushing

3. **Custom Domain Issues**
   - Wait for DNS propagation (48 hours max)
   - Verify CNAME file
   - Check DNS records

## Tools & Resources

- **Markdown Editors**:
  - Visual Studio Code
  - Typora
  - HackMD

- **Documentation Generators**:
  - MkDocs
  - Docusaurus
  - VuePress
  - Jekyll

- **Useful Extensions**:
  - GitHub Pages
  - Markdown All in One
  - markdownlint

## Further Reading

- [GitHub Pages Documentation](https://docs.github.com/en/pages)
- [Jekyll Documentation](https://jekyllrb.com/docs/)
- [MkDocs Documentation](https://www.mkdocs.org/)
- [Docusaurus Documentation](https://docusaurus.io/docs) 