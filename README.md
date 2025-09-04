# Weather App  

A secure web app that shows weather for predefined cities.  
Built with **React (frontend)**, **Express.js (backend)**, and **Auth0** authentication (with MFA).  

---

## Features  
- Weather info (city, condition, temperature)  
- Responsive UI (desktop & mobile)  
- API responses cached for 5 minutes  
- Auth0 login with MFA (email)  
- Access restricted to registered users only  

---

## Tech Stack  
- **Frontend:** React, @auth0/auth0-react, CSS  
- **Backend:** Express.js, Axios, dotenv, express-oauth2-jwt-bearer  
- **APIs:** OpenWeatherMap, Auth0  
- **Other:** Node.js, in-memory cache  

---

## Setup  

### Prerequisites  
- Node.js v14  
- npm v6  
- OpenWeatherMap API key  
- Auth0 account  

### Backend Setup  
```bash
cd server
cp .env.example .env   # add your API key & Auth0 details
npm install
npm start   # runs on http://localhost:1308
```

### Frontend Setup  
```bash
cd client
npm install
# configure Auth0 in src/index.js
npm start   # runs on http://localhost:3000
```

---

## Auth0 Configuration  
1. Create **Single Page Application** → get Domain & Client ID.  
2. Create **API** → copy Audience value.  
3. Enable **MFA (Email)** in Authentication > Multifactor Auth.  
4. Disable **Signups** in Database Connections.  
5. Create user:  
   ```
   Email: careers@fidenz.com
   Password: Pass#fidenz
   ```

---

## Testing  
- Login with test user → verify MFA email.  
- Weather data displays for all cities.  
- UI responsive (desktop & mobile).  
- Cached data served if within 5 mins.  
- /api/weather works only with valid token.  

---

## Notes  
- `.env` files are ignored in Git.  
- Caching uses in-memory Map (simple, small-scale).  
