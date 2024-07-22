function timeAgo(dateString: string): string {
  const now = new Date();
  const past = new Date(dateString);
  const secondsAgo = Math.floor((now.getTime() - past.getTime()) / 1000);

  const minutesAgo = Math.floor(secondsAgo / 60);
  const hoursAgo = Math.floor(minutesAgo / 60);
  const daysAgo = Math.floor(hoursAgo / 24);
  const weeksAgo = Math.floor(daysAgo / 7);
  const monthsAgo = Math.floor(daysAgo / 30);
  const yearsAgo = Math.floor(daysAgo / 365);

  if (secondsAgo < 60) {
    return `${secondsAgo} seconds ago`;
  } else if (minutesAgo < 60) {
    return `${minutesAgo} minutes ago`;
  } else if (hoursAgo < 24) {
    return `${hoursAgo} hours ago`;
  } else if (daysAgo < 7) {
    return `${daysAgo} days ago`;
  } else if (weeksAgo < 4) {
    return `${weeksAgo} weeks ago`;
  } else if (monthsAgo < 12) {
    return `${monthsAgo} months ago`;
  } else {
    return `${yearsAgo} years ago`;
  }
}

export default timeAgo;
