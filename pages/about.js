function About({ pok }) {
    return (
        <div>
            Us and {pok?.name}!
            <img src={pok?.sprites.front_default} />
        </div>
    )
}

export async function getStaticProps() {
    const res = await fetch("https://pokeapi.co/api/v2/pokemon/charmander");
    const pok = await res.json();

    return {
        props: {
            pok
        }
    }
}

export default About;