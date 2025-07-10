# Ravant Media Merchant Payment Platform – Frontend (Next.js)

This is the **frontend implementation** for the Merchant Payment Platform assignment for Ravant Media (Dubai). The application is built with **Next.js (App Router)** and TypeScript, focusing on merchant authentication, dynamic invoice pages, and a scalable architecture for future payment features.

---

## Features

- **Merchant Login:**  
  Secure login page for merchants, accepting username/email and password. Authenticates against dummy data and returns merchant details and a dummy access token.

- **Invoices Dashboard:**  
  After login, merchants are redirected to their invoices dashboard page.

- **Dynamic Payment Pages:**  
  (Planned) Support for unique payment request pages, status display, and wallet-based payments.

- **Subdomain Routing (Planned):**  
  Architecture is being designed to support custom subdomains for merchant-branded invoice pages.

---

## Getting Started

### Prerequisites

- Node.js (v18+ recommended)
- npm or yarn

### Installation

```bash
git clone <repo-url>
```

```bash
cd <repo-directory>
```

```bash
npm install
```
or
```bash
yarn install
```

### Running the Development Server
```bash
npm run dev
```
or
```bash
yarn dev
```

Visit [http://localhost:9000](http://localhost:9000) in your browser.

---

## Project Structure

- src/
  - app/
    - merchant/
      - login/ # Merchant login page (username/email + password)
      - invoices/ # Merchant invoices dashboard (protected)
    - payer/
      - login/ # (If implemented) Payer login page
      - pay/[slug]/ # Dynamic payment request page
- lib/
  - auth.ts # Dummy authentication logic
- types/
  - users.ts # Dummy users and types

---


---

## Authentication Flow

1. **Merchant visits `/merchant/login`**
2. **Submits credentials** (username/email + password)
3. **API route `/api/merchant/login`** validates credentials against dummy data and returns:
   - `merchantName`
   - `merchantId`
   - `accessToken` (dummy)
4. **On success:**  
   Merchant is redirected to `/merchant/invoices`

---

## Dummy Users

The app uses hardcoded users for demo purposes. See `src/types/users.ts` for details.

| Username | Password | Role    |
|----------|----------|---------|
| payer    | 1234     | payer   |
| payee1   | 1234     | payee   |
| payee2   | 1234     | payee   |

---

## Planned Features

- Dynamic payment request pages (`/pay/[id]`)
- Payment status monitoring
- Wallet-based payment triggers
- Real-time invoice updates
- Webhook notification system
- Custom domain/subdomain support for branded invoice pages

---

## Tech Stack

- **Next.js (App Router)**
- **TypeScript**
- (Planned) Integration with Go backend (Gin + Gorm)

---

## Notes

- This is a demo/prototype for technical evaluation.
- No real authentication or payment processing is implemented yet.
- Subdomain routing and backend integration are planned for future iterations.

---

## Contact

For questions or clarifications, please contact  
**Naman M.**  
Email: <namanmishraec1045@gmail.com>
