# Update Score API

## Description
This API provides functionality to update and retrieve a user's score.  
- **POST** `/update-score` → Updates user score and determines if they won a prize.  
- **GET** `/get-score/:userId` → Retrieves the user's current score and prize count.

---

## **Endpoints**

### **1. POST `/update-score`**  
Updates the user's score based on random logic and determines if they won a prize.

#### **Request Body**
Send a JSON object with the following structure:
```json
{
  "userId": "unique_user_id"
}
