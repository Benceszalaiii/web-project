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
interface DriverData {
    driver_number: number;
    broadcast_name: string;
    full_name: string;
    name_acronym: string;
    team_name: string;
    team_colour: string;
    first_name: string;
    last_name: string;
    headshot_url: string;
    country_code: string;
    session_key: number;
    meeting_key: number;
}
export declare function getSessionByDriver(driver: DriverData): Promise<void>;
export declare function getDriverById(driverId: number): Promise<void>;
export declare function drawDriverCard(data: DriverLocal, side: Side): void;
export {};
