import { DeliveryRoute, RouteType, TransportType } from 'src/app/frontend-datamodels/delivery-route';

const onlyCar: RouteType = {
    priority: 1,
    car: true,
    plane: false,
    ship: false
};

const carWithAll: RouteType = {
    priority: 3,
    car: true,
    ship: true,
    plane: true
};
const carWithPlane: RouteType = {
    priority: 2,
    car: true,
    ship: false,
    plane: true
};

export const ROUTES: DeliveryRoute[] = [
    {
        id: 1, route: 'Tanger - Marrakesh - Dakar - Sierra Leone', price: 24, totalTime: 20, tracking: true, routeType: onlyCar, routes:
            [{
                step: 1,
                startLocation: 'Tanger',
                endLocation: 'Sierra Leone',
                time: 20,
                transportType: TransportType.Car
            }]
    },
    {
        id: 2, route: 'Tanger - Marrakesh - Sierra Leone', price: 40, totalTime: 15, tracking: false, routeType: carWithPlane, routes:
            [{
                step: 1,
                startLocation: 'Tanger',
                endLocation: 'Marrakesh',
                time: 10,
                transportType: TransportType.Car
            },
            {
                step: 2,
                startLocation: 'Marrakesh',
                endLocation: 'Sierra Leone',
                time: 5,
                transportType: TransportType.Plane
            }
            ]
    },
    { id: 3, route: 'Tanger - Marrakesh - Dakar - Sierra Leone', price: 30, totalTime: 18, tracking: false, routeType: carWithAll, routes:
    [{
        step: 1,
        startLocation: 'Tanger',
        endLocation: 'Marrakesh',
        time: 5,
        transportType: TransportType.Plane
    },
    {
        step: 2,
        startLocation: 'Marrakesh',
        endLocation: 'Dakar',
        time: 3,
        transportType: TransportType.Car
    },
    {
        step: 3,
        startLocation: 'Dakar',
        endLocation: 'Sierra Leone',
        time: 10,
        transportType: TransportType.Ship
    }
    ] },
];
