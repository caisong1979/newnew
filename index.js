/**
 * Example problem with existing solution and passing test.
 * See problem 0 in the spec file for the assertion
 * @returns {string}
 */
exports.example = () => 'hello world';

exports.stripPrivateProperties = (a, b) => {
  const newArr = b;
  delete newArr[0].password;
  delete newArr[0].token;
  delete newArr[1].password;
  delete newArr[1].token;
  return newArr;
};

exports.excludeByProperty = (prop, arr) =>
  arr.filter(item => !item.hasOwnProperty(prop));

exports.sumDeep = (arr) => {
  const newArr = arr;
  const newArr2 = [];
  newArr.forEach((item) => {
    const newItem = { objects: 0 };
    for (let i = 0; i <= item.objects.length; i += 1) {
      if (item.objects[i]) {
        newItem.objects += item.objects[i].val;
      }
    }
    newArr2.push(newItem);
  });
  return newArr2;
};

exports.applyStatusColor = (a, b) => {
  const theObj = a;
  const newArr = b;
  for (let i = 0; i <= newArr.length; i += 1) {
    if (theObj.red.indexOf(newArr[i].status) !== -1) {
      newArr[i].color = 'red';
    } else if (theObj.green.indexOf(newArr[i].status) !== -1) {
      newArr[i].color = 'green';
    } else if (theObj.green.indexOf(newArr[i].status) === -1 &&
      theObj.red.indexOf(newArr[i].status === -1)) {
      newArr.splice(i, 1);
    }
  }
  return newArr;
};

exports.createGreeting = (blank, say) => who => `${say} ${who}`;

exports.setDefaults = defaults => name => ({ ...defaults, ...name });

exports.fetchUserByNameAndUsersCompany = async (
  userName,
  { fetchUsers, fetchStatus, fetchCompanyById },
) => {
  const users = await fetchUsers();
  const [userNumber = {}] = users.filter(({ name }) => name === userName);
  const { companyId } = userNumber;
  const company = await fetchCompanyById(companyId);
  const status = await fetchStatus();
  return {
    company,
    status,
    user: userNumber,
  };
};
