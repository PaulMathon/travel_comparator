export class DateUtils {
  
  static parseDate(timestamp: Date, format = 'default'): String {
    let date, time;
    switch (format) {
      default:
        date = timestamp.getFullYear()+'/'+(timestamp.getMonth()+1)+'/'+timestamp.getDate();
        time = timestamp.getHours() + ":" + timestamp.getMinutes() + ":" + timestamp.getSeconds();
        return `${date}T${time}`;
    }
  }
}
