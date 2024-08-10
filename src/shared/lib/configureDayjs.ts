import dayjs from "dayjs";
import timezone from "dayjs/plugin/timezone";
import utc from "dayjs/plugin/utc";

dayjs.extend(utc);
dayjs.extend(timezone);

dayjs.tz.setDefault("Europe/Moscow");

dayjs.extend((_, dayjsClass) => {
  const oldFormat = dayjsClass.prototype.format;
  dayjsClass.prototype.format = function (formatString) {
    return oldFormat.bind(this)(formatString ?? "YYYY-MM-DD");
  };
});

export default dayjs;
