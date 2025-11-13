import Section from 'components/Section';
import songs from 'data/songs';

function Home(){
    return (
        <div className="grid gap-y-8">
            <Section 
            title="Tocados Recentemente"
            more="/blabla"
            items={songs}
             />
             <Section 
            title="Shows para Experimentar"
            more="/blabla"
            items={songs}
             />
             <Section 
            title="Feito para Você"
            more="/blabla"
            items={songs}
             />          
        </div>
    )
}

export default Home;