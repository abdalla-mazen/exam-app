# Exam App
[![Ask DeepWiki](https://devin.ai/assets/askdeepwiki.png)](https://deepwiki.com/abdalla-mazen/exam-app)

Exam App is a comprehensive online examination platform built with Next.js and TypeScript. It provides a full-featured user experience, from authentication and account management to taking timed exams and reviewing detailed results.

## Features

-   **Secure User Authentication**: Complete authentication flow including registration, login, and password reset (forget, verify, update) using NextAuth.js.
-   **Interactive Dashboard**: Users can browse available diplomas and exams. The diploma list features infinite scrolling for a seamless experience.
-   **Dynamic Exam Interface**: A step-by-step exam-taking process with multiple-choice questions, a real-time countdown timer, and a progress bar.
-   **Detailed Exam Results**: Upon completion, users see a results page with a visual pie chart breaking down correct and incorrect answers, along with a review of wrongly answered questions.
-   **Comprehensive Account Management**: A dedicated settings section where users can update their profile information, change their password, or delete their account.
-   **Responsive Design**: A modern, responsive UI built with Tailwind CSS and shadcn/ui, featuring a collapsible sidebar for easy navigation on all devices.
-   **Robust Client-Side Logic**: Efficient data fetching and state management with TanStack Query, and type-safe form handling with React Hook Form and Zod.

## Tech Stack

-   **Framework**: [Next.js](https://nextjs.org/) (App Router)
-   **Language**: [TypeScript](https://www.typescriptlang.org/)
-   **Authentication**: [NextAuth.js](https://next-auth.js.org/)
-   **Styling**: [Tailwind CSS](https://tailwindcss.com/) & [shadcn/ui](https://ui.shadcn.com/)
-   **Data Fetching & State**: [TanStack Query](https://tanstack.com/query/latest)
-   **Form Management**: [React Hook Form](https://react-hook-form.com/) & [Zod](https://zod.dev/)

## Project Structure

The project follows the standard Next.js App Router structure with logical separation of concerns.

```
└── src/
    ├── app/
    │   ├── (auth)/        # Authentication routes (login, register, etc.)
    │   ├── dashboard/     # Main application dashboard for authenticated users
    │   │   ├── @content/  # Parallel route for main page content
    │   │   └── @sidebar/  # Parallel route for the navigation sidebar
    │   └── api/           # API routes for backend communication
    ├── components/
    │   ├── ui/            # UI components from shadcn/ui
    │   └── providers/     # React context providers
    ├── hooks/             # Custom React hooks
    ├── lib/
    │   ├── actions/       # Server actions
    │   ├── apis/          # API fetching logic
    │   └── schemas/       # Zod validation schemas
    └── auth.ts            # NextAuth.js configuration
```




## Getting Started
Live demo
- https://exam-app-kappa.vercel.app/dashboard

Follow these instructions to set up and run the project locally.

1.  **Clone the repository:**
    ```bash
    git clone https://github.com/abdalla-mazen/exam-app.git
    cd exam-app
    ```

2.  **Install dependencies:**
    ```bash
    npm install
    # or
    yarn install
    # or
    pnpm install
    ```

3.  **Set up environment variables:**
    Create a file named `.env.local` in the root directory and populate it with the variables listed in the [Environment Variables](#environment-variables) section.

4.  **Run the development server:**
    ```bash
    yarn dev
    ```

5.  Open [http://localhost:3000](http://localhost:3000) with your browser to see the application. The app will automatically redirect you from the root to `/dashboard`.
