The solution is to move the code that uses the data *inside* the callback function provided to `once()`.
```javascript
const database = firebase.database();
const ref = database.ref('path/to/data');

ref.once('value', (snapshot) => {
  const data = snapshot.val();
  if (data) { //Check if data exists before accessing its properties
    console.log(data.someProperty); 
  }
  else{
    console.log("No data found");
  }
});
```
This ensures that the code accesses `data` only after it has been retrieved from Firebase.  Always check if the data exists to avoid errors.