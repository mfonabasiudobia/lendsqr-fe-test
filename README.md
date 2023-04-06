#Frontend Developer Test
This is a solution to the frontend developer test by LendSQR. It is hosted on Vercel at https://mfonabasi-isaac-udobia-lendsqr-fe-test.vercel.app.

#Technologies Used
The project was built with the following technologies:

Nextjs - A React.js Framework for building user interfaces.
TypeScript - A strongly typed programming language that builds on JavaScript.
Axios - A promise-based HTTP client for making API requests.
SASS - For Styling

#Possible Links

1. https://mfonabasi-isaac-udobia-lendsqr-fe-test.vercel.app - Login Page
2. https://mfonabasi-isaac-udobia-lendsqr-fe-test.vercel.app/dashboard/users - Users List Page
3. https://mfonabasi-isaac-udobia-lendsqr-fe-test.vercel.app/dashboard/users/{id} - User Details Page

#Project Structure/ Architecture

I decided to adopt an enterprise level Architecture for the project which is the ATOMIC Design Pattern. The project is structured using the Atomic Design pattern, which consists of five distinct stages:

Atoms - The smallest building blocks of the design system. Examples of atoms include buttons, inputs, and labels.
Molecules - Combinations of atoms that form a more complex element. Examples of molecules include forms, search bars, and navigation menus.
Organisms - Groups of molecules that form a distinct section of a page. Examples of organisms include headers, footers, and product listings.
Templates - The basic layout for a page that defines the placement of organisms. Examples of templates include landing pages, product pages, and checkout pages.
Pages - The final stage where templates are populated with content to create a fully functional web page.

#Running the Application
To run the application locally, follow these steps:

Clone the repository to your local machine.

Install the dependencies by running npm install or yarn install in the project root directory.

Start the development server by running npm start or yarn start in the project root directory.

#Conclusion
This is a basic implementation of the LendSQR frontend developer test. The project can be extended by adding more features and improving the user interface.

#Important Features/Details I think was left out in the design

1. There are some important features/details that I believe were not included in the design, such as implementing a dark mode.
2. I noticed that there was no dropdown menu available when users clicked on the profile photo icon.
3. Although the requirements called for the use of local storage or Index DB to retrieve user details, I decided to follow best practices and fetch the details whenever the user visited the page using getServerSideProps in Next.js to ensure that the details were always up-to-date.
4. One issue I encountered was that the API did not include a status field. In this case I will reach out to the backend developer for assistance with this.
5. It would be advisable to encrypt the user's ID in the API to protect sensitive information.
6. Instead of passing data between parent and child components using props, in a real-life project for the company, I would use Redux Toolkit for state management.
7. The API was missing some important information such as marital status, children, and email/relationship of the guarantor. In this case, I will contact the backend team for support.
