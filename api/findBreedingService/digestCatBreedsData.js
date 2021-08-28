module.exports.digest = async function (data) {
  const countDogFriendly = data.reduce(
    (acc, e) => acc.set(e.dog_friendly, (acc.get(e.dog_friendly) || 0) + 1),
    new Map()
  );
  const dogFriendlyMap = new Map(
    [...countDogFriendly.entries()].filter(([k, v]) => v >= 5)
  );
  const dogFriendlyTopWeighting = Math.max(...dogFriendlyMap.keys());

  const countChildFriendly = data.reduce(
    (acc, e) => acc.set(e.child_friendly, (acc.get(e.child_friendly) || 0) + 1),
    new Map()
  );
  const chidlFriendlyMap = new Map(
    [...countChildFriendly.entries()].filter(([k, v]) => v >= 5)
  );
  const childFriendlyTopWeighting = Math.max(...chidlFriendlyMap.keys());

  const countStrangerFriendly = data.reduce(
    (acc, e) =>
      acc.set(e.stranger_friendly, (acc.get(e.stranger_friendly) || 0) + 1),
    new Map()
  );
  const strangerFriendlyMap = new Map(
    [...countStrangerFriendly.entries()].filter(([k, v]) => v >= 5)
  );
  const strangerFriendlyTopWeighting = Math.max(...strangerFriendlyMap.keys());

  return {
    dogs: data
      .sort((a, b) => {
        return parseInt(b.dog_friendly) - parseInt(a.dog_friendly);
      })
      .filter((cat) => {
        return cat.dog_friendly === dogFriendlyTopWeighting;
      })
      .slice(0, 5),
    children: data
      .sort((a, b) => {
        return parseInt(b.child_friendly) - parseInt(a.child_friendly);
      })
      .filter((cat) => {
        return cat.child_friendly === childFriendlyTopWeighting;
      })
      .slice(0, 5),
    strangers: data
      .sort((a, b) => {
        return parseInt(b.stranger_friendly) - parseInt(a.stranger_friendly);
      })
      .filter((cat) => {
        return cat.stranger_friendly === strangerFriendlyTopWeighting;
      })
      .slice(0, 5),
  };
};
