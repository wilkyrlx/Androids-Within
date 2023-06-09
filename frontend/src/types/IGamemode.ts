
// frontend version
interface IGamemode {
    code: number;
    name: string;
    description: string;
    allowedPlayers: number[];
    timer: number;
    difficulty: number;
}

export default IGamemode;