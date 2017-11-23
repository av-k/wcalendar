import moment from 'moment';
import CalendarModel from '../models/calendar';
import UserModel from '../models/user';

class Calendar {
  // Switch route handle
  routesSwitcher = (req, res) => {
    res.setHeader('Content-Type', 'application/json');
    const indexUrl = req.originalUrl.replace(/^\/api\//, '');

    if (req.method === 'POST') {
      if (indexUrl === 'calendar') {
        this.handleCreate({req, res});
      }
    }
  };

  // Create event
  handleCreate = async (props = {}) => {
    const {req, res} = props;
    const body = req.body;
    const timeStart = +`${body.timeStart}`.substr(0, 10);
    const timeEnd = +`${body.timeEnd}`.substr(0, 10);
    let error;

    body.timeStart = moment.unix(timeStart).hours(0).minutes(0).seconds(0).milliseconds(0).toISOString();
    body.timeEnd = moment.unix(timeEnd).hours(0).minutes(0).seconds(0).milliseconds(0).toISOString();

    const calendar = await CalendarModel.create(body).catch(err => error = err.message);

    if (error) {
      const status = 400;

      return res
        .status(status)
        .send({
          error: { status, error }
        });
    }

    res.send({
      status: 200,
      data: calendar
    });
  };
}

export default new Calendar();
