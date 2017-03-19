 <div class="page-header text-center">
            <h1>Timestamp Microservice API</h1>
        </div>
        <div>
            <h3>Overview:</h3>
            <p> This is a FreeCodeCamp API Project that accepts date( a Natural language date or a unix formatted date ) 
                and return a json response in both the format. If the input is neither it will return <code>null</code> values.
            </p>
            <h3>Example Usage:</h3>
            <code>https://ms-timestamp-api.herokuapp.com/March 18, 2017</code> <br>
            <code>https://ms-timestamp-api.herokuapp.com/March 18 2017</code> <br>
            <code>https://ms-timestamp-api.herokuapp.com/18 March, 2017</code> <br>
            <code>https://ms-timestamp-api.herokuapp.com/18 March 2017</code> <br>
            <code>https://ms-timestamp-api.herokuapp.com/1489795200</code>
            <h3>Example Output:</h3>
            <code>{"unix": "1489795200", "natural" : "March 18, 2017"}</code>
