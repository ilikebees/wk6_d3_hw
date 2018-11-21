const Traveller = function(journeys) {
  this.journeys = journeys;
};

Traveller.prototype.getJourneyStartLocations = function() {
  const result = this.journeys.map((journey) => {
    const journeyStart = journey.startLocation;
    return journeyStart;
  });
  return result
};

Traveller.prototype.getJourneyEndLocations = function () {
  const result = this.journeys.map((journey) => {
    const journeyEnd = journey.endLocation;
    return journeyEnd;
  });
    return result
};

Traveller.prototype.getJourneysByTransport = function (transport) {
  return this.journeys.filter(function (journey) {
    return journey.transport === transport
  })
};

Traveller.prototype.getJourneysByMinDistance = function (minDistance) {
  return this.journeys.filter(function (journey) {
    return journey.distance >= minDistance
  })

};

Traveller.prototype.calculateTotalDistanceTravelled = function () {
  const allDistances = this.journeys.map((journey) => {
    const journeyDistance = journey.distance;
    return journeyDistance;
  })
  const total = allDistances.reduce((accum, number) => {
    return accum += number;
  }, 0);
  return total;
};

Traveller.prototype.getUniqueModesOfTransport = function () {
  
};


module.exports = Traveller;
