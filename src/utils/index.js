export function getBtsInfoFromDataset(dataset) {
  const uniqueBts = [...new Set(dataset.map((x) => x.BTS))];
  const result = [];

  uniqueBts.forEach((bts) => {
    const count = dataset.filter((record) => record.BTS === bts).length;

    result.push({
      name: bts,
      count,
    });
  });

  return result;
}

export function prepareDataForRsrpChart(dataset) {
  const result = [];

  dataset.forEach((x) => {
    const object = {
      x: new Date(x.Time),
      y: Number(x.RSRP),
      BTS: x.BTS,
    };

    result.push(object);
  });

  result.sort((a, b) => new Date(b.x) - new Date(a.x));

  return result;
}

export function prepareDataForBtsTop3Chart(dataset) {
  const result = {
    values: [],
    labels: [],
  };

  const counts = {};

  dataset.forEach((record) => {
    counts[record.BTS] = counts[record.BTS] ? counts[record.BTS] + 1 : 1;
  });

  const countsArray = [];

  Object.keys(counts).forEach((key) => {
    countsArray.push({
      name: key,
      count: counts[key],
    });
  });

  countsArray
    .sort((a, b) => b.count - a.count)
    .slice(0, 3)
    .forEach((x) => {
      result.values.push(x.count);
      result.labels.push(x.name);
    });

  return result;
}

export function prepareDataForRecordsByDayChart(dataset) {
  let datesWithoutTimeArray = [];

  dataset.forEach((x) => {
    const dateWithoutTime = new Date(x.Time).setHours(0, 0, 0, 0);

    datesWithoutTimeArray.push(new Date(dateWithoutTime));
  });

  const dayCounts = {};

  datesWithoutTimeArray.forEach((date) => {
    dayCounts[date] = dayCounts[date] ? dayCounts[date] + 1 : 1;
  });

  const result = [];

  Object.keys(dayCounts).forEach((key) => {
    result.push({
      x: new Date(key),
      y: dayCounts[key],
    });
  });

  return result;
}

export function prepareDataForBtsMap(dataset) {
  const uniqueBtsCoordinates = {};

  dataset.forEach((record) => {
    if (!uniqueBtsCoordinates[record.BTS]) {
      uniqueBtsCoordinates[record.BTS] = [record.Latitude, record.Longitude];
    }
  });

  return Object.values(uniqueBtsCoordinates);
}
