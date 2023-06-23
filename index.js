const express = require('express')

const app = express();

const {data}=require('./controller/api')

app.get('/', (req,res)=>{
    res.write("<html>");
    res.write("<head><title>Node</title></head>");
    res.write("<body>");
    res.write('</br>')

    res.write("<h2>Express.js</h2>");
    res.write(
      "<div>1:-Minimalistic and Flexible: Express.js provides a minimalist and unopinionated approach to building web applications. It offers a simple yet powerful set of features and APIs, allowing developers to have fine-grained control over their application's structure and behavior. Express.js doesn't impose strict conventions, giving developers the freedom to choose the tools and libraries they prefer to use alongside it</div>"
    );
    res.write('</br>')
    res.write(
      "<div>2:-Middleware-based Architecture: Express.js uses a middleware-based architecture, which enables developers to add functionality to their applications through middleware functions. Middleware functions are functions that have access to the request and response objects and can modify them or perform additional tasks. This modular approach allows developers to add authentication, logging, error handling, and other features by plugging in middleware functions at specific points in the request-response cycle..</div>"
    );
    res.write('</br>')
    res.write('<h3>What is Express js</h3>')
    res.write(
      "<div>3-Extensive Ecosystem and Community: Express.js benefits from a large and active community, resulting in an extensive ecosystem of plugins, middleware, and extensions. The availability of these resources simplifies common tasks, such as routing, templating, database integration, and API development. It also ensures that developers can find solutions and support for their specific needs. Additionally, the robust community support and extensive documentation make it easier for developers to learn and troubleshoot when working with Express.js.</div>"
    );
    res.write('</br>')
    res.write('</br>')
    res.write("<form method='GET' action='/api/main'>")
 res.write("<button type='submit'  >GETTING API</button>")
    res.write("</form>")
    res.write("</body>");
    res.write("</html>");
    return res.end()
})

app.get('/api/main',data)


app.listen(8000,()=>{
    console.log("Server is running");
})