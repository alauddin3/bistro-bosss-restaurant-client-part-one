import { Parallax } from 'react-parallax';

const Cover = ({ backgroundImage, title }) => {
    return (
        <Parallax
            blur={{ min: -40, max: 50 }}
            bgImage={backgroundImage}
            bgImageAlt="The food menu"
            strength={-200}
        >
            <div className="hero h-[400px]">
                <div className="hero-overlay bg-opacity-60"></div>
                <div className="hero-content text-center text-neutral-content">
                    <div className="max-w-md">
                        <h1 className="mb-5 text-5xl font-bold uppercase">{title}</h1>
                        <p className="mb-5">Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem quasi.</p>

                    </div>
                </div>
            </div>
        </Parallax>

    );
};

export default Cover;