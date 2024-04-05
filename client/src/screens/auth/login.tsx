import ChakraInput from "../../componants/input";

const LogIn = () => {
    return (
        <div className="bg-light p-5" style={{height:"100vh"}} >
            <div className="row row-cols-sm-2 row-cols-md-12 pb-5">
                <div className="col-lg-12 p-2" >
                    <h2 className="d-flex align-items-center justify-content-center" >Log In</h2>
                </div>
            </div>

            <div className="row row-cols-sm-2 row-cols-md-12 pb-5">
                <div className="col p-5" >
                    <h4>Log In</h4>
                    <ChakraInput placeholder="Google Login" />
                    <ChakraInput placeholder="Facebook Login" />
                    <ChakraInput placeholder="Amazone Login" />
                    <ChakraInput placeholder="email" />
                    <ChakraInput placeholder="Password" />
                    <button type="submit" className="btn btn-primary" >LogIn</button>
                </div>
                <div className="col p-5">
                    <h4>New Customer? Register</h4>
                    <p>
                        Sign up for early Sale access plus tailored new arrivals,
                        trends and promotions. To opt out, click unsubscribe in our emails.
                    </p>
                    <button type="submit" className="btn btn-primary" >Register</button>
                </div>
            </div>
        </div>
    );
}

export default LogIn;