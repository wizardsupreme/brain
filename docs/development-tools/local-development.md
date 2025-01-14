# Local Development Guide

This guide explains how to run and test the documentation site locally.

## Prerequisites

1. **Ruby Installation**
   ```bash
   # Ubuntu/Debian
   sudo apt-get install ruby-full build-essential zlib1g-dev

   # macOS (using Homebrew)
   brew install ruby
   ```

2. **Configure Ruby Gems Installation Path**
   ```bash
   echo '# Install Ruby Gems to ~/gems' >> ~/.bashrc
   echo 'export GEM_HOME="$HOME/gems"' >> ~/.bashrc
   echo 'export PATH="$HOME/gems/bin:$PATH"' >> ~/.bashrc
   source ~/.bashrc
   ```

## Setup

1. **Install Jekyll and Bundler**
   ```bash
   gem install jekyll bundler
   ```

2. **Install Dependencies**
   ```bash
   # Navigate to repository
   cd brain

   # Install dependencies
   bundle install
   ```

## Running Locally

1. **Start Development Server**
   ```bash
   bundle exec jekyll serve
   ```

2. **Access the Site**
   - Open browser to [http://localhost:4000/brain/](http://localhost:4000/brain/)
   - Changes will auto-reload (except _config.yml)

## Common Issues

1. **Bundle Install Errors**
   ```bash
   # If you get permissions errors
   bundle config set --local path 'vendor/bundle'
   bundle install
   ```

2. **Port Already in Use**
   ```bash
   # Use different port
   bundle exec jekyll serve -P 4001
   ```

3. **Dependencies Issues**
   ```bash
   # Clean and reinstall
   rm Gemfile.lock
   bundle install
   ```

## Testing Changes

1. Check internal links work
2. Verify navigation structure
3. Test search functionality
4. Ensure code blocks are formatted correctly 