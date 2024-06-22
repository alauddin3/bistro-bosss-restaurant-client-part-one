import { Link } from 'react-router-dom';
import Cover from '../../Shared/Cover/Cover';
import MenuItem from '../../Shared/MenuItem/MenuItem';

const MenuCategory = ({ items, backgroundImage, title }) => {
    return (
        <div>
            {title && <Cover backgroundImage={backgroundImage} title={title}></Cover>}
            <div className='grid md:grid-cols-2 gap-10 mt-8 p-8'>
                {
                    items.map(item =>
                        <MenuItem
                            key={item._id}
                            item={item}>
                        </MenuItem>)
                }
                <Link to={`/order-food/${title}`}>
                    <button className="btn btn-outline bg-slate-500 border-0 border-b-4 mt-4">Order Now</button>
                </Link>
            </div>
        </div>
    );
};

export default MenuCategory;