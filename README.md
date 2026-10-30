# Chetanay - BCA Cloud Portfolio
Live: https://portfolio-seven-gilt-73.vercel.app
**Student:** BCA First Year | Aspiring AWS Cloud Engineer | Delhi
**Email:** Princevinayak22@gmail.com
 
### 📸 LIVE PROOF - Deployed Project
Real deployment on Vercel (Same as AWS S3 + CloudFront)

![Live Proof](IMG_20261020_022256.png)

Project: chetanay-bca | Status: Published ✅ | 7 Deployments

---
## Overview
This portfolio demonstrates 5 core AWS Cloud Hosting Concepts using free tools (GitHub + Netlify + Linux).

### Project 1: AWS S3 Static Website + CloudFront Concept [LIVE ✓]
- **Concept:** How AWS S3 hosts static websites and CloudFront gives global CDN.
- **Implementation:** Hosted static portfolio on Netlify.
- **CI/CD Concept:** Same as AWS CodePipeline. Push to GitHub main branch -> Auto Deploy to Netlify -> Live.
  Live: https://portfolio-seven-gilt-73.vercel.app
- **Tech:** HTML, CSS, GitHub, Netlify CI/CD

### Project 2: AWS EC2 Linux Server Concept [DEMO RECORDED]
- **Concept:** How AWS EC2 launches a Linux Ubuntu instance and runs a web server on port 8000.
- **Implementation:** Used GitHub Codespace (Ubuntu Linux VM - same as EC2 Instance).
- **Commands Executed:**
  ```bash
  python3 -m http.server 8000
  # Server running on http://localhost:8000
  # Public URL: https://*.app.github.dev:8000


### Project 3: Docker + Nginx Containerization [LIVE ✅]
- **Concept:** How to containerize web apps with Docker (industry standard for Cloud/DevOps). Same as AWS ECS/Fargate concept.
- **Implementation:** Created Dockerfile with nginx:alpine, built image, ran container on port 8000.
- **Commands Executed:**
```bash
docker build -t chetanay-portfolio .
docker run -d -p 8000:80 chetanay-portfolio
# Live on: https://*.app.github.dev:8000 (Docker container)
```

### Project 4: Linux Health Check - SRE / CloudWatch Concept [LIVE ✅]
- **Concept:** How AWS CloudWatch monitors EC2 servers
- **Implementation:** Bash script checking uptime, disk, memory, CPU - built on phone
- **Commands:** chmod +x health-check.sh && ./health-check.sh
- **Tech:** Linux, Bash, SRE
  
### Project 5: DevOps Blog + CI/CD Pipeline [LIVE ✅]

- **Concept:** How AWS CodePipeline + CloudFront auto-deploy + How DevOps teams document journey via blogs. Same as personal branding for Cloud Engineers.
- **Implementation:** Created multi-page portfolio - Main page + Blog.html. Added GitHub Actions CI/CD workflow (.github/workflows/health-check.yml) that runs daily health check cron job at 9 AM. Every push to main auto-deploys to Netlify - same as S3 + CloudFront.
- **Key Features:**
    - Multi-page static hosting (index.html + Blog.html)
    - CI/CD - Push to main → Auto deploy
    - GitHub Actions - Daily cron `0 9 * * *`
    - Cost saving - Used `[skip netlify]` flag to save credits
    - 100% Built on phone from Delhi 📱
- **Live Link:** https://chetanay-bca.netlify.app
- **Blog Link:** https://chetanay-bca.netlify.app/Blog.html
- **Workflow File:** `.github/workflows/health-check.yml`
- **Tech:** HTML, GitHub Actions, YAML, CI/CD, Netlify, Cron Jobs
- **Commands Executed:**


### Project 6: Serverless Contact API - Lambda (Lambda + API Gateway Concept) ✓ LIVE

**Learned how AWS Lambda runs code without servers.**

**What I did:** `api/contact.js` -> Vercel auto-detects as serverless function -> `POST /api/contact` -> JSON response. Same as AWS Lambda + API Gateway + pay-per-request.

**Tech:** Serverless, Node.js, API Gateway Concept.

**Live Proof:** Test form at https://portfolio-seven-gilt-73.vercel.app#contact

**Code:**
```js
// api/contact.js
export default function handler(req, res) {
  if(req.method === 'POST') {
    return res.json({ success: true, message: "Message received!" })
  }
}
