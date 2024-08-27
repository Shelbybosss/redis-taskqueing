# Node Task Queue with Rate Limiting

## Overview

This project implements a Node.js API that features task queuing with rate limiting. It ensures that each user can only process one task per second and 20 tasks per minute. Any tasks exceeding these rate limits are queued and processed later.

## Setup

### Prerequisites

- Node.js
- npm (Node Package Manager)

### Installation

1. Clone the repository:
2. Install dependencies:
3. Start the server:

4. ## Usage

### API Endpoint

- **URL**: `http://localhost:3000/task`
- **Method**: POST

### Request Body

```json
{
"user_id": "123"
}


Testing with Postman

Open Postman.
Create a new HTTP request:

Set the method to POST.
Enter the URL: http://localhost:3000/task


Set headers:

Key: Content-Type
Value: application/json


In the request body:

Select 'raw' and choose JSON format.
Enter the request body (as shown above).


Click 'Send' to submit the request.
Check the response in the Postman interface.

Features

Task queuing system
Rate limiting: 1 task per second, 20 tasks per minute per user
Automatic queuing of tasks exceeding rate limits

Contributing
Contributions are welcome! Please feel free to submit a Pull Request.
License
This project is licensed under the MIT License.
