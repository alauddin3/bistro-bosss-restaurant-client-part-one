import SectionTitle from '../../../components/SectionTitle/SectionTitle';

import featureImage from '../../../assets/home/featured.jpg';
import './Featured.css';


const Featured = () => {
    return (
        <div className='feature-image bg-fixed'>
            <SectionTitle
                heading={'check it out'}
                subHeading={'Featured Item'}>

            </SectionTitle>
            <div className='lg:flex items-center justify-center px-32 py-16 text-white opacity-100'>
                <div className='w-2/5'>
                    <img src={featureImage} />
                </div>
                <div className='lg:ml-10 md:ml-10 w-3/5'>
                    <p>July 22, 2024</p>
                    <p className='uppercase'>Where Can i get sum?</p>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Necessitatibus nam nostrum doloremque temporibus aperiam pariatur iusto explicabo perspiciatis at accusamus!</p>
                    <button className="btn btn-outline btn-secondary">Order Now</button>
                </div>
            </div>
        </div>
    );
};

export default Featured;