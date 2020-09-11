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
        id: 1, route: 'Cairo - Victoriasøen', price: 24, totalTime: 20, tracking: true, routeType: onlyCar, routes:
            [{
                step: 1,
                startLocation: 'Cairo',
                endLocation: 'Victoriasøen',
                time: 20,
                transportType: TransportType.Car
            }]
    },
    {
        id: 2, route: 'Tanger - Guldkysten', price: 40, totalTime: 15, tracking: false, routeType: carWithPlane, routes:
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
                endLocation: 'Guldkysten',
                time: 5,
                transportType: TransportType.Plane
            }
            ]
    },
    { id: 3, route: 'St. Helena - De Kanariske Øer', price: 30, totalTime: 18, tracking: false, routeType: carWithAll, routes:
    [{
        step: 1,
        startLocation: 'St. Helena',
        endLocation: 'Sierra Leone',
        time: 5,
        transportType: TransportType.Plane
    },
    {
        step: 2,
        startLocation: 'Sierra Leone',
        endLocation: 'Dakar',
        time: 3,
        transportType: TransportType.Car
    },
    {
        step: 3,
        startLocation: 'Dakar',
        endLocation: 'De Kanariske Øer',
        time: 10,
        transportType: TransportType.Ship
    }
    ] },
];
