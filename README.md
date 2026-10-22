# Shadow Fight game simulator

## Intro
This is the project taken seriously as part of the course MUAM 24-25. It is a lab 3(or 4) according to the program.
**Idea:** The simulation of shadow fight 2 in THA web.
Check if variable areLocationsQuality in game_logic.js on top of the script is set true to change the quality videos to the good(not necessary at all).
Pls wait until repo is cloned, video take a lot of space)

## Presentation instructions
How to gain the progress in the game to show the working application:
- grind progress on the tournament location - it almost immediately gives +1 progress pts
- progress = 5 - For fighting the Lynx Boss bodyguard
- progress = 10 - For fighting the Lynx Boss
- have no idea how to unbound the strong sync of localStorage with the server

## Key Ideas
I'm a little bit proud of this project as here I tried to implement OOP concept.
- 2 main classes representing the data of this small app
- tried to isolate the UI logic by moving the necessary UI logic to the class

# Resources & Progress

```mermaid
classDiagram
    class Resources {
        +green_orbs: number
        +red_orbs: number
        +purple_orbs: number
        +gold: number
        +sensei_respect: number
        +constructor(resources)
    }

    class Progress {
        +resources: Resources
        +progress: number
        +bosses_defeated: string[]
        +constructor(config)
    }

    Progress --> Resources : contains
```

## Client-Side State Management (Inheritance Pattern)

```mermaid
classDiagram
    class Progress {
        +resources: Resources
        +progress: number
        +bosses_defeated: string[]
        +constructor(config)
    }

    class UIProgress {
        +constructor(args)
        +increase_progress(resources, time_played, progress_gained)
        +fix_boss_defeat(boss_name)
        +save_progress()
        +load_progress()
        +update_resources_visually()
        +reset_progress()
    }

    Progress <|-- UIProgress : extends
    UIProgress --> DOM : manipulates
    UIProgress --> Server : syncs with
```

## Server Architecture

```mermaid
classDiagram
    class ExpressServer {
        -progress: Progress
        +constructor()
        +setupMiddleware()
        +setupRoutes()
        +start()
    }

    class ProgressController {
        +getProgress(req, res)
        +saveProgress(req, res)
    }

    ExpressServer --> Progress : maintains
    ExpressServer --> ProgressController : handles routes
```

---

## Component Interaction Diagram

```mermaid
graph TB
    subgraph "Server Layer"
        Server[Express Server]
        API[Progress API Endpoints]
    end

    subgraph "Client Core"
        Progress[Progress Class]
        UIProgress[UIProgress Class]
        Resources[Resources Class]
    end

    subgraph "Game Logic Modules"
        GameLogic[game_logic.js<br/>UI System Controller]
        DojoLogic[dojo_logic.js]
        ...[....js]
        WinningDojo[winning_dojo_logic.js]
    end

    subgraph "External Storage"
        LocalStorage[(localStorage)]
        ServerStorage[(Server Memory)]
    end

    UIProgress -->|extends| Progress
    Progress -->|contains| Resources

    GameLogic -->|instantiates| UIProgress
    DojoLogic -->|uses| UIProgress
    BossLogic -->|uses| UIProgress
    ... --> |...| UIProgress
    WinningDojo -->|checks| UIProgress

    UIProgress -->|saves to| LocalStorage
    UIProgress -->|syncs with| API
    API -->|updates| ServerStorage
    Server -->|serves| Progress
```
