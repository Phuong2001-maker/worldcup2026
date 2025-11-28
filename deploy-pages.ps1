Param(
    [string]$ProjectName = "worldcup2026-site",
    [string]$Branch = "main"
)

Set-StrictMode -Version Latest
$ErrorActionPreference = "Stop"

if (-not (Get-Command wrangler -ErrorAction SilentlyContinue)) {
    Write-Error "Wrangler CLI is not installed. Install it with: npm install -g wrangler"
}

Write-Host "Deploying current workspace to Cloudflare Pages project '$ProjectName' ..." -ForegroundColor Cyan

wrangler pages deploy . --project-name $ProjectName --branch $Branch

Write-Host "Deployment command finished. Check the Cloudflare Pages dashboard for build status." -ForegroundColor Green
