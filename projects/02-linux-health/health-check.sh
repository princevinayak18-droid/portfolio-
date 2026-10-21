#!/bin/bash
echo "=== Chetanay BCA - Linux Health Report ==="
echo "Date: $(date)"
echo "---------------------------"
echo "Uptime:"
uptime
echo "---------------------------"
echo "Disk Usage:"
df -h
echo "---------------------------"
echo "Memory Usage:"
free -h
echo "---------------------------"
echo "CPU Load & Processes:"
top -bn1 | head -15
echo "=== End Report - BCA 1st Year ==="
