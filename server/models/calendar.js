import mongoose from 'mongoose';

const MAX_HOURS_AT_DAY = 8;
const Schema = mongoose.Schema;
const calendarSchema = new Schema({
  userId: {
    type: String,
    required: true
  },
  timeStart: {
    type: Date,
    required: true,
  },
  timeEnd: {
    type: Date,
    required: true,
  },
  hours: {
    type: Number,
    default: null,
    validate: {
      message: 'Incorrect hours for current date',
      validator(shareDay, done) {
        const {userId, timeStart} = this;
        const findParams = { userId, timeStart };

        Calendar.find(findParams, (err, calendars = []) => {
          let hours = 0;

          calendars.forEach(calendar => hours += calendar.hours);

          if (hours > MAX_HOURS_AT_DAY) return done(false);
          if (shareDay) return done(shareDay <= MAX_HOURS_AT_DAY && 1 <= shareDay);
        });
      },
    }
  },
  status: {
    type: String,
    required: true
  },
  note: String
}, {
  timestamps: true,
});

/**
 * User Methods
 */
calendarSchema.methods = {
  // create(body) {
  //   return new Promise((resolve, reject) => {
  //     resolve({success: 1, data: body})
  //   });
  // }
};

/**
 * Middleware `before:update`
 */
calendarSchema
  .pre('save', function(done) {
    done();
  });

const Calendar = mongoose.model('Calendar', calendarSchema);

export default Calendar;
