import { TypeAnimation } from 'react-type-animation'
import { Wrapper } from "react-type-animation"
import GraphemeSplitter from 'grapheme-splitter'

interface Props {
    wrapper: Wrapper;
    classyName: string;
}

export default function IAmA({ wrapper, classyName }: Props) {
    
  const splitter = new GraphemeSplitter();
    return(
        <>
            <div className="sr-only">
                I'm a Web Developer, Writer, and Artist
            </div>
            <TypeAnimation
                aria-hidden="true"
                splitter={(str) => splitter.splitGraphemes(str)}
                sequence={[
                "I'm a Web Developer 💻",
                1500,
                "I'm a Writer 📝",
                1500,
                "I'm an Artist 🎨",
                1500
                ]}
                className={"typewriter-effect " + classyName}
                wrapper={wrapper}
                repeat={Infinity}
                speed={35}
                deletionSpeed={60}
                
            />
        </>
    );
}