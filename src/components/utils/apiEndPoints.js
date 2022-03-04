/**
 * @description Endpoints of the API
 * @param {number} userID
 * @param {string} dataType
 * @returns {string}
 */

const apiEndPoints = (userId, dataType) => {
  switch (dataType) {
    case 'mainData':
      return `http://localhost:3000/user/${userId}`;
    case 'activity':
      return `http://localhost:3000/user/${userId}/activity`;
    case 'averageSessions':
      return `http://localhost:3000/user/${userId}/average-sessions`;
    case 'performance':
      return `http://localhost:3000/user/${userId}/performance`;
    default:
      return null;
  }
};

export default apiEndPoints;
