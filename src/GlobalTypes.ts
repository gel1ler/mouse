export type TSetBool = (value: boolean) => void

export type TCard = {
    src: string;
    name: string;
    date: string;
    pos: { x: number, y: number };
}