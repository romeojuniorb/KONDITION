
# KONDITION

KONDITION is a modern fitness and nutrition web application designed to help users track their fitness journey, plan meals and workouts, and connect with like-minded individuals. The application provides personalized tools for users to create meal plans, workout routines, and share posts about their progress.

## Features

### Fitness Tracking
- Generate personalized **Workout Plans** based on user input.
- Log workout routines and track fitness achievements.

### Nutrition Planning
- Generate **Meal Plans** tailored to user goals (e.g., weight loss, maintenance, weight gain).
- View a curated database of meals with nutritional information.

### User Interaction
- Create and share posts about workouts, meal plans, and general thoughts.
- Explore posts shared by other users in the community.

### Progress Visualization
- Visualize meal plans and workout routines in an easy-to-read format.
- Track key metrics like BMI and recommended calorie intake.

## Tools and Technologies

- **Frontend**: EJS (Embedded JavaScript) templates for rendering dynamic views.
- **Backend**: Node.js with Express.js framework.
- **Database**: MongoDB for data storage and retrieval.
- **Authentication**: Passport.js for secure user login and session management.
- **CSS Framework**: Bootstrap for responsive design and styling.

## Installation and Setup

### Prerequisites
- Node.js and npm installed.
- MongoDB instance running locally or in the cloud.

### Steps to Run Locally
1. Clone the repository:
   \`\`\`bash
   git clone https://github.com/romeojuniorb/KONDITION.git
   cd KONDITION
   \`\`\`

2. Install dependencies:
   \`\`\`bash
   npm install
   \`\`\`

3. Set up environment variables:
   Create a `.env` file in the root directory with the following variables:
   \`\`\`
   MONGO_URI=mongodb://localhost:27017/kondition
   SESSION_SECRET=your_secret_key
   \`\`\`

4. Seed the database (optional):
   \`\`\`bash
   node seeds/seedDatabase.js
   \`\`\`

5. Start the server:
   \`\`\`bash
   npm start
   \`\`\`
   The application will run at `http://localhost:3000`.

## Usage

### Navigation
- **Home**: Welcome page introducing the app and its features.
- **Explore**: View posts shared by other users.
- **Generate Meal Plan**: Create a personalized meal plan.
- **Generate Workout Plan**: Create a custom workout routine.
- **Dashboard**: View user information and quick links to key features.

### Authentication
- **Register**: Create an account to access personalized features.
- **Login**: Log in to generate plans and create posts.

## File Structure

### Key Directories
- `routes/`: Contains route definitions for user interactions.
- `views/`: EJS templates for rendering dynamic pages.
- `models/`: Mongoose models for MongoDB collections.
- `public/`: Static files like CSS and images.
- `utils/`: Utility functions and middleware for shared functionality.

## Future Enhancements

- **AI Integration**: Use machine learning to refine meal and workout recommendations based on user trends.
- **Progress Tracking**: Add charts and visualizations for user metrics.
- **Community Features**: Enable comments and likes on posts to foster engagement.


## Contributors

- **Nikhil** - Problem Definition and Project Introduction.
- **Daniel** - System Design.
- **Romeo** - Features, Details, and Performance Constraints.
- **Marushen** - User Interaction and Conclusion.
"""

