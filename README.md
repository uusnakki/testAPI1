# testAPI1
Test application for REST API calls.

App here: https://apifornumbers.herokuapp.com/

Endpoint 1: https://apifornumbers.herokuapp.com/math/multipleprimes  
Endpoint 2: https://apifornumbers.herokuapp.com/math/prime" 

Done with Node.js with some helpful external libraries adn middlewares:
- Nodemon
- Cors
- Axios (frontend)

Frontend:
![image](https://user-images.githubusercontent.com/59486096/155557416-691f4bcd-b6d1-445d-9df6-9868e5b96964.png)


## Guide for usage:

First form: enter a line of numbers to be send to an endpoint 1. Backend sums the values and tells the user if the sum is a prime number or not.

Second form: enter a value (integer) to be send to an endpoint 2. Backend tells if that value is a prime number or not.

### Endpoint 1
![image](https://user-images.githubusercontent.com/59486096/155558436-6ed47535-6435-4538-a516-a5b71a29c6cc.png)

### Endpoint 2
![image](https://user-images.githubusercontent.com/59486096/155558568-ba920ca8-e344-48f2-8755-ee0d46b55fa2.png)

Pros:
- Clear usability and logic behind the application
- Gets the job done

Cons:
- Testing should be done better: E2E testing, unit testing
- Validation can be done better: for example system can handle the input of negative numbers. This should be done that the error thrown when trying these inputs. For now, fraction are validated in frontend.

### Validation of fraction numbers
![Screenshot_1](https://user-images.githubusercontent.com/59486096/155684486-58bd2904-c8a2-4746-b585-d9b9a3ceebe3.png)

### Negative numbers are OK, return null in backend
![image](https://user-images.githubusercontent.com/59486096/155685249-b6790348-6ecc-4fd7-9852-5c84a48d3e9d.png)

![image](https://user-images.githubusercontent.com/59486096/155685199-0524b92d-4ac2-4bf5-a786-6f682784a7bb.png)

