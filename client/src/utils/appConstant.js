/**
 * this should be stored in .env file but for simplicity
 * and in order tp avoid a lot of configuration I kept it here
 */

const BASE_URL = "http://localhost:3000";

const AppPath = {
  room: {
    all: "/rooms",
    detailsPath: "/room/:id",
    details: "/room",
  },
  booking: {
    all: "/user/:userId/bookings",
    detailsPath: "/user/:userId/booking/:id",
    userBookingsPath: "/user/:userId/bookings/",
    new: "/booking/new",
    details: "/booking",
  },
  admin: {
    home: "/admin",
    bookings: "/admin/bookings",
  },
  public: {
    home: "/",
  },
};

const DEFAULT_DATE_FORMAT = "yyyy-MM-dd";

const monthList = [
  "January",
  "February",
  "March",
  "April",
  "May",
  "June",
  "July",
  "August",
  "September",
  "October",
  "November",
  "December",
];

const DUMMY_USER = {
  id: 1,
  name: "Alice Smith",
  email: "alice@example.com",
  phone: "123-456-7890",
};

const FAKE_IMAGE_DATA = [
  "https://images.immediate.co.uk/production/volatile/sites/30/2024/01/30-best-side-dishes-76bad62.jpg",
  "https://ginkgospa.com/cape-town-spas/wp-content/uploads/2016/03/sauna-spa-special.jpg",
  "https://img.freepik.com/free-photo/beautiful-green-park_1417-1447.jpg",
  "https://www.lequipe.fr/_medias/img-photo-jpg/choisir-sa-salle-de-sport-n-est-pas-une-mince-affaire-dr/1500000001493791/137:92,1860:1240-828-552-75/7d418.jpg",
];

export {
  BASE_URL,
  AppPath,
  DEFAULT_DATE_FORMAT,
  monthList,
  DUMMY_USER,
  FAKE_IMAGE_DATA,
};
