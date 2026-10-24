# Project 06 - AWS S3 Portfolio Hosting + Cost Optimization

## What I Learned from Project 05
- Netlify consumed 285 credits in 19 deploys (15 credits/deploy)
- Learned about 90-day deploy deletion policy
- Now implementing same concept on AWS S3

## Architecture
- S3 Bucket: `chetanay-portfolio-2025`
- Static Hosting: index.html
- Lifecycle Rule: Delete old versions after 90 days (same as Netlify!)
- Cost: $0.023/GB vs Netlify 15 credits/deploy

## Why S3?
1. Cheaper than Netlify for static sites
2. 99.99% uptime
3. Industry-standard AWS service used by Netflix, Airbnb
4. Lifecycle = Auto cleanup (FinOps)

Live: https://chetanay-bca.netlify.app (will migrate to S3)
BCA 1st Sem | Built on Phone
