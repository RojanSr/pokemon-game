export function getShowingPages(
  page: number,
  totalPage: number
): (number | null)[] {
  const TO_SHOW: (number | null)[] = [];

  if (totalPage <= 7) {
    // Show all pages if total pages are 7 or less
    for (let i = 1; i <= totalPage; i++) {
      TO_SHOW.push(i);
    }
    return TO_SHOW;
  }

  // Always show the first page
  TO_SHOW.push(1);

  if (page < totalPage / 2 && page < 5) {
    // Show pages at the beginning
    for (let i = 2; i <= 5; i++) {
      TO_SHOW.push(i);
    }
    TO_SHOW.push(null);
  } else if (page > totalPage / 2 && page > totalPage - 4) {
    // Show pages at the end
    TO_SHOW.push(null);
    for (let i = totalPage - 4; i < totalPage; i++) {
      TO_SHOW.push(i);
    }
  } else {
    // Show pages around the current page
    TO_SHOW.push(null);
    TO_SHOW.push(page - 1);
    TO_SHOW.push(page);
    TO_SHOW.push(page + 1);
    TO_SHOW.push(null);
  }

  // Always show the last page
  TO_SHOW.push(totalPage);

  return TO_SHOW;
}
