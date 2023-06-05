interface IGameRules {
    players: string[];
    assignments: { [key: string]: string };
    assignRoles(): void;
}

export type { IGameRules };
