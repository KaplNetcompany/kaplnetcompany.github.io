export interface DeliveryRoute {
    id: number;
    route: string;
    price: number;
    totalTime: number;
    tracking: boolean;
    routeType: RouteType;
    routes: Location[];
}

export interface RouteType {
    priority: number;
    car: boolean;
    ship: boolean;
    plane: boolean;
}

export interface Location {
    step: number;
    startLocation: string;
    endLocation: string;
    time: number;
    transportType: TransportType;
}

export enum TransportType {
    Car,
    Ship,
    Plane
}
