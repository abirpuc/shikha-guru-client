import React from 'react';
import { useContext } from 'react';
import { Card } from 'react-bootstrap';
import { AuthContex } from '../../Context/AuthContext/AuthProvider';
import './blogs.css'

const Blog = () => {
    const {them} = useContext(AuthContex)
    return (
        <div>
            <Card className={`w-75 me-auto mt-2 mb-2 Larger shadow ${them}`}>
                <Card.Body>
                    <Card.Title className="text-2xl">what is cors?</Card.Title>
                    <Card.Text className="justify">
                    Cross-Origin Resource Sharing (CORS) is an HTTP-header based mechanism that allows a server to indicate any origins (domain, scheme, or port) other than its own from which a browser should permit loading resources. CORS also relies on a mechanism by which browsers make a "preflight" request to the server hosting the cross-origin resource, in order to check that the server will permit the actual request. In that preflight, the browser sends headers that indicate the HTTP method and headers that will be used in the actual request.
                    </Card.Text>
                </Card.Body>
            </Card>
            <Card className={`w-75 me-auto mt-2 mb-2 Larger shadow ${them}`}>
                <Card.Body>
                    <Card.Title className="text-2xl">How does the private route work?</Card.Title>
                    <Card.Text>
                    The react private route component renders child components ( children ) if the user is logged in. If not logged in the user is redirected to the /login page with the return url passed in the location state property
                    </Card.Text>
                </Card.Body>
            </Card>
            <Card className={`w-75 me-auto mt-2 mb-2 Larger shadow ${them}`}>
                <Card.Body>
                    <Card.Title className="text-2xl">Why are you using firebase? What other options do you have to implement authentication?</Card.Title>
                    <Card.Text>
                        <b>Firebase: </b>
                        <p>The Firebase Realtime Database lets you build rich, collaborative applications by allowing secure access to the database directly from client-side code. Data is persisted locally, and even while offline, realtime events continue to fire, giving the end user a responsive experience.</p>
                        <b>Firebase Alternative:</b>
                        <p>
                        Supabase is another open source alternative to Firebase, and the main difference is that it is a SQL database rather than NoSQL. Many users love it because it also offers real-time data, authentication for multiple services, file storage, and more.
                        </p>
                    </Card.Text>
                </Card.Body>
            </Card>
            <Card className={`w-75 me-auto mt-2 mb-2 Larger shadow ${them}`}>
                <Card.Body>
                    <Card.Title className="text-2xl">What is Node? How does Node work?</Card.Title>
                    <Card.Text>
                        <b>Node: </b>
                        <p>Node allows developers to write JavaScript code that runs directly in a computer process itself instead of in a browser.</p>
                        <b>Node Work:</b>
                        <p>
                        It is a used as backend service where javascript works on the server-side of the application. This way javascript is used on both frontend and backend. Node. js runs on chrome v8 engine which converts javascript code into machine code, it is highly scalable, lightweight, fast, and data-intensive
                        </p>
                    </Card.Text>
                </Card.Body>
            </Card>
        </div>
    );
};

export default Blog;