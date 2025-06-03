import React, { useEffect, useState } from "react";
import type { Calendar } from "../../../app/types/calendar";
import { api } from "../../../shared/api/api";
import { endpoints } from "../../../shared/api/endpoints";
import { decodeJWT } from "../../../shared/utils/decodeJWT";

const user = decodeJWT(localStorage.getItem("token"));

export const useCalendar = () => {
  const [calendar, setCalendar] = useState<Calendar[] | null>(null);

  const getCalendar = async () => {
    const calendar = await api.get(endpoints.months.get(user.id));
    setCalendar(calendar.data);
  };

  useEffect(() => {
    getCalendar();
  }, [setCalendar]);
  return { calendar };
};
