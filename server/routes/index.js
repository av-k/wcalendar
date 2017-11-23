import { Router } from 'express';
import CalendarController from '../controllers/calendar';

const routes = new Router();

routes.all(/^\/api\/calendar/, CalendarController.routesSwitcher);

export default routes;
