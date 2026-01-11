# Quick Deployment Script for GitHub Pages
# Run this in PowerShell

Write-Host "🚀 Ahmed Abdelwahed Portfolio - GitHub Pages Deployment" -ForegroundColor Cyan
Write-Host "========================================================" -ForegroundColor Cyan
Write-Host ""

# Check if git is initialized
if (-not (Test-Path .git)) {
    Write-Host "✓ Initializing Git repository..." -ForegroundColor Green
    git init
    Write-Host ""
}

# Check current status
Write-Host "📊 Current Git Status:" -ForegroundColor Yellow
git status --short
Write-Host ""

# Add all files
Write-Host "✓ Adding all files to staging..." -ForegroundColor Green
git add .
Write-Host ""

# Commit
$commitMessage = Read-Host "Enter commit message (or press Enter for default)"
if ([string]::IsNullOrWhiteSpace($commitMessage)) {
    $commitMessage = "Update portfolio - $(Get-Date -Format 'yyyy-MM-dd HH:mm')"
}

Write-Host "✓ Creating commit: $commitMessage" -ForegroundColor Green
git commit -m "$commitMessage"
Write-Host ""

# Check if remote exists
$remoteExists = git remote | Select-String -Pattern "origin"

if (-not $remoteExists) {
    Write-Host "⚠ No remote repository found!" -ForegroundColor Yellow
    Write-Host ""
    Write-Host "Please follow these steps:" -ForegroundColor Cyan
    Write-Host "1. Create a new repository on GitHub: https://github.com/new" -ForegroundColor White
    Write-Host "2. Name it: abdelwahed22.github.io (or any name)" -ForegroundColor White
    Write-Host "3. DO NOT initialize with README" -ForegroundColor Red
    Write-Host ""
    
    $repoUrl = Read-Host "Enter your GitHub repository URL (e.g., https://github.com/username/repo.git)"
    
    if (-not [string]::IsNullOrWhiteSpace($repoUrl)) {
        Write-Host "✓ Adding remote origin..." -ForegroundColor Green
        git remote add origin $repoUrl
        Write-Host ""
    } else {
        Write-Host "❌ No URL provided. Please add remote manually:" -ForegroundColor Red
        Write-Host "   git remote add origin https://github.com/username/repo.git" -ForegroundColor Yellow
        Write-Host ""
        exit
    }
}

# Set main branch
Write-Host "✓ Setting main branch..." -ForegroundColor Green
git branch -M main
Write-Host ""

# Push to GitHub
Write-Host "🚀 Pushing to GitHub..." -ForegroundColor Cyan
try {
    git push -u origin main
    Write-Host ""
    Write-Host "✅ SUCCESS! Your portfolio is now on GitHub!" -ForegroundColor Green
    Write-Host ""
    Write-Host "Next Steps:" -ForegroundColor Cyan
    Write-Host "1. Go to your repository on GitHub" -ForegroundColor White
    Write-Host "2. Navigate to Settings → Pages" -ForegroundColor White
    Write-Host "3. Under Source, select 'main' branch and '/ (root)' folder" -ForegroundColor White
    Write-Host "4. Click Save" -ForegroundColor White
    Write-Host "5. Wait 2-5 minutes for deployment" -ForegroundColor White
    Write-Host "6. Visit your website! 🎉" -ForegroundColor White
    Write-Host ""
    Write-Host "📝 Read DEPLOYMENT.md for complete SEO setup and search engine submission!" -ForegroundColor Yellow
    Write-Host ""
}
catch {
    Write-Host "❌ Error pushing to GitHub:" -ForegroundColor Red
    Write-Host $_.Exception.Message -ForegroundColor Red
    Write-Host ""
    Write-Host "Common solutions:" -ForegroundColor Yellow
    Write-Host "- Make sure you're logged in to Git (git config user.name & user.email)" -ForegroundColor White
    Write-Host "- Check your internet connection" -ForegroundColor White
    Write-Host "- Verify repository URL is correct" -ForegroundColor White
    Write-Host "- Use 'git push -u origin main --force' if needed (careful!)" -ForegroundColor White
}
