const users = [{
    id: 1,
    name: 'Andrew',
    schoolId: 101
  }, {
    id: 2,
    name: 'Jessica',
    schoolId: 999
  }];
  
  const grades = [{
    id: 1,
    schoolId: 101,
    grade: 86
  }, {
    id: 2,
    schoolId: 999,
    grade: 100
  }, {
    id: 3,
    schoolId: 101,
    grade: 80
  }];

  let getUser = (id) => {
    return new Promise((resolve, reject) => {
        const user = users.find((user) => user.id === id);

        if(user) {
            resolve(user)
        } else {
            reject(`Unable to find user with ID ${id}.`)
        }
    })
  }

  let getGrades = (schoolId) => {
      return new Promise((resolve, reject) => {
          resolve(grades.filter((grade) => grade.schoolId === schoolId));
      })
  }

  /* get status using normal promise */
  const getStatus = (userId) => {
      let user;
      return getUser(userId)
        .then(tempUser => {
            user = tempUser;
            return getGrades(user.schoolId)
        })
        .then(grades => {
            let average = 0;
            if(grades.length > 0) {
                average = grades.map(grade => grade.grade).reduce((a, b) => a + b) / grades.length;
            }

            return `${user.name} has a ${average}% in the class.`
        })
  }

  /* get status with async await */
  const getStatusAsync = async (userId) => {
      const user = await getUser(userId);
      const grades = await getGrades(user.schoolId);
      
      let average = 0;
      if(grades.length > 0) {
          average = grades.map((grade) => grade.grade).reduce((a, b) => a + b) / grades.length;
      }
      
      return `${user.name} has a ${average}% in the class.`
  }

  getStatusAsync(1).then(res => console.log(res)).catch(err => console.log(err))


//   getStatus(199).then(res => {
//       console.log(res)
//   }).catch(err => {
//       console.log(err)
//   })