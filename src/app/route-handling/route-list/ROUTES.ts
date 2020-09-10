import { Route, RouteType } from 'src/app/datamodels/route';

const onlyCar: RouteType = {
    priority: 1,
    car: true,
    plane: false,
    boat: false
};

const carWithall: RouteType = {
    priority: 3,
    car: true,
    boat: true,
    plane: true
};
const carWithPlane: RouteType = {
    priority: 2,
    car: true,
    boat: false,
    plane: true
};

export const ROUTES: Route[] = [
    {name: 'route1', price: 24, time: 20, routeType: onlyCar},
    {name: 'route2', price: 40, time: 15, routeType: carWithPlane},
    {name: 'route3', price: 30, time: 18, routeType: carWithPlane},
];
