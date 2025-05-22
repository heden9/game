# Kill 100 Monsters If You Are a Real Man
> Created by bengi
- - -

Online Demo: [Click to Play](https://heden9.github.io/)

### Introduction
Creating small games has always been a dream of mine since childhood. I once wanted to learn C++ and use tools like Unity3D to make cool games. After learning front-end development, I had the idea of developing small games using JavaScript. This is just a small demo, and the gameplay might be lacking... `\(^o^)/~`

    Dedicated to my past self.

### Features
-   **Rendering Engine:** Uses HTML5 Canvas for the game's rendering engine, with JavaScript implementing the game logic.
-   **Performance:** Utilizes `requestAnimationFrame` to synchronize with the browser's rendering frames, ensuring strong performance.
-   **Sprite Technology:** Employs sprite sheets for handling complex animations, a crucial animation technique in H5 and a common solution for 2D games.
-   **Scoring System:** Players can save their game scores and compete with players worldwide (Note: world score competition functionality might depend on the backend of the original deployment).
-   **Weather System:** The game currently features floating clouds in the background, rain effects, and a wind system, all simulated as realistically as possible using JavaScript.
-   **Skill System:** The main character has four skills to unlock, plus a super ultimate move to face unknown challenges!

### How to Play

**Objective:** Survive as long as possible by shooting enemies and dodging their attacks. Accumulate points to unlock new abilities and achieve a high score.

**Controls:**
*   **Arrow Keys (Up, Down, Left, Right):** Move the player character.
*   **'X' Key:** Fire basic projectiles.
*   **'Z' Key:** Fire a stronger projectile (unlocked when score reaches 50 points).
*   **'R' Key:** Unleash a powerful laser attack (unlocked when score reaches 100 points). The character will remain stationary while firing.
*   **'A' Key + Up Arrow Key:** Launch a special fireball attack (unlocked when score reaches 200 points).
*   **'P' Key:** Resurrect if the player character dies and resurrections are available. Using a resurrection will reduce your score.

**Gameplay Tips:**
*   Pay attention to skill cooldowns, indicated by messages like "技能cd中.." (Skill on cooldown..).
*   Difficulty increases as your score gets higher. New enemy behaviors and skills will unlock.
*   Watch out for walls! Colliding with walls will damage you.

### Installation/Setup

To run the game locally:
1.  **Clone the Repository:**
    ```bash
    git clone <repository_url>
    ```
    (Replace `<repository_url>` with the actual URL of this Git repository.)
2.  **Navigate to Directory:**
    ```bash
    cd <repository_folder_name>
    ```
3.  **Open in Browser:**
    Open the `game.html` file in your web browser (e.g., Chrome, Firefox, Edge).

No special build steps or dependencies are required beyond a modern web browser that supports HTML5 Canvas and JavaScript.

### Screenshots

![Game Start Page](http://blog.bengiw.com:3000/screenshot/startpage.png)
![Gameplay Screenshot](http://blog.bengiw.com:3000/screenshot/game_big.png)

>   2016/12
