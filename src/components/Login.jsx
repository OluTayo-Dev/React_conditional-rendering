import Home from "./home";

export default function Login(props) {
    const username = "Tony"
    return (
        <>
          <div>Login</div>
          <Home name={username} />
        </>
    );
}