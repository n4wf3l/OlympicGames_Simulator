# 🏅 Olympic Games 2024 Match Simulator (Paris)

Welcome to the Olympic Games 2024 match simulator! 🥳 This project is designed to simulate the football tournament at the 2024 Summer Olympics in Paris. This simulator allows you to track the group stage matches, manage team standings, and simulate the knockout stages leading to the finals.

## Why It's Useful

This project provides a comprehensive and engaging way to simulate the football tournament of the Olympic Games 2024. It has several potential applications and benefits, particularly for sports media and organizations:

- **Interactive Fan Engagement**: Media outlets like Foot Mercato or L'Équipe can use this simulator to create interactive content for their readers. Fans can predict match outcomes, track their favorite teams, and engage in discussions. This level of interaction can significantly boost user engagement and website traffic.

- **Prediction Contests**: The simulator can be used to organize prediction contests where fans can submit their forecasts for match results. The media outlet or organization can offer rewards for the most accurate predictions, further increasing user participation and excitement.

- **Educational Tool**: The simulator can serve as an educational tool for new fans of the sport, helping them understand the structure of the tournament, the progression of matches, and the excitement of the Olympic Games.

- **Marketing and Promotion**: For the Olympic Games organization, this tool can be a powerful marketing asset. It can be used to generate buzz and excitement leading up to the event, offering fans a taste of the action before the games begin.

- **Community Building**: By providing a platform where fans can share their predictions and opinions, this project helps in building a vibrant community of football enthusiasts who are actively engaged with the Olympic Games.

- **Real-Time Updates**: Integrating this simulator with real-time match updates during the Olympic Games can offer fans an interactive way to follow the tournament, making the experience more immersive and dynamic.

## Project Overview
The Olympic Games 2024 Football Simulator is a web application built using Vue.js. It aims to provide users with an interactive way to simulate the football matches, update scores, and visualize the progression of teams from the group stages to the finals.

### Homepage Overview
Upon arrival, users land on the homepage, which contains all essential information about the 2024 Olympic Football tournament.
A prominent button in the center of the page invites users to proceed to the simulator.

👇 The image below does not show the entire page. Under the button, you will find information about 'About the Olympic Games', 'Football at the Olympics', 'Group Stage', 'Knockout Stage', 'Historical Context', 'Key Dates', and 'Additional Information'.

![image](https://github.com/user-attachments/assets/742b9305-da6a-4319-9952-9c2c6e2473e1)

### Group Stage Overview
Clicking the button takes users to the simulator, where they can see an overview of all group stage matches.
Users can enter their predictions for each match. It is mandatory to provide a prediction for every match to ensure comprehensive participation.
Once predictions are made, users validate their scores and proceed by clicking on "Go to the Quarter Finals."

The system automatically generates standings based on the user’s predictions, displaying rankings for each of the four groups. The top two teams from each group advance to the quarterfinals as follows:
- 1A vs. 2B
- 1B vs. 2A
- 1C vs. 2D
- 1D vs. 2C

👇 Below is a responsive image in the form of an iPhone 12 Pro.
  
![image](https://github.com/user-attachments/assets/6f91c2c6-4b33-4b72-a132-da373cd177c4)
![image](https://github.com/user-attachments/assets/5f637095-9044-42b3-a9d4-f3604a293077)

### Quarter Finals to Finals Predictions
On the next page, a blank knockout bracket is presented with the qualified teams from the quarterfinals.
Users are free to input their predictions for each match up to the final and the third-place match.
Upon completion, the system generates a podium displaying Gold, Silver, and Bronze winners based on the user’s predictions.
A "screenshot" button is provided for users to capture their predictions and share them with friends.

👇 As you can see below, all scores must be validated before you can input scores for the next round, and so on. The screenshot button and the podium will not appear until the third-place match and the final have been validated.

![image](https://github.com/user-attachments/assets/3a984677-c44d-4859-aeef-5a1e8eccd0a1)
![image](https://github.com/user-attachments/assets/4d68e4e0-fecd-4ef6-9840-042b427bb7a5)
![image](https://github.com/user-attachments/assets/56d136d4-57f5-4405-b0a6-8a68d2a7ba27)

## Features
- 🔄 Real-time match simulation
- 📊 Score and ranking tracking
- 🌍 View groups and qualified teams
- 📸 Screenshot capability
- 📱 Responsive Design
  
### Prerequisites
- Node.js and npm installed on your machine.
- Git installed on your machine.
  
## Installation
1. Clone the repository: `git clone https://github.com/n4wf3l/olympic-games-simulator.git`
2. Navigate to the project directory: `cd olympic-games-simulator`
3. Install dependencies: `npm install -g @vue/cli` and `npm install vue-router`
4. Start the application: `npm run serve`
5. Open your browser and go to http://localhost:8080 to view the application.
  
## Contribution
Contributions are welcome! Fork the repository, create a feature branch, commit your changes, push the branch, and open a Pull Request.

## License
This project is licensed under the Commercial License. See the [LICENSE](LICENSE) file for details.

## About the Developer
### NA Innovations
The Olympic Games Simulator was developed in 2024 by Nawfel Ajari of NA Innovations. This project was created with a dual purpose: to provide a lucrative tool for tracking Olympic football events as the 2024 Games approach, and to allow Nawfel to gain hands-on experience with Vue.js, a powerful front-end framework. Nawfel's passion for football and web development drove the creation of this project, aiming to combine the excitement of sports with the latest web technologies.

### Contact
For any questions or feedback, please contact us at info@nainnovations.be.
