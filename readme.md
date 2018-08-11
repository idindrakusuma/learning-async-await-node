# rangkuman belajar async await

`Async await` merupakan syntax baru pada javascipt. Syntax ini diperkenalkan di ES6. untuk menjalankanyapun tidak semua versi NodeJS bisa. Minimal harus versi `NodeJS > 7`.

`async await` berfungsi sebagai alternatif dari penggunaan promise yang codenya lumayan panjang. pakai async await jadi lebih simple. contoh pemanggilan fungsi async await

```javascript

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
```

```javascript
/* using async await */
const getStatusAsync = async (userId) => {
      const user = await getUser(userId);
      const grades = await getGrades(user.schoolId);
      
      let average = 0;
      if(grades.length > 0) {
          average = grades.map((grade) => grade.grade).reduce((a, b) => a + b) / grades.length;
      }
      
      return `${user.name} has a ${average}% in the class.`
  }
```