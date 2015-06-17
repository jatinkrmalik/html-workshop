window.sessionStorage
    - key/value store
    - Data is LOST once the browser shuts down
    - Date is retained if the user navigates to another site/app and visits back the original app
    - Both key and value should be strings
    - 10MB
API
    - setItem(key, value)
    - getItem(key) //=> value
    - removeItem(key)
    - key(index) //=> key at index
    - clear()
    - length
    
Security
    - Same Origin Policy
    
Sample
=======
Task Manager
    - Add a new task
    - Toggle a task completion status
    - Remove Completed tasks
    - The tasks should be persisted in the client