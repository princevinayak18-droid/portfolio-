# S3 Deployment Guide - How I Will Deploy When Credits Reset

## Problem: Netlify Credits Over (Oct 2025)
- Email: "Your team can't ship to production"
- Reason: 300/300 credits used
- Solution: Used [skip netlify] to save builds = FinOps!

## S3 Solution (No Credits Needed)
1. Create S3 Bucket: chetanay-portfolio
2. Enable "Static Website Hosting"
3. Upload files from project-06-s3-portfolio
4. Apply lifecycle.json (90 days auto-delete)
5. Add CloudFront for HTTPS

## Cost Comparison - Why Recruiters Will Love This
| Platform | Cost per Deploy | Monthly |
|----------|----------------|---------|
| Netlify | 15 credits (~$0.15) | $7-10 |
| AWS S3 | $0.001 | $0.02 |
| Savings | 99% | FinOps Win! |

## Current Status
- Built on Phone with [skip netlify]
- Will go LIVE on Nov 1 when credits reset
- Portfolio still LIVE at chetanay-bca.netlify.app

Interview Line: "I faced production block, implemented cost-saving with skip flags and designed S3 migration"
