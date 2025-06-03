export const endpoints = {
  auth: {
    reqistration: "/registration",
    login: "/login",
  },

  stats: {
    get: (id: string) => `/stats/${id}`,
    set: (id: string) => `/stats/${id}`,
  },

  months: {
    get: (id: string) => `/months/${id}`,
    set: (id: string) => `/months/${id}`,
    getToday: (id: string) => `/months/today/${id}`,
  },
};
