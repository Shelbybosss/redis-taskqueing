# Node Task Queue with Rate Limiting

## Overview
This project is a Node.js API that implements task queuing with rate limiting. Each user can only process one task per second and 20 tasks per minute. Any tasks exceeding the rate limit are queued and processed later.

## Setup

1. Install dependencies:
   ```bash
   npm install


2. To check Node.js API in Postman, follow these steps:

Step 1: Open Postman
Launch Postman on your system.
Step 2: Create a New Request
Click on the "New" button (or "Create a request").
Choose "HTTP Request".
Step 3: Configure the Request
Method: Set the HTTP method to POST.

URL: Enter the URL for your API. 

bash
Copy code
http://localhost:3000/task
Headers: Add the Content-Type header:

Key: Content-Type
Value: application/json
Body: Switch to the Body tab and select raw.

Choose JSON as the format from the dropdown menu.
Enter your request body as a JSON object. For example:
json
Copy code
{
  "user_id": "123"
}
Step 4: Send the Request
Click on the Send button.
Postman will send the POST request to your Node.js API.
Step 5: Check the Response
After you send the request, you will see the response from your API in the Response section of Postman.
This should contain the output of your task function or any response you've set up in the Express route.