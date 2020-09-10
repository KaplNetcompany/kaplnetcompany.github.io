export interface Route {
    name: string;
    price: number;
    time: number;
    routeType: RouteType;
}

export interface RouteType {
    priority: number;
    car: boolean;
    boat: boolean;
    plane: boolean;
}
