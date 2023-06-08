JSON (games/allGamemodes.json):
``` JSON
{
        "code": 20,
        "name": "TESTING ONLY",
        "description": "TESTING ONLY",
        "allowedPlayers": [
            1,
            2,
            3
        ],
        "timer": 0
    },
```

Switch statement (gamemodeSelector.ts):
``` TypeScript
case 20:
            // Custom
            assignments = {A: "test"};
            break;
```