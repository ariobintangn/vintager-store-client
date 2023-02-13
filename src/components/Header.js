import Container from 'react-bootstrap/Container';

export default function Header(){
   return (
    <>
        <h1 style={{fontFamily: "monospace" }} className={"mb-3"}>Welcome To Vintager CMS</h1>
        <Container>
            <img  className={"img-fluid mb-5" } src="/1.png"/>
        </Container>
    </>
    )
}