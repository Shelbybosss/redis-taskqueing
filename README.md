# Node Task Queue with Rate Limiting

## Overview
This project is a Node.js API that implements task queuing with rate limiting. Each user can only process one task per second and 20 tasks per minute. Any tasks exceeding the rate limit are queued and processed later.

## Setup

1. Install dependencies:
   ```bash
   npm install
