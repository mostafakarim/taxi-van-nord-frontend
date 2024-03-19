import moment from 'moment/dist/moment';
import 'moment/dist/locale/fr';

export default defineNuxtPlugin(() => {
  moment.updateLocale('fr', {
    week: {
      dow: 1,
    },
  });
})