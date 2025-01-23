import { Router } from 'express';
import {
  getTours,
  getTour,
  createTour,
  updateTour,
  deleteTour,
  aliasTopTours,
  getTourStats,
  getMonthlyPlan,
} from '../controllers/tourController.js';

const router = Router();

// router.param('id', checkId);

router.get('/top-5-cheap', aliasTopTours, getTours);

router.get('/stats', getTourStats);

router.get('/monthly-plan', getMonthlyPlan);

router.route('/').get(getTours).post(createTour);

router.route('/:id').get(getTour).patch(updateTour).delete(deleteTour);

export { router };
