interface DriverLocal {
    driver_id: number;
    full_name: string;
    name_acronym: string;
    team: string;
    headshot_url: string;
}
export declare function scrollHandler(a: Event): number;
declare enum Side {
    LEFT = "left",
    RIGHT = "right"
}
export declare function getDriverById(id: number, side: Side): void;
export declare function drawDriverCard(data: DriverLocal, side: Side): void;
export {};
