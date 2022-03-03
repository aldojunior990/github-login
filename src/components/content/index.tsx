import { FaGithub } from "react-icons/fa";
import { Container } from "./styles";
import { useSession, signIn, signOut } from "next-auth/react"
import { BiLogOut } from "react-icons/bi";


export function Content() {

    const { data: session } = useSession()


    if (session) {
        return (
            <Container>
                <strong>Welcome <br />  {session.user?.name}</strong>
                <img src="welcome.svg" alt="" />
                <button onClick={() => signOut()}>
                    <BiLogOut />
                </button>
            </Container>
        )
    } else {
        return (
            <Container>
                <strong>Create your <br /> account</strong>
                <p>Come be part of our  amazing <br />
                    community</p>
                <button onClick={() => signIn('github')}>
                    <FaGithub />
                </button>
            </Container>
        )
    }


    return null
}