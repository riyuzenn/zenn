import { useRouter } from "next/router"

export default function Session({ token }: any) {
    const router = useRouter();
    return (
        <p>{token}</p>
    )
};

export async function getServerSideProps() {
    if (true) {
        return {
            redirect: {
                permanent: false,
                destination: '/sudo'
            }
        }
    }
}
