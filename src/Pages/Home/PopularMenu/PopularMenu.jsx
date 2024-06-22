import React from 'react';
import SectionTitle from '../../../components/SectionTitle/SectionTitle';
import MenuItem from '../../Shared/MenuItem/MenuItem';
import useFoodMenu from '../../../hooks/useFoodMenu';


const PopularMenu = () => {
    const [menu] = useFoodMenu(); // custom hook
    const popular = menu.filter(item => item.category === 'popular');
    
    return (
        <section className='mb-8'>
            <SectionTitle
                heading={'Popular Items'}
                subHeading={'From Our Menu'}>

            </SectionTitle>
            <div className='grid md:grid-cols-2 gap-10'>
                {
                    popular.map(item =>
                        <MenuItem
                            key={item._id}
                            item={item}>
                        </MenuItem>)
                }
            </div>
        </section>
    );
};

export default PopularMenu;