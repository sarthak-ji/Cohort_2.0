- LocalStorage -> Browser ki ek small storage (5-10 MB)

- localStorage.clear(): to clear localStorage.
- localStorage.setItem("key", "value"): to add new item or, overwrite existing ones.
- localStorage.getItem("key"): to get any item.
- locaStorage.removeItem("key"): to remove any item.

- JSON.stringify: array/object -> string
- JSON.parse: string -> array/object


NOTE:
1. 
Axios se jo bhi data aata hai, ya phir aap kabhi bhi kisi api ko call karte hain, toh woh data promise (pending) ke form me aata hai, toh hum async js ka use karenge waha par!

2. 
React: UI banana -> main stack wala saara kaam
useEffect: Ye hook use hota hai kisi bhi task ko side stack me chalane ke liye or, side by side wali cheezon ko chalana like API calling, timer chalana, error handling, animation execution, etc.