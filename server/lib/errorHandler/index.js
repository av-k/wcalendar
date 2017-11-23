import notifier from 'node-notifier';

export const errorNotification = (err, str, req) =>  {
  notifier.notify({
    title: `Error: ${req.method}::${req.url}`,
    message: str
  });
};
